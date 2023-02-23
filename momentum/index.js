/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ \"./node_modules/html-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/favicon.ico */ \"./src/assets/favicon.ico\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/sounds/Aqua-Caelestis.mp3 */ \"./src/assets/sounds/Aqua-Caelestis.mp3\"), __webpack_require__.b);\nvar ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./assets/svg/rsschool.svg */ \"./src/assets/svg/rsschool.svg\"), __webpack_require__.b);\n// Module\nvar ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);\nvar ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);\nvar ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);\nvar code = \"<!DOCTYPE html>\\r\\n<html lang=\\\"en\\\">\\r\\n\\r\\n<head>\\r\\n  <meta charset=\\\"UTF-8\\\">\\r\\n  <meta name=\\\"viewport\\\" content=\\\"width=device-width, initial-scale=1.0\\\">\\r\\n  <link href=\\\"\" + ___HTML_LOADER_REPLACEMENT_0___ + \"\\\" rel=\\\"shortcut icon\\\">\\r\\n  <!-- <link rel=\\\"stylesheet\\\" href=\\\"css/owfont-regular.css\\\" />\\r\\n  <link rel=\\\"stylesheet\\\" href=\\\"css/style.css\\\" /> -->\\r\\n  <title>momentum</title>\\r\\n</head>\\r\\n\\r\\n<body>\\r\\n  <div class=\\\"page\\\">\\r\\n    <header class=\\\"header\\\">\\r\\n      <div class=\\\"player\\\" id=\\\"audio\\\">\\r\\n        <audio src=\\\"\" + ___HTML_LOADER_REPLACEMENT_1___ + \"\\\"></audio>\\r\\n        <div class=\\\"player-controls\\\">\\r\\n          <button class=\\\"play-sound player-icon\\\"></button>\\r\\n          <button class=\\\"play-prev player-icon\\\"></button>\\r\\n          <button class=\\\"play player-icon\\\"></button>\\r\\n          <button class=\\\"play-next player-icon\\\"></button>\\r\\n          <button class=\\\"play-volume player-icon\\\"></button>\\r\\n          <div class=\\\"volume\\\">\\r\\n            <input class=\\\"volume-scale\\\" type=\\\"range\\\" id=\\\"rangeVolume\\\" value=\\\"50\\\" max=\\\"100\\\">\\r\\n          </div>\\r\\n        </div>\\r\\n        <div class=\\\"player-error\\\"></div>\\r\\n        <div class=\\\"play-progress-bar\\\">\\r\\n          <div class=\\\"play-title\\\">Title</div>\\r\\n          <span class=\\\"play-current\\\">00:00</span>\\r\\n          <progress class=\\\"play-progress\\\" id=\\\"playerRange\\\" max=\\\"100\\\" value=\\\"0\\\">\\r\\n          </progress>\\r\\n          <span class=\\\"play-duration\\\">00:00</span>\\r\\n        </div>\\r\\n        <div>\\r\\n          <button class=\\\"play-list-open player-icon\\\"></button>\\r\\n          <ul class=\\\"play-list\\\"></ul>\\r\\n        </div>\\r\\n        <button class=\\\"player-btn\\\"></button>\\r\\n      </div>\\r\\n      <div class=\\\"weather\\\" id=\\\"weather\\\">\\r\\n        <input type=\\\"text\\\" class=\\\"city\\\" placeholder=\\\"Minsk\\\" title=\\\"Enter you city\\\">\\r\\n        <i class=\\\"weather-icon owf\\\"></i>\\r\\n        <div class=\\\"weather-error\\\"></div>\\r\\n        <div class=\\\"description-container\\\">\\r\\n          <span class=\\\"temperature\\\"></span>\\r\\n          <span class=\\\"weather-description\\\"></span>\\r\\n        </div>\\r\\n        <div class=\\\"wind\\\"></div>\\r\\n        <div class=\\\"humidity\\\"></div>\\r\\n      </div>\\r\\n    </header>\\r\\n    <main class=\\\"main\\\">\\r\\n      <div class=\\\"slider-icons\\\">\\r\\n        <button class=\\\"slide-prev slider-icon\\\"></button>\\r\\n        <button class=\\\"slide-next slider-icon\\\"></button>\\r\\n      </div>\\r\\n      <time class=\\\"time\\\" id=\\\"time\\\">00:00</time>\\r\\n      <date class=\\\"date\\\" id=\\\"date\\\"></date>\\r\\n      <div class=\\\"greeting-container\\\" id=\\\"greeting\\\">\\r\\n        <span class=\\\"greeting\\\"></span>\\r\\n        <input type=\\\"text\\\" class=\\\"name\\\" placeholder=\\\"Name\\\" title=\\\"Enter you name\\\">\\r\\n      </div>\\r\\n    </main>\\r\\n    <footer class=\\\"footer\\\">\\r\\n      <div id=\\\"quote\\\">\\r\\n        <button class=\\\"change-quote\\\"></button>\\r\\n        <div class=\\\"quote-block\\\">\\r\\n          <div class=\\\"quote\\\"></div>\\r\\n          <div class=\\\"author\\\"></div>\\r\\n        </div>\\r\\n      </div>\\r\\n      <div class=\\\"control\\\">\\r\\n        <div class=\\\"course\\\">\\r\\n          <a href=\\\"https://rs.school/js/\\\" class=\\\"footer__link\\\">\\r\\n            <img src=\\\"\" + ___HTML_LOADER_REPLACEMENT_2___ + \"\\\" alt=\\\"rsSchool\\\" width=\\\"60\\\" height=\\\"22\\\">\\r\\n          </a>\\r\\n        </div>\\r\\n        <div class=\\\"copyright\\\">&#169; 2023 <a href=\\\"https://github.com/Nadezhdashel/\\\" class=\\\"github\\\">\\r\\n            &nbsp;<span class=\\\"copyright-name\\\">Nadezhda Shelepova</span>\\r\\n          </a>\\r\\n        </div>\\r\\n        <div>\\r\\n          <button class=\\\"settings-icon\\\"></button>\\r\\n          <div class=\\\"settings\\\" id=\\\"settings\\\">\\r\\n            <fieldset class=\\\"language-group\\\" id=\\\"language-group\\\">\\r\\n              <input type=\\\"radio\\\" id='language-ru' value=\\\"ru\\\" name=\\\"language\\\" class=\\\"language-radio\\\">\\r\\n              <label for=\\\"language-ru\\\" class=\\\"language-label\\\">РУС</label>\\r\\n              <input type=\\\"radio\\\" id='language-en' value=\\\"en\\\" name=\\\"language\\\" class=\\\"language-radio\\\" checked>\\r\\n              <label for=\\\"language-en\\\" class=\\\"language-label\\\">EN</label>\\r\\n            </fieldset>\\r\\n            <fieldset class=\\\"elements-group\\\">\\r\\n              <legend class=\\\"elements-title\\\">Select visible elements</legend>\\r\\n              <div>\\r\\n                <input type=\\\"checkbox\\\" class=\\\"elements-check\\\" name=\\\"elements\\\" id=\\\"time-elem\\\" value=\\\"time\\\" checked>\\r\\n                <label for=\\\"time-elem\\\" class=\\\"elements-label\\\">Time</label>\\r\\n                <input type=\\\"checkbox\\\" class=\\\"elements-check\\\" name=\\\"elements\\\" id=\\\"date-elem\\\" value=\\\"date\\\" checked>\\r\\n                <label for=\\\"date-elem\\\" class=\\\"elements-label\\\">Date</label>\\r\\n                <input type=\\\"checkbox\\\" class=\\\"elements-check\\\" name=\\\"elements\\\" id=\\\"greeting-elem\\\" value=\\\"greeting\\\"\\r\\n                  checked>\\r\\n                <label for=\\\"greeting-elem\\\" class=\\\"elements-label\\\">Greeting</label>\\r\\n                <input type=\\\"checkbox\\\" class=\\\"elements-check\\\" name=\\\"elements\\\" id=\\\"weather-elem\\\" value=\\\"weather\\\" checked>\\r\\n                <label for=\\\"weather-elem\\\" class=\\\"elements-label\\\">Weather</label>\\r\\n                <input type=\\\"checkbox\\\" class=\\\"elements-check\\\" name=\\\"elements\\\" id=\\\"quote-elem\\\" value=\\\"quote\\\" checked>\\r\\n                <label for=\\\"quote-elem\\\" class=\\\"elements-label\\\">Quote</label>\\r\\n                <input type=\\\"checkbox\\\" class=\\\"elements-check\\\" name=\\\"elements\\\" id=\\\"audio-elem\\\" value=\\\"audio\\\" checked>\\r\\n                <label for=\\\"audio-elem\\\" class=\\\"elements-label\\\">Audio player</label>\\r\\n              </div>\\r\\n            </fieldset>\\r\\n            <div class=\\\"settings-active\\\"><button class=\\\"settings-close\\\">Close</button></div>\\r\\n          </div>\\r\\n        </div>\\r\\n      </div>\\r\\n    </footer>\\r\\n  </div>\\r\\n  <!-- <\" + \"script src=\\\"index.js\\\" type=\\\"module\\\"><\" + \"/script> -->\\r\\n</body>\\r\\n\\r\\n</html>\";\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);\n\n//# sourceURL=webpack://momentum/./src/index.html?");

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url);\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  }\n\n  if (options.maybeNeedQuotes && /[\\t\\n\\f\\r \"'=<>`]/.test(url)) {\n    return \"\\\"\".concat(url, \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://momentum/./node_modules/html-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/css/owfont-regular.css":
/*!************************************!*\
  !*** ./src/css/owfont-regular.css ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/css/owfont-regular.css?");

/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://momentum/./src/css/style.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ \"./src/index.html\");\n/* harmony import */ var _css_owfont_regular_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./css/owfont-regular.css */ \"./src/css/owfont-regular.css\");\n/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./css/style.css */ \"./src/css/style.css\");\n/* harmony import */ var _js_personal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/personal.js */ \"./src/js/personal.js\");\n/* harmony import */ var _js_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/settings.js */ \"./src/js/settings.js\");\n/* harmony import */ var _js_time_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/time.js */ \"./src/js/time.js\");\n/* harmony import */ var _js_slider_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./js/slider.js */ \"./src/js/slider.js\");\n/* harmony import */ var _js_quote_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./js/quote.js */ \"./src/js/quote.js\");\n/* harmony import */ var _js_weather_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./js/weather.js */ \"./src/js/weather.js\");\n/* harmony import */ var _js_audio_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./js/audio.js */ \"./src/js/audio.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nwindow.addEventListener('beforeunload', _js_personal_js__WEBPACK_IMPORTED_MODULE_3__.setLocalStorage);\r\nwindow.addEventListener('load', () => {\r\n    (0,_js_personal_js__WEBPACK_IMPORTED_MODULE_3__.getLocalStorage)();\r\n    createPage();\r\n});\r\n(0,_js_slider_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n\r\n\r\nfunction createPage() {\r\n    (0,_js_settings_js__WEBPACK_IMPORTED_MODULE_4__.addSettings)();\r\n    (0,_js_time_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    (0,_js_quote_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n    (0,_js_audio_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\r\n    (0,_js_weather_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPage);\r\n\n\n//# sourceURL=webpack://momentum/./src/index.js?");

/***/ }),

