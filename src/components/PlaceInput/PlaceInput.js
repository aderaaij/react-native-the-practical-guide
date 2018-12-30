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
var PlaceInputContainer = native_1["default"].View(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"], ["\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  width: 100%;\n"])));
var PlaceInputBox = native_1["default"].TextInput(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 70%;\n"], ["\n  width: 70%;\n"])));
var SubmitButton = native_1["default"].Button(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  width: 30%;\n"], ["\n  width: 30%;\n"])));
var PlaceInput = /** @class */ (function (_super) {
    __extends(PlaceInput, _super);
    function PlaceInput() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            placeName: ''
        };
        _this.placeNameChangeHandler = function (val) {
            _this.setState({
                placeName: val
            });
        };
        _this.placeSubmitHandler = function () {
            if (_this.state.placeName.trim() === '') {
                return;
            }
            _this.props.onPlaceAdded(_this.state.placeName);
            _this.setState({ placeName: '' });
        };
        return _this;
    }
    PlaceInput.prototype.render = function () {
        return (<>
        <PlaceInputContainer>
          <PlaceInputBox placeholder="Insert a place name" value={this.state.placeName} onChangeText={this.placeNameChangeHandler}/>
          <SubmitButton onPress={this.placeSubmitHandler} title="send"/>
        </PlaceInputContainer>
      </>);
    };
    return PlaceInput;
}(React.Component));
exports["default"] = PlaceInput;
var templateObject_1, templateObject_2, templateObject_3;
