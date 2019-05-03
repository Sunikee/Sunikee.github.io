(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"container-fluid\">\n  <div class=\"row mt-3\">\n    <div class=\"col-1\"></div>\n    <div class=\"col-5\">\n      <app-initiative-controls></app-initiative-controls>\n    </div>\n    <div class=\"col-5\">\n      <app-initiative-tracker></app-initiative-tracker>\n    </div>\n    <div class=\"col-1\"></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.sass":
/*!************************************!*\
  !*** ./src/app/app.component.sass ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'InitiativeKeeper';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.sass */ "./src/app/app.component.sass")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _initiative_tracker_initiative_tracker_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./initiative-tracker/initiative-tracker.component */ "./src/app/initiative-tracker/initiative-tracker.component.ts");
/* harmony import */ var _initiative_controls_initiative_controls_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./initiative-controls/initiative-controls.component */ "./src/app/initiative-controls/initiative-controls.component.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _initiative_tracker_initiative_tracker_component__WEBPACK_IMPORTED_MODULE_5__["InitiativeTrackerComponent"],
                _initiative_controls_initiative_controls_component__WEBPACK_IMPORTED_MODULE_6__["InitiativeControlsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/enums/character-types.enum.ts":
/*!***********************************************!*\
  !*** ./src/app/enums/character-types.enum.ts ***!
  \***********************************************/
/*! exports provided: CharacterTypes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterTypes", function() { return CharacterTypes; });
var CharacterTypes;
(function (CharacterTypes) {
    CharacterTypes["Player"] = "Player";
    CharacterTypes["Npc"] = "Npc";
    CharacterTypes["Enemy"] = "Enemy";
})(CharacterTypes || (CharacterTypes = {}));


/***/ }),

/***/ "./src/app/initiative-controls/initiative-controls.component.html":
/*!************************************************************************!*\
  !*** ./src/app/initiative-controls/initiative-controls.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <button class=\"col btn btn-primary btn mr-2\" (click)=\"next()\">Next</button>\n  <button class=\"col btn btn-secondary btn mr-2\" (click)=\"last()\">Last</button>\n  <button class=\"col btn btn-danger btn\" (click)=\"clear()\">Clear</button>\n</div>\n<div class=\"row mt-3\">\n  <div class=\"col\">\n    <div class=\"input-group\">\n      <input type=\"text\" aria-label=\"name\" placeholder=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n      <input type=\"text\" aria-label=\"initiative\" placeholder=\"Initiative\" class=\"form-control\" [(ngModel)]=\"initiative\">\n      <select class=\"custom-select\" [(ngModel)]=\"type\">\n        <option *ngFor=\"let type of types()\" [ngValue]=\"type\">{{type}}</option>\n      </select>\n      <div class=\"input-group-append\">\n        <button class=\"btn btn-outline-secondary\" type=\"button\" id=\"button-addon2\" (click)=\"add()\">Add</button>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/initiative-controls/initiative-controls.component.sass":
/*!************************************************************************!*\
  !*** ./src/app/initiative-controls/initiative-controls.component.sass ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaXRpYXRpdmUtY29udHJvbHMvaW5pdGlhdGl2ZS1jb250cm9scy5jb21wb25lbnQuc2FzcyJ9 */"

/***/ }),

/***/ "./src/app/initiative-controls/initiative-controls.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/initiative-controls/initiative-controls.component.ts ***!
  \**********************************************************************/
/*! exports provided: InitiativeControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiativeControlsComponent", function() { return InitiativeControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_intitiative_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/intitiative.service */ "./src/app/services/intitiative.service.ts");
/* harmony import */ var _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../enums/character-types.enum */ "./src/app/enums/character-types.enum.ts");
/* harmony import */ var _models_initiative__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/initiative */ "./src/app/models/initiative.ts");





var InitiativeControlsComponent = /** @class */ (function () {
    function InitiativeControlsComponent(initiativeService) {
        this.initiativeService = initiativeService;
        this.name = "";
        this.initiative = 0;
        this.type = _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_3__["CharacterTypes"].Player;
    }
    InitiativeControlsComponent.prototype.ngOnInit = function () {
    };
    InitiativeControlsComponent.prototype.next = function () {
        this.initiativeService.nextInitiative();
    };
    InitiativeControlsComponent.prototype.last = function () {
        this.initiativeService.lastInitiative();
    };
    InitiativeControlsComponent.prototype.clear = function () {
        this.initiativeService.clear();
    };
    InitiativeControlsComponent.prototype.add = function () {
        var initiative = new _models_initiative__WEBPACK_IMPORTED_MODULE_4__["Initiative"]();
        initiative.name = this.name;
        initiative.initiative = this.initiative;
        initiative.type = this.type;
        this.initiativeService.addInitiative(initiative);
    };
    InitiativeControlsComponent.prototype.types = function () {
        return Object.keys(_enums_character_types_enum__WEBPACK_IMPORTED_MODULE_3__["CharacterTypes"]);
    };
    InitiativeControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initiative-controls',
            template: __webpack_require__(/*! ./initiative-controls.component.html */ "./src/app/initiative-controls/initiative-controls.component.html"),
            styles: [__webpack_require__(/*! ./initiative-controls.component.sass */ "./src/app/initiative-controls/initiative-controls.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_intitiative_service__WEBPACK_IMPORTED_MODULE_2__["IntitiativeService"]])
    ], InitiativeControlsComponent);
    return InitiativeControlsComponent;
}());



