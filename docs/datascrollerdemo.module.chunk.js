webpackJsonp(["datascrollerdemo.module"],{

/***/ "./src/app/components/datascroller/datascroller.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export DataScroller */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("./src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DataScroller = (function () {
    function DataScroller(el, renderer, domHandler, zone) {
        this.el = el;
        this.renderer = renderer;
        this.domHandler = domHandler;
        this.zone = zone;
        this.buffer = 0.9;
        this.trackBy = function (index, item) { return item; };
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.dataToRender = [];
        this.first = 0;
        this.page = 0;
    }
    DataScroller.prototype.ngOnInit = function () {
        this.load();
    };
    DataScroller.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.loader) {
            this.loaderClickListener = this.renderer.listen(this.loader, 'click', function () {
                _this.load();
            });
        }
        else {
            this.bindScrollListener();
        }
    };
    DataScroller.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'item':
                    _this.itemTemplate = item.template;
                    break;
                default:
                    _this.itemTemplate = item.template;
                    break;
            }
        });
    };
    DataScroller.prototype.load = function () {
        if (this.lazy) {
            this.onLazyLoad.emit({
                first: this.page * this.rows,
                rows: this.rows
            });
        }
        this.page = this.page + 1;
    };
    DataScroller.prototype.shouldLoad = function () {
        if (this.lazy)
            return (this.rows * this.page < this.totalRecords);
        else
            return this.value && this.value.length && (this.rows * this.page < this.value.length);
    };
    DataScroller.prototype.reset = function () {
        this.page = 0;
    };
    DataScroller.prototype.isEmpty = function () {
        return !this.value || (this.value.length == 0);
    };
    DataScroller.prototype.bindScrollListener = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            if (_this.inline) {
                _this.inlineScrollListener = _this.onInlineScroll.bind(_this);
                _this.contentViewChild.nativeElement.addEventListener('scroll', _this.inlineScrollListener);
            }
            else {
                _this.windowScrollListener = _this.onWindowScroll.bind(_this);
                window.addEventListener('scroll', _this.windowScrollListener);
            }
        });
    };
    DataScroller.prototype.unbindScrollListener = function () {
        if (this.inlineScrollListener) {
            this.contentViewChild.nativeElement.removeEventListener('scroll', this.inlineScrollListener);
        }
        if (this.windowScrollListener) {
            window.removeEventListener('scroll', this.windowScrollListener);
        }
        if (this.loaderClickListener) {
            this.loaderClickListener();
            this.loaderClickListener = null;
        }
    };
    DataScroller.prototype.onInlineScroll = function () {
        var _this = this;
        var scrollTop = this.contentViewChild.nativeElement.scrollTop;
        var scrollHeight = this.contentViewChild.nativeElement.scrollHeight;
        var viewportHeight = this.contentViewChild.nativeElement.clientHeight;
        if ((scrollTop >= ((scrollHeight * this.buffer) - (viewportHeight)))) {
            if (this.shouldLoad()) {
                this.zone.run(function () {
                    _this.load();
                });
            }
        }
    };
    DataScroller.prototype.onWindowScroll = function () {
        var _this = this;
        var docBody = document.body;
        var docElement = document.documentElement;
        var scrollTop = (window.pageYOffset || document.documentElement.scrollTop);
        var winHeight = docElement.clientHeight;
        var docHeight = Math.max(docBody.scrollHeight, docBody.offsetHeight, winHeight, docElement.scrollHeight, docElement.offsetHeight);
        if (scrollTop >= ((docHeight * this.buffer) - winHeight)) {
            if (this.shouldLoad()) {
                this.zone.run(function () {
                    _this.load();
                });
            }
        }
    };
    DataScroller.prototype.ngOnDestroy = function () {
        this.unbindScrollListener();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], DataScroller.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], DataScroller.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataScroller.prototype, "lazy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], DataScroller.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], DataScroller.prototype, "buffer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], DataScroller.prototype, "inline", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "scrollHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "loader", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], DataScroller.prototype, "totalRecords", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], DataScroller.prototype, "trackBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["d" /* Header */]),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "header", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["b" /* Footer */]),
        __metadata("design:type", Object)
    ], DataScroller.prototype, "footer", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], DataScroller.prototype, "templates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], DataScroller.prototype, "contentViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], DataScroller.prototype, "onLazyLoad", void 0);
    DataScroller = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-dataScroller',
            template: "\n    <div [ngClass]=\"{'ui-datascroller ui-widget': true, 'ui-datascroller-inline': inline}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n        <div class=\"ui-datascroller-header ui-widget-header ui-corner-top\" *ngIf=\"header\">\n            <ng-content select=\"p-header\"></ng-content>\n        </div>\n        <div #content class=\"ui-datascroller-content ui-widget-content\" [ngStyle]=\"{'max-height': scrollHeight}\">\n            <ul class=\"ui-datascroller-list\">\n                <li *ngFor=\"let item of value | slice:first:(first + (page * rows)); trackBy: trackBy; let i = index\">\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: item, index: i}\"></ng-container>\n                </li>\n            </ul>\n        </div>\n        <div class=\"ui-datascroller-footer ui-widget-header ui-corner-bottom\" *ngIf=\"footer\">\n            <ng-content select=\"p-footer\"></ng-content>\n        </div>\n    </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], DataScroller);
    return DataScroller;
}());

