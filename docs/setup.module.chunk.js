webpackJsonp(["setup.module"],{

/***/ "./src/app/showcase/components/setup/setup-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_component__ = __webpack_require__("./src/app/showcase/components/setup/setup.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SetupRoutingModule = (function () {
    function SetupRoutingModule() {
    }
    SetupRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__setup_component__["a" /* SetupComponent */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SetupRoutingModule);
    return SetupRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/setup/setup.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Get Started</span>\n        <span>PrimeNG is a rich set of open source native Angular UI components.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <h3 style=\"margin-top:0px\">Download</h3>\n    <p>PrimeNG is available at npm, if you have an existing application run the following command to download it to your project.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install primeng --save\n</code>\n</pre>\n\n    <h3>Load Configuration</h3>\n    <p>PrimeNG is distributed in commonjs format, a module manager of your choice is required and this guide provides samples for SystemJS, WebPack and Angular CLI.</p>\n\n    <h3>Import</h3>\n    <p>UI components are configured as modules, once PrimeNG is downloaded and configured, modules and apis can be imported from 'primeng/*' shorthand in your application code. Documentation\n        of each component states the import path.\n    </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;AccordionModule&#125; from 'primeng/accordion';     //accordion and accordion tab\nimport &#123;MenuItem&#125; from 'primeng/api';                 //api\n</code>\n</pre>\n\n    <h3>Dependencies</h3>\n    <p>Majority of PrimeNG components (95%) are native and there are some exceptions having 3rd party dependencies. In addition, components require font-awesome for icons.</p>\n\n    <p>The css dependencies are as follows, font awesome, theme of your choice and structural css of components.</p>\n<pre>\n<code class=\"language-html\" pCode ngNonBindable>\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"YOUR_PATH/font-awesome.min.css\" /&gt;\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/themes/omega/theme.css\" /&gt;\n&lt;link rel=\"stylesheet\" type=\"text/css\" href=\"/node_modules/primeng/resources/primeng.min.css\" /&gt;\n</code>\n</pre>\n    \n    <p>Here is the list of components with 3rd party dependencies.</p>\n\n    <div class=\"doc-tablewrapper\">\n        <table class=\"doc-table\">\n            <thead>\n                <tr>\n                    <th>Component</th>\n                    <th>Dependency</th>\n                </tr>\n            </thead>\n            <tbody>\n                <tr>\n                    <td>Schedule</td>\n                    <td>FullCalendar and Moment.js</td>\n                </tr>\n                <tr>\n                    <td>Editor</td>\n                    <td>Quill Editor</td>\n                </tr>\n                <tr>\n                    <td>GMap</td>\n                    <td>Google Maps</td>\n                </tr>\n                <tr>\n                    <td>Charts</td>\n                    <td>Charts.js 2.7.x</td>\n                </tr>\n                <tr>\n                    <td>Captcha</td>\n                    <td>Google Recaptcha</td>\n                </tr>\n            </tbody>\n        </table>\n    </div>\n\n    <h3>Animations with Angular 4+</h3>\n    <p>Various components utilize angular animations to improve the user experience, starting with Angular 4 animations have their own module so you need\n    to import <i>BrowserAnimationsModule</i> to your application. If you prefer not to use <i>NoopAnimationsModule</i> instead.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\nnpm install @angular/animations --save\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;BrowserModule&#125; from '@angular/platform-browser';\nimport &#123;BrowserAnimationsModule&#125; from '@angular/platform-browser/animations';\n\n@NgModule(&#123;\n    imports: [\n        BrowserModule,\n        BrowserAnimationsModule,\n        //...\n    ],\n    //...\n&#125;)\nexport class YourAppModule &#123; &#125;\n</code>\n</pre>\n\n    <h3>Angular CLI Integration</h3>\n    <p>Angular CLI is the official CLI tool for Angular. We strongly suggest using Angular CLI when starting an Angular project.</p>\n\n    <h4>Dependencies</h4>\n    <p>Add PrimeNG and FontAwesome as a dependency</p>\n<pre>\n<code class=\"language-js\" pCode ngNonBindable>\n\"dependencies\": &#123;\n  //...\n  \"primeng\": \"^5.2.0\",\n  \"font-awesome\": \"^4.7.0\"\n&#125;,\n</code>\n</pre>\n\n    <h4>Styles Configuration</h4>\n    <p>Configure required styles at the styles section, example below uses the Omega theme.</p>\n<pre>\n<code class=\"language-js\" pCode ngNonBindable>\n\"styles\": [\n  \"../node_modules/font-awesome/css/font-awesome.min.css\",\n  \"../node_modules/primeng/resources/themes/omega/theme.css\",\n  \"../node_modules/primeng/resources/primeng.min.css\",\n  //...\n],\n</code>\n</pre>\n\n    <p>That is all, you may now import PrimeNG components, for a working example visit the <a href=\"https://github.com/primefaces/primeng-quickstart-cli\">PrimeNG CLI QuickStart</a> sample at GitHub.</p>\n\n    <h3>Angular Seed Integration</h3>\n    <p>Angular2 Seed is an alternative modular starter project, there is an <a href=\"https://github.com/mgechev/angular2-seed/wiki/Add-PrimeNG\">official entry</a> at the project wiki\n        describing how to use PrimeNG with seed.</p>\n\n    <h3>QuickStart with System.js</h3>\n    <p><a href=\"https://angular.io/docs/ts/latest/quickstart.html\">The official quickstart example</a> of Angular uses System.JS and we\n    have extended it to add PrimeNG. Visit the <a href=\"https://github.com/primefaces/primeng-quickstart\">PrimeNG-Quickstart</a> at GitHub for an example.</p>\n\n    <h3>QuickStart with Webpack</h3>\n    <p>There is also a webpack version of the <a href=\"https://angular.io/docs/ts/latest/guide/webpack.html\">The official quickstart example</a> of Angular and we\n    have extended it to add PrimeNG. Visit the <a href=\"https://github.com/primefaces/primeng-quickstart-webpack\">PrimeNG-Quickstart-Webpack</a> at GitHub for an example.</p>\n\n    <h4>External Articles</h4>\n    <ul>\n        <li><a href=\"https://yakovfain.com/2016/10/06/primeng-ui-components-for-angular-2/\">PrimeNG - UI Components for Angular 2</a> - Yakov Fain's Blog</li>\n        <li><a href=\"https://yakovfain.com/2016/10/28/adding-primeng-ui-components-to-angular-cli-project/\">Adding PrimeNG UI components to Angular CLI projects</a> - Yakov Fain's Blog</li>\n        <li><a href=\"https://blog.davincisoftware.sk/primeng-web-component-framework-based-on-angularjs-2\">PRIMENG - WEB COMPONENT FRAMEWORK BASED ON ANGULARJS 2</a> - DaVinci IT Blog</li>\n        <li><a href=\"http://blogs.bytecode.com.au/glen/2016/10/27/primeng-with-angular-cli.html\">PrimeNG with CLI</a> - Glen Smith</li>\n        <li><a href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/3304/Hello-World-Angular-2-Data-Sample-Using-JavaScriptServices-Net-Core-and-PrimeNg.aspx\">Hello World Angular 2+ Data Sample Using JavaScriptServices .Net Core and PrimeNg</a></li>\n        <li><a href=\"http://lightswitchhelpwebsite.com/Blog/tabid/61/EntryId/3298/An-Angular-2-Tree-With-CRUD-Functionality.aspx\">An Angular 2 Tree With CRUD Functionality</a></li>\n    </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/setup/setup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SetupComponent = (function () {
    function SetupComponent() {
    }
    SetupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/setup/setup.component.html")
        })
    ], SetupComponent);
    return SetupComponent;
}());



/***/ }),

/***/ "./src/app/showcase/components/setup/setup.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetupModule", function() { return SetupModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__setup_component__ = __webpack_require__("./src/app/showcase/components/setup/setup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__setup_routing_module__ = __webpack_require__("./src/app/showcase/components/setup/setup-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SetupModule = (function () {
    function SetupModule() {
    }
    SetupModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */],
                __WEBPACK_IMPORTED_MODULE_3__setup_routing_module__["a" /* SetupRoutingModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__setup_component__["a" /* SetupComponent */]
            ]
        })
    ], SetupModule);
    return SetupModule;
}());



/***/ })

});
//# sourceMappingURL=setup.module.chunk.js.map