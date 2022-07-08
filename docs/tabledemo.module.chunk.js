webpackJsonp(["tabledemo.module"],{

/***/ "./src/app/components/table/table.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export TableService */
/* unused harmony export Table */
/* unused harmony export TableBody */
/* unused harmony export ScrollableView */
/* unused harmony export SortableColumn */
/* unused harmony export SortIcon */
/* unused harmony export SelectableRow */
/* unused harmony export SelectableRowDblClick */
/* unused harmony export ContextMenuRow */
/* unused harmony export RowToggler */
/* unused harmony export ResizableColumn */
/* unused harmony export ReorderableColumn */
/* unused harmony export EditableColumn */
/* unused harmony export CellEditor */
/* unused harmony export TableRadioButton */
/* unused harmony export TableCheckbox */
/* unused harmony export TableHeaderCheckbox */
/* unused harmony export ReorderableRowHandle */
/* unused harmony export ReorderableRow */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_shared__ = __webpack_require__("./src/app/components/common/shared.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__paginator_paginator__ = __webpack_require__("./src/app/components/paginator/paginator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__ = __webpack_require__("./src/app/components/dom/domhandler.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__ = __webpack_require__("./src/app/components/utils/objectutils.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("./node_modules/rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var TableService = (function () {
    function TableService() {
        this.sortSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.selectionSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.contextMenuSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.valueSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.totalRecordsSource = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["a" /* Subject */]();
        this.sortSource$ = this.sortSource.asObservable();
        this.selectionSource$ = this.selectionSource.asObservable();
        this.contextMenuSource$ = this.contextMenuSource.asObservable();
        this.valueSource$ = this.valueSource.asObservable();
        this.totalRecordsSource$ = this.totalRecordsSource.asObservable();
    }
    TableService.prototype.onSort = function (sortMeta) {
        this.sortSource.next(sortMeta);
    };
    TableService.prototype.onSelectionChange = function () {
        this.selectionSource.next();
    };
    TableService.prototype.onContextMenu = function (data) {
        this.contextMenuSource.next(data);
    };
    TableService.prototype.onValueChange = function (value) {
        this.valueSource.next(value);
    };
    TableService.prototype.onTotalRecordsChange = function (value) {
        this.totalRecordsSource.next(value);
    };
    TableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])()
    ], TableService);
    return TableService;
}());

var Table = (function () {
    function Table(el, domHandler, objectUtils, zone, tableService) {
        this.el = el;
        this.domHandler = domHandler;
        this.objectUtils = objectUtils;
        this.zone = zone;
        this.tableService = tableService;
        this.first = 0;
        this.pageLinks = 5;
        this.alwaysShowPaginator = true;
        this.paginatorPosition = 'bottom';
        this.defaultSortOrder = 1;
        this.sortMode = 'single';
        this.resetPageOnSort = true;
        this.selectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.contextMenuSelectionChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.rowTrackBy = function (index, item) { return item; };
        this.lazy = false;
        this.compareSelectionBy = 'deepEquals';
        this.csvSeparator = ',';
        this.exportFilename = 'download';
        this.filters = {};
        this.filterDelay = 300;
        this.expandedRowKeys = {};
        this.rowExpandMode = 'multiple';
        this.virtualScrollDelay = 500;
        this.virtualRowHeight = 28;
        this.columnResizeMode = 'fit';
        this.loadingIcon = 'fa fa-spin fa-2x fa-circle-o-notch';
        this.onRowSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowUnselect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onSort = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onFilter = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onLazyLoad = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowExpand = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowCollapse = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onContextMenuSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onColResize = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onColReorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onRowReorder = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEditInit = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEditComplete = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onEditCancel = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.onHeaderCheckboxToggle = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this.sortFunction = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */]();
        this._value = [];
        this._totalRecords = 0;
        this.selectionKeys = {};
        this._sortOrder = 1;
        this.filterConstraints = {
            startsWith: function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var filterValue = filter.toLowerCase();
                return value.toString().toLowerCase().slice(0, filterValue.length) === filterValue;
            },
            contains: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase().indexOf(filter.toLowerCase()) !== -1;
            },
            endsWith: function (value, filter) {
                if (filter === undefined || filter === null || filter.trim() === '') {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                var filterValue = filter.toString().toLowerCase();
                return value.toString().toLowerCase().indexOf(filterValue, value.toString().length - filterValue.length) !== -1;
            },
            equals: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value.toString().toLowerCase() == filter.toString().toLowerCase();
            },
            notEquals: function (value, filter) {
                if (filter === undefined || filter === null || (typeof filter === 'string' && filter.trim() === '')) {
                    return false;
                }
                if (value === undefined || value === null) {
                    return true;
                }
                return value.toString().toLowerCase() != filter.toString().toLowerCase();
            },
            in: function (value, filter) {
                if (filter === undefined || filter === null || filter.length === 0) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                for (var i = 0; i < filter.length; i++) {
                    if (filter[i] === value)
                        return true;
                }
                return false;
            },
            lt: function (value, filter) {
                if (filter === undefined || filter === null) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value < filter;
            },
            gt: function (value, filter) {
                if (filter === undefined || filter === null) {
                    return true;
                }
                if (value === undefined || value === null) {
                    return false;
                }
                return value > filter;
            }
        };
    }
    Table.prototype.ngOnInit = function () {
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.initialized = true;
    };
    Table.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'caption':
                    _this.captionTemplate = item.template;
                    break;
                case 'header':
                    _this.headerTemplate = item.template;
                    break;
                case 'body':
                    _this.bodyTemplate = item.template;
                    break;
                case 'footer':
                    _this.footerTemplate = item.template;
                    break;
                case 'summary':
                    _this.summaryTemplate = item.template;
                    break;
                case 'colgroup':
                    _this.colGroupTemplate = item.template;
                    break;
                case 'rowexpansion':
                    _this.expandedRowTemplate = item.template;
                    break;
                case 'frozenrows':
                    _this.frozenRowsTemplate = item.template;
                    break;
                case 'frozenheader':
                    _this.frozenHeaderTemplate = item.template;
                    break;
                case 'frozenbody':
                    _this.frozenBodyTemplate = item.template;
                    break;
                case 'frozenfooter':
                    _this.frozenFooterTemplate = item.template;
                    break;
                case 'frozencolgroup':
                    _this.frozenColGroupTemplate = item.template;
                    break;
                case 'emptymessage':
                    _this.emptyMessageTemplate = item.template;
                    break;
                case 'paginatorleft':
                    _this.paginatorLeftTemplate = item.template;
                    break;
                case 'paginatorright':
                    _this.paginatorRightTemplate = item.template;
                    break;
            }
        });
    };
    Object.defineProperty(Table.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (val) {
            this._value = val;
            if (!this.lazy) {
                this.totalRecords = (this._value ? this._value.length : 0);
                if (this.sortMode == 'single' && this.sortField)
                    this.sortSingle();
                else if (this.sortMode == 'multiple' && this.multiSortMeta)
                    this.sortMultiple();
                else if (this.hasFilter())
                    this._filter();
            }
            if (this.virtualScroll && this.virtualScrollCallback) {
                this.virtualScrollCallback();
            }
            this.tableService.onValueChange(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "totalRecords", {
        get: function () {
            return this._totalRecords;
        },
        set: function (val) {
            this._totalRecords = val;
            this.tableService.onTotalRecordsChange(this._totalRecords);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortField", {
        get: function () {
            return this._sortField;
        },
        set: function (val) {
            this._sortField = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "sortOrder", {
        get: function () {
            return this._sortOrder;
        },
        set: function (val) {
            this._sortOrder = val;
            //avoid triggering lazy load prior to lazy initialization at onInit
            if (!this.lazy || this.initialized) {
                if (this.sortMode === 'single') {
                    this.sortSingle();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "multiSortMeta", {
        get: function () {
            return this._multiSortMeta;
        },
        set: function (val) {
            this._multiSortMeta = val;
            if (this.sortMode === 'multiple') {
                this.sortMultiple();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "selection", {
        get: function () {
            return this._selection;
        },
        set: function (val) {
            this._selection = val;
            if (!this.preventSelectionSetterPropagation) {
                this.updateSelectionKeys();
                this.tableService.onSelectionChange();
            }
            this.preventSelectionSetterPropagation = false;
        },
        enumerable: true,
        configurable: true
    });
    Table.prototype.updateSelectionKeys = function () {
        if (this.dataKey && this._selection) {
            this.selectionKeys = {};
            if (Array.isArray(this._selection)) {
                for (var _i = 0, _a = this._selection; _i < _a.length; _i++) {
                    var data = _a[_i];
                    this.selectionKeys[String(this.objectUtils.resolveFieldData(data, this.dataKey))] = 1;
                }
            }
            else {
                this.selectionKeys[String(this.objectUtils.resolveFieldData(this._selection, this.dataKey))] = 1;
            }
        }
    };
    Table.prototype.onPageChange = function (event) {
        this.first = event.first;
        this.rows = event.rows;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        this.onPage.emit({
            first: this.first,
            rows: this.rows
        });
        this.tableService.onValueChange(this.value);
    };
    Table.prototype.sort = function (event) {
        var originalEvent = event.originalEvent;
        if (this.sortMode === 'single') {
            this._sortOrder = (this.sortField === event.field) ? this.sortOrder * -1 : this.defaultSortOrder;
            this._sortField = event.field;
            this.sortSingle();
        }
        if (this.sortMode === 'multiple') {
            var metaKey = originalEvent.metaKey || originalEvent.ctrlKey;
            var sortMeta = this.getSortMeta(event.field);
            if (sortMeta) {
                if (!metaKey) {
                    this._multiSortMeta = [{ field: event.field, order: sortMeta.order * -1 }];
                }
                else {
                    sortMeta.order = sortMeta.order * -1;
                }
            }
            else {
                if (!metaKey || !this.multiSortMeta) {
                    this._multiSortMeta = [];
                }
                this.multiSortMeta.push({ field: event.field, order: this.defaultSortOrder });
            }
            this.sortMultiple();
        }
    };
    Table.prototype.sortSingle = function () {
        var _this = this;
        if (this.sortField && this.sortOrder) {
            if (this.resetPageOnSort) {
                this.first = 0;
            }
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        field: this.sortField,
                        order: this.sortOrder
                    });
                }
                else {
                    this.value.sort(function (data1, data2) {
                        var value1 = _this.objectUtils.resolveFieldData(data1, _this.sortField);
                        var value2 = _this.objectUtils.resolveFieldData(data2, _this.sortField);
                        var result = null;
                        if (value1 == null && value2 != null)
                            result = -1;
                        else if (value1 != null && value2 == null)
                            result = 1;
                        else if (value1 == null && value2 == null)
                            result = 0;
                        else if (typeof value1 === 'string' && typeof value2 === 'string')
                            result = value1.localeCompare(value2);
                        else
                            result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
                        return (_this.sortOrder * result);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            var sortMeta = {
                field: this.sortField,
                order: this.sortOrder
            };
            this.onSort.emit(sortMeta);
            this.tableService.onSort(sortMeta);
        }
    };
    Table.prototype.sortMultiple = function () {
        var _this = this;
        if (this.multiSortMeta) {
            if (this.lazy) {
                this.onLazyLoad.emit(this.createLazyLoadMetadata());
            }
            else if (this.value) {
                if (this.customSort) {
                    this.sortFunction.emit({
                        data: this.value,
                        mode: this.sortMode,
                        multiSortMeta: this.multiSortMeta
                    });
                }
                else {
                    this.value.sort(function (data1, data2) {
                        return _this.multisortField(data1, data2, _this.multiSortMeta, 0);
                    });
                }
                if (this.hasFilter()) {
                    this._filter();
                }
            }
            this.onSort.emit({
                multisortmeta: this.multiSortMeta
            });
            this.tableService.onSort(this.multiSortMeta);
        }
    };
    Table.prototype.multisortField = function (data1, data2, multiSortMeta, index) {
        var value1 = this.objectUtils.resolveFieldData(data1, multiSortMeta[index].field);
        var value2 = this.objectUtils.resolveFieldData(data2, multiSortMeta[index].field);
        var result = null;
        if (value1 == null && value2 != null)
            result = -1;
        else if (value1 != null && value2 == null)
            result = 1;
        else if (value1 == null && value2 == null)
            result = 0;
        if (typeof value1 == 'string' || value1 instanceof String) {
            if (value1.localeCompare && (value1 != value2)) {
                return (multiSortMeta[index].order * value1.localeCompare(value2));
            }
        }
        else {
            result = (value1 < value2) ? -1 : 1;
        }
        if (value1 == value2) {
            return (multiSortMeta.length - 1) > (index) ? (this.multisortField(data1, data2, multiSortMeta, index + 1)) : 0;
        }
        return (multiSortMeta[index].order * result);
    };
    Table.prototype.getSortMeta = function (field) {
        if (this.multiSortMeta && this.multiSortMeta.length) {
            for (var i = 0; i < this.multiSortMeta.length; i++) {
                if (this.multiSortMeta[i].field === field) {
                    return this.multiSortMeta[i];
                }
            }
        }
        return null;
    };
    Table.prototype.isSorted = function (field) {
        if (this.sortMode === 'single') {
            return (this.sortField && this.sortField === field);
        }
        else if (this.sortMode === 'multiple') {
            var sorted = false;
            if (this.multiSortMeta) {
                for (var i = 0; i < this.multiSortMeta.length; i++) {
                    if (this.multiSortMeta[i].field == field) {
                        sorted = true;
                        break;
                    }
                }
            }
            return sorted;
        }
    };
    Table.prototype.handleRowClick = function (event) {
        var targetNode = event.originalEvent.target.nodeName;
        if (targetNode == 'INPUT' || targetNode == 'BUTTON' || targetNode == 'A' || (this.domHandler.hasClass(event.originalEvent.target, 'ui-clickable'))) {
            return;
        }
        if (this.selectionMode) {
            this.preventSelectionSetterPropagation = true;
            if (this.isMultipleSelectionMode() && event.originalEvent.shiftKey && this.anchorRowIndex != null) {
                this.domHandler.clearSelection();
                if (this.rangeRowIndex != null) {
                    this.clearSelectionRange(event.originalEvent);
                }
                this.rangeRowIndex = event.rowIndex;
                this.selectRange(event.originalEvent, event.rowIndex);
            }
            else {
                var rowData = event.rowData;
                var selected = this.isSelected(rowData);
                var metaSelection = this.rowTouched ? false : this.metaKeySelection;
                var dataKeyValue = this.dataKey ? String(this.objectUtils.resolveFieldData(rowData, this.dataKey)) : null;
                this.anchorRowIndex = event.rowIndex;
                this.rangeRowIndex = event.rowIndex;
                if (metaSelection) {
                    var metaKey = event.originalEvent.metaKey || event.originalEvent.ctrlKey;
                    if (selected && metaKey) {
                        if (this.isSingleSelectionMode()) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(null);
                        }
                        else {
                            var selectionIndex_1 = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_1; });
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                    }
                    else {
                        if (this.isSingleSelectionMode()) {
                            this._selection = rowData;
                            this.selectionChange.emit(rowData);
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        else if (this.isMultipleSelectionMode()) {
                            if (metaKey) {
                                this._selection = this.selection || [];
                            }
                            else {
                                this._selection = [];
                                this.selectionKeys = {};
                            }
                            this._selection = this.selection.concat([rowData]);
                            this.selectionChange.emit(this.selection);
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                        this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                    }
                }
                else {
                    if (this.selectionMode === 'single') {
                        if (selected) {
                            this._selection = null;
                            this.selectionKeys = {};
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                        }
                        else {
                            this._selection = rowData;
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys = {};
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                    else if (this.selectionMode === 'multiple') {
                        if (selected) {
                            var selectionIndex_2 = this.findIndexInSelection(rowData);
                            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_2; });
                            this.selectionChange.emit(this.selection);
                            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row' });
                            if (dataKeyValue) {
                                delete this.selectionKeys[dataKeyValue];
                            }
                        }
                        else {
                            this._selection = this.selection ? this.selection.concat([rowData]) : [rowData];
                            this.selectionChange.emit(this.selection);
                            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'row', index: event.rowIndex });
                            if (dataKeyValue) {
                                this.selectionKeys[dataKeyValue] = 1;
                            }
                        }
                    }
                }
            }
            this.tableService.onSelectionChange();
        }
        this.rowTouched = false;
    };
    Table.prototype.handleRowTouchEnd = function (event) {
        this.rowTouched = true;
    };
    Table.prototype.handleRowRightClick = function (event) {
        if (this.contextMenu) {
            this.contextMenuSelection = event.rowData;
            this.contextMenuSelectionChange.emit(event.rowData);
            this.onContextMenuSelect.emit({ originalEvent: event.originalEvent, data: event.rowData });
            this.contextMenu.show(event.originalEvent);
            this.tableService.onContextMenu(event.rowData);
        }
    };
    Table.prototype.selectRange = function (event, rowIndex) {
        var rangeStart, rangeEnd;
        if (this.anchorRowIndex > rowIndex) {
            rangeStart = rowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else if (this.anchorRowIndex < rowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = rowIndex;
        }
        else {
            rangeStart = rowIndex;
            rangeEnd = rowIndex;
        }
        for (var i = rangeStart; i <= rangeEnd; i++) {
            var rangeRowData = this.value[i];
            if (!this.isSelected(rangeRowData)) {
                this._selection = this.selection.concat([rangeRowData]);
                var dataKeyValue = this.dataKey ? String(this.objectUtils.resolveFieldData(rangeRowData, this.dataKey)) : null;
                if (dataKeyValue) {
                    this.selectionKeys[dataKeyValue] = 1;
                }
                this.onRowSelect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
            }
        }
        this.selectionChange.emit(this.selection);
    };
    Table.prototype.clearSelectionRange = function (event) {
        var rangeStart, rangeEnd;
        if (this.rangeRowIndex > this.anchorRowIndex) {
            rangeStart = this.anchorRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        else if (this.rangeRowIndex < this.anchorRowIndex) {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.anchorRowIndex;
        }
        else {
            rangeStart = this.rangeRowIndex;
            rangeEnd = this.rangeRowIndex;
        }
        var _loop_1 = function (i) {
            var rangeRowData = this_1.value[i];
            var selectionIndex = this_1.findIndexInSelection(rangeRowData);
            this_1._selection = this_1.selection.filter(function (val, i) { return i != selectionIndex; });
            var dataKeyValue = this_1.dataKey ? String(this_1.objectUtils.resolveFieldData(rangeRowData, this_1.dataKey)) : null;
            if (dataKeyValue) {
                delete this_1.selectionKeys[dataKeyValue];
            }
            this_1.onRowUnselect.emit({ originalEvent: event, data: rangeRowData, type: 'row' });
        };
        var this_1 = this;
        for (var i = rangeStart; i <= rangeEnd; i++) {
            _loop_1(i);
        }
    };
    Table.prototype.isSelected = function (rowData) {
        if (rowData && this.selection) {
            if (this.dataKey) {
                return this.selectionKeys[this.objectUtils.resolveFieldData(rowData, this.dataKey)] !== undefined;
            }
            else {
                if (this.selection instanceof Array)
                    return this.findIndexInSelection(rowData) > -1;
                else
                    return this.equals(rowData, this.selection);
            }
        }
        return false;
    };
    Table.prototype.findIndexInSelection = function (rowData) {
        var index = -1;
        if (this.selection && this.selection.length) {
            for (var i = 0; i < this.selection.length; i++) {
                if (this.equals(rowData, this.selection[i])) {
                    index = i;
                    break;
                }
            }
        }
        return index;
    };
    Table.prototype.toggleRowWithRadio = function (event, rowData) {
        this.preventSelectionSetterPropagation = true;
        if (this.selection != rowData) {
            this._selection = rowData;
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
            if (this.dataKey) {
                this.selectionKeys = {};
                this.selectionKeys[String(this.objectUtils.resolveFieldData(rowData, this.dataKey))] = 1;
            }
        }
        else {
            this._selection = null;
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event, data: rowData, type: 'radiobutton' });
        }
        this.tableService.onSelectionChange();
    };
    Table.prototype.toggleRowWithCheckbox = function (event, rowData) {
        this.selection = this.selection || [];
        var selected = this.isSelected(rowData);
        var dataKeyValue = this.dataKey ? String(this.objectUtils.resolveFieldData(rowData, this.dataKey)) : null;
        this.preventSelectionSetterPropagation = true;
        if (selected) {
            var selectionIndex_3 = this.findIndexInSelection(rowData);
            this._selection = this.selection.filter(function (val, i) { return i != selectionIndex_3; });
            this.selectionChange.emit(this.selection);
            this.onRowUnselect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                delete this.selectionKeys[dataKeyValue];
            }
        }
        else {
            this._selection = this.selection ? this.selection.concat([rowData]) : [rowData];
            this.selectionChange.emit(this.selection);
            this.onRowSelect.emit({ originalEvent: event.originalEvent, data: rowData, type: 'checkbox' });
            if (dataKeyValue) {
                this.selectionKeys[dataKeyValue] = 1;
            }
        }
        this.tableService.onSelectionChange();
    };
    Table.prototype.toggleRowsWithCheckbox = function (event, check) {
        this._selection = check ? this.filteredValue ? this.filteredValue.slice() : this.value.slice() : [];
        this.preventSelectionSetterPropagation = true;
        this.updateSelectionKeys();
        this.selectionChange.emit(this._selection);
        this.tableService.onSelectionChange();
        this.onHeaderCheckboxToggle.emit({ originalEvent: event, checked: check });
    };
    Table.prototype.equals = function (data1, data2) {
        return this.compareSelectionBy === 'equals' ? (data1 === data2) : this.objectUtils.equals(data1, data2, this.dataKey);
    };
    Table.prototype.filter = function (value, field, matchMode) {
        var _this = this;
        if (this.filterTimeout) {
            clearTimeout(this.filterTimeout);
        }
        this.filterTimeout = setTimeout(function () {
            if (!_this.isFilterBlank(value))
                _this.filters[field] = { value: value, matchMode: matchMode };
            else if (_this.filters[field])
                delete _this.filters[field];
            _this._filter();
            _this.filterTimeout = null;
        }, this.filterDelay);
    };
    Table.prototype.filterGlobal = function (value, matchMode) {
        this.filter(value, 'global', matchMode);
    };
    Table.prototype.isFilterBlank = function (filter) {
        if (filter !== null && filter !== undefined) {
            if ((typeof filter === 'string' && filter.trim().length == 0) || (filter instanceof Array && filter.length == 0))
                return true;
            else
                return false;
        }
        return true;
    };
    Table.prototype._filter = function () {
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            if (!this.value) {
                return;
            }
            if (!this.hasFilter()) {
                this.filteredValue = null;
                if (this.paginator) {
                    this.totalRecords = this.value ? this.value.length : 0;
                }
            }
            else {
                var globalFilterFieldsArray = void 0;
                if (this.filters['global']) {
                    if (!this.columns && !this.globalFilterFields)
                        throw new Error('Global filtering requires dynamic columns or globalFilterFields to be defined.');
                    else
                        globalFilterFieldsArray = this.globalFilterFields || this.columns;
                }
                this.filteredValue = [];
                for (var i = 0; i < this.value.length; i++) {
                    var localMatch = true;
                    var globalMatch = false;
                    var localFiltered = false;
                    for (var prop in this.filters) {
                        if (this.filters.hasOwnProperty(prop) && prop !== 'global') {
                            localFiltered = true;
                            var filterMeta = this.filters[prop];
                            var filterField = prop;
                            var filterValue = filterMeta.value;
                            var filterMatchMode = filterMeta.matchMode || 'startsWith';
                            var dataFieldValue = this.objectUtils.resolveFieldData(this.value[i], filterField);
                            var filterConstraint = this.filterConstraints[filterMatchMode];
                            if (!filterConstraint(dataFieldValue, filterValue)) {
                                localMatch = false;
                            }
                            if (!localMatch) {
                                break;
                            }
                        }
                    }
                    if (this.filters['global'] && !globalMatch && globalFilterFieldsArray) {
                        for (var j = 0; j < globalFilterFieldsArray.length; j++) {
                            var globalFilterField = globalFilterFieldsArray[j].field || globalFilterFieldsArray[j];
                            globalMatch = this.filterConstraints[this.filters['global'].matchMode](this.objectUtils.resolveFieldData(this.value[i], globalFilterField), this.filters['global'].value);
                            if (globalMatch) {
                                break;
                            }
                        }
                    }
                    var matches = void 0;
                    if (this.filters['global']) {
                        matches = localFiltered ? (localFiltered && localMatch && globalMatch) : globalMatch;
                    }
                    else {
                        matches = localFiltered && localMatch;
                    }
                    if (matches) {
                        this.filteredValue.push(this.value[i]);
                    }
                }
                if (this.filteredValue.length === this.value.length) {
                    this.filteredValue = null;
                }
                if (this.paginator) {
                    this.totalRecords = this.filteredValue ? this.filteredValue.length : this.value ? this.value.length : 0;
                }
            }
        }
        this.onFilter.emit({
            filters: this.filters,
            filteredValue: this.filteredValue || this.value
        });
        this.tableService.onValueChange(this.value);
    };
    Table.prototype.hasFilter = function () {
        var empty = true;
        for (var prop in this.filters) {
            if (this.filters.hasOwnProperty(prop)) {
                empty = false;
                break;
            }
        }
        return !empty;
    };
    Table.prototype.createLazyLoadMetadata = function () {
        return {
            first: this.first,
            rows: this.virtualScroll ? this.rows * 2 : this.rows,
            sortField: this.sortField,
            sortOrder: this.sortOrder,
            filters: this.filters,
            globalFilter: this.filters && this.filters['global'] ? this.filters['global'].value : null,
            multiSortMeta: this.multiSortMeta
        };
    };
    Table.prototype.reset = function () {
        this._sortField = null;
        this._sortOrder = 1;
        this._multiSortMeta = null;
        this.tableService.onSort(null);
        this.filteredValue = null;
        this.filters = {};
        this.first = 0;
        if (this.lazy) {
            this.onLazyLoad.emit(this.createLazyLoadMetadata());
        }
        else {
            this.totalRecords = (this._value ? this._value.length : 0);
        }
    };
    Table.prototype.exportCSV = function (options) {
        var _this = this;
        var data = this.filteredValue || this.value;
        var csv = '\ufeff';
        if (options && options.selectionOnly) {
            data = this.selection || [];
        }
        //headers
        for (var i = 0; i < this.columns.length; i++) {
            var column = this.columns[i];
            if (column.exportable !== false && column.field) {
                csv += '"' + (column.header || column.field) + '"';
                if (i < (this.columns.length - 1)) {
                    csv += this.csvSeparator;
                }
            }
        }
        //body
        data.forEach(function (record, i) {
            csv += '\n';
            for (var i_1 = 0; i_1 < _this.columns.length; i_1++) {
                var column = _this.columns[i_1];
                if (column.exportable !== false && column.field) {
                    var cellData = _this.objectUtils.resolveFieldData(record, column.field);
                    if (cellData != null) {
                        if (_this.exportFunction) {
                            cellData = _this.exportFunction({
                                data: cellData,
                                field: column.field
                            });
                        }
                        else
                            cellData = String(cellData).replace(/"/g, '""');
                    }
                    else
                        cellData = '';
                    csv += '"' + cellData + '"';
                    if (i_1 < (_this.columns.length - 1)) {
                        csv += _this.csvSeparator;
                    }
                }
            }
        });
        var blob = new Blob([csv], {
            type: 'text/csv;charset=utf-8;'
        });
        if (window.navigator.msSaveOrOpenBlob) {
            navigator.msSaveOrOpenBlob(blob, this.exportFilename + '.csv');
        }
        else {
            var link = document.createElement("a");
            link.style.display = 'none';
            document.body.appendChild(link);
            if (link.download !== undefined) {
                link.setAttribute('href', URL.createObjectURL(blob));
                link.setAttribute('download', this.exportFilename + '.csv');
                link.click();
            }
            else {
                csv = 'data:text/csv;charset=utf-8,' + csv;
                window.open(encodeURI(csv));
            }
            document.body.removeChild(link);
        }
    };
    Table.prototype.toggleRow = function (rowData, event) {
        if (!this.dataKey) {
            throw new Error('dataKey must be defined to use row expansion');
        }
        var dataKeyValue = String(this.objectUtils.resolveFieldData(rowData, this.dataKey));
        if (this.expandedRowKeys[dataKeyValue] != null) {
            delete this.expandedRowKeys[dataKeyValue];
            this.onRowCollapse.emit({
                originalEvent: event,
                data: rowData
            });
        }
        else {
            if (this.rowExpandMode === 'single') {
                this.expandedRowKeys = {};
            }
            this.expandedRowKeys[dataKeyValue] = 1;
            this.onRowExpand.emit({
                originalEvent: event,
                data: rowData
            });
        }
        if (event) {
            event.preventDefault();
        }
    };
    Table.prototype.isRowExpanded = function (rowData) {
        return this.expandedRowKeys[String(this.objectUtils.resolveFieldData(rowData, this.dataKey))] === 1;
    };
    Table.prototype.isSingleSelectionMode = function () {
        return this.selectionMode === 'single';
    };
    Table.prototype.isMultipleSelectionMode = function () {
        return this.selectionMode === 'multiple';
    };
    Table.prototype.onColumnResizeBegin = function (event) {
        var containerLeft = this.domHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.lastResizerHelperX = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft);
    };
    Table.prototype.onColumnResize = function (event) {
        var containerLeft = this.domHandler.getOffset(this.containerViewChild.nativeElement).left;
        this.domHandler.addClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
        this.resizeHelperViewChild.nativeElement.style.height = this.containerViewChild.nativeElement.offsetHeight + 'px';
        this.resizeHelperViewChild.nativeElement.style.top = 0 + 'px';
        this.resizeHelperViewChild.nativeElement.style.left = (event.pageX - containerLeft + this.containerViewChild.nativeElement.scrollLeft) + 'px';
        this.resizeHelperViewChild.nativeElement.style.display = 'block';
    };
    Table.prototype.onColumnResizeEnd = function (event, column) {
        var delta = this.resizeHelperViewChild.nativeElement.offsetLeft - this.lastResizerHelperX;
        var columnWidth = column.offsetWidth;
        var newColumnWidth = columnWidth + delta;
        var minWidth = column.style.minWidth || 15;
        if (columnWidth + delta > parseInt(minWidth)) {
            if (this.columnResizeMode === 'fit') {
                var nextColumn = column.nextElementSibling;
                while (!nextColumn.offsetParent) {
                    nextColumn = nextColumn.nextElementSibling;
                }
                if (nextColumn) {
                    var nextColumnWidth = nextColumn.offsetWidth - delta;
                    var nextColumnMinWidth = nextColumn.style.minWidth || 15;
                    if (newColumnWidth > 15 && nextColumnWidth > parseInt(nextColumnMinWidth)) {
                        if (this.scrollable) {
                            var scrollableBodyTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-body-table');
                            var scrollableHeaderTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-header-table');
                            var scrollableFooterTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-footer-table');
                            var resizeColumnIndex = this.domHandler.index(column);
                            this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                            this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, nextColumnWidth);
                        }
                        else {
                            column.style.width = newColumnWidth + 'px';
                            if (nextColumn) {
                                nextColumn.style.width = nextColumnWidth + 'px';
                            }
                        }
                    }
                }
            }
            else if (this.columnResizeMode === 'expand') {
                if (this.scrollable) {
                    var scrollableBodyTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-body-table');
                    var scrollableHeaderTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-header-table');
                    var scrollableFooterTable = this.domHandler.findSingle(this.el.nativeElement, 'table.ui-table-scrollable-footer-table');
                    scrollableBodyTable.style.width = scrollableBodyTable.offsetWidth + delta + 'px';
                    scrollableHeaderTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    if (scrollableFooterTable) {
                        scrollableFooterTable.style.width = scrollableHeaderTable.offsetWidth + delta + 'px';
                    }
                    var resizeColumnIndex = this.domHandler.index(column);
                    this.resizeColGroup(scrollableHeaderTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableBodyTable, resizeColumnIndex, newColumnWidth, null);
                    this.resizeColGroup(scrollableFooterTable, resizeColumnIndex, newColumnWidth, null);
                }
                else {
                    this.tableViewChild.nativeElement.style.width = this.tableViewChild.nativeElement.offsetWidth + delta + 'px';
                    column.style.width = newColumnWidth + 'px';
                    var containerWidth = this.tableViewChild.nativeElement.style.width;
                    this.containerViewChild.nativeElement.style.width = containerWidth + 'px';
                }
            }
            this.onColResize.emit({
                element: column,
                delta: delta
            });
        }
        this.resizeHelperViewChild.nativeElement.style.display = 'none';
        this.domHandler.removeClass(this.containerViewChild.nativeElement, 'ui-unselectable-text');
    };
    Table.prototype.resizeColGroup = function (table, resizeColumnIndex, newColumnWidth, nextColumnWidth) {
        if (table) {
            var colGroup = table.children[0].nodeName === 'COLGROUP' ? table.children[0] : null;
            if (colGroup) {
                var col = colGroup.children[resizeColumnIndex];
                var nextCol = col.nextElementSibling;
                col.style.width = newColumnWidth + 'px';
                if (nextCol && nextColumnWidth) {
                    nextCol.style.width = nextColumnWidth + 'px';
                }
            }
            else {
                throw "Scrollable tables require a colgroup to support resizable columns";
            }
        }
    };
    Table.prototype.onColumnDragStart = function (event, columnElement) {
        this.reorderIconWidth = this.domHandler.getHiddenElementOuterWidth(this.reorderIndicatorUpViewChild.nativeElement);
        this.reorderIconHeight = this.domHandler.getHiddenElementOuterHeight(this.reorderIndicatorDownViewChild.nativeElement);
        this.draggedColumn = columnElement;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onColumnDragEnter = function (event, dropHeader) {
        if (this.reorderableColumns && this.draggedColumn && dropHeader) {
            event.preventDefault();
            var containerOffset = this.domHandler.getOffset(this.containerViewChild.nativeElement);
            var dropHeaderOffset = this.domHandler.getOffset(dropHeader);
            if (this.draggedColumn != dropHeader) {
                var targetLeft = dropHeaderOffset.left - containerOffset.left;
                var targetTop = containerOffset.top - dropHeaderOffset.top;
                var columnCenter = dropHeaderOffset.left + dropHeader.offsetWidth / 2;
                this.reorderIndicatorUpViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top - (this.reorderIconHeight - 1) + 'px';
                this.reorderIndicatorDownViewChild.nativeElement.style.top = dropHeaderOffset.top - containerOffset.top + dropHeader.offsetHeight + 'px';
                if (event.pageX > columnCenter) {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft + dropHeader.offsetWidth - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = 1;
                }
                else {
                    this.reorderIndicatorUpViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.reorderIndicatorDownViewChild.nativeElement.style.left = (targetLeft - Math.ceil(this.reorderIconWidth / 2)) + 'px';
                    this.dropPosition = -1;
                }
                this.reorderIndicatorUpViewChild.nativeElement.style.display = 'block';
                this.reorderIndicatorDownViewChild.nativeElement.style.display = 'block';
            }
            else {
                event.dataTransfer.dropEffect = 'none';
            }
        }
    };
    Table.prototype.onColumnDragLeave = function (event) {
        if (this.reorderableColumns && this.draggedColumn) {
            event.preventDefault();
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
        }
    };
    Table.prototype.onColumnDrop = function (event, dropColumn) {
        event.preventDefault();
        if (this.draggedColumn) {
            var dragIndex = this.domHandler.indexWithinGroup(this.draggedColumn, 'preorderablecolumn');
            var dropIndex = this.domHandler.indexWithinGroup(dropColumn, 'preorderablecolumn');
            var allowDrop = (dragIndex != dropIndex);
            if (allowDrop && ((dropIndex - dragIndex == 1 && this.dropPosition === -1) || (dragIndex - dropIndex == 1 && this.dropPosition === 1))) {
                allowDrop = false;
            }
            if (allowDrop) {
                this.objectUtils.reorderArray(this.columns, dragIndex, dropIndex);
                this.onColReorder.emit({
                    dragIndex: dragIndex,
                    dropIndex: dropIndex,
                    columns: this.columns
                });
            }
            this.reorderIndicatorUpViewChild.nativeElement.style.display = 'none';
            this.reorderIndicatorDownViewChild.nativeElement.style.display = 'none';
            this.draggedColumn.draggable = false;
            this.draggedColumn = null;
            this.dropPosition = null;
        }
    };
    Table.prototype.onRowDragStart = function (event, index) {
        this.rowDragging = true;
        this.draggedRowIndex = index;
        event.dataTransfer.setData('text', 'b'); // For firefox
    };
    Table.prototype.onRowDragOver = function (event, index, rowElement) {
        if (this.rowDragging && this.draggedRowIndex !== index) {
            var rowY = this.domHandler.getOffset(rowElement).top + this.domHandler.getWindowScrollTop();
            var pageY = event.pageY;
            var rowMidY = rowY + this.domHandler.getOuterHeight(rowElement) / 2;
            var prevRowElement = rowElement.previousElementSibling;
            if (pageY < rowMidY) {
                this.domHandler.removeClass(rowElement, 'ui-table-dragpoint-bottom');
                this.droppedRowIndex = index;
                if (prevRowElement)
                    this.domHandler.addClass(prevRowElement, 'ui-table-dragpoint-bottom');
                else
                    this.domHandler.addClass(rowElement, 'ui-table-dragpoint-top');
            }
            else {
                if (prevRowElement)
                    this.domHandler.removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
                else
                    this.domHandler.addClass(rowElement, 'ui-table-dragpoint-top');
                this.droppedRowIndex = index + 1;
                this.domHandler.addClass(rowElement, 'ui-table-dragpoint-bottom');
            }
        }
    };
    Table.prototype.onRowDragLeave = function (event, rowElement) {
        var prevRowElement = rowElement.previousElementSibling;
        if (prevRowElement) {
            this.domHandler.removeClass(prevRowElement, 'ui-table-dragpoint-bottom');
        }
        this.domHandler.removeClass(rowElement, 'ui-table-dragpoint-bottom');
        this.domHandler.removeClass(rowElement, 'ui-table-dragpoint-top');
    };
    Table.prototype.onRowDragEnd = function (event) {
        this.rowDragging = false;
        this.draggedRowIndex = null;
        this.droppedRowIndex = null;
    };
    Table.prototype.onRowDrop = function (event, rowElement) {
        if (this.droppedRowIndex != null) {
            var dropIndex = (this.draggedRowIndex > this.droppedRowIndex) ? this.droppedRowIndex : (this.droppedRowIndex === 0) ? 0 : this.droppedRowIndex - 1;
            this.objectUtils.reorderArray(this.value, this.draggedRowIndex, dropIndex);
            this.onRowReorder.emit({
                dragIndex: this.draggedRowIndex,
                dropIndex: this.droppedRowIndex
            });
        }
        //cleanup
        this.onRowDragLeave(event, rowElement);
        this.onRowDragEnd(event);
    };
    Table.prototype.handleVirtualScroll = function (event) {
        var _this = this;
        this.first = (event.page - 1) * this.rows;
        this.virtualScrollCallback = event.callback;
        this.zone.run(function () {
            if (_this.virtualScrollTimer) {
                clearTimeout(_this.virtualScrollTimer);
            }
            _this.virtualScrollTimer = setTimeout(function () {
                _this.onLazyLoad.emit(_this.createLazyLoadMetadata());
            }, _this.virtualScrollDelay);
        });
    };
    Table.prototype.isEmpty = function () {
        var data = this.filteredValue || this.value;
        return data == null || data.length == 0;
    };
    Table.prototype.ngOnDestroy = function () {
        this.editingCell = null;
        this.initialized = null;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "frozenColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "frozenValue", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "style", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "styleClass", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "paginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "rows", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "first", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "pageLinks", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "rowsPerPageOptions", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "alwaysShowPaginator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "paginatorPosition", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "paginatorDropdownAppendTo", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "defaultSortOrder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "sortMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "resetPageOnSort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "selectionMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "selectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "contextMenuSelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "contextMenuSelectionChange", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "dataKey", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "metaKeySelection", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Function)
    ], Table.prototype, "rowTrackBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "lazy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "compareSelectionBy", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "csvSeparator", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "exportFilename", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "filters", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array)
    ], Table.prototype, "globalFilterFields", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "filterDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "expandedRowKeys", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "rowExpandMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "scrollable", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "scrollHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "virtualScroll", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "virtualScrollDelay", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number)
    ], Table.prototype, "virtualRowHeight", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "frozenWidth", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "responsive", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "contextMenu", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "resizableColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "columnResizeMode", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "reorderableColumns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "loading", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], Table.prototype, "loadingIcon", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "rowHover", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "customSort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], Table.prototype, "autoLayout", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], Table.prototype, "exportFunction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowUnselect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onSort", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onFilter", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onLazyLoad", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowExpand", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowCollapse", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onContextMenuSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onColResize", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onColReorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onRowReorder", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onEditInit", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onEditComplete", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onEditCancel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "onHeaderCheckboxToggle", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Q" /* Output */])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* EventEmitter */])
    ], Table.prototype, "sortFunction", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('container'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "containerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('resizeHelper'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "resizeHelperViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('reorderIndicatorUp'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "reorderIndicatorUpViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('reorderIndicatorDown'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "reorderIndicatorDownViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('table'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], Table.prototype, "tableViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], Table.prototype, "templates", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "value", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "totalRecords", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], Table.prototype, "sortField", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], Table.prototype, "sortOrder", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Array),
        __metadata("design:paramtypes", [Array])
    ], Table.prototype, "multiSortMeta", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], Table.prototype, "selection", null);
    Table = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-table',
            template: "\n        <div #container [ngStyle]=\"style\" [class]=\"styleClass\"\n            [ngClass]=\"{'ui-table ui-widget': true, 'ui-table-responsive': responsive, 'ui-table-resizable': resizableColumns,\n                'ui-table-resizable-fit': (resizableColumns && columnResizeMode === 'fit'),\n                'ui-table-hoverable-rows': (rowHover||selectionMode), 'ui-table-auto-layout': autoLayout}\">\n            <div class=\"ui-table-loading ui-widget-overlay\" *ngIf=\"loading\"></div>\n            <div class=\"ui-table-loading-content\" *ngIf=\"loading\">\n                <i [class]=\"'fa fa-spin fa-2x ' + loadingIcon\"></i>\n            </div>\n            <div *ngIf=\"captionTemplate\" class=\"ui-table-caption ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"captionTemplate\"></ng-container>\n            </div>\n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-top\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'top' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            \n            <div class=\"ui-table-wrapper\" *ngIf=\"!scrollable\">\n                <table #table>\n                    <ng-container *ngTemplateOutlet=\"colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"headerTemplate; context: {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                    <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"bodyTemplate\"></tbody>\n                </table>\n            </div>\n\n            <div class=\"ui-table-scrollable-wrapper\" *ngIf=\"scrollable\">\n               <div class=\"ui-table-frozen-view\" *ngIf=\"frozenColumns||frozenBodyTemplate\" [pScrollableView]=\"frozenColumns\" [frozen]=\"true\" [ngStyle]=\"{width: frozenWidth}\" [scrollHeight]=\"scrollHeight\"></div>\n               <div [pScrollableView]=\"columns\" [frozen]=\"false\" [scrollHeight]=\"scrollHeight\"></div>\n            </div>\n            \n            <p-paginator [rows]=\"rows\" [first]=\"first\" [totalRecords]=\"totalRecords\" [pageLinkSize]=\"pageLinks\" styleClass=\"ui-paginator-bottom\" [alwaysShow]=\"alwaysShowPaginator\"\n                (onPageChange)=\"onPageChange($event)\" [rowsPerPageOptions]=\"rowsPerPageOptions\" *ngIf=\"paginator && (paginatorPosition === 'bottom' || paginatorPosition =='both')\"\n                [templateLeft]=\"paginatorLeftTemplate\" [templateRight]=\"paginatorRightTemplate\" [dropdownAppendTo]=\"paginatorDropdownAppendTo\"></p-paginator>\n            <div *ngIf=\"summaryTemplate\" class=\"ui-table-summary ui-widget-header\">\n                <ng-container *ngTemplateOutlet=\"summaryTemplate\"></ng-container>\n            </div>\n\n            <div #resizeHelper class=\"ui-column-resizer-helper ui-state-highlight\" style=\"display:none\" *ngIf=\"resizableColumns\"></div>\n\n            <span #reorderIndicatorUp class=\"fa fa-arrow-down ui-table-reorder-indicator-up\" *ngIf=\"reorderableColumns\"></span>\n            <span #reorderIndicatorDown class=\"fa fa-arrow-up ui-table-reorder-indicator-down\" *ngIf=\"reorderableColumns\"></span>\n        </div>\n    ",
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__["a" /* ObjectUtils */], TableService]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_5__utils_objectutils__["a" /* ObjectUtils */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */], TableService])
    ], Table);
    return Table;
}());

