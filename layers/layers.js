var wms_layers = [];

var lyr_OrtofototosnmkyZBGISGK_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_ortofoto_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "1",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'Ortofototo snímky - ZBGIS GKÚ',
                            popuplayertitle: 'Ortofototo snímky - ZBGIS GKÚ',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_OrtofototosnmkyZBGISGK_0, 0]);
var lyr_DMR50TieovanrelifZBGISGK_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://zbgisws.skgeodesy.sk/zbgis_dmr_wms/service.svc/get",
                              attributions: ' ',
                              params: {
                                "LAYERS": "0",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: 'DMR 5.0 - Tieňovaný reliéf - ZBGIS GKÚ',
                            popuplayertitle: 'DMR 5.0 - Tieňovaný reliéf - ZBGIS GKÚ',
                            type: '',
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_DMR50TieovanrelifZBGISGK_1, 0]);

        var lyr_PodkladovmapaCartoLight_2 = new ol.layer.Tile({
            'title': 'Podkladová mapa - Carto Light',
            'opacity': 0.800000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });

        var lyr_PorastovmapaNLC_3 = new ol.layer.Tile({
            'title': 'Porastová mapa NLC',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://gis.nlcsk.org/mgs/rest/services/BackgroundMaps/Porastova_mapa_web/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Ekologickofunknpriestory_4 = new ol.format.GeoJSON();
var features_Ekologickofunknpriestory_4 = format_Ekologickofunknpriestory_4.readFeatures(json_Ekologickofunknpriestory_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ekologickofunknpriestory_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ekologickofunknpriestory_4.addFeatures(features_Ekologickofunknpriestory_4);
var lyr_Ekologickofunknpriestory_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ekologickofunknpriestory_4, 
                style: style_Ekologickofunknpriestory_4,
                popuplayertitle: 'Ekologicko-funkčné priestory',
                interactive: true,
    title: 'Ekologicko-funkčné priestory<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_0.png" /> Lesy - Bezzásah<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_1.png" /> Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_2.png" /> Lesy - Hluchánia oblasť<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_3.png" /> Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_4.png" /> Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_5.png" /> Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_6.png" /> Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknpriestory_4_7.png" /> Ostatné plochy<br />' });
var format_HraniceCHKOKysuce_5 = new ol.format.GeoJSON();
var features_HraniceCHKOKysuce_5 = format_HraniceCHKOKysuce_5.readFeatures(json_HraniceCHKOKysuce_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HraniceCHKOKysuce_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HraniceCHKOKysuce_5.addFeatures(features_HraniceCHKOKysuce_5);
var lyr_HraniceCHKOKysuce_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HraniceCHKOKysuce_5, 
                style: style_HraniceCHKOKysuce_5,
                popuplayertitle: 'Hranice CHKO Kysuce',
                interactive: false,
                title: '<img src="styles/legend/HraniceCHKOKysuce_5.png" /> Hranice CHKO Kysuce'
            });
var format_zemiaeurpskehovznamu_6 = new ol.format.GeoJSON();
var features_zemiaeurpskehovznamu_6 = format_zemiaeurpskehovznamu_6.readFeatures(json_zemiaeurpskehovznamu_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zemiaeurpskehovznamu_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zemiaeurpskehovznamu_6.addFeatures(features_zemiaeurpskehovznamu_6);
var lyr_zemiaeurpskehovznamu_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zemiaeurpskehovznamu_6, 
                style: style_zemiaeurpskehovznamu_6,
                popuplayertitle: 'Územia európskeho významu',
                interactive: false,
                title: '<img src="styles/legend/zemiaeurpskehovznamu_6.png" /> Územia európskeho významu'
            });

lyr_OrtofototosnmkyZBGISGK_0.setVisible(false);lyr_DMR50TieovanrelifZBGISGK_1.setVisible(true);lyr_PodkladovmapaCartoLight_2.setVisible(true);lyr_PorastovmapaNLC_3.setVisible(false);lyr_Ekologickofunknpriestory_4.setVisible(true);lyr_HraniceCHKOKysuce_5.setVisible(true);lyr_zemiaeurpskehovznamu_6.setVisible(true);
var layersList = [lyr_OrtofototosnmkyZBGISGK_0,lyr_DMR50TieovanrelifZBGISGK_1,lyr_PodkladovmapaCartoLight_2,lyr_PorastovmapaNLC_3,lyr_Ekologickofunknpriestory_4,lyr_HraniceCHKOKysuce_5,lyr_zemiaeurpskehovznamu_6];
lyr_Ekologickofunknpriestory_4.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'KOD_UEV', 'NAZOV_UEV': 'NAZOV_UEV', 'POSOBNOST': 'POSOBNOST', 'na_vode': 'na_vode', 'EFP': 'Ekologicko-funkčné plochy', 'Manazment': 'Menežmentové opatrenia', 'Biotop_spo': 'Biotop', });
lyr_HraniceCHKOKysuce_5.set('fieldAliases', {'HECTARES': 'HECTARES', 'NAZOV': 'NAZOV', 'VYM_CHKO': 'VYM_CHKO', 'VYM_HA': 'VYM_HA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_zemiaeurpskehovznamu_6.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'Kód ÚEV', 'NAZOV_UEV': 'Názov ÚEV', 'POSOBNOST': 'Pôsobnosť', 'VYMERA_HA': 'Výmera v ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'na_vode': 'na_vode', });
lyr_Ekologickofunknpriestory_4.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'na_vode': 'TextEdit', 'EFP': 'TextEdit', 'Manazment': 'TextEdit', 'Biotop_spo': 'TextEdit', });
lyr_HraniceCHKOKysuce_5.set('fieldImages', {'HECTARES': 'TextEdit', 'NAZOV': 'TextEdit', 'VYM_CHKO': 'TextEdit', 'VYM_HA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_zemiaeurpskehovznamu_6.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'VYMERA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'na_vode': 'TextEdit', });
lyr_Ekologickofunknpriestory_4.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'hidden field', 'POSOBNOST': 'hidden field', 'na_vode': 'hidden field', 'EFP': 'header label - visible with data', 'Manazment': 'hidden field', 'Biotop_spo': 'hidden field', });
lyr_HraniceCHKOKysuce_5.set('fieldLabels', {'HECTARES': 'no label', 'NAZOV': 'no label', 'VYM_CHKO': 'no label', 'VYM_HA': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_zemiaeurpskehovznamu_6.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'header label - visible with data', 'POSOBNOST': 'hidden field', 'VYMERA_HA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'na_vode': 'hidden field', });
lyr_zemiaeurpskehovznamu_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});