/***/ "./src/js/audio.js":
/*!*************************!*\
  !*** ./src/js/audio.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _playList_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playList.js */ \"./src/js/playList.js\");\n\r\n\r\nconst playListContainer = document.querySelector('.play-list');\r\nconst audio = document.querySelector('audio');\r\nconst player = document.querySelector('.player');\r\nconst prevBtn = document.querySelector('.play-prev');\r\nconst playBtn = document.querySelector('.play');\r\nconst nextBtn = document.querySelector('.play-next');\r\nconst soundBtn = document.querySelector('.play-sound');\r\nconst volumeBtn = document.querySelector('.play-volume');\r\nconst progress = document.querySelector('.play-progress');\r\nconst playCurrent = document.querySelector('.play-current');\r\nconst playDuration = document.querySelector('.play-duration');\r\nconst playTitle = document.querySelector('.play-title');\r\nconst volume = document.querySelector('.volume');\r\nconst volumeRange = document.querySelector('.volume-scale');\r\nconst playListBtn = document.querySelector('.play-list-open');\r\nconst playerError = document.querySelector('.player-error');\r\nconst playerOpenBtn = document.querySelector('.player-btn');\r\n\r\nlet isPlay = false;\r\nlet playNum = 0;\r\n\r\nif (_playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]) {\r\n    _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].forEach((el, i) => {\r\n        const li = document.createElement('li');\r\n        li.classList.add('play-item');\r\n        li.textContent = el.title;\r\n        li.dataset.index = i;\r\n        playListContainer.append(li);\r\n        const button = document.createElement('button');\r\n        button.classList.add('item-button');\r\n        li.append(button);\r\n    })\r\n}\r\n\r\nconst playItem = playListContainer.querySelectorAll('li');\r\nconst itemBtn = document.querySelectorAll('.item-button');\r\nconst maxNum = playItem.length - 1;\r\n\r\nfunction toggleBtn() {\r\n    if (!isPlay) {\r\n        playBtn.classList.remove('pause');\r\n        itemBtn[playNum].classList.remove('pause');\r\n    } else {\r\n        playBtn.classList.add('pause');\r\n        itemBtn[playNum].classList.add('pause');\r\n    }\r\n}\r\n\r\nfunction playAudio() {\r\n    playerError.textContent = '';\r\n    audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].src;\r\n    audio.currentTime = 0;\r\n    audio.play();\r\n    playTitle.textContent = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].title;\r\n    playItem[playNum].classList.add('item-active');\r\n    isPlay = true;\r\n    toggleBtn();\r\n}\r\n\r\nfunction getPlayNext() {\r\n    if (playNum < maxNum) {\r\n        playNum++;\r\n    } else {\r\n        playNum = 0;\r\n    }\r\n}\r\nfunction getPlayPrev() {\r\n    if (playNum > 0) {\r\n        playNum--;\r\n    } else {\r\n        playNum = maxNum;\r\n    }\r\n}\r\n\r\n//Progress\r\nfunction audioTime(time) {\r\n    time = Math.floor(time);\r\n    let min = Math.floor(time / 60);\r\n    let sec = Math.floor(time - min * 60);\r\n    return `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`\r\n}\r\n\r\nfunction playProgress() {\r\n    if (audio.currentTime === audio.duration) {\r\n        onNextClick();\r\n    }\r\n    if (isNaN(audio.duration)) return;\r\n    let progressNum = (Math.floor(audio.currentTime) / (Math.floor(audio.duration) / 100));\r\n    progress.value = progressNum;\r\n    playCurrent.textContent = audioTime(audio.currentTime);\r\n    playDuration.textContent = audioTime(audio.duration);\r\n}\r\n\r\nfunction changeTime(event) {\r\n    let mouse = Math.floor(event.pageX - progress.offsetLeft);\r\n    let progressNum = mouse / (progress.offsetWidth / 100);\r\n    audio.currentTime = audio.duration * (progressNum / 100);\r\n}\r\n\r\n//Sound\r\nfunction muteSound() {\r\n    if (audio.volume == 0) {\r\n        soundBtn.classList.remove('play-soundless');\r\n        volumeRange.value = 30;\r\n        audio.volume = volumeRange.value / 100;\r\n    } else {\r\n        audio.volume = 0;\r\n        soundBtn.classList.add('play-soundless');\r\n    }\r\n}\r\n\r\nfunction volumeChange() {\r\n    let volume = volumeRange.value / 100;\r\n    audio.volume = volume;\r\n    if (audio.volume == 0) {\r\n        soundBtn.classList.add('play-soundless');\r\n    } else {\r\n        soundBtn.classList.remove('play-soundless');\r\n    }\r\n}\r\n\r\n\r\n//On click buttons\r\nfunction onPrevClick() {\r\n    playItem[playNum].classList.remove('item-active');\r\n    itemBtn[playNum].classList.remove('pause');\r\n    getPlayPrev();\r\n    playAudio();\r\n}\r\n\r\nfunction onNextClick() {\r\n    playItem[playNum].classList.remove('item-active');\r\n    itemBtn[playNum].classList.remove('pause');\r\n    getPlayNext();\r\n    playAudio();\r\n}\r\n\r\nfunction listClick(event) {\r\n    let targetItem = event.target.closest('LI');\r\n    if (!targetItem) return;\r\n    if (event.target.tagName === \"BUTTON\") {\r\n        if (playNum == targetItem.dataset.index) {\r\n            onPlayBtnClick();\r\n            return;\r\n        }\r\n    }\r\n    itemBtn[playNum].classList.remove('pause');\r\n    playItem[playNum].classList.remove('item-active');\r\n    playNum = targetItem.dataset.index;\r\n    playAudio();\r\n}\r\n\r\nfunction onPlayBtnClick() {\r\n    if (!isPlay) {\r\n        audio.play();\r\n        isPlay = true;\r\n    } else {\r\n        audio.pause();\r\n        isPlay = false;\r\n    }\r\n    toggleBtn();\r\n}\r\n\r\nfunction onVolumeBtnClick() {\r\n    volume.classList.toggle('open');\r\n}\r\nfunction togglePlayList() {\r\n    playListContainer.classList.toggle('close');\r\n    playListBtn.classList.toggle('close');\r\n}\r\n\r\nfunction togglePlayer() {\r\n    player.classList.toggle('open');\r\n}\r\n\r\n//On load\r\nfunction audioPlayer() {\r\n    window.addEventListener('load', function () {\r\n        playNum = 0;\r\n        audio.src = _playList_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"][playNum].src;\r\n        audio.currentTime = 0;\r\n    });\r\n}\r\n\r\n//Event\r\nplayerOpenBtn.addEventListener('click', togglePlayer);\r\nnextBtn.addEventListener('click', onNextClick);\r\nprevBtn.addEventListener('click', onPrevClick);\r\nplayBtn.addEventListener('click', onPlayBtnClick);\r\nsoundBtn.addEventListener('click', muteSound);\r\nvolumeBtn.addEventListener('click', onVolumeBtnClick);\r\nplayListBtn.addEventListener('click', togglePlayList);\r\nvolumeRange.addEventListener('change', volumeChange);\r\naudio.addEventListener('timeupdate', playProgress);\r\nprogress.addEventListener('click', function (event) {\r\n    changeTime(event);\r\n});\r\nplayListContainer.addEventListener('click', function (event) {\r\n    listClick(event);\r\n});\r\n\r\n//Error\r\naudio.addEventListener('error', function (event) {\r\n    let str = '';\r\n    const err = audio.error;\r\n    switch (err.code) {\r\n        case MediaError.MEDIA_ERR_ABORTED:\r\n            str += \"The user canceled the audio\"\r\n            break;\r\n        case MediaError.MEDIA_ERR_NETWORK:\r\n            str += \"A network error\"\r\n            break;\r\n        case MediaError.MEDIA_ERR_DECODE:\r\n            str += \"An error occurred while decoding the audio\"\r\n            break;\r\n        case MediaError.MEDIA_ERR_SRC_NOT_SUPPORTED:\r\n            str += \"The audio is missing\";\r\n            break;\r\n        default:\r\n            str += \"An unknown error occurred\";\r\n            break;\r\n    }\r\n    if (str.length > 0) {\r\n        playerError.textContent = str;\r\n    }\r\n});\r\n\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (audioPlayer);\r\n\n\n//# sourceURL=webpack://momentum/./src/js/audio.js?");

