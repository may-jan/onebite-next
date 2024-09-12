"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var global_layout_module_css_1 = require("./global-layout.module.css");
function GlobalLayout(_a) {
    var children = _a.children;
    return (React.createElement("div", { className: global_layout_module_css_1["default"].container },
        React.createElement("header", { className: global_layout_module_css_1["default"].header },
            React.createElement(link_1["default"], { href: '/' }, "\uD83D\uDCDA ONEBITE BOOKS")),
        React.createElement("main", { className: global_layout_module_css_1["default"].main }, children),
        React.createElement("footer", { className: global_layout_module_css_1["default"].footer }, "\uC81C\uC791 @jan")));
}
exports["default"] = GlobalLayout;
