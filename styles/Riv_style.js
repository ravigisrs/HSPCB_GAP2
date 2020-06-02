var size = 0;
var placement = 'point';

var style_Riv = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    var value = feature.get("Descriptio");
    var labelText = "";
    size = 0;
	var labelFont = "10.725px \'MS Shell Dlg 2\', sans-serif";
    var labelFill = "rgba(255, 110, 255, 1)";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 8;
    var offsetY = 3;
    var placement = 'line';
	if (feature.get("Name") !== null && resolution > 0 && resolution < 28) {
        labelText = String(feature.get("Name"));
    }
 
    var style = [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(40,165,236,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};