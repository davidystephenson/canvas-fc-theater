"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _react = require('react'); var _react2 = _interopRequireDefault(_react);var _styledcomponents = require('styled-components'); var _styledcomponents2 = _interopRequireDefault(_styledcomponents);var _canvasfc = require('canvas-fc'); var _canvasfc2 = _interopRequireDefault(_canvasfc);var l=_styledcomponents2.default.call(void 0, _canvasfc2.default)`
  background: white;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${t=>{let h=t.width/t.height*100,r=t.height/t.width*100;return t.width>t.height?_styledcomponents.css`
        height: ${r}vw;
        max-height: ${100}vh;
        max-width: ${h}vh;
        width: ${100}vw;
      `:_styledcomponents.css`
        height: ${100}vw;
        max-height: ${r}vh;
        max-width: ${100}vh;
        width: ${h}vw;
      `}}
`,a=l;var s=_styledcomponents.createGlobalStyle`
  body {
    background: black;
    padding: 0;
    margin: 0;
  }
`,o=s;function v(t){return _react2.default.createElement(_react2.default.Fragment,null,_react2.default.createElement(o,null),_react2.default.createElement(a,{...t}))}exports.default = v;
//# sourceMappingURL=App.js.map