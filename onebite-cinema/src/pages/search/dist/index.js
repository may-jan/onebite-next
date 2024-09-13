"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var searchable_layout_1 = require("@/components/searchable-layout");
var dummy_json_1 = require("@/mock/dummy.json");
var movie_item_1 = require("@/components/movie-item");
var index_module_css_1 = require("./index.module.css");
function Page() {
    return (React.createElement("div", { className: index_module_css_1["default"].container }, dummy_json_1["default"].map(function (movie) { return (React.createElement(movie_item_1["default"], __assign({ key: movie.id }, movie))); })));
}
exports["default"] = Page;
Page.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