var TableBody = (function () {
    function TableBody(dt) {
        this.dt = dt;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pTableBody"),
        __metadata("design:type", Array)
    ], TableBody.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pTableBodyTemplate"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* TemplateRef */])
    ], TableBody.prototype, "template", void 0);
    TableBody = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[pTableBody]',
            template: "\n        <ng-container *ngIf=\"!dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.paginator ? ((dt.filteredValue||dt.value) | slice:(dt.lazy ? 0 : dt.first):((dt.lazy ? 0 : dt.first) + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.expandedRowTemplate\">\n            <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.paginator ? ((dt.filteredValue||dt.value) | slice:(dt.lazy ? 0 : dt.first):((dt.lazy ? 0 : dt.first) + dt.rows)) : (dt.filteredValue||dt.value)\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                <ng-container *ngIf=\"dt.isRowExpanded(rowData); else collapsedrow\">\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns, expanded: true}\"></ng-container>\n                    <ng-container *ngTemplateOutlet=\"dt.expandedRowTemplate; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, columns: columns}\"></ng-container>\n                </ng-container>\n                <ng-template #collapsedrow>\n                    <ng-container *ngTemplateOutlet=\"template; context: {$implicit: rowData, rowIndex: dt.paginator ? (dt.first + rowIndex) : rowIndex, expanded: false, columns: columns}\"></ng-container>\n                </ng-template>\n            </ng-template>\n        </ng-container>\n        <ng-container *ngIf=\"dt.isEmpty()\">\n            <ng-container *ngTemplateOutlet=\"dt.emptyMessageTemplate; context: {$implicit: columns}\"></ng-container>\n        </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [Table])
    ], TableBody);
    return TableBody;
}());

