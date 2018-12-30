"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var native_1 = require("styled-components/native");
var ListItem_1 = require("../ListItem/ListItem");
var PlaceListContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n"], ["\n  width: 100%;\n"])));
var PlaceList = function (props) {
    return (<PlaceListContainer>
      {props.places.map(function (place, i) { return (<ListItem_1.default index={i} key={i} placeName={place}/>); })}
    </PlaceListContainer>);
};
exports["default"] = PlaceList;
var templateObject_1;
