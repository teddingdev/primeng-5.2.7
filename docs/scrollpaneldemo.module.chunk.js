webpackJsonp(["scrollpaneldemo.module"],{

/***/ "./src/app/components/scrollpanel/scrollpanel.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ScrollPanel */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPanelModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ScrollPanel = (function () {
    function ScrollPanel(el, zone, domHandler) {
        this.el = el;
        this.zone = zone;
        this.domHandler = domHandler;
        this.timeoutFrame = function (fn) { return setTimeout(fn, 0); };
    }
    ScrollPanel.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.moveBar();
            _this.moveBar = _this.moveBar.bind(_this);
            _this.onXBarMouseDown = _this.onXBarMouseDown.bind(_this);
            _this.onYBarMouseDown = _this.onYBarMouseDown.bind(_this);
            _this.onDocumentMouseMove = _this.onDocumentMouseMove.bind(_this);
            _this.onDocumentMouseUp = _this.onDocumentMouseUp.bind(_this);
            window.addEventListener('resize', _this.moveBar);
            _this.contentViewChild.nativeElement.addEventListener('scroll', _this.moveBar);
            _this.contentViewChild.nativeElement.addEventListener('mouseenter', _this.moveBar);
            _this.xBarViewChild.nativeElement.addEventListener('mousedown', _this.onXBarMouseDown);
            _this.yBarViewChild.nativeElement.addEventListener('mousedown', _this.onYBarMouseDown);
            _this.calculateContainerHeight();
            _this.initialized = true;
        });
    };
    ScrollPanel.prototype.calculateContainerHeight = function () {
        var container = this.containerViewChild.nativeElement;
        var content = this.contentViewChild.nativeElement;
        var xBar = this.xBarViewChild.nativeElement;
        var containerStyles = getComputedStyle(container), xBarStyles = getComputedStyle(xBar), pureContainerHeight = this.domHandler.getHeight(container) - parseInt(xBarStyles['height'], 10);
        if (containerStyles['max-height'] != "none" && pureContainerHeight == 0) {
            if (content.offsetHeight + parseInt(xBarStyles['height'], 10) > parseInt(containerStyles['max-height'], 10)) {
                container.style.height = containerStyles['max-height'];
            }
            else {
                container.style.height = content.offsetHeight + parseFloat(containerStyles.paddingTop) + parseFloat(containerStyles.paddingBottom) + parseFloat(containerStyles.borderTopWidth) + parseFloat(containerStyles.borderBottomWidth) + "px";
            }
        }
    };
    ScrollPanel.prototype.moveBar = function () {
        var _this = this;
        var container = this.containerViewChild.nativeElement;
        var content = this.contentViewChild.nativeElement;
        /* horizontal scroll */
        var xBar = this.xBarViewChild.nativeElement;
        var totalWidth = content.scrollWidth;
        var ownWidth = content.clientWidth;
        var bottom = (container.clientHeight - xBar.clientHeight) * -1;
        this.scrollXRatio = ownWidth / totalWidth;
        /* vertical scroll */
        var yBar = this.yBarViewChild.nativeElement;
        var totalHeight = content.scrollHeight;
        var ownHeight = content.clientHeight;
        var right = (container.clientWidth - yBar.clientWidth) * -1;
        this.scrollYRatio = ownHeight / totalHeight;
        this.requestAnimationFrame(function () {
            if (_this.scrollXRatio >= 1) {
                _this.domHandler.addClass(xBar, 'ui-scrollpanel-hidden');
            }
            else {
                _this.domHandler.removeClass(xBar, 'ui-scrollpanel-hidden');
                xBar.style.cssText = 'width:' + Math.max(_this.scrollXRatio * 100, 10) + '%; left:' + (content.scrollLeft / totalWidth) * 100 + '%;bottom:' + bottom + 'px;';
            }
            if (_this.scrollYRatio >= 1) {
                _this.domHandler.addClass(yBar, 'ui-scrollpanel-hidden');
            }
            else {
                _this.domHandler.removeClass(yBar, 'ui-scrollpanel-hidden');
                yBar.style.cssText = 'height:' + Math.max(_this.scrollYRatio * 100, 10) + '%; top: calc(' + (content.scrollTop / totalHeight) * 100 + '% - ' + xBar.clientHeight + 'px);right:' + right + 'px;';
            }
        });
    };
    ScrollPanel.prototype.onYBarMouseDown = function (e) {
        this.isYBarClicked = true;
        this.lastPageY = e.pageY;
        this.domHandler.addClass(this.yBarViewChild.nativeElement, 'ui-scrollpanel-grabbed');
        this.domHandler.addClass(document.body, 'ui-scrollpanel-grabbed');
        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        e.preventDefault();
    };
    ScrollPanel.prototype.onXBarMouseDown = function (e) {
        this.isXBarClicked = true;
        this.lastPageX = e.pageX;
        this.domHandler.addClass(this.xBarViewChild.nativeElement, 'ui-scrollpanel-grabbed');
        this.domHandler.addClass(document.body, 'ui-scrollpanel-grabbed');
        document.addEventListener('mousemove', this.onDocumentMouseMove);
        document.addEventListener('mouseup', this.onDocumentMouseUp);
        e.preventDefault();
    };
    ScrollPanel.prototype.onDocumentMouseMove = function (e) {
        if (this.isXBarClicked) {
            this.onMouseMoveForXBar(e);
        }
        else if (this.isYBarClicked) {
            this.onMouseMoveForYBar(e);
        }
        else {
            this.onMouseMoveForXBar(e);
            this.onMouseMoveForYBar(e);
        }
    };
    ScrollPanel.prototype.onMouseMoveForXBar = function (e) {
        var _this = this;
        var deltaX = e.pageX - this.lastPageX;
        this.lastPageX = e.pageX;
        this.requestAnimationFrame(function () {
            _this.contentViewChild.nativeElement.scrollLeft += deltaX / _this.scrollXRatio;
        });
    };
    ScrollPanel.prototype.onMouseMoveForYBar = function (e) {
        var _this = this;
        var deltaY = e.pageY - this.lastPageY;
        this.lastPageY = e.pageY;
        this.requestAnimationFrame(function () {
            _this.contentViewChild.nativeElement.scrollTop += deltaY / _this.scrollYRatio;
        });
    };
    ScrollPanel.prototype.onDocumentMouseUp = function (e) {
        this.domHandler.removeClass(this.yBarViewChild.nativeElement, 'ui-scrollpanel-grabbed');
        this.domHandler.removeClass(this.xBarViewChild.nativeElement, 'ui-scrollpanel-grabbed');
        this.domHandler.removeClass(document.body, 'ui-scrollpanel-grabbed');
        document.removeEventListener('mousemove', this.onDocumentMouseMove);
        document.removeEventListener('mouseup', this.onDocumentMouseUp);
        this.isXBarClicked = false;
        this.isYBarClicked = false;
    };
    ScrollPanel.prototype.requestAnimationFrame = function (f) {
        var frame = window.requestAnimationFrame || this.timeoutFrame;
        frame(f);
    };
    ScrollPanel.prototype.ngOnDestroy = function () {
        if (this.initialized) {
            window.removeEventListener('resize', this.moveBar);
            this.contentViewChild.nativeElement.removeEventListener('scroll', this.moveBar);
            this.contentViewChild.nativeElement.removeEventListener('mouseenter', this.moveBar);
            this.xBarViewChild.nativeElement.removeEventListener('mousedown', this.onXBarMouseDown);
            this.yBarViewChild.nativeElement.removeEventListener('mousedown', this.onYBarMouseDown);
        }
    };
    ScrollPanel.prototype.refresh = function () {
        this.moveBar();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], ScrollPanel.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], ScrollPanel.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollPanel.prototype, "containerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('content'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollPanel.prototype, "contentViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('xBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollPanel.prototype, "xBarViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('yBar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollPanel.prototype, "yBarViewChild", void 0);
    ScrollPanel = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-scrollPanel',
            template: "\n        <div #container [ngClass]=\"'ui-scrollpanel ui-widget ui-widget-content ui-corner-all'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div class=\"ui-scrollpanel-wrapper\">\n                <div #content class=\"ui-scrollpanel-content\">\n                    <ng-content></ng-content>\n                </div>\n            </div>\n            <div #xBar class=\"ui-scrollpanel-bar ui-scrollpanel-bar-x\"></div>\n            <div #yBar class=\"ui-scrollpanel-bar ui-scrollpanel-bar-y\"></div>   \n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]])
    ], ScrollPanel);
    return ScrollPanel;
}());

