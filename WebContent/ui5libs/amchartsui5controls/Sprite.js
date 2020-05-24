/* global am4core:true */
/* global am4charts:true */
sap.ui.define([
	"jquery.sap.global",
	"io/rtdi/amchartsui5controls/library",
	"io/rtdi/amchartsui5controls/RootWrapper"  ], function(jQuery, library) {
	return io.rtdi.amchartsui5controls.RootWrapper.extend("io.rtdi.amchartsui5controls.Sprite", {
		metadata: {
            properties: {
            	align : {type : "string"},
            	contextMenuDisabled : {type : "boolean"},
            	cursorDownStyle : {type : "string"},
            	cursorOverStyle : {type : "string"},
            	dateFormatterDateFormat : {type : "string"},
            	disabled : {type : "boolean"},
            	draggable : {type : "boolean"},
            	durationFormatter : {type : "any"},
            	dx : {type : "float"},
            	dy : {type : "float"},
            	fill : {type : "any"},
            	fillModifier : {type : "any"},
            	fillOpacity : {type : "float"},
            	focusable : {type : "boolean"},
            	height : {type : "any"},
            	hidden : {type : "boolean"},
            	horizontalCenter : {type : "any"},
            	hoverOnFocus : {type : "boolean"},
            	hoverable : {type : "boolean"},
            	inert : {type : "boolean"},
            	interactionsEnabled : {type : "boolean"},
            	marginBottom : {type : "any"},
            	marginLeft : {type : "any"},
            	marginRight : {type : "any"},
            	marginTop : {type : "any"},
            	maxHeight : {type : "float"},
            	maxWidth : {type : "float"},
            	minHeight : {type : "any"},
            	minWidth : {type : "any"},
            	mouseOptions : {type : "any"},
            	nonScaling : {type : "boolean"},
            	nonScalingStroke : {type : "boolean"},
            	numberFormatterNumberFormat  : {type : "string"},
            	opacity : {type : "float"},
            	paddingBottom : {type : "any"},
            	paddingLeft : {type : "any"},
            	paddingRight : {type : "any"},
            	paddingTop : {type : "any"},
            	readerDescription : {type : "string"},
            	readerHidden : {type : "boolean"},
            	readerOrientation : {type : "string"},
            	readerTitle : {type : "string"},
            	readerValueNow : {type : "string"},
            	readerValueText : {type : "string"},
            	realFill : {type : "any"},
            	realStroke : {type : "any"},
            	resizable : {type : "string"},
            	rotation : {type : "float"},
            	rtl : {type : "string"},
            	scale : {type : "float"},
            	showOnInit : {type : "string"},
            	showSystemTooltip : {type : "boolean"},
            	showTooltipOn : {type : "string"},
            	stroke : {type : "any"},
            	strokeDasharray : {type : "string"},
            	strokeDashoffset : {type : "float"},
            	strokeLinecap : {type : "string"},
            	strokeLinejoin : {type : "string"},
            	strokeModifier : {type : "any"},
                strokeOpacity : {type : "float"},
                strokeWidth : {type : "float"},
                swipeable : {type : "boolean"},
                tabindex : {type : "int"},
                tooltip : {type : "io.rtdi.amchartsui5controls.Tooltip"},
                tooltipDataItem : {type : "io.rtdi.amchartsui5controls.DataItem"},
                tooltipHTML : {type : "string"},
                tooltipPosition : {type : "string"},
                tooltipText : {type : "string"},
                tooltipX : {type : "any"},
                tooltipY : {type : "any"},
                trackable : {type : "boolean"},
                url : {type : "string"},
                urlTarget : {type : "string"},
                valign : {type : "any"},
                verticalCenter : {type : "any"},
                visible : {type : "boolean"},
                wheelable : {type : "boolean"},
                width : {type : "any"},
                x : {type : "float"},
                y : {type : "float"},
                zIndex : {type : "int"},
            }
		},

	});
});