/***/ }),

/***/ "./src/js/general.js":
/*!***************************!*\
  !*** ./src/js/general.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getRandom\": () => (/* binding */ getRandom),\n/* harmony export */   \"getTimeOfDay\": () => (/* binding */ getTimeOfDay)\n/* harmony export */ });\nconst getTimeOfDay = (hours) => {\r\n    const p = [\"night\", \"morning\", \"afternoon\", \"evening\"];\r\n    return p[Math.floor(hours / 6)];\r\n}\r\n\r\nconst getRandom = (min, max) => {\r\n    return Math.floor(Math.random() * (max - min) + min);\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/general.js?");

/***/ }),

/***/ "./src/js/greeting.js":
/*!****************************!*\
  !*** ./src/js/greeting.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.js */ \"./src/js/general.js\");\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.js */ \"./src/js/personal.js\");\n/* harmony import */ var _translation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.js */ \"./src/js/translation.js\");\n\r\n\r\n\r\n\r\nconst greeting = document.querySelector('.greeting');\r\nconst nameUser = document.querySelector('.name');\r\n\r\nfunction showGreeting() {\r\n    const date = new Date();\r\n    const hours = date.getHours();\r\n    const timeOfDay = (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.getTimeOfDay)(hours);\r\n    let greetingText = (_personal_js__WEBPACK_IMPORTED_MODULE_1__.options.language !== 'en') ? translateGreeting(timeOfDay) : `Good ${timeOfDay}`;\r\n    greeting.textContent = greetingText;\r\n}\r\n\r\nfunction nameUserChange() {\r\n    localStorage.setItem('name', nameUser.value);\r\n}\r\n\r\nfunction translateGreeting(text) {\r\n    const language = _personal_js__WEBPACK_IMPORTED_MODULE_1__.options.language;\r\n    const index = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].greeting.en.indexOf(text);\r\n    return _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].greeting[language][index];\r\n}\r\n\r\nnameUser.addEventListener('change', nameUserChange);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showGreeting);\n\n//# sourceURL=webpack://momentum/./src/js/greeting.js?");

