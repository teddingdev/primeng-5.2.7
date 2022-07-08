webpackJsonp(["slidemenudemo.module"],{

/***/ "./src/app/components/slidemenu/slidemenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SlideMenuSub */
/* unused harmony export SlideMenu */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuModule; });
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var SlideMenuSub = (function () {
    function SlideMenuSub(slideMenu) {
        this.slideMenu = slideMenu;
        this.backLabel = 'Back';
        this.easing = 'ease-out';
    }
    SlideMenuSub.prototype.itemClick = function (event, item, listitem) {
        var _this = this;
        if (item.disabled) {
            event.preventDefault();
            return;
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
        if (item.items && !this.slideMenu.animating) {
            this.slideMenu.left -= this.slideMenu.menuWidth;
            this.activeItem = listitem;
            this.slideMenu.animating = true;
            setTimeout(function () { return _this.slideMenu.animating = false; }, this.effectDuration);
        }
    };
    SlideMenuSub.prototype.ngOnDestroy = function () {
        this.activeItem = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenuSub.prototype, "item", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideMenuSub.prototype, "root", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SlideMenuSub.prototype, "backLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SlideMenuSub.prototype, "menuWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenuSub.prototype, "effectDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SlideMenuSub.prototype, "easing", void 0);
    SlideMenuSub = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-slideMenuSub',
            template: "\n        <ul [ngClass]=\"{'ui-slidemenu-rootlist':root, 'ui-submenu-list':!root}\"\n            [style.width.px]=\"menuWidth\" [style.left.px]=\"root ? slideMenu.left : slideMenu.menuWidth\"\n            [style.transitionProperty]=\"root ? 'left' : 'none'\" [style.transitionDuration]=\"effectDuration + 'ms'\" [style.transitionTimingFunction]=\"easing\">\n            <ng-template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li *ngIf=\"child.separator\" class=\"ui-menu-separator ui-widget-content\">\n                <li *ngIf=\"!child.separator\" #listitem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menuitem-active':listitem==activeItem}\"\n                    [class]=\"child.styleClass\" [ngStyle]=\"child.style\">\n                    <a *ngIf=\"!child.routerLink\" [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <a *ngIf=\"child.routerLink\" [routerLink]=\"child.routerLink\" [queryParams]=\"child.queryParams\" [routerLinkActive]=\"'ui-state-active'\" \n                        [routerLinkActiveOptions]=\"child.routerLinkActiveOptions||{exact:false}\" [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" \n                        [attr.target]=\"child.target\" [attr.title]=\"child.title\" [attr.id]=\"child.id\"\n                        [ngClass]=\"{'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                    </a>\n                    <p-slideMenuSub class=\"ui-submenu\" [item]=\"child\" [menuWidth]=\"menuWidth\" *ngIf=\"child.items\"></p-slideMenuSub>\n                </li>\n            </ng-template>\n        </ul>\n    "
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Inject */])(Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return SlideMenu; }))),
        __metadata("design:paramtypes", [SlideMenu])
    ], SlideMenuSub);
    return SlideMenuSub;
}());

