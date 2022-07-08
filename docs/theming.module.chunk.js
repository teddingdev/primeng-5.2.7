webpackJsonp(["theming.module"],{

/***/ "./src/app/showcase/components/theming/theming-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("./src/app/showcase/components/theming/theming.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ThemingRoutingModule = (function () {
    function ThemingRoutingModule() {
    }
    ThemingRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ThemingRoutingModule);
    return ThemingRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/theming/theming.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Theming</span>\n        <span>Create your own PrimeNG experience using free themes, premium themes and PrimeNG Designer API.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 style=\"margin-top:0px\">Structure and Skin</h3>\n    <p>Structural CSS and Theming CSS are separated, primeng.css file contains the structural css whereas theme.css files provide the skin on top of the structure.</p>\n\n    <p>Structural css properties such as margin, padding, display type, dimensions and positioning are defined at component specific styles.\n    Refer to documentation of each component for the list of structural classes per component such as .ui-panel.</p>\n\n    <p>Free themes make use of the following style classes that define skinning properties like colors, border colors, background images.</p>\n\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Style Class</th>\n                    <th>Applies</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>ui-widget</td>\n                    <td>All PrimeNG components</td>\n                </tr>\n                <tr>\n                    <td>ui-widget-header</td>\n                    <td>Header section of a component</td>\n                </tr>\n                <tr>\n                    <td>ui-widget-content</td>\n                    <td>Content section of a component</td>\n                </tr>\n                <tr>\n                    <td>ui-state-default</td>\n                    <td>Default state of a clickable element</td>\n                </tr>\n                <tr>\n                    <td>ui-state-hover</td>\n                    <td>Hover state of a clickable element like mouse over</td>\n                </tr>\n                <tr>\n                    <td>ui-state-active</td>\n                    <td>Active state of a clickable element like mouse press</td>\n                </tr>\n                <tr>\n                    <td>ui-state-highlight</td>\n                    <td>Highlighed elements</td>\n                </tr>\n                <tr>\n                    <td>ui-state-disabled</td>\n                    <td>Disabled elements</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <p>These classes are not aware of structural css like margins and paddings, mostly they only define colors. \n        This clean separation brings simplicity in theming because you don’t need to know each and every skinning selectors of components to change their style.</p>\n\n    <p>For example Panel component’s header section has the \"ui-panel-titlebar\" structural class, to change the color of a panel\n        header you don’t need to about this class as \"ui-widget-header\" defines colors for panel header. However if you only\n        want to customize the headers of all panel component you need to use the \"ui-panel-titlebar\" instead of the global \"ui-widget-header\".\n        Additionally to change the style of a particular panel header instead of of panels, use the styleClass property of the\n        panel instead.</p>\n   \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-panel styleClass=\"my-panel\"&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n.my-panel .ui-panel-titlebar &#123;\n    background: #000000 \n&#125;\n</code>\n</pre>\n\n    <p>If your css is added using styles or stylesUrl property of a component, it may not be applied due to ViewEncapsulation, in this case you may consider changing the ViewEncapsulation\n        of your component as \"none\".\n    </p>\n\n    <p>16 free themes are available for PrimeNG, based on a basic SASS structure whereas premium themes and designer api offer far more advanced SASS integration with advanced customization options.</p>\n\n    <p>In order to create a custom theme based on the free themes structure, define the variables below and import the <a href=\"https://github.com/primefaces/primeng/blob/master/src/assets/components/themes/_theme.scss\">_theme.scss</a>.</p>\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n$fontFamily: Lucida Grande, Lucida Sans, Arial, sans-serif;\n$fontSize: 1em;\n$borderRadius: 6px;\n$disabledOpacity: 0.35;\n\n//Header\n$headerBorderWidth: 1px;\n$headerBorderColor: #aed0ea;\n$headerBgColor: #deedf7;\n$headerTextColor: #222222;\n$headerFontWeight: bold;\n$headerIconTextColor: #222222;\n\n//Content\n$contentBorderWidth: 1px;\n$contentBorderColor: #dddddd;\n$contentBgColor: #f2f5f7;\n$contentTextColor: #362b36;\n\n//Default State\n$stateDefaultBorderWidth: 1px;\n$stateDefaultBorderColor: #aed0ea;\n$stateDefaultBgColor: #d7ebf9;\n$stateDefaultTextColor: #2779aa;\n\n//Active State\n$stateActiveBorderColor: #2694e8;\n$stateActiveBgColor: #3baae3;\n$stateActiveTextColor: #ffffff;\n\n//Highlight State\n$stateHighlightBorderColor: #f9dd34;\n$stateHighlightBgColor: #ffef8f;\n$stateHighlightTextColor: #363636;\n\n//Focus State\n$stateFocusBorderColor: #74b2e2;\n$stateFocusBgColor: #e4f1fb;\n$stateFocusTextColor: #0070a3;\n\n//Error State\n$stateErrorBorderColor: #cd0a0a;\n$stateErrorBgColor: #cd0a0a;\n$stateErrorTextColor: #ffffff;\n\n//Hover State\n$stateHoverBorderColor: #74b2e2;\n$stateHoverBgColor: #e4f1fb;\n$stateHoverTextColor: #0070a3;\n\n//Forms\n$inputBgColor: #ffffff;\n$inputTextColor: #222222;\n$invalidInputBorderColor: #cd0a0a;\n$inputGroupTextColor: #2779aa;\n\n@import '../_theme';\n</code>\n</pre>\n\n    <p>Premium themes have advanced sass customization, refer to documentation of each theme such as <a href=\"https://www.primefaces.org/serenity-ng/#/documentation\">Serenity</a>.</p>\n\n    <p>Font-size of free themes use em to define the font size of the widgets using .ui-widget class. This is 1em by default and it is suggested to define a base font-size at the body element of your application to adjust the size of\n    components.</p>\n\n    <h3>Premium Layouts and Themes</h3>\n    <p>PrimeNG offers advanced sass based, fully customizable and easy to use <a href=\"http://www.primefaces.org/themes\">premium themes and layouts</a> such as <b>Ultima</b>\n        as Angular CLI projects.</p>\n\n    <a href=\"http://www.primefaces.org/layouts/ultima\">\n        <img alt=\"Ultima\" src=\"http://www.primefaces.org/images/market/ultima/ultima_layout_biggest.png\" style=\"width:100%\"/> \n    </a>\n\n    <h3>Designer API</h3>\n    <p>In case free themes and the premium templates/themes are not for you, you may be interested in the powerful PrimeNG Designer API.</p><p>\n        <a href=\"https://www.primefaces.org/designer/primeng\">Designer API</a> is a SASS based theme engine to create PrimeNG themes easily featuring over 500 variables, \n        a demo application and a base sample theme. Whether you have your own style guide or just need a custom theme, Designer API is the right tool to design and bring them to existence</p>\n        <p>Visit <a href=\"https://www.primefaces.org/designer/primeng\">Designer API HomePage</a> for more information, live demos and access to a trial version.</p>\n    <a href=\"http://www.primefaces.org/designer/primeng\">\n        <img alt=\"Why You Should PrimeNG\" src=\"assets/showcase/images/primeng-designer.jpg\" style=\"width:100%\">\n    </a>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/theming/theming.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ThemingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ThemingComponent = (function () {
    function ThemingComponent() {
    }
    ThemingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/theming/theming.component.html")
        })
    ], ThemingComponent);
    return ThemingComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/theming/theming.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemingModule", function() { return ThemingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__theming_component__ = __webpack_require__("./src/app/showcase/components/theming/theming.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__ = __webpack_require__("./src/app/showcase/components/theming/theming-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var ThemingModule = (function () {
    function ThemingModule() {
    }
    ThemingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__theming_routing_module__["a" /* ThemingRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__theming_component__["a" /* ThemingComponent */]
            ]
        })
    ], ThemingModule);
    return ThemingModule;
}());



/***/ })

});
//# sourceMappingURL=theming.module.chunk.js.map