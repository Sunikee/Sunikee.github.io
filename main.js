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

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<div class=\"container-fluid\">\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col\"></div>\r\n    <div class=\"col-12\">\r\n      <div class=\"navbar navbar-dark bg-dark\">\r\n        <span class=\"navbar-brand\">\r\n          Initiative Tracker\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"col\"></div>\r\n  </div>\r\n  <div class=\"row mt-3\">\r\n    <div class=\"col-1\"></div>\r\n    <div class=\"col-5\">\r\n      <app-initiative-controls></app-initiative-controls>\r\n    </div>\r\n    <div class=\"col-5\">\r\n      <app-initiative-tracker></app-initiative-tracker>\r\n    </div>\r\n    <div class=\"col-1\"></div>\r\n  </div>\r\n</div>"

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

module.exports = "<div class=\"row\">\r\n  <button class=\"col btn btn-primary btn mr-2\" (click)=\"next()\">Next</button>\r\n  <button class=\"col btn btn-secondary btn mr-2\" (click)=\"last()\">Last</button>\r\n  <button class=\"col btn btn-danger btn\" (click)=\"clear()\">Clear</button>\r\n</div>\r\n<div class=\"row mt-3\">\r\n  <div class=\"col\">\r\n    <form class=\"input-group\" #c=\"ngForm\" (ngSubmit)=\"add(c)\">\r\n      <input type=\"text\" aria-label=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" ngModel>\r\n      <input type=\"text\" name=\"initiative\" placeholder=\"Initiative\" class=\"form-control\" ngModel>\r\n      <select class=\"custom-select\" ngModel name=\"type\">\r\n        <option *ngFor=\"let type of types()\" [ngValue]=\"type\">{{type}}</option>\r\n      </select>\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary\" id=\"button-addon2\">Add</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n<div class=\"row mt-3\">\r\n  <div class=\"col\">\r\n    Presets\r\n    <form class=\"input-group\" #ps=\"ngForm\" (ngSubmit)=\"addPreset(ps)\">\r\n      <input type=\"text\" aria-label=\"name\" name=\"name\" placeholder=\"Name\" class=\"form-control\" ngModel>\r\n      <select class=\"custom-select\" ngModel name=\"type\">\r\n        <option *ngFor=\"let type of types()\" [ngValue]=\"type\">{{type}}</option>\r\n      </select>\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary\" id=\"button-addon2\">Add</button>\r\n      </div>\r\n    </form>\r\n    <form class=\"input-group mt-1\" #f=\"ngForm\" (ngSubmit)=\"add(f)\" *ngFor=\"let character of characterPresets\">\r\n      <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"character.name\" readonly>\r\n      <input type=\"text\" name=\"type\" class=\"form-control\" [(ngModel)]=\"character.type\" readonly>\r\n      <input type=\"text\" name=\"initiative\" placeholder=\"Initiative\" class=\"form-control\" ngModel>\r\n      <div class=\"input-group-append\">\r\n        <button class=\"btn btn-outline-secondary\" id=\"button-addon2\">Add</button>\r\n        <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"removePreset(character)\">Remove</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

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
/* harmony import */ var _models_character_preset__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/character-preset */ "./src/app/models/character-preset.ts");
/* harmony import */ var _services_character_preset_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/character-preset.service */ "./src/app/services/character-preset.service.ts");