var ScrollPanelModule = (function () {
    function ScrollPanelModule() {
    }
    ScrollPanelModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [ScrollPanel],
            declarations: [ScrollPanel]
        })
    ], ScrollPanelModule);
    return ScrollPanelModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPanelDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__scrollpaneldemo__ = __webpack_require__("./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ScrollPanelDemoRoutingModule = (function () {
    function ScrollPanelDemoRoutingModule() {
    }
    ScrollPanelDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__scrollpaneldemo__["a" /* ScrollPanelDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], ScrollPanelDemoRoutingModule);
    return ScrollPanelDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">ScrollPanel</span>\n        <span>ScrollPanel is a cross browser, lightweight and skinnable alternative to native browser scrollbar.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <div class=\"ui-g\">\n        <div class=\"ui-g-12 ui-md-4\">\n            <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\">\n                <div style=\"padding:1em;line-height:1.5\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through\n                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head\n                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands\n                    against the good of the family.\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's\n                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind\n                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the\n                    family.\n                </div>\n            </p-scrollPanel>\n        </div>\n        <div class=\"ui-g-12 ui-md-4\">\n            <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\" styleClass=\"custombar1\">\n                <div style=\"padding:1em;line-height:1.5\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through\n                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head\n                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands\n                    against the good of the family.\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's\n                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind\n                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the\n                    family.\n                </div>\n            </p-scrollPanel>\n        </div>\n        <div class=\"ui-g-12 ui-md-4\">\n            <p-scrollPanel [style]=\"{width: '100%', height: '200px'}\" styleClass=\"custombar2\">\n                <div style=\"padding:1em;line-height:1.5;width:600px\">\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through\n                    Michael's life the nature of the family business becomes clear. The business of the family is just like the head\n                    of the family, kind and benevolent to those who give respect, but given to ruthless violence whenever anything stands\n                    against the good of the family.\n                    The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                    son Michael has just come home from the war, but does not intend to become part of his father's business. Through Michael's\n                    life the nature of the family business becomes clear. The business of the family is just like the head of the family, kind\n                    and benevolent to those who give respect, but given to ruthless violence whenever anything stands against the good of the\n                    family.\n                </div>\n            </p-scrollPanel>\n        </div>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;ScrollPanelModule&#125; from 'primeng/scrollpanel';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>ScrollPanel is defined with p-scrolPanel element having dimensions for the scrollable viewport.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\"&gt;\n    Content\n&lt;/p-scrollPanel&gt;\n</code>\n</pre>\n            <h3>Customization</h3>\n            <p>Look and feel can easily be customized, here is an example with a background and blue handle.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\" styleClass=\"custom\"&gt;\n    Content\n&lt;/p-scrollPanel&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n.custom .ui-scrollpanel-wrapper &#123;\n    border-right: 9px solid #f4f4f4; \n&#125;\n\n.custom .ui-scrollpanel-bar &#123;\n    background-color: #1976d2; \n    opacity: 1; \n    transition: background-color .3s; \n&#125;\n\n.custom .ui-scrollpanel-bar:hover &#123;\n    background-color: #135ba1;\n&#125;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-scrollpanel</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-wrapper</td>\n                            <td>Wrapper of content section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-content</td>\n                            <td>Content section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-bar</td>\n                            <td>Scrollbar handle.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-bar-x</td>\n                            <td>Scrollbar handle of a horizontal bar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-scrollpanel-bar-y</td>\n                            <td>Scrollbar handle of a vertical bar</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>refresh</td>\n                            <td>-</td>\n                            <td>Refreshes the position and size of the scrollbar.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n        <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/panel\" class=\"btn-viewsource\" target=\"_blank\">\n            <i class=\"fa fa-github\"></i>\n            <span>View on GitHub</span>\n        </a>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;div class=\"ui-g\"&gt;\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\n        &lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\"&gt;\n            &lt;div style=\"padding:1em;line-height:1.5\"&gt;\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head\n                of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from\n                the war, but does not intend to become part of his father's business. Through Michael's life the nature of\n                the family business becomes clear. The business of the family is just like the head of the family, kind and\n                benevolent to those who give respect, but given to ruthless violence whenever anything stands against the\n                good of the family.\n            &lt;/div&gt;\n        &lt;/p-scrollPanel&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\n        &lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\" styleClass=\"custombar1\"&gt;\n            &lt;div style=\"padding:1em;line-height:1.5\"&gt;\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head\n                of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from\n                the war, but does not intend to become part of his father's business. Through Michael's life the nature of\n                the family business becomes clear. The business of the family is just like the head of the family, kind and\n                benevolent to those who give respect, but given to ruthless violence whenever anything stands against the\n                good of the family.\n            &lt;/div&gt;\n        &lt;/p-scrollPanel&gt;\n    &lt;/div&gt;\n    &lt;div class=\"ui-g-12 ui-md-4\"&gt;\n        &lt;p-scrollPanel [style]=\"&#123;width: '100%', height: '200px'&#125;\" styleClass=\"custombar2\"&gt;\n            &lt;div style=\"padding:1em;line-height:1.5;width:600px;\"&gt;\n                The story begins as Don Vito Corleone, the head of a New York Mafia family, oversees his daughter's wedding. His beloved\n                son Michael has just come home from the war, but does not intend to become part of his father's business.\n                Through Michael's life the nature of the family business becomes clear. The business of the family is just\n                like the head of the family, kind and benevolent to those who give respect, but given to ruthless violence\n                whenever anything stands against the good of the family. The story begins as Don Vito Corleone, the head\n                of a New York Mafia family, oversees his daughter's wedding. His beloved son Michael has just come home from\n                the war, but does not intend to become part of his father's business. Through Michael's life the nature of\n                the family business becomes clear. The business of the family is just like the head of the family, kind and\n                benevolent to those who give respect, but given to ruthless violence whenever anything stands against the\n                good of the family.\n            &lt;/div&gt;\n        &lt;/p-scrollPanel&gt;\n    &lt;/div&gt;\n&lt;/div&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './scrollpaneldemo.html',\n    styles: [`\n        .custombar1 .ui-scrollpanel-wrapper &#123;\n            border-right: 9px solid #f4f4f4;\n        &#125;\n            \n        .custombar1 .ui-scrollpanel-bar &#123;\n            background-color: #1976d2;\n            opacity: 1;\n            transition: background-color .3s;\n        &#125;\n            \n        .custombar1 .ui-scrollpanel-bar:hover &#123;\n            background-color: #135ba1;\n        &#125;\n            \n        .custombar2 .ui-scrollpanel-wrapper &#123;\n            border-right: 9px solid #757575;\n            border-bottom: 9px solid #757575;\n        &#125;\n            \n        .custombar2 .ui-scrollpanel-bar &#123;\n            background-color: #68C77D;\n            border-radius: 0;\n            opacity: 1;\n            transition: background-color .3s;\n        &#125;\n            \n        .custombar2:hover .ui-scrollpanel-bar &#123;\n            background-color: #46A55A;\n        &#125;\n    `],\n    encapsulation: ViewEncapsulation.None\n&#125;)\nexport class ScrollPanelDemo &#123;\n            \n&#125;    \n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScrollPanelDemoModule", function() { return ScrollPanelDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_scrollpanel_scrollpanel__ = __webpack_require__("./src/app/components/scrollpanel/scrollpanel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__scrollpaneldemo__ = __webpack_require__("./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__scrollpaneldemo_routing_module__ = __webpack_require__("./src/app/showcase/components/scrollpanel/scrollpaneldemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ScrollPanelDemoModule = (function () {
    function ScrollPanelDemoModule() {
    }
    ScrollPanelDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__components_scrollpanel_scrollpanel__["a" /* ScrollPanelModule */],
                __WEBPACK_IMPORTED_MODULE_4__scrollpaneldemo_routing_module__["a" /* ScrollPanelDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__scrollpaneldemo__["a" /* ScrollPanelDemo */]
            ]
        })
    ], ScrollPanelDemoModule);
    return ScrollPanelDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/scrollpanel/scrollpaneldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScrollPanelDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ScrollPanelDemo = (function () {
    function ScrollPanelDemo() {
    }
    ScrollPanelDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/scrollpanel/scrollpaneldemo.html"),
            styles: ["\n        .custombar1 .ui-scrollpanel-wrapper {\n            border-right: 9px solid #f4f4f4;\n        }\n\n        .custombar1 .ui-scrollpanel-bar {\n            background-color: #1976d2;\n            opacity: 1;\n            transition: background-color .3s;\n        }\n\n        .custombar1 .ui-scrollpanel-bar:hover {\n            background-color: #135ba1;\n        }\n\n        .custombar2 .ui-scrollpanel-wrapper {\n            border-right: 9px solid #757575;\n            border-bottom: 9px solid #757575;\n        }\n\n        .custombar2 .ui-scrollpanel-bar {\n            background-color: #68C77D;\n            border-radius: 0;\n            opacity: 1;\n            transition: background-color .3s;\n        }\n\n        .custombar2:hover .ui-scrollpanel-bar {\n            background-color: #46A55A;\n        }\n    "],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* ViewEncapsulation */].None
        })
    ], ScrollPanelDemo);
    return ScrollPanelDemo;
}());



/***/ })

});
//# sourceMappingURL=scrollpaneldemo.module.chunk.js.map