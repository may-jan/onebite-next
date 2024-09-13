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
var books_json_1 = require("@/mock/books.json");
var book_item_1 = require("@/components/book-item");
function Page() {
    return (React.createElement("div", null, books_json_1["default"].map(function (book) { return (React.createElement(book_item_1["default"], __assign({ key: book.id }, book))); })));
}
exports["default"] = Page;
Page.getLayout = function (page) {
    return React.createElement(searchable_layout_1["default"], null, page);
};
