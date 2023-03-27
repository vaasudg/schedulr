"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/tv/top/[id]";
exports.ids = ["pages/api/tv/top/[id]"];
exports.modules = {

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = import("uuid");;

/***/ }),

/***/ "(api)/./lib/tmdb.js":
/*!*********************!*\
  !*** ./lib/tmdb.js ***!
  \*********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getUrl\": () => (/* binding */ getUrl),\n/* harmony export */   \"getUrl2\": () => (/* binding */ getUrl2),\n/* harmony export */   \"getGenre\": () => (/* binding */ getGenre),\n/* harmony export */   \"getMovieDetail\": () => (/* binding */ getMovieDetail),\n/* harmony export */   \"getMovieCasts\": () => (/* binding */ getMovieCasts),\n/* harmony export */   \"getTvDetail\": () => (/* binding */ getTvDetail),\n/* harmony export */   \"getTvCasts\": () => (/* binding */ getTvCasts),\n/* harmony export */   \"search\": () => (/* binding */ search),\n/* harmony export */   \"searchMovie\": () => (/* binding */ searchMovie),\n/* harmony export */   \"searchTv\": () => (/* binding */ searchTv),\n/* harmony export */   \"trendingAllDay\": () => (/* binding */ trendingAllDay),\n/* harmony export */   \"trendingAllWeek\": () => (/* binding */ trendingAllWeek),\n/* harmony export */   \"trendingMovieDay\": () => (/* binding */ trendingMovieDay),\n/* harmony export */   \"trendingMovieWeek\": () => (/* binding */ trendingMovieWeek),\n/* harmony export */   \"trendingTvDay\": () => (/* binding */ trendingTvDay),\n/* harmony export */   \"trendingTvWeek\": () => (/* binding */ trendingTvWeek),\n/* harmony export */   \"moviePopular\": () => (/* binding */ moviePopular),\n/* harmony export */   \"movieNowPlaying\": () => (/* binding */ movieNowPlaying),\n/* harmony export */   \"movieUpcoming\": () => (/* binding */ movieUpcoming),\n/* harmony export */   \"movieTopRated\": () => (/* binding */ movieTopRated),\n/* harmony export */   \"movieLatest\": () => (/* binding */ movieLatest),\n/* harmony export */   \"tvPopular\": () => (/* binding */ tvPopular),\n/* harmony export */   \"tvAiringToday\": () => (/* binding */ tvAiringToday),\n/* harmony export */   \"tvOnTheAir\": () => (/* binding */ tvOnTheAir),\n/* harmony export */   \"tvTopRated\": () => (/* binding */ tvTopRated),\n/* harmony export */   \"genreMovie\": () => (/* binding */ genreMovie),\n/* harmony export */   \"genreTV\": () => (/* binding */ genreTV),\n/* harmony export */   \"discoverMovie\": () => (/* binding */ discoverMovie),\n/* harmony export */   \"discoverTV\": () => (/* binding */ discoverTV)\n/* harmony export */ });\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ \"(api)/./utils/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_utils__WEBPACK_IMPORTED_MODULE_0__]);\n_utils__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// export function getUrl(endpoint, optional = '') {\n//   return `${TMDB_ENDPOINT}/${endpoint}?api_key=${TMDB_API_KEY}${optional}`\n// }\nfunction getUrl(endpoint, id, genre, page) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/${endpoint}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}&with_genres=${id}&name=${genre}&page=${page}`;\n}\n// TODO: Change the function name\nfunction getUrl2(endpoint, page) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/${endpoint}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}&page=${page}`;\n}\nfunction getGenre(endpoint) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/${endpoint}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}`;\n}\nfunction getMovieDetail(id) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/movie/${id}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}`;\n}\nfunction getMovieCasts(id) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/movie/${id}/credits?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}`;\n}\nfunction getTvDetail(id) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/tv/${id}?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}`;\n}\nfunction getTvCasts(id) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/tv/${id}/credits?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}`;\n}\n// Search for movies and tv series\nfunction search(query, page) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/search/multi?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;\n}\n// Search for movies only\nfunction searchMovie(query, page) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/search/movie?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;\n}\n// Search for tv series only\nfunction searchTv(query, page) {\n    return `${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_ENDPOINT}/search/tv?api_key=${_utils__WEBPACK_IMPORTED_MODULE_0__.TMDB_API_KEY}&query=${encodeURIComponent(query)}&page=${page}`;\n}\n// Trending\nconst trendingAllDay = 'trending/all/day';\nconst trendingAllWeek = 'trending/all/week';\nconst trendingMovieDay = 'trending/movie/day';\nconst trendingMovieWeek = 'trending/movie/week';\nconst trendingTvDay = 'trending/tv/day';\nconst trendingTvWeek = 'trending/tv/week';\n// Movie\nconst moviePopular = 'movie/popular';\nconst movieNowPlaying = 'movie/now_playing';\nconst movieUpcoming = 'movie/upcoming';\nconst movieTopRated = 'movie/top_rated';\nconst movieLatest = 'movie/latest';\n// TV\nconst tvPopular = 'tv/popular';\nconst tvAiringToday = 'tv/airing_today';\nconst tvOnTheAir = 'tv/on_the_air';\nconst tvTopRated = 'tv/top_rated';\n// Genre\nconst genreMovie = '/genre/movie/list';\nconst genreTV = '/genre/tv/list';\n// Discover\nconst discoverMovie = 'discover/movie';\nconst discoverTV = 'discover/tv';\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvdG1kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBc0Q7QUFFdEQsRUFBb0Q7QUFDcEQsRUFBNkU7QUFDN0UsRUFBSTtBQUVHLFNBQVNFLE1BQU0sQ0FBQ0MsUUFBUSxFQUFFQyxFQUFFLEVBQUVDLEtBQUssRUFBRUMsSUFBSSxFQUFFLENBQUM7SUFDakQsTUFBTSxJQUFJTCxpREFBYSxDQUFDLENBQUMsRUFBRUUsUUFBUSxDQUFDLFNBQVMsRUFBRUgsZ0RBQVksQ0FBQyxhQUFhLEVBQUVJLEVBQUUsQ0FBQyxNQUFNLEVBQUVDLEtBQUssQ0FBQyxNQUFNLEVBQUVDLElBQUk7QUFDMUcsQ0FBQztBQUVELEVBQWlDO0FBQzFCLFNBQVNDLE9BQU8sQ0FBQ0osUUFBUSxFQUFFRyxJQUFJLEVBQUUsQ0FBQztJQUN2QyxNQUFNLElBQUlMLGlEQUFhLENBQUMsQ0FBQyxFQUFFRSxRQUFRLENBQUMsU0FBUyxFQUFFSCxnREFBWSxDQUFDLE1BQU0sRUFBRU0sSUFBSTtBQUMxRSxDQUFDO0FBRU0sU0FBU0UsUUFBUSxDQUFDTCxRQUFRLEVBQUUsQ0FBQztJQUNsQyxNQUFNLElBQUlGLGlEQUFhLENBQUMsQ0FBQyxFQUFFRSxRQUFRLENBQUMsU0FBUyxFQUFFSCxnREFBWTtBQUM3RCxDQUFDO0FBRU0sU0FBU1MsY0FBYyxDQUFDTCxFQUFFLEVBQUUsQ0FBQztJQUNsQyxNQUFNLElBQUlILGlEQUFhLENBQUMsT0FBTyxFQUFFRyxFQUFFLENBQUMsU0FBUyxFQUFFSixnREFBWTtBQUM3RCxDQUFDO0FBRU0sU0FBU1UsYUFBYSxDQUFDTixFQUFFLEVBQUUsQ0FBQztJQUNqQyxNQUFNLElBQUlILGlEQUFhLENBQUMsT0FBTyxFQUFFRyxFQUFFLENBQUMsaUJBQWlCLEVBQUVKLGdEQUFZO0FBQ3JFLENBQUM7QUFFTSxTQUFTVyxXQUFXLENBQUNQLEVBQUUsRUFBRSxDQUFDO0lBQy9CLE1BQU0sSUFBSUgsaURBQWEsQ0FBQyxJQUFJLEVBQUVHLEVBQUUsQ0FBQyxTQUFTLEVBQUVKLGdEQUFZO0FBQzFELENBQUM7QUFFTSxTQUFTWSxVQUFVLENBQUNSLEVBQUUsRUFBRSxDQUFDO0lBQzlCLE1BQU0sSUFBSUgsaURBQWEsQ0FBQyxJQUFJLEVBQUVHLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRUosZ0RBQVk7QUFDbEUsQ0FBQztBQUVELEVBQWtDO0FBQzNCLFNBQVNhLE1BQU0sQ0FBQ0MsS0FBSyxFQUFFUixJQUFJLEVBQUUsQ0FBQztJQUNuQyxNQUFNLElBQUlMLGlEQUFhLENBQUMsc0JBQXNCLEVBQUVELGdEQUFZLENBQUMsT0FBTyxFQUFFZSxrQkFBa0IsQ0FDdEZELEtBQUssRUFDTCxNQUFNLEVBQUVSLElBQUk7QUFDaEIsQ0FBQztBQUVELEVBQXlCO0FBQ2xCLFNBQVNVLFdBQVcsQ0FBQ0YsS0FBSyxFQUFFUixJQUFJLEVBQUUsQ0FBQztJQUN4QyxNQUFNLElBQUlMLGlEQUFhLENBQUMsc0JBQXNCLEVBQUVELGdEQUFZLENBQUMsT0FBTyxFQUFFZSxrQkFBa0IsQ0FDdEZELEtBQUssRUFDTCxNQUFNLEVBQUVSLElBQUk7QUFDaEIsQ0FBQztBQUVELEVBQTRCO0FBQ3JCLFNBQVNXLFFBQVEsQ0FBQ0gsS0FBSyxFQUFFUixJQUFJLEVBQUUsQ0FBQztJQUNyQyxNQUFNLElBQUlMLGlEQUFhLENBQUMsbUJBQW1CLEVBQUVELGdEQUFZLENBQUMsT0FBTyxFQUFFZSxrQkFBa0IsQ0FDbkZELEtBQUssRUFDTCxNQUFNLEVBQUVSLElBQUk7QUFDaEIsQ0FBQztBQUVELEVBQVc7QUFDSixLQUFLLENBQUNZLGNBQWMsR0FBRyxDQUFrQjtBQUN6QyxLQUFLLENBQUNDLGVBQWUsR0FBRyxDQUFtQjtBQUMzQyxLQUFLLENBQUNDLGdCQUFnQixHQUFHLENBQW9CO0FBQzdDLEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBcUI7QUFDL0MsS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBaUI7QUFDdkMsS0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBa0I7QUFFaEQsRUFBUTtBQUNELEtBQUssQ0FBQ0MsWUFBWSxHQUFHLENBQWU7QUFDcEMsS0FBSyxDQUFDQyxlQUFlLEdBQUcsQ0FBbUI7QUFDM0MsS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBZ0I7QUFDdEMsS0FBSyxDQUFDQyxhQUFhLEdBQUcsQ0FBaUI7QUFDdkMsS0FBSyxDQUFDQyxXQUFXLEdBQUcsQ0FBYztBQUV6QyxFQUFLO0FBQ0UsS0FBSyxDQUFDQyxTQUFTLEdBQUcsQ0FBWTtBQUM5QixLQUFLLENBQUNDLGFBQWEsR0FBRyxDQUFpQjtBQUN2QyxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFlO0FBQ2xDLEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQWM7QUFFeEMsRUFBUTtBQUNELEtBQUssQ0FBQ0MsVUFBVSxHQUFHLENBQW1CO0FBQ3RDLEtBQUssQ0FBQ0MsT0FBTyxHQUFHLENBQWdCO0FBRXZDLEVBQVc7QUFDSixLQUFLLENBQUNDLGFBQWEsR0FBRyxDQUFnQjtBQUN0QyxLQUFLLENBQUNDLFVBQVUsR0FBRyxDQUFhIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1lbnRlcnRhaW5tZW50LXdlYi1hcHAvLi9saWIvdG1kYi5qcz9iYTdiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRNREJfQVBJX0tFWSwgVE1EQl9FTkRQT0lOVCB9IGZyb20gJy4uL3V0aWxzJ1xuXG4vLyBleHBvcnQgZnVuY3Rpb24gZ2V0VXJsKGVuZHBvaW50LCBvcHRpb25hbCA9ICcnKSB7XG4vLyAgIHJldHVybiBgJHtUTURCX0VORFBPSU5UfS8ke2VuZHBvaW50fT9hcGlfa2V5PSR7VE1EQl9BUElfS0VZfSR7b3B0aW9uYWx9YFxuLy8gfVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXJsKGVuZHBvaW50LCBpZCwgZ2VucmUsIHBhZ2UpIHtcbiAgcmV0dXJuIGAke1RNREJfRU5EUE9JTlR9LyR7ZW5kcG9pbnR9P2FwaV9rZXk9JHtUTURCX0FQSV9LRVl9JndpdGhfZ2VucmVzPSR7aWR9Jm5hbWU9JHtnZW5yZX0mcGFnZT0ke3BhZ2V9YFxufVxuXG4vLyBUT0RPOiBDaGFuZ2UgdGhlIGZ1bmN0aW9uIG5hbWVcbmV4cG9ydCBmdW5jdGlvbiBnZXRVcmwyKGVuZHBvaW50LCBwYWdlKSB7XG4gIHJldHVybiBgJHtUTURCX0VORFBPSU5UfS8ke2VuZHBvaW50fT9hcGlfa2V5PSR7VE1EQl9BUElfS0VZfSZwYWdlPSR7cGFnZX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRHZW5yZShlbmRwb2ludCkge1xuICByZXR1cm4gYCR7VE1EQl9FTkRQT0lOVH0vJHtlbmRwb2ludH0/YXBpX2tleT0ke1RNREJfQVBJX0tFWX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZpZURldGFpbChpZCkge1xuICByZXR1cm4gYCR7VE1EQl9FTkRQT0lOVH0vbW92aWUvJHtpZH0/YXBpX2tleT0ke1RNREJfQVBJX0tFWX1gXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNb3ZpZUNhc3RzKGlkKSB7XG4gIHJldHVybiBgJHtUTURCX0VORFBPSU5UfS9tb3ZpZS8ke2lkfS9jcmVkaXRzP2FwaV9rZXk9JHtUTURCX0FQSV9LRVl9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHZEZXRhaWwoaWQpIHtcbiAgcmV0dXJuIGAke1RNREJfRU5EUE9JTlR9L3R2LyR7aWR9P2FwaV9rZXk9JHtUTURCX0FQSV9LRVl9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VHZDYXN0cyhpZCkge1xuICByZXR1cm4gYCR7VE1EQl9FTkRQT0lOVH0vdHYvJHtpZH0vY3JlZGl0cz9hcGlfa2V5PSR7VE1EQl9BUElfS0VZfWBcbn1cblxuLy8gU2VhcmNoIGZvciBtb3ZpZXMgYW5kIHR2IHNlcmllc1xuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaChxdWVyeSwgcGFnZSkge1xuICByZXR1cm4gYCR7VE1EQl9FTkRQT0lOVH0vc2VhcmNoL211bHRpP2FwaV9rZXk9JHtUTURCX0FQSV9LRVl9JnF1ZXJ5PSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIHF1ZXJ5XG4gICl9JnBhZ2U9JHtwYWdlfWBcbn1cblxuLy8gU2VhcmNoIGZvciBtb3ZpZXMgb25seVxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaE1vdmllKHF1ZXJ5LCBwYWdlKSB7XG4gIHJldHVybiBgJHtUTURCX0VORFBPSU5UfS9zZWFyY2gvbW92aWU/YXBpX2tleT0ke1RNREJfQVBJX0tFWX0mcXVlcnk9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgcXVlcnlcbiAgKX0mcGFnZT0ke3BhZ2V9YFxufVxuXG4vLyBTZWFyY2ggZm9yIHR2IHNlcmllcyBvbmx5XG5leHBvcnQgZnVuY3Rpb24gc2VhcmNoVHYocXVlcnksIHBhZ2UpIHtcbiAgcmV0dXJuIGAke1RNREJfRU5EUE9JTlR9L3NlYXJjaC90dj9hcGlfa2V5PSR7VE1EQl9BUElfS0VZfSZxdWVyeT0ke2VuY29kZVVSSUNvbXBvbmVudChcbiAgICBxdWVyeVxuICApfSZwYWdlPSR7cGFnZX1gXG59XG5cbi8vIFRyZW5kaW5nXG5leHBvcnQgY29uc3QgdHJlbmRpbmdBbGxEYXkgPSAndHJlbmRpbmcvYWxsL2RheSdcbmV4cG9ydCBjb25zdCB0cmVuZGluZ0FsbFdlZWsgPSAndHJlbmRpbmcvYWxsL3dlZWsnXG5leHBvcnQgY29uc3QgdHJlbmRpbmdNb3ZpZURheSA9ICd0cmVuZGluZy9tb3ZpZS9kYXknXG5leHBvcnQgY29uc3QgdHJlbmRpbmdNb3ZpZVdlZWsgPSAndHJlbmRpbmcvbW92aWUvd2VlaydcbmV4cG9ydCBjb25zdCB0cmVuZGluZ1R2RGF5ID0gJ3RyZW5kaW5nL3R2L2RheSdcbmV4cG9ydCBjb25zdCB0cmVuZGluZ1R2V2VlayA9ICd0cmVuZGluZy90di93ZWVrJ1xuXG4vLyBNb3ZpZVxuZXhwb3J0IGNvbnN0IG1vdmllUG9wdWxhciA9ICdtb3ZpZS9wb3B1bGFyJ1xuZXhwb3J0IGNvbnN0IG1vdmllTm93UGxheWluZyA9ICdtb3ZpZS9ub3dfcGxheWluZydcbmV4cG9ydCBjb25zdCBtb3ZpZVVwY29taW5nID0gJ21vdmllL3VwY29taW5nJ1xuZXhwb3J0IGNvbnN0IG1vdmllVG9wUmF0ZWQgPSAnbW92aWUvdG9wX3JhdGVkJ1xuZXhwb3J0IGNvbnN0IG1vdmllTGF0ZXN0ID0gJ21vdmllL2xhdGVzdCdcblxuLy8gVFZcbmV4cG9ydCBjb25zdCB0dlBvcHVsYXIgPSAndHYvcG9wdWxhcidcbmV4cG9ydCBjb25zdCB0dkFpcmluZ1RvZGF5ID0gJ3R2L2FpcmluZ190b2RheSdcbmV4cG9ydCBjb25zdCB0dk9uVGhlQWlyID0gJ3R2L29uX3RoZV9haXInXG5leHBvcnQgY29uc3QgdHZUb3BSYXRlZCA9ICd0di90b3BfcmF0ZWQnXG5cbi8vIEdlbnJlXG5leHBvcnQgY29uc3QgZ2VucmVNb3ZpZSA9ICcvZ2VucmUvbW92aWUvbGlzdCdcbmV4cG9ydCBjb25zdCBnZW5yZVRWID0gJy9nZW5yZS90di9saXN0J1xuXG4vLyBEaXNjb3ZlclxuZXhwb3J0IGNvbnN0IGRpc2NvdmVyTW92aWUgPSAnZGlzY292ZXIvbW92aWUnXG5leHBvcnQgY29uc3QgZGlzY292ZXJUViA9ICdkaXNjb3Zlci90didcbiJdLCJuYW1lcyI6WyJUTURCX0FQSV9LRVkiLCJUTURCX0VORFBPSU5UIiwiZ2V0VXJsIiwiZW5kcG9pbnQiLCJpZCIsImdlbnJlIiwicGFnZSIsImdldFVybDIiLCJnZXRHZW5yZSIsImdldE1vdmllRGV0YWlsIiwiZ2V0TW92aWVDYXN0cyIsImdldFR2RGV0YWlsIiwiZ2V0VHZDYXN0cyIsInNlYXJjaCIsInF1ZXJ5IiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2VhcmNoTW92aWUiLCJzZWFyY2hUdiIsInRyZW5kaW5nQWxsRGF5IiwidHJlbmRpbmdBbGxXZWVrIiwidHJlbmRpbmdNb3ZpZURheSIsInRyZW5kaW5nTW92aWVXZWVrIiwidHJlbmRpbmdUdkRheSIsInRyZW5kaW5nVHZXZWVrIiwibW92aWVQb3B1bGFyIiwibW92aWVOb3dQbGF5aW5nIiwibW92aWVVcGNvbWluZyIsIm1vdmllVG9wUmF0ZWQiLCJtb3ZpZUxhdGVzdCIsInR2UG9wdWxhciIsInR2QWlyaW5nVG9kYXkiLCJ0dk9uVGhlQWlyIiwidHZUb3BSYXRlZCIsImdlbnJlTW92aWUiLCJnZW5yZVRWIiwiZGlzY292ZXJNb3ZpZSIsImRpc2NvdmVyVFYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/tmdb.js\n");

