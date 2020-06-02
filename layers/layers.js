
var wms_layers = [];

var lyr_GoogleSatellite_0 = new ol.layer.Group({
    'title': 'Base Maps',
    layers: [
        new ol.layer.Tile({
            title: 'Terrain',
			type: 'base',
            source: new ol.source.TileImage({ url: 'https://mt.google.com/vt/lyrs=p&x={x}&y={y}&z={z}' })            
        }),
        new ol.layer.Tile({
            title: 'Satellite',
			type: 'base',
            source: new ol.source.TileImage({ url: 'https://mt.google.com/vt/lyrs=s&x={x}&y={y}&z={z}' })           
        }),
        new ol.layer.Tile({
            title: 'Roadmap',
			type: 'base',
            source: new ol.source.TileImage({ url: 'https://mt.google.com/vt/lyrs=m&x={x}&y={y}&z={z}' })
        }),
        new ol.layer.Tile({
            title: 'Hybrid',
			type: 'base',
            source: new ol.source.TileImage({ url: 'https://mt.google.com/vt/lyrs=y&x={x}&y={y}&z={z}' })
        }),
    ]
});

var format_dst_4 = new ol.format.GeoJSON();

var features_dst_4 = format_dst_4.readFeatures(json_dst_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_dst_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_dst_4.addFeatures(features_dst_4);
var lyr_dst_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_dst_4, 
                style: style_dst_4,
                interactive: true,
                title: '<img src="styles/legend/dst_4.png" /> District_Bud'
            });
var format_River_5 = new ol.format.GeoJSON();
var features_River_5 = format_River_5.readFeatures(json_River_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_River_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_River_5.addFeatures(features_River_5);
var lyr_River_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_River_5, 
                style: style_River_5,
                interactive: true,
                title: '<img src="styles/legend/River_5.png" /> River'
            });
var format_Riv = new ol.format.GeoJSON();
var features_Riv = format_Riv.readFeatures(json_Riv, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Riv = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Riv.addFeatures(features_Riv);
var lyr_Riv = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Riv, 
                style: style_Riv,
                interactive: true,
                title: '<img src="styles/legend/River_5.png" /> Drain'
            });			
var format_Water_Sample_Points_6 = new ol.format.GeoJSON();
var features_Water_Sample_Points_6 = format_Water_Sample_Points_6.readFeatures(json_Water_Sample_Points_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Water_Sample_Points_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Sample_Points_6.addFeatures(features_Water_Sample_Points_6);
var lyr_Water_Sample_Points_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Water_Sample_Points_6, 
                style: style_Water_Sample_Points_6,
                interactive: true,
                title: '<img src="styles/legend/Water_Sample_Points_6.png" />Sampleing Point'
            });
var format_BMW_Sites_7 = new ol.format.GeoJSON();
var features_BMW_Sites_7 = format_BMW_Sites_7.readFeatures(json_BMW_Sites_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BMW_Sites_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BMW_Sites_7.addFeatures(features_BMW_Sites_7);
var lyr_BMW_Sites_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_BMW_Sites_7, 
                style: style_BMW_Sites_7,
                interactive: true,
                title: '<img src="styles/legend/BMW_Sites_7.png" /> irrig_point'
            });
var format_CETP_8 = new ol.format.GeoJSON();
var features_CETP_8 = format_CETP_8.readFeatures(json_CETP_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CETP_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CETP_8.addFeatures(features_CETP_8);
var lyr_CETP_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CETP_8, 
                style: style_CETP_8,
                interactive: true,
                title: '<img src="styles/legend/CETP_8.png" /> CETP'
            });
var format_STP_9 = new ol.format.GeoJSON();
var features_STP_9 = format_STP_9.readFeatures(json_STP_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STP_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STP_9.addFeatures(features_STP_9);
var lyr_STP_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_STP_9, 
                style: style_STP_9,
                interactive: true,
                title: '<img src="styles/legend/STP_9.png" /> STP'
            });
