"use strict";
exports.__esModule = true;
var link_1 = require("next/link");
var movie_item_module_css_1 = require("./movie-item.module.css");
function MovieItem(_a) {
    var id = _a.id, title = _a.title, releaseDate = _a.releaseDate, company = _a.company, genres = _a.genres, subTitle = _a.subTitle, description = _a.description, runtime = _a.runtime, posterImgUrl = _a.posterImgUrl;
    return (React.createElement(link_1["default"], { href: "/movie/" + id, className: movie_item_module_css_1["default"].container },
        React.createElement("img", { src: posterImgUrl })));
}
exports["default"] = MovieItem;
