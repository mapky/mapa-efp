/*
 * Tlač mapy – mapa-efp
 * A4 landscape / aktuálny rozsah mapy / legenda / severka / mierka
 *
 * Súbor je oddelený od qgis2web.js, takže ho môžeš používať
 * aj po novom exporte z QGIS2Web.
 */

(function () {
    'use strict';

    function esc(value) {
        return String(value ?? '')
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#039;');
    }

    function stripHtml(html) {
        const tmp = document.createElement('div');
        tmp.innerHTML = html || '';
        return tmp.textContent || tmp.innerText || '';
    }

    function getLayerLegendItems(layer, output) {
        if (!layer || !layer.getVisible || !layer.getVisible()) return;

        const children = layer.getLayers ? layer.getLayers().getArray() : null;
        if (children && children.length) {
            children.forEach(child => getLayerLegendItems(child, output));
            return;
        }

        const title = layer.get('title');
        if (!title) return;

        // QGIS2Web ukladá legendu v title ako HTML.
        const wrapper = document.createElement('div');
        wrapper.innerHTML = title;

        const images = wrapper.querySelectorAll('img');
        const text = stripHtml(title).replace(/\s+/g, ' ').trim();

        // Pri vrstve s legendou použijeme jej jednotlivé položky.
        if (images.length) {
            images.forEach(img => {
                let label = '';
                const parentText = img.parentElement ? img.parentElement.textContent : '';
                label = parentText.replace(/\s+/g, ' ').trim();

                // QGIS2Web často má img + text v rovnakom elemente.
                if (!label) label = text;

                output.push({
                    type: 'image',
                    src: img.getAttribute('src'),
                    label: label
                });
            });
        } else if (text) {
            output.push({
                type: 'text',
                label: text
            });
        }
    }

    function getLegendHtml() {
        const items = [];

        if (typeof map === 'undefined') return '';

        map.getLayers().getArray().forEach(layer => {
            getLayerLegendItems(layer, items);
        });

        // Odstránime duplicity podľa kombinácie obrázok + text.
        const seen = new Set();
        const unique = items.filter(item => {
            const key = (item.src || '') + '|' + (item.label || '');
            if (seen.has(key)) return false;
            seen.add(key);
            return true;
        });

        if (!unique.length) {
            return '<div class="print-no-legend">Žiadne viditeľné vrstvy s legendou.</div>';
        }

        return unique.map(item => {
            if (item.type === 'image') {
                return `
                    <div class="print-legend-item">
                        <img src="${esc(item.src)}" alt="">
                        <span>${esc(item.label)}</span>
                    </div>`;
            }
            return `<div class="print-legend-text">${esc(item.label)}</div>`;
        }).join('');
    }

    function getScaleHtml() {
        const scale = document.querySelector('.ol-scale-line-inner');
        if (!scale) return 'Mierka: podľa aktuálneho zobrazenia';

        return `
            <div class="print-scale-wrap">
                <div class="print-scale-line"></div>
                <div class="print-scale-label">${esc(scale.textContent.trim())}</div>
            </div>`;
    }

    function getMapCanvasImage() {
        /*
         * OpenLayers môže mať viac canvasov (napr. viac vrstiev).
         * Pokúsime sa ich zlúčiť do jedného obrázka.
         *
         * Ak externý WMS server nepovoľuje CORS, prehliadač nedovolí
         * canvas exportovať. V takom prípade použijeme priamo mapové
         * canvas prvky v tlačovom layout-e.
         */
        const canvases = Array.from(document.querySelectorAll('#map canvas'))
            .filter(c => c.width > 0 && c.height > 0);

        if (!canvases.length) return null;

        const width = Math.max(...canvases.map(c => c.width));
        const height = Math.max(...canvases.map(c => c.height));

        const out = document.createElement('canvas');
        out.width = width;
        out.height = height;

        const ctx = out.getContext('2d');

        try {
            canvases.forEach(canvas => {
                const opacity = canvas.parentElement &&
                    canvas.parentElement.style.opacity
                    ? parseFloat(canvas.parentElement.style.opacity)
                    : 1;

                ctx.globalAlpha = Number.isFinite(opacity) ? opacity : 1;
                ctx.drawImage(canvas, 0, 0);
            });
            ctx.globalAlpha = 1;
            return out.toDataURL('image/png');
        } catch (e) {
            console.warn('Mapa obsahuje canvas, ktorý nie je možné exportovať:', e);
            return null;
        }
    }

    function buildPrintWindow() {
        const title = document.getElementById('print-title-input').value.trim()
            || 'Mapa EFP';

        const source = document.getElementById('print-source-input').value.trim()
            || 'Zdroj údajov: QGIS2Web / QGIS';

        const date = new Date().toLocaleDateString('sk-SK');

        const printWindow = document.getElementById('print-window');
        const printMap = document.getElementById('print-map');

        document.getElementById('print-title').textContent = title;
        document.getElementById('print-source').textContent = source;
        document.getElementById('print-date').textContent = date;

        // Legenda
        const legendEnabled = document.getElementById('print-legend-check').checked;
        document.getElementById('print-legend').innerHTML =
            legendEnabled ? getLegendHtml() : '';

        document.getElementById('print-legend-box').style.display =
            legendEnabled ? 'block' : 'none';

        // Mierka
        const scaleEnabled = document.getElementById('print-scale-check').checked;
        document.getElementById('print-scale').innerHTML =
            scaleEnabled ? getScaleHtml() : '';

        document.getElementById('print-scale-box').style.display =
            scaleEnabled ? 'block' : 'none';

        // Severka
        document.getElementById('print-north').style.display =
            document.getElementById('print-north-check').checked
                ? 'flex' : 'none';

        // Rám
        printMap.classList.toggle(
            'no-map-border',
            !document.getElementById('print-frame-check').checked
        );

        // Najprv sa pokúsime vložiť obraz mapy.
        const dataUrl = getMapCanvasImage();

        if (dataUrl) {
            printMap.innerHTML =
                `<img class="print-map-image" src="${dataUrl}" alt="Mapa">`;
        } else {
            /*
             * Fallback – necháme mapové canvas prvky v layout-e.
             * Toto je užitočné hlavne pri WMS podkladoch.
             */
            const mapElement = document.getElementById('map');
            printMap.innerHTML = '';
            Array.from(mapElement.querySelectorAll('canvas')).forEach(canvas => {
                const clone = canvas.cloneNode(true);
                clone.className = 'print-map-canvas';
                printMap.appendChild(clone);
            });
        }

        printWindow.classList.add('print-window-ready');
    }

    function openPrintDialog() {
        document.getElementById('print-modal').classList.add('is-open');
        buildPrintWindow();
    }

    function closePrintDialog() {
        document.getElementById('print-modal').classList.remove('is-open');
    }

    function printMap() {
        buildPrintWindow();

        // Dáme OpenLayers/DOM čas dokončiť vykreslenie.
        setTimeout(() => {
            window.print();
        }, 350);
    }

    function addPrintButton() {
        if (document.getElementById('print-map-button')) return;

        const button = document.createElement('button');
        button.id = 'print-map-button';
        button.className = 'print-map-control';
        button.type = 'button';
        button.title = 'Tlač mapy';
        button.innerHTML = '🖨️';
        button.addEventListener('click', openPrintDialog);

        // Umiestnenie medzi ovládacie prvky vľavo hore.
        const container = document.getElementById('top-left-container');
        if (container) {
            container.appendChild(button);
        } else {
            document.body.appendChild(button);
        }
    }

    function createPrintModal() {
        if (document.getElementById('print-modal')) return;

        const modal = document.createElement('div');
        modal.id = 'print-modal';
        modal.innerHTML = `
            <div class="print-dialog">
                <div class="print-dialog-header">
                    <strong>🖨️ Tlač mapy</strong>
                    <button type="button" id="print-close" class="print-close">×</button>
                </div>

                <div class="print-dialog-body">
                    <div class="print-options">
                        <label>
                            Nadpis mapy
                            <input id="print-title-input"
                                   type="text"
                                   value="Program starostlivosti – Ekologicko-funkčné priestory">
                        </label>

                        <label>
                            Zdroj údajov
                            <input id="print-source-input"
                                   type="text"
                                   value="Zdroj údajov: QGIS2Web / QGIS">
                        </label>

                        <div class="print-checks">
                            <label><input type="checkbox" id="print-frame-check" checked> Rám mapy</label>
                            <label><input type="checkbox" id="print-north-check" checked> Severná šípka</label>
                            <label><input type="checkbox" id="print-scale-check" checked> Mierka</label>
                            <label><input type="checkbox" id="print-legend-check" checked> Legenda</label>
                        </div>

                        <div class="print-format-info">
                            <strong>Formát:</strong> A4 na šírku
                        </div>
                    </div>

                    <div class="print-preview-wrap">
                        <div id="print-window" class="print-window">
                            <div class="print-title" id="print-title"></div>

                            <div id="print-map" class="print-map">
                                <div class="print-map-placeholder">
                                    Náhľad mapy
                                </div>

                                <div id="print-north" class="print-north">
                                    <span class="north-arrow">▲</span>
                                    <span>N</span>
                                </div>
                            </div>

                            <div class="print-bottom">
                                <div id="print-legend-box" class="print-legend-box">
                                    <div class="print-box-title">LEGENDA</div>
                                    <div id="print-legend"></div>
                                </div>

                                <div id="print-scale-box" class="print-scale-box">
                                    <div class="print-box-title">MIERKA</div>
                                    <div id="print-scale"></div>
                                </div>
                            </div>

                            <div class="print-footer">
                                <span id="print-source"></span>
                                <span id="print-date"></span>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="print-dialog-footer">
                    <button type="button" id="print-cancel" class="print-btn secondary">
                        Zrušiť
                    </button>
                    <button type="button" id="print-refresh" class="print-btn secondary">
                        Obnoviť náhľad
                    </button>
                    <button type="button" id="print-submit" class="print-btn primary">
                        🖨️ Tlač / Uložiť PDF
                    </button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('print-close').addEventListener('click', closePrintDialog);
        document.getElementById('print-cancel').addEventListener('click', closePrintDialog);
        document.getElementById('print-refresh').addEventListener('click', buildPrintWindow);
        document.getElementById('print-submit').addEventListener('click', printMap);

        modal.addEventListener('click', function (event) {
            if (event.target === modal) closePrintDialog();
        });

        [
            'print-title-input',
            'print-source-input',
            'print-frame-check',
            'print-north-check',
            'print-scale-check',
            'print-legend-check'
        ].forEach(id => {
            const el = document.getElementById(id);
            el.addEventListener('change', buildPrintWindow);
            el.addEventListener('input', buildPrintWindow);
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        createPrintModal();

        // QGIS2Web vytvára mapu v externom JS, preto chvíľu počkáme.
        const timer = setInterval(function () {
            if (typeof map !== 'undefined' &&
                document.getElementById('top-left-container')) {
                clearInterval(timer);
                addPrintButton();
            }
        }, 100);

        setTimeout(() => clearInterval(timer), 10000);
    });

    // Pred tlačou odstránime modálne okno z tlačového výstupu.
    window.addEventListener('beforeprint', function () {
        document.body.classList.add('printing-map');
    });

    window.addEventListener('afterprint', function () {
        document.body.classList.remove('printing-map');
    });
})();
