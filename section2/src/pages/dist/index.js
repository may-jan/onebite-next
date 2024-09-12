"use strict";
exports.__esModule = true;
var searchable_layout_1 = require("@/components/searchable-layout");
var index_module_css_1 = require("./index.module.css"); // CSS Module
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", { className: index_module_css_1["default"].h1 }, "\uC778\uB371\uC2A4"),
        React.createElement("h2", { className: index_module_css_1["default"].h2 }, "H2")));
}
exports["default"] = Home;
Home.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