var SlideMenu = (function () {
    function SlideMenu(el, domHandler, renderer) {
        this.el = el;
        this.domHandler = domHandler;
        this.renderer = renderer;
        this.menuWidth = 190;
        this.viewportHeight = 180;
        this.effectDuration = 250;
        this.easing = 'ease-out';
        this.backLabel = 'Back';
        this.autoZIndex = true;
        this.baseZIndex = 0;
        this.left = 0;
        this.animating = false;
    }
    SlideMenu.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.container = this.containerViewChild.nativeElement;
        this.backwardElement = this.backwardViewChild.nativeElement;
        this.slideMenuContentElement = this.slideMenuContentViewChild.nativeElement;
        this.slideMenuContentElement.style.height = this.viewportHeight - this.domHandler.getHiddenElementOuterHeight(this.backwardElement) + 'px';
        if (this.popup) {
            if (this.appendTo) {
                if (this.appendTo === 'body')
                    document.body.appendChild(this.container);
                else
                    this.domHandler.appendChild(this.container, this.appendTo);
            }
            this.documentClickListener = this.renderer.listen('document', 'click', function () {
                if (!_this.preventDocumentDefault) {
                    _this.hide();
                }
                _this.preventDocumentDefault = false;
            });
        }
    };
    SlideMenu.prototype.toggle = function (event) {
        if (this.container.offsetParent)
            this.hide();
        else
            this.show(event);
    };
    SlideMenu.prototype.show = function (event) {
        this.preventDocumentDefault = true;
        this.moveOnTop();
        this.container.style.display = 'block';
        this.domHandler.absolutePosition(this.container, event.target);
        this.domHandler.fadeIn(this.container, 250);
    };
    SlideMenu.prototype.hide = function () {
        this.container.style.display = 'none';
    };
    SlideMenu.prototype.moveOnTop = function () {
        if (this.autoZIndex) {
            this.container.style.zIndex = String(this.baseZIndex + (++__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */].zindex));
        }
    };
    SlideMenu.prototype.onClick = function (event) {
        this.preventDocumentDefault = true;
    };
    SlideMenu.prototype.goBack = function () {
        this.left += this.menuWidth;
    };
    SlideMenu.prototype.ngOnDestroy = function () {
        if (this.popup) {
            if (this.documentClickListener) {
                this.documentClickListener();
            }
            if (this.appendTo) {
                this.el.nativeElement.appendChild(this.container);
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], SlideMenu.prototype, "model", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideMenu.prototype, "popup", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideMenu.prototype, "menuWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideMenu.prototype, "viewportHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "effectDuration", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "easing", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SlideMenu.prototype, "backLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SlideMenu.prototype, "appendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SlideMenu.prototype, "autoZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SlideMenu.prototype, "baseZIndex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SlideMenu.prototype, "containerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('backward'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SlideMenu.prototype, "backwardViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('slideMenuContent'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], SlideMenu.prototype, "slideMenuContentViewChild", void 0);
    SlideMenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-slideMenu',
            template: "\n        <div #container [ngClass]=\"{'ui-slidemenu ui-widget ui-widget-content ui-corner-all':true, 'ui-slidemenu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"onClick($event)\">\n            <div class=\"ui-slidemenu-wrapper\" [style.height.px]=\"viewportHeight\">\n                <div #slideMenuContent class=\"ui-slidemenu-content\">\n                    <p-slideMenuSub [item]=\"model\" root=\"root\" [menuWidth]=\"menuWidth\" [effectDuration]=\"effectDuration\" [easing]=\"easing\"></p-slideMenuSub>\n                </div>\n                <div #backward class=\"ui-slidemenu-backward ui-widget-header ui-corner-all\" [style.display]=\"left ? 'block' : 'none'\" (click)=\"goBack()\">\n                    <span class=\"ui-slidemenu-backward-icon fa fa-fw fa-caret-left\"></span><span>{{backLabel}}</span>\n                </div>\n            </div>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_2__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */]])
    ], SlideMenu);
    return SlideMenu;
}());