/***/ }),

/***/ "./src/js/personal.js":
/*!****************************!*\
  !*** ./src/js/personal.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getLocalStorage\": () => (/* binding */ getLocalStorage),\n/* harmony export */   \"options\": () => (/* binding */ options),\n/* harmony export */   \"setLocalStorage\": () => (/* binding */ setLocalStorage)\n/* harmony export */ });\n/* harmony import */ var _settings_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./settings.js */ \"./src/js/settings.js\");\n\r\n\r\nconst nameUser = document.querySelector('.name');\r\nconst city = document.querySelector('.city') || 'Minsk';\r\nconst playList = document.querySelector('.play-list');\r\nlet options = {\r\n    language: 'en',\r\n    photoSource: 'github',\r\n    blocks: ['time', 'date', 'greeting', 'quote', 'weather', 'audio']\r\n}\r\n\r\nfunction getOptions() {\r\n    const checkedLanguage = document.querySelector('input[name=\"language\"]:checked');\r\n    const checkedBlocks = document.querySelectorAll('input[name=\"elements\"]:checked');\r\n    let blocks = [];\r\n    checkedBlocks.forEach(elem => {\r\n        blocks.push(elem.value);\r\n    })\r\n    options.blocks = blocks;\r\n    options.language = checkedLanguage.value;\r\n}\r\n\r\nfunction setOptions() {\r\n    const languageSettings = document.querySelectorAll('input[name=\"language\"]');\r\n    const blocksSettings = document.querySelectorAll('input[name=\"elements\"]');\r\n    languageSettings.forEach(elem => {\r\n        if (elem.value === options.language) {\r\n            elem.checked = true;\r\n        } else {\r\n            elem.checked = false;\r\n        }\r\n    })\r\n    blocksSettings.forEach(elem => {\r\n        if (options.blocks.includes(elem.value)) {\r\n            elem.checked = true;\r\n        } else {\r\n            elem.checked = false;\r\n        }\r\n    })\r\n}\r\n\r\nfunction setLocalStorage() {\r\n    localStorage.setItem('name', nameUser.value);\r\n    localStorage.setItem('city', city.value);\r\n    localStorage.setItem('playListHeight', playList.offsetHeight);\r\n    getOptions();\r\n    localStorage.setItem('options', JSON.stringify(options));\r\n}\r\n\r\nfunction getLocalStorage() {\r\n    if (localStorage.getItem('name')) {\r\n        nameUser.value = localStorage.getItem('name');\r\n    }\r\n    if (localStorage.getItem('city')) {\r\n        city.value = localStorage.getItem('city');\r\n    }\r\n    if (localStorage.getItem('playListHeight')) {\r\n        playList.style.height = localStorage.getItem('playListHeight') + 'px';\r\n    }\r\n    if (localStorage.getItem('options')) {\r\n        options = JSON.parse(localStorage.getItem('options'));\r\n        setOptions();\r\n        (0,_settings_js__WEBPACK_IMPORTED_MODULE_0__.toggleVisibleBlock)();\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/personal.js?");

