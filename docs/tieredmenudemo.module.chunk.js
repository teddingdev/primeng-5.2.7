webpackJsonp(["tieredmenudemo.module"],{

/***/ "./src/app/components/tieredmenu/tieredmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TieredMenuSub */
/* unused harmony export TieredMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TieredMenuModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TieredMenuSub = (function () {
    function TieredMenuSub(domHandler) {
        this.domHandler = domHandler;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.hideDelay = 250;
    }
    TieredMenuSub.prototype.onItemMouseEnter = function (event, item, menuitem) {
        if (menuitem.disabled) {
            return;
        }
        if (this.hideTimeout) {
            clearTimeout(this.hideTimeout);
            this.hideTimeout = null;
        }
        this.activeItem = item;
        var nextElement = item.children[0].nextElementSibling;
        if (nextElement) {
            var sublist = nextElement.children[0];
            if (this.autoZIndex) {
                sublist.style.zIndex = String(this.baseZIndex + (++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex));
            }
            sublist.style.zIndex = String(++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex);
            sublist.style.top = '0px';
            sublist.style.left = this.domHandler.getOuterWidth(item.children[0]) + 'px';
        }
    };
    TieredMenuSub.prototype.onItemMouseLeave = function (event) {
        var _this = this;
        this.hideTimeout = setTimeout(function () {
            _this.activeItem = null;
        }, this.hideDelay);
    };
    TieredMenuSub.prototype.itemClick = function (event, item) {
        if (item.disabled) {
            event.preventDefault();
            return true;
        }
        if (!item.url) {
            event.preventDefault();
        }
        if (item.command) {
            item.command({
                originalEvent: event,
                item: item
            });
        }
    };
    TieredMenuSub.prototype.listClick = function (event) {
        this.activeItem = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TieredMenuSub.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TieredMenuSub.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TieredMenuSub.prototype, "autoZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TieredMenuSub.prototype, "baseZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TieredMenuSub.prototype, "hideDelay", void 0);
    TieredMenuSub = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tieredMenuSub',
            template: "\n        <ul [ngClass]=\"{'ui-widget-content ui-corner-all ui-shadow ui-submenu-list': !root}\" (click)=\"listClick($event)\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\" [ngClass]=\"{'ui-helper-hidden': child.visible === false}\">\n                <li *ngIf=\"!child.separator\" #listItem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listItem==activeItem,'ui-helper-hidden': child.visible === false}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\"\n                    (mouseenter)=\"onItemMouseEnter($event, listItem, child)\" (mouseleave)=\"onItemMouseLeave($event)\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, child)\">\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-state-active'\" \n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [href]=\"child.url||'#'\" \n                        class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" (click)=\"itemClick($event, child)\">\n                        \n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-tieredMenuSub class=\"ui-submenu\" [item]=\"child\" *ngIf=\"child.items\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\" [hideDelay]=\"hideDelay\"></p-tieredMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]])
    ], TieredMenuSub);
    return TieredMenuSub;
}());

var TieredMenu = (function () {
    function TieredMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.hideDelay = 250;
    }
    TieredMenu.prototype.ngAfterViewInit = function () {
        this.container = this.el.nativeElement.children[0];
        if (this.popup) {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    this.domHandler.appendChild(this.container, this.appendTo);
            }
        }
    };
    TieredMenu.prototype.toggle = function (event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
    };
    TieredMenu.prototype.show = function (event) {
        this.preventDocumentDefault = true;
        this.moveOnTop();
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, event.currentTarget);
        this.domHandler.fadeIn(this.container, 250);
        this.bindDocumentClickListener();
    };
    TieredMenu.prototype.hide = function () {
        this.container.style.display = 'none';
        this.unbindDocumentClickListener();
    };
    TieredMenu.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex));
        }
    };
    TieredMenu.prototype.unbindDocumentClickListener = function () {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    };
    TieredMenu.prototype.bindDocumentClickListener = function () {
        var _this = this;
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    TieredMenu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            if (this.documentClickListener) {
                this.unbindDocumentClickListener();
            }
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], TieredMenu.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TieredMenu.prototype, "popup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TieredMenu.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], TieredMenu.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TieredMenu.prototype, "appendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TieredMenu.prototype, "autoZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TieredMenu.prototype, "baseZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], TieredMenu.prototype, "hideDelay", void 0);
    TieredMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tieredMenu',
            template: "\n        <div [ngClass]=\"{'ui-tieredmenu ui-widget ui-widget-content ui-corner-all':true, 'ui-tieredmenu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\">\n            <p-tieredMenuSub [item]=\"model\" root=\"root\" [baseZIndex]=\"baseZIndex\" [autoZIndex]=\"autoZIndex\" [hideDelay]=\"hideDelay\"></p-tieredMenuSub>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], TieredMenu);
    return TieredMenu;
}());

var TieredMenuModule = (function () {
    function TieredMenuModule() {
    }
    TieredMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            exports: [TieredMenu, __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            declarations: [TieredMenu, TieredMenuSub]
        })
    ], TieredMenuModule);
    return TieredMenuModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TieredMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tieredmenudemo__ = __webpack_require__("./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TieredMenuDemoRoutingModule = (function () {
    function TieredMenuDemoRoutingModule() {
    }
    TieredMenuDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tieredmenudemo__["a" /* TieredMenuDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], TieredMenuDemoRoutingModule);
    return TieredMenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Tiered Menu</span>\n        <span>TieredMenu displays submenus in nested overlays.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-tieredMenu [model]=\"items\"></p-tieredMenu>\n\n    <h3>Popup</h3>\n    <p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"></p-tieredMenu>\n    <button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TieredMenuModule&#125; from 'primeng/tieredmenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>TieredMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>TieredMenu requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TieredMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>Menu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable\n                                of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                        <tr>\n                            <td>hideDelay</td>\n                            <td>number</td>\n                            <td>250</td>\n                            <td>Delay in milliseconds to hide the menu on mouse leave.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                    <tr>\n                        <td>ui-tieredmenu</td>\n                        <td>Container element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menu-list</td>\n                        <td>List element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem</td>\n                        <td>Menuitem element.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-text</td>\n                        <td>Label of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-menuitem-icon</td>\n                        <td>Icon of a menuitem.</td>\n                    </tr>\n                    <tr>\n                        <td>ui-submenu-icon</td>\n                        <td>Arrow icon of a submenu.</td>\n                    </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/tieredmenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-tieredMenu [model]=\"items\"&gt;&lt;/p-tieredMenu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;p-tieredMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-tieredMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TieredMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'fa-file-o',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'fa-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'fa-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'fa-gear',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'fa-refresh',\n                        items: [\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'fa-phone',\n                        items: [\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'fa-minus'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TieredMenuDemoModule", function() { return TieredMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tieredmenudemo__ = __webpack_require__("./src/app/showcase/components/tieredmenu/tieredmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tieredmenudemo_routing_module__ = __webpack_require__("./src/app/showcase/components/tieredmenu/tieredmenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_tieredmenu_tieredmenu__ = __webpack_require__("./src/app/components/tieredmenu/tieredmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TieredMenuDemoModule = (function () {
    function TieredMenuDemoModule() {
    }
    TieredMenuDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__tieredmenudemo_routing_module__["a" /* TieredMenuDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_tieredmenu_tieredmenu__["a" /* TieredMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tieredmenudemo__["a" /* TieredMenuDemo */]
            ]
        })
    ], TieredMenuDemoModule);
    return TieredMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/tieredmenu/tieredmenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TieredMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TieredMenuDemo = (function () {
    function TieredMenuDemo() {
    }
    TieredMenuDemo.prototype.ngOnInit = function () {
        this.items = [
            {
                label: 'File',
                icon: 'fa-file-o',
                items: [{
                        label: 'New',
                        icon: 'fa-plus',
                        items: [
                            { label: 'Project' },
                            { label: 'Other' },
                        ]
                    },
                    { label: 'Open' },
                    { separator: true },
                    { label: 'Quit' }
                ]
            },
            {
                label: 'Edit',
                icon: 'fa-edit',
                items: [
                    { label: 'Undo', icon: 'fa-mail-forward' },
                    { label: 'Redo', icon: 'fa-mail-reply' }
                ]
            },
            {
                label: 'Help',
                icon: 'fa-question',
                items: [
                    {
                        label: 'Contents'
                    },
                    {
                        label: 'Search',
                        icon: 'fa-search',
                        items: [
                            {
                                label: 'Text',
                                items: [
                                    {
                                        label: 'Workspace'
                                    }
                                ]
                            },
                            {
                                label: 'File'
                            }
                        ]
                    }
                ]
            },
            {
                label: 'Actions',
                icon: 'fa-gear',
                items: [
                    {
                        label: 'Edit',
                        icon: 'fa-refresh',
                        items: [
                            { label: 'Save', icon: 'fa-save' },
                            { label: 'Update', icon: 'fa-save' },
                        ]
                    },
                    {
                        label: 'Other',
                        icon: 'fa-phone',
                        items: [
                            { label: 'Delete', icon: 'fa-minus' }
                        ]
                    }
                ]
            },
            { separator: true },
            {
                label: 'Quit', icon: 'fa-minus'
            }
        ];
    };
    TieredMenuDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/tieredmenu/tieredmenudemo.html")
        })
    ], TieredMenuDemo);
    return TieredMenuDemo;
}());



/***/ })

});
//# sourceMappingURL=tieredmenudemo.module.chunk.js.map