var InitiativeControlsComponent = /** @class */ (function () {
    function InitiativeControlsComponent(initiativeService, characterPresetService) {
        this.initiativeService = initiativeService;
        this.characterPresetService = characterPresetService;
        this.name = "";
        this.initiative = 0;
        this.type = _enums_character_types_enum__WEBPACK_IMPORTED_MODULE_3__["CharacterTypes"].Player;
    }
    InitiativeControlsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.characterPresetService.get().subscribe(function (v) {
            _this.characterPresets = v;
        });
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
    InitiativeControlsComponent.prototype.add = function (f) {
        var initiative = new _models_initiative__WEBPACK_IMPORTED_MODULE_4__["Initiative"]();
        initiative.name = f.value.name;
        initiative.initiative = Number(f.value.initiative);
        initiative.type = f.value.type;
        this.initiativeService.addInitiative(initiative);
    };
    InitiativeControlsComponent.prototype.addPreset = function (f) {
        var character = new _models_character_preset__WEBPACK_IMPORTED_MODULE_5__["CharacterPreset"]();
        character.name = f.value.name;
        character.type = f.value.type;
        this.characterPresetService.add(character);
    };
    InitiativeControlsComponent.prototype.removePreset = function (character) {
        this.characterPresetService.remove(character);
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_intitiative_service__WEBPACK_IMPORTED_MODULE_2__["IntitiativeService"], _services_character_preset_service__WEBPACK_IMPORTED_MODULE_6__["CharacterPresetService"]])
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

module.exports = "<div class=\"container-fluid\" *ngFor=\"let intiative of initiatives\">\r\n  <div *ngIf=\"isPlayer(intiative.type)\" class=\"alert alert-primary alert-dismissible\">\r\n    <span>{{intiative.name}}</span>    \r\n    <button type=\"button\" class=\"close float-right ml-5\" (click)=\"remove(intiative)\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <span class=\"float-right\">{{intiative.initiative}}</span>\r\n  </div>\r\n  <div *ngIf=\"isEnemy(intiative.type)\" class=\"alert alert-danger alert-dismissible\">\r\n    <span>{{intiative.name}}</span>\r\n    <button type=\"button\" class=\"close float-right ml-5\" (click)=\"remove(intiative)\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <span class=\"float-right\">{{intiative.initiative}}</span>\r\n  </div>\r\n  <div *ngIf=\"isNpc(intiative.type)\" class=\"alert alert-info alert-dismissible\">\r\n    <span>{{intiative.name}}</span>\r\n    <button type=\"button\" class=\"close float-right ml-5\" (click)=\"remove(intiative)\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button>\r\n    <span class=\"float-right\">{{intiative.initiative}}</span>\r\n  </div>\r\n</div>"

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
    InitiativeTrackerComponent.prototype.remove = function (initiative) {
        this.initiativeService.remove(initiative);
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

/***/ "./src/app/models/character-preset.ts":
/*!********************************************!*\
  !*** ./src/app/models/character-preset.ts ***!
  \********************************************/
/*! exports provided: CharacterPreset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterPreset", function() { return CharacterPreset; });
var CharacterPreset = /** @class */ (function () {
    function CharacterPreset() {
    }
    return CharacterPreset;
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

/***/ "./src/app/services/character-preset.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/character-preset.service.ts ***!
  \******************************************************/
/*! exports provided: CharacterPresetService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterPresetService", function() { return CharacterPresetService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var CharacterPresetService = /** @class */ (function () {
    function CharacterPresetService() {
        this.characterPresets = [];
        var temp = JSON.parse(localStorage.getItem('presets'));
        if (temp != null) {
            for (var i = 0; i < temp.length; ++i) {
                this.characterPresets.push(temp[i]);
            }
        }
    }
    CharacterPresetService.prototype.get = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.characterPresets);
    };
    CharacterPresetService.prototype.add = function (character) {
        this.characterPresets.push(character);
        localStorage.setItem('presets', JSON.stringify(this.characterPresets));
        console.log(JSON.stringify(this.characterPresets));
    };
    CharacterPresetService.prototype.remove = function (character) {
        var index = this.characterPresets.indexOf(character);
        this.characterPresets.splice(index, 1);
        localStorage.setItem('presets', JSON.stringify(this.characterPresets));
    };
    CharacterPresetService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CharacterPresetService);
    return CharacterPresetService;
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
    IntitiativeService.prototype.remove = function (initiative) {
        var index = this.initiatives.indexOf(initiative);
        this.initiatives.splice(index, 1);
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

module.exports = __webpack_require__(/*! C:\Projects\GitHub\InitiativeKeeper\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map