var layer = new ol.layer.Group({
    title: 'Layers',
	layers: [lyr_dst_4, lyr_River_5, lyr_Riv, lyr_Water_Sample_Points_6, lyr_BMW_Sites_7, lyr_CETP_8, lyr_STP_9]
});
lyr_dst_4.setVisible(true);lyr_River_5.setVisible(true);lyr_Riv.setVisible(true);lyr_Water_Sample_Points_6.setVisible(true);lyr_BMW_Sites_7.setVisible(true);lyr_CETP_8.setVisible(true);lyr_STP_9.setVisible(true);
var layersList = [lyr_dst_4,lyr_River_5,lyr_Riv,lyr_Water_Sample_Points_6,lyr_BMW_Sites_7,lyr_CETP_8,lyr_STP_9];
var layersList = [lyr_GoogleSatellite_0, layer];
lyr_dst_4.set('fieldAliases', {'NAME': 'NAME', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', });
lyr_River_5.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', });
lyr_Riv.set('fieldAliases', {'Name': 'Name', 'Shape_Leng': 'Shape_Leng', });
lyr_Water_Sample_Points_6.set('fieldAliases', {'Name': 'Name', 'RegionName': 'RegionName', });
lyr_BMW_Sites_7.set('fieldAliases', {});
lyr_CETP_8.set('fieldAliases', {});
lyr_STP_9.set('fieldAliases', {'Sr__No': 'Sr__No', 'Region': 'Region', 'District': 'District', 'STP_Name': 'STP_Name', 'Town__City': 'Town__City', 'Deptt_': 'Deptt_', 'Capacity__': 'Capacity__', 'Ultimate_d': 'Ultimate_d', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Date_of_Co': 'Date_of_Co', 'Status': 'Status', 'Mobile_No_': 'Mobile_No_', 'Methane_cp': 'Methane_cp', 'Dual_pipin': 'Dual_pipin', 'Online_Dev': 'Online_Dev', 'Consent_St': 'Consent_St', 'Technology': 'Technology', 'Upgradatio': 'Upgradatio', 'Installati': 'Installati', 'Installa_1': 'Installa_1', 'CTO_Y_N': 'CTO_Y_N', 'effluent_r': 'effluent_r', 'BOD': 'BOD', 'COD': 'COD', 'PH': 'PH', 'TSS': 'TSS', 'Oil___Grea': 'Oil___Grea', 'Remarks': 'Remarks', 'Report_No_': 'Report_No_', 'Compliance': 'Compliance', });
lyr_dst_4.set('fieldImages', {'NAME': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_River_5.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Riv.set('fieldImages', {'Name': 'TextEdit', 'Shape_Leng': 'TextEdit', });
lyr_Water_Sample_Points_6.set('fieldImages', {'Name': '', 'RegionName': '', });
lyr_BMW_Sites_7.set('fieldImages', {});
lyr_CETP_8.set('fieldImages', {});
lyr_STP_9.set('fieldImages', {'Sr__No': '', 'Region': '', 'District': '', 'STP_Name': '', 'Town__City': '', 'Deptt_': '', 'Capacity__': '', 'Ultimate_d': '', 'Latitude': '', 'Longitude': '', 'Date_of_Co': '', 'Status': '', 'Mobile_No_': '', 'Methane_cp': '', 'Dual_pipin': '', 'Online_Dev': '', 'Consent_St': '', 'Technology': '', 'Upgradatio': '', 'Installati': '', 'Installa_1': '', 'CTO_Y_N': '', 'effluent_r': '', 'BOD': '', 'COD': '', 'PH': '', 'TSS': '', 'Oil___Grea': '', 'Remarks': '', 'Report_No_': '', 'Compliance': '', });
lyr_dst_4.set('fieldLabels', {'NAME': 'no label', 'Shape_Leng': 'no label', 'Shape_Area': 'no label', });
lyr_River_5.set('fieldLabels', {'Name': 'inline label', 'Shape_Leng': 'inline label', });
lyr_Riv.set('fieldLabels', {'Name': 'inline label', 'Shape_Leng': 'inline label', });
lyr_Water_Sample_Points_6.set('fieldLabels', {'Name': 'inline label', 'RegionName': 'inline label', });
lyr_BMW_Sites_7.set('fieldLabels', {});
lyr_CETP_8.set('fieldLabels', {});
lyr_STP_9.set('fieldLabels', {'Sr__No': 'inline label', 'Region': 'inline label', 'District': 'inline label', 'STP_Name': 'inline label', 'Town__City': 'inline label', 'Deptt_': 'inline label', 'Capacity__': 'inline label', 'Ultimate_d': 'inline label', 'Latitude': 'inline label', 'Longitude': 'inline label', 'Date_of_Co': 'inline label', 'Status': 'inline label', 'Mobile_No_': 'inline label', 'Methane_cp': 'inline label', 'Dual_pipin': 'inline label', 'Online_Dev': 'inline label', 'Consent_St': 'inline label', 'Technology': 'inline label', 'Upgradatio': 'inline label', 'Installati': 'inline label', 'Installa_1': 'inline label', 'CTO_Y_N': 'inline label', 'effluent_r': 'inline label', 'BOD': 'inline label', 'COD': 'inline label', 'PH': 'inline label', 'TSS': 'inline label', 'Oil___Grea': 'inline label', 'Remarks': 'inline label', 'Report_No_': 'inline label', 'Compliance': 'inline label', });
lyr_STP_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});