var SlideMenuModule = (function () {
    function SlideMenuModule() {
    }
    SlideMenuModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            exports: [SlideMenu, __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]],
            declarations: [SlideMenu, SlideMenuSub]
        })
    ], SlideMenuModule);
    return SlideMenuModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__ = __webpack_require__("./src/app/showcase/components/slidemenu/slidemenudemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SlideMenuDemoRoutingModule = (function () {
    function SlideMenuDemoRoutingModule() {
    }
    SlideMenuDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__["a" /* SlideMenuDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SlideMenuDemoRoutingModule);
    return SlideMenuDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Slide Menu</span>\n        <span>SlideMenu displays submenus with slide animation.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Default</h3>\n    <p-slideMenu [model]=\"items\"></p-slideMenu>\n\n    <h3>Popup</h3>\n    <p-slideMenu #menu [model]=\"items\" [popup]=\"true\"></p-slideMenu>\n    <button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SlideMenuModule&#125; from 'primeng/slidemenu';\nimport &#123;MenuItem&#125; from 'primeng/api';\n</code>\n</pre>\n\n            <h3>MenuModel API</h3>\n            <p>SlideMenu uses the common menumodel api to define its items, visit <a [routerLink]=\"['/menumodel']\">MenuModel API</a> for details.</p>\n\n            <h3>Getting Started</h3>\n            <p>SlideMenu requires nested menuitems as its model.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu [model]=\"items\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SlideMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Popup Mode</h3>\n            <p>SlideMenu is inline by default, popup mode is also supported by enabling popup property and calling toggle method by passing the event \n                    from the anchor element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n            <h3>Effects</h3>\n            <p>The easing function to use is \"ease-out\" by default and this can be customized using easing property. \n                See <a href=\"http://www.w3schools.com/cssref/css3_pr_transition-timing-function.asp\">here</a> for possible alternative values.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-slideMenu #menu [model]=\"items\" effectDuration=\"1000\" easing=\"ease-in\"&gt;&lt;/p-slideMenu&gt;\n</code>\n</pre>\n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>model</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of menuitems.</td>\n                        </tr>\n                        <tr>\n                            <td>popup</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if menu would displayed as a popup.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>easing</td>\n                            <td>string</td>\n                            <td>ease-out</td>\n                            <td>Easing animation to use for sliding.</td>\n                        </tr>\n                        <tr>\n                            <td>effectDuration</td>\n                            <td>any</td>\n                            <td>250</td>\n                            <td>Duration of the sliding animation in milliseconds.</td>\n                        </tr>\n                        <tr>\n                            <td>backLabel</td>\n                            <td>string</td>\n                            <td>Back</td>\n                            <td>Label of element to navigate back.</td>\n                        </tr>\n                        <tr>\n                            <td>menuWidth</td>\n                            <td>number</td>\n                            <td>180</td>\n                            <td>Width of the submenus.</td>\n                        </tr>\n                        <tr>\n                            <td>viewportHeight</td>\n                            <td>number</td>\n                            <td>175</td>\n                            <td>Height of the scrollable area, a scrollbar appears if a menu height is longer than this value.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>baseZIndex</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Base zIndex value to use in layering.</td>\n                        </tr>\n                        <tr>\n                            <td>autoZIndex</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to automatically manage layering.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n            \n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>toggle</td>\n                            <td>event: browser event</td>\n                            <td>Toggles the visibility of the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>show</td>\n                            <td>event: browser event</td>\n                            <td>Displays the popup menu.</td>\n                        </tr>\n                        <tr>\n                            <td>hide</td>\n                            <td>-</td>\n                            <td>Hides the popup menu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-slidemenu</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-wrapper</td>\n                            <td>Wrapper of content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-content</td>\n                            <td>Content element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-slidemenu-backward</td>\n                            <td>Element to navigate to previous menu on click.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menu-list</td>\n                            <td>List element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem</td>\n                            <td>Menuitem element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-text</td>\n                            <td>Label of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-menuitem-icon</td>\n                            <td>Icon of a menuitem.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-submenu-icon</td>\n                            <td>Arrow icon of a submenu.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/slidemenu\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Default&lt;/h3&gt;\n&lt;p-slideMenu [model]=\"items\"&gt;&lt;/p-slideMenu&gt;\n\n&lt;h3&gt;Popup&lt;/h3&gt;\n&lt;p-slideMenu #menu [model]=\"items\" [popup]=\"true\"&gt;&lt;/p-slideMenu&gt;\n&lt;button #btn type=\"button\" pButton icon=\"fa fa-list\" label=\"Show\" (click)=\"menu.toggle($event)\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SlideMenuDemo &#123;\n\n    items: MenuItem[];\n\n    ngOnInit() &#123;\n        this.items = [\n            &#123;\n                label: 'File',\n                icon: 'fa-file-o',\n                items: [&#123;\n                        label: 'New', \n                        icon: 'fa-plus',\n                        items: [\n                            &#123;label: 'Project'&#125;,\n                            &#123;label: 'Other'&#125;,\n                        ]\n                    &#125;,\n                    &#123;label: 'Open'&#125;,\n                    &#123;separator:true&#125;,\n                    &#123;label: 'Quit'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Edit',\n                icon: 'fa-edit',\n                items: [\n                    &#123;label: 'Undo', icon: 'fa-mail-forward'&#125;,\n                    &#123;label: 'Redo', icon: 'fa-mail-reply'&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Help',\n                icon: 'fa-question',\n                items: [\n                    &#123;\n                        label: 'Contents'\n                    &#125;,\n                    &#123;\n                        label: 'Search', \n                        icon: 'fa-search', \n                        items: [\n                            &#123;\n                                label: 'Text', \n                                items: [\n                                    &#123;\n                                        label: 'Workspace'\n                                    &#125;\n                                ]\n                            &#125;,\n                            &#123;\n                                label: 'File'\n                            &#125;\n                    ]&#125;\n                ]\n            &#125;,\n            &#123;\n                label: 'Actions',\n                icon: 'fa-gear',\n                items: [\n                    &#123;\n                        label: 'Edit',\n                        icon: 'fa-refresh',\n                        items: [\n                            &#123;label: 'Save', icon: 'fa-save'&#125;,\n                            &#123;label: 'Update', icon: 'fa-save'&#125;,\n                        ]\n                    &#125;,\n                    &#123;\n                        label: 'Other',\n                        icon: 'fa-phone',\n                        items: [\n                            &#123;label: 'Delete', icon: 'fa-minus'&#125;\n                        ]\n                    &#125;\n                ]\n            &#125;,\n            &#123;separator:true&#125;,\n            &#123;\n                label: 'Quit', icon: 'fa-minus'\n            &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SlideMenuDemoModule", function() { return SlideMenuDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__ = __webpack_require__("./src/app/showcase/components/slidemenu/slidemenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__slidemenudemo_routing_module__ = __webpack_require__("./src/app/showcase/components/slidemenu/slidemenudemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_slidemenu_slidemenu__ = __webpack_require__("./src/app/components/slidemenu/slidemenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SlideMenuDemoModule = (function () {
    function SlideMenuDemoModule() {
    }
    SlideMenuDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__slidemenudemo_routing_module__["a" /* SlideMenuDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_slidemenu_slidemenu__["a" /* SlideMenuModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__slidemenudemo__["a" /* SlideMenuDemo */]
            ]
        })
    ], SlideMenuDemoModule);
    return SlideMenuDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/slidemenu/slidemenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SlideMenuDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SlideMenuDemo = (function () {
    function SlideMenuDemo() {
    }
    SlideMenuDemo.prototype.ngOnInit = function () {
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
    SlideMenuDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/slidemenu/slidemenudemo.html")
        })
    ], SlideMenuDemo);
    return SlideMenuDemo;
}());



/***/ })

});
//# sourceMappingURL=slidemenudemo.module.chunk.js.map