var ScrollableView = (function () {
    function ScrollableView(dt, el, domHandler, zone) {
        var _this = this;
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
        this.subscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.zone.runOutsideAngular(function () {
                setTimeout(function () {
                    _this.alignScrollBar();
                }, 50);
            });
        });
        if (this.dt.virtualScroll) {
            this.totalRecordsSubscription = this.dt.tableService.totalRecordsSource$.subscribe(function () {
                _this.zone.runOutsideAngular(function () {
                    setTimeout(function () {
                        _this.setVirtualScrollerHeight();
                    }, 50);
                });
            });
        }
        this.initialized = false;
    }
    Object.defineProperty(ScrollableView.prototype, "scrollHeight", {
        get: function () {
            return this._scrollHeight;
        },
        set: function (val) {
            this._scrollHeight = val;
            this.setScrollHeight();
        },
        enumerable: true,
        configurable: true
    });
    ScrollableView.prototype.ngAfterViewChecked = function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.alignScrollBar();
            this.initialized = true;
        }
    };
    ScrollableView.prototype.ngAfterViewInit = function () {
        this.bindEvents();
        this.setScrollHeight();
        this.alignScrollBar();
        if (!this.frozen) {
            if (this.dt.frozenColumns || this.dt.frozenBodyTemplate) {
                this.domHandler.addClass(this.el.nativeElement, 'ui-table-unfrozen-view');
            }
            if (this.dt.frozenWidth) {
                this.el.nativeElement.style.left = this.dt.frozenWidth;
                this.el.nativeElement.style.width = 'calc(100% - ' + this.dt.frozenWidth + ')';
            }
            var frozenView = this.el.nativeElement.previousElementSibling;
            if (frozenView) {
                this.frozenSiblingBody = this.domHandler.findSingle(frozenView, '.ui-table-scrollable-body');
            }
        }
        else {
            this.scrollBodyViewChild.nativeElement.style.paddingBottom = this.domHandler.calculateScrollbarWidth() + 'px';
        }
        if (this.dt.virtualScroll) {
            this.setVirtualScrollerHeight();
        }
    };
    ScrollableView.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            var scrollBarWidth = _this.domHandler.calculateScrollbarWidth();
            if (_this.scrollHeaderViewChild && _this.scrollHeaderViewChild.nativeElement) {
                _this.headerScrollListener = _this.onHeaderScroll.bind(_this);
                _this.scrollHeaderBoxViewChild.nativeElement.addEventListener('scroll', _this.headerScrollListener);
            }
            if (_this.scrollFooterViewChild && _this.scrollFooterViewChild.nativeElement) {
                _this.footerScrollListener = _this.onFooterScroll.bind(_this);
                _this.scrollFooterViewChild.nativeElement.addEventListener('scroll', _this.footerScrollListener);
            }
            if (!_this.frozen) {
                _this.bodyScrollListener = _this.onBodyScroll.bind(_this);
                _this.scrollBodyViewChild.nativeElement.addEventListener('scroll', _this.bodyScrollListener);
            }
        });
    };
    ScrollableView.prototype.unbindEvents = function () {
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.removeEventListener('scroll', this.headerScrollListener);
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterViewChild.nativeElement.removeEventListener('scroll', this.footerScrollListener);
        }
        this.scrollBodyViewChild.nativeElement.addEventListener('scroll', this.bodyScrollListener);
    };
    ScrollableView.prototype.onHeaderScroll = function (event) {
        this.scrollHeaderViewChild.nativeElement.scrollLeft = 0;
    };
    ScrollableView.prototype.onFooterScroll = function (event) {
        this.scrollFooterViewChild.nativeElement.scrollLeft = 0;
    };
    ScrollableView.prototype.onBodyScroll = function (event) {
        var _this = this;
        if (this.scrollHeaderViewChild && this.scrollHeaderViewChild.nativeElement) {
            this.scrollHeaderBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.scrollFooterViewChild && this.scrollFooterViewChild.nativeElement) {
            this.scrollFooterBoxViewChild.nativeElement.style.marginLeft = -1 * this.scrollBodyViewChild.nativeElement.scrollLeft + 'px';
        }
        if (this.frozenSiblingBody) {
            this.frozenSiblingBody.scrollTop = this.scrollBodyViewChild.nativeElement.scrollTop;
        }
        if (this.dt.virtualScroll) {
            var viewport = this.domHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
            var tableHeight = this.domHandler.getOuterHeight(this.scrollTableViewChild.nativeElement);
            var pageHeight_1 = this.dt.virtualRowHeight * this.dt.rows;
            var virtualTableHeight = this.domHandler.getOuterHeight(this.virtualScrollerViewChild.nativeElement);
            var pageCount = (virtualTableHeight / pageHeight_1) || 1;
            var scrollBodyTop = this.scrollTableViewChild.nativeElement.style.top || '0';
            if ((this.scrollBodyViewChild.nativeElement.scrollTop + viewport > parseFloat(scrollBodyTop) + tableHeight) || (this.scrollBodyViewChild.nativeElement.scrollTop < parseFloat(scrollBodyTop))) {
                var page_1 = Math.floor((this.scrollBodyViewChild.nativeElement.scrollTop * pageCount) / (this.scrollBodyViewChild.nativeElement.scrollHeight)) + 1;
                this.dt.handleVirtualScroll({
                    page: page_1,
                    callback: function () {
                        _this.scrollTableViewChild.nativeElement.style.top = ((page_1 - 1) * pageHeight_1) + 'px';
                        if (_this.frozenSiblingBody) {
                            _this.frozenSiblingBody.children[0].style.top = _this.scrollTableViewChild.nativeElement.style.top;
                        }
                    }
                });
            }
        }
    };
    ScrollableView.prototype.setScrollHeight = function () {
        if (this.scrollHeight && this.scrollBodyViewChild && this.scrollBodyViewChild.nativeElement) {
            if (this.scrollHeight.indexOf('%') !== -1) {
                this.scrollBodyViewChild.nativeElement.style.visibility = 'hidden';
                this.scrollBodyViewChild.nativeElement.style.height = '100px'; //temporary height to calculate static height
                var containerHeight = this.domHandler.getOuterHeight(this.dt.el.nativeElement.children[0]);
                var relativeHeight = this.domHandler.getOuterHeight(this.dt.el.nativeElement.parentElement) * parseInt(this.scrollHeight) / 100;
                var staticHeight = containerHeight - 100; //total height of headers, footers, paginators
                var scrollBodyHeight = (relativeHeight - staticHeight);
                if (this.frozen) {
                    scrollBodyHeight -= this.domHandler.calculateScrollbarWidth();
                }
                this.scrollBodyViewChild.nativeElement.style.height = 'auto';
                this.scrollBodyViewChild.nativeElement.style.maxHeight = scrollBodyHeight + 'px';
                this.scrollBodyViewChild.nativeElement.style.visibility = 'visible';
            }
            else {
                if (this.frozen)
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = (parseInt(this.scrollHeight) - this.domHandler.calculateScrollbarWidth()) + 'px';
                else
                    this.scrollBodyViewChild.nativeElement.style.maxHeight = this.scrollHeight;
            }
        }
    };
    ScrollableView.prototype.setVirtualScrollerHeight = function () {
        if (this.virtualScrollerViewChild.nativeElement) {
            this.virtualScrollerViewChild.nativeElement.style.height = this.dt.totalRecords * this.dt.virtualRowHeight + 'px';
        }
    };
    ScrollableView.prototype.hasVerticalOverflow = function () {
        return this.domHandler.getOuterHeight(this.scrollTableViewChild.nativeElement) > this.domHandler.getOuterHeight(this.scrollBodyViewChild.nativeElement);
    };
    ScrollableView.prototype.alignScrollBar = function () {
        if (!this.frozen) {
            var scrollBarWidth = this.hasVerticalOverflow() ? this.domHandler.calculateScrollbarWidth() : 0;
            this.scrollHeaderBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            if (this.scrollFooterBoxViewChild && this.scrollFooterBoxViewChild.nativeElement) {
                this.scrollFooterBoxViewChild.nativeElement.style.marginRight = scrollBarWidth + 'px';
            }
        }
        this.initialized = false;
    };
    ScrollableView.prototype.ngOnDestroy = function () {
        this.unbindEvents();
        this.frozenSiblingBody = null;
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
        if (this.totalRecordsSubscription) {
            this.totalRecordsSubscription.unsubscribe();
        }
        this.initialized = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pScrollableView"),
        __metadata("design:type", Array)
    ], ScrollableView.prototype, "columns", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ScrollableView.prototype, "frozen", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollHeader'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollHeaderViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollHeaderBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollHeaderBoxViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollBody'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollBodyViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollTable'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollTableViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollFooter'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollFooterViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('scrollFooterBox'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "scrollFooterBoxViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('virtualScroller'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], ScrollableView.prototype, "virtualScrollerViewChild", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], ScrollableView.prototype, "scrollHeight", null);
    ScrollableView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '[pScrollableView]',
            template: "\n        <div #scrollHeader class=\"ui-table-scrollable-header ui-widget-header\">\n            <div #scrollHeaderBox class=\"ui-table-scrollable-header-box\">\n                <table class=\"ui-table-scrollable-header-table\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <thead class=\"ui-table-thead\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenHeaderTemplate||dt.headerTemplate : dt.headerTemplate; context {$implicit: columns}\"></ng-container>\n                    </thead>\n                    <tbody class=\"ui-table-tbody\">\n                        <ng-template ngFor let-rowData let-rowIndex=\"index\" [ngForOf]=\"dt.frozenValue\" [ngForTrackBy]=\"dt.rowTrackBy\">\n                            <ng-container *ngTemplateOutlet=\"dt.frozenRowsTemplate; context: {$implicit: rowData, rowIndex: rowIndex, columns: columns}\"></ng-container>\n                        </ng-template>\n                    </tbody>\n                </table>\n            </div>\n        </div>\n        <div #scrollBody class=\"ui-table-scrollable-body\">\n            <table #scrollTable [ngClass]=\"{'ui-table-virtual-table': dt.virtualScroll}\" class=\"ui-table-scrollable-body-table\">\n                <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                <tbody class=\"ui-table-tbody\" [pTableBody]=\"columns\" [pTableBodyTemplate]=\"frozen ? dt.frozenBodyTemplate||dt.bodyTemplate : dt.bodyTemplate\"></tbody>\n            </table>\n            <div #virtualScroller class=\"ui-table-virtual-scroller\"></div>\n        </div>\n        <div #scrollFooter *ngIf=\"dt.footerTemplate\" class=\"ui-table-scrollable-footer ui-widget-header\">\n            <div #scrollFooterBox class=\"ui-table-scrollable-footer-box\">\n                <table class=\"ui-table-scrollable-footer-table\">\n                    <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenColGroupTemplate||dt.colGroupTemplate : dt.colGroupTemplate; context {$implicit: columns}\"></ng-container>\n                    <tfoot class=\"ui-table-tfoot\">\n                        <ng-container *ngTemplateOutlet=\"frozen ? dt.frozenFooterTemplate||dt.footerTemplate : dt.footerTemplate; context {$implicit: columns}\"></ng-container>\n                    </tfoot>\n                </table>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ScrollableView);
    return ScrollableView;
}());

var SortableColumn = (function () {
    function SortableColumn(dt, domHandler) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
                _this.updateSortState();
            });
        }
    }
    SortableColumn.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.updateSortState();
        }
    };
    SortableColumn.prototype.updateSortState = function () {
        this.sorted = this.dt.isSorted(this.field);
    };
    SortableColumn.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.updateSortState();
            this.dt.sort({
                originalEvent: event,
                field: this.field
            });
            this.domHandler.clearSelection();
        }
    };
    SortableColumn.prototype.isEnabled = function () {
        return this.pSortableColumnDisabled !== true;
    };
    SortableColumn.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSortableColumn"),
        __metadata("design:type", String)
    ], SortableColumn.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SortableColumn.prototype, "pSortableColumnDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], SortableColumn.prototype, "onClick", null);
    SortableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pSortableColumn]',
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]],
            host: {
                '[class.ui-sortable-column]': 'true',
                '[class.ui-state-highlight]': 'sorted'
            }
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]])
    ], SortableColumn);
    return SortableColumn;
}());

var SortIcon = (function () {
    function SortIcon(dt) {
        var _this = this;
        this.dt = dt;
        this.subscription = this.dt.tableService.sortSource$.subscribe(function (sortMeta) {
            _this.updateSortState();
        });
    }
    SortIcon.prototype.ngOnInit = function () {
        this.updateSortState();
    };
    SortIcon.prototype.onClick = function (event) {
        event.preventDefault();
    };
    SortIcon.prototype.updateSortState = function () {
        if (this.dt.sortMode === 'single') {
            this.sortOrder = this.dt.isSorted(this.field) ? this.dt.sortOrder : 0;
        }
        else if (this.dt.sortMode === 'multiple') {
            var sortMeta = this.dt.getSortMeta(this.field);
            this.sortOrder = sortMeta ? sortMeta.order : 0;
        }
    };
    SortIcon.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SortIcon.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SortIcon.prototype, "ariaLabelDesc", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", String)
    ], SortIcon.prototype, "ariaLabelAsc", void 0);
    SortIcon = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-sortIcon',
            template: "\n        <a href=\"#\" (click)=\"onClick($event)\" [attr.aria-label]=\" sortOrder === 1 ? ariaLabelAsc : sortOrder === -1 ? ariaLabelDesc : '' \">\n            <i class=\"ui-sortable-column-icon fa fa-fw fa-sort\" [ngClass]=\"{'fa-sort-asc': sortOrder === 1, 'fa-sort-desc': sortOrder === -1}\"></i>\n        </a>\n    "
        }),
        __metadata("design:paramtypes", [Table])
    ], SortIcon);
    return SortIcon;
}());

var SelectableRow = (function () {
    function SelectableRow(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.selected = _this.dt.isSelected(_this.data);
            });
        }
    }
    SelectableRow.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    };
    SelectableRow.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    };
    SelectableRow.prototype.onTouchEnd = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowTouchEnd(event);
        }
    };
    SelectableRow.prototype.isEnabled = function () {
        return this.pSelectableRowDisabled !== true;
    };
    SelectableRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSelectableRow"),
        __metadata("design:type", Object)
    ], SelectableRow.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSelectableRowIndex"),
        __metadata("design:type", Number)
    ], SelectableRow.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectableRow.prototype, "pSelectableRowDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRow.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('touchend', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRow.prototype, "onTouchEnd", null);
    SelectableRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pSelectableRow]',
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]],
            host: {
                '[class.ui-state-highlight]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], SelectableRow);
    return SelectableRow;
}());

var SelectableRowDblClick = (function () {
    function SelectableRowDblClick(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
                _this.selected = _this.dt.isSelected(_this.data);
            });
        }
    }
    SelectableRowDblClick.prototype.ngOnInit = function () {
        if (this.isEnabled()) {
            this.selected = this.dt.isSelected(this.data);
        }
    };
    SelectableRowDblClick.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowClick({
                originalEvent: event,
                rowData: this.data,
                rowIndex: this.index
            });
        }
    };
    SelectableRowDblClick.prototype.isEnabled = function () {
        return this.pSelectableRowDisabled !== true;
    };
    SelectableRowDblClick.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSelectableRowDblClick"),
        __metadata("design:type", Object)
    ], SelectableRowDblClick.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pSelectableRowIndex"),
        __metadata("design:type", Number)
    ], SelectableRowDblClick.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], SelectableRowDblClick.prototype, "pSelectableRowDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('dblclick', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], SelectableRowDblClick.prototype, "onClick", null);
    SelectableRowDblClick = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pSelectableRowDblClick]',
            providers: [__WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]],
            host: {
                '[class.ui-state-highlight]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], SelectableRowDblClick);
    return SelectableRowDblClick;
}());

var ContextMenuRow = (function () {
    function ContextMenuRow(dt, tableService) {
        var _this = this;
        this.dt = dt;
        this.tableService = tableService;
        if (this.isEnabled()) {
            this.subscription = this.dt.tableService.contextMenuSource$.subscribe(function (data) {
                _this.selected = _this.dt.equals(_this.data, data);
            });
        }
    }
    ContextMenuRow.prototype.onContextMenu = function (event) {
        if (this.isEnabled()) {
            this.dt.handleRowRightClick({
                originalEvent: event,
                rowData: this.data
            });
            event.preventDefault();
        }
    };
    ContextMenuRow.prototype.isEnabled = function () {
        return this.pContextMenuRowDisabled !== true;
    };
    ContextMenuRow.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pContextMenuRow"),
        __metadata("design:type", Object)
    ], ContextMenuRow.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ContextMenuRow.prototype, "pContextMenuRowDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('contextmenu', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ContextMenuRow.prototype, "onContextMenu", null);
    ContextMenuRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pContextMenuRow]',
            host: {
                '[class.ui-contextmenu-selected]': 'selected'
            }
        }),
        __metadata("design:paramtypes", [Table, TableService])
    ], ContextMenuRow);
    return ContextMenuRow;
}());

var RowToggler = (function () {
    function RowToggler(dt) {
        this.dt = dt;
    }
    RowToggler.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            this.dt.toggleRow(this.data, event);
            event.preventDefault();
        }
    };
    RowToggler.prototype.isEnabled = function () {
        return this.pRowTogglerDisabled !== true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('pRowToggler'),
        __metadata("design:type", Object)
    ], RowToggler.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], RowToggler.prototype, "pRowTogglerDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], RowToggler.prototype, "onClick", null);
    RowToggler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pRowToggler]'
        }),
        __metadata("design:paramtypes", [Table])
    ], RowToggler);
    return RowToggler;
}());

var ResizableColumn = (function () {
    function ResizableColumn(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ResizableColumn.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.isEnabled()) {
            this.domHandler.addClass(this.el.nativeElement, 'ui-resizable-column');
            this.resizer = document.createElement('span');
            this.resizer.className = 'ui-column-resizer ui-clickable';
            this.el.nativeElement.appendChild(this.resizer);
            this.zone.runOutsideAngular(function () {
                _this.resizerMouseDownListener = _this.onMouseDown.bind(_this);
                _this.resizer.addEventListener('mousedown', _this.resizerMouseDownListener);
            });
        }
    };
    ResizableColumn.prototype.bindDocumentEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.documentMouseMoveListener = _this.onDocumentMouseMove.bind(_this);
            document.addEventListener('mousemove', _this.documentMouseMoveListener);
            _this.documentMouseUpListener = _this.onDocumentMouseUp.bind(_this);
            document.addEventListener('mouseup', _this.documentMouseUpListener);
        });
    };
    ResizableColumn.prototype.unbindDocumentEvents = function () {
        if (this.documentMouseMoveListener) {
            document.removeEventListener('mousemove', this.documentMouseMoveListener);
            this.documentMouseMoveListener = null;
        }
        if (this.documentMouseUpListener) {
            document.removeEventListener('mouseup', this.documentMouseUpListener);
            this.documentMouseUpListener = null;
        }
    };
    ResizableColumn.prototype.onMouseDown = function (event) {
        this.dt.onColumnResizeBegin(event);
        this.bindDocumentEvents();
    };
    ResizableColumn.prototype.onDocumentMouseMove = function (event) {
        this.dt.onColumnResize(event);
    };
    ResizableColumn.prototype.onDocumentMouseUp = function (event) {
        this.dt.onColumnResizeEnd(event, this.el.nativeElement);
        this.unbindDocumentEvents();
    };
    ResizableColumn.prototype.isEnabled = function () {
        return this.pResizableColumnDisabled !== true;
    };
    ResizableColumn.prototype.ngOnDestroy = function () {
        if (this.resizerMouseDownListener) {
            this.resizer.removeEventListener('mousedown', this.resizerMouseDownListener);
        }
        this.unbindDocumentEvents();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ResizableColumn.prototype, "pResizableColumnDisabled", void 0);
    ResizableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pResizableColumn]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ResizableColumn);
    return ResizableColumn;
}());

var ReorderableColumn = (function () {
    function ReorderableColumn(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ReorderableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.bindEvents();
        }
    };
    ReorderableColumn.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragOverListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragEnterListener = _this.onDragEnter.bind(_this);
            _this.el.nativeElement.addEventListener('dragenter', _this.dragEnterListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableColumn.prototype.unbindEvents = function () {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragEnterListener) {
            document.removeEventListener('dragenter', this.dragEnterListener);
            this.dragEnterListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    };
    ReorderableColumn.prototype.onMouseDown = function (event) {
        if (event.target.nodeName === 'INPUT' || this.domHandler.hasClass(event.target, 'ui-column-resizer'))
            this.el.nativeElement.draggable = false;
        else
            this.el.nativeElement.draggable = true;
    };
    ReorderableColumn.prototype.onDragStart = function (event) {
        this.dt.onColumnDragStart(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragOver = function (event) {
        event.preventDefault();
    };
    ReorderableColumn.prototype.onDragEnter = function (event) {
        this.dt.onColumnDragEnter(event, this.el.nativeElement);
    };
    ReorderableColumn.prototype.onDragLeave = function (event) {
        this.dt.onColumnDragLeave(event);
    };
    ReorderableColumn.prototype.onDrop = function (event) {
        if (this.isEnabled()) {
            this.dt.onColumnDrop(event, this.el.nativeElement);
        }
    };
    ReorderableColumn.prototype.isEnabled = function () {
        return this.pReorderableColumnDisabled !== true;
    };
    ReorderableColumn.prototype.ngOnDestroy = function () {
        this.unbindEvents();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReorderableColumn.prototype, "pReorderableColumnDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ReorderableColumn.prototype, "onDrop", null);
    ReorderableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pReorderableColumn]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ReorderableColumn);
    return ReorderableColumn;
}());

var EditableColumn = (function () {
    function EditableColumn(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    EditableColumn.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.domHandler.addClass(this.el.nativeElement, 'ui-editable-column');
        }
    };
    EditableColumn.prototype.isValid = function () {
        return (this.dt.editingCell && this.domHandler.find(this.dt.editingCell, '.ng-invalid.ng-dirty').length === 0);
    };
    EditableColumn.prototype.onClick = function (event) {
        if (this.isEnabled()) {
            if (this.dt.editingCell) {
                if (this.dt.editingCell !== this.el.nativeElement) {
                    if (!this.isValid()) {
                        return;
                    }
                    this.domHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                    this.openCell();
                }
            }
            else {
                this.openCell();
            }
        }
    };
    EditableColumn.prototype.openCell = function () {
        var _this = this;
        this.dt.editingCell = this.el.nativeElement;
        this.domHandler.addClass(this.el.nativeElement, 'ui-editing-cell');
        this.dt.onEditInit.emit({ field: this.field, data: this.data });
        this.zone.runOutsideAngular(function () {
            setTimeout(function () {
                var focusable = _this.domHandler.findSingle(_this.el.nativeElement, 'input, textarea');
                if (focusable) {
                    focusable.focus();
                }
            }, 50);
        });
    };
    EditableColumn.prototype.onKeyDown = function (event) {
        if (this.isEnabled()) {
            //enter
            if (event.keyCode == 13) {
                if (this.isValid()) {
                    this.domHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                    this.dt.editingCell = null;
                    this.dt.onEditComplete.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            else if (event.keyCode == 27) {
                if (this.isValid()) {
                    this.domHandler.removeClass(this.dt.editingCell, 'ui-editing-cell');
                    this.dt.editingCell = null;
                    this.dt.onEditCancel.emit({ field: this.field, data: this.data });
                }
                event.preventDefault();
            }
            else if (event.keyCode == 9) {
                this.dt.onEditComplete.emit({ field: this.field, data: this.data });
                if (event.shiftKey)
                    this.moveToPreviousCell(event);
                else
                    this.moveToNextCell(event);
            }
        }
    };
    EditableColumn.prototype.findCell = function (element) {
        if (element) {
            var cell = element;
            while (cell && !this.domHandler.hasClass(cell, 'ui-editing-cell')) {
                cell = cell.parentElement;
            }
            return cell;
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.moveToPreviousCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findPreviousEditableColumn(currentCell);
        if (targetCell) {
            this.domHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.moveToNextCell = function (event) {
        var currentCell = this.findCell(event.target);
        var row = currentCell.parentElement;
        var targetCell = this.findNextEditableColumn(currentCell);
        if (targetCell) {
            this.domHandler.invokeElementMethod(targetCell, 'click');
            event.preventDefault();
        }
    };
    EditableColumn.prototype.findPreviousEditableColumn = function (cell) {
        var prevCell = cell.previousElementSibling;
        if (!prevCell) {
            var previousRow = cell.parentElement.previousElementSibling;
            if (previousRow) {
                prevCell = previousRow.lastElementChild;
            }
        }
        if (prevCell) {
            if (this.domHandler.hasClass(prevCell, 'ui-editable-column'))
                return prevCell;
            else
                return this.findPreviousEditableColumn(prevCell);
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.findNextEditableColumn = function (cell) {
        var nextCell = cell.nextElementSibling;
        if (!nextCell) {
            var nextRow = cell.parentElement.nextElementSibling;
            if (nextRow) {
                nextCell = nextRow.firstElementChild;
            }
        }
        if (nextCell) {
            if (this.domHandler.hasClass(nextCell, 'ui-editable-column'))
                return nextCell;
            else
                return this.findNextEditableColumn(nextCell);
        }
        else {
            return null;
        }
    };
    EditableColumn.prototype.isEnabled = function () {
        return this.pEditableColumnDisabled !== true;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pEditableColumn"),
        __metadata("design:type", Object)
    ], EditableColumn.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pEditableColumnField"),
        __metadata("design:type", Object)
    ], EditableColumn.prototype, "field", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], EditableColumn.prototype, "pEditableColumnDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [MouseEvent]),
        __metadata("design:returntype", void 0)
    ], EditableColumn.prototype, "onClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], EditableColumn.prototype, "onKeyDown", null);
    EditableColumn = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pEditableColumn]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], EditableColumn);
    return EditableColumn;
}());

var CellEditor = (function () {
    function CellEditor(dt, editableColumn) {
        this.dt = dt;
        this.editableColumn = editableColumn;
    }
    CellEditor.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.templates.forEach(function (item) {
            switch (item.getType()) {
                case 'input':
                    _this.inputTemplate = item.template;
                    break;
                case 'output':
                    _this.outputTemplate = item.template;
                    break;
            }
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* ContentChildren */])(__WEBPACK_IMPORTED_MODULE_2__common_shared__["f" /* PrimeTemplate */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* QueryList */])
    ], CellEditor.prototype, "templates", void 0);
    CellEditor = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-cellEditor',
            template: "\n        <ng-container *ngIf=\"dt.editingCell === editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"inputTemplate\"></ng-container>\n        </ng-container>\n        <ng-container *ngIf=\"!dt.editingCell || dt.editingCell !== editableColumn.el.nativeElement\">\n            <ng-container *ngTemplateOutlet=\"outputTemplate\"></ng-container>\n        </ng-container>\n    "
        }),
        __metadata("design:paramtypes", [Table, EditableColumn])
    ], CellEditor);
    return CellEditor;
}());

var TableRadioButton = (function () {
    function TableRadioButton(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableRadioButton.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableRadioButton.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.dt.toggleRowWithRadio(event, this.value);
        }
        this.domHandler.clearSelection();
    };
    TableRadioButton.prototype.onFocus = function () {
        this.domHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.onBlur = function () {
        this.domHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableRadioButton.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableRadioButton.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TableRadioButton.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TableRadioButton.prototype, "boxViewChild", void 0);
    TableRadioButton = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tableRadioButton',
            template: "\n        <div class=\"ui-radiobutton ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"radio\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-radiobutton-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\">\n                <span class=\"ui-radiobutton-icon ui-clickable\" [ngClass]=\"{'fa fa-circle':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], TableRadioButton);
    return TableRadioButton;
}());

var TableCheckbox = (function () {
    function TableCheckbox(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.subscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.dt.isSelected(_this.value);
        });
    }
    TableCheckbox.prototype.ngOnInit = function () {
        this.checked = this.dt.isSelected(this.value);
    };
    TableCheckbox.prototype.onClick = function (event) {
        if (!this.disabled) {
            this.dt.toggleRowWithCheckbox(event, this.value);
        }
        this.domHandler.clearSelection();
    };
    TableCheckbox.prototype.onFocus = function () {
        this.domHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.onBlur = function () {
        this.domHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableCheckbox.prototype.ngOnDestroy = function () {
        if (this.subscription) {
            this.subscription.unsubscribe();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], TableCheckbox.prototype, "disabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Object)
    ], TableCheckbox.prototype, "value", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TableCheckbox.prototype, "boxViewChild", void 0);
    TableCheckbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tableCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled':disabled}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'fa fa-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], TableCheckbox);
    return TableCheckbox;
}());

var TableHeaderCheckbox = (function () {
    function TableHeaderCheckbox(dt, domHandler, tableService) {
        var _this = this;
        this.dt = dt;
        this.domHandler = domHandler;
        this.tableService = tableService;
        this.valueChangeSubscription = this.dt.tableService.valueSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
        this.selectionChangeSubscription = this.dt.tableService.selectionSource$.subscribe(function () {
            _this.checked = _this.updateCheckedState();
        });
    }
    TableHeaderCheckbox.prototype.ngOnInit = function () {
        this.checked = this.updateCheckedState();
    };
    TableHeaderCheckbox.prototype.onClick = function (event, checked) {
        if (this.dt.value && this.dt.value.length > 0) {
            this.dt.toggleRowsWithCheckbox(event, !checked);
        }
        this.domHandler.clearSelection();
    };
    TableHeaderCheckbox.prototype.onFocus = function () {
        this.domHandler.addClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.onBlur = function () {
        this.domHandler.removeClass(this.boxViewChild.nativeElement, 'ui-state-focus');
    };
    TableHeaderCheckbox.prototype.ngOnDestroy = function () {
        if (this.selectionChangeSubscription) {
            this.selectionChangeSubscription.unsubscribe();
        }
        if (this.valueChangeSubscription) {
            this.valueChangeSubscription.unsubscribe();
        }
    };
    TableHeaderCheckbox.prototype.updateCheckedState = function () {
        var val = this.dt.filteredValue || this.dt.value;
        return (val && val.length > 0 && this.dt.selection && this.dt.selection.length > 0 && this.dt.selection.length === val.length);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_10" /* ViewChild */])('box'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */])
    ], TableHeaderCheckbox.prototype, "boxViewChild", void 0);
    TableHeaderCheckbox = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'p-tableHeaderCheckbox',
            template: "\n        <div class=\"ui-chkbox ui-widget\" (click)=\"onClick($event, cb.checked)\">\n            <div class=\"ui-helper-hidden-accessible\">\n                <input #cb type=\"checkbox\" [checked]=\"checked\" (focus)=\"onFocus()\" (blur)=\"onBlur()\" [disabled]=\"!dt.value || dt.value.length === 0\">\n            </div>\n            <div #box [ngClass]=\"{'ui-chkbox-box ui-widget ui-state-default':true,\n                'ui-state-active':checked, 'ui-state-disabled': (!dt.value || dt.value.length === 0)}\">\n                <span class=\"ui-chkbox-icon ui-clickable\" [ngClass]=\"{'fa fa-check':checked}\"></span>\n            </div>\n        </div>\n    "
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], TableService])
    ], TableHeaderCheckbox);
    return TableHeaderCheckbox;
}());

