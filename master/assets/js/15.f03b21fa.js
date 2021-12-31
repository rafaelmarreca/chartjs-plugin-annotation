(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{488:function(t,e,o){"use strict";o.r(e);var n=o(22),r=Object(n.a)({},(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[o("h1",{attrs:{id:"label-annotations"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#label-annotations"}},[t._v("#")]),t._v(" Label Annotations")]),t._v(" "),o("p",[t._v("Label annotations are used to add contents on the chart area. This can be useful for describing values that are of interest.")]),t._v(" "),o("chart-editor",{attrs:{code:"/* <block:options:0> */\nconst options = {\n  plugins: {\n    autocolors: false,\n    annotation: {\n      annotations: {\n        label1: {\n          type: 'label',\n          xValue: 2.5,\n          yValue: 60,\n          backgroundColor: 'rgba(245,245,245)',\n          content: ['This is my text', 'This is my text, second line'],\n          font: {\n            size: 18\n          }\n        }\n      }\n    }\n  }\n};\n/* </block:options> */\n\n/* <block:config:1> */\nconst config = {\n  type: 'line',\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, 80, 81, 56, 55, 40],\n      fill: false,\n      borderColor: 'rgb(75, 192, 192)',\n      tension: 0.1\n    }]\n  },\n  options\n};\n/* </block:config> */\n\nmodule.exports = {\n  config\n};\n"}}),o("h2",{attrs:{id:"configuration"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#configuration"}},[t._v("#")]),t._v(" Configuration")]),t._v(" "),o("p",[t._v("The following options are available for label annotations.")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[o("a",{attrs:{href:"../options#scriptable-options"}},[t._v("Scriptable")])]),t._v(" "),o("th",[t._v("Default")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("adjustScaleRange")])])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("true")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("backgroundColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("transparent")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("backgroundShadowColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'transparent'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderCapStyle")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'butt'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("options.color")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderDash")])])]),t._v(" "),o("td",[o("code",[t._v("number[]")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("[]")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderDashOffset")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderJoinStyle")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'miter'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#borderradius"}},[o("code",[t._v("borderRadius")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("object")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderShadowColor")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'transparent'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("borderWidth")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#callout"}},[o("code",[t._v("callout")])])]),t._v(" "),o("td",[o("code",[t._v("object")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td")]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("color")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'black'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("content")])])]),t._v(" "),o("td",[o("code",[t._v("string")]),t._v("|"),o("code",[t._v("string[]")]),t._v("|"),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/Image",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("Image")]),o("OutboundLink")],1),t._v("|"),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement",target:"_blank",rel:"noopener noreferrer"}},[o("code",[t._v("HTMLCanvasElement")]),o("OutboundLink")],1)]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("null")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("display")])])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("true")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("drawTime")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'afterDatasetsDraw'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("font")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#font"}},[o("code",[t._v("Font")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("{}")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("height")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v("|"),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("padding")])])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#padding"}},[o("code",[t._v("Padding")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("6")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#position"}},[o("code",[t._v("position")])])]),t._v(" "),o("td",[o("code",[t._v("string")]),t._v("|"),o("code",[t._v("{x: string, y: string}")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'center'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("shadowBlur")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("shadowOffsetX")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#styling"}},[o("code",[t._v("shadowOffsetY")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("textAlign")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'center'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("width")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v("|"),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xAdjust")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xMax")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xMin")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xScaleID")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'x'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("xValue")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yAdjust")])])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("0")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yMax")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yMin")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yScaleID")])])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("'y'")])])]),t._v(" "),o("tr",[o("td",[o("a",{attrs:{href:"#general"}},[o("code",[t._v("yValue")])])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v(" | "),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[t._v("Yes")]),t._v(" "),o("td",[o("code",[t._v("undefined")])])])])]),t._v(" "),o("h3",{attrs:{id:"general"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#general"}},[t._v("#")]),t._v(" General")]),t._v(" "),o("p",[t._v("If one of the axes does not match an axis in the chart, the content will be rendered in the center of the chart. The 2 coordinates, xValue, yValue are optional. If not specified, the content will be rendered in the center of the chart.")]),t._v(" "),o("p",[t._v("The 4 coordinates, xMin, xMax, yMin, yMax are optional. If not specified, the box is expanded out to the edges in the respective direction and the box size is used to calculated the center of the point. To enable to use the box positioning, the "),o("code",[t._v("radius")]),t._v(" must be set to "),o("code",[t._v("0")]),t._v(" or "),o("code",[t._v("NaN")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("adjustScaleRange")])]),t._v(" "),o("td",[t._v("Should the scale range be adjusted if this annotation is out of range.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("content")])]),t._v(" "),o("td",[t._v("The content to show in the text annotation.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("display")])]),t._v(" "),o("td",[t._v("Whether or not this annotation is visible.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("drawTime")])]),t._v(" "),o("td",[t._v("See "),o("a",{attrs:{href:"../options#draw-time"}},[t._v("drawTime")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("height")])]),t._v(" "),o("td",[t._v("Overrides the height of the image or canvas element. Could be set in pixel by a number, or in percentage of current height of image or canvas element by a string. If undefined, uses the height of the image or canvas element. It is used only when the content is an image or canvas element.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("padding")])]),t._v(" "),o("td",[t._v("The padding to add around the text label.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("textAlign")])]),t._v(" "),o("td",[t._v("Text alignment of label content when there's more than one line. Possible options are: "),o("code",[t._v("'left'")]),t._v(", "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(", "),o("code",[t._v("'right'")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("width")])]),t._v(" "),o("td",[t._v("Overrides the width of the image or canvas element. Could be set in pixel by a number, or in percentage of current width of image or canvas element by a string. If undefined, uses the width of the image or canvas element. It is used only when the content is an image or canvas element.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xAdjust")])]),t._v(" "),o("td",[t._v("Adjustment along x-axis (left-right) of label relative to computed position. Negative values move the label left, positive right.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xMax")])]),t._v(" "),o("td",[t._v("Right edge of the box in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xMin")])]),t._v(" "),o("td",[t._v("Left edge of the box in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xScaleID")])]),t._v(" "),o("td",[t._v("ID of the X scale to bind onto, default is 'x'.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("xValue")])]),t._v(" "),o("td",[t._v("X coordinate of the point in units along the x axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yAdjust")])]),t._v(" "),o("td",[t._v("Adjustment along y-axis (top-bottom) of label relative to computed position. Negative values move the label up, positive down.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yMax")])]),t._v(" "),o("td",[t._v("Bottom edge of the box in units along the y axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yMin")])]),t._v(" "),o("td",[t._v("Top edge of the box in units along the y axis.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yScaleID")])]),t._v(" "),o("td",[t._v("ID of the Y scale to bind onto, default is 'y'.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("yValue")])]),t._v(" "),o("td",[t._v("Y coordinate of the point in units along the y axis.")])])])]),t._v(" "),o("h3",{attrs:{id:"styling"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#styling"}},[t._v("#")]),t._v(" Styling")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Description")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("backgroundColor")])]),t._v(" "),o("td",[t._v("Fill color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("backgroundShadowColor")])]),t._v(" "),o("td",[t._v("The color of shadow. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderCapStyle")])]),t._v(" "),o("td",[t._v("Cap style of the border line. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[t._v("Stroke color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDash")])]),t._v(" "),o("td",[t._v("Length and spacing of dashes. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDashOffset")])]),t._v(" "),o("td",[t._v("Offset for border line dashes. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderJoinStyle")])]),t._v(" "),o("td",[t._v("Border line joint style. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderShadowColor")])]),t._v(" "),o("td",[t._v("The color of the border shadow. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowColor",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[t._v("Stroke width (in pixels).")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("color")])]),t._v(" "),o("td",[t._v("Text color.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("font")])]),t._v(" "),o("td",[t._v("Text font.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("shadowBlur")])]),t._v(" "),o("td",[t._v("The amount of blur applied to shadow of the box where the label is located. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowBlur",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("shadowOffsetX")])]),t._v(" "),o("td",[t._v("The distance that shadow, of the box where the label is located, will be offset horizontally. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetX",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("shadowOffsetY")])]),t._v(" "),o("td",[t._v("The distance that shadow, of the box where the label is located, will be offset vertically. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/shadowOffsetY",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])])])]),t._v(" "),o("h3",{attrs:{id:"position"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#position"}},[t._v("#")]),t._v(" Position")]),t._v(" "),o("p",[t._v("A position can be set in 2 different values types:")]),t._v(" "),o("ol",[o("li",[o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(" which are defining where the label will be located")]),t._v(" "),o("li",[t._v("a "),o("code",[t._v("string")]),t._v(", in percentage format "),o("code",[t._v("'number%'")]),t._v(", is representing the percentage on the size where the label will be located")])]),t._v(" "),o("p",[t._v("If this value is a string (possible options are "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(" or a string in percentage format), it is applied to vertical and horizontal position in the box.")]),t._v(" "),o("p",[t._v("If this value is an object, the "),o("code",[t._v("x")]),t._v(" property defines the horizontal alignment in the label, with respect to the selected point. Similarly, the "),o("code",[t._v("y")]),t._v(" property defines the vertical alignment in the label, with respect to the selected point. Possible options for both properties are "),o("code",[t._v("'start'")]),t._v(", "),o("code",[t._v("'center'")]),t._v(", "),o("code",[t._v("'end'")]),t._v(", a string in percentage format. Omitted property have value of the default, "),o("code",[t._v("'center'")]),t._v(".")]),t._v(" "),o("h4",{attrs:{id:"borderradius"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#borderradius"}},[t._v("#")]),t._v(" borderRadius")]),t._v(" "),o("p",[t._v("If this value is a number, it is applied to all corners of the rectangle (topLeft, topRight, bottomLeft, bottomRight). If this value is an object, the "),o("code",[t._v("topLeft")]),t._v(" property defines the top-left corners border radius. Similarly, the "),o("code",[t._v("topRight")]),t._v(", "),o("code",[t._v("bottomLeft")]),t._v(", and "),o("code",[t._v("bottomRight")]),t._v(" properties can also be specified. Omitted corners have radius of 0.")]),t._v(" "),o("h2",{attrs:{id:"callout"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#callout"}},[t._v("#")]),t._v(" Callout")]),t._v(" "),o("p",[t._v("A callout connects the label by a line to the selected point.")]),t._v(" "),o("p",[t._v("Namespace: "),o("code",[t._v("options.annotations[annotationID].label.callout")]),t._v(", it defines options for the callout on the annotation label.")]),t._v(" "),o("chart-editor",{attrs:{code:"/* <block:options:0> */\nconst options = {\n  plugins: {\n    autocolors: false,\n    annotation: {\n      annotations: {\n        label1: {\n          type: 'label',\n          xValue: 2.5,\n          yValue: 60,\n          xAdjust: 290,\n          yAdjust: -100,\n          backgroundColor: 'rgba(245,245,245)',\n          content: ['In this point of time,', 'something happened'],\n          textAlign: 'start',\n          font: {\n            size: 18\n          },\n          callout: {\n            enabled: true,\n            side: 10\n          }\n        }\n      }\n    }\n  }\n};\n/* </block:options> */\n\n/* <block:config:1> */\nconst config = {\n  type: 'line',\n  data: {\n    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],\n    datasets: [{\n      label: 'My First Dataset',\n      data: [65, 59, 80, 81, 56, 55, 40],\n      fill: false,\n      borderColor: 'rgb(75, 192, 192)',\n      tension: 0.1\n    }]\n  },\n  options\n};\n/* </block:config> */\n\nmodule.exports = {\n  config\n};\n"}}),o("p",[t._v("All of these options can be "),o("a",{attrs:{href:"../options#scriptable-options"}},[t._v("Scriptable")]),t._v(".")]),t._v(" "),o("table",[o("thead",[o("tr",[o("th",[t._v("Name")]),t._v(" "),o("th",[t._v("Type")]),t._v(" "),o("th",{staticStyle:{"text-align":"center"}},[t._v("Default")]),t._v(" "),o("th",[t._v("Notes")])])]),t._v(" "),o("tbody",[o("tr",[o("td",[o("code",[t._v("borderCapStyle")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("'butt'")])]),t._v(" "),o("td",[t._v("Cap style of the border line of callout. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderColor")])]),t._v(" "),o("td",[o("a",{attrs:{href:"../options#color"}},[o("code",[t._v("Color")])])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("undefined")])]),t._v(" "),o("td",[t._v("Stroke color of the pointer of the callout.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDash")])]),t._v(" "),o("td",[o("code",[t._v("number[]")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("[]")])]),t._v(" "),o("td",[t._v("Length and spacing of dashes of callout. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/setLineDash",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderDashOffset")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("0")])]),t._v(" "),o("td",[t._v("Offset for line dashes of callout. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineDashOffset",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderJoinStyle")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("'miter'")])]),t._v(" "),o("td",[t._v("Border line joint style of the callout. See "),o("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin",target:"_blank",rel:"noopener noreferrer"}},[t._v("MDN"),o("OutboundLink")],1),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("borderWidth")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("1")])]),t._v(" "),o("td",[t._v("Stroke width of the pointer of the callout.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("enabled")])]),t._v(" "),o("td",[o("code",[t._v("boolean")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("false")])]),t._v(" "),o("td",[t._v("If true, the callout is drawn.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("margin")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("5")])]),t._v(" "),o("td",[t._v("Amount of pixels between the label and the callout separator.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("position")])]),t._v(" "),o("td",[o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("'auto'")])]),t._v(" "),o("td",[t._v("The position of callout, with respect to the label. Could be "),o("code",[t._v("left")]),t._v(", "),o("code",[t._v("top")]),t._v(", "),o("code",[t._v("right")]),t._v(", "),o("code",[t._v("bottom")]),t._v(" or "),o("code",[t._v("auto")]),t._v(".")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("side")])]),t._v(" "),o("td",[o("code",[t._v("number")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("5")])]),t._v(" "),o("td",[t._v("Width of the starter line of callout pointer.")])]),t._v(" "),o("tr",[o("td",[o("code",[t._v("start")])]),t._v(" "),o("td",[o("code",[t._v("number")]),t._v("|"),o("code",[t._v("string")])]),t._v(" "),o("td",{staticStyle:{"text-align":"center"}},[o("code",[t._v("'50%'")])]),t._v(" "),o("td",[t._v("The percentage of the separator dimension to use as starting point for callout pointer. Could be set in pixel by a number, or in percentage of the separator dimension by a string.")])])])])],1)}),[],!1,null,null,null);e.default=r.exports}}]);