var DataScrollerModule = (function () {
    function DataScrollerModule() {
    }
    DataScrollerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [DataScroller, __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */]],
            declarations: [DataScroller]
        })
    ], DataScrollerModule);
    return DataScrollerModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DatascrollerDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datascrollerdemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datascrollerinfinitedemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datascrollerinlinedemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datascrollerloaderdemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var DatascrollerDemoRoutingModule = (function () {
    function DatascrollerDemoRoutingModule() {
    }
    DatascrollerDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__datascrollerdemo__["a" /* DataScrollerDemo */] },
                    { path: 'inline', component: __WEBPACK_IMPORTED_MODULE_4__datascrollerinlinedemo__["a" /* DataScrollerInlineDemo */] },
                    { path: 'loader', component: __WEBPACK_IMPORTED_MODULE_5__datascrollerloaderdemo__["a" /* DataScrollerLoaderDemo */] },
                    { path: 'infinite', component: __WEBPACK_IMPORTED_MODULE_3__datascrollerinfinitedemo__["a" /* DataScrollerInfiniteDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], DatascrollerDemoRoutingModule);
    return DatascrollerDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo.html":
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataScroller</span>\n        <span>DataScroller displays data with on demand loading using scroll. Scroll down to view the demo.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;DataScrollerModule&#125; from 'primeng/datascroller';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>DataScroller requires a collection of items as its value, number of rows to load and a ng-template content to display\n                    where each item can be accessed using the implicit variable.</p>\n\n            <p>Throughout the samples, a car interface having vin, brand, year and color properties are used\n                to define an object to be displayed by the datascroller. Cars are loaded by a CarService that\n                connects to a server to fetch the cars with a Promise.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Injectable&#125; from 'angular2/core';\nimport &#123;Http, Response&#125; from 'angular2/http';\nimport &#123;Car&#125; from '../domain/car';\n\n@Injectable()\nexport class CarService &#123;\n\n    constructor(private http: Http) &#123;&#125;\n\n    getCarsLarge() &#123;\n        return this.http.get('/showcase/resources/data/cars-large.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.json().data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Here is a sample DataScroller that displays a list of cars where each load event adds 10 more rows if available.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataScrollertDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsLarge().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n\n            <h3>Sections</h3>\n            <p>Header and Footer are the two sections that are capable of displaying custom content.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\"&gt;\n    &lt;p-header&gt;List of Cars&lt;/p-header&gt;\n    &lt;p-footer&gt;Choose from the list.&lt;/p-footer&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n\n            <h3>Inline</h3>\n            <p>By default DataScroller listens to the scroll event of window, the alternative is the inline mode where container of the DataScroller element itself is used as the event target. Set inline option to true to enable this mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [inline]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n\n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging happens. To implement lazy loading,\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource along with the logical number of total records. onLazyLoad gets an event object\n            that contains information about what to load.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\" [lazy]=\"true\" (onLazyLoad)=\"loadData($event)\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        Car content\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadData(event) &#123;\n    //event.first = First row offset\n    //event.rows = Number of rows per page\n    //add more records to the cars array\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to fetch in a load event.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>inline</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if the event target to listen the scroll event is the element itself.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Max height of the content area in inline mode.</td>\n                        </tr>\n                        <tr>\n                            <td>loader</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Reference of the target element whose click event loads the data instead of scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>trackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>buffer</td>\n                            <td>number</td>\n                            <td>0.9</td>\n                            <td>Number of buffer size.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br></td>\n                            <td>Callback to invoke in lazy mode to load new data.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>reset</td>\n                            <td>-</td>\n                            <td>Resets data.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-datascroller</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datascroller-header</td>\n                            <td>Header section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datascroller-footer</td>\n                            <td>Footer section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datascroller-content</td>\n                            <td>Wrapper of item container.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datascroller-list</td>\n                            <td>Item container element.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\"&gt;\n    &lt;p-header&gt;\n        Scroll Down to Load More\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\" let-i=\"index\"&gt;\n        &lt;div class=\"ui-g car-item\"&gt;\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\n                &lt;div class=\"ui-g\"&gt;\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataScrollerDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataScroller [value]=\"cars\" [rows]=\"10\">\n        <p-header>\n            Scroll Down to Load More\n        </p-header>\n        <ng-template let-car pTemplate=\"item\" let-i=\"index\">\n            <div class=\"ui-g car-item\">\n                <div class=\"ui-g-12 ui-md-3\">\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                </div>\n                <div class=\"ui-g-12 ui-md-9\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-dataScroller>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataScrollerDemoModule", function() { return DataScrollerDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__datascrollerdemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__datascrollersubmenu__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollersubmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__datascrollerinfinitedemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__datascrollerinlinedemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__datascrollerloaderdemo__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__datascrollerdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/datascroller/datascrollerdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_datascroller_datascroller__ = __webpack_require__("./src/app/components/datascroller/datascroller.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_dialog_dialog__ = __webpack_require__("./src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_growl_growl__ = __webpack_require__("./src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var DataScrollerDemoModule = (function () {
    function DataScrollerDemoModule() {
    }
    DataScrollerDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__datascrollerdemo_routing_module__["a" /* DatascrollerDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_datascroller_datascroller__["a" /* DataScrollerModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_10__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_11__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_12__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_13__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__datascrollerdemo__["a" /* DataScrollerDemo */],
                __WEBPACK_IMPORTED_MODULE_4__datascrollerinfinitedemo__["a" /* DataScrollerInfiniteDemo */],
                __WEBPACK_IMPORTED_MODULE_5__datascrollerinlinedemo__["a" /* DataScrollerInlineDemo */],
                __WEBPACK_IMPORTED_MODULE_6__datascrollerloaderdemo__["a" /* DataScrollerLoaderDemo */],
                __WEBPACK_IMPORTED_MODULE_3__datascrollersubmenu__["a" /* DataScrollerSubMenu */]
            ]
        })
    ], DataScrollerDemoModule);
    return DataScrollerDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollerDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("./src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataScrollerDemo = (function () {
    function DataScrollerDemo(carService) {
        this.carService = carService;
    }
    DataScrollerDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataScrollerDemo.prototype.selectCar = function (car) {
        this.selectedCar = car;
        this.displayDialog = true;
    };
    DataScrollerDemo.prototype.onDialogHide = function () {
        this.selectedCar = null;
    };
    DataScrollerDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/datascroller/datascrollerdemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], DataScrollerDemo);
    return DataScrollerDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.html":
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataScroller  - Infinite</span>\n        <span>DataScroller supports lazy loading via virtual scrolling so that each scroll event fetches new chunk of data from a remote datasource. This example generates\n        the new records on-the-fly and scrolling is infinite.</span><br><span>Scroll to the bottom of this page to see the demo.</span>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">    \n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datascrollerinfinitedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataScrollerInfiniteDemo &#123;\n\n    cars: Car[];\n    \n    msgs: Message[] = [];\n    \n    constructor(private carService: CarService) &#123; &#125;\n    \n    loadData(event) &#123;\n        //initialize\n        if(!this.cars) &#123;\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\n        &#125;\n        //in real application, newArray should be loaded from a remote datasource\n        else &#123;\n            let newArray = this.cars.slice(0);\n            for(let i = 0; i < newArray.length; i++) &#123;\n                this.cars.push(newArray[i]);\n            &#125;\n            this.msgs = [];\n            this.msgs.push(&#123;severity:'info', summary:'Data Loaded', detail:'Between ' + event.first + ' and ' + (event.first + event.rows)&#125;);\n        &#125;        \n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datascrollerinfinitedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinfinitedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\" (onLazyLoad)=\"loadData($event)\" [lazy]=\"true\"&gt;\n    &lt;p-header&gt;\n        Scroll Down to to Load More\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g car-item\"&gt;\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\n                &lt;div class=\"ui-g\"&gt;\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-dataScroller [value]=\"cars\" [rows]=\"10\" (onLazyLoad)=\"loadData($event)\" [lazy]=\"true\" [totalRecords]=\"totalRecords\">\n        <p-header>\n            Scroll Down to to Load More\n        </p-header>\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-g car-item\">\n                <div class=\"ui-g-12 ui-md-3\">\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                </div>\n                <div class=\"ui-g-12 ui-md-9\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-dataScroller>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinfinitedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollerInfiniteDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("./src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataScrollerInfiniteDemo = (function () {
    function DataScrollerInfiniteDemo(carService) {
        this.carService = carService;
        this.msgs = [];
        this.totalRecords = 50;
    }
    DataScrollerInfiniteDemo.prototype.loadData = function (event) {
        var _this = this;
        //initialize
        if (!this.cars) {
            this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        }
        else {
            var newArray = this.cars.slice(0);
            for (var i = 0; i < newArray.length; i++) {
                this.cars.push(newArray[i]);
            }
            this.msgs = [];
            this.msgs.push({ severity: 'info', summary: 'Data Loaded', detail: 'Between ' + event.first + ' and ' + (event.first + event.rows) });
        }
    };
    DataScrollerInfiniteDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/datascroller/datascrollerinfinitedemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], DataScrollerInfiniteDemo);
    return DataScrollerInfiniteDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.html":
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataScroller - <span class=\"subitem\">Inline</span></span>\n        <span>DataScroller can listen scroll event of itself rather than document in inline mode.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataScroller [value]=\"cars\" [rows]=\"10\" [inline]=\"true\" scrollHeight=\"500px\">\n        <p-header>\n            Scroll Down to to Load More\n        </p-header>\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-g car-item\">\n                <div class=\"ui-g-12 ui-md-3\">\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                </div>\n                <div class=\"ui-g-12 ui-md-9\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n    </p-dataScroller>\n</div>\n\n<div class=\"content-section documentation\">    \n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datascrollerinlinedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinlinedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataScrollerInlineDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datascrollerinlinedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerinlinedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"10\" [inline]=\"true\" scrollHeight=\"500px\"&gt;\n    &lt;p-header&gt;\n        Scroll Down to to Load More\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g car-item\"&gt;\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\n                &lt;div class=\"ui-g\"&gt;\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerinlinedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollerInlineDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("./src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataScrollerInlineDemo = (function () {
    function DataScrollerInlineDemo(carService) {
        this.carService = carService;
    }
    DataScrollerInlineDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataScrollerInlineDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/datascroller/datascrollerinlinedemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], DataScrollerInlineDemo);
    return DataScrollerInlineDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.html":