/***/ }),

/***/ "(api)/./pages/api/tv/top/[id].js":
/*!**********************************!*\
  !*** ./pages/api/tv/top/[id].js ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../lib/tmdb */ \"(api)/./lib/tmdb.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__]);\n_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\nasync function handler(req, res) {\n    const { id  } = req.query;\n    try {\n        const url = (0,_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__.getUrl2)(_lib_tmdb__WEBPACK_IMPORTED_MODULE_0__.tvTopRated, id);\n        const response = await fetch(url);\n        const data = await response.json();\n        res.status(200).json({\n            results: data.results,\n            total_pages: data.total_pages,\n            total_results: data.total_results\n        });\n    } catch (err) {\n        res.status(500).json({\n            error: err.message\n        });\n    }\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvdHYvdG9wL1tpZF0uanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBMEQ7QUFFM0MsZUFBZUUsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQy9DLEtBQUssQ0FBQyxDQUFDLENBQUNDLEVBQUUsRUFBQyxDQUFDLEdBQUdGLEdBQUcsQ0FBQ0csS0FBSztJQUV4QixHQUFHLENBQUMsQ0FBQztRQUNILEtBQUssQ0FBQ0MsR0FBRyxHQUFHUCxrREFBTyxDQUFDQyxpREFBVSxFQUFFSSxFQUFFO1FBQ2xDLEtBQUssQ0FBQ0csUUFBUSxHQUFHLEtBQUssQ0FBQ0MsS0FBSyxDQUFDRixHQUFHO1FBQ2hDLEtBQUssQ0FBQ0csSUFBSSxHQUFHLEtBQUssQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJO1FBQ2hDUCxHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQyxDQUFDO1lBQ3BCRSxPQUFPLEVBQUVILElBQUksQ0FBQ0csT0FBTztZQUNyQkMsV0FBVyxFQUFFSixJQUFJLENBQUNJLFdBQVc7WUFDN0JDLGFBQWEsRUFBRUwsSUFBSSxDQUFDSyxhQUFhO1FBQ25DLENBQUM7SUFDSCxDQUFDLENBQUMsS0FBSyxFQUFFQyxHQUFHLEVBQUUsQ0FBQztRQUNiWixHQUFHLENBQUNRLE1BQU0sQ0FBQyxHQUFHLEVBQUVELElBQUksQ0FBQyxDQUFDO1lBQUNNLEtBQUssRUFBRUQsR0FBRyxDQUFDRSxPQUFPO1FBQUMsQ0FBQztJQUM3QyxDQUFDO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZW50ZXJ0YWlubWVudC13ZWItYXBwLy4vcGFnZXMvYXBpL3R2L3RvcC9baWRdLmpzP2U2MjIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0VXJsMiwgdHZUb3BSYXRlZCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi90bWRiJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XG4gIGNvbnN0IHsgaWQgfSA9IHJlcS5xdWVyeVxuICBcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBnZXRVcmwyKHR2VG9wUmF0ZWQsIGlkKVxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsKVxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7XG4gICAgICByZXN1bHRzOiBkYXRhLnJlc3VsdHMsXG4gICAgICB0b3RhbF9wYWdlczogZGF0YS50b3RhbF9wYWdlcyxcbiAgICAgIHRvdGFsX3Jlc3VsdHM6IGRhdGEudG90YWxfcmVzdWx0cyxcbiAgICB9KVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICByZXMuc3RhdHVzKDUwMCkuanNvbih7IGVycm9yOiBlcnIubWVzc2FnZSB9KVxuICB9XG59XG4iXSwibmFtZXMiOlsiZ2V0VXJsMiIsInR2VG9wUmF0ZWQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiaWQiLCJxdWVyeSIsInVybCIsInJlc3BvbnNlIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInN0YXR1cyIsInJlc3VsdHMiLCJ0b3RhbF9wYWdlcyIsInRvdGFsX3Jlc3VsdHMiLCJlcnIiLCJlcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/tv/top/[id].js\n");