/***/ }),

/***/ "./src/js/playList.js":
/*!****************************!*\
  !*** ./src/js/playList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst playList = [\r\n    {\r\n        title: 'Aqua Caelestis',\r\n        src: './assets/sounds/Aqua-Caelestis.mp3',\r\n        duration: '00:12'\r\n    },\r\n    {\r\n        title: 'River Flows In You',\r\n        src: './assets/sounds/River-Flows-In-You.mp3',\r\n        duration: '00:30'\r\n    },\r\n    {\r\n        title: 'Summer Wind',\r\n        src: './assets/sounds/Summer-Wind.mp3',\r\n        duration: '00:11'\r\n    },\r\n    {\r\n        title: 'Dan Lebowitz Jeremiahs Song',\r\n        src: './assets/sounds/Dan-lebowitz-jeremiahs-song.mp3',\r\n        duration: '00:10'\r\n    },\r\n    {\r\n        title: 'Dxnzxl Essence',\r\n        src: './assets/sounds/Dxnzxl-essence.mp3',\r\n        duration: '00:10'\r\n    },\r\n    {\r\n        title: 'Ennio Morricone',\r\n        src: './assets/sounds/Ennio-Morricone.mp3',\r\n        duration: '00:18'\r\n    },\r\n    {\r\n        title: 'Eqric feat Jessia Mirror',\r\n        src: './assets/sounds/Eqric-feat-jessia-mirror.mp3',\r\n        duration: '00:22'\r\n    },\r\n]\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (playList);\r\n\n\n//# sourceURL=webpack://momentum/./src/js/playList.js?");

/***/ }),