var ReorderableRowHandle = (function () {
    function ReorderableRowHandle(el, domHandler) {
        this.el = el;
        this.domHandler = domHandler;
    }
    ReorderableRowHandle.prototype.ngAfterViewInit = function () {
        this.domHandler.addClass(this.el.nativeElement, 'ui-table-reorderablerow-handle');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pReorderableRowHandle"),
        __metadata("design:type", Number)
    ], ReorderableRowHandle.prototype, "index", void 0);
    ReorderableRowHandle = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pReorderableRowHandle]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */]])
    ], ReorderableRowHandle);
    return ReorderableRowHandle;
}());

var ReorderableRow = (function () {
    function ReorderableRow(dt, el, domHandler, zone) {
        this.dt = dt;
        this.el = el;
        this.domHandler = domHandler;
        this.zone = zone;
    }
    ReorderableRow.prototype.ngAfterViewInit = function () {
        if (this.isEnabled()) {
            this.el.nativeElement.droppable = true;
            this.bindEvents();
        }
    };
    ReorderableRow.prototype.bindEvents = function () {
        var _this = this;
        this.zone.runOutsideAngular(function () {
            _this.mouseDownListener = _this.onMouseDown.bind(_this);
            _this.el.nativeElement.addEventListener('mousedown', _this.mouseDownListener);
            _this.dragStartListener = _this.onDragStart.bind(_this);
            _this.el.nativeElement.addEventListener('dragstart', _this.dragStartListener);
            _this.dragEndListener = _this.onDragEnd.bind(_this);
            _this.el.nativeElement.addEventListener('dragend', _this.dragEndListener);
            _this.dragOverListener = _this.onDragOver.bind(_this);
            _this.el.nativeElement.addEventListener('dragover', _this.dragOverListener);
            _this.dragLeaveListener = _this.onDragLeave.bind(_this);
            _this.el.nativeElement.addEventListener('dragleave', _this.dragLeaveListener);
        });
    };
    ReorderableRow.prototype.unbindEvents = function () {
        if (this.mouseDownListener) {
            document.removeEventListener('mousedown', this.mouseDownListener);
            this.mouseDownListener = null;
        }
        if (this.dragStartListener) {
            document.removeEventListener('dragstart', this.dragStartListener);
            this.dragStartListener = null;
        }
        if (this.dragEndListener) {
            document.removeEventListener('dragend', this.dragEndListener);
            this.dragEndListener = null;
        }
        if (this.dragOverListener) {
            document.removeEventListener('dragover', this.dragOverListener);
            this.dragOverListener = null;
        }
        if (this.dragLeaveListener) {
            document.removeEventListener('dragleave', this.dragLeaveListener);
            this.dragLeaveListener = null;
        }
    };
    ReorderableRow.prototype.onMouseDown = function (event) {
        if (this.domHandler.hasClass(event.target, 'ui-table-reorderablerow-handle'))
            this.el.nativeElement.draggable = true;
        else
            this.el.nativeElement.draggable = false;
    };
    ReorderableRow.prototype.onDragStart = function (event) {
        this.dt.onRowDragStart(event, this.index);
    };
    ReorderableRow.prototype.onDragEnd = function (event) {
        this.dt.onRowDragEnd(event);
        this.el.nativeElement.draggable = false;
    };
    ReorderableRow.prototype.onDragOver = function (event) {
        this.dt.onRowDragOver(event, this.index, this.el.nativeElement);
        event.preventDefault();
    };
    ReorderableRow.prototype.onDragLeave = function (event) {
        this.dt.onRowDragLeave(event, this.el.nativeElement);
    };
    ReorderableRow.prototype.isEnabled = function () {
        return this.pReorderableRowDisabled !== true;
    };
    ReorderableRow.prototype.onDrop = function (event) {
        if (this.isEnabled() && this.dt.rowDragging) {
            this.dt.onRowDrop(event, this.el.nativeElement);
        }
        event.preventDefault();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])("pReorderableRow"),
        __metadata("design:type", Number)
    ], ReorderableRow.prototype, "index", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])(),
        __metadata("design:type", Boolean)
    ], ReorderableRow.prototype, "pReorderableRowDisabled", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostListener */])('drop', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ReorderableRow.prototype, "onDrop", null);
    ReorderableRow = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* Directive */])({
            selector: '[pReorderableRow]'
        }),
        __metadata("design:paramtypes", [Table, __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_4__dom_domhandler__["a" /* DomHandler */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* NgZone */]])
    ], ReorderableRow);
    return ReorderableRow;
}());

var TableModule = (function () {
    function TableModule() {
    }
    TableModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */], __WEBPACK_IMPORTED_MODULE_3__paginator_paginator__["a" /* PaginatorModule */]],
            exports: [Table, __WEBPACK_IMPORTED_MODULE_2__common_shared__["g" /* SharedModule */], SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick],
            declarations: [Table, SortableColumn, SelectableRow, RowToggler, ContextMenuRow, ResizableColumn, ReorderableColumn, EditableColumn, CellEditor, TableBody, ScrollableView, SortIcon, TableRadioButton, TableCheckbox, TableHeaderCheckbox, ReorderableRowHandle, ReorderableRow, SelectableRowDblClick]
        })
    ], TableModule);
    return TableModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablecolgroupdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Group</span></span>\n        <span>Columns can be grouped using rowspan and colspan properties.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [value]=\"sales\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th rowspan=\"3\">Brand</th>\n                <th colspan=\"4\">Sale Rate</th>\n            </tr>\n            <tr>\n                <th colspan=\"2\">Sales</th>\n                <th colspan=\"2\">Profits</th>\n            </tr>\n            <tr>\n                <th>Last Year</th>\n                <th>This Year</th>\n                <th>Last Year</th>\n                <th>This Year</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-sale>\n            <tr>\n                <td>&#123;&#123;sale.brand&#125;&#125;</td>\n                <td>&#123;&#123;sale.lastYearSale&#125;&#125;</td>\n                <td>&#123;&#123;sale.thisYearSale&#125;&#125;</td>\n                <td>&#123;&#123;sale.lastYearProfit&#125;&#125;</td>\n                <td>&#123;&#123;sale.thisYearProfit&#125;&#125;</td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\">\n            <tr>\n                <td colspan=\"3\">Totals</td>\n                <td>$506,202</td>\n                <td>$531,020</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablecolgroupdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColGroupDemo implements OnInit &#123;\n\n    sales: any[];\n\n    ngOnInit() &#123;\n        this.sales = [\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecolgroupdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"sales\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\"&gt;\n        &lt;tr&gt;\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\n            &lt;td&gt;$506,202&lt;/td&gt;\n            &lt;td&gt;$531,020&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablecolgroupdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColGroupDemo; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableColGroupDemo = (function () {
    function TableColGroupDemo() {
    }
    TableColGroupDemo.prototype.ngOnInit = function () {
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
    };
    TableColGroupDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablecolgroupdemo.html")
        })
    ], TableColGroupDemo);
    return TableColGroupDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablecolresizedemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Resize</span></span>\n        <span>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and \n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Fit Mode</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Expand Mode</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\" columnResizeMode=\"expand\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n    \n    <h3>Scrollable</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" >\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Scrollable with Variable Width</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" [style.width]=\"col.width\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" pResizableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\" class=\"ui-resizable-column\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablecolresize.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolresize.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColResizeDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars2 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin', width: '25%'&#125;,\n            &#123; field: 'year', header: 'Year', width: '15%' &#125;,\n            &#123; field: 'brand', header: 'Brand', width: '35%' &#125;,\n            &#123; field: 'color', header: 'Color', width: '25%' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecolresize.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolresize.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Expand Mode&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [resizableColumns]=\"true\" columnResizeMode=\"expand\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Scrollable&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" &gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Scrollable with Variable Width&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablecolresizedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColResizeDemo; });
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


var TableColResizeDemo = (function () {
    function TableColResizeDemo(carService) {
        this.carService = carService;
    }
    TableColResizeDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars2 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin', width: '25%' },
            { field: 'year', header: 'Year', width: '15%' },
            { field: 'brand', header: 'Brand', width: '35%' },
            { field: 'color', header: 'Color', width: '25%' }
        ];
    };
    TableColResizeDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablecolresizedemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableColResizeDemo);
    return TableColResizeDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablecoltoggledemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Column Toggle</span></span>\n        <span>This demo uses a multiselect component to implement toggleable columns.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"selectedColumns\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            <div style=\"text-align:left\">\n                <p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\n                         selectedItemsLabel=\"&#123;0&#125; columns selected\" [style]=\"&#123;minWidth: '200px'&#125;\" defaultLabel=\"Choose Columns\"></p-multiSelect>\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    &#123;&#123;col.header&#125;&#125;\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablecoltoggle.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecoltoggle.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColToggleDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    selectedColumns: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.selectedColumns = this.cols;\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecoltoggle.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecoltoggle.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"selectedColumns\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div style=\"text-align:left\"&gt;\n            &lt;p-multiSelect [options]=\"cols\" [(ngModel)]=\"selectedColumns\" optionLabel=\"header\"\n                        selectedItemsLabel=\"&#123;0&#125; columns selected\" [style]=\"&#123;minWidth: '200px'&#125;\" defaultLabel=\"Choose Columns\"&gt;&lt;/p-multiSelect&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablecoltoggledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableColToggleDemo; });
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


var TableColToggleDemo = (function () {
    function TableColToggleDemo(carService) {
        this.carService = carService;
    }
    TableColToggleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.selectedColumns = this.cols;
    };
    TableColToggleDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablecoltoggledemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableColToggleDemo);
    return TableColToggleDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablecontextmenudemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">ContextMenu</span></span>\n        <span>DataTable has exclusive integration with ContextMenu.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [value]=\"msgs\"></p-growl>\n    \n    <p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pContextMenuRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <p-contextMenu #cm [model]=\"items\"></p-contextMenu>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablecontextmenudemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecontextmenudemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableContextMenuDemo implements OnInit &#123;\n\n    msgs: Message[];\n\n    cars: Car[];\n\n    cols: any[];\n\n    selectedCar: Car;\n\n    selectCars: Car[];\n\n    items: MenuItem[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.items = [\n            &#123; label: 'View', icon: 'fa-search', command: (event) => this.viewCar(this.selectedCar) &#125;,\n            &#123; label: 'Delete', icon: 'fa-close', command: (event) => this.deleteCar(this.selectedCar) &#125;\n        ];\n    &#125;\n\n    viewCar(car: Car) &#123;\n        this.msgs = [];\n        this.msgs.push(&#123; severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand &#125;);\n    &#125;\n\n    deleteCar(car: Car) &#123;\n        let index = -1;\n        for (let i = 0; i &lt; this.cars.length; i++) &#123;\n            if (this.cars[i].vin == car.vin) &#123;\n                index = i;\n                break;\n            &#125;\n        &#125;\n        this.cars.splice(index, 1);\n\n        this.msgs = [];\n        this.msgs.push(&#123; severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand &#125;);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecontextmenudemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecontextmenudemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [value]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pContextMenuRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablecontextmenudemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableContextMenuDemo; });
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


var TableContextMenuDemo = (function () {
    function TableContextMenuDemo(carService) {
        this.carService = carService;
    }
    TableContextMenuDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.items = [
            { label: 'View', icon: 'fa-search', command: function (event) { return _this.viewCar(_this.selectedCar); } },
            { label: 'Delete', icon: 'fa-close', command: function (event) { return _this.deleteCar(_this.selectedCar); } }
        ];
    };
    TableContextMenuDemo.prototype.viewCar = function (car) {
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Selected', detail: car.vin + ' - ' + car.brand });
    };
    TableContextMenuDemo.prototype.deleteCar = function (car) {
        var index = -1;
        for (var i = 0; i < this.cars.length; i++) {
            if (this.cars[i].vin == car.vin) {
                index = i;
                break;
            }
        }
        this.cars.splice(index, 1);
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Car Deleted', detail: car.vin + ' - ' + car.brand });
    };
    TableContextMenuDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablecontextmenudemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableContextMenuDemo);
    return TableContextMenuDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablecruddemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">CRUD</span></span>\n        <span>This samples demonstrates a CRUD implementation using various PrimeNG components.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n\n        <ng-template pTemplate=\"summary\" let-rowData>\n            <div style=\"text-align:left\">\n                <button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"></button>\n            </div>\n        </ng-template>\n        \n    </p-table>\n    \n    <p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\">\n        <div class=\"ui-g ui-fluid\" *ngIf=\"car\">\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"vin\">Vin</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"year\">Year</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"year\" [(ngModel)]=\"car.year\" />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"brand\">Brand</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" />\n                </div>\n            </div>\n            <div class=\"ui-g-12\">\n                <div class=\"ui-g-4\">\n                    <label for=\"color\">Color</label>\n                </div>\n                <div class=\"ui-g-8\">\n                    <input pInputText id=\"color\" [(ngModel)]=\"car.color\" />\n                </div>\n            </div>\n        </div>\n        <p-footer>\n            <div class=\"ui-dialog-buttonpane ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"></button>\n                <button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"></button>\n            </div>\n        </p-footer>\n    </p-dialog>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablecruddemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableCrudDemo implements OnInit &#123;\n\n    displayDialog: boolean;\n\n    car: Car = &#123;&#125;;\n\n    selectedCar: Car;\n\n    newCar: boolean;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    showDialogToAdd() &#123;\n        this.newCar = true;\n        this.car = &#123;&#125;;\n        this.displayDialog = true;\n    &#125;\n\n    save() &#123;\n        let cars = [...this.cars];\n        if (this.newCar)\n            cars.push(this.car);\n        else\n            cars[this.cars.indexOf(this.selectedCar)] = this.car;\n\n        this.cars = cars;\n        this.car = null;\n        this.displayDialog = false;\n    &#125;\n\n    delete() &#123;\n        let index = this.cars.indexOf(this.selectedCar);\n        this.cars = this.cars.filter((val, i) => i != index);\n        this.car = null;\n        this.displayDialog = false;\n    &#125;\n\n    onRowSelect(event) &#123;\n        this.newCar = false;\n        this.car = this.cloneCar(event.data);\n        this.displayDialog = true;\n    &#125;\n\n    cloneCar(c: Car): Car &#123;\n        let car = &#123;&#125;;\n        for (let prop in c) &#123;\n            car[prop] = c[prop];\n        &#125;\n        return car;\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecruddemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\" (onRowSelect)=\"onRowSelect($event)\" [paginator]=\"true\" [rows]=\"15\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n\n    &lt;ng-template pTemplate=\"summary\" let-rowData&gt;\n        &lt;div style=\"text-align:left\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-plus\" (click)=\"showDialogToAdd()\" label=\"Add\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    \n&lt;/p-table&gt;\n\n&lt;p-dialog header=\"Car Details\" [(visible)]=\"displayDialog\" [responsive]=\"true\" showEffect=\"fade\" [modal]=\"true\" [width]=\"300\"&gt;\n    &lt;div class=\"ui-g ui-fluid\" *ngIf=\"car\"&gt;\n        &lt;div class=\"ui-g-12\"&gt;\n            &lt;div class=\"ui-g-4\"&gt;\n                &lt;label for=\"vin\"&gt;Vin&lt;/label&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-8\"&gt;\n                &lt;input pInputText id=\"vin\" [(ngModel)]=\"car.vin\" /&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-g-12\"&gt;\n            &lt;div class=\"ui-g-4\"&gt;\n                &lt;label for=\"year\"&gt;Year&lt;/label&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-8\"&gt;\n                &lt;input pInputText id=\"year\" [(ngModel)]=\"car.year\" /&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-g-12\"&gt;\n            &lt;div class=\"ui-g-4\"&gt;\n                &lt;label for=\"brand\"&gt;Brand&lt;/label&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-8\"&gt;\n                &lt;input pInputText id=\"brand\" [(ngModel)]=\"car.brand\" /&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n        &lt;div class=\"ui-g-12\"&gt;\n            &lt;div class=\"ui-g-4\"&gt;\n                &lt;label for=\"color\"&gt;Color&lt;/label&gt;\n            &lt;/div&gt;\n            &lt;div class=\"ui-g-8\"&gt;\n                &lt;input pInputText id=\"color\" [(ngModel)]=\"car.color\" /&gt;\n            &lt;/div&gt;\n        &lt;/div&gt;\n    &lt;/div&gt;\n    &lt;p-footer&gt;\n        &lt;div class=\"ui-dialog-buttonpane ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-close\" (click)=\"delete()\" label=\"Delete\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-check\" (click)=\"save()\" label=\"Save\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/p-footer&gt;\n&lt;/p-dialog&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablecruddemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableCrudDemo; });
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


