webpackJsonp(["selectbuttondemo.module"],{

/***/ "./src/app/components/selectbutton/selectbutton.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export SELECTBUTTON_VALUE_ACCESSOR */
/* unused harmony export SelectButton */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_objectutils__ = __webpack_require__("./src/app/components/utils/objectutils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SELECTBUTTON_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* forwardRef */])(function () { return SelectButton; }),
    multi: true
};
var SelectButton = (function () {
    function SelectButton(objectUtils, cd) {
        this.objectUtils = objectUtils;
        this.cd = cd;
        this.onOptionClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onModelChange = function () { };
        this.onModelTouched = function () { };
    }
    Object.defineProperty(SelectButton.prototype, "options", {
        get: function () {
            return this._options;
        },
        set: function (val) {
            var opts = this.optionLabel || this.itemTemplate ? this.objectUtils.generateSelectItems(val, this.optionLabel) : val;
            this._options = opts;
        },
        enumerable: true,
        configurable: true
    });
    SelectButton.prototype.writeValue = function (value) {
        this.value = value;
        this.cd.markForCheck();
    };
    SelectButton.prototype.registerOnChange = function (fn) {
        this.onModelChange = fn;
    };
    SelectButton.prototype.registerOnTouched = function (fn) {
        this.onModelTouched = fn;
    };
    SelectButton.prototype.setDisabledState = function (val) {
        this.disabled = val;
    };
    SelectButton.prototype.onItemClick = function (event, option, checkbox, index) {
        if (this.disabled) {
            return;
        }
        checkbox.focus();
        if (this.multiple) {
            var itemIndex_1 = this.findItemIndex(option);
            if (itemIndex_1 != -1)
                this.value = this.value.filter(function (val, i) { return i != itemIndex_1; });
            else
                this.value = (this.value || []).concat([option.value]);
        }
        else {
            this.value = option.value;
        }
        this.onOptionClick.emit({
            originalEvent: event,
            option: option,
            index: index
        });
        this.onModelChange(this.value);
        this.onChange.emit({
            originalEvent: event,
            value: this.value
        });
    };
    SelectButton.prototype.onFocus = function (event) {
        this.focusedItem = event.target;
    };
    SelectButton.prototype.onBlur = function (event) {
        this.focusedItem = null;
        this.onModelTouched();
    };
    SelectButton.prototype.isSelected = function (option) {
        if (this.multiple)
            return this.findItemIndex(option) != -1;
        else
            return this.objectUtils.equals(option.value, this.value, this.dataKey);
    };
    SelectButton.prototype.findItemIndex = function (option) {
        var index = -1;
        if (this.value) {
            for (var i = 0; i < this.value.length; i++) {
                if (this.value[i] == option.value) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], SelectButton.prototype, "tabindex", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectButton.prototype, "multiple", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], SelectButton.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectButton.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "dataKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SelectButton.prototype, "optionLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SelectButton.prototype, "onOptionClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], SelectButton.prototype, "onChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["r" /* ContentChild */])(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */]),
        __metadata("design:type", Object)
    ], SelectButton.prototype, "itemTemplate", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], SelectButton.prototype, "options", null);
    SelectButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-selectButton',
            template: "\n        <div [ngClass]=\"'ui-selectbutton ui-buttonset ui-widget ui-corner-all ui-buttonset-' + options.length\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <div *ngFor=\"let option of options; let i = index\" class=\"ui-button ui-widget ui-state-default ui-button-text-only {{option.styleClass}}\"\n                [ngClass]=\"{'ui-state-active':isSelected(option), 'ui-state-disabled':disabled, 'ui-state-focus': cbox == focusedItem, \n                'ui-button-text-icon-left': (option.icon != null), 'ui-button-icon-only': (option.icon && !option.label)}\" (click)=\"onItemClick($event,option,cbox,i)\" [attr.title]=\"option.title\">\n                <ng-container *ngIf=\"!itemTemplate else customcontent\">\n                    <span [ngClass]=\"['ui-clickable', 'ui-button-icon-left']\" [class]=\"option.icon\" *ngIf=\"option.icon\"></span>\n                    <span class=\"ui-button-text ui-clickable\">{{option.label||'ui-btn'}}</span>\n                </ng-container>\n                <ng-template #customcontent>\n                    <ng-container *ngTemplateOutlet=\"itemTemplate; context: {$implicit: option.value, index: i}\"></ng-container>\n                </ng-template>\n                <div class=\"ui-helper-hidden-accessible\">\n                    <input #cbox type=\"checkbox\" [checked]=\"isSelected(option)\" (focus)=\"onFocus($event)\" (blur)=\"onBlur($event)\" [attr.tabindex]=\"tabindex\" [attr.disabled]=\"disabled\">\n                </div>\n            </div>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_2__utils_objectutils__["a" /* ObjectUtils */], SELECTBUTTON_VALUE_ACCESSOR]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__utils_objectutils__["a" /* ObjectUtils */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["k" /* ChangeDetectorRef */]])
    ], SelectButton);
    return SelectButton;
}());

