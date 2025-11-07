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
var format_Ekologickofunknplochy_3 = new ol.format.GeoJSON();
var features_Ekologickofunknplochy_3 = format_Ekologickofunknplochy_3.readFeatures(json_Ekologickofunknplochy_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Ekologickofunknplochy_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Ekologickofunknplochy_3.addFeatures(features_Ekologickofunknplochy_3);
var lyr_Ekologickofunknplochy_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Ekologickofunknplochy_3, 
                style: style_Ekologickofunknplochy_3,
                popuplayertitle: 'Ekologicko-funkčné plochy',
                interactive: false,
    title: 'Ekologicko-funkčné plochy<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_0.png" /> 1.2.1 Lesy - Bezzásah<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_1.png" /> 1.2.2 Lesy - Bezzásah<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_2.png" /> 1.2.3 Lesy - Bezzásah<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_3.png" /> 1.2.4 Lesy - Bezzásah<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_4.png" /> 2.2.1 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_5.png" /> 2.2.2 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_6.png" /> 2.2.3 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_7.png" /> 2.2.4 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_8.png" /> 2.2.5 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_9.png" /> 2.2.6 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_10.png" /> 2.2.7 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_11.png" /> 2.2.8 Lesy - Prírode blízke hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_12.png" /> 3.2.1 Lesy - Hluchánia oblasť<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_13.png" /> 3.2.2 Lesy - Hluchánia oblasť<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_14.png" /> 4.2.1 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_15.png" /> 4.2.2 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_16.png" /> 4.2.3 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_17.png" /> 4.2.4 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_18.png" /> 4.2.5 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_19.png" /> 4.2.6 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_20.png" /> 4.2.7 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_21.png" /> 4.2.8 Lesy - Bežné hospodárenie<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_22.png" /> 5.2.1 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_23.png" /> 5.2.2 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_24.png" /> 5.2.3 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_25.png" /> 5.2.4 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_26.png" /> 5.2.5 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_27.png" /> 5.2.6 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_28.png" /> 5.2.8 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_29.png" /> 5.2.9 Trvalé trávne porasty<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_30.png" /> 6.2.1 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_31.png" /> 6.2.10 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_32.png" /> 6.2.11 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_33.png" /> 6.2.13 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_34.png" /> 6.2.14 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_35.png" /> 6.2.15 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_36.png" /> 6.2.2 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_37.png" /> 6.2.3 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_38.png" /> 6.2.4 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_39.png" /> 6.2.5 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_40.png" /> 6.2.6 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_41.png" /> 6.2.7 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_42.png" /> 6.2.8 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_43.png" /> 6.2.9 Rašeliniská a mokrade<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_44.png" /> 7.2.1 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_45.png" /> 7.2.2 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_46.png" /> 7.2.3 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_47.png" /> 7.2.4 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_48.png" /> 7.2.5 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_49.png" /> 7.2.6 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_50.png" /> 7.2.7 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_51.png" /> 7.2.8 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_52.png" /> 7.2.9 Brehové porasty a vodné toky<br />\
    <img src="styles/legend/Ekologickofunknplochy_3_53.png" /> 9 Ostatné plochy<br />' });
var format_HraniceCHKOKysuce_4 = new ol.format.GeoJSON();
var features_HraniceCHKOKysuce_4 = format_HraniceCHKOKysuce_4.readFeatures(json_HraniceCHKOKysuce_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HraniceCHKOKysuce_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HraniceCHKOKysuce_4.addFeatures(features_HraniceCHKOKysuce_4);
var lyr_HraniceCHKOKysuce_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HraniceCHKOKysuce_4, 
                style: style_HraniceCHKOKysuce_4,
                popuplayertitle: 'Hranice CHKO Kysuce',
                interactive: false,
                title: '<img src="styles/legend/HraniceCHKOKysuce_4.png" /> Hranice CHKO Kysuce'
            });