/***/ "./src/js/quote.js":
/*!*************************!*\
  !*** ./src/js/quote.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.js */ \"./src/js/general.js\");\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.js */ \"./src/js/personal.js\");\n\r\n\r\n\r\nconst quote = document.querySelector('.quote');\r\nconst author = document.querySelector('.author');\r\nconst changeQuoteButton = document.querySelector('.change-quote');\r\n\r\nasync function getQuotes() {\r\n    let language = _personal_js__WEBPACK_IMPORTED_MODULE_1__.options.language;\r\n    const quotes = 'data.json';\r\n    const res = await fetch(quotes);\r\n    const data = await res.json();\r\n    const maxNumber = data.length;\r\n    const numberQuote = (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.getRandom)(0, maxNumber - 1);\r\n    quote.textContent = data[numberQuote].text[language];\r\n    author.textContent = data[numberQuote].author[language];\r\n}\r\n\r\nchangeQuoteButton.addEventListener('click', getQuotes);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getQuotes);\n\n//# sourceURL=webpack://momentum/./src/js/quote.js?");

/***/ }),

/***/ "./src/js/settings.js":
/*!****************************!*\
  !*** ./src/js/settings.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addSettings\": () => (/* binding */ addSettings),\n/* harmony export */   \"toggleVisibleBlock\": () => (/* binding */ toggleVisibleBlock)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../index.js */ \"./src/index.js\");\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.js */ \"./src/js/personal.js\");\n/* harmony import */ var _translation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./translation.js */ \"./src/js/translation.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.js */ \"./src/js/weather.js\");\n\r\n\r\n\r\n\r\n\r\nconst closeBtn = document.querySelector('.settings-close');\r\nconst settings = document.querySelector('.settings');\r\nconst openBtn = document.querySelector('.settings-icon');\r\nconst blocksGroup = document.querySelector('.elements-group');\r\nconst languageGroup = document.querySelector('.language-group');\r\nconst elementsTitle = document.querySelector('.elements-title');\r\nconst elementsLabel = document.querySelectorAll('.elements-label');\r\nconst copyright = document.querySelector('.copyright-name');\r\nconst userName = document.querySelector('.name');\r\nconst city = document.querySelector('.city');\r\n\r\nconst blocksContent = ['time', 'date', 'greeting', 'quote', 'weather', 'audio'];\r\n\r\nfunction toggleSettings() {\r\n    settings.classList.toggle('open');\r\n}\r\n\r\nfunction toggleVisibleBlock() {\r\n    blocksContent.forEach(elem => {\r\n        let targetBlock = document.getElementById(`${elem}`);\r\n        if (_personal_js__WEBPACK_IMPORTED_MODULE_1__.options.blocks.includes(elem)) {\r\n            targetBlock.classList.remove('hide-element');\r\n        } else {\r\n            targetBlock.classList.add('hide-element');\r\n            // targetBlock.style.transitionDuration = '0s';\r\n        }\r\n    });\r\n}\r\n\r\nfunction addSettings() {\r\n    const language = _personal_js__WEBPACK_IMPORTED_MODULE_1__.options.language;\r\n    elementsTitle.textContent = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].elementsTitle[language];\r\n    elementsLabel.forEach((elem, index) => {\r\n        elem.textContent = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].elementsLabel[language][index];\r\n    })\r\n    closeBtn.textContent = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].closeBtn[language];\r\n    copyright.textContent = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].copyright[language];\r\n    userName.placeholder = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].userName[language];\r\n    city.placeholder = _translation_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].city[language];\r\n}\r\n\r\ncloseBtn.addEventListener('click', toggleSettings);\r\nopenBtn.addEventListener('click', toggleSettings);\r\ndocument.addEventListener('click', (event) => {\r\n    const target = event.target;\r\n    if (target === openBtn) return;\r\n    const itsSettings = target == settings || settings.contains(target);\r\n    if (settings.classList.contains(\"open\") && !itsSettings) {\r\n        toggleSettings();\r\n    }\r\n});\r\n\r\nblocksGroup.addEventListener('change', (event) => {\r\n    (0,_personal_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\r\n    toggleVisibleBlock();\r\n\r\n})\r\nlanguageGroup.addEventListener('change', (event) => {\r\n    ;(0,_personal_js__WEBPACK_IMPORTED_MODULE_1__.setLocalStorage)();\r\n    (0,_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n})\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/settings.js?");

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _general_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general.js */ \"./src/js/general.js\");\n\r\n\r\nlet randomNum = 1;\r\nconst slideNext = document.querySelector('.slide-next');\r\nconst slidePrev = document.querySelector('.slide-prev');\r\n\r\nfunction getRandomNum(min, max) {\r\n    randomNum = Math.floor(Math.random() * (max - min) + min);\r\n}\r\n\r\nfunction setBg() {\r\n    const date = new Date();\r\n    const hours = date.getHours();\r\n    const timeOfDay = (0,_general_js__WEBPACK_IMPORTED_MODULE_0__.getTimeOfDay)(hours);\r\n    const bgNum = String(randomNum).padStart(2, '0');\r\n    const bgLink = `https://raw.githubusercontent.com/NadezhdaShel/momentum-backgrounds/main/${timeOfDay}/${bgNum}.webp`\r\n    const img = new Image();\r\n    img.src = bgLink;\r\n    img.onload = () => {\r\n        document.body.style.backgroundImage = `url(${bgLink})`;\r\n    };\r\n}\r\n\r\nfunction getSlideNext() {\r\n    if (randomNum < 20) {\r\n        randomNum++;\r\n    } else {\r\n        randomNum = 1;\r\n    }\r\n    setBg();\r\n}\r\nfunction getSlidePrev() {\r\n    if (randomNum > 1) {\r\n        randomNum--;\r\n    } else {\r\n        randomNum = 20;\r\n    }\r\n    setBg();\r\n}\r\n\r\ngetRandomNum(1, 10);\r\nslideNext.addEventListener('click', getSlideNext);\r\nslidePrev.addEventListener('click', getSlidePrev);\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (setBg);\n\n//# sourceURL=webpack://momentum/./src/js/slider.js?");