/***/ }),

/***/ "(api)/./utils/index.js":
/*!************************!*\
  !*** ./utils/index.js ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TMDB_ENDPOINT\": () => (/* binding */ TMDB_ENDPOINT),\n/* harmony export */   \"TMDB_API_KEY\": () => (/* binding */ TMDB_API_KEY),\n/* harmony export */   \"TMDB_IMAGE_ENDPOINT\": () => (/* binding */ TMDB_IMAGE_ENDPOINT),\n/* harmony export */   \"pathToSearchAll\": () => (/* binding */ pathToSearchAll),\n/* harmony export */   \"pathToSearchMovie\": () => (/* binding */ pathToSearchMovie),\n/* harmony export */   \"pathToSearchTV\": () => (/* binding */ pathToSearchTV),\n/* harmony export */   \"fetcher\": () => (/* binding */ fetcher),\n/* harmony export */   \"shimmer\": () => (/* binding */ shimmer),\n/* harmony export */   \"toBase64\": () => (/* binding */ toBase64),\n/* harmony export */   \"renderResults\": () => (/* binding */ renderResults),\n/* harmony export */   \"sliceArray\": () => (/* binding */ sliceArray)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_1__]);\nuuid__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nconst TMDB_ENDPOINT = process.env.TMDB_ENDPOINT || 'https://api.themoviedb.org/3';\nconst TMDB_API_KEY = process.env.TMDB_API_KEY || '516adf1e1567058f8ecbf30bf2eb9378';\nconst TMDB_IMAGE_ENDPOINT = 'https://image.tmdb.org/t/p/original';\nconst pathToSearchAll = '/search/';\nconst pathToSearchMovie = '/search/movie/';\nconst pathToSearchTV = '/search/tv/';\nconst fetcher = (url)=>fetch(url).then((res)=>res.json()\n    )\n;\nconst shimmer = (w, h)=>`\n<svg width=\"${w}\" height=\"${h}\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n  <defs>\n    <linearGradient id=\"g\">\n      <stop stop-color=\"#333\" offset=\"20%\" />\n      <stop stop-color=\"#222\" offset=\"50%\" />\n      <stop stop-color=\"#333\" offset=\"70%\" />\n    </linearGradient>\n  </defs>\n  <rect width=\"${w}\" height=\"${h}\" fill=\"#333\" />\n  <rect id=\"r\" width=\"${w}\" height=\"${h}\" fill=\"url(#g)\" />\n  <animate xlink:href=\"#r\" attributeName=\"x\" from=\"-${w}\" to=\"${w}\" dur=\"1s\" repeatCount=\"indefinite\"  />\n</svg>\n`\n;\nconst toBase64 = (str)=> true ? Buffer.from(str).toString('base64') : 0\n;\nconst renderResults = (array, Component, media_type)=>{\n    return array.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            id: item.id,\n            category: item.media_type || media_type,\n            rating: item.adult,\n            src: item.backdrop_path ? `${TMDB_IMAGE_ENDPOINT}/${item.backdrop_path}` : `${TMDB_IMAGE_ENDPOINT}/${item.poster_path}`,\n            title: item.title ? item.title : item.original_name || item.original_title,\n            year: item.release_date || item.first_air_date\n        }, item.id || (0,uuid__WEBPACK_IMPORTED_MODULE_1__.v4)(), false, {\n            fileName: \"/Users/vasup/Desktop/codebase/vaasuDG/movieApp/utils/index.js\",\n            lineNumber: 38,\n            columnNumber: 5\n        }, undefined)\n    );\n};\nconst sliceArray = (arr, limit)=>{\n    return arr.slice(0, limit);\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi91dGlscy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUM7QUFFNUIsS0FBSyxDQUFDRSxhQUFhLEdBQUdDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRixhQUFhLElBQUksQ0FBOEI7QUFDakYsS0FBSyxDQUFDRyxZQUFZLEdBQUdGLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxZQUFZLElBQUksQ0FBa0M7QUFDbkYsS0FBSyxDQUFDQyxtQkFBbUIsR0FBRyxDQUFxQztBQUdqRSxLQUFLLENBQUNDLGVBQWUsR0FBRyxDQUFVO0FBQ2xDLEtBQUssQ0FBQ0MsaUJBQWlCLEdBQUcsQ0FBZ0I7QUFDMUMsS0FBSyxDQUFDQyxjQUFjLEdBQUcsQ0FBYTtBQUdwQyxLQUFLLENBQUNDLE9BQU8sSUFBR0MsR0FBRyxHQUFJQyxLQUFLLENBQUNELEdBQUcsRUFBRUUsSUFBSSxFQUFDQyxHQUFHLEdBQUlBLEdBQUcsQ0FBQ0MsSUFBSTs7O0FBR3RELEtBQUssQ0FBQ0MsT0FBTyxJQUFJQyxDQUFDLEVBQUVDLENBQUMsSUFBTTtZQUN0QixFQUFFRCxDQUFDLENBQUMsVUFBVSxFQUFFQyxDQUFDLENBQUM7Ozs7Ozs7O2VBUWYsRUFBRUQsQ0FBQyxDQUFDLFVBQVUsRUFBRUMsQ0FBQyxDQUFDO3NCQUNYLEVBQUVELENBQUMsQ0FBQyxVQUFVLEVBQUVDLENBQUMsQ0FBQztvREFDWSxFQUFFRCxDQUFDLENBQUMsTUFBTSxFQUFFQSxDQUFDLENBQUM7O0FBRWxFOztBQUVPLEtBQUssQ0FBQ0UsUUFBUSxJQUFHQyxHQUFHLEdBQ3pCLEtBQTZCLEdBQ3pCQyxNQUFNLENBQUNDLElBQUksQ0FBQ0YsR0FBRyxFQUFFRyxRQUFRLENBQUMsQ0FBUSxXQUNsQ0MsQ0FBZ0I7O0FBRWYsS0FBSyxDQUFDRSxhQUFhLElBQUlDLEtBQUssRUFBRUMsU0FBUyxFQUFFQyxVQUFVLEdBQUssQ0FBQztJQUM5RCxNQUFNLENBQUNGLEtBQUssQ0FBQ0csR0FBRyxFQUFDQyxJQUFJLCtFQUNsQkgsU0FBUztZQUVSSSxFQUFFLEVBQUVELElBQUksQ0FBQ0MsRUFBRTtZQUNYQyxRQUFRLEVBQUVGLElBQUksQ0FBQ0YsVUFBVSxJQUFJQSxVQUFVO1lBQ3ZDSyxNQUFNLEVBQUVILElBQUksQ0FBQ0ksS0FBSztZQUNsQkMsR0FBRyxFQUNETCxJQUFJLENBQUNNLGFBQWEsTUFDWC9CLG1CQUFtQixDQUFDLENBQUMsRUFBRXlCLElBQUksQ0FBQ00sYUFBYSxRQUN6Qy9CLG1CQUFtQixDQUFDLENBQUMsRUFBRXlCLElBQUksQ0FBQ08sV0FBVztZQUVoREMsS0FBSyxFQUNIUixJQUFJLENBQUNRLEtBQUssR0FBR1IsSUFBSSxDQUFDUSxLQUFLLEdBQUdSLElBQUksQ0FBQ1MsYUFBYSxJQUFJVCxJQUFJLENBQUNVLGNBQWM7WUFFckVDLElBQUksRUFBRVgsSUFBSSxDQUFDWSxZQUFZLElBQUlaLElBQUksQ0FBQ2EsY0FBYztXQVp6Q2IsSUFBSSxDQUFDQyxFQUFFLElBQUkvQix3Q0FBTTs7Ozs7O0FBZTVCLENBQUM7QUFFTSxLQUFLLENBQUM0QyxVQUFVLElBQUlDLEdBQUcsRUFBRUMsS0FBSyxHQUFLLENBQUM7SUFDekMsTUFBTSxDQUFDRCxHQUFHLENBQUNFLEtBQUssQ0FBQyxDQUFDLEVBQUVELEtBQUs7QUFDM0IsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtZW50ZXJ0YWlubWVudC13ZWItYXBwLy4vdXRpbHMvaW5kZXguanM/ZDJlNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJ1xuXG5leHBvcnQgY29uc3QgVE1EQl9FTkRQT0lOVCA9IHByb2Nlc3MuZW52LlRNREJfRU5EUE9JTlQgfHwgJ2h0dHBzOi8vYXBpLnRoZW1vdmllZGIub3JnLzMnXG5leHBvcnQgY29uc3QgVE1EQl9BUElfS0VZID0gcHJvY2Vzcy5lbnYuVE1EQl9BUElfS0VZIHx8ICc1MTZhZGYxZTE1NjcwNThmOGVjYmYzMGJmMmViOTM3OCdcbmV4cG9ydCBjb25zdCBUTURCX0lNQUdFX0VORFBPSU5UID0gJ2h0dHBzOi8vaW1hZ2UudG1kYi5vcmcvdC9wL29yaWdpbmFsJ1xuXG5cbmV4cG9ydCBjb25zdCBwYXRoVG9TZWFyY2hBbGwgPSAnL3NlYXJjaC8nXG5leHBvcnQgY29uc3QgcGF0aFRvU2VhcmNoTW92aWUgPSAnL3NlYXJjaC9tb3ZpZS8nXG5leHBvcnQgY29uc3QgcGF0aFRvU2VhcmNoVFYgPSAnL3NlYXJjaC90di8nXG5cblxuZXhwb3J0IGNvbnN0IGZldGNoZXIgPSB1cmwgPT4gZmV0Y2godXJsKS50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuXG5cbmV4cG9ydCBjb25zdCBzaGltbWVyID0gKHcsIGgpID0+IGBcbjxzdmcgd2lkdGg9XCIke3d9XCIgaGVpZ2h0PVwiJHtofVwiIHZlcnNpb249XCIxLjFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeG1sbnM6eGxpbms9XCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rXCI+XG4gIDxkZWZzPlxuICAgIDxsaW5lYXJHcmFkaWVudCBpZD1cImdcIj5cbiAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCIjMzMzXCIgb2Zmc2V0PVwiMjAlXCIgLz5cbiAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCIjMjIyXCIgb2Zmc2V0PVwiNTAlXCIgLz5cbiAgICAgIDxzdG9wIHN0b3AtY29sb3I9XCIjMzMzXCIgb2Zmc2V0PVwiNzAlXCIgLz5cbiAgICA8L2xpbmVhckdyYWRpZW50PlxuICA8L2RlZnM+XG4gIDxyZWN0IHdpZHRoPVwiJHt3fVwiIGhlaWdodD1cIiR7aH1cIiBmaWxsPVwiIzMzM1wiIC8+XG4gIDxyZWN0IGlkPVwiclwiIHdpZHRoPVwiJHt3fVwiIGhlaWdodD1cIiR7aH1cIiBmaWxsPVwidXJsKCNnKVwiIC8+XG4gIDxhbmltYXRlIHhsaW5rOmhyZWY9XCIjclwiIGF0dHJpYnV0ZU5hbWU9XCJ4XCIgZnJvbT1cIi0ke3d9XCIgdG89XCIke3d9XCIgZHVyPVwiMXNcIiByZXBlYXRDb3VudD1cImluZGVmaW5pdGVcIiAgLz5cbjwvc3ZnPlxuYFxuXG5leHBvcnQgY29uc3QgdG9CYXNlNjQgPSBzdHIgPT5cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IEJ1ZmZlci5mcm9tKHN0cikudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgOiB3aW5kb3cuYnRvYShzdHIpXG5cbmV4cG9ydCBjb25zdCByZW5kZXJSZXN1bHRzID0gKGFycmF5LCBDb21wb25lbnQsIG1lZGlhX3R5cGUpID0+IHtcbiAgcmV0dXJuIGFycmF5Lm1hcChpdGVtID0+IChcbiAgICA8Q29tcG9uZW50XG4gICAgICBrZXk9e2l0ZW0uaWQgfHwgdXVpZHY0KCl9XG4gICAgICBpZD17aXRlbS5pZH1cbiAgICAgIGNhdGVnb3J5PXtpdGVtLm1lZGlhX3R5cGUgfHwgbWVkaWFfdHlwZX1cbiAgICAgIHJhdGluZz17aXRlbS5hZHVsdH1cbiAgICAgIHNyYz17XG4gICAgICAgIGl0ZW0uYmFja2Ryb3BfcGF0aFxuICAgICAgICAgID8gYCR7VE1EQl9JTUFHRV9FTkRQT0lOVH0vJHtpdGVtLmJhY2tkcm9wX3BhdGh9YFxuICAgICAgICAgIDogYCR7VE1EQl9JTUFHRV9FTkRQT0lOVH0vJHtpdGVtLnBvc3Rlcl9wYXRofWBcbiAgICAgIH1cbiAgICAgIHRpdGxlPXtcbiAgICAgICAgaXRlbS50aXRsZSA/IGl0ZW0udGl0bGUgOiBpdGVtLm9yaWdpbmFsX25hbWUgfHwgaXRlbS5vcmlnaW5hbF90aXRsZVxuICAgICAgfVxuICAgICAgeWVhcj17aXRlbS5yZWxlYXNlX2RhdGUgfHwgaXRlbS5maXJzdF9haXJfZGF0ZX1cbiAgICAvPlxuICApKVxufVxuXG5leHBvcnQgY29uc3Qgc2xpY2VBcnJheSA9IChhcnIsIGxpbWl0KSA9PiB7XG4gIHJldHVybiBhcnIuc2xpY2UoMCwgbGltaXQpXG59XG4iXSwibmFtZXMiOlsidjQiLCJ1dWlkdjQiLCJUTURCX0VORFBPSU5UIiwicHJvY2VzcyIsImVudiIsIlRNREJfQVBJX0tFWSIsIlRNREJfSU1BR0VfRU5EUE9JTlQiLCJwYXRoVG9TZWFyY2hBbGwiLCJwYXRoVG9TZWFyY2hNb3ZpZSIsInBhdGhUb1NlYXJjaFRWIiwiZmV0Y2hlciIsInVybCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJzaGltbWVyIiwidyIsImgiLCJ0b0Jhc2U2NCIsInN0ciIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIndpbmRvdyIsImJ0b2EiLCJyZW5kZXJSZXN1bHRzIiwiYXJyYXkiLCJDb21wb25lbnQiLCJtZWRpYV90eXBlIiwibWFwIiwiaXRlbSIsImlkIiwiY2F0ZWdvcnkiLCJyYXRpbmciLCJhZHVsdCIsInNyYyIsImJhY2tkcm9wX3BhdGgiLCJwb3N0ZXJfcGF0aCIsInRpdGxlIiwib3JpZ2luYWxfbmFtZSIsIm9yaWdpbmFsX3RpdGxlIiwieWVhciIsInJlbGVhc2VfZGF0ZSIsImZpcnN0X2Fpcl9kYXRlIiwic2xpY2VBcnJheSIsImFyciIsImxpbWl0Iiwic2xpY2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./utils/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/tv/top/[id].js"));
module.exports = __webpack_exports__;

})();