var format_zemiaeurpskehovznamu_5 = new ol.format.GeoJSON();
var features_zemiaeurpskehovznamu_5 = format_zemiaeurpskehovznamu_5.readFeatures(json_zemiaeurpskehovznamu_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_zemiaeurpskehovznamu_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_zemiaeurpskehovznamu_5.addFeatures(features_zemiaeurpskehovznamu_5);
var lyr_zemiaeurpskehovznamu_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_zemiaeurpskehovznamu_5, 
                style: style_zemiaeurpskehovznamu_5,
                popuplayertitle: 'Územia európskeho významu',
                interactive: false,
                title: '<img src="styles/legend/zemiaeurpskehovznamu_5.png" /> Územia európskeho významu'
            });

lyr_OrtofototosnmkyZBGISGK_0.setVisible(false);lyr_DMR50TieovanrelifZBGISGK_1.setVisible(true);lyr_PodkladovmapaCartoLight_2.setVisible(true);lyr_Ekologickofunknplochy_3.setVisible(true);lyr_HraniceCHKOKysuce_4.setVisible(true);lyr_zemiaeurpskehovznamu_5.setVisible(true);
var layersList = [lyr_OrtofototosnmkyZBGISGK_0,lyr_DMR50TieovanrelifZBGISGK_1,lyr_PodkladovmapaCartoLight_2,lyr_Ekologickofunknplochy_3,lyr_HraniceCHKOKysuce_4,lyr_zemiaeurpskehovznamu_5];
lyr_Ekologickofunknplochy_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'KOD_UEV', 'NAZOV_UEV': 'NAZOV_UEV', 'POSOBNOST': 'POSOBNOST', 'na_vode': 'na_vode', 'EFP': 'Ekologicko-funkčné plochy', 'Manazment': 'Menežmentové opatrenia', 'Biotop_spo': 'Biotop', });
lyr_HraniceCHKOKysuce_4.set('fieldAliases', {'HECTARES': 'HECTARES', 'NAZOV': 'NAZOV', 'VYM_CHKO': 'VYM_CHKO', 'VYM_HA': 'VYM_HA', 'AREA': 'AREA', 'PERIMETER': 'PERIMETER', });
lyr_zemiaeurpskehovznamu_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'KOD_UEV': 'Kód ÚEV', 'NAZOV_UEV': 'Názov ÚEV', 'POSOBNOST': 'Pôsobnosť', 'VYMERA_HA': 'Výmera v ha', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'na_vode': 'na_vode', });
lyr_Ekologickofunknplochy_3.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'na_vode': 'TextEdit', 'EFP': 'TextEdit', 'Manazment': 'TextEdit', 'Biotop_spo': 'TextEdit', });
lyr_HraniceCHKOKysuce_4.set('fieldImages', {'HECTARES': 'TextEdit', 'NAZOV': 'TextEdit', 'VYM_CHKO': 'TextEdit', 'VYM_HA': 'TextEdit', 'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', });
lyr_zemiaeurpskehovznamu_5.set('fieldImages', {'fid': 'TextEdit', 'OBJECTID': 'TextEdit', 'KOD_UEV': 'TextEdit', 'NAZOV_UEV': 'TextEdit', 'POSOBNOST': 'TextEdit', 'VYMERA_HA': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'na_vode': 'TextEdit', });
lyr_Ekologickofunknplochy_3.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'hidden field', 'POSOBNOST': 'hidden field', 'na_vode': 'hidden field', 'EFP': 'header label - visible with data', 'Manazment': 'hidden field', 'Biotop_spo': 'hidden field', });
lyr_HraniceCHKOKysuce_4.set('fieldLabels', {'HECTARES': 'no label', 'NAZOV': 'no label', 'VYM_CHKO': 'no label', 'VYM_HA': 'no label', 'AREA': 'no label', 'PERIMETER': 'no label', });
lyr_zemiaeurpskehovznamu_5.set('fieldLabels', {'fid': 'hidden field', 'OBJECTID': 'hidden field', 'KOD_UEV': 'hidden field', 'NAZOV_UEV': 'header label - visible with data', 'POSOBNOST': 'hidden field', 'VYMERA_HA': 'hidden field', 'Shape_Leng': 'hidden field', 'Shape_Area': 'hidden field', 'na_vode': 'hidden field', });
lyr_zemiaeurpskehovznamu_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});