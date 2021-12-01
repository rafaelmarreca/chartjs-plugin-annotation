(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{486:function(t,e,o){"use strict";o.r(e);var r=o(22),n=Object(r.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"label-annotations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#label-annotations"}},[t._v("#")]),t._v(" Label Annotations")]),t._v(" "),o("p",[t._v("Label annotations are used to add contents on the chart area. This can be useful for describing values that are of interest.")]),t._v(" "),o("chart-editor",{attrs:{code:"/* <block:options:0> */\nconst options = {\n  plugins: {\n    autocolors: false,\n    annotation: {\n      annotations: {\n        label1: {\n          type: 'label',\n          xValue: 2.5,\n          yValue: 60,\n          backgroundColor: 'rgba(245,245,245)',\n          content: ['This is my text', 'This is my text, second line'],\n          font: {\n            size: 18\n          }\n        }\n      }\n    }\n  }\n};\n/* </block:options> */\n\n/* <block:config:1> */\nconst config = {\n  type: 'line',\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, 80, 81, 56, 55, 40],\n      fill: false,\n      borderColor: 'rgb(75, 192, 192)',\n      tension: 0.1\n    }]\n  },\n  options\n};\n/* </block:config> */\n\nmodule.exports = {\n  config\n};\n"}}),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("The following options are available for label annotations.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[o("a",{attrs:{href:"../options#scriptable-options"}},[t._v("Scriptable")])]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("adjustScaleRange")])])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("true")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("backgroundColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("transparent")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderCapStyle")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'butt'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("options.color")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderDash")])])]),t._v(" "),o("td",[o("code",[t._v("number[]")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("[]")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderDashOffset")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderJoinStyle")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'miter'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#borderradius"}},[o("code",[t._v("borderRadius")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("object")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderWidth")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("color")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'black'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("content")])])]),t._v(" "),o("td",[o("code",[t._v("string")]),t._v("|"),o("code",[t._v("string[]")]),t._v("|"),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("Image")]),o("OutboundLink")],1)]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("null")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("display")])])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("true")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("drawTime")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'afterDatasetsDraw'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("font")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#font"}},[o("code",[t._v("Font")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("{}")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("height")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v("|"),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("padding")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#padding"}},[o("code",[t._v("Padding")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("6")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#position"}},[o("code",[t._v("position")])])]),t._v(" "),o("td",[o("code",[t._v("string")]),t._v("|"),o("code",[t._v("{x: string, y: string}")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'center'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("textAlign")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'center'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("width")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v("|"),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xAdjust")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xScaleID")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'x'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xValue")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yAdjust")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yScaleID")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'y'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yValue")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])])])]),t._v(" "),o("h3",{attrs:{id:"general"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),o("p",[t._v("If one of the axes does not match an axis in the chart, the content will be rendered in the center of the chart. The 2 coordinates, xValue, yValue are optional. If not specified, the content will be rendered in the center of the chart.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("adjustScaleRange")])]),t._v(" "),o("td",[t._v("Should the scale range be adjusted if this annotation is out of range")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("content")])]),t._v(" "),o("td",[t._v("The content to show in the text annotation.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("display")])]),t._v(" "),o("td",[t._v("Whether or not this annotation is visible")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("drawTime")])]),t._v(" "),o("td",[t._v("See "),o("a",{attrs:{href:"../options#draw-time"}},[t._v("drawTime")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("height")])]),t._v(" "),o("td",[t._v("Overrides the height of the image. Could be set in pixel by a number, or in percentage of current height of image by a string. If undefined, uses the height of the image. It is used only when the content is an image.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("padding")])]),t._v(" "),o("td",[t._v("The padding to add around the text label.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("textAlign")])]),t._v(" "),o("td",[t._v("Text alignment of label content when there's more than one line. Possible options are: "),o("code",[t._v("'left'")]),t._v(", "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(", "),o("code",[t._v("'right'")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("width")])]),t._v(" "),o("td",[t._v("Overrides the width of the image. Could be set in pixel by a number, or in percentage of current width of image by a string. If undefined, uses the width of the image. It is used only when the content is an image.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xAdjust")])]),t._v(" "),o("td",[t._v("Adjustment along x-axis (left-right) of label relative to computed position. Negative values move the label left, positive right.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xScaleID")])]),t._v(" "),o("td",[t._v("ID of the X scale to bind onto, default is 'x'.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xValue")])]),t._v(" "),o("td",[t._v("X coordinate of the point in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yAdjust")])]),t._v(" "),o("td",[t._v("Adjustment along y-axis (top-bottom) of label relative to computed position. Negative values move the label up, positive down.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yScaleID")])]),t._v(" "),o("td",[t._v("ID of the Y scale to bind onto, default is 'y'.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yValue")])]),t._v(" "),o("td",[t._v("Y coordinate of the point in units along the y axis.")])])])]),t._v(" "),o("h3",{attrs:{id:"styling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[t._v("Fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderCapStyle")])]),t._v(" "),o("td",[t._v("Cap style of the border line. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[t._v("Stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDash")])]),t._v(" "),o("td",[t._v("Length and spacing of dashes. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDashOffset")])]),t._v(" "),o("td",[t._v("Offset for border line dashes. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderJoinStyle")])]),t._v(" "),o("td",[t._v("Border line joint style. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[t._v("Stroke width (in pixels).")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("color")])]),t._v(" "),o("td",[t._v("Text color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("font")])]),t._v(" "),o("td",[t._v("Text font.")])])])]),t._v(" "),o("h3",{attrs:{id:"position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" Position")]),t._v(" "),o("p",[t._v("If this value is a string (possible options are "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v("), it is applied to vertical and horizontal position of the label, with respect to the selected point.")]),t._v(" "),o("p",[t._v("If this value is an object, the "),o("code",[t._v("x")]),t._v(" property defines the horizontal alignment of the label, with respect to the selected point. Similarly, the "),o("code",[t._v("y")]),t._v(" property defines the vertical alignment of the label, with respect to the selected point. Possible options for both properties are "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(". Omitted property have value of the default, "),o("code",[t._v("'center'")]),t._v(".")]),t._v(" "),o("h4",{attrs:{id:"borderradius"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#borderradius"}},[t._v("#")]),t._v(" borderRadius")]),t._v(" "),o("p",[t._v("If this value is a number, it is applied to all corners of the rectangle (topLeft, topRight, bottomLeft, bottomRight). If this value is an object, the "),o("code",[t._v("topLeft")]),t._v(" property defines the top-left corners border radius. Similarly, the "),o("code",[t._v("topRight")]),t._v(", "),o("code",[t._v("bottomLeft")]),t._v(", and "),o("code",[t._v("bottomRight")]),t._v(" properties can also be specified. Omitted corners have radius of 0.")])],1)}),[],!1,null,null,null);e.default=n.exports}}]);