/***/ }),

/***/ "./src/js/time.js":
/*!************************!*\
  !*** ./src/js/time.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _greeting_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./greeting.js */ \"./src/js/greeting.js\");\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.js */ \"./src/js/personal.js\");\n\r\n\r\n\r\nconst time = document.querySelector('.time');\r\nconst dateBlock = document.querySelector('.date');\r\n\r\nfunction showTime() {\r\n    const date = new Date();\r\n    const currentTime = date.toLocaleTimeString();\r\n    time.textContent = currentTime;\r\n    showDate();\r\n    (0,_greeting_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    setTimeout(showTime, 1000);\r\n}\r\n\r\n\r\nfunction showDate() {\r\n    let language = _personal_js__WEBPACK_IMPORTED_MODULE_1__.options.language;\r\n    let languageUpper = language.replace(/^./i, (e) => e.toUpperCase())\r\n    const date = new Date();\r\n    const opt = { weekday: 'long', month: 'long', day: 'numeric', timeZone: 'UTC' };\r\n    let currentDate = date.toLocaleDateString(`${language}-${languageUpper}`, opt);\r\n    dateBlock.textContent = currentDate;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (showTime);\n\n//# sourceURL=webpack://momentum/./src/js/time.js?");

/***/ }),

/***/ "./src/js/translation.js":
/*!*******************************!*\
  !*** ./src/js/translation.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst ruleTranslation = {\r\n    'elementsTitle': {\r\n        'en': 'Select visible elements',\r\n        'ru': 'Выберете видимые элементы',\r\n    },\r\n    'elementsLabel': {\r\n        'en': ['Time', 'Date', 'Greeting', 'Weather', 'Quote', 'Audio player'],\r\n        'ru': ['Время', 'Дата', 'Приветствие', 'Погода', 'Цитата', 'Аудио плеер'],\r\n    },\r\n    'closeBtn': {\r\n        'en': 'Close',\r\n        'ru': 'Закрыть',\r\n    },\r\n    'greeting': {\r\n        'en': [\"night\", \"morning\", \"afternoon\", \"evening\"],\r\n        'ru': [\"Доброй ночи\", \"Доброго утра\", \"Хорошего дня\", \"Хорошего вечера\"],\r\n    },\r\n    'wind': {\r\n        'en': 'm/s',\r\n        'ru': 'м/с',\r\n    },\r\n    'temp': {\r\n        'en': '°C',\r\n        'ru': '°С',\r\n    },\r\n    'copyright': {\r\n        'en': 'Nadezhda Shelepova',\r\n        'ru': 'Надежда Шелепова',\r\n    },\r\n    'userName': {\r\n        'en': 'User',\r\n        'ru': 'Пользователь',\r\n    },\r\n    'city': {\r\n        'en': 'Minsk',\r\n        'ru': 'Минск',\r\n    },\r\n\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ruleTranslation);\r\n\r\n\r\n\n\n//# sourceURL=webpack://momentum/./src/js/translation.js?");

/***/ }),

