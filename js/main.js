/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");

var menuButton = document.querySelector(".button__menu");
var closeButton = document.querySelector(".burger-menu-button");
var burgerMenu = document.querySelector(".burger-menu");

menuButton.onclick = function () {
  burgerMenu.classList.add("active");
};

closeButton.onclick = function () {
  burgerMenu.classList.remove("active");
};

function runningNumbers(num, elem, step, time) {
  var element = document.querySelector('.' + elem);
  var n = 0;
  var t = Math.round(time / (num / step));
  var interval = setInterval(function () {
    n = n + step;

    if (n >= num) {
      clearInterval(interval);
      n = num;
    }

    element.innerHTML = n;
  }, t);
}

var counter = document.querySelector('.counter-block');
var counterTop = counter.getBoundingClientRect().top + window.pageYOffset;
var counterBottom = counter.getBoundingClientRect().bottom + window.pageYOffset;
var counterHeight = counterBottom - counterTop;
window.addEventListener('scroll', function onScroll() {
  if (window.pageYOffset > counterTop - window.innerHeight + counterHeight) {
    this.removeEventListener('scroll', onScroll);
    runningNumbers(12, "counter-block__published", 2, 700);
    runningNumbers(5, "counter-block__bestsellers", 1, 500);
    runningNumbers(15000, "counter-block__readers", 367, 1600);
  }
});
var anchor = document.querySelector('.arrow-up');
var mainPage = document.querySelector('.main-page');
var mainPageBottom = mainPage.getBoundingClientRect().bottom + window.pageYOffset;
window.addEventListener('scroll', function () {
  if (window.pageYOffset < mainPageBottom) anchor.style.opacity = '0';else {
    anchor.style.opacity = '0.6';
    anchor.style.visibility = 'visible';
  }
});
anchor.addEventListener("click", function (e) {
  e.preventDefault();

  var _goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body';

  document.querySelector(_goto).scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
anchor.addEventListener("mouseover", function (e) {
  anchor.style.opacity = '1';
});
anchor.addEventListener("mouseout", function (e) {
  anchor.style.opacity = '0.6';
});
var aboutBlockButton = document.querySelector(".about-block-table__button");
var nextItems = document.querySelector(".about-block-table__list_next");

aboutBlockButton.onclick = function () {
  if (!aboutBlockButton.classList.contains('close')) {
    nextItems.style.opacity = '1';
    nextItems.style.visibility = 'visible';
    aboutBlockButton.innerHTML = 'Close';
    aboutBlockButton.style.bottom = '-65px';
    aboutBlockButton.classList.add('close');
  } else {
    nextItems.style.opacity = '0';
    aboutBlockButton.innerHTML = 'More';
    aboutBlockButton.style.bottom = '115px';
    aboutBlockButton.classList.remove('close');
  }
};

/***/ })

/******/ });
//# sourceMappingURL=main.js.map