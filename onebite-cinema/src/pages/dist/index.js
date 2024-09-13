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
var dummy_json_1 = require("../mock/dummy.json");
var movie_item_1 = require("@/components/movie-item");
var index_module_css_1 = require("./index.module.css");
function Home() {
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: index_module_css_1["default"].container },
            React.createElement("section", null,
                React.createElement("h3", null, "\uC9C0\uAE08 \uAC00\uC7A5 \uCD94\uCC9C\uD558\uB294 \uC601\uD654"),
                React.createElement("div", { className: index_module_css_1["default"].recommend_movie }, dummy_json_1["default"].slice(0, 3).map(function (movie) { return (React.createElement(movie_item_1["default"], __assign({ key: movie.id }, movie))); }))),
            React.createElement("section", null,
                React.createElement("h3", null, "\uB4F1\uB85D\uB41C \uBAA8\uB4E0 \uC601\uD654"),
                React.createElement("div", { className: index_module_css_1["default"].all_movie }, dummy_json_1["default"].map(function (movie) { return (React.createElement(movie_item_1["default"], __assign({ key: movie.id }, movie))); }))))));
}
exports["default"] = Home;
Home.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