/***/ "./src/js/weather.js":
/*!***************************!*\
  !*** ./src/js/weather.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _translation_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./translation.js */ \"./src/js/translation.js\");\n/* harmony import */ var _personal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./personal.js */ \"./src/js/personal.js\");\n\r\n\r\n\r\nconst weatherIcon = document.querySelector('.weather-icon');\r\nconst temperature = document.querySelector('.temperature');\r\nconst weatherDescription = document.querySelector('.weather-description');\r\nconst wind = document.querySelector('.wind');\r\nconst humidity = document.querySelector('.humidity');\r\nconst city = document.querySelector('.city');\r\nconst weatherError = document.querySelector('.weather-error');\r\n\r\n\r\nasync function getWeather(cityValue) {\r\n    let language = _personal_js__WEBPACK_IMPORTED_MODULE_1__.options.language;\r\n    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&lang=${language}&appid=ce9410a5a39fcf35d3318c0e8aa32535&units=metric`;\r\n    const res = await fetch(url);\r\n    const data = await res.json();\r\n    try {\r\n        const tempUnit = _translation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].temp[language];\r\n        const windUnit = _translation_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].wind[language];\r\n        weatherIcon.classList.add(`owf-${data.weather[0].id}`);\r\n        temperature.textContent = `${Math.round(data.main.temp)} ${tempUnit}`;\r\n        wind.textContent = `${Math.round(data.wind.speed)} ${windUnit}`;\r\n        humidity.textContent = `${Math.round(data.main.humidity)} %`;\r\n        weatherDescription.textContent = data.weather[0].description;\r\n\r\n    } catch (error) {\r\n        let message = data.message;\r\n        let massageFormated = message.replace(/^./i, (e) => e.toUpperCase());\r\n        weatherError.textContent = massageFormated;\r\n    }\r\n\r\n}\r\n\r\nfunction clearWeather() {\r\n    weatherIcon.className = 'weather-icon owf';\r\n    temperature.textContent = '';\r\n    wind.textContent = '';\r\n    humidity.textContent = '';\r\n    weatherDescription.textContent = '';\r\n    weatherError.textContent = '';\r\n}\r\n\r\nfunction addWeather() {\r\n    const cityValue = localStorage.getItem('city') || 'Minsk';\r\n    getWeather(cityValue);\r\n}\r\n\r\ncity.addEventListener('change', function () {\r\n    const cityValue = city.value || 'Minsk';\r\n    clearWeather();\r\n    getWeather(cityValue);\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (addWeather);\r\n\n\n//# sourceURL=webpack://momentum/./src/js/weather.js?");

/***/ }),

/***/ "./src/assets/favicon.ico":
/*!********************************!*\
  !*** ./src/assets/favicon.ico ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/image/favicon.ico\";\n\n//# sourceURL=webpack://momentum/./src/assets/favicon.ico?");

/***/ }),

/***/ "./src/assets/sounds/Aqua-Caelestis.mp3":
/*!**********************************************!*\
  !*** ./src/assets/sounds/Aqua-Caelestis.mp3 ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/sounds/Aqua-Caelestis.mp3\";\n\n//# sourceURL=webpack://momentum/./src/assets/sounds/Aqua-Caelestis.mp3?");

/***/ }),

/***/ "./src/assets/svg/rsschool.svg":
/*!*************************************!*\
  !*** ./src/assets/svg/rsschool.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/svg/rsschool.svg\";\n\n//# sourceURL=webpack://momentum/./src/assets/svg/rsschool.svg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;