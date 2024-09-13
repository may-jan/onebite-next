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
var index_module_css_1 = require("./index.module.css"); // CSS Module
var books_json_1 = require("@/mock/books.json");
var book_item_1 = require("@/components/book-item");
function Home() {
    return (React.createElement("div", { className: index_module_css_1["default"].container },
        React.createElement("section", null,
            React.createElement("h3", null, "\uC9C0\uAE08 \uCD94\uCC9C\uD558\uB294 \uB3C4\uC11C"),
            books_json_1["default"].map(function (book) { return (React.createElement(book_item_1["default"], __assign({ key: book.id }, book))); })),
        React.createElement("section", null,
            React.createElement("h3", null, "\uB4F1\uB85D\uB41C \uBAA8\uB4E0 \uB3C4\uC11C"),
            books_json_1["default"].map(function (book) { return (React.createElement(book_item_1["default"], __assign({ key: book.id }, book))); }))));
}
exports["default"] = Home;
Home.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
