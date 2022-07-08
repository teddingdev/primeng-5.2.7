webpackJsonp(["multiselectdemo.module"],{

/***/ "./src/app/showcase/components/multiselect/multiselectdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__multiselectdemo__ = __webpack_require__("./src/app/showcase/components/multiselect/multiselectdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MultiSelectDemoRoutingModule = (function () {
    function MultiSelectDemoRoutingModule() {
    }
    MultiSelectDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__multiselectdemo__["a" /* MultiSelectDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], MultiSelectDemoRoutingModule);
    return MultiSelectDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/multiselect/multiselectdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">MultiSelect</span>\n        <span>MultiSelect is used to select multiple items from a collection.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars1\" [panelStyle]=\"{minWidth:'12em'}\"></p-multiSelect>\n    <p>Selected Cars: {{selectedCars1}}</p>\n    \n    <h3>Template</h3>\n    <p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars2\" [panelStyle]=\"{minWidth:'12em'}\">\n        <ng-template let-car pTemplate=\"item\">\n            <img src=\"assets/showcase/images/demo/car/{{car.label}}.png\" style=\"width:24px;display:inline-block;vertical-align:middle\"/>\n            <div style=\"font-size:14px;float:right;margin-top:4px\">{{car.label}}</div>\n        </ng-template>\n    </p-multiSelect>\n    <p>Selected Cars: {{selectedCars2}}</p>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MultiSelectModule&#125; from 'primeng/multiselect';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>MultiSelect requires a value to bind and a collection of options. There are two alternatives of how to define the options property; one way is providing a collection of SelectItem\n            instances whereas other way is providing an array of arbitrary objects along with the optionLabel property to specify the field name of the option. SelectItem API is designed to have more control on how \n            the options are displayed such as grouping and disabling however in most cases an arbitrary object collection will suffice. Example below demonstrates both cases.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-multiSelect [options]=\"cities1\" [(ngModel)]=\"selectedCities1\"&gt;&lt;/p-multiSelect&gt;\n\n&lt;p-multiSelect [options]=\"cities2\" [(ngModel)]=\"selectedCities2\" optionLabel=\"name\"&gt;&lt;/p-multiSelect&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;SelectItem&#125; from 'primeng/api';\n\ninterface City &#123;&#123;\n    name: string,\n    code: string\n&#125;&#125;\n\nexport class MyModel &#123;\n\n    cities1: SelectItem[];\n    \n    cities2: City[];\n\n    selectedCities1: City[];\n    \n    selectedCities2: City[];\n\n    constructor() &#123;\n        //SelectItem API with label-value pairs\n        this.cities1 = [\n            &#123;label:'New York', value:&#123;id:1, name: 'New York', code: 'NY'&#125;&#125;,\n            &#123;label:'Rome', value:&#123;id:2, name: 'Rome', code: 'RM'&#125;&#125;,\n            &#123;label:'London', value:&#123;id:3, name: 'London', code: 'LDN'&#125;&#125;,\n            &#123;label:'Istanbul', value:&#123;id:4, name: 'Istanbul', code: 'IST'&#125;&#125;\n            &#123;label:'Paris', value:&#123;id:5, name: 'Paris', code: 'PRS'&#125;&#125;\n        ];\n        \n        //An array of cities\n        this.cities2 = [\n            &#123;name: 'New York', code: 'NY'&#125;,\n            &#123;name: 'Rome', code: 'RM'&#125;,\n            &#123;name: 'London', code: 'LDN'&#125;,\n            &#123;name: 'Istanbul', code: 'IST'&#125;,\n            &#123;name: 'Paris', code: 'PRS'&#125;\n        ];\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <h3>Model Driven Forms</h3>\n            <p>MultiSelect can be used in a model driven form as well.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-multiSelect [options]=\"cities\" formControlName=\"selectedCities\"&gt;&lt;/p-multiSelect&gt;\n</code>\n</pre>\n        \n            <h3>Templating</h3>\n            <p>Label of a selectitem is displayed by default next to the checkbox in the overlay panel and it is possible to customize\n            the content using templating. The ngTemplate receives the selectitem as the implicit variable along with the index of the option.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars2\" [panelStyle]=\"&#123;minWidth:'12em'}\"&gt;\n    &lt;ng-template let-car let-i=\"index\" pTemplate=\"item\"&gt;\n        {{i}}\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"width:24px;display:inline-block;vertical-align:middle\"/&gt;\n        &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;&#123;&#123;car.label&#125;&#125;&lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-multiSelect&gt;\n&lt;p&gt;Selected Cars: &#123;&#123;selectedCars2&#125;&#125;&lt;/p&gt;\n</code>\n</pre>\n\n            <h3>Change Detection</h3>\n            <p>MultiSelect detects changes to options and selected values using setters so when changing your model, \n                prefer creating a new array reference instead of manipulating an existing array.</p>\n\n            <h3>Footer</h3>\n            <p>MultiSelect uses p-footer element to display custom content inside the footer.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-multiSelect [options]=\"cities\" formControlName=\"selectedCities\"&gt;\n    &lt;p-footer&gt;\n        //Footer contentr\n    &lt;/p-footer&gt;\n&lt;/p-multiSelect&gt;\n</code>\n</pre>     \n        \n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>options</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display as the available options.</td>\n                        </tr>\n                        <tr>\n                            <td>optionLabel</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the label field of an option when an arbitrary objects instead of SelectItems are used as options.</td>\n                        </tr>\n                        <tr>\n                            <td>disabled</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When present, it specifies that the element should be disabled.</td>\n                        </tr>\n                        <tr>\n                            <td>filter</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When specified, displays an input field to filter the items on keyup.</td>\n                        </tr>\n                        <tr>\n                            <td>filterPlaceHolder</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Defines placeholder of the filter input.</td>\n                        </tr>\n                        <tr>\n                            <td>defaultLabel</td>\n                            <td>string</td>\n                            <td>Choose</td>\n                            <td>Label to display when there are no selections.</td>\n                        </tr>\n                        <tr>\n                            <td>appendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>Inline style of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the element.</td>\n                        </tr>\n                        <tr>\n                            <td>panelStyle</td>\n                            <td>object</td>\n                            <td>null</td>\n                            <td>Inline style of the overlay panel.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the overlay panel.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>200px</td>\n                            <td>Height of the viewport in pixels, a scrollbar is defined if height of list exceeds this value.</td>\n                        </tr>\n                        <tr>\n                            <td>overlayVisible</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Specifies the visibility of the options panel.</td>\n                        </tr>\n                        <tr>\n                            <td>tabindex</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Index of the element in tabbing order.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a value in options.</td>\n                        </tr>\n                        <tr>\n                            <td>name</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the input element.</td>\n                        </tr>\n                        <tr>\n                            <td>inputId</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Identifier of the focus input to match a label defined for the component.</td>\n                        </tr>\n                        <tr>\n                            <td>displaySelectedLabel</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show labels of selected item labels or use default label.</td>\n                        </tr>\n                        <tr>\n                            <td>maxSelectedLabels</td>\n                            <td>number</td>\n                            <td>3</td>\n                            <td>Decides how many selected item labels to show at most.</td>\n                        </tr>\n                        <tr>\n                            <td>selectedItemsLabel</td>\n                            <td>string</td>\n                            <td>&#123;0&#125; items selected</td>\n                            <td>Label to display after exceeding max selected labels.</td>\n                        </tr>\n                        <tr>\n                            <td>showToggleAll</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show the checkbox at header to toggle all items at once.</td>\n                        </tr>\n                        <tr>\n                            <td>resetFilterOnHide</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Clears the filter value when hiding the dropdown.</td>\n                        </tr>\n                        <tr>\n                            <td>dropdownIcon</td>\n                            <td>string</td>\n                            <td>fa fa-fw fa-caret-down</td>\n                            <td>Icon class of the dropdown icon.</td>\n                        </tr>\n                        <tr>\n                            <td>showHeader</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show the header.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onChange</td>\n                            <td>event.originalEvent: browser event<br />\n                                event.value: Current selected values<br />\n                                event.itemValue: Toggled item value\n                            </td>\n                            <td>Callback to invoke when value changes.</td>\n                        </tr>\n                        <tr>\n                            <td>onFocus</td>\n                            <td>event.originalEvent: browser event</td>\n                            <td>Callback to invoke when multiselect receives focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onBlur</td>\n                            <td>event.originalEvent: browser event</td>\n                            <td>Callback to invoke when multiselect loses focus.</td>\n                        </tr>\n                        <tr>\n                            <td>onPanelShow</td>\n                            <td>-</td>\n                            <td>Callback to invoke when overlay panel becomes visible.</td>\n                        </tr>\n                        <tr>\n                            <td>onPanelHide</td>\n                            <td>-</td>\n                            <td>Callback to invoke when overlay panel becomes hidden.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-multiselect</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-label-container</td>\n                            <td>Container of the label to display selected items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-label-container</td>\n                            <td>Label to display selected items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-trigger</td>\n                            <td>Dropdown button.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-filter-container</td>\n                            <td>Container of filter input.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-panel</td>\n                            <td>Overlay panel for items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-items</td>\n                            <td>List container of items.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-multiselect-item</td>\n                            <td>An item in the list.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/multiselect\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars1\" [panelStyle]=\"&#123;minWidth:'12em'}\"&gt;&lt;/p-multiSelect&gt;\n&lt;p&gt;Selected Cars: &#123;&#123;selectedCars1&#125;&#125;&lt;/p&gt;\n\n&lt;h3&gt;Template&lt;/h3&gt;\n&lt;p-multiSelect [options]=\"cars\" [(ngModel)]=\"selectedCars2\" [panelStyle]=\"&#123;minWidth:'12em'}\"&gt;\n    &lt;ng-template let-car pTemplate=\"item\"&gt;\n        &lt;img src=\"assets/showcase/images/demo/car/&#123;&#123;car.label&#125;&#125;.png\" style=\"width:24px;display:inline-block;vertical-align:middle\"/&gt;\n        &lt;div style=\"font-size:14px;float:right;margin-top:4px\"&gt;&#123;&#123;car.label&#125;&#125;&lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-multiSelect&gt;\n&lt;p&gt;Selected Cars: &#123;&#123;selectedCars2&#125;&#125;&lt;/p&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class MultiSelectDemo &#123;\n\n    cars: SelectItem[];\n\n    selectedCars1: string[] = [];\n\n    selectedCars2: string[] = [];\n\n    constructor() &#123;\n        this.cars = [\n            &#123;label: 'Audi', value: 'Audi'&#125;,\n            &#123;label: 'BMW', value: 'BMW'&#125;,\n            &#123;label: 'Fiat', value: 'Fiat'&#125;,\n            &#123;label: 'Ford', value: 'Ford'&#125;,\n            &#123;label: 'Honda', value: 'Honda'&#125;,\n            &#123;label: 'Jaguar', value: 'Jaguar'&#125;,\n            &#123;label: 'Mercedes', value: 'Mercedes'&#125;,\n            &#123;label: 'Renault', value: 'Renault'&#125;,\n            &#123;label: 'VW', value: 'VW'&#125;,\n            &#123;label: 'Volvo', value: 'Volvo'&#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/multiselect/multiselectdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MultiSelectDemoModule", function() { return MultiSelectDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__multiselectdemo__ = __webpack_require__("./src/app/showcase/components/multiselect/multiselectdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__multiselectdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/multiselect/multiselectdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_multiselect_multiselect__ = __webpack_require__("./src/app/components/multiselect/multiselect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var MultiSelectDemoModule = (function () {
    function MultiSelectDemoModule() {
    }
    MultiSelectDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__multiselectdemo_routing_module__["a" /* MultiSelectDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_multiselect_multiselect__["a" /* MultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__multiselectdemo__["a" /* MultiSelectDemo */]
            ]
        })
    ], MultiSelectDemoModule);
    return MultiSelectDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/multiselect/multiselectdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MultiSelectDemo; });
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

var MultiSelectDemo = (function () {
    function MultiSelectDemo() {
        this.selectedCars1 = [];
        this.selectedCars2 = [];
        this.cars = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' },
        ];
    }
    MultiSelectDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/multiselect/multiselectdemo.html")
        }),
        __metadata("design:paramtypes", [])
    ], MultiSelectDemo);
    return MultiSelectDemo;
}());



/***/ })

});
//# sourceMappingURL=multiselectdemo.module.chunk.js.map