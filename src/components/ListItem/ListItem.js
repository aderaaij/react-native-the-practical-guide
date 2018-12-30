"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var React = require("react");
var native_1 = require("styled-components/native");
var react_native_1 = require("react-native");
var ListItemWrap = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  width: 100%;\n  background: ", ";\n  text-align: left;\n  padding: 10px;\n"], ["\n  width: 100%;\n  background: ", ";\n  text-align: left;\n  padding: 10px;\n"])), function (props) { return (props.oddEven === 'even' ? '#ec008c' : '#fff'); });
var ListItem = function (props) {
    return (<ListItemWrap oddEven={props.index % 2 ? 'even' : 'odd'}>
      <react_native_1.Text>{props.placeName}</react_native_1.Text>
    </ListItemWrap>);
};
exports["default"] = ListItem;
var templateObject_1;