var TableCrudDemo = (function () {
    function TableCrudDemo(carService) {
        this.carService = carService;
        this.car = {};
    }
    TableCrudDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableCrudDemo.prototype.showDialogToAdd = function () {
        this.newCar = true;
        this.car = {};
        this.displayDialog = true;
    };
    TableCrudDemo.prototype.save = function () {
        var cars = this.cars.slice();
        if (this.newCar)
            cars.push(this.car);
        else
            cars[this.cars.indexOf(this.selectedCar)] = this.car;
        this.cars = cars;
        this.car = null;
        this.displayDialog = false;
    };
    TableCrudDemo.prototype.delete = function () {
        var index = this.cars.indexOf(this.selectedCar);
        this.cars = this.cars.filter(function (val, i) { return i != index; });
        this.car = null;
        this.displayDialog = false;
    };
    TableCrudDemo.prototype.onRowSelect = function (event) {
        this.newCar = false;
        this.car = this.cloneCar(event.data);
        this.displayDialog = true;
    };
    TableCrudDemo.prototype.cloneCar = function (c) {
        var car = {};
        for (var prop in c) {
            car[prop] = c[prop];
        }
        return car;
    };
    TableCrudDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablecruddemo.html"),
            styles: ["        \n        .ui-g label {\n          font-weight: bold;\n          margin-top: .25em;\n          display: block;\n        }\n  "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableCrudDemo);
    return TableCrudDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tabledemo-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemoRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabledemo__ = __webpack_require__("./src/app/showcase/components/table/tabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tablepagedemo__ = __webpack_require__("./src/app/showcase/components/table/tablepagedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tablesortdemo__ = __webpack_require__("./src/app/showcase/components/table/tablesortdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tablefilterdemo__ = __webpack_require__("./src/app/showcase/components/table/tablefilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__ = __webpack_require__("./src/app/showcase/components/table/tableselectiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tablesectionsdemo__ = __webpack_require__("./src/app/showcase/components/table/tablesectionsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tablestyledemo__ = __webpack_require__("./src/app/showcase/components/table/tablestyledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tablelazydemo__ = __webpack_require__("./src/app/showcase/components/table/tablelazydemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tableexportdemo__ = __webpack_require__("./src/app/showcase/components/table/tableexportdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tablecolgroupdemo__ = __webpack_require__("./src/app/showcase/components/table/tablecolgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tablerowexpansiondemo__ = __webpack_require__("./src/app/showcase/components/table/tablerowexpansiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tablescrolldemo__ = __webpack_require__("./src/app/showcase/components/table/tablescrolldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__tablecoltoggledemo__ = __webpack_require__("./src/app/showcase/components/table/tablecoltoggledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__tablecruddemo__ = __webpack_require__("./src/app/showcase/components/table/tablecruddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tableresponsivedemo__ = __webpack_require__("./src/app/showcase/components/table/tableresponsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__tablecontextmenudemo__ = __webpack_require__("./src/app/showcase/components/table/tablecontextmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__tablecolresizedemo__ = __webpack_require__("./src/app/showcase/components/table/tablecolresizedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__tablereorderdemo__ = __webpack_require__("./src/app/showcase/components/table/tablereorderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__tableeditdemo__ = __webpack_require__("./src/app/showcase/components/table/tableeditdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__tablerowgroupdemo__ = __webpack_require__("./src/app/showcase/components/table/tablerowgroupdemo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var TableDemoRoutingModule = (function () {
    function TableDemoRoutingModule() {
    }
    TableDemoRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forChild([
                    { path: '', component: __WEBPACK_IMPORTED_MODULE_2__tabledemo__["a" /* TableDemo */] },
                    { path: 'page', component: __WEBPACK_IMPORTED_MODULE_3__tablepagedemo__["a" /* TablePageDemo */] },
                    { path: 'sort', component: __WEBPACK_IMPORTED_MODULE_4__tablesortdemo__["a" /* TableSortDemo */] },
                    { path: 'selection', component: __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__["a" /* TableSelectionDemo */] },
                    { path: 'filter', component: __WEBPACK_IMPORTED_MODULE_5__tablefilterdemo__["a" /* TableFilterDemo */] },
                    { path: 'sections', component: __WEBPACK_IMPORTED_MODULE_7__tablesectionsdemo__["a" /* TableSectionsDemo */] },
                    { path: 'style', component: __WEBPACK_IMPORTED_MODULE_8__tablestyledemo__["a" /* TableStyleDemo */] },
                    { path: 'lazy', component: __WEBPACK_IMPORTED_MODULE_9__tablelazydemo__["a" /* TableLazyDemo */] },
                    { path: 'export', component: __WEBPACK_IMPORTED_MODULE_10__tableexportdemo__["a" /* TableExportDemo */] },
                    { path: 'colgroup', component: __WEBPACK_IMPORTED_MODULE_11__tablecolgroupdemo__["a" /* TableColGroupDemo */] },
                    { path: 'rowexpansion', component: __WEBPACK_IMPORTED_MODULE_12__tablerowexpansiondemo__["a" /* TableRowExpansionDemo */] },
                    { path: 'scroll', component: __WEBPACK_IMPORTED_MODULE_13__tablescrolldemo__["a" /* TableScrollDemo */] },
                    { path: 'coltoggle', component: __WEBPACK_IMPORTED_MODULE_14__tablecoltoggledemo__["a" /* TableColToggleDemo */] },
                    { path: 'crud', component: __WEBPACK_IMPORTED_MODULE_15__tablecruddemo__["a" /* TableCrudDemo */] },
                    { path: 'responsive', component: __WEBPACK_IMPORTED_MODULE_16__tableresponsivedemo__["a" /* TableResponsiveDemo */] },
                    { path: 'contextmenu', component: __WEBPACK_IMPORTED_MODULE_17__tablecontextmenudemo__["a" /* TableContextMenuDemo */] },
                    { path: 'colresize', component: __WEBPACK_IMPORTED_MODULE_18__tablecolresizedemo__["a" /* TableColResizeDemo */] },
                    { path: 'reorder', component: __WEBPACK_IMPORTED_MODULE_19__tablereorderdemo__["a" /* TableReorderDemo */] },
                    { path: 'edit', component: __WEBPACK_IMPORTED_MODULE_20__tableeditdemo__["a" /* TableEditDemo */] },
                    { path: 'rowgroup', component: __WEBPACK_IMPORTED_MODULE_21__tablerowgroupdemo__["a" /* TableRowGroupDemo */] }
                ])
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]
            ]
        })
    ], TableDemoRoutingModule);
    return TableDemoRoutingModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tabledemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">TurboTable</span>\n        <span>Table is the successor of p-dataTable with a lightning fast performance (at least 10x faster) and excellent level of control over the presentation. p-table is called as TurboTable in order to differantiate if from the deprecated p-dataTable.\n        </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Basic</h3>\n    <p-table [value]=\"cars\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-car>\n            <tr>\n                <td>{{car.vin}}</td>\n                <td>{{car.year}}</td>\n                <td>{{car.brand}}</td>\n                <td>{{car.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Dynamic Columns</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    &#123;&#123;col.header&#125;&#125;\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                     &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"Documentation\">\n            <h3>Import</h3>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;TableModule&#125; from 'primeng/table';\n</code>\n</pre>\n\n            <h3>Getting Started</h3>\n            <p>Table requires a value as an array of objects and templates for the presentation. Throughout the samples, a car interface having\n            vin, brand, year and color properties is used to define an object to be displayed by the table. Cars are loaded by a CarService that\n            connects to a server to fetch the data.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport interface Car &#123;\n    vin;\n    year;\n    brand;\n    color;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nimport &#123;Injectable&#125; from 'angular2/core';\nimport &#123;Http, Response&#125; from 'angular2/http';\nimport &#123;Car&#125; from '../domain/car';\n\n@Injectable()\nexport class CarService &#123;\n\n    constructor(private http: Http) &#123;&#125;\n\n    getCarsSmall() &#123;\n        return this.http.get('/showcase/resources/data/cars-small.json')\n                    .toPromise()\n                    .then(res => &lt;Car[]&gt; res.json().data)\n                    .then(data => &#123; return data; &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n            <p>Following sample has a table of 4 columns and retrieves the data from a service on ngOnInit.</p>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n        <p>List of cars are bound to the value property whereas <i>header</i> and <i>body</i> templates are used to define the content of these sections.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <h3>Dynamic Columns</h3>\n        <p>Instead of configuring columns one by one, a simple ngFor can be used to implement dynamic columns. cols property below is an array of objects that represent a column,\n            only property that table component uses is field, rest of the properties like header depend on your choice.\n        </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DynamicColumnsDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n        <p>There are two ways to render dynamic columns, since cols property is in the scope of component you can just simply bind it to ngFor directive to generate the structure.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of cols\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of cols\"&gt;\n                    &#123;&#123;car[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Other alternative is binding the cols array to the columns property and then defining a template variable to access it within your templates.\n                There are 3 cases where this is required which are csv export, reorderable columns and global filtering without the globalFilterFields property.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;car[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Tip: Use ngSwitch to customize the column content per dynamic column.</p>\n\n            <h3>Table Layout</h3>\n            <p>For performance reasons, default table-layout is fixed meaning the cell widths do not depend on their content. If you require cells to scale based on their contents\n                set <i>autoLayout</i> property to true.\n            </p>\n\n            <h3>Templates</h3>\n            <p>Table is a template driven component with named templates such as header and body that we've used so far. Templates grant a great level of customization and flexibility\n                where you have total control over the presentation while table handles the features such as paging, sorting, filtering and more. This speeds up development without sacrifing\n                flexibility. Here is the full list of available templates.</p>\n\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>caption</td>\n                            <td>-</td>\n                            <td>Caption content of the table.</td>\n                        </tr>\n                        <tr>\n                            <td>header</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the thead element.</td>\n                        </tr>\n                        <tr>\n                            <td>body</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection <br>\n                                expanded: Whethert the row is expanded\n                            </td>\n                            <td>Content of the tbody element.</td>\n                        </tr>\n                        <tr>\n                            <td>footer</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the tfoot element.</td>\n                        </tr>\n                        <tr>\n                            <td>summary</td>\n                            <td>-</td>\n                            <td>Summary section to display below the table.</td>\n                        </tr>\n                        <tr>\n                            <td>colgroup</td>\n                            <td>$implicit: Columns</td>\n                            <td>ColGroup element of the table to customize columns.</td>\n                        </tr>\n                        <tr>\n                            <td>rowexpansion</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection <br>\n                            </td>\n                            <td>Content of an extended row.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenrows</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection<br>\n                            </td>\n                            <td>Content of the tbody element to display frozen rows.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenheader</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the thead element in frozen side.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenbody</td>\n                            <td>$implicit: Data of the row <br>\n                                rowIndex: Index of the row <br>\n                                columns: Columns collection <br>\n                            </td>\n                            <td>Content of the tbody element in frozen side.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenfooter</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content of the tfoot element in frozen side.</td>\n                        </tr>\n                        <tr>\n                            <td>frozencolgroup</td>\n                            <td>$implicit: Columns</td>\n                            <td>ColGroup element of the table to customize frozen columns.</td>\n                        </tr>\n                        <tr>\n                            <td>emptymessage</td>\n                            <td>$implicit: Columns</td>\n                            <td>Content to display when there is no value to display.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorleft</td>\n                            <td>state: $implicit\n                                state.page: Current page<br />\n                                state.rows: Rows per page<br />\n                                state.first: Index of the first records<br />\n                                state.totalRecords: Number of total records<br />\n                            </td>\n                            <td>Content to display when there is no value to display.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorright</td>\n                            <td>state: $implicit\n                                state.page: Current page<br />\n                                state.rows: Rows per page<br />\n                                state.first: Index of the first records<br />\n                                state.totalRecords: Number of total records<br />\n                            </td>\n                            <td>Content to display when there is no value to display.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Change Detection</h3>\n            <p>Table may need to be aware of changes in its value in some cases such as reapplying sort. For the sake of performance, this is only done when the reference of the value changes meaning a\n                setter is used instead of ngDoCheck/IterableDiffers which can reduce performance. So when you manipulate the value such as removing or adding an item, instead of using array methods such as push, splice\n                create a new array reference using a spread operator or similar.\n            </p>\n\n            <h3>Sections</h3>\n            <p>Table offers various templates to display additional information about the data such as a caption or summary.</p>\n\n <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;col.header&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/sections']\">live example.</a></p>\n\n            <h3>Column Grouping</h3>\n            <p>Columns can easily be grouped using templating. Let's start with sample data of sales of brands per year.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColGroupDemo implements OnInit &#123;\n\n    sales: any[];\n\n    ngOnInit() &#123;\n        this.sales = [\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"sales\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th rowspan=\"3\"&gt;Brand&lt;/th&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\"&gt;\n        &lt;tr&gt;\n            &lt;td colspan=\"3\"&gt;Totals&lt;/td&gt;\n            &lt;td&gt;$506,202&lt;/td&gt;\n            &lt;td&gt;$531,020&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/colgroup']\">live example.</a></p>\n\n            <h3>Row Grouping</h3>\n            <p>Templating features can also be used to implement row grouping functionality, here is an example implementation that uses a metadata object\n                to keep at what index a group starts and how many items it has.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableRowGroupDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    rowGroupMetadata: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => &#123;\n            this.cars = cars;\n            this.updateRowGroupMetaData();\n        &#125;);\n    &#125;\n\n    onSort() &#123;\n        this.updateRowGroupMetaData();\n    &#125;\n\n    updateRowGroupMetaData() &#123;\n        this.rowGroupMetadata = &#123;&#125;;\n        if (this.cars) &#123;\n            for (let i = 0; i &lt; this.cars.length; i++) &#123;\n                let rowData = this.cars[i];\n                let brand = rowData.brand;\n                if (i == 0) &#123;\n                    this.rowGroupMetadata[brand] = &#123; index: 0, size: 1 &#125;;\n                &#125;\n                else &#123;\n                    let previousRowData = this.cars[i - 1];\n                    let previousRowGroup = previousRowData.brand;\n                    if (brand === previousRowGroup)\n                        this.rowGroupMetadata[brand].size++;\n                    else\n                        this.rowGroupMetadata[brand] = &#123; index: i, size: 1 &#125;;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n\n&#125;\n</code>\n</pre>\n\n            <p>Using this metadata rows can be grouped using a subheader that displays the group. Note that grouped data should be sorted so enable sortField\n            so that table applies sorting before grouping if your data is not sorted.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\n            &lt;td colspan=\"3\"&gt;\n                &lt;span style=\"font-weight:bold\"&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<p>An alternative grouping could be using rowspans for the group field.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\"&gt;\n                &#123;&#123;rowData.brand&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/rowgroup']\">live example.</a></p>\n\n            <h3>Multi Field grouping</h3>\n            <p>Previous example uses a single field to group the rows however nothing limits you to implement multiple field grouping as well. Similarly to single\n                grouping, your data should be sorted first, you may use the built-in multiSorting or provide it sorted to the table and create a rowGroupMetadata\n                for multiple fields.\n            </p>\n\n            <h3>Paginator</h3>\n            <p>Pagination is enabled by setting paginator property to true, rows property defines the number of rows per page and pageLinks specify the the number\n                of page links to display. See <a [routerLink]=\"['/paginator']\">paginator</a> component for more information.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Paginator can also be controlled via model using a binding to the first property where changes trigger a pagination.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [first]=\"first\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTablePageDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    first: number = 0;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n\n    reset() &#123;\n        this.first = 0;\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>Paginator accepts custom content for the left and the right side via named templates.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [first]=\"first\"&gt;\n&lt;ng-template pTemplate=\"header\" let-columns&gt;\n    &lt;tr&gt;\n        &lt;th *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;col.header&#125;&#125;\n        &lt;/th&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n    &lt;tr&gt;\n        &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"paginatorleft\" let-state&gt;\n    &#123;&#123;state.first&#125;&#125;\n    &lt;button type=\"button\" pButton icon=\"fa-refresh\"&gt;&lt;/button&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"paginatorright\"&gt;\n    &lt;button type=\"button\" pButton icon=\"fa-cloud-upload\"&gt;&lt;/button&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Paginator templates gets the paginator state as an implicit variable that provides the following properties</p>\n            <ul>\n                <li>first</li>\n                <li>rows</li>\n                <li>page</li>\n                <li>totalRecords</li>\n            </ul>\n\n            <p>See the <a [routerLink]=\"['/table/page']\">live example.</a></p>\n\n            <h3>Sorting</h3>\n            <p>A column can be made sortable by adding the pSortableColumn directive whose value is the field to sort against and a sort indicator via p-sortIcon component. For dynamic columns,\n                setting pSortableColumnDisabled property as true disables sorting for that particular column.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>Default sorting is executed on a single column, in order to enable multiple field sorting, set sortMode property to \"multiple\" and use metakey\n            when clicking on another column.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" sortMode=\"multiple\"&gt;\n</code>\n</pre>\n\n            <p>In case you'd like to display the table as sorted by default initially on load, use the sortField-sortOrder properties in single mode.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" sortField=\"year\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>In multiple mode, use the multiSortMeta property and bind an array of SortMeta objects.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [multiSortMeta]=\"multiSortMeta\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nthis.multiSortMeta = [];\nthis.multiSortMeta.push(&#123;field: 'year', order: 1&#125;);\nthis.multiSortMeta.push(&#123;field: 'brand', order: -1&#125;);\n</code>\n</pre>\n\n            <p>Instead of using the built-in sorting algorithm a custom sort can be attached by enabling customSort property and defining a sortFunction implementation. This function gets a SortEvent instance\n                that provides the data to sort, sortField, sortOrder and multiSortMeta.\n            </p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class CustomTableSortDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    customSort(event: SortEvent) &#123;\n        //event.data = Data to sort\n        //event.mode = 'single' or 'multiple' sort mode\n        //event.field = Sort field in single sort\n        //event.order = Sort order in single sort\n        //event.multiSortMeta = SortMeta array in multiple sort\n\n        event.data.sort((data1, data2) => &#123;\n            let value1 = data1[event.field];\n            let value2 = data2[event.field];\n            let result = null;\n\n            if (value1 == null && value2 != null)\n                result = -1;\n            else if (value1 != null && value2 == null)\n                result = 1;\n            else if (value1 == null && value2 == null)\n                result = 0;\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\n                result = value1.localeCompare(value2);\n            else\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\n\n            return (event.order * result);\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>For screen reader support of sortable headers, use ariaLabelDesc and ariaLabelAsc properties\n                on p-sortIcon directive.</p>\n\n            <p>See the <a [routerLink]=\"['/table/sort']\">live example.</a></p>\n\n            <h3>Filtering</h3>\n            <p>Filtering is enabled by defining the filter and calling filter method on the local template variable of the table with value, column field and match mode parameters. Available match modes are\n            \"startsWith\", \"contains\", \"endsWith\", \"equals\" and \"in\". Following is an example that utilizes various PrimeNG form components as filters.</p>\n\n            <p>An optional global filter feature is available to search all fields with the same query, to enable this place an input component and call the filterGlobal function with value and match mode properties on your event of choice.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #tt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\n        &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"tt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"tt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n                &lt;div *ngSwitchCase=\"'year'\"&gt;\n                    &#123;&#123;yearFilter&#125;&#125;\n                    &lt;i class=\"fa fa-close\" (click)=\"yearFilter=null;tt.filter(null, col.field, col.filterMatchMode)\"&gt;&lt;/i&gt;\n                    &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"&gt;&lt;/p-slider&gt;\n                &lt;/div&gt;\n                &lt;p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"tt.filter($event.value, col.field, 'equals')\"&gt;&lt;/p-dropdown&gt;\n                &lt;p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"tt.filter($event.value, col.field, 'in')\"&gt;&lt;/p-multiSelect&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableFilterDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    brands: SelectItem[];\n\n    colors: SelectItem[];\n\n    yearFilter: number;\n\n    yearTimeout: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n\n        this.brands = [\n            &#123; label: 'All Brands', value: null &#125;,\n            &#123; label: 'Audi', value: 'Audi' &#125;,\n            &#123; label: 'BMW', value: 'BMW' &#125;,\n            &#123; label: 'Fiat', value: 'Fiat' &#125;,\n            &#123; label: 'Honda', value: 'Honda' &#125;,\n            &#123; label: 'Jaguar', value: 'Jaguar' &#125;,\n            &#123; label: 'Mercedes', value: 'Mercedes' &#125;,\n            &#123; label: 'Renault', value: 'Renault' &#125;,\n            &#123; label: 'VW', value: 'VW' &#125;,\n            &#123; label: 'Volvo', value: 'Volvo' &#125;\n        ];\n\n        this.colors = [\n            &#123; label: 'White', value: 'White' &#125;,\n            &#123; label: 'Green', value: 'Green' &#125;,\n            &#123; label: 'Silver', value: 'Silver' &#125;,\n            &#123; label: 'Black', value: 'Black' &#125;,\n            &#123; label: 'Red', value: 'Red' &#125;,\n            &#123; label: 'Maroon', value: 'Maroon' &#125;,\n            &#123; label: 'Brown', value: 'Brown' &#125;,\n            &#123; label: 'Orange', value: 'Orange' &#125;,\n            &#123; label: 'Blue', value: 'Blue' &#125;\n        ];\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    onYearChange(event, dt) &#123;\n        if (this.yearTimeout) &#123;\n            clearTimeout(this.yearTimeout);\n        &#125;\n\n        this.yearTimeout = setTimeout(() => &#123;\n            tt.filter(event.value, 'year', 'gt');\n        &#125;, 250);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <p>If you have static columns and need to use global filtering, globalFilterFields property must be defined to configure which fields should be used in global filtering. Another\n                use case of this property is to change the fields to utilize in global filtering with dynamic columns.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\" [globalFilterFields]=\"['vin','year']\"&gt;\n    //content\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/filter']\">live example.</a></p>\n\n            <h3>Selection</h3>\n            <p>Table provides built-in single and multiple selection features where selected rows are bound to the selection property and onRowSelect-onRowUnselect events\n            are provided as optional callbacks. In order to enable this feature, define a selectionMode, bind a selection reference and add pSelectableRow directive\n            whose value is the rowData to the rows that can be selected. If you prefer double click use pSelectableRowDblClick directive instead. In both cases optional\n            pSelectableRowIndex property is avaiable to access the row index. By default each row click adds or removes the row from the selection, if you prefer a classic\n            metaKey based selection approach enable metaKeySelection true so that multiple selection or unselection of a row requires metaKey to be pressed. Note that, on touch enabled\n            devices, metaKey based selection is turned off automatically as there is no metaKey in devices such as mobile phones.</p>\n\n            <p>Alternative to the row click, radiobutton or checkbox elements can be used to implement row selection.</p>\n\n            <p>When resolving if a row is selected, by default Table compares selection array with the datasource which may cause a performance issue with huge datasets that do not use pagination.\n                If available the fastest way is to use dataKey property that identifies a unique row so that Table can avoid comparing arrays as internally a map instance is used instead of looping arrays, on the other hand\n                if dataKey cannot be provided consider using compareSelectionBy property as \"equals\" which uses reference comparison instead of the default \"deepEquals\" comparison. Latter is slower since it checks all properties.\n            </p>\n\n            <p>For dynamic columns, setting pSelectableRowDisabled property as true disables selection for that particular row.</p>\n\n            <p>In single mode, selection binding is an object reference.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCar: Car;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <p>In multiple mode, selection binding should be an array. Note that if you require shiftKey based range selection, pass the rowIndex to the SelectableRow directive.</p>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Single selection using a radiobutton can be done by using p-tableRadioButton component.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar\" dataKey=\"vin\"&gt;\n&lt;ng-template pTemplate=\"header\" let-columns&gt;\n    &lt;tr&gt;\n        &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\n        &lt;th *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;col.header&#125;&#125;\n        &lt;/th&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n    &lt;tr [pSelectableRow]=\"rowData\"&gt;\n        &lt;td&gt;\n            &lt;p-tableRadioButton [value]=\"rowData\"&gt;&lt;/p-tableRadioButton&gt;\n        &lt;/td&gt;\n        &lt;td *ngFor=\"let col of columns\"&gt;\n            &#123;&#123;rowData[col.field]&#125;&#125;\n        &lt;/td&gt;\n    &lt;/tr&gt;\n&lt;/ng-template&gt;\n&lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;div style=\"text-align: left\"&gt;\n            Selected Car: &#123;&#123;selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'&#125;&#125;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n                <p>Similarly p-tableCheckbox and p-tableHeaderCheckbox elements are provide to implement checkbox based multiple selection.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\n            &lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td&gt;\n                &lt;p-tableCheckbox [value]=\"rowData\"&gt;&lt;/p-tableCheckbox&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/selection']\">live example.</a></p>\n\n            <h3>ContextMenu</h3>\n            <p>DataTable has exclusive integration with contextmenu component. In order to attach a menu to a datatable, add pContextMenuRow directive to the rows that can be selected with context menu, define a local template\n            variable for the menu and bind it to the contextMenu property of the datatable. This enables displaying the menu whenever a row is right clicked. A separate contextMenuSelection\n            property is used to get a hold of the right clicked row. For dynamic columns, setting pContextMenuRowDisabled property as true disables context menu for that particular row.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(contextMenuSelection)]=\"selectedCar\" [contextMenu]=\"cm\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pContextMenuRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-contextMenu #cm [model]=\"items\"&gt;&lt;/p-contextMenu&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/contextmenu']\">live example.</a></p>\n\n            <h3>Editing</h3>\n            <p>Incell editing is enabled by adding pEditableColumn directive to an editable cell that has a p:cellEditor helper\n                component to defint the input-output templates for the edit and view modes respectively.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.vin\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.vin&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.year&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.brand\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.brand&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        &#123;&#123;rowData.color&#125;&#125;\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>If you require the edited row data and the field at onEditComplete event, bind the data to the pEditableColumn directive and the field to the pEditableColumnField directive</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;td [pEditableColumn]=\"rowData\" [pEditableColumnField]=\"'year'\"&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/editable']\">live example.</a></p>\n\n            <h3>Expandable Rows</h3>\n            <p>Row expansion allows displaying detailed content for a particular row. To use this feature, add a template named rowexpansion and\n                use the pRowToggler directive whose value is the row data instance on an element of your choice whose click event toggles the expansion. This\n            enables providing your custom UI such as buttons, links and so on. Example below uses an anchor with an icon as a toggler. Setting pRowTogglerDisabled as true disables the toggle event for the element.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\n                    &lt;i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"&gt;&lt;/i&gt;\n                &lt;/a&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td [attr.colspan]=\"columns.length + 1\"&gt;\n                &lt;div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\n                    &lt;div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\"&gt;\n                        &lt;img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/&#123;&#123;rowData.brand&#125;&#125;.png\"&gt;\n                    &lt;/div&gt;\n                    &lt;div class=\"ui-g-12 ui-md-9\"&gt;\n                        &lt;div class=\"ui-g\"&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.vin&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Brand:&lt;/b&gt; &#123;&#123;rowData.brand&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Color:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\n                            &lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Multiple rows can be expanded at the same time, if you prefer a single row expansion at any time set rowExpandMode property to \"single\". All rows\n                are collapsed initially and providing expandedRowKeys property whose value is the dataKeys of the rows to be expanded enables rendering these rows as expanded. A dataKey must be defined\n                for this feature.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\" [expandedRowKeys]=\"expandedRows\"&gt;\n   ...\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/rowexpansion']\">live example.</a></p>\n\n            <h3>Column Resize</h3>\n            <p>Columns can be resized using drag drop by setting the resizableColumns to true. There are two resize modes; \"fit\" and \"expand\". Fit is the default one and\n            the overall table width does not change when a column is resized. In \"expand\" mode, table width also changes along with the column width. onColumnResize\n            is a callback that passes the resized column header as a parameter. For dynamic columns, setting pResizableColumnDisabled property as true disables resizing for that particular column.\n            </p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>It is important to note that when you need to change column widths, since table width is 100%, giving fixed pixel widths does not work well as browsers scale them, instead give percentage widths.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:20%\"&gt;Vin&lt;/th&gt;\n            &lt;th style=\"width:30%\"&gt;Year&lt;/th&gt;\n            &lt;th style=\"width:15%\"&gt;Brand&lt;/th&gt;\n            &lt;th style=\"width:35%\"&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p><b>Note:</b> Scrollable tables require a column group to support resizing.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\" [resizableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pResizableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\" class=\"ui-resizable-column\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/colresize']\">live example.</a></p>\n\n            <h3>Column Reordering</h3>\n            <p>Columns can be reordered using drag drop by setting the reorderableColumns to true and adding pReorderableColumn directive to the columns that can be dragged. Note that\n                columns should be dynamic for reordering to work. For dynamic columns, setting pReorderableColumnDisabled property as true disables reordering for that particular column.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/colreorder']\">live example.</a></p>\n\n            <h3>Rows Reordering</h3>\n            <p>Row reordering is enabled by adding pReorderableRow directive with a row index binding to the rows that can be reordered with drag and drop. The optional pReorderableRowDisabled property is available\n                to disable dragging for a particular row. In addition, drag handle should get pReorderableRowHandle directive to specify which element is used to initiate the dragging.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:2em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"&gt;\n        &lt;tr [pReorderableRow]=\"index\"&gt;\n            &lt;td&gt;\n                &lt;i class=\"fa fa-bars\" pReorderableRowHandle&gt;&lt;/i&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/colreorder']\">live example.</a></p>\n\n            <h3>Data Export</h3>\n            <p>Table can export its data in CSV format using exportCSV() method. By default whole data is exported, if you'd like to export only the selection then pass a config object with selectionOnly property as true. Note that\n                columns should be dynamic for export functionality to work and column objects must define field/header properties.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #tt[columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"tt.exportCSV()\" style=\"float:left\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"tt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/export']\">live example.</a></p>\n\n            <h3>Scrolling</h3>\n            <p>DataTable supports both horizontal and vertical scrolling as well as frozen columns and rows. Additionally, virtualScroll mode enables dealing with large datasets by loading data on demand during scrolling.</p>\n\n            <p>Sample below uses vertical scrolling where headers are fixed and data is scrollable.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>In horizontal scrolling on the other hand, it is important to give fixed widths to columns. In general when customizing the column widths of scrollable tables,\n                use colgroup as below to avoid misalignment issues as it will apply both the header,body and footer sections which are different separate elements internally.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <p>Horizontal and Vertical scrolling can be combined as well on the same table.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n        <p>Certain rows can be fixed by using the frozenValue property along with the \"frozenrows\" template.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>Particular columns can be made fixed where others remain scrollable, there are to ways to implement this functionality, either\n                define a frozenColumns property if your frozen columns are dynamic or use frozenbody template. The width of the frozen section also\n                must be defined with frozenWidth property. Templates including header, body and footer apply to the frozen section as well, however\n                if require different content for the frozen section use frozenheader, frozenbody and frozenfooter instead. First example below uses\n                dynamic frozen columns and second one demonstrates how to use frozen templates with column grouping.\n            </p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"frozenheader\"&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:200px;height:84px\"&gt;Brand&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenbody\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>When frozen columns are enabled, frozen and scrollable cells may have content with varying height which leads to misalignment. To avoid a performance hit, Table avoids expensive calculations\n                to align the row heights as it can be easily done with CSS manually.</p>\n<pre>\n<code class=\"language-css\" pCode ngNonBindable>\n.ui-table .ui-table-frozen-view .ui-table-tbody > tr > td,\n.ui-table .ui-table-unfrozen-view .ui-table-tbody > tr > td &#123;\n    height: 24px !important;\n&#125;\n</code>\n</pre>\n\n            <p>Virtual Scrolling is used with lazy loading to fetch data on demand during scrolling. For smooth scrolling twice the amount of rows property is loaded\n                on a lazy load event. In addition, to avoid performance problems row height is not calculated automatically and should be provided using virtualRowHeight\n                property which defaults to 28px, in your row template also assign the height of the row with the same value for smooth scrolling.\n                Note that variable row height is not supported due to the nature of the virtual scrolling behavior.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\" [virtualRowHeight]=\"30\"\n    [virtualScroll]=\"true\" (onLazyLoad)=\"loadDataOnScroll($event)\" [lazy]=\"true\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:30px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>When column widths need to vary or resizable columns is activated, use colgroup template to avoid misalignment issues and apply percentage values since table width is 100%.</p>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" [style.width]=\"col.width\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/scroll']\">live example.</a></p>\n\n            <h3>Lazy Loading</h3>\n            <p>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n             onLazyLoad callback everytime paging, sorting and filtering happens. To implement lazy loading,\n            enable lazy attribute and provide a method callback using onLazyLoad that actually loads the data from a remote datasource. onLazyLoad gets an event object\n            that contains information about how the data should be loaded. It is also important to assign the logical number of rows to totalRecords by doing a projection query for paginator configuration so that paginator\n            displays the UI assuming there are actually records of totalRecords size although in reality they aren't as in lazy mode, only the records that are displayed on the current page exist.</p>\n\n            <pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                 &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nloadData(event: LazyLoadEvent) &#123;\n    //event.first = First row offset\n    //event.rows = Number of rows per page\n    //event.sortField = Field name to sort in single sort mode\n    //event.sortOrder = Sort order as number, 1 for asc and -1 for dec in single sort mode\n    //multiSortMeta: An array of SortMeta objects used in multiple columns sorting. Each SortMeta has field and order properties.\n    //filters: Filters object having field as key and filter value, filter matchMode as value\n    //globalFilter: Value of the global filter if available\n    this.cars = //do a request to a remote datasource using a service and return the cars that match the lazy load criteria\n&#125;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/lazy']\">live example.</a></p>\n\n            <h3>Responsive</h3>\n            <p>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller than a certain breakpoint value. This feature is enabled\n            by setting responsive to true and adding an element whose class name is \"ui-column-title\" to the body cells.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;span class=\"ui-column-title\"&gt;&#123;&#123;col.header&#125;&#125;&lt;/span&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n            <p>See the <a [routerLink]=\"['/table/responsive']\">live example.</a></p>\n\n            <h3>EmptyMessage</h3>\n            <p>When there is no data, emptymessage template can be used to display a message.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"emptymessage\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;td [attr.colspan]=\"columns.length\"&gt;\n                No records found\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <h3>Loading Status</h3>\n            <p>Table has a loading property, when enabled a spinner icon is displayed to indicate data load.\n                An optional loadingIcon property can be passed in case you'd like a different loading icon.</p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\" [loading]=\"loading\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class DataTableDemo implements OnInit &#123;\n\n    loading: boolean;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.loading = true;\n        setTimeout(() => &#123;\n            this.carService.getCarsSmall().then(cars => this.cars = cars);\n            this.loading = false;\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>\n\n            <h3>Styling Certain Rows and Columns</h3>\n            <p>Certain rows and cells can easily be styled using templating features. In example below, the row whose vin property is '123' will get the 'success' style class. Example here\n                paint the background of the last cell using a colgroup and highlights rows whose year is older than 2000.\n            </p>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col&gt;\n            &lt;col&gt;\n            &lt;col&gt;\n            &lt;col style=\"background-color:#FFD54F !important\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [ngClass]=\"rowData.year &gt; 2010 ? 'old-car' : null\"&gt;\n            &lt;td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] &lt; 2000 ? 'very-old-car' : null\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n            <p>See the <a [routerLink]=\"['/table/responsive']\">live example.</a></p>\n\n            <h3>Performance Tips</h3>\n            <ul>\n                <li>When selection is enabled use dataKey to avoid deep checking when comparing objects.</li>\n                <li>Use rowTrackBy to avoid unnecessary dom operations.</li>\n                <li>Prefer lazy loading for large datasets.</li>\n            </ul>\n\n            <h3>Properties</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Type</th>\n                            <th>Default</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>value</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display.</td>\n                        </tr>\n                        <tr>\n                            <td>columns</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to represent dynamic columns.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenColumns</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to represent dynamic columns that are frozen.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenValue</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of objects to display as frozen.</td>\n                        </tr>\n                        <tr>\n                            <td>style</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Inline style of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>styleClass</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Style class of the component.</td>\n                        </tr>\n                        <tr>\n                            <td>paginator</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specified as true, enables the pagination.</td>\n                        </tr>\n                        <tr>\n                            <td>rows</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of rows to display per page.</td>\n                        </tr>\n                        <tr>\n                            <td>first</td>\n                            <td>number</td>\n                            <td>0</td>\n                            <td>Index of the first row to be displayed.</td>\n                        </tr>\n                        <tr>\n                            <td>totalRecords</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of total records, defaults to length of value when not defined.</td>\n                        </tr>\n                        <tr>\n                            <td>pageLinks</td>\n                            <td>number</td>\n                            <td>null</td>\n                            <td>Number of page links to display in paginator.</td>\n                        </tr>\n                        <tr>\n                            <td>rowsPerPageOptions</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Array of integer values to display inside rows per page dropdown of paginator</td>\n                        </tr>\n                        <tr>\n                            <td>alwaysShowPaginator</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Whether to show it even there is only one page.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorPosition</td>\n                            <td>string</td>\n                            <td>bottom</td>\n                            <td>Position of the paginator, options are \"top\",\"bottom\" or \"both\".</td>\n                        </tr>\n                        <tr>\n                            <td>sortMode</td>\n                            <td>string</td>\n                            <td>single</td>\n                            <td>Defines whether sorting works on single column or on multiple columns.</td>\n                        </tr>\n                        <tr>\n                            <td>sortField</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Name of the field to sort data by default.</td>\n                        </tr>\n                        <tr>\n                            <td>sortOrder</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Order to sort when default sorting is enabled.</td>\n                        </tr>\n                        <tr>\n                            <td>multiSortMeta</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of SortMeta objects to sort the data by default in multiple sort mode.</td>\n                        </tr>\n                        <tr>\n                            <td>rowGroupMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Type of the row grouping, valid values are \"subheader\" and \"rowspan\".</td>\n                        </tr>\n                        <tr>\n                            <td>defaultSortOrder</td>\n                            <td>number</td>\n                            <td>1</td>\n                            <td>Sort order to use when an unsorted column gets sorted by user interaction.</td>\n                        </tr>\n                        <tr>\n                            <td>customSort</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether to use the default sorting or a custom one using sortFunction.</td>\n                        </tr>\n                        <tr>\n                            <td>sortFunction</td>\n                            <td>function</td>\n                            <td>null</td>\n                            <td>A function to implement custom sorting, refer to sorting section for details.</td>\n                        </tr>\n                        <tr>\n                            <td>selectionMode</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Specifies the selection mode, valid values are \"single\" and \"multiple\".</td>\n                        </tr>\n                        <tr>\n                            <td>selection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Selected row in single mode or an array of values in multiple mode.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenuSelection</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Selected row with a context menu.</td>\n                        </tr>\n                        <tr>\n                            <td>dataKey</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>A property to uniquely identify a record in data.</td>\n                        </tr>\n                        <tr>\n                            <td>metaKeySelection</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>Defines whether metaKey is should be considered for the selection. On touch enabled devices, metaKeySelection is turned off automatically.</td>\n                        </tr>\n                        <tr>\n                            <td>rowTrackBy</td>\n                            <td>Function</td>\n                            <td>null</td>\n                            <td>Function to optimize the dom operations by delegating to ngForTrackBy, default algoritm checks for object identity.</td>\n                        </tr>\n                        <tr>\n                            <td>lazy</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if data is loaded and interacted with in lazy manner.</td>\n                        </tr>\n                        <tr>\n                            <td>compareSelectionBy</td>\n                            <td>string</td>\n                            <td>deepEquals</td>\n                            <td>Algorithm to define if a row is selected, valid values are \"equals\" that compares by reference and \"deepEquals\" that compares all fields.</td>\n                        </tr>\n                        <tr>\n                            <td>csvSeparator</td>\n                            <td>string</td>\n                            <td>,</td>\n                            <td>Character to use as the csv separator.</td>\n                        </tr>\n                        <tr>\n                            <td>exportFilename</td>\n                            <td>string</td>\n                            <td>download</td>\n                            <td>Name of the exported file.</td>\n                        </tr>\n                        <tr>\n                            <td>filters</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of FilterMetadata objects to provide external filters.</td>\n                        </tr>\n                        <tr>\n                            <td>filterDelay</td>\n                            <td>number</td>\n                            <td>300</td>\n                            <td>Delay in milliseconds before filtering the data.</td>\n                        </tr>\n                        <tr>\n                            <td>globalFilterFields</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>An array of fields as string to use in global filtering.</td>\n                        </tr>\n                        <tr>\n                            <td>expandedRowKeys</td>\n                            <td>array</td>\n                            <td>null</td>\n                            <td>Collection of rows to display as expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>rowExpandMode</td>\n                            <td>string</td>\n                            <td>multiple</td>\n                            <td>Whether multiple rows can be expanded at any time. Valid values are \"multiple\" and \"single\".</td>\n                        </tr>\n                        <tr>\n                            <td>scrollable</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When specifies, enables horizontal and/or vertical scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>scrollHeight</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Height of the scroll viewport in fixed pixels or percentage.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualScroll</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the data should be loaded on demand during scroll.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualScrollDelay</td>\n                            <td>number</td>\n                            <td>500</td>\n                            <td>Delay in virtual scroll before doing a call to lazy load.</td>\n                        </tr>\n                        <tr>\n                            <td>virtualRowHeight</td>\n                            <td>number</td>\n                            <td>28</td>\n                            <td>Height of a row to use in calculations of virtual scrolling.</td>\n                        </tr>\n                        <tr>\n                            <td>frozenWidth</td>\n                            <td>string</td>\n                            <td>null</td>\n                            <td>Width of the frozen columns container.</td>\n                        </tr>\n                        <tr>\n                            <td>responsive</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Defines if the columns should be stacked in smaller screens.</td>\n                        </tr>\n                        <tr>\n                            <td>contextMenu</td>\n                            <td>ContextMenu</td>\n                            <td>null</td>\n                            <td>Local ng-template varilable of a ContextMenu.</td>\n                        </tr>\n                        <tr>\n                            <td>resizableColumns</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, columns can be resized using drag and drop.</td>\n                        </tr>\n                        <tr>\n                            <td>columnResizeMode</td>\n                            <td>string</td>\n                            <td>fit</td>\n                            <td>Defines whether the overall table width should change on column resize, valid values are \"fit\" and \"expand\".</td>\n                        </tr>\n                        <tr>\n                            <td>reorderableColumns</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>When enabled, columns can be reordered using drag and drop.</td>\n                        </tr>\n                        <tr>\n                            <td>loading</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Displays a loader to indicate data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>loadingIcon</td>\n                            <td>string</td>\n                            <td>fa-circle-o-notch</td>\n                            <td>The icon to show while indicating data load is in progress.</td>\n                        </tr>\n                        <tr>\n                            <td>rowHover</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Adds hover effect to rows without the need for selectionMode.</td>\n                        </tr>\n                        <tr>\n                            <td>paginatorDropdownAppendTo</td>\n                            <td>any</td>\n                            <td>null</td>\n                            <td>Target element to attach the paginator dropdown overlay, valid values are \"body\" or a local ng-template variable of another element.</td>\n                        </tr>\n                        <tr>\n                            <td>autoLayout</td>\n                            <td>boolean</td>\n                            <td>false</td>\n                            <td>Whether the cell widths scale according to their content or not.</td>\n                        </tr>\n                        <tr>\n                            <td>resetPageOnSort</td>\n                            <td>boolean</td>\n                            <td>true</td>\n                            <td>When true, resets paginator to first page after sorting.</td>\n                        </tr>\n                        <tr>\n                            <td>exportFunction</td>\n                            <td>function</td>\n                            <td>null</td>\n                            <td>A function to implement custom export. Need to return string value.<br/>\n                                event.data: Field data.<br>\n                                event.field: Column field.\n                            </td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Events</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Parameters</th>\n                        <th>Description</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>onRowSelect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data <br >\n                                event.type: Type of selection, valid values are \"row\", \"radiobutton\" and \"checkbox\"<br>\n                                event.index: Index of the row\n                            </td>\n                            <td>Callback to invoke when a row is selected.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowUnselect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Unselected data <br >\n                                event.type: Type of unselection, valid values are \"row\" and \"checkbox\"</td>\n                            <td>Callback to invoke when a row is unselected with metakey.</td>\n                        </tr>\n                        <tr>\n                            <td>onPage</td>\n                            <td>event.first: Index of first record in page<br>\n                                event.rows: Number of rows on the page</td>\n                            <td>Callback to invoke when pagination occurs.</td>\n                        </tr>\n                        <tr>\n                            <td>onSort</td>\n                            <td>event.field: Field name of the sorted column<br>\n                                event.order: Sort order as 1 or -1<br>\n                                event.multisortmeta: Sort metadata in multi sort mode. See multiple sorting section for the structure of this object.</td>\n                            <td>Callback to invoke when a column gets sorted.</td>\n                        </tr>\n                        <tr>\n                            <td>onFilter</td>\n                            <td>event.filters: Filters object having a field as the property key and an object with value, matchMode as the property value.<br>\n                                event.filteredValue: Filtered data after running the filtering.</td>\n                            <td>Callback to invoke when data is filtered.</td>\n                        </tr>\n                        <tr>\n                            <td>onLazyLoad</td>\n                            <td>event.first = First row offset <br>\n                                event.rows = Number of rows per page <br>\n                                event.sortField = Field name to sort with <br>\n                                event.sortOrder = Sort order as number, 1 for asc and -1 for dec <br>\n                                filters: FilterMetadata object having field as key and filter value, filter matchMode as value</td>\n                            <td>Callback to invoke when paging, sorting or filtering happens in lazy mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowExpand</td>\n                            <td>event.originalEvent: Browser event<br>\n                                data: Row data to expand.</td>\n                            <td>Callback to invoke when a row is expanded.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowCollapse</td>\n                            <td>event.originalEvent: Browser event<br>\n                                data: Row data to collapse.</td>\n                            <td>Callback to invoke when a row is collapsed.</td>\n                        </tr>\n                        <tr>\n                            <td>onContextMenuSelect</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.data: Selected data</td>\n                            <td>Callback to invoke when a row is selected with right click.</td>\n                        </tr>\n                        <tr>\n                            <td>onColResize</td>\n                            <td>event.element: Resized column header <br>\n                                event.delta: Change of width in number of pixels</td>\n                            <td>Callback to invoke when a column is resized.</td>\n                        </tr>\n                        <tr>\n                            <td>onColReorder</td>\n                            <td>event.dragIndex: Index of the dragged column <br>\n                                event.dropIndex: Index of the dropped column <br>\n                                event.columns: Columns array after reorder. <br></td>\n                            <td>Callback to invoke when a column is reordered.</td>\n                        </tr>\n                        <tr>\n                            <td>onRowReorder</td>\n                            <td>event.dragIndex: Index of the dragged row<br>\n                                event.dropIndex: Index of the drop location <br></td>\n                            <td>Callback to invoke when a row is reordered.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditInit</td>\n                            <td>event.column: Column object of the cell<br>\n                                event.data: Row data</td>\n                            <td>Callback to invoke when a cell switches to edit mode.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditComplete</td>\n                            <td>event.column: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.index: Row index</td>\n                            <td>Callback to invoke when cell edit is completed.</td>\n                        </tr>\n                        <tr>\n                            <td>onEditCancel</td>\n                            <td>event.column: Column object of the cell<br>\n                                event.data: Row data <br />\n                                event.index: Row index</td>\n                            <td>Callback to invoke when cell edit is cancelled with escape key.</td>\n                        </tr>\n                        <tr>\n                            <td>onHeaderCheckboxToggle</td>\n                            <td>event.originalEvent: Browser event <br>\n                                event.checked: State of the header checkbox</td>\n                            <td>Callback to invoke when state of header checkbox changes.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Methods</h3>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                        <tr>\n                            <th>Name</th>\n                            <th>Parameters</th>\n                            <th>Description</th>\n                        </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>reset</td>\n                            <td>-</td>\n                            <td>Resets sort, filter and paginator state.</td>\n                        </tr>\n                        <tr>\n                            <td>exportCSV</td>\n                            <td>config?.selectionOnly: Exports only the selection.</td>\n                            <td>Exports the data in csv format.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #tt [value]=\"cars\"&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nupdate(dt: DataTable) &#123;\n    tt.reset();\n&#125;\n</code>\n</pre>\n\n            <h3>Styling</h3>\n            <p>Following is the list of structural style classes, for theming classes visit <a href=\"#\" [routerLink]=\"['/theming']\">theming page</a>.</p>\n            <div class=\"doc-tablewrapper\">\n                <table class=\"doc-table\">\n                    <thead>\n                    <tr>\n                        <th>Name</th>\n                        <th>Element</th>\n                    </tr>\n                    </thead>\n                    <tbody>\n                        <tr>\n                            <td>ui-table</td>\n                            <td>Container element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-datatable-caption</td>\n                            <td>Caption element.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-summary</td>\n                            <td>Section section.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-sortable-column</td>\n                            <td>Sortable column header.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-header</td>\n                            <td>Container of header in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-body</td>\n                            <td>Container of body in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-footer</td>\n                            <td>Container of footer in a scrollable table.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-responsive</td>\n                            <td>Container element of a responsive datatable.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-loading</td>\n                            <td>Loader mask.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-loading-content</td>\n                            <td>Loader content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-wrapper</td>\n                            <td>Loader content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-scrollable-wrapper</td>\n                            <td>Loader content.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-resizer-helper</td>\n                            <td>Vertical resize indicator bar.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-reorder-indicator-top</td>\n                            <td>Top indicator of column reordering.</td>\n                        </tr>\n                        <tr>\n                            <td>ui-table-reorder-indicator-top</td>\n                            <td>Bottom indicator of column reordering.</td>\n                        </tr>\n                    </tbody>\n                </table>\n            </div>\n\n            <h3>Dependencies</h3>\n            <p>None.</p>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"Source\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Basic&lt;/h3&gt;\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-car&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Dynamic Columns&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123;field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n\n</code>\n</pre>\n\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/table/tabledemo.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableDemoModule", function() { return TableDemoModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabledemo__ = __webpack_require__("./src/app/showcase/components/table/tabledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tablepagedemo__ = __webpack_require__("./src/app/showcase/components/table/tablepagedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tablesortdemo__ = __webpack_require__("./src/app/showcase/components/table/tablesortdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__ = __webpack_require__("./src/app/showcase/components/table/tableselectiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__tablefilterdemo__ = __webpack_require__("./src/app/showcase/components/table/tablefilterdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__tablesectionsdemo__ = __webpack_require__("./src/app/showcase/components/table/tablesectionsdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__tablesubmenu__ = __webpack_require__("./src/app/showcase/components/table/tablesubmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__tablestyledemo__ = __webpack_require__("./src/app/showcase/components/table/tablestyledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__tablelazydemo__ = __webpack_require__("./src/app/showcase/components/table/tablelazydemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__tableexportdemo__ = __webpack_require__("./src/app/showcase/components/table/tableexportdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__tabledemo_routing_module__ = __webpack_require__("./src/app/showcase/components/table/tabledemo-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__components_table_table__ = __webpack_require__("./src/app/components/table/table.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_slider_slider__ = __webpack_require__("./src/app/components/slider/slider.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_multiselect_multiselect__ = __webpack_require__("./src/app/components/multiselect/multiselect.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_contextmenu_contextmenu__ = __webpack_require__("./src/app/components/contextmenu/contextmenu.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__components_growl_growl__ = __webpack_require__("./src/app/components/growl/growl.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__components_button_button__ = __webpack_require__("./src/app/components/button/button.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__components_dialog_dialog__ = __webpack_require__("./src/app/components/dialog/dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__components_dropdown_dropdown__ = __webpack_require__("./src/app/components/dropdown/dropdown.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__components_inputtext_inputtext__ = __webpack_require__("./src/app/components/inputtext/inputtext.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__tablecolgroupdemo__ = __webpack_require__("./src/app/showcase/components/table/tablecolgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__tablerowexpansiondemo__ = __webpack_require__("./src/app/showcase/components/table/tablerowexpansiondemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__tablescrolldemo__ = __webpack_require__("./src/app/showcase/components/table/tablescrolldemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__tablecoltoggledemo__ = __webpack_require__("./src/app/showcase/components/table/tablecoltoggledemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__tablecruddemo__ = __webpack_require__("./src/app/showcase/components/table/tablecruddemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__tableresponsivedemo__ = __webpack_require__("./src/app/showcase/components/table/tableresponsivedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__tablecontextmenudemo__ = __webpack_require__("./src/app/showcase/components/table/tablecontextmenudemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__tablecolresizedemo__ = __webpack_require__("./src/app/showcase/components/table/tablecolresizedemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__tablereorderdemo__ = __webpack_require__("./src/app/showcase/components/table/tablereorderdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__tableeditdemo__ = __webpack_require__("./src/app/showcase/components/table/tableeditdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__tablerowgroupdemo__ = __webpack_require__("./src/app/showcase/components/table/tablerowgroupdemo.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_tabview_tabview__ = __webpack_require__("./src/app/components/tabview/tabview.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__components_codehighlighter_codehighlighter__ = __webpack_require__("./src/app/components/codehighlighter/codehighlighter.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




































var TableDemoModule = (function () {
    function TableDemoModule() {
    }
    TableDemoModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_13__tabledemo_routing_module__["a" /* TableDemoRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_14__components_table_table__["a" /* TableModule */],
                __WEBPACK_IMPORTED_MODULE_15__components_slider_slider__["a" /* SliderModule */],
                __WEBPACK_IMPORTED_MODULE_20__components_dialog_dialog__["a" /* DialogModule */],
                __WEBPACK_IMPORTED_MODULE_16__components_multiselect_multiselect__["a" /* MultiSelectModule */],
                __WEBPACK_IMPORTED_MODULE_17__components_contextmenu_contextmenu__["a" /* ContextMenuModule */],
                __WEBPACK_IMPORTED_MODULE_21__components_dropdown_dropdown__["a" /* DropdownModule */],
                __WEBPACK_IMPORTED_MODULE_19__components_button_button__["a" /* ButtonModule */],
                __WEBPACK_IMPORTED_MODULE_18__components_growl_growl__["a" /* GrowlModule */],
                __WEBPACK_IMPORTED_MODULE_22__components_inputtext_inputtext__["a" /* InputTextModule */],
                __WEBPACK_IMPORTED_MODULE_34__components_tabview_tabview__["a" /* TabViewModule */],
                __WEBPACK_IMPORTED_MODULE_35__components_codehighlighter_codehighlighter__["a" /* CodeHighlighterModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__tablesubmenu__["a" /* TableSubmenu */],
                __WEBPACK_IMPORTED_MODULE_3__tabledemo__["a" /* TableDemo */],
                __WEBPACK_IMPORTED_MODULE_4__tablepagedemo__["a" /* TablePageDemo */],
                __WEBPACK_IMPORTED_MODULE_5__tablesortdemo__["a" /* TableSortDemo */],
                __WEBPACK_IMPORTED_MODULE_6__tableselectiondemo__["a" /* TableSelectionDemo */],
                __WEBPACK_IMPORTED_MODULE_8__tablesectionsdemo__["a" /* TableSectionsDemo */],
                __WEBPACK_IMPORTED_MODULE_7__tablefilterdemo__["a" /* TableFilterDemo */],
                __WEBPACK_IMPORTED_MODULE_10__tablestyledemo__["a" /* TableStyleDemo */],
                __WEBPACK_IMPORTED_MODULE_11__tablelazydemo__["a" /* TableLazyDemo */],
                __WEBPACK_IMPORTED_MODULE_12__tableexportdemo__["a" /* TableExportDemo */],
                __WEBPACK_IMPORTED_MODULE_23__tablecolgroupdemo__["a" /* TableColGroupDemo */],
                __WEBPACK_IMPORTED_MODULE_24__tablerowexpansiondemo__["a" /* TableRowExpansionDemo */],
                __WEBPACK_IMPORTED_MODULE_25__tablescrolldemo__["a" /* TableScrollDemo */],
                __WEBPACK_IMPORTED_MODULE_26__tablecoltoggledemo__["a" /* TableColToggleDemo */],
                __WEBPACK_IMPORTED_MODULE_27__tablecruddemo__["a" /* TableCrudDemo */],
                __WEBPACK_IMPORTED_MODULE_28__tableresponsivedemo__["a" /* TableResponsiveDemo */],
                __WEBPACK_IMPORTED_MODULE_29__tablecontextmenudemo__["a" /* TableContextMenuDemo */],
                __WEBPACK_IMPORTED_MODULE_30__tablecolresizedemo__["a" /* TableColResizeDemo */],
                __WEBPACK_IMPORTED_MODULE_31__tablereorderdemo__["a" /* TableReorderDemo */],
                __WEBPACK_IMPORTED_MODULE_32__tableeditdemo__["a" /* TableEditDemo */],
                __WEBPACK_IMPORTED_MODULE_33__tablerowgroupdemo__["a" /* TableRowGroupDemo */]
            ]
        })
    ], TableDemoModule);
    return TableDemoModule;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tabledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableDemo; });
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


var TableDemo = (function () {
    function TableDemo(carService) {
        this.carService = carService;
    }
    TableDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tabledemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableDemo);
    return TableDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tableeditdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Edit</span></span>\n        <span>Incell editing provides a quick and user friendly way to manipulate data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [value]=\"cars\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Brand</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData>\n            <tr>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"rowData.vin\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.vin}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"rowData.year\" required>\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.year}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"rowData.brand\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.brand}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n                <td pEditableColumn>\n                    <p-cellEditor>\n                        <ng-template pTemplate=\"input\">\n                            <input type=\"text\" [(ngModel)]=\"rowData.color\">\n                        </ng-template>\n                        <ng-template pTemplate=\"output\">\n                            {{rowData.color}}\n                        </ng-template>\n                    </p-cellEditor>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tableeditdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableEditDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableeditdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableeditdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData&gt;\n        &lt;tr&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.vin\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        {{rowData.vin}}\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.year\" required&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        {{rowData.year}}\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.brand\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        {{rowData.brand}}\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n            &lt;td pEditableColumn&gt;\n                &lt;p-cellEditor&gt;\n                    &lt;ng-template pTemplate=\"input\"&gt;\n                        &lt;input type=\"text\" [(ngModel)]=\"rowData.color\"&gt;\n                    &lt;/ng-template&gt;\n                    &lt;ng-template pTemplate=\"output\"&gt;\n                        {{rowData.color}}\n                    &lt;/ng-template&gt;\n                &lt;/p-cellEditor&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tableeditdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableEditDemo; });
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


var TableEditDemo = (function () {
    function TableEditDemo(carService) {
        this.carService = carService;
    }
    TableEditDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
    };
    TableEditDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tableeditdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableEditDemo);
    return TableEditDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tableexportdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Export</span></span>\n        <span>DataTable can export its data to CSV format.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\">\n        <ng-template pTemplate=\"caption\">\n            <div class=\"ui-helper-clearfix\">\n                <button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"></button>\n                <button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV({selectionOnly:true})\" style=\"float:right\"></button>\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tableexportdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableexportdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableExportDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    selectedCars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableexportdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableexportdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div class=\"ui-helper-clearfix\"&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-file-o\" iconPos=\"left\" label=\"All Data\" (click)=\"dt.exportCSV()\" style=\"float:left\"&gt;&lt;/button&gt;\n            &lt;button type=\"button\" pButton icon=\"fa-file\" iconPos=\"left\" label=\"Selection Only\" (click)=\"dt.exportCSV(&#123;selectionOnly:true&#125;)\" style=\"float:right\"&gt;&lt;/button&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tableexportdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableExportDemo; });
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


var TableExportDemo = (function () {
    function TableExportDemo(carService) {
        this.carService = carService;
    }
    TableExportDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableExportDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tableexportdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableExportDemo);
    return TableExportDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablefilterdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Filter</span></span>\n        <span>Filtering reduces the data by running a search using column filters and an optional global filter.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation ui-fluid\">\n    <p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"caption\">\n            <div style=\"text-align: right\">\n                <i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"></i>\n                <input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\">\n            </div>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n            <tr>\n                <th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\">\n                    <input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\">\n                    <div *ngSwitchCase=\"'year'\">\n                        Value > {{yearFilter}}\n                        <i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"></i>\n                        <p-slider [style]=\"{'width':'100%','margin-top':'8px'}\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"></p-slider>\n                    </div>\n                    <p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"{'width':'100%'}\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"></p-dropdown>\n                    <p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"></p-multiSelect>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablefilterdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablefilterdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableFilterDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    brands: SelectItem[];\n\n    colors: SelectItem[];\n\n    yearFilter: number;\n\n    yearTimeout: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars = cars);\n\n        this.brands = [\n            &#123; label: 'All Brands', value: null &#125;,\n            &#123; label: 'Audi', value: 'Audi' &#125;,\n            &#123; label: 'BMW', value: 'BMW' &#125;,\n            &#123; label: 'Fiat', value: 'Fiat' &#125;,\n            &#123; label: 'Honda', value: 'Honda' &#125;,\n            &#123; label: 'Jaguar', value: 'Jaguar' &#125;,\n            &#123; label: 'Mercedes', value: 'Mercedes' &#125;,\n            &#123; label: 'Renault', value: 'Renault' &#125;,\n            &#123; label: 'VW', value: 'VW' &#125;,\n            &#123; label: 'Volvo', value: 'Volvo' &#125;\n        ];\n\n        this.colors = [\n            &#123; label: 'White', value: 'White' &#125;,\n            &#123; label: 'Green', value: 'Green' &#125;,\n            &#123; label: 'Silver', value: 'Silver' &#125;,\n            &#123; label: 'Black', value: 'Black' &#125;,\n            &#123; label: 'Red', value: 'Red' &#125;,\n            &#123; label: 'Maroon', value: 'Maroon' &#125;,\n            &#123; label: 'Brown', value: 'Brown' &#125;,\n            &#123; label: 'Orange', value: 'Orange' &#125;,\n            &#123; label: 'Blue', value: 'Blue' &#125;\n        ];\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    onYearChange(event, dt) &#123;\n        if (this.yearTimeout) &#123;\n            clearTimeout(this.yearTimeout);\n        &#125;\n\n        this.yearTimeout = setTimeout(() => &#123;\n            dt.filter(event.value, 'year', 'gt');\n        &#125;, 250);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablefilterdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablefilterdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table #dt [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        &lt;div style=\"text-align: right\"&gt;        \n            &lt;i class=\"fa fa-search\" style=\"margin:4px 4px 0 0\"&gt;&lt;/i&gt;\n            &lt;input type=\"text\" pInputText size=\"50\" placeholder=\"Global Filter\" (input)=\"dt.filterGlobal($event.target.value, 'contains')\" style=\"width:auto\"&gt;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [ngSwitch]=\"col.field\"&gt;\n                &lt;input *ngSwitchCase=\"'vin'\" pInputText type=\"text\" (input)=\"dt.filter($event.target.value, col.field, col.filterMatchMode)\"&gt;\n                &lt;div *ngSwitchCase=\"'year'\"&gt;\n                    Value &lt; &#123;&#123;yearFilter&#125;&#125;\n                    &lt;i class=\"fa fa-close\" (click)=\"yearFilter=null;dt.filter(null, col.field, col.filterMatchMode)\" style=\"cursor:pointer\" *ngIf=\"yearFilter\"&gt;&lt;/i&gt;\n                    &lt;p-slider [style]=\"&#123;'width':'100%','margin-top':'8px'&#125;\" [(ngModel)]=\"yearFilter\" [min]=\"1970\" [max]=\"2010\" (onChange)=\"onYearChange($event, dt)\"&gt;&lt;/p-slider&gt;\n                &lt;/div&gt;\n                &lt;p-dropdown *ngSwitchCase=\"'brand'\" [options]=\"brands\" [style]=\"&#123;'width':'100%'&#125;\" (onChange)=\"dt.filter($event.value, col.field, 'equals')\"&gt;&lt;/p-dropdown&gt;\n                &lt;p-multiSelect *ngSwitchCase=\"'color'\" [options]=\"colors\" defaultLabel=\"All Colors\" (onChange)=\"dt.filter($event.value, col.field, 'in')\"&gt;&lt;/p-multiSelect&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablefilterdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableFilterDemo; });
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


var TableFilterDemo = (function () {
    function TableFilterDemo(carService) {
        this.carService = carService;
    }
    TableFilterDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableFilterDemo.prototype.onYearChange = function (event, dt) {
        if (this.yearTimeout) {
            clearTimeout(this.yearTimeout);
        }
        this.yearTimeout = setTimeout(function () {
            dt.filter(event.value, 'year', 'gt');
        }, 250);
    };
    TableFilterDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablefilterdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableFilterDemo);
    return TableFilterDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablelazydemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Lazy</span></span>\n        <span>Lazy mode is handy to deal with large datasets, instead of loading the entire data, small chunks of data is loaded by invoking\n            onLazyLoad callback everytime paging, sorting and filtering happens. Sample belows imitates lazy paging by using an in memory list.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" \n        [paginator]=\"true\" [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablelazydemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablelazydemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableLazyDemo implements OnInit &#123;\n\n    datasource: Car[];\n\n    cars: Car[];\n\n    totalRecords: number;\n\n    cols: any[];\n\n    loading: boolean;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        //datasource imitation\n        this.carService.getCarsLarge().then(cars => &#123;\n            this.datasource = cars;\n            this.totalRecords = this.datasource.length;\n        &#125;);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.loading = true;\n    &#125;\n\n    loadCarsLazy(event: LazyLoadEvent) &#123;\n        this.loading = true;\n\n        //in a real application, make a remote request to load data using state metadata from event\n        //event.first = First row offset\n        //event.rows = Number of rows per page\n        //event.sortField = Field name to sort with\n        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec\n        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value\n\n        //imitate db connection over a network\n        setTimeout(() => &#123;\n            if (this.datasource) &#123;\n                this.cars = this.datasource.slice(event.first, (event.first + event.rows));\n                this.loading = false;\n            &#125;\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablelazydemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablelazydemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [lazy]=\"true\" (onLazyLoad)=\"loadCarsLazy($event)\" [paginator]=\"true\" \n    [rows]=\"10\" [totalRecords]=\"totalRecords\" [loading]=\"loading\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablelazydemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableLazyDemo; });
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


var TableLazyDemo = (function () {
    function TableLazyDemo(carService) {
        this.carService = carService;
    }
    TableLazyDemo.prototype.ngOnInit = function () {
        var _this = this;
        //datasource imitation
        this.carService.getCarsLarge().then(function (cars) {
            _this.datasource = cars;
            _this.totalRecords = _this.datasource.length;
        });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.loading = true;
    };
    TableLazyDemo.prototype.loadCarsLazy = function (event) {
        var _this = this;
        this.loading = true;
        //in a real application, make a remote request to load data using state metadata from event
        //event.first = First row offset
        //event.rows = Number of rows per page
        //event.sortField = Field name to sort with
        //event.sortOrder = Sort order as number, 1 for asc and -1 for dec
        //filters: FilterMetadata object having field as key and filter value, filter matchMode as value
        //imitate db connection over a network
        setTimeout(function () {
            if (_this.datasource) {
                _this.cars = _this.datasource.slice(event.first, (event.first + event.rows));
                _this.loading = false;
            }
        }, 1000);
    };
    TableLazyDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablelazydemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableLazyDemo);
    return TableLazyDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablepagedemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Page</span></span>\n        <span>Pagination is enabled by setting paginator property to true and defining a rows property to specify the number of rows per page.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablepagedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TablePageDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablepagedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablepagedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [paginator]=\"true\" [rows]=\"10\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablepagedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TablePageDemo; });
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


var TablePageDemo = (function () {
    function TablePageDemo(carService) {
        this.carService = carService;
    }
    TablePageDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TablePageDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablepagedemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TablePageDemo);
    return TablePageDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablereorderdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Reorder</span></span>\n        <span>Order of the columns and rows can be changed using drag and drop.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width:2em\"></th>\n                <th *ngFor=\"let col of columns\" pReorderableColumn>\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\">\n            <tr [pReorderableRow]=\"index\">\n                <td>\n                    <i class=\"fa fa-bars\" pReorderableRowHandle></i>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablecolreorder.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolreorder.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableColReorderDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablecolreorder.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablecolreorder.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [reorderableColumns]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:2em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\" pReorderableColumn&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-index=\"rowIndex\"&gt;\n        &lt;tr [pReorderableRow]=\"index\"&gt;\n            &lt;td&gt;\n                &lt;i class=\"fa fa-bars\" pReorderableRowHandle&gt;&lt;/i&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablereorderdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableReorderDemo; });
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


var TableReorderDemo = (function () {
    function TableReorderDemo(carService) {
        this.carService = carService;
    }
    TableReorderDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableReorderDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablereorderdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableReorderDemo);
    return TableReorderDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tableresponsivedemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Responsive</span></span>\n        <span>Table columns are displayed as stacked in responsive mode if the screen size becomes smaller. In addition certain columns can be hidden\n            based on a priority, note that priority based implementation is not built-in and provided as a demo instead.\n        </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Reflow</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    &#123;&#123;col.header&#125;&#125;\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    <span class=\"ui-column-title\">&#123;&#123;col.header&#125;&#125;</span>\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            There are &#123;&#123;cars?.length&#125;&#125; cars\n        </ng-template>\n    </p-table>\n\n    <h3>Priority</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n                <tr>\n                    <th>Vin</th>\n                    <th class=\"ui-p-4\">Year - p4</th>\n                    <th class=\"ui-p-5\">Brand - p5</th>\n                    <th class=\"ui-p-6\">Color - p6</th>\n                </tr>\n            </ng-template>\n            <ng-template pTemplate=\"body\" let-car>\n                <tr>\n                    <td>&#123;&#123;car.vin&#125;&#125;</td>\n                    <td class=\"ui-p-4\">&#123;&#123;car.year&#125;&#125;</td>\n                    <td class=\"ui-p-5\">&#123;&#123;car.brand&#125;&#125;</td>\n                    <td class=\"ui-p-6\">&#123;&#123;car.color&#125;&#125;</td>\n                </tr>\n            </ng-template>\n        <ng-template pTemplate=\"summary\">\n            There are &#123;&#123;cars?.length&#125;&#125; cars\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tableresponsivedemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableresponsivedemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tableresponsivedemo.html',\n    styles: [`\n        /* Column Priorities */\n        @media only all &#123;\n            th.ui-p-6,\n            td.ui-p-6,\n            th.ui-p-5,\n            td.ui-p-5,\n            th.ui-p-4,\n            td.ui-p-4,\n            th.ui-p-3,\n            td.ui-p-3,\n            th.ui-p-2,\n            td.ui-p-2,\n            th.ui-p-1,\n            td.ui-p-1 &#123;\n                display: none;\n            &#125;\n        &#125;\n        \n        /* Show priority 1 at 320px (20em x 16px) */\n        @media screen and (min-width: 20em) &#123;\n            th.ui-p-1,\n            td.ui-p-1 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 2 at 480px (30em x 16px) */\n        @media screen and (min-width: 30em) &#123;\n            th.ui-p-2,\n            td.ui-p-2 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 3 at 640px (40em x 16px) */\n        @media screen and (min-width: 40em) &#123;\n            th.ui-p-3,\n            td.ui-p-3 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 4 at 800px (50em x 16px) */\n        @media screen and (min-width: 50em) &#123;\n            th.ui-p-4,\n            td.ui-p-4 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 5 at 960px (60em x 16px) */\n        @media screen and (min-width: 60em) &#123;\n            th.ui-p-5,\n            td.ui-p-5 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n        \n        /* Show priority 6 at 1,120px (70em x 16px) */\n        @media screen and (min-width: 70em) &#123;\n            th.ui-p-6,\n            td.ui-p-6 &#123;\n                display: table-cell;\n            &#125;\n        &#125;\n    `]\n    &#125;)\n    export class TableResponsiveDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableresponsivedemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableresponsivedemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>&lt;h3 class=\"first\"&gt;Reflow&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [responsive]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;span class=\"ui-column-title\"&gt;&#123;&#123;col.header&#125;&#125;&lt;/span&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Priority&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n            &lt;tr&gt;\n                &lt;th&gt;Vin&lt;/th&gt;\n                &lt;th class=\"ui-p-4\"&gt;Year&lt;/th&gt;\n                &lt;th class=\"ui-p-5\"&gt;Brand&lt;/th&gt;\n                &lt;th class=\"ui-p-6\"&gt;Color&lt;/th&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n        &lt;ng-template pTemplate=\"body\" let-car&gt;\n            &lt;tr&gt;\n                &lt;td&gt;&#123;&#123;car.vin&#125;&#125;&lt;/td&gt;\n                &lt;td class=\"ui-p-4\"&gt;&#123;&#123;car.year&#125;&#125;&lt;/td&gt;\n                &lt;td class=\"ui-p-5\"&gt;&#123;&#123;car.brand&#125;&#125;&lt;/td&gt;\n                &lt;td class=\"ui-p-6\"&gt;&#123;&#123;car.color&#125;&#125;&lt;/td&gt;\n            &lt;/tr&gt;\n        &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tableresponsivedemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableResponsiveDemo; });
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


var TableResponsiveDemo = (function () {
    function TableResponsiveDemo(carService) {
        this.carService = carService;
    }
    TableResponsiveDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableResponsiveDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tableresponsivedemo.html"),
            styles: ["\n        /* Column Priorities */\n        @media only all {\n            th.ui-p-6,\n            td.ui-p-6,\n            th.ui-p-5,\n            td.ui-p-5,\n            th.ui-p-4,\n            td.ui-p-4,\n            th.ui-p-3,\n            td.ui-p-3,\n            th.ui-p-2,\n            td.ui-p-2,\n            th.ui-p-1,\n            td.ui-p-1 {\n                display: none;\n            }\n        }\n        \n        /* Show priority 1 at 320px (20em x 16px) */\n        @media screen and (min-width: 20em) {\n            th.ui-p-1,\n            td.ui-p-1 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 2 at 480px (30em x 16px) */\n        @media screen and (min-width: 30em) {\n            th.ui-p-2,\n            td.ui-p-2 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 3 at 640px (40em x 16px) */\n        @media screen and (min-width: 40em) {\n            th.ui-p-3,\n            td.ui-p-3 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 4 at 800px (50em x 16px) */\n        @media screen and (min-width: 50em) {\n            th.ui-p-4,\n            td.ui-p-4 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 5 at 960px (60em x 16px) */\n        @media screen and (min-width: 60em) {\n            th.ui-p-5,\n            td.ui-p-5 {\n                display: table-cell;\n            }\n        }\n        \n        /* Show priority 6 at 1,120px (70em x 16px) */\n        @media screen and (min-width: 70em) {\n            th.ui-p-6,\n            td.ui-p-6 {\n                display: table-cell;\n            }\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableResponsiveDemo);
    return TableResponsiveDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablerowexpansiondemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Row Expansion</span></span>\n        <span>Row expansion is used to display additional content about the row data.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 2.25em\"></th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\">\n            <tr>\n                <td>\n                    <a href=\"#\" [pRowToggler]=\"rowData\">\n                        <i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"></i>\n                    </a>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td [attr.colspan]=\"columns.length + 1\">\n                    <div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\">\n                        <div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\">\n                            <img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/{{rowData.brand}}.png\">\n                        </div>\n                        <div class=\"ui-g-12 ui-md-9\">\n                            <div class=\"ui-g\">\n                                <div class=\"ui-g-12\">\n                                    <b>Vin:</b> {{rowData.vin}}\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <b>Year:</b> {{rowData.year}}\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <b>Brand:</b> {{rowData.brand}}\n                                </div>\n                                <div class=\"ui-g-12\">\n                                    <b>Color:</b> {{rowData.color}}\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablerowexpansiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowexpansiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableRowExpansionDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablerowexpansiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowexpansiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-expanded=\"expanded\" let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\n                    &lt;i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"&gt;&lt;/i&gt;\n                &lt;/a&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td [attr.colspan]=\"columns.length + 1\"&gt;\n                &lt;div class=\"ui-g ui-fluid\" style=\"font-size:16px;padding:20px\"&gt;\n                    &lt;div class=\"ui-g-12 ui-md-3\" style=\"text-align:center\"&gt;\n                        &lt;img [attr.alt]=\"rowData.brand\" src=\"assets/showcase/images/demo/car/&#123;&#123;rowData.brand&#125;&#125;.png\"&gt;\n                    &lt;/div&gt;\n                    &lt;div class=\"ui-g-12 ui-md-9\"&gt;\n                        &lt;div class=\"ui-g\"&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Vin:&lt;/b&gt; &#123;&#123;rowData.vin&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Year:&lt;/b&gt; &#123;&#123;rowData.year&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Brand:&lt;/b&gt; &#123;&#123;rowData.brand&#125;&#125;\n                            &lt;/div&gt;\n                            &lt;div class=\"ui-g-12\"&gt;\n                                &lt;b&gt;Color:&lt;/b&gt; &#123;&#123;rowData.color&#125;&#125;\n                            &lt;/div&gt;\n                        &lt;/div&gt;\n                    &lt;/div&gt;\n                &lt;/div&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablerowexpansiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowExpansionDemo; });
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


var TableRowExpansionDemo = (function () {
    function TableRowExpansionDemo(carService) {
        this.carService = carService;
    }
    TableRowExpansionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableRowExpansionDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablerowexpansiondemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableRowExpansionDemo);
    return TableRowExpansionDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablerowgroupdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">RowGroup</span></span>\n        <span>It is easy to implement row grouping using the flexible template driven approach of the p-table. In this example, sorting\n            is enabled by default to sort the data by brand initially and then a rowGroupMetadata object is created to\n            represent how many rows a brand should span along with the rowIndex of the group. Similarly multiple field grouping can be implemented as well.\n        </span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Toggleable Row Groups</h3>\n    <p-table [value]=\"cars\" dataKey=\"brand\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" let-expanded=\"expanded\" let-columns=\"columns\">\n            <tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\">\n                <td colspan=\"3\">\n                    <a href=\"#\" [pRowToggler]=\"rowData\">\n                        <i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"></i>\n                        <span>{{rowData.brand}}</span>\n                    </a>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"rowexpansion\" let-rowData let-rowIndex=\"rowIndex\">\n            <tr>\n                <td>{{rowData.vin}}</td>\n                <td>{{rowData.year}}</td>\n                <td>{{rowData.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Subheader</h3>\n    <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n            <tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\">\n                <td colspan=\"3\">\n                    <span style=\"font-weight:bold\">{{rowData.brand}}</span>\n                </td>\n            </tr>\n            <tr>\n                <td>{{rowData.vin}}</td>\n                <td>{{rowData.year}}</td>\n                <td>{{rowData.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Rowspan</h3>\n    <p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\">\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th>Brand</th>\n                <th>Vin</th>\n                <th>Year</th>\n                <th>Color</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\">\n            <tr>\n                <td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\">\n                    {{rowData.brand}}\n                </td>\n                <td>{{rowData.vin}}</td>\n                <td>{{rowData.year}}</td>\n                <td>{{rowData.color}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablerowgroupdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowgroupdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableRowGroupDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    rowGroupMetadata: any;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => &#123;\n            this.cars = cars;\n            this.updateRowGroupMetaData();\n        &#125;);\n    &#125;\n\n    onSort() &#123;\n        this.updateRowGroupMetaData();\n    &#125;\n\n    updateRowGroupMetaData() &#123;\n        this.rowGroupMetadata = &#123;&#125;;\n        if (this.cars) &#123;\n            for (let i = 0; i &lt; this.cars.length; i++) &#123;\n                let rowData = this.cars[i];\n                let brand = rowData.brand;\n                if (i == 0) &#123;\n                    this.rowGroupMetadata[brand] = &#123; index: 0, size: 1 &#125;;\n                &#125;\n                else &#123;\n                    let previousRowData = this.cars[i - 1];\n                    let previousRowGroup = previousRowData.brand;\n                    if (brand === previousRowGroup)\n                        this.rowGroupMetadata[brand].size++;\n                    else\n                        this.rowGroupMetadata[brand] = &#123; index: i, size: 1 &#125;;\n                &#125;\n            &#125;\n        &#125;\n    &#125;\n\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablerowgroupdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablerowgroupdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Toggleable Row Groups&lt;/h3&gt;\n&lt;p-table [value]=\"cars\" dataKey=\"brand\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\" let-expanded=\"expanded\" let-columns=\"columns\"&gt;\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\n            &lt;td colspan=\"3\"&gt;\n                &lt;a href=\"#\" [pRowToggler]=\"rowData\"&gt;\n                    &lt;i [ngClass]=\"expanded ? 'fa fa-fw fa-chevron-circle-down' : 'fa fa-fw fa-chevron-circle-right'\"&gt;&lt;/i&gt;\n                    &lt;span&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\n                &lt;/a&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"rowexpansion\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n    \n&lt;h3&gt;Subheader&lt;/h3&gt;\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr class=\"ui-widget-header\" *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\"&gt;\n            &lt;td colspan=\"3\"&gt;\n                &lt;span style=\"font-weight:bold\"&gt;&#123;&#123;rowData.brand&#125;&#125;&lt;/span&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Rowspan&lt;/h3&gt;\n&lt;p-table [value]=\"cars\" sortField=\"brand\" sortMode=\"single\" (onSort)=\"onSort()\"&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Brand&lt;/th&gt;\n            &lt;th&gt;Vin&lt;/th&gt;\n            &lt;th&gt;Year&lt;/th&gt;\n            &lt;th&gt;Color&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngIf=\"rowGroupMetadata[rowData.brand].index === rowIndex\" [attr.rowspan]=\"rowGroupMetadata[rowData.brand].size\"&gt;\n                &#123;&#123;rowData.brand&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.vin&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.year&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;rowData.color&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/table/tablerowgroupdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableRowGroupDemo; });
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


var TableRowGroupDemo = (function () {
    function TableRowGroupDemo(carService) {
        this.carService = carService;
    }
    TableRowGroupDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) {
            _this.cars = cars;
            _this.updateRowGroupMetaData();
        });
    };
    TableRowGroupDemo.prototype.onSort = function () {
        this.updateRowGroupMetaData();
    };
    TableRowGroupDemo.prototype.updateRowGroupMetaData = function () {
        this.rowGroupMetadata = {};
        if (this.cars) {
            for (var i = 0; i < this.cars.length; i++) {
                var rowData = this.cars[i];
                var brand = rowData.brand;
                if (i == 0) {
                    this.rowGroupMetadata[brand] = { index: 0, size: 1 };
                }
                else {
                    var previousRowData = this.cars[i - 1];
                    var previousRowGroup = previousRowData.brand;
                    if (brand === previousRowGroup)
                        this.rowGroupMetadata[brand].size++;
                    else
                        this.rowGroupMetadata[brand] = { index: i, size: 1 };
                }
            }
        }
    };
    TableRowGroupDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablerowgroupdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableRowGroupDemo);
    return TableRowGroupDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablescrolldemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Scroll</span></span>\n        <span>Scrolling data is available horizontally, vertically or both. Optional virtual scrolling mode would be handy to deal with large datasets by loading data on demand during scrolling.\n            In additon certain columns and rows can be fixed as well.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Vertical</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Virtual Scroll - 250K Rows</h3>\n    <p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\"\n            [virtualScroll]=\"true\" (onLazyLoad)=\"loadDataOnScroll($event)\" [virtualRowHeight]=\"28\"\n            [lazy]=\"true\" [totalRecords]=\"totalRecords\" [loading]=\"loading\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr style=\"height:28px\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Horizontal</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" [style]=\"{width:'500px'}\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Horizontal and Vertical</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"{width:'500px'}\" scrollHeight=\"200px\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:250px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Rows</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    <b>{{rowData[col.field]}}</b>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Columns</h3>\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:200px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Columns and Frozen Rows</h3>\n    <p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [frozenValue]=\"frozenCars\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\">\n        <ng-template pTemplate=\"colgroup\" let-columns>\n            <colgroup>\n                <col *ngFor=\"let col of columns\" style=\"width:200px\">\n            </colgroup>\n        </ng-template>\n        <ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    <b>{{rowData[col.field]}}</b>\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Frozen Column Groups</h3>\n    <p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\">\n        <ng-template pTemplate=\"frozenheader\">\n            <tr>\n                <th style=\"width:200px;height:84px\">Brand</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"frozenbody\" let-sale>\n            <tr>\n                <td>{{sale.brand}}</td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"header\">\n            <tr>\n                <th colspan=\"4\">Sale Rate</th>\n            </tr>\n            <tr>\n                <th colspan=\"2\">Sales</th>\n                <th colspan=\"2\">Profits</th>\n            </tr>\n            <tr>\n                <th>Last Year</th>\n                <th>This Year</th>\n                <th>Last Year</th>\n                <th>This Year</th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-sale>\n            <tr>\n                <td>{{sale.lastYearSale}}</td>\n                <td>{{sale.thisYearSale}}</td>\n                <td>{{sale.lastYearProfit}}</td>\n                <td>{{sale.thisYearProfit}}</td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablescrolldemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableScrollDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cars3: Car[];\n\n    cars4: Car[];\n\n    cars5: Car[];\n\n    virtualCars: Car[];\n\n    totalRecords: number;\n\n    cols: any[];\n\n    frozenCars: Car[];\n\n    frozenCols: any[];\n\n    scrollableCols: any[];\n\n    sales: any[];\n\n    loading: boolean;\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsMedium().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars3 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars4 = cars);\n        this.carService.getCarsMedium().then(cars => this.cars5 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.scrollableCols = [\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n\n        this.frozenCols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n        ];\n\n        this.frozenCars = [\n            &#123; \"brand\": \"BMW\", \"year\": 2013, \"color\": \"Grey\", \"vin\": \"fh2uf23\" &#125;,\n            &#123; \"brand\": \"Chevrolet\", \"year\": 2011, \"color\": \"Black\", \"vin\": \"4525g23\" &#125;\n        ];\n\n        this.sales = [\n            &#123; brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' &#125;,\n            &#123; brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' &#125;,\n            &#123; brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' &#125;,\n            &#123; brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' &#125;,\n            &#123; brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' &#125;,\n            &#123; brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' &#125;,\n            &#123; brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' &#125;,\n            &#123; brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' &#125;,\n            &#123; brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' &#125;,\n            &#123; brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' &#125;\n        ];\n\n        this.totalRecords = 250000;\n        this.loading = true;\n    &#125;\n\n    loadDataOnScroll(event: LazyLoadEvent) &#123;\n        this.loading = true;\n\n        //for demo purposes keep loading the same dataset\n        //in a real production application, this data should come from server by building the query with LazyLoadEvent options\n        setTimeout(() => &#123;\n            this.virtualCars = [\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 1&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 2&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 3&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 4&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 5&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 6&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 7&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 8&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 9&#125;,\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 10&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 11&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 12&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 13&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 14&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 15&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 16&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 17&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 18&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 19&#125;,\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 20&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 21&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 22&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 23&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 24&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 25&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 26&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 27&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 28&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 29&#125;,\n                &#123;\"brand\": \"VW\", \"year\": 2012, \"color\": \"Orange\", \"vin\": event.first + 30&#125;,\n                &#123;\"brand\": \"Audi\", \"year\": 2011, \"color\": \"Black\", \"vin\": event.first + 31&#125;,\n                &#123;\"brand\": \"Renault\", \"year\": 2005, \"color\": \"Gray\", \"vin\": event.first + 32&#125;,\n                &#123;\"brand\": \"BMW\", \"year\": 2003, \"color\": \"Blue\", \"vin\": event.first + 33&#125;,\n                &#123;\"brand\": \"Mercedes\", \"year\": 1995, \"color\": \"Orange\", \"vin\": event.first + 34&#125;,\n                &#123;\"brand\": \"Volvo\", \"year\": 2005, \"color\": \"Black\", \"vin\": event.first + 35&#125;,\n                &#123;\"brand\": \"Honda\", \"year\": 2012, \"color\": \"Yellow\", \"vin\": event.first + 36&#125;,\n                &#123;\"brand\": \"Jaguar\", \"year\": 2013, \"color\": \"Orange\", \"vin\": event.first + 37&#125;,\n                &#123;\"brand\": \"Ford\", \"year\": 2000, \"color\": \"Black\", \"vin\": event.first + 38&#125;,\n                &#123;\"brand\": \"Fiat\", \"year\": 2013, \"color\": \"Red\", \"vin\": event.first + 39&#125;\n            ];\n\n            this.loading = false;\n        &#125;, 1000);\n    &#125;\n&#125;\n</code>\n</pre>\n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablescrolldemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablescrolldemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Vertical&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Virtual Scroll - 250K Rows&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"virtualCars\" [scrollable]=\"true\" [rows]=\"20\" scrollHeight=\"200px\" [virtualScroll]=\"true\" (onLazyLoad)=\"loadDataOnScroll($event)\"\n    [lazy]=\"true\" [totalRecords]=\"totalRecords\" [virtualRowHeight]=\"28\"  [loading]=\"loading\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr style=\"height:28px\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Horizontal&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Horizontal and Vertical&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" [scrollable]=\"true\" [style]=\"&#123;width:'500px'&#125;\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:250px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Rows&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars4\" [frozenValue]=\"frozenCars\" [scrollable]=\"true\" scrollHeight=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Columns&lt;/h3&gt;\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Columns and Frozen Rows&lt;/h3&gt;\n&lt;p-table [columns]=\"scrollableCols\" [frozenColumns]=\"frozenCols\" [frozenValue]=\"frozenCars\" [value]=\"cars5\" [scrollable]=\"true\" scrollHeight=\"200px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"colgroup\" let-columns&gt;\n        &lt;colgroup&gt;\n            &lt;col *ngFor=\"let col of columns\" style=\"width:200px\"&gt;\n        &lt;/colgroup&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenrows\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &lt;b&gt;&#123;&#123;rowData[col.field]&#125;&#125;&lt;/b&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Frozen Column Groups&lt;/h3&gt;\n&lt;p-table [value]=\"sales\" [scrollable]=\"true\" scrollHeight=\"150px\" frozenWidth=\"200px\"&gt;\n    &lt;ng-template pTemplate=\"frozenheader\"&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width:200px;height:84px\"&gt;Brand&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"frozenbody\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.brand&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\"&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"4\"&gt;Sale Rate&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th colspan=\"2\"&gt;Sales&lt;/th&gt;\n            &lt;th colspan=\"2\"&gt;Profits&lt;/th&gt;\n        &lt;/tr&gt;\n        &lt;tr&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n            &lt;th&gt;Last Year&lt;/th&gt;\n            &lt;th&gt;This Year&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-sale&gt;\n        &lt;tr&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearSale&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.lastYearProfit&#125;&#125;&lt;/td&gt;\n            &lt;td&gt;&#123;&#123;sale.thisYearProfit&#125;&#125;&lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>\n"

/***/ }),

/***/ "./src/app/showcase/components/table/tablescrolldemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableScrollDemo; });
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


var TableScrollDemo = (function () {
    function TableScrollDemo(carService) {
        this.carService = carService;
    }
    TableScrollDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsMedium().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars3 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars4 = cars; });
        this.carService.getCarsMedium().then(function (cars) { return _this.cars5 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.scrollableCols = [
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
        this.frozenCols = [
            { field: 'vin', header: 'Vin' },
        ];
        this.frozenCars = [
            { "brand": "BMW", "year": 2013, "color": "Grey", "vin": "fh2uf23" },
            { "brand": "Chevrolet", "year": 2011, "color": "Black", "vin": "4525g23" }
        ];
        this.sales = [
            { brand: 'Apple', lastYearSale: '51%', thisYearSale: '40%', lastYearProfit: '$54,406.00', thisYearProfit: '$43,342' },
            { brand: 'Samsung', lastYearSale: '83%', thisYearSale: '96%', lastYearProfit: '$423,132', thisYearProfit: '$312,122' },
            { brand: 'Microsoft', lastYearSale: '38%', thisYearSale: '5%', lastYearProfit: '$12,321', thisYearProfit: '$8,500' },
            { brand: 'Philips', lastYearSale: '49%', thisYearSale: '22%', lastYearProfit: '$745,232', thisYearProfit: '$650,323,' },
            { brand: 'Song', lastYearSale: '17%', thisYearSale: '79%', lastYearProfit: '$643,242', thisYearProfit: '500,332' },
            { brand: 'LG', lastYearSale: '52%', thisYearSale: ' 65%', lastYearProfit: '$421,132', thisYearProfit: '$150,005' },
            { brand: 'Sharp', lastYearSale: '82%', thisYearSale: '12%', lastYearProfit: '$131,211', thisYearProfit: '$100,214' },
            { brand: 'Panasonic', lastYearSale: '44%', thisYearSale: '45%', lastYearProfit: '$66,442', thisYearProfit: '$53,322' },
            { brand: 'HTC', lastYearSale: '90%', thisYearSale: '56%', lastYearProfit: '$765,442', thisYearProfit: '$296,232' },
            { brand: 'Toshiba', lastYearSale: '75%', thisYearSale: '54%', lastYearProfit: '$21,212', thisYearProfit: '$12,533' }
        ];
        this.totalRecords = 250000;
        this.loading = true;
    };
    TableScrollDemo.prototype.loadDataOnScroll = function (event) {
        var _this = this;
        this.loading = true;
        //for demo purposes keep loading the same dataset 
        //in a real production application, this data should come from server by building the query with LazyLoadEvent options 
        setTimeout(function () {
            _this.virtualCars = [
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 1 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 2 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 3 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 4 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 5 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 6 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 7 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 8 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 9 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 10 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 11 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 12 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 13 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 14 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 15 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 16 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 17 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 18 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 19 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 20 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 21 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 22 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 23 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 24 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 25 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 26 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 27 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 28 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 29 },
                { "brand": "VW", "year": 2012, "color": "Orange", "vin": event.first + 30 },
                { "brand": "Audi", "year": 2011, "color": "Black", "vin": event.first + 31 },
                { "brand": "Renault", "year": 2005, "color": "Gray", "vin": event.first + 32 },
                { "brand": "BMW", "year": 2003, "color": "Blue", "vin": event.first + 33 },
                { "brand": "Mercedes", "year": 1995, "color": "Orange", "vin": event.first + 34 },
                { "brand": "Volvo", "year": 2005, "color": "Black", "vin": event.first + 35 },
                { "brand": "Honda", "year": 2012, "color": "Yellow", "vin": event.first + 36 },
                { "brand": "Jaguar", "year": 2013, "color": "Orange", "vin": event.first + 37 },
                { "brand": "Ford", "year": 2000, "color": "Black", "vin": event.first + 38 },
                { "brand": "Fiat", "year": 2013, "color": "Red", "vin": event.first + 39 }
            ];
            _this.loading = false;
        }, 1000);
    };
    TableScrollDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablescrolldemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableScrollDemo);
    return TableScrollDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablesectionsdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Sections</span></span>\n        <span>Table provides templates to customize the content of various sections such as caption and summary.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"caption\">\n            List of Cars\n        </ng-template>\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"footer\" let-columns>\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            There are {{cars?.length}} cars\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablesectionsdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesectionsdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableSectionsDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablesectionsdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesectionsdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"caption\"&gt;\n        List of Cars\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"footer\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        There are &#123;&#123;cars?.length&#125;&#125; cars\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablesectionsdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSectionsDemo; });
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


var TableSectionsDemo = (function () {
    function TableSectionsDemo(carService) {
        this.carService = carService;
    }
    TableSectionsDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableSectionsDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablesectionsdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableSectionsDemo);
    return TableSectionsDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tableselectiondemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Selection</span></span>\n        <span>Single or Multiple rows can be selected depending on the selectionMode property.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-growl [(value)]=\"msgs\"></p-growl>\n\n    <h3 class=\"first\">Single Row Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <div style=\"text-align: left\">\n                Selected Car: {{selectedCar1 ? selectedCar1.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'}}\n            </div>\n        </ng-template>\n    </p-table>\n\n    <h3>Multiple Row Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\n            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <ul>\n                <li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\">\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\n                </li>\n            </ul>\n        </ng-template>\n    </p-table>\n\n    <h3>Multiple Row Selection with MetaKey</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars2\" [metaKeySelection]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\">\n            <tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <ul>\n                <li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\">\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\n                </li>\n            </ul>\n        </ng-template>\n    </p-table>\n\n    <h3>Column Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n                <th style=\"width:3em\"></th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n                <td>\n                    <button pButton icon=\"fa-search\" (click)=\"selectCarWithButton(rowData)\"></button>\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Events</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"\n        (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>RadioButton</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar4\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 2.25em\"></th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td>\n                    <p-tableRadioButton [value]=\"rowData\"></p-tableRadioButton>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n                <div style=\"text-align: left\">\n                    Selected Car: {{selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'}}\n                </div>\n            </ng-template>\n    </p-table>\n\n    <h3>Checkbox Selection</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th style=\"width: 2.25em\">\n                    <p-tableHeaderCheckbox></p-tableHeaderCheckbox>\n                </th>\n                <th *ngFor=\"let col of columns\">\n                    {{col.header}}\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [pSelectableRow]=\"rowData\">\n                <td>\n                    <p-tableCheckbox [value]=\"rowData\"></p-tableCheckbox>\n                </td>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]}}\n                </td>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"summary\">\n            <ul>\n                <li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\">\n                    {{car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color}}\n                </li>\n            </ul>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tableselectiondemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableSelectionDemo implements OnInit &#123;\n\n    msgs: Message[] = [];\n\n    cars: Car[];\n\n    cols: any[];\n\n    selectedCar1: Car;\n\n    selectedCar2: Car;\n\n    selectedCar3: Car;\n\n    selectedCar4: Car;\n\n    selectedCars1: Car[];\n\n    selectedCars2: Car[];\n\n    selectedCars3: Car[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    selectCarWithButton(car: Car) &#123;\n        this.selectedCar2 = car;\n        this.msgs = [&#123;severity:'info', summary:'Car Selected', detail:'Vin: ' + car.vin&#125;];\n    &#125;\n\n    onRowSelect(event) &#123;\n        this.msgs = [&#123;severity:'info', summary:'Car Selected', detail:'Vin: ' + event.data.vin&#125;];\n    &#125;\n\n    onRowUnselect(event) &#123;\n        this.msgs = [&#123;severity:'info', summary:'Car Unselected', detail:'Vin: ' + event.data.vin&#125;];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tableselectiondemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tableselectiondemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-growl [(value)]=\"msgs\"&gt;&lt;/p-growl&gt;\n\n&lt;h3 class=\"first\"&gt;Single Row Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar1\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;div style=\"text-align: left\"&gt;\n            Selected Car: &#123;&#123;selectedCar1 ? selectedCar.vin + ' - ' + selectedCar1.brand + ' - ' + selectedCar1.year + ' - ' + selectedCar1.color: 'none'&#125;&#125;\n        &lt;/div&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Multiple Row Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars1\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars1\" style=\"text-align: left\"&gt;\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Multiple Row Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"multiple\" [(selection)]=\"selectedCars2\" [metaKeySelection]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\" let-rowIndex=\"rowIndex\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\" [pSelectableRowIndex]=\"rowIndex\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars2\" style=\"text-align: left\"&gt;\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Column Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n            &lt;th style=\"width:3em\"&gt;&lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n            &lt;td&gt;\n                &lt;button pButton icon=\"fa-search\" (click)=\"selectCarWithButton(rowData)\"&gt;&lt;/button&gt;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Events&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" selectionMode=\"single\" [(selection)]=\"selectedCar3\" dataKey=\"vin\"\n    (onRowSelect)=\"onRowSelect($event)\" (onRowUnselect)=\"onRowUnselect($event)\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;RadioButton&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCar4\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;&lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td&gt;\n                &lt;p-tableRadioButton [value]=\"rowData\"&gt;&lt;/p-tableRadioButton&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n            &lt;div style=\"text-align: left\"&gt;\n                Selected Car: &#123;&#123;selectedCar4 ? selectedCar4.vin + ' - ' + selectedCar4.brand + ' - ' + selectedCar4.year + ' - ' + selectedCar4.color: 'none'&#125;&#125;\n            &lt;/div&gt;\n        &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Checkbox Selection&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars\" [(selection)]=\"selectedCars3\" dataKey=\"vin\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th style=\"width: 2.25em\"&gt;\n                &lt;p-tableHeaderCheckbox&gt;&lt;/p-tableHeaderCheckbox&gt;\n            &lt;/th&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [pSelectableRow]=\"rowData\"&gt;\n            &lt;td&gt;\n                &lt;p-tableCheckbox [value]=\"rowData\"&gt;&lt;/p-tableCheckbox&gt;\n            &lt;/td&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"summary\"&gt;\n        &lt;ul&gt;\n            &lt;li *ngFor=\"let car of selectedCars3\" style=\"text-align: left\"&gt;\n                &#123;&#123;car.vin + ' - ' + car.brand + ' - ' + car.year + ' - ' + car.color&#125;&#125;\n            &lt;/li&gt;\n        &lt;/ul&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tableselectiondemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSelectionDemo; });
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


var TableSelectionDemo = (function () {
    function TableSelectionDemo(carService) {
        this.carService = carService;
        this.msgs = [];
    }
    TableSelectionDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableSelectionDemo.prototype.selectCarWithButton = function (car) {
        this.selectedCar2 = car;
        this.msgs = [{ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + car.vin }];
    };
    TableSelectionDemo.prototype.onRowSelect = function (event) {
        this.msgs = [{ severity: 'info', summary: 'Car Selected', detail: 'Vin: ' + event.data.vin }];
    };
    TableSelectionDemo.prototype.onRowUnselect = function (event) {
        this.msgs = [{ severity: 'info', summary: 'Car Unselected', detail: 'Vin: ' + event.data.vin }];
    };
    TableSelectionDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tableselectiondemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableSelectionDemo);
    return TableSelectionDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablesortdemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Sort</span></span>\n        <span>Table supports both single column and multiple column sorting.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <h3 class=\"first\">Single Sort</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars1\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Multi Sort with MetaKey</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars2\" sortMode=\"multiple\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n\n    <h3>Custom Sort</h3>\n    <p-table [columns]=\"cols\" [value]=\"cars3\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\">\n                    {{col.header}}\n                    <p-sortIcon [field]=\"col.field\"></p-sortIcon>\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr>\n                <td *ngFor=\"let col of columns\">\n                    {{rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablesortdemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesortdemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\nexport class TableSortDemo implements OnInit &#123;\n\n    cars1: Car[];\n\n    cars2: Car[];\n\n    cars3: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars1 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars2 = cars);\n        this.carService.getCarsSmall().then(cars => this.cars3 = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n\n    customSort(event: SortEvent) &#123;\n        event.data.sort((data1, data2) => &#123;\n            let value1 = data1[event.field];\n            let value2 = data2[event.field];\n            let result = null;\n\n            if (value1 == null && value2 != null)\n                result = -1;\n            else if (value1 != null && value2 == null)\n                result = 1;\n            else if (value1 == null && value2 == null)\n                result = 0;\n            else if (typeof value1 === 'string' && typeof value2 === 'string')\n                result = value1.localeCompare(value2);\n            else\n                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;\n\n            return (event.order * result);\n        &#125;);\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablesortdemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablesortdemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;h3 class=\"first\"&gt;Single Sort&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars1\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Multi Sort with MetaKey&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars2\" sortMode=\"multiple\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n\n&lt;h3&gt;Custom Sort&lt;/h3&gt;\n&lt;p-table [columns]=\"cols\" [value]=\"cars3\" (sortFunction)=\"customSort($event)\" [customSort]=\"true\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\" [pSortableColumn]=\"col.field\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n                &lt;p-sortIcon [field]=\"col.field\"&gt;&lt;/p-sortIcon&gt;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr&gt;\n            &lt;td *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablesortdemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSortDemo; });
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


var TableSortDemo = (function () {
    function TableSortDemo(carService) {
        this.carService = carService;
    }
    TableSortDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars1 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars2 = cars; });
        this.carService.getCarsSmall().then(function (cars) { return _this.cars3 = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableSortDemo.prototype.customSort = function (event) {
        event.data.sort(function (data1, data2) {
            var value1 = data1[event.field];
            var value2 = data2[event.field];
            var result = null;
            if (value1 == null && value2 != null)
                result = -1;
            else if (value1 != null && value2 == null)
                result = 1;
            else if (value1 == null && value2 == null)
                result = 0;
            else if (typeof value1 === 'string' && typeof value2 === 'string')
                result = value1.localeCompare(value2);
            else
                result = (value1 < value2) ? -1 : (value1 > value2) ? 1 : 0;
            return (event.order * result);
        });
    };
    TableSortDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablesortdemo.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableSortDemo);
    return TableSortDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablestyledemo.html":
/***/ (function(module, exports) {

module.exports = "<table-submenu></table-submenu>\n\n<div class=\"content-section introduction\">\n    <div>\n        <span class=\"feature-title\">Table - <span class=\"subitem\">Style</span></span>\n        <span>Certain rows or cell can easily be styled based on conditions.</span>\n    </div>\n</div>\n\n<div class=\"content-section implementation\">\n    <p-table [columns]=\"cols\" [value]=\"cars\">\n        <ng-template pTemplate=\"header\" let-columns>\n            <tr>\n                <th *ngFor=\"let col of columns\">\n                    &#123;&#123;col.header&#125;&#125;\n                </th>\n            </tr>\n        </ng-template>\n        <ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\">\n            <tr [ngClass]=\"rowData.year > 2010 ? 'new-car' : null\">\n                <td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] <= 2010 ? 'old-car' : null\">\n                    &#123;&#123;rowData[col.field]&#125;&#125;\n                </td>\n            </tr>\n        </ng-template>\n    </p-table>\n</div>\n\n<div class=\"content-section documentation\">\n    <p-tabView effect=\"fade\">\n        <p-tabPanel header=\"tablestyledemo.ts\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestyledemo.ts\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-typescript\" pCode ngNonBindable>\n@Component(&#123;\n    templateUrl: './tablestyledemo.html',\n    styles: [`\n        .old-car &#123;\n            background-color: #1CA979 !important;\n            color: #ffffff !important;\n        &#125;\n\n        .very-old-car &#123;\n            background-color: #2CA8B1 !important;\n            color: #ffffff !important;\n        &#125;\n    `\n    ]\n&#125;)\nexport class TableStyleDemo implements OnInit &#123;\n\n    cars: Car[];\n\n    cols: any[];\n\n    constructor(private carService: CarService) &#123; &#125;\n\n    ngOnInit() &#123;\n        this.carService.getCarsSmall().then(cars => this.cars = cars);\n\n        this.cols = [\n            &#123; field: 'vin', header: 'Vin' &#125;,\n            &#123; field: 'year', header: 'Year' &#125;,\n            &#123; field: 'brand', header: 'Brand' &#125;,\n            &#123; field: 'color', header: 'Color' &#125;\n        ];\n    &#125;\n&#125;\n</code>\n</pre>   \n        </p-tabPanel>\n\n        <p-tabPanel header=\"tablestyledemo.html\">\n            <a href=\"https://github.com/primefaces/primeng/tree/master/src/app/showcase/components/table/tablestyledemo.html\" class=\"btn-viewsource\" target=\"_blank\">\n                <i class=\"fa fa-github\"></i>\n                <span>View on GitHub</span>\n            </a>\n<pre>\n<code class=\"language-markup\" pCode ngNonBindable>\n&lt;p-table [columns]=\"cols\" [value]=\"cars\"&gt;\n    &lt;ng-template pTemplate=\"header\" let-columns&gt;\n        &lt;tr&gt;\n            &lt;th *ngFor=\"let col of columns\"&gt;\n                &#123;&#123;col.header&#125;&#125;\n            &lt;/th&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n    &lt;ng-template pTemplate=\"body\" let-rowData let-columns=\"columns\"&gt;\n        &lt;tr [ngClass]=\"rowData.year &gt; 2010 ? 'new-car' : null\"&gt;\n            &lt;td *ngFor=\"let col of columns\" [ngClass]=\"rowData[col.field] &lt;= 2010 ? 'old-car' : null\"&gt;\n                &#123;&#123;rowData[col.field]&#125;&#125;\n            &lt;/td&gt;\n        &lt;/tr&gt;\n    &lt;/ng-template&gt;\n&lt;/p-table&gt;\n</code>\n</pre>\n        </p-tabPanel>\n    </p-tabView>\n</div>"

/***/ }),

/***/ "./src/app/showcase/components/table/tablestyledemo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableStyleDemo; });
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


var TableStyleDemo = (function () {
    function TableStyleDemo(carService) {
        this.carService = carService;
    }
    TableStyleDemo.prototype.ngOnInit = function () {
        var _this = this;
        this.carService.getCarsSmall().then(function (cars) { return _this.cars = cars; });
        this.cols = [
            { field: 'vin', header: 'Vin' },
            { field: 'year', header: 'Year' },
            { field: 'brand', header: 'Brand' },
            { field: 'color', header: 'Color' }
        ];
    };
    TableStyleDemo = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            template: __webpack_require__("./src/app/showcase/components/table/tablestyledemo.html"),
            styles: ["\n        .new-car {\n            background-color: #1CA979 !important;\n            color: #ffffff !important;\n        }\n\n        .old-car {\n            background-color: #2CA8B1 !important;\n            color: #ffffff !important;\n        }\n    "
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__service_carservice__["a" /* CarService */]])
    ], TableStyleDemo);
    return TableStyleDemo;
}());



/***/ }),

/***/ "./src/app/showcase/components/table/tablesubmenu.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TableSubmenu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var TableSubmenu = (function () {
    function TableSubmenu() {
    }
    TableSubmenu = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'table-submenu',
            template: "\n        <div class=\"content-section content-submenu ui-helper-clearfix\">\n            <ul>\n                <li><a [routerLink]=\"['/table']\">&#9679; Documentation</a></li>\n                <li><a [routerLink]=\"['/table/sections']\">&#9679; Sections</a></li>\n                <li><a [routerLink]=\"['/table/page']\">&#9679; Page</a></li>\n                <li><a [routerLink]=\"['/table/sort']\">&#9679; Sort</a></li>\n                <li><a [routerLink]=\"['/table/selection']\">&#9679; Selection</a></li>\n                <li><a [routerLink]=\"['/table/filter']\">&#9679; Filter</a></li>\n                <li><a [routerLink]=\"['/table/colgroup']\">&#9679; ColGroup</a></li>\n                <li><a [routerLink]=\"['/table/lazy']\">&#9679; Lazy</a></li>\n                <li><a [routerLink]=\"['/table/edit']\">&#9679; Edit</a></li>\n                <li><a [routerLink]=\"['/table/scroll']\">&#9679; Scroll</a></li>\n                <li><a [routerLink]=\"['/table/rowexpansion']\">&#9679; RowExpand</a></li>\n                <li><a [routerLink]=\"['/table/rowgroup']\">&#9679; RowGroup</a></li>\n                <li><a [routerLink]=\"['/table/colresize']\">&#9679; Resize</a></li>\n                <li><a [routerLink]=\"['/table/reorder']\">&#9679; Reorder</a></li>\n                <li><a [routerLink]=\"['/table/coltoggle']\">&#9679; Toggle</a></li>\n                <li><a [routerLink]=\"['/table/style']\">&#9679; Style</a></li>\n                <li><a [routerLink]=\"['/table/export']\">&#9679; Export</a></li>\n                <li><a [routerLink]=\"['/table/contextmenu']\">&#9679; ContextMenu</a></li>\n                <li><a [routerLink]=\"['/table/responsive']\">&#9679; Responsive</a></li>\n                <li><a [routerLink]=\"['/table/crud']\">&#9679; Crud</a></li>\n            </ul>\n        </div>\n    "
        })
    ], TableSubmenu);
    return TableSubmenu;
}());



/***/ })

});
//# sourceMappingURL=tabledemo.module.chunk.js.map