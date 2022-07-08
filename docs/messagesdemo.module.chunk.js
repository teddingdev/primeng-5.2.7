webpackJsonp(["messagesdemo.module"],{

/***/ "./src/app/showcase/components/messages/messagesdemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagesdemo__ = __webpack_require__("./src/app/showcase/components/messages/messagesdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var MessagesDemoRoutingModule = (function () {
    function MessagesDemoRoutingModule() {
    }
    MessagesDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__messagesdemo__["a" /* MessagesDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], MessagesDemoRoutingModule);
    return MessagesDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Messages</span>\n        <span>Messages is used to display messages inline.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-messages [(value)]=\"msgs\"></p-messages>\n\n    <h3 class=\"first\">Basic</h3>\n    <div>\n        <button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"></button>\n        <button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"></button>\n        <button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"></button>\n        <button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"></button>\n        <button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"></button>\n        <button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"></button>\n    </div>\n    \n    <h3>Message Service</h3>\n    <button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"></button>\n    \n    <h3>Inline Message CSS</h3>\n    <p>p-message component is used to display inline messages mostly within forms.</p>\n    <p-message severity=\"info\" text=\"PrimeNG Rocks\"></p-message>\n    <p-message severity=\"success\" text=\"Record Saved\"></p-message>  \n    <p-message severity=\"warn\" text=\"Are you sure?\"></p-message>  \n    <p-message severity=\"error\" text=\"Field is required\"></p-message>\n    \n    <div style=\"margin-top:30px\">\n        <input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\">\n        <p-message severity=\"error\" text=\"Field is required\"></p-message>\n    </div>\n    \n    <div style=\"margin-top:30px\">\n        <input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\">\n        <p-message severity=\"error\"></p-message>\n    </div>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MessagesModule&#125; from 'primeng/messages';\nimport &#123;MessageModule&#125; from 'primeng/message';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>A single message is specified by Message interface in PrimeNG that defines the id, severity, summary and detail as the properties.\n                Messages to display can either be defined using the value property which should an array of Message instances or using \n               a MessageService are defined using the value property which should an array of Message instances.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n            \n            <h3>Message Array</h3>\n            <p>A binding to the value property is required to provide messages to the component.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n\n&lt;button type=\"button\" (click)=\"show()\"&gt;Show&lt;/button&gt;\n&lt;button type=\"button\" (click)=\"clear()\"&gt;Hide&lt;/button&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nshow() &#123;\n    this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\n&#125;\n\nhide() &#123;\n    this.msgs = [];\n&#125;\n</code>\n</pre>\n\n            <h3>Message Service</h3>\n            <p>MessageService alternative does not require a value binding to an array.\n            In order to use this service, import the class and define it as a provider in a component higher up in the component tree such as application instance itself \n            so that descandant components can have it injected. If there are multiple message components having the same message service, you may use key property of the component\n            to match the key of the message to implement scoping.</p>\n            \n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;Message&#125; from 'primeng/components/common/api';\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\n\n@Component(&#123;\n    templateUrl: './messagesdemo.html'\n    &#125;)\n    export class MessageServiceDemo &#123;\n\n        constructor(private messageService: MessageService) &#123;&#125;\n\n        addSingle() &#123;\n            this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\n        &#125;\n\n        addMultiple() &#123;\n            this.messageService.addAll([&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;,\n                            &#123;severity:'info', summary:'Info Message', detail:'Via MessageService'&#125;]);\n        &#125;\n        \n        clear() &#123;\n            this.messageService.clear();\n        &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Closable</h3>\n            <p>Messages are closable by default resulting in a close icon being displayed on top right corner.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n\n            <p>In order to disable closable messages, set closable to false. Note that in this case two-way binding is not necessary as the component\n            does not need to update its value.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [value]=\"msgs\" [closable]=\"false\"&gt;&lt;/p-messages&gt;\n</code>\n</pre>\n\n            <h3>Severities</h3>\n            <p>Here are the possible values for the severity of a message.</p>\n            <ul>\n                <li>success</li>\n                <li>info</li>\n                <li>warn</li>\n                <li>error</li>\n            </ul>\n            \n            <h3>Message Component</h3>\n            <p>Message component is useful in cases where messages need to be displayed related to an element such as forms. It has two property, severity and text of the message.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\n</code>\n</pre>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Type</th>\n                        <th>Default</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of messages to display.</td>\n                        </tr>\n                        <tr>\n                            <td>closable</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines if message box can be closed by the click icon.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>enableService</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether displaying services messages are enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>key</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Id to match the key of the message to enable scoping in service based messaging.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Element</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-messages</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-info</td>\n                            <td>Container element when displaying info messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-warn</td>\n                            <td>Container element when displaying warning messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-error</td>\n                            <td>Container element when displaying error messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-success</td>\n                            <td>Container element when displaying success messages.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-close</td>\n                            <td>Close icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-icon</td>\n                            <td>Severity icon.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-summary</td>\n                            <td>Summary of a message.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-messages-detail</td>\n                            <td>Detail of a message.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/messages\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-messages [(value)]=\"msgs\"&gt;&lt;/p-messages&gt;\n\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;div&gt;\n    &lt;button type=\"button\" pButton (click)=\"showSuccess()\" label=\"Success\" class=\"ui-button-success\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showInfo()\" label=\"Info\" class=\"ui-button-info\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showWarn()\" label=\"Warn\" class=\"ui-button-warning\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showError()\" label=\"Error\" class=\"ui-button-danger\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"showMultiple()\" label=\"Multiple\"&gt;&lt;/button&gt;\n    &lt;button type=\"button\" pButton (click)=\"clear()\" icon=\"fa-close\" style=\"float:right\" label=\"Clear\"&gt;&lt;/button&gt;\n&lt;/div&gt;\n\n&lt;h3&gt;Message Service&lt;/h3&gt;\n&lt;button type=\"button\" pButton (click)=\"showViaService()\" label=\"Use Service\"&gt;&lt;/button&gt;\n\n&lt;h3&gt;Inline Message CSS&lt;/h3&gt;\n&lt;p&gt;CSS helpers to display inline messages mostly within forms.&lt;/p&gt;\n&lt;p-message severity=\"info\" text=\"PrimeNG Rocks\"&gt;&lt;/p-message&gt;\n&lt;p-message severity=\"success\" text=\"Record Saved\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"warn\" text=\"Are you sure?\"&gt;&lt;/p-message&gt;  \n&lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\n\n&lt;div style=\"margin-top:30px\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Username\" class=\"ng-dirty ng-invalid\"&gt;\n    &lt;p-message severity=\"error\" text=\"Field is required\"&gt;&lt;/p-message&gt;\n&lt;/div&gt;\n\n&lt;div style=\"margin-top:30px\"&gt;\n    &lt;input type=\"text\" pInputText placeholder=\"Email\" class=\"ng-dirty ng-invalid\"&gt;\n    &lt;p-message severity=\"error\"&gt;&lt;/p-message&gt;\n&lt;/div>\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Component&#125; from '@angular/core';\nimport &#123;SelectItem&#125; from 'primeng/components/common/api';\nimport &#123;Message&#125; from 'primeng/components/common/api';\nimport &#123;MessageService&#125; from 'primeng/components/common/messageservice';\n\n@Component(&#123;\n    templateUrl: './messagesdemo.html',\n    providers: [MessageService]\n&#125;)\nexport class GrowlDemo &#123;\n\n    msgs: Message[] = [];\n    \n    constructor(private messageService: MessageService) &#123;&#125;\n\n    showSuccess() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'success', summary:'Success Message', detail:'Order submitted'&#125;);\n    &#125;\n\n    showInfo() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Info Message', detail:'PrimeNG rocks'&#125;);\n    &#125;\n\n    showWarn() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'warn', summary:'Warn Message', detail:'There are unsaved changes'&#125;);\n    &#125;\n\n    showError() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'error', summary:'Error Message', detail:'Validation failed'&#125;);\n    &#125;\n\n    showMultiple() &#123;\n        this.msgs = [];\n        this.msgs.push(&#123;severity:'info', summary:'Message 1', detail:'PrimeNG rocks'&#125;);\n        this.msgs.push(&#123;severity:'info', summary:'Message 2', detail:'PrimeUI rocks'&#125;);\n        this.msgs.push(&#123;severity:'info', summary:'Message 3', detail:'PrimeFaces rocks'&#125;);\n    &#125;\n    \n    showViaService() &#123;\n        this.messageService.add(&#123;severity:'success', summary:'Service Message', detail:'Via MessageService'&#125;);\n    &#125;\n\n    clear() &#123;\n        this.msgs = [];\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesDemoModule", function() { return MessagesDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messagesdemo__ = __webpack_require__("./src/app/showcase/components/messages/messagesdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messagesdemo_routing_module__ = __webpack_require__("./src/app/showcase/components/messages/messagesdemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_messages_messages__ = __webpack_require__("./src/app/components/messages/messages.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_message_message__ = __webpack_require__("./src/app/components/message/message.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__ = __webpack_require__("./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var MessagesDemoModule = (function () {
    function MessagesDemoModule() {
    }
    MessagesDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_3__messagesdemo_routing_module__["a" /* MessagesDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_messages_messages__["a" /* MessagesModule */],
                __WEBPACK_IMPORTED_MODULE_5__components_message_message__["a" /* MessageModule */],
                __WEBPACK_IMPORTED_MODULE_7__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_8__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_9__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__messagesdemo__["a" /* MessagesDemo */]
            ]
        })
    ], MessagesDemoModule);
    return MessagesDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/messages/messagesdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__ = __webpack_require__("./src/app/components/common/messageservice.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesDemo = (function () {
    function MessagesDemo(messageService) {
        this.messageService = messageService;
        this.msgs = [];
    }
    MessagesDemo.prototype.showSuccess = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Success Message', detail: 'Order submitted' });
    };
    MessagesDemo.prototype.showInfo = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Info Message', detail: 'PrimeNG rocks' });
    };
    MessagesDemo.prototype.showWarn = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'warn', summary: 'Warn Message', detail: 'There are unsaved changes' });
    };
    MessagesDemo.prototype.showError = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'error', summary: 'Error Message', detail: 'Validation failed' });
    };
    MessagesDemo.prototype.showMultiple = function () {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Message 1', detail: 'PrimeNG rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 2', detail: 'PrimeUI rocks' });
        this.msgs.push({ severity: 'info', summary: 'Message 3', detail: 'PrimeFaces rocks' });
    };
    MessagesDemo.prototype.showViaService = function () {
        this.messageService.add({ severity: 'success', summary: 'Service Message', detail: 'Via MessageService' });
    };
    MessagesDemo.prototype.clear = function () {
        this.msgs = [];
    };
    MessagesDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/messages/messagesdemo.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__components_common_messageservice__["a" /* MessageService */]])
    ], MessagesDemo);
    return MessagesDemo;
}());



/***/ })

});
//# sourceMappingURL=messagesdemo.module.chunk.js.map