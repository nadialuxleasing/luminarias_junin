var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_1 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_LuminariasJunin_2 = new ol.format.GeoJSON();
var features_LuminariasJunin_2 = format_LuminariasJunin_2.readFeatures(json_LuminariasJunin_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LuminariasJunin_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LuminariasJunin_2.addFeatures(features_LuminariasJunin_2);
var lyr_LuminariasJunin_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LuminariasJunin_2, 
                style: style_LuminariasJunin_2,
                popuplayertitle: 'Luminarias Junin ',
                interactive: true,
    title: 'Luminarias Junin <br />\
    <img src="styles/legend/LuminariasJunin_2_0.png" /> LED<br />\
    <img src="styles/legend/LuminariasJunin_2_1.png" /> MH<br />\
    <img src="styles/legend/LuminariasJunin_2_2.png" /> OTRO<br />\
    <img src="styles/legend/LuminariasJunin_2_3.png" /> SAP<br />\
    <img src="styles/legend/LuminariasJunin_2_4.png" /> <br />' });

lyr_GoogleSatellite_0.setVisible(true);lyr_OpenStreetMap_1.setVisible(true);lyr_LuminariasJunin_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OpenStreetMap_1,lyr_LuminariasJunin_2];
lyr_LuminariasJunin_2.set('fieldAliases', {'fid': 'fid', 'ELEMENTO': 'ELEMENTO', 'TECNOLOGIA': 'TECNOLOGIA', 'POTENCIA': 'POTENCIA', 'MARCA': 'MARCA', 'MODELO': 'MODELO', 'SOPORTE': 'SOPORTE', 'FUNCION': 'FUNCION', 'ZONA': 'ZONA', 'OBSERVACIO': 'OBSERVACIO', 'FECHA': 'FECHA', 'STREETVIEW': 'STREETVIEW', 'POT_NUEVA': 'POT_NUEVA', 'Latitud': 'Latitud', 'Longitud': 'Longitud', 'streetview_': 'streetview_', });
lyr_LuminariasJunin_2.set('fieldImages', {'fid': '', 'ELEMENTO': '', 'TECNOLOGIA': '', 'POTENCIA': '', 'MARCA': '', 'MODELO': '', 'SOPORTE': '', 'FUNCION': '', 'ZONA': '', 'OBSERVACIO': '', 'FECHA': '', 'STREETVIEW': '', 'POT_NUEVA': '', 'Latitud': '', 'Longitud': '', 'streetview_': '', });
lyr_LuminariasJunin_2.set('fieldLabels', {'fid': 'hidden field', 'ELEMENTO': 'header label - visible with data', 'TECNOLOGIA': 'header label - visible with data', 'POTENCIA': 'header label - visible with data', 'MARCA': 'hidden field', 'MODELO': 'hidden field', 'SOPORTE': 'header label - visible with data', 'FUNCION': 'header label - visible with data', 'ZONA': 'no label', 'OBSERVACIO': 'hidden field', 'FECHA': 'hidden field', 'STREETVIEW': 'hidden field', 'POT_NUEVA': 'hidden field', 'Latitud': 'hidden field', 'Longitud': 'hidden field', 'streetview_': 'header label - visible with data', });
lyr_LuminariasJunin_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});