/***/ (function(module, exports) {

module.exports = "<datascroller-demos></datascroller-demos>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">DataScroller - Loader</span>\n        <span>Instead of scrolling, click event of an element can be used to load data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-dataScroller [value]=\"cars\" [rows]=\"5\" [loader]=\"loadButton\">\n        <p-header>\n            Click Load Button at Footer to Load More\n        </p-header>\n        <ng-template let-car pTemplate=\"item\">\n            <div class=\"ui-g car-item\">\n                <div class=\"ui-g-12 ui-md-3\">\n                    <img src=\"assets/showcase/images/demo/car/{{car.brand}}.png\">\n                </div>\n                <div class=\"ui-g-12 ui-md-9\">\n                    <div class=\"ui-g\">\n                        <div class=\"ui-g-2 ui-sm-6\">Vin: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.vin}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Year: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.year}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Brand: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.brand}}</div>\n            \n                        <div class=\"ui-g-2 ui-sm-6\">Color: </div>\n                        <div class=\"ui-g-10 ui-sm-6\">{{car.color}}</div>\n                    </div>\n                </div>\n            </div>\n        </ng-template>\n        <p-footer>\n            <button #loadButton type=\"text\" icon=\"fa-refresh\" pButton label=\"Load\"></button>\n        </p-footer>\n    </p-dataScroller>\n</div>\n\n<div class=\"content-section documentation\">\n\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"datascrollerloaderdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerloaderdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataScrollerLoaderDemo implements OnInit &#123;\n\n    cars: Car[];\n    \n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n    &#125;\n\n&#125;\n</code>\n</pre>            \n        </p-tabPanel>\n\n        <p-tabPanel header=\"datascrollerinlinedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/datascroller/datascrollerloaderdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-dataScroller [value]=\"cars\" [rows]=\"5\" [loader]=\"loadButton\"&gt;\n    &lt;p-header&gt;\n        Click Load Button at Footer to Load More\n    &lt;/p-header&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;div class=\"ui-g car-item\"&gt;\n            &lt;div class=\"ui-g-12 ui-md-3\"&gt;\n                &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.brand&#125;&#125;.png\"&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-12 ui-md-9\"&gt;\n                &lt;div class=\"ui-g\"&gt;\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Vin: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.vin&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Year: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Brand: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/div&gt;\n\n                    &lt;div class=\"ui-g-2 ui-sm-6\"&gt;Color: &lt;/div&gt;\n                    &lt;div class=\"ui-g-10 ui-sm-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;p-footer&gt;\n        &lt;button #loadButton type=\"text\" icon=\"fa-refresh\" pButton label=\"Load\"&gt;&lt;/button&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dataScroller&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollerloaderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollerLoaderDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_carservice__ = __webpack_require__("./src/app/showcase/service/carservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DataScrollerLoaderDemo = (function () {
    function DataScrollerLoaderDemo(carService) {
        this.carService = carService;
    }
    DataScrollerLoaderDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
    };
    DataScrollerLoaderDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/datascroller/datascrollerloaderdemo.html"),
            styles: ["\n        .car-item {\n            border-bottom: 1px solid #D5D5D5;\n        }\n\n        .car-item .ui-md-3 {\n            text-align: center;\n        }\n        \n        .car-item .ui-g-10 {\n            font-weight: bold;\n        }\n\n        @media (max-width: 40em) {\n            .car-item {\n                text-align: center;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], DataScrollerLoaderDemo);
    return DataScrollerLoaderDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/datascroller/datascrollersubmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataScrollerSubMenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var DataScrollerSubMenu = (function () {
    function DataScrollerSubMenu() {
    }
    DataScrollerSubMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'datascroller-demos',
            template: "\n        <div id=\"datatable-submenu\" class=\"content-section content-submenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/datascroller']\">&#9679; Window</a></li>\n                <li><a [routerLink]=\"['/datascroller/inline']\">&#9679; Inline</a></li>\n                <li><a [routerLink]=\"['/datascroller/loader']\">&#9679; Loader</a></li>\n                <li><a [routerLink]=\"['/datascroller/infinite']\">&#9679; Infinite</a></li>\n            </ul>\n        </div>\n    "
        })
    ], DataScrollerSubMenu);
    return DataScrollerSubMenu;
}());



/***/ })

});
//# sourceMappingURL=datascrollerdemo.module.chunk.js.map