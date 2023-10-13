var wms_layers = [];

var format_ROAD_0 = new ol.format.GeoJSON();
var features_ROAD_0 = format_ROAD_0.readFeatures(json_ROAD_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ROAD_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ROAD_0.addFeatures(features_ROAD_0);
var lyr_ROAD_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_ROAD_0, 
                style: style_ROAD_0,
                interactive: true,
                title: '<img src="styles/legend/ROAD_0.png" /> ROAD'
            });
var format_TOUR_1 = new ol.format.GeoJSON();
var features_TOUR_1 = format_TOUR_1.readFeatures(json_TOUR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TOUR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TOUR_1.addFeatures(features_TOUR_1);
var lyr_TOUR_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_TOUR_1, 
                style: style_TOUR_1,
                interactive: true,
                title: '<img src="styles/legend/TOUR_1.png" /> TOUR'
            });
var format_RES_2 = new ol.format.GeoJSON();
var features_RES_2 = format_RES_2.readFeatures(json_RES_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RES_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RES_2.addFeatures(features_RES_2);
var lyr_RES_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_RES_2, 
                style: style_RES_2,
                interactive: true,
                title: '<img src="styles/legend/RES_2.png" /> RES'
            });
var format_HOT_3 = new ol.format.GeoJSON();
var features_HOT_3 = format_HOT_3.readFeatures(json_HOT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOT_3.addFeatures(features_HOT_3);
var lyr_HOT_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOT_3, 
                style: style_HOT_3,
                interactive: true,
                title: '<img src="styles/legend/HOT_3.png" /> HOT'
            });
var format_HOSP_4 = new ol.format.GeoJSON();
var features_HOSP_4 = format_HOSP_4.readFeatures(json_HOSP_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HOSP_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HOSP_4.addFeatures(features_HOSP_4);
var lyr_HOSP_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_HOSP_4, 
                style: style_HOSP_4,
                interactive: true,
                title: '<img src="styles/legend/HOSP_4.png" /> HOSP'
            });

lyr_ROAD_0.setVisible(true);lyr_TOUR_1.setVisible(true);lyr_RES_2.setVisible(true);lyr_HOT_3.setVisible(true);lyr_HOSP_4.setVisible(true);
var layersList = [lyr_ROAD_0,lyr_TOUR_1,lyr_RES_2,lyr_HOT_3,lyr_HOSP_4];
lyr_ROAD_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'name': 'name', 'Shape_Leng': 'Shape_Leng', });
lyr_TOUR_1.set('fieldAliases', {'name': 'name', 'state': 'state', 'lga': 'lga', 'location': 'location', 'acess': 'acess', 'easting': 'easting', 'northing': 'northing', });
lyr_RES_2.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'LGA': 'LGA', 'Restaurant': 'Restaurant', 'Field5': 'Field5', 'Field6': 'Field6', });
lyr_HOT_3.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'LGAs': 'LGAs', 'Hotels': 'Hotels', 'Easting': 'Easting', 'Northing': 'Northing', });
lyr_HOSP_4.set('fieldAliases', {'Name': 'Name', 'State': 'State', 'LGA': 'LGA', 'Hospital': 'Hospital', 'Easing': 'Easing', 'Northing': 'Northing', });
lyr_ROAD_0.set('fieldImages', {'OBJECTID': '', 'name': '', 'Shape_Leng': '', });
lyr_TOUR_1.set('fieldImages', {'name': '', 'state': '', 'lga': '', 'location': '', 'acess': '', 'easting': '', 'northing': '', });
lyr_RES_2.set('fieldImages', {'Name': '', 'State': '', 'LGA': '', 'Restaurant': '', 'Field5': '', 'Field6': '', });
lyr_HOT_3.set('fieldImages', {'Name': '', 'State': '', 'LGAs': '', 'Hotels': '', 'Easting': '', 'Northing': '', });
lyr_HOSP_4.set('fieldImages', {'Name': '', 'State': '', 'LGA': '', 'Hospital': '', 'Easing': '', 'Northing': '', });
lyr_ROAD_0.set('fieldLabels', {'OBJECTID': 'no label', 'name': 'header label', 'Shape_Leng': 'no label', });
lyr_TOUR_1.set('fieldLabels', {'name': 'header label', 'state': 'no label', 'lga': 'no label', 'location': 'no label', 'acess': 'no label', 'easting': 'no label', 'northing': 'no label', });
lyr_RES_2.set('fieldLabels', {'Name': 'header label', 'State': 'no label', 'LGA': 'no label', 'Restaurant': 'no label', 'Field5': 'no label', 'Field6': 'no label', });
lyr_HOT_3.set('fieldLabels', {'Name': 'header label', 'State': 'no label', 'LGAs': 'no label', 'Hotels': 'no label', 'Easting': 'no label', 'Northing': 'no label', });
lyr_HOSP_4.set('fieldLabels', {'Name': 'header label', 'State': 'no label', 'LGA': 'no label', 'Hospital': 'no label', 'Easing': 'no label', 'Northing': 'no label', });
lyr_HOSP_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});