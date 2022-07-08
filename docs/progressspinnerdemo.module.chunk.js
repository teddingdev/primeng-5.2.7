webpackJsonp(["progressspinnerdemo.module"],{

/***/ "./src/app/components/progressspinner/progressspinner.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ProgressSpinner */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProgressSpinner = (function () {
    function ProgressSpinner() {
        this.strokeWidth = "2";
        this.fill = "none";
        this.animationDuration = "2s";
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ProgressSpinner.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "strokeWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "fill", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ProgressSpinner.prototype, "animationDuration", void 0);
    ProgressSpinner = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-progressSpinner',
            template: "\n        <div class=\"ui-progress-spinner\" [ngStyle]=\"style\" [ngClass]=\"styleClass\">\n            <svg class=\"ui-progress-spinner-svg\" viewBox=\"25 25 50 50\" [style.animation-duration]=\"animationDuration\">\n                <circle class=\"ui-progress-spinner-circle\" cx=\"50\" cy=\"50\" r=\"20\" [attr.fill]=\"fill\" [attr.stroke-width]=\"strokeWidth\" stroke-miterlimit=\"10\"/>\n            </svg>\n        </div>\n    "
        })
    ], ProgressSpinner);
    return ProgressSpinner;
}());

var ProgressSpinnerModule = (function () {
    function ProgressSpinnerModule() {
    }
    ProgressSpinnerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [ProgressSpinner],
            declarations: [ProgressSpinner]
        })
    ], ProgressSpinnerModule);
    return ProgressSpinnerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressspinnerdemo__ = __webpack_require__("./src/app/showcase/components/progressspinner/progressspinnerdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProgressSpinnerDemoRoutingModule = (function () {
    function ProgressSpinnerDemoRoutingModule() {
    }
    ProgressSpinnerDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__progressspinnerdemo__["a" /* ProgressSpinnerDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ProgressSpinnerDemoRoutingModule);
    return ProgressSpinnerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ProgressSpinner</span>\n        <span>ProgressSpinner is a process status indicator.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-progressSpinner></p-progressSpinner>\n\n    <h3>Custom</h3>\n    <p-progressSpinner [style]=\"{width: '50px', height: '50px'}\" strokeWidth=\"8\" fill=\"#EEEEEE\" animationDuration=\".5s\"></p-progressSpinner>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ProgressSpinnerModule&#125; from 'primeng/progressspinner';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ProgressSpinner is defined using p-progressSpinner element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-progressSpinner&gt;&lt;/p-progressSpinner&gt;\n</code>\n</pre>\n            <h3>Colors</h3>\n            <p>Colors of the spinner can be changed by overriding the keyframes animation</p>\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n@keyframes ui-progress-spinner-color &#123;\n    100%,\n    0% &#123;\n        stroke: #d62d20;\n    &#125;\n    40% &#123;\n        stroke: #0057e7;\n    &#125;\n    66% &#123;\n        stroke: #008744;\n    &#125;\n    80%,\n    90% &#123;\n        stroke: #ffa700;\n    &#125;\n&#125;\n</code>\n</pre>\n            \n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>strokeWidth</td>\n                            <td>string</td>\n                            <td>2</td>\n                            <td>Width of the circle stroke.</td>\n                        </tr>\n                        <tr>\n                            <td>fill</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Color for the background of the circle.</td>\n                        </tr>\n                        <tr>\n                            <td>animationDuration</td>\n                            <td>string</td>\n                            <td>2s</td>\n                            <td>Duration of the rotate animation.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-progress-spinner</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progress-circle</td>\n                            <td>SVG element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-progress-path</td>\n                            <td>Circle element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/progressbar\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Basic&lt;/h3&gt;\n&lt;p-progressSpinner&gt;&lt;/p-progressSpinner&gt;\n\n&lt;h3&gt;Custom&lt;/h3&gt;\n&lt;p-progressSpinner [style]=\"&#123;width: '50px', height: '50px'&#125;\" strokeWidth=\"8\" fill=\"#EEEEEE\" animationDuration=\".5s\"&gt;&lt;/p-progressSpinner&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressSpinnerDemoModule", function() { return ProgressSpinnerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__progressspinnerdemo__ = __webpack_require__("./src/app/showcase/components/progressspinner/progressspinnerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__progressspinnerdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/progressspinner/progressspinnerdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_progressspinner_progressspinner__ = __webpack_require__("./src/app/components/progressspinner/progressspinner.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ProgressSpinnerDemoModule = (function () {
    function ProgressSpinnerDemoModule() {
    }
    ProgressSpinnerDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__progressspinnerdemo_routing_module__["a" /* ProgressSpinnerDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_progressspinner_progressspinner__["a" /* ProgressSpinnerModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__progressspinnerdemo__["a" /* ProgressSpinnerDemo */]
            ]
        })
    ], ProgressSpinnerDemoModule);
    return ProgressSpinnerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/progressspinner/progressspinnerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProgressSpinnerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ProgressSpinnerDemo = (function () {
    function ProgressSpinnerDemo() {
    }
    ProgressSpinnerDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/progressspinner/progressspinnerdemo.html")
        })
    ], ProgressSpinnerDemo);
    return ProgressSpinnerDemo;
}());



/***/ })

});
//# sourceMappingURL=progressspinnerdemo.module.chunk.js.map