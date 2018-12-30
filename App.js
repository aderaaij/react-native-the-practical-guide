"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var React = require("react");
var native_1 = require("styled-components/native");
// import { Platform, StyleSheet, Text, View, TextInput, Button } from 'react-native';
var PlaceInput_1 = require("./src/components/PlaceInput/PlaceInput");
var PlaceList_1 = require("./src/components/PlaceList/PlaceList");
var AppContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  flex: 1;\n  padding: 30px 10px 0 10px;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #fff;\n"], ["\n  display: flex;\n  flex: 1;\n  padding: 30px 10px 0 10px;\n  justify-content: flex-start;\n  align-items: center;\n  background-color: #fff;\n"])));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            placeName: '',
            places: []
        };
        _this.placeNameChangeHandler = function (val) {
            _this.setState({
                placeName: val
            });
        };
        _this.placeAddedHandler = function (placeName) {
            _this.setState(function (prevState) {
                return {
                    places: prevState.places.concat(placeName)
                };
            });
            _this.setState({ placeName: '' });
        };
        return _this;
    }
    App.prototype.render = function () {
        return (<AppContainer>
        <PlaceInput_1.default onPlaceAdded={this.placeAddedHandler}/>
        <PlaceList_1.default places={this.state.places}/>
      </AppContainer>);
    };
    return App;
}(React.Component));
exports["default"] = App;
var templateObject_1;
