webpackJsonp(["sidebardemo.module"],{

/***/ "./src/app/components/sidebar/sidebar.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Sidebar */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
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




var Sidebar = (function () {
    function Sidebar(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.position = 'left';
        this.blockScroll = false;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.modal = true;
        this.onShow = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHide = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.visibleChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
    }
    Sidebar.prototype.ngAfterViewInit = function () {
        this.initialized = true;
        if (this.appendTo) {
            if (this.appendTo === 'body')
                document.body.appendChild(this.containerViewChild.nativeElement);
            else
                this.domHandler.appendChild(this.containerViewChild.nativeElement, this.appendTo);
        }
        if (this.visible) {
            this.show();
        }
    };
    Object.defineProperty(Sidebar.prototype, "visible", {
        get: function () {
            return this._visible;
        },
        set: function (val) {
            this._visible = val;
            if (this.initialized && this.containerViewChild && this.containerViewChild.nativeElement) {
                if (this._visible)
                    this.show();
                else {
                    if (this.preventVisibleChangePropagation)
                        this.preventVisibleChangePropagation = false;
                    else
                        this.hide();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Sidebar.prototype.ngAfterViewChecked = function () {
        if (this.executePostDisplayActions) {
            this.onShow.emit({});
            this.executePostDisplayActions = false;
        }
    };
    Sidebar.prototype.show = function () {
        this.executePostDisplayActions = true;
        if (this.autoZIndex) {
            this.containerViewChild.nativeElement.style.zIndex = String(this.baseZIndex + (++__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */].zindex));
        }
        if (this.modal) {
            this.enableModality();
        }
    };
    Sidebar.prototype.hide = function () {
        this.onHide.emit({});
        if (this.modal) {
            this.disableModality();
        }
    };
    Sidebar.prototype.close = function (event) {
        this.preventVisibleChangePropagation = true;
        this.hide();
        this.visibleChange.emit(false);
        event.preventDefault();
    };
    Sidebar.prototype.enableModality = function () {
        var _this = this;
        if (!this.mask) {
            this.mask = document.createElement('div');
            this.mask.style.zIndex = String(parseInt(this.containerViewChild.nativeElement.style.zIndex) - 1);
            this.domHandler.addMultipleClasses(this.mask, 'ui-widget-overlay ui-sidebar-mask');
            this.maskClickListener = this.renderer.listen(this.mask, 'click', function (event) {
                _this.close(event);
            });
            document.body.appendChild(this.mask);
            if (this.blockScroll) {
                this.domHandler.addClass(document.body, 'ui-overflow-hidden');
            }
        }
    };
    Sidebar.prototype.disableModality = function () {
        if (this.mask) {
            this.unbindMaskClickListener();
            document.body.removeChild(this.mask);
            if (this.blockScroll) {
                this.domHandler.removeClass(document.body, 'ui-overflow-hidden');
            }
            this.mask = null;
        }
    };
    Sidebar.prototype.unbindMaskClickListener = function () {
        if (this.maskClickListener) {
            this.maskClickListener();
            this.maskClickListener = null;
        }
    };
    Sidebar.prototype.ngOnDestroy = function () {
        this.initialized = false;
        if (this.visible) {
            this.hide();
        }
        if (this.appendTo) {
            this.el.nativeElement.appendChild(this.containerViewChild.nativeElement);
        }
        this.unbindMaskClickListener();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "position", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "fullScreen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "appendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "blockScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Sidebar.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Sidebar.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "autoZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Sidebar.prototype, "baseZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Sidebar.prototype, "modal", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Sidebar.prototype, "containerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Sidebar.prototype, "onShow", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Sidebar.prototype, "onHide", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Sidebar.prototype, "visibleChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], Sidebar.prototype, "visible", null);
    Sidebar = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-sidebar',
            template: "\n        <div #container [ngClass]=\"{'ui-sidebar ui-widget ui-widget-content ui-shadow':true, 'ui-sidebar-active': visible, \n            'ui-sidebar-left': (position === 'left'), 'ui-sidebar-right': (position === 'right'),\n            'ui-sidebar-top': (position === 'top'), 'ui-sidebar-bottom': (position === 'bottom'), \n            'ui-sidebar-full': fullScreen}\"\n            [@panelState]=\"visible ? 'visible' : 'hidden'\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <a [ngClass]=\"{'ui-sidebar-close ui-corner-all':true}\" href=\"#\" role=\"button\" (click)=\"close($event)\">\n                <span class=\"fa fa-fw fa-close\"></span>\n            </a>\n            <ng-content></ng-content>\n        </div>\n    ",
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["j" /* trigger */])('panelState', [
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 0
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["g" /* state */])('visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["h" /* style */])({
                        opacity: 1
                    })),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('visible => hidden', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-in')),
                    Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["i" /* transition */])('hidden => visible', Object(__WEBPACK_IMPORTED_MODULE_1__angular_animations__["e" /* animate */])('300ms ease-out'))
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_3__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], Sidebar);
    return Sidebar;
}());

var SidebarModule = (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */]],
            exports: [Sidebar],
            declarations: [Sidebar]
        })
    ], SidebarModule);
    return SidebarModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sidebardemo__ = __webpack_require__("./src/app/showcase/components/sidebar/sidebardemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SidebarDemoRoutingModule = (function () {
    function SidebarDemoRoutingModule() {
    }
    SidebarDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__sidebardemo__["a" /* SidebarDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SidebarDemoRoutingModule);
    return SidebarDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Sidebar</span>\n        <span>Sidebar is a panel component displayed as an overlay.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Left Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n    \n    <p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Right Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n    \n    <p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Top Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n    \n    <p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Bottom Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n    \n    <p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\">\n        <h1 style=\"font-weight:normal\">Full Screen Sidebar</h1>\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"></button>\n        <button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"></button>\n    </p-sidebar>\n    \n    <button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"fa-arrow-right\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"fa-arrow-left\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"fa-arrow-down\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"fa-arrow-up\"></button>\n    <button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"fa-arrows-alt\"></button>    \n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SidebarModule&#125; from 'primeng/sidebar';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Sidebar is used as a container and visibility is controlled with visible property.</p>\n                    \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\"&gt;\n    Content\n&lt;/p-sidebar&gt;\n\n&lt;button type=\"text\" (click)=\"display = true\" pButton icon=\"fa-external-link-square\" label=\"Show\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Position</h3>\n            <p>Sidebar can either be located as the left (default), right, top or bottom of the screen depending on the position property.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\" position=\"right\"&gt;\n    Content\n&lt;/p-sidebar&gt;\n</code>\n</pre>\n\n            <h3>Size</h3>\n            <p>Sidebar size can be changed using a fixed value or using one of the three predefined ones.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\" [ngStyle]=\"&#123;width:'30em'&#125;\"&gt;&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-sm\"&gt;&lt;/p-sidebar&gt;\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-md\"&gt;&lt;/p-sidebar&gt;\n&lt;p-sidebar [(visible)]=\"display\" styleClass=\"ui-sidebar-lg\"&gt;&lt;/p-sidebar&gt;\n</code>\n</pre>\n\n            <h3>Full Screen</h3>\n            <p>Full screen mode allows the sidebar to cover whole screen.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"display\" [fullScreen]=\"true\"&gt;\nContent\n&lt;/p-sidebar&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>visible</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifies the visibility of the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>position</td>\n                            <td>string</td>\n                            <td>left</td>\n                            <td>Specifies the position of the sidebar, valid values are \"left\" and \"right\".</td>\n                        </tr>\n                        <tr>\n                            <td>fullScreen</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Adds a close icon to the header to hide the dialog.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the dialog, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>blockScroll</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to block scrolling of the document when sidebar is active.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>modal</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether an overlay mask is displayed behind the sidebar.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onShow</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is shown.</td>\n                        </tr>\n                        <tr>\n                            <td>onHide</td>\n                            <td>event: Event object</td>\n                            <td>Callback to invoke when dialog is hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-sidebar</td>\n                            <td>Container element</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-left</td>\n                            <td>Container element of left sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-right</td>\n                            <td>Container element of right sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-top</td>\n                            <td>Container element of top sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-bottom</td>\n                            <td>Container element of bottom sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-full</td>\n                            <td>Container element of a full screen sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-active</td>\n                            <td>Container element when sidebar is visible.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-close</td>\n                            <td>Close anchor element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-sm</td>\n                            <td>Small sized sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-md</td>\n                            <td>Medium sized sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-lg</td>\n                            <td>Large sized sidebar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sidebar-mask</td>\n                            <td>Modal layer of the sidebar.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/sidebar\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n        \n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-sidebar [(visible)]=\"visibleSidebar1\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Left Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar2\" position=\"right\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Right Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar3\" position=\"top\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Top Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar4\" position=\"bottom\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Bottom Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;p-sidebar [(visible)]=\"visibleSidebar5\" [fullScreen]=\"true\" [baseZIndex]=\"10000\"&gt;\n    &lt;h1 style=\"font-weight:normal\"&gt;Full Screen Sidebar&lt;/h1&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Save\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = false\" label=\"Cancel\" class=\"ui-button-secondary\"&gt;&lt;/button&gt;\n&lt;/p-sidebar&gt;\n\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar1 = true\" icon=\"fa-arrow-right\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar2 = true\" icon=\"fa-arrow-left\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar3 = true\" icon=\"fa-arrow-down\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar4 = true\" icon=\"fa-arrow-up\"&gt;&lt;/button&gt;\n&lt;button pButton type=\"button\" (click)=\"visibleSidebar5 = true\" icon=\"fa-arrows-alt\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SidebarDemo &#123;\n\n    visibleSidebar1;\n    \n    visibleSidebar2;\n    \n    visibleSidebar3;\n    \n    visibleSidebar4;\n    \n    visibleSidebar5;\n    \n&#125;\n</code>\n</pre>\n            </p-tabPanel>\n        </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarDemoModule", function() { return SidebarDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__sidebardemo__ = __webpack_require__("./src/app/showcase/components/sidebar/sidebardemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__sidebardemo_routing_module__ = __webpack_require__("./src/app/showcase/components/sidebar/sidebardemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_sidebar_sidebar__ = __webpack_require__("./src/app/components/sidebar/sidebar.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SidebarDemoModule = (function () {
    function SidebarDemoModule() {
    }
    SidebarDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__sidebardemo_routing_module__["a" /* SidebarDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_sidebar_sidebar__["a" /* SidebarModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__sidebardemo__["a" /* SidebarDemo */]
            ]
        })
    ], SidebarDemoModule);
    return SidebarDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/sidebar/sidebardemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SidebarDemo = (function () {
    function SidebarDemo() {
    }
    SidebarDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/sidebar/sidebardemo.html")
        })
    ], SidebarDemo);
    return SidebarDemo;
}());



/***/ })

});
//# sourceMappingURL=sidebardemo.module.chunk.js.map