var SelectButtonModule = (function () {
    function SelectButtonModule() {
    }
    SelectButtonModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            exports: [SelectButton],
            declarations: [SelectButton]
        })
    ], SelectButtonModule);
    return SelectButtonModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__selectbuttondemo__ = __webpack_require__("./src/app/showcase/components/selectbutton/selectbuttondemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectButtonDemoRoutingModule = (function () {
    function SelectButtonDemoRoutingModule() {
    }
    SelectButtonDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__selectbuttondemo__["a" /* SelectButtonDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], SelectButtonDemoRoutingModule);
    return SelectButtonDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">SelectButton</span>\n        <span>SelectButton is used to choose single or multiple items from a list using buttons.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"></p-selectButton>\n\n    <p>Selected Type: <span style=\"font-weight: bold\">{{selectedType}}</span></p>\n\n    <h3>Multiple</h3>\n    <p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"></p-selectButton>\n    <p>Selected Types: <span style=\"font-weight: bold\" *ngFor=\"let type of selectedTypes\">{{type}} </span></p>\n\n    <h3>Icon Only</h3>\n    <p-selectButton [options]=\"modes\" [(ngModel)]=\"selectedModes\" multiple=\"multiple\"></p-selectButton>\n    <p>Selected Modes: <span style=\"font-weight: bold\" *ngFor=\"let mode of selectedModes\">{{mode}} </span></p>\n\n    <h3>Custom Template</h3>\n    <p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\">\n        <ng-template let-item>\n            <div style=\"padding: .5em 1em\">\n                <img style=\"vertical-align: middle; margin-right: .5em\" src=\"assets/showcase/images/demo/flag/{{item.flag}}\" height=\"20px\"/>\n                <span>{{item.name}}</span>\n            </div>\n        </ng-template>\n    </p-selectButton>\n    <p>Selected Country: <span style=\"font-weight: bold\">{{selectedCountry?.name}}</span></p>\n\n    <hr>\n    <button type=\"button\" (click)=\"clear()\" pButton icon=\"fa-close\" label=\"Clear\"></button>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectButtonModule&#125; from 'primeng/selectbutton';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>SelectButton requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\n            instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how \n            the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities1\" [(ngModel)]=\"selectedCity1\"&gt;&lt;/p-selectButton&gt;\n\n&lt;p-selectButton [options]=\"cities2\" [(ngModel)]=\"selectedCity2\" optionLabel=\"name\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\nexport class MyModel &#123;\n\n    cities1: SelectItem[];\n\n    cities2: City[];\n\n    selectedCity1: City;\n\n    selectedCity2: City;\n\n    constructor() &#123;\n      //SelectItem API with label-value pairs\n      this.cities1 = [\n          &#123;label:'Select City', value:null&#125;,\n          &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\n          &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\n          &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\n          &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\n          &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\n      ];\n      \n      //An array of cities\n      this.cities2 = [\n          &#123;name: 'New York', code: 'NY'&#125;,\n          &#123;name: 'Rome', code: 'RM'&#125;,\n          &#123;name: 'London', code: 'LDN'&#125;,\n          &#123;name: 'Istanbul', code: 'IST'&#125;,\n          &#123;name: 'Paris', code: 'PRS'&#125;\n      ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Multiple</h3>\n            <p>SelectButton allows selecting only one item by default and setting multiple option enables choosing more than one item. \n                In multiple case, model property should be an array instance that is not null or undefined.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" [(ngModel)]=\"selectedCities\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\nexport class MyModel &#123;\n\n    cities: SelectItem[];\n\n    selectedCities: string[] = [];\n\n    constructor() &#123;\n        this.cities = [];\n        this.cities.push(&#123;label:'New York', value:'New York'&#125;);\n        this.cities.push(&#123;label:'Rome', value:'Rome'&#125;);\n        this.cities.push(&#123;label:'London', value:'London'&#125;);\n        this.cities.push(&#123;label:'Istanbul', value:'Istanbul'&#125;);\n        this.cities.push(&#123;label:'Paris', value:'Paris'&#125;);\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>SelectButton can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"cities\" formControlName=\"selectedCity\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n            <h3>Icons</h3>\n            <p>Button options can display icons using the icon property of the SelectItem API.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"selectedType\" [(ngModel)]=\"types\"&gt;&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n\n    types: SelectItem[];\n\n    selectedType: string;\n\n    constructor() &#123;\n        this.types = [];\n        this.types.push(&#123;title: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'&#125;);\n        this.types.push(&#123;title: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'&#125;);\n        this.types.push(&#123;title: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'&#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Templating</h3>\n            <p>Items support templating to display custom content inside the buttons using an ng-template that receives the option as the implicit variable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\"&gt;\n    &lt;ng-template let-item&gt;\n        &lt;img src=\"assets/showcase/images/demo/flag/&#123;&#123;item.flag&#125;&#125;\" /&gt;\n        &lt;span&gt;&#123;&#123;item.name&#125;&#125;&lt;/span&gt;\n    &lt;/ng-template&gt;\n&lt;/p-selectButton&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n        \n    countries: any[];\n\n    selectedCountry: any;\n\n    constructor() &#123;\n        this.countries = [\n            &#123;name: 'USA', flag: 'usa.png'&#125;,\n            &#123;name: 'Germany', flag: 'germany.png'&#125;,\n            &#123;name: 'Japan', flag: 'japan.png'&#125;\n        ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of selectitems to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>optionLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\n                        </tr>\n                        <tr>\n                            <td>multiple</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified, allows selecting multiple values.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: single value or an array of values that are selected\n                            </td>\n                            <td>Callback to invoke when value changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onOptionClick</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.option: SelectItem instance of the clicked button<br />\n                                event.index: Index of the clicked button\n                            </td>\n                            <td>Callback to invoke when a button is clicked.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/selectbutton\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedType\"&gt;&lt;/p-selectButton&gt;\n\n&lt;p&gt;Selected Type: &lt;span style=\"font-weight: bold\"&gt;&#123;&#123;selectedType&#125;&#125;&lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Multiple&lt;/h3&gt;\n&lt;p-selectButton [options]=\"types\" [(ngModel)]=\"selectedTypes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Types: &lt;span style=\"font-weight: bold\" *ngFor=\"let type of selectedTypes\"&gt;&#123;&#123;type&#125;&#125; &lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Icon Only&lt;/h3&gt;\n&lt;p-selectButton [options]=\"modes\" [(ngModel)]=\"selectedModes\" multiple=\"multiple\"&gt;&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Modes: &lt;span style=\"font-weight: bold\" *ngFor=\"let mode of selectedModes\"&gt;&#123;&#123;mode&#125;&#125; &lt;/span&gt;&lt;/p&gt;\n\n&lt;h3&gt;Custom Template&lt;/h3&gt;\n&lt;p-selectButton [options]=\"countries\" [(ngModel)]=\"selectedCountry\"&gt;\n    &lt;ng-template let-item&gt;\n        &lt;div style=\"padding: .5em 1em\"&gt;\n            &lt;img style=\"vertical-align: middle; margin-right: .5em\" src=\"assets/showcase/images/demo/flag/&#123;&#123;item.flag&#125;&#125;\" height=\"20px\"/&gt;\n            &lt;span&gt;&#123;&#123;item.name&#125;&#125;&lt;/span&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-selectButton&gt;\n&lt;p&gt;Selected Country: &lt;span style=\"font-weight: bold\"&gt;&#123;&#123;selectedCountry?.name&#125;&#125;&lt;/span&gt;&lt;/p&gt;\n\n&lt;hr&gt;\n&lt;button type=\"button\" (click)=\"clear()\" pButton icon=\"fa-close\" label=\"Clear\"&gt;&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class SelectButtonDemo &#123;\n\n    types: SelectItem[];\n\n    selectedType: string;\n\n    selectedTypes: string[] = ['PayPal','MasterCard'];\n\n    selectedModes: string[];\n\n    modes: SelectItem[];\n\n    countries: any[];\n\n    selectedCountry: any;\n\n    constructor() &#123;\n        this.types = [\n            &#123;label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal'&#125;,\n            &#123;label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa'&#125;,\n            &#123;label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard'&#125;\n        ];\n\n        this.modes = [\n            &#123;value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold'&#125;,\n            &#123;value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic'&#125;,\n            &#123;value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline'&#125;\n        ];\n\n        this.countries = [\n            &#123;name: 'USA', flag: 'usa.png'&#125;,\n            &#123;name: 'Germany', flag: 'germany.png'&#125;,\n            &#123;name: 'Japan', flag: 'japan.png'&#125;\n        ];\n    &#125;\n\n    clear() &#123;\n        this.selectedType = null;\n        this.selectedTypes = [];\n        this.selectedModes = [];\n        this.selectedCountry = null;\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectButtonDemoModule", function() { return SelectButtonDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__selectbuttondemo__ = __webpack_require__("./src/app/showcase/components/selectbutton/selectbuttondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__selectbuttondemo_routing_module__ = __webpack_require__("./src/app/showcase/components/selectbutton/selectbuttondemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_selectbutton_selectbutton__ = __webpack_require__("./src/app/components/selectbutton/selectbutton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var SelectButtonDemoModule = (function () {
    function SelectButtonDemoModule() {
    }
    SelectButtonDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_4__selectbuttondemo_routing_module__["a" /* SelectButtonDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_selectbutton_selectbutton__["a" /* SelectButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__selectbuttondemo__["a" /* SelectButtonDemo */]
            ]
        })
    ], SelectButtonDemoModule);
    return SelectButtonDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/selectbutton/selectbuttondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectButtonDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SelectButtonDemo = (function () {
    function SelectButtonDemo() {
        this.selectedTypes = ['PayPal', 'MasterCard'];
        this.types = [
            { label: 'Paypal', value: 'PayPal', icon: 'fa fa-fw fa-cc-paypal' },
            { label: 'Visa', value: 'Visa', icon: 'fa fa-fw fa-cc-visa' },
            { label: 'MasterCard', value: 'MasterCard', icon: 'fa fa-fw fa-cc-mastercard' }
        ];
        this.modes = [
            { value: 'Bold', title: 'Bold', icon: 'fa fa-fw fa-bold' },
            { value: 'Italic', title: 'Italic', icon: 'fa fa-fw fa-italic' },
            { value: 'Underline', title: 'Underline', icon: 'fa fa-fw fa-underline' }
        ];
        this.countries = [
            { name: 'USA', flag: 'usa.png' },
            { name: 'Germany', flag: 'germany.png' },
            { name: 'Japan', flag: 'japan.png' }
        ];
    }
    SelectButtonDemo.prototype.clear = function () {
        this.selectedType = null;
        this.selectedTypes = [];
        this.selectedModes = [];
        this.selectedCountry = null;
    };
    SelectButtonDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/selectbutton/selectbuttondemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], SelectButtonDemo);
    return SelectButtonDemo;
}());



/***/ })

});
//# sourceMappingURL=selectbuttondemo.module.chunk.js.map