/***/ }),

/***/ "./src/app/initiative-tracker/initiative-tracker.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/initiative-tracker/initiative-tracker.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\" *ngFor=\"let intiative of initiatives\">\n  <div *ngIf=\"isPlayer(intiative.type)\" class=\"alert alert-primary\"><span>{{intiative.name}}</span><span class=\"float-right\">{{intiative.initiative}}</span></div>\n  <div *ngIf=\"isEnemy(intiative.type)\" class=\"alert alert-danger\"><span>{{intiative.name}}</span><span class=\"float-right\">{{intiative.initiative}}</span></div>\n  <div *ngIf=\"isNpc(intiative.type)\" class=\"alert alert-info\"><span>{{intiative.name}}</span><span class=\"float-right\">{{intiative.initiative}}</span></div>\n</div>"

/***/ }),

/***/ "./src/app/initiative-tracker/initiative-tracker.component.sass":
/*!**********************************************************************!*\
  !*** ./src/app/initiative-tracker/initiative-tracker.component.sass ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaXRpYXRpdmUtdHJhY2tlci9pbml0aWF0aXZlLXRyYWNrZXIuY29tcG9uZW50LnNhc3MifQ== */"

/***/ }),

/***/ "./src/app/initiative-tracker/initiative-tracker.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/initiative-tracker/initiative-tracker.component.ts ***!
  \********************************************************************/
/*! exports provided: InitiativeTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitiativeTrackerComponent", function() { return InitiativeTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/character-types.enum */ "./src/app/enums/character-types.enum.ts");
/* harmony import */ var _services_intitiative_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/intitiative.service */ "./src/app/services/intitiative.service.ts");




var InitiativeTrackerComponent = /** @class */ (function () {
    function InitiativeTrackerComponent(initiativeService) {
        this.initiativeService = initiativeService;
        this.initiatives = [];
    }
    InitiativeTrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        var test = this.initiativeService.getInitiatives();
        test.subscribe(function (result) {
            _this.initiatives = result;
        });
    };
    InitiativeTrackerComponent.prototype.isPlayer = function (type) {
        return type == _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterTypes"].Player;
    };
    InitiativeTrackerComponent.prototype.isEnemy = function (type) {
        return type == _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterTypes"].Enemy;
    };
    InitiativeTrackerComponent.prototype.isNpc = function (type) {
        return type == _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_2__["CharacterTypes"].Npc;
    };
    InitiativeTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-initiative-tracker',
            template: __webpack_require__(/*! ./initiative-tracker.component.html */ "./src/app/initiative-tracker/initiative-tracker.component.html"),
            styles: [__webpack_require__(/*! ./initiative-tracker.component.sass */ "./src/app/initiative-tracker/initiative-tracker.component.sass")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_intitiative_service__WEBPACK_IMPORTED_MODULE_3__["IntitiativeService"]])
    ], InitiativeTrackerComponent);
    return InitiativeTrackerComponent;
}());



/***/ }),

/***/ "./src/app/models/initiative.ts":
/*!**************************************!*\
  !*** ./src/app/models/initiative.ts ***!
  \**************************************/
/*! exports provided: Initiative */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Initiative", function() { return Initiative; });
var Initiative = /** @class */ (function () {
    function Initiative() {
    }
    return Initiative;
}());



/***/ }),

/***/ "./src/app/services/intitiative.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/intitiative.service.ts ***!
  \*************************************************/
/*! exports provided: IntitiativeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntitiativeService", function() { return IntitiativeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var IntitiativeService = /** @class */ (function () {
    function IntitiativeService() {
        this.initiatives = [];
    }
    IntitiativeService.prototype.nextInitiative = function () {
        if (this.initiatives.length == 0)
            return;
        this.initiatives.push(this.initiatives.shift());
    };
    IntitiativeService.prototype.lastInitiative = function () {
        if (this.initiatives.length == 0)
            return;
        this.initiatives.unshift(this.initiatives.pop());
    };
    IntitiativeService.prototype.addInitiative = function (initiative) {
        var _this = this;
        var index = 0;
        for (index = 0; index < this.initiatives.length; ++index) {
            if (initiative.initiative > this.initiatives[index].initiative) {
                break;
            }
        }
        var temp = this.initiatives.splice(index, this.initiatives.length - index);
        this.initiatives.push(initiative);
        temp.forEach(function (v) {
            _this.initiatives.push(v);
        });
    };
    IntitiativeService.prototype.sort = function () {
        this.initiatives.sort(function (a, b) {
            if (a.initiative < b.initiative)
                return 1;
            if (a.initiative > b.initiative)
                return -1;
            return 0;
        });
    };
    IntitiativeService.prototype.getInitiatives = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.initiatives);
    };
    IntitiativeService.prototype.clear = function () {
        this.initiatives.splice(0, this.initiatives.length);
    };
    IntitiativeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], IntitiativeService);
    return IntitiativeService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\GitProjects\InitiativeKeeper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map