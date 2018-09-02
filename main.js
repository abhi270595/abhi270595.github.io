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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about-us/about-us.component.css":
/*!*************************************************!*\
  !*** ./src/app/about-us/about-us.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-image-carousel></app-image-carousel>\n"

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent() {
    }
    AboutUsComponent.prototype.ngOnInit = function () {
    };
    AboutUsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html"),
            styles: [__webpack_require__(/*! ./about-us.component.css */ "./src/app/about-us/about-us.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./book-online/book-online.component */ "./src/app/book-online/book-online.component.ts");
/* harmony import */ var _tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tournament-detail/tournament-detail.component */ "./src/app/tournament-detail/tournament-detail.component.ts");
/* harmony import */ var _latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./latest-news/latest-news.component */ "./src/app/latest-news/latest-news.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'book', component: _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_3__["BookOnlineComponent"] },
    { path: 'book/:tournamentId', component: _tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_4__["TournamentDetailComponent"] },
    { path: 'news', component: _latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_5__["LatestNewsComponent"] },
    { path: 'about', component: _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_6__["AboutUsComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* HEADER */\n\n.before-header {\n  padding-top: 1rem;\n}\n\n.logo-text {\n  margin-left: 7rem;\n  margin-top: -4rem;\n}\n\n.logo {\n  height: 3rem;\n}\n\n.search-box {\n  margin-top: 1rem;\n}\n\nmat-form-field {\n  width: 90%;\n}\n\n.topnav {\n  overflow: hidden;\n  background-color: #ECAEF4;\n}\n\n.topnav a {\n  float: left;\n  display: block;\n  text-align: center;\n  padding: 1rem;\n  text-decoration: none;\n  font-size: 17px;\n}\n\n.topnav .navigation-image {\n  padding: 6px 1rem 0 16%;\n}\n\n.topnav a:hover {\n  color: black;\n}\n\n.topnav .icon {\n  display: none;\n}\n\n/* MENU ICON */\n\n.bar1,\n.bar2,\n.bar3 {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n\n.change .bar1 {\n  -webkit-transform: rotate(-45deg) translate(-9px, 6px);\n  transform: rotate(-45deg) translate(-9px, 6px);\n}\n\n.change .bar2 {\n  opacity: 0;\n}\n\n.change .bar3 {\n  -webkit-transform: rotate(45deg) translate(-8px, -8px);\n  transform: rotate(45deg) translate(-8px, -8px);\n}\n\n/* MENU ICON */\n\n@media screen and (max-width: 600px) {\n  .topnav a:not(:first-child) {\n    display: none;\n  }\n  .topnav a.icon {\n    float: right;\n    display: block;\n  }\n  .topnav a {\n    padding: 1rem\n  }\n}\n\n@media screen and (max-width: 768px) {\n  .topnav a {\n    padding: 2rem 1rem 1rem;\n  }\n  .topnav .navigation-image {\n    padding: 1rem;\n  }\n}\n\n@media screen and (max-width: 600px) {\n  .topnav.responsive {\n    position: relative;\n  }\n  .topnav.responsive .icon {\n    position: absolute;\n    right: 0;\n    top: 0;\n  }\n  .topnav.responsive a {\n    float: none;\n    display: block;\n    text-align: left;\n  }\n}\n\n/* HEADER */\n\nmain {\n  min-height: 87vh;\n}\n\nfooter {\n  height: 3rem;\n  bottom: 0;\n  left: 0;\n  text-align: center;\n}\n\nfooter p {\n  padding-top: 1rem;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Header -->\n<!-- <div class=\"container\">\n  <div class=\"row before-header\">\n    <div class=\"col m6 s12\">\n      <img src=\"../assets/images/logo.png\" class=\"logo\" />\n      <h4 class=\"logo-text\">ValiumHub</h4>\n    </div>\n    <div class=\"col m6 s12 search-box\">\n      <mat-form-field>\n        <input matInput type=\"text\" placeholder=\"Search\" [(ngModel)]=\"value\" />\n        <button mat-button *ngIf=\"value\" matSuffix mat-icon-button aria-label=\"Clear\" (click)=\"value=''\">\n          <mat-icon>close</mat-icon>\n        </button>\n      </mat-form-field>\n    </div>\n  </div>\n</div> -->\n\n<div class=\"topnav\" id=\"myTopnav\">\n  <a class=\"navigation-image\" routerLink=\"/home\">\n    <img src=\"../assets/images/logo.png\" class=\"logo\" />\n  </a>\n  <a routerLink=\"/home\">ValiumHub</a>\n  <a routerLink=\"/home\">Home</a>\n  <a routerLink=\"/book\">Book Online</a>\n  <a routerLink=\"/news\">Latest News</a>\n  <a routerLink=\"/about\">About Us</a>\n  <a routerLink=\"/contact\">Contact</a>\n  <a href=\"javascript:void(0);\" id=\"icon\" class=\"icon\" (click)=\"mangeNavBar()\">\n    <div class=\"bar1\"></div>\n    <div class=\"bar2\"></div>\n    <div class=\"bar3\"></div>\n  </a>\n</div>\n\n<main>\n  <router-outlet></router-outlet>\n</main>\n\n<footer>\n  <mat-divider></mat-divider>\n  <p>© 2018 by ValiumHub</p>\n</footer>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ValiumHub';
    }
    AppComponent.prototype.mangeNavBar = function () {
        var element1 = document.getElementById('myTopnav');
        var element2 = document.getElementById('icon');
        element2.classList.toggle('change');
        if (element1.className === 'topnav') {
            element1.className += ' responsive';
        }
        else {
            element1.className = 'topnav';
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material.module */ "./src/app/material.module.ts");
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./book-online/book-online.component */ "./src/app/book-online/book-online.component.ts");
/* harmony import */ var _latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./latest-news/latest-news.component */ "./src/app/latest-news/latest-news.component.ts");
/* harmony import */ var _tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./tournament-detail/tournament-detail.component */ "./src/app/tournament-detail/tournament-detail.component.ts");
/* harmony import */ var _group_by_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./group-by.pipe */ "./src/app/group-by.pipe.ts");
/* harmony import */ var _image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./image-carousel/image-carousel.component */ "./src/app/image-carousel/image-carousel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"],
                _about_us_about_us_component__WEBPACK_IMPORTED_MODULE_13__["AboutUsComponent"],
                _book_online_book_online_component__WEBPACK_IMPORTED_MODULE_14__["BookOnlineComponent"],
                _latest_news_latest_news_component__WEBPACK_IMPORTED_MODULE_15__["LatestNewsComponent"],
                _tournament_detail_tournament_detail_component__WEBPACK_IMPORTED_MODULE_16__["TournamentDetailComponent"],
                _group_by_pipe__WEBPACK_IMPORTED_MODULE_17__["GroupByPipe"],
                _image_carousel_image_carousel_component__WEBPACK_IMPORTED_MODULE_18__["ImageCarouselComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_6__["LayoutModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
                // and returns simulated server responses.
                // Remove it when a real server is ready to receive requests.
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_8__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_9__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_10__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/book-online/book-online.component.css":
/*!*******************************************************!*\
  !*** ./src/app/book-online/book-online.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  .tab-content .row{\n    padding: 2rem;\n  }\n"

/***/ }),

/***/ "./src/app/book-online/book-online.component.html":
/*!********************************************************!*\
  !*** ./src/app/book-online/book-online.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <mat-card>\n    <mat-card-content>\n      <mat-tab-group class=\"tab-group\">\n        <mat-tab *ngFor=\"let tournamentGroup of allTournaments | groupBy : 'gameName'\" label={{tournamentGroup.key}}>\n          <div class=\"tab-content\">\n            <div class=\"row\" *ngFor=\"let tournament of tournamentGroup.value\">\n              <div class=\"col m2 s3\">\n                <div class=\"tournament-logo\">\n                  <img src=\"{{tournament.imageUrl}}\" alt=\"Tournament Image\">\n                </div>\n              </div>\n              <div class=\"col m7 s5\">\n                <p>{{tournament.gameName}}</p>\n                <p>{{tournament.tournamentName}}</p>\n              </div>\n              <div class=\"col m3 s3\">\n                <button mat-raised-button color=\"primary\" routerLink=\"/book/{{tournament.tournamentId}}\">Book Now</button>\n              </div>\n            </div>\n          </div>\n        </mat-tab>\n      </mat-tab-group>\n    </mat-card-content>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/book-online/book-online.component.ts":
/*!******************************************************!*\
  !*** ./src/app/book-online/book-online.component.ts ***!
  \******************************************************/
/*! exports provided: BookOnlineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookOnlineComponent", function() { return BookOnlineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookOnlineComponent = /** @class */ (function () {
    function BookOnlineComponent(httpService) {
        this.httpService = httpService;
        this.allTournaments = [];
    }
    BookOnlineComponent.prototype.ngOnInit = function () {
        this.getListOfTournaments();
    };
    BookOnlineComponent.prototype.getListOfTournaments = function () {
        var _this = this;
        this.httpService.getTournaments().subscribe(function (tournaments) { return _this.allTournaments = tournaments; });
    };
    BookOnlineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-book-online',
            template: __webpack_require__(/*! ./book-online.component.html */ "./src/app/book-online/book-online.component.html"),
            styles: [__webpack_require__(/*! ./book-online.component.css */ "./src/app/book-online/book-online.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"]])
    ], BookOnlineComponent);
    return BookOnlineComponent;
}());



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contact-us {\n  min-height: 80vh;\n  /* background-color: #35117B; */\n  /* color: white;  */\n}\n\n.example-container>* {\n  width: 100%;\n}\n\n.contact-image img {\n  padding: 1rem;\n  height: 100%;\n  width: 100%;\n}\n"

/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact-us\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col s6 contact-image\">\n        <img src=\"../../assets/images/contact.png\" alt=\"contact us\">\n      </div>\n\n      <div class=\"col s6\">\n        <div class=\"example-container\">\n          <h3>Send us a Note</h3>\n          \n          <mat-form-field>\n            <input matInput placeholder=\"Name\" required>\n            <mat-error *ngIf=\"name.invalid\">{{getErrorMessageName()}}</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <input matInput placeholder=\"Email\" [formControl]=\"email\" required>\n            <mat-error *ngIf=\"email.invalid\">{{getErrorMessageEmail()}}</mat-error>\n          </mat-form-field>\n\n          <mat-form-field>\n            <textarea matInput placeholder=\"Subject\"></textarea>\n          </mat-form-field>\n\n          <mat-form-field>\n            <textarea matInput placeholder=\"Content\"></textarea>\n          </mat-form-field>\n\n          <button mat-button color=\"accent\">Submit</button>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
        this.email = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]);
        this.name = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]);
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent.prototype.getErrorMessageEmail = function () {
        return this.email.hasError('required') ? 'You must enter your email' :
            this.email.hasError('email') ? 'Not a valid email' :
                '';
    };
    ContactComponent.prototype.getErrorMessageName = function () {
        return this.name.hasError('required') ? 'You must enter your name' : '';
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/group-by.pipe.ts":
/*!**********************************!*\
  !*** ./src/app/group-by.pipe.ts ***!
  \**********************************/
/*! exports provided: GroupByPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GroupByPipe", function() { return GroupByPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GroupByPipe = /** @class */ (function () {
    function GroupByPipe() {
    }
    GroupByPipe.prototype.transform = function (collection, property) {
        // prevents the application from breaking if the array of objects doesn't exist yet
        if (!collection) {
            return null;
        }
        var groupedCollection = collection.reduce(function (previous, current) {
            if (!previous[current[property]]) {
                previous[current[property]] = [current];
            }
            else {
                previous[current[property]].push(current);
            }
            return previous;
        }, {});
        // this will return an array of objects, each object containing a group of objects
        return Object.keys(groupedCollection).map(function (key) { return ({ key: key, value: groupedCollection[key] }); });
    };
    GroupByPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'groupBy'
        })
    ], GroupByPipe);
    return GroupByPipe;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-content {\n    height: 75vh;\n    background-attachment: fixed;\n    background-size: cover;\n    background-position: top;\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  \n  .center-box {\n    -webkit-animation-name: moveInBottom;\n            animation-name: moveInBottom;\n    -webkit-animation-duration: 1s;\n            animation-duration: 1s;\n    -webkit-animation-timing-function: ease-out;\n            animation-timing-function: ease-out;\n    text-align: center;\n  }\n  \n  .text-big {\n      text-transform: uppercase;\n      font-weight: 700;\n      font-size: 5rem;\n      color: #B649DD;\n  }\n  \n  .download-button {\n    border-radius: 25px;\n    background-color: #B878D5;\n    padding: 0 1.5rem;\n  }\n  \n  .home {\n    background-image: url('background3.jpg');\n  }\n  \n  .text {\n      color: white;\n  }"

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content home\">\n  <div class=\"center-box\">\n    <h1 class=\"text-big\">CHECK US OUT</h1>\n    <h6 class=\"text\">We are also available on Android playstore.</h6>\n    <button class=\"download-button\" mat-raised-button color=\"accent\" onclick=\"window.open('https://play.google.com/store/apps')\">Download Now</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/http-service.service.ts":
/*!*****************************************!*\
  !*** ./src/app/http-service.service.ts ***!
  \*****************************************/
/*! exports provided: HttpServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpServiceService", function() { return HttpServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var HttpServiceService = /** @class */ (function () {
    function HttpServiceService(http) {
        this.http = http;
        this.apiUrlNotification = 'api/notifications'; // URL to web api
        this.apiUrlTournament = 'api/tournaments';
        this.apiUrlTournamentDetail = 'api/tournamentDetail'; // URL to web api
    }
    /** GET Notifications from the server */
    HttpServiceService.prototype.getNotifications = function () {
        return this.http.get(this.apiUrlNotification)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getNotifications', [])));
    };
    /** GET Tournaments from the server */
    HttpServiceService.prototype.getTournaments = function () {
        return this.http.get(this.apiUrlTournament)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('getTournaments', [])));
    };
    /** GET Tournament by id */
    HttpServiceService.prototype.getTournament = function (id) {
        // const url = `${this.apiUrlTournament}/${id}`;
        return this.http.get(this.apiUrlTournamentDetail).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError("getTournament id=" + id)));
    };
    /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
    HttpServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(result);
        };
    };
    HttpServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpServiceService);
    return HttpServiceService;
}());



/***/ }),

/***/ "./src/app/image-carousel/image-carousel.component.css":
/*!*************************************************************!*\
  !*** ./src/app/image-carousel/image-carousel.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mySlides {\n  display: none\n}\n\n.mySlides img {\n  width: 100%;\n  height: 75vh;\n}\n\n/* Slideshow container */\n\n.slideshow-container {\n  max-width: 100%;\n  position: relative;\n  margin: auto;\n  max-height: 75vh;\n}\n\n/* Next & previous buttons */\n\n.prev,\n.next {\n  cursor: pointer;\n  position: absolute;\n  top: 50%;\n  width: auto;\n  padding: 16px;\n  margin-top: -22px;\n  color: white;\n  font-weight: bold;\n  font-size: 18px;\n  transition: 0.6s ease;\n  border-radius: 0 3px 3px 0;\n}\n\n/* Position the \"next button\" to the right */\n\n.next {\n  right: 0;\n  border-radius: 3px 0 0 3px;\n}\n\n/* On hover, add a black background color with a little bit see-through */\n\n.prev:hover,\n.next:hover {\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n/* Caption text */\n\n.text {\n  color: #f2f2f2;\n  font-size: 1.2rem;\n  padding: 8px 12px;\n  position: absolute;\n  bottom: 5rem;\n  left: 25%;\n  width: 50%;\n  text-align: center;\n}\n\n/* The dots/bullets/indicators */\n\n.dot {\n  cursor: pointer;\n  height: 15px;\n  width: 15px;\n  margin: 0 2px;\n  background-color: #bbb;\n  border-radius: 50%;\n  display: inline-block;\n  transition: background-color 0.6s ease;\n}\n\n.active,\n.dot:hover {\n  background-color: #717171;\n}\n\n/* Fading animation */\n\n.fade {\n  -webkit-animation-name: fade;\n  -webkit-animation-duration: 1.5s;\n  animation-name: fade;\n  animation-duration: 1.5s;\n}\n\n@-webkit-keyframes fade {\n  from {\n    opacity: .4\n  }\n  to {\n    opacity: 1\n  }\n}\n\n@keyframes fade {\n  from {\n    opacity: .4\n  }\n  to {\n    opacity: 1\n  }\n}\n\n/* On smaller screens, decrease text size */\n\n@media only screen and (max-width: 300px) {\n  .prev,\n  .next,\n  .text {\n    font-size: 11px\n  }\n}\n"

/***/ }),

/***/ "./src/app/image-carousel/image-carousel.component.html":
/*!**************************************************************!*\
  !*** ./src/app/image-carousel/image-carousel.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"slideshow-container\">\n\n  <div class=\"mySlides fade\">\n    <img src=\"../../assets/images/background1.jpg\">\n    <div class=\"text\">\n        <p>ValiumHub is a trendsetting Online ticket store, offering our first-rate products and exceptional customer service to\n          gamers from the comfort of their own homes. We’re a business made up of innovators and forward-thinkers, with the drive\n          and wherewithal to constantly update and improve the online esports experience.</p>\n          <p>Our online ticket selling platform\n          has become synonymous with quality, and we ensure a continuous variety of fantastic esports events that are happening\n          near you. Check it out and start booking today.</p>\n        </div>\n  </div>\n\n  <div class=\"mySlides fade\">\n    <img src=\"../../assets/images/background2.jpg\">\n    <div class=\"text\">\n        <p>ValiumHub is a trendsetting Online ticket store, offering our first-rate products and exceptional customer service to\n          gamers from the comfort of their own homes. We’re a business made up of innovators and forward-thinkers, with the drive\n          and wherewithal to constantly update and improve the online esports experience.</p>\n          <p>Our online ticket selling platform\n          has become synonymous with quality, and we ensure a continuous variety of fantastic esports events that are happening\n          near you. Check it out and start booking today.</p>\n        </div>\n  </div>\n\n  <div class=\"mySlides fade\">\n    <img src=\"../../assets/images/background3.jpg\">\n    <div class=\"text\">\n      <p>ValiumHub is a trendsetting Online ticket store, offering our first-rate products and exceptional customer service to\n        gamers from the comfort of their own homes. We’re a business made up of innovators and forward-thinkers, with the drive\n        and wherewithal to constantly update and improve the online esports experience.</p>\n        <p>Our online ticket selling platform\n        has become synonymous with quality, and we ensure a continuous variety of fantastic esports events that are happening\n        near you. Check it out and start booking today.</p>\n      </div>\n  </div>\n\n  <a class=\"prev\">&#10094;</a>\n  <a class=\"next\">&#10095;</a>\n\n</div>\n<br>\n\n<div style=\"text-align:center\">\n  <span class=\"dot\"></span>\n  <span class=\"dot\"></span>\n  <span class=\"dot\"></span>\n</div>\n\n"

/***/ }),

/***/ "./src/app/image-carousel/image-carousel.component.ts":
/*!************************************************************!*\
  !*** ./src/app/image-carousel/image-carousel.component.ts ***!
  \************************************************************/
/*! exports provided: ImageCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageCarouselComponent", function() { return ImageCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCarouselComponent = /** @class */ (function () {
    function ImageCarouselComponent() {
        this.slideIndex = 0;
    }
    ImageCarouselComponent.prototype.ngOnInit = function () {
        this.showSlides();
    };
    ImageCarouselComponent.prototype.showSlides = function () {
        var slides, dots;
        slides = document.getElementsByClassName('mySlides');
        dots = document.getElementsByClassName('dot');
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        this.slideIndex++;
        if (this.slideIndex > slides.length) {
            this.slideIndex = 1;
        }
        for (var i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slides[this.slideIndex - 1].style.display = 'block';
        dots[this.slideIndex - 1].className += ' active';
        setTimeout(this.showSlides.bind(this), 3000); // Change image every 3 seconds
    };
    ImageCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-image-carousel',
            template: __webpack_require__(/*! ./image-carousel.component.html */ "./src/app/image-carousel/image-carousel.component.html"),
            styles: [__webpack_require__(/*! ./image-carousel.component.css */ "./src/app/image-carousel/image-carousel.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ImageCarouselComponent);
    return ImageCarouselComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var notifications = [
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/6.jpeg',
                'title': 'Boise State Broncos bucking esports trends',
                'description': "The Boise State Overwatch esports has not one, but two women on its team, including captain Maggie Borland.\n                              Katie Barnes talks to us about the pair.",
                'webLink': 'http://www.espn.in/esports/story/_/id/23316638/bright-lights-hit-maggie-borland-leader-boise-state-overwatch-team'
            },
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/5.jpeg',
                'title': 'SK Gamings FalleN calls IEM Sydney one of my weakest tournaments',
                'description': "SYDNEY -- While Gabriel Toledo led many teams in the earlier days of competitive Counter-Strike\n                              to upset victories over top European teams, at IEM Sydney, his team, SK Gaming was the victim of an upset.",
                'webLink': "http://www.espn.in/esports/story/_/id/\n                          23408592/sk-gaming-gabriel-fallen-tolido-not-impressed-own-performance-iem-sydney"
            },
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/4.jpeg',
                'title': "Don't sleep on SuperMassive at the Mid-Season Invitational",
                'description': "When former Incredible Miracle and Longzhu Gaming mid laner Kim Tae-il joined Turkey's1907 Fenerbah\u00E7e,\n                              many considered his career over. Instead, he helped lead the team through the 2017 League of Legends\n                              World ChampionshipPlay-Ins alongside former Gravity and Unicorns of Love jungler Kang",
                'webLink': 'http://www.espn.in/esports/story/_/id/23396459/sleep-supermassive-mid-season-invitational'
            },
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/3.jpeg',
                'title': 'Four AD carries to watch at the Mid-Season Invitational',
                'description': "Usually when League of Legends' second biggest international tournament of the year -- the Mid-Season\n                              Invitational -- rolls around, all eyes focus on the mid lane. Since the tournament's inception\n                              three years ago,\n                              the world's best mid laner, SK Telecom T1's Lee",
                'webLink': 'http://www.espn.in/esports/story/_/id/23378179/four-ad-carries-watch-mid-season-invitational'
            },
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/2.jpeg',
                'title': 'Overwatch League Power Rankings through April 30',
                'description': "We're in the final stretch of Stage 3, and Boston continues to win.\n                              NYXL is right behind its East Coast rival, but in terms of raw power, it's still NYXL's yard.\n                              Meanwhile, no one can figure out what's up with Seoul, and Philadelphia keeps sliding down the rankings.",
                'webLink': 'http://www.espn.in/esports/story/_/id/23368489/overwatch-league-power-rankings-april-30'
            },
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1.jpeg',
                'title': "Overwatch League by the numbers: It's the little things",
                'description': "This week, rather than focus on one central theme, we are going to catch up on a few smaller points\n                              relevant to the Overwatch League. While Boston's Overwatch League-best 12-match win streak is\n                              certainly impressive,and New York's 25-3 record is nothing short of incredible,\n                              there are some smaller stories that deserve the spotlight.',\n              'webLink': 'http://www.espn.in/esports/story/_/id/23376880/overwatch-league-numbers-little-things'\n            },\n            {\n              'imageUrl' : 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/6.jpeg',\n              'title' : 'Teams expected to look sharper at IEM Sydney',\n              'description': 'The underperformance and hesitant first steps of newly minted Counter-Strike:\n                              Global Offensive rosters at DreamHack Masters Marseille could, to an extent,\n                              be excused and chalked up to inexperience.",
                'webLink': "http://www.espn.in/esports/story/_/id/23362048/\n                          iem-sydney-2018-preview-counter-strike-global-offensive-esports"
            },
            {
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/5.jpeg',
                'title': 'Sources: FlyQuest promotes Jang Lae-young, adds Kevin Kwon',
                'description': "FlyQuest will add former Team Liquid Academy support Kevin Kwon and promote mid laner Jang Lae-young\n                              to its starting lineup, sources close to the team and players told ESPN.',\n              'webLink': 'http://www.espn.in/esports/story/_/id/\n                          23339045/sources-flyquest-promotes-jang-keane-lae-young-adds-kevin-konkwon-kwon'\n            },\n            {\n              'imageUrl' : 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1.jpeg',\n              'title' : 'IEM Sydney CS:GO power rankings -- Astralis, Fnatic on top',\n              'description': 'Since it is so soon after Dreamhack Marseille, IEM Sydney will be an opportunity\n                              for top teams to solidify themselves and weak ones to break the mold. Teams like Space Soldiers,\n                              SK, FaZe and mousesports will try to improve on disappointing results at Marseille while Na'vi and\n                              Astralis will try to ride their hot streak. After some surprising outcomes in France,\n                              we'll get answers to many questions in Australia.",
                'webLink': 'http://www.espn.in/esports/story/_/id/23338371/iem-sydney-csgo-power-rankings-astralis-fnatic-top'
            }
        ];
        var tournaments = [
            {
                'tournamentId': '001',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Dota2_Professional_League.png',
                'tournamentName': 'DOTA 2 PROFESSIONAL LEAGUE (DPL)',
                'logo': '',
                'isNew': true,
                'gameName': 'DOTA 2'
            },
            {
                'tournamentId': '002',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-Intel_Grand_Slam_Season_1.png',
                'tournamentName': 'INTEL GRAND SLAM SEASON 13',
                'logo': '',
                'isNew': false,
                'gameName': 'Global Offensive'
            },
            {
                'tournamentId': '003',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/DAC.jpg',
                'tournamentName': 'Dota 2 Asia Championship 2018',
                'logo': '',
                'isNew': false,
                'gameName': 'DOTA 2'
            },
            {
                'tournamentId': '004',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-DreamHack_Masters_Marseille_2018.png',
                'tournamentName': 'DreamHack Masters Marseille 2018',
                'logo': '',
                'isNew': true,
                'gameName': 'Counter-Strike: Global Offensive'
            },
            {
                'tournamentId': '005',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-Intel_Grand_Slam_Season_1.png',
                'tournamentName': 'INTEL GRAND SLAM SEASON 13',
                'logo': '',
                'isNew': false,
                'gameName': 'Global Offensive'
            },
            {
                'tournamentId': '006',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-DreamHack_Masters_Marseille_2018.png',
                'tournamentName': 'DreamHack Masters Marseille 2018',
                'logo': '',
                'isNew': true,
                'gameName': 'Counter-Strike: Global Offensive'
            },
            {
                'tournamentId': '007',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-Intel_Grand_Slam_Season_1.png',
                'tournamentName': 'INTEL GRAND SLAM SEASON 13',
                'logo': '',
                'isNew': true,
                'gameName': 'Global Offensive'
            },
            {
                'tournamentId': '008',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-DreamHack_Masters_Marseille_2018.png',
                'tournamentName': 'DreamHack Masters Marseille 2018',
                'logo': '',
                'isNew': false,
                'gameName': 'Counter-Strike: Global Offensive'
            },
            {
                'tournamentId': '009',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Dota2_Professional_League.png',
                'tournamentName': 'DOTA 2 PROFESSIONAL LEAGUE (DPL)',
                'logo': '',
                'isNew': true,
                'gameName': 'DOTA 2'
            },
            {
                'tournamentId': '010',
                'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/DAC.jpg',
                'tournamentName': 'Dota 2 Asia Championship 2018',
                'logo': '',
                'isNew': true,
                'gameName': 'DOTA 2'
            }
        ];
        var tournamentDetail = {
            'tournamentId': '001',
            'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Dota2_Professional_League.png',
            'tournamentName': 'DOTA 2 PROFESSIONAL LEAGUE (DPL)',
            'isNew': true,
            'fromDate': 1525285800000,
            'toDate': 1525890600000,
            'logo': '',
            'gameName': 'DOTA 2',
            'location': 'CITY-FUZHOU,CHINA',
            'venue': 'Shanghai oriental sports center',
            'tournamentDetails': "Dota2 Professional League (DPL) - Dota2 is the first large-scale individual e-sports league in China.\n                            This tournament is hosted by Sports Information Center of National Sports General Administration,\n                            in cooperation with Perfect World, and organized by Mars Media. This tournament is hosted by Sports\n                            Information Center of National Sports General Administration, in cooperation with Perfect World, and\n                            organized by Mars Media.",
            'noOfTeams': 16,
            'listOFTeamsParticipating': [
                {
                    'name': 'Effect',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/1200px-VGJ.Thunder_logo_dark.png',
                    'teamMembers': [
                        'Resolut1on', 'Afoninje', 'AfterLife'
                    ]
                },
                {
                    'name': 'Evil Geniuses',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/CDEC.png',
                    'teamMembers': [
                        'Arteezy', 'Fear', 'SumaiL'
                    ]
                },
                {
                    'name': 'Optic Gaming',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Igvitality_logo.png',
                    'teamMembers': [
                        'Resolut1on', 'Afoninje', 'AfterLife'
                    ]
                },
                {
                    'name': 'Pain Gaming',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Newbee_logo_text.png',
                    'teamMembers': [
                        'Arteezy', 'Fear', 'SumaiL'
                    ]
                },
                {
                    'name': 'Effect',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/PSG.LGD_full_logo.png',
                    'teamMembers': [
                        'Resolut1on', 'Afoninje', 'AfterLife'
                    ]
                },
                {
                    'name': 'Evil Geniuses',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/LGD.Forever_Young.png',
                    'teamMembers': [
                        'Arteezy', 'Fear', 'SumaiL'
                    ]
                },
                {
                    'name': 'Optic Gaming',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Newbee_logo_text.png',
                    'teamMembers': [
                        'Resolut1on', 'Afoninje', 'AfterLife'
                    ]
                },
                {
                    'name': 'Pain Gaming',
                    'imageUrl': 'https://s3-ap-southeast-2.amazonaws.com/shashank2266/Igvitality_logo.png',
                    'teamMembers': [
                        'Arteezy', 'Fear', 'SumaiL'
                    ]
                }
            ]
        };
        return { notifications: notifications, tournaments: tournaments, tournamentDetail: tournamentDetail };
    };
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/latest-news/latest-news.component.css":
/*!*******************************************************!*\
  !*** ./src/app/latest-news/latest-news.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/latest-news/latest-news.component.html":
/*!********************************************************!*\
  !*** ./src/app/latest-news/latest-news.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\"></div>\n  <div class=\"row\" *ngFor=\"let notification of allNotifications\">\n    <div class=\"col s12 m7\">\n    <mat-card>\n        <mat-card-header>\n          <div mat-card-avatar class=\"example-header-image\"></div>\n          <mat-card-title>{{notification.title}}</mat-card-title>\n          <mat-card-subtitle>{{notification.tournamentName}}</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"{{notification.imageUrl}}\" alt=\"Tournament Image\">\n        <mat-card-content>\n          <p>{{notification.description}}</p>\n        </mat-card-content>\n        <mat-card-actions>\n          <button mat-raised-button color=\"primary\">Read More</button>\n        </mat-card-actions>\n      </mat-card>\n    </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/latest-news/latest-news.component.ts":
/*!******************************************************!*\
  !*** ./src/app/latest-news/latest-news.component.ts ***!
  \******************************************************/
/*! exports provided: LatestNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LatestNewsComponent", function() { return LatestNewsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LatestNewsComponent = /** @class */ (function () {
    function LatestNewsComponent(httpService) {
        this.httpService = httpService;
        this.allNotifications = [];
        this.topNotifications = [];
    }
    LatestNewsComponent.prototype.ngOnInit = function () {
        this.getNotifications();
    };
    LatestNewsComponent.prototype.getNotifications = function () {
        var _this = this;
        this.httpService.getNotifications().subscribe(function (notifications) { return _this.allNotifications = notifications; });
        this.topNotifications = this.allNotifications.splice(0, 4);
    };
    LatestNewsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-latest-news',
            template: __webpack_require__(/*! ./latest-news.component.html */ "./src/app/latest-news/latest-news.component.html"),
            styles: [__webpack_require__(/*! ./latest-news.component.css */ "./src/app/latest-news/latest-news.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service_service__WEBPACK_IMPORTED_MODULE_1__["HttpServiceService"]])
    ], LatestNewsComponent);
    return LatestNewsComponent;
}());



/***/ }),

/***/ "./src/app/material.module.ts":
/*!************************************!*\
  !*** ./src/app/material.module.ts ***!
  \************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ],
            exports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatProgressSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatExpansionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatPaginatorModule"]
            ]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/tournament-detail/tournament-detail.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/tournament-detail/tournament-detail.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  text-align: center;\n}\n\n.detail-text {\n  padding: 1rem;\n  text-align: justify;\n}\n\n.initail-text {\n  text-align: initial;\n}\n\n.back-button {\n  display: inherit;\n  margin-top: 1rem;\n}\n\n.tournament-image {\n  max-width: 100%;\n}\n\n"

/***/ }),

/***/ "./src/app/tournament-detail/tournament-detail.component.html":
/*!********************************************************************!*\
  !*** ./src/app/tournament-detail/tournament-detail.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <button mat-button color=\"primary\"(click)=\"goBack()\" class=\"back-button\"><mat-icon>keyboard_arrow_left</mat-icon>Back</button>\n      <h3>{{tournamentDetail.gameName}}</h3>\n      <h4>{{tournamentDetail.tournamentName}}</h4>\n      <button mat-raised-button color=\"primary\">Book Now</button>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <img src=\"{{tournamentDetail.imageUrl}}\" class=\"tournament-image\"/>\n      <p class=\"detail-text\">{{tournamentDetail.tournamentDetails}}</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <h4>Location Details</h4>\n      <p>Venue: {{tournamentDetail.venue}}</p>\n      <p>Location: {{tournamentDetail.location}}</p>\n      <p>Date: {{tournamentDetail.fromDate | date}}</p>\n    </div>\n  </div>\n  <div class=\"row\">\n    <div class=\"col s12\">\n      <h4>Team Details</h4>\n      <p>No Of Teams: {{tournamentDetail.noOfTeams}}</p>\n    </div>\n  </div>\n  <div *ngIf=\"tournamentDetail.listOFTeamsParticipating\">\n  <div class=\"row\" *ngFor=\"let team of tournamentDetail.listOFTeamsParticipating\">\n      <div class=\"col s1 m3\">\n      </div>\n      <div class=\"col s3 m2\">\n          <div class=\"tournament-logo\">\n              <img src=\"{{team.imageUrl}}\" alt=\"Tournament Image\">\n          </div>\n      </div>\n      <div class=\"col s8 m7 initail-text\">\n          <p>Team Name: {{team.name}}</p>\n          <p>Members: {{team.teamMembers}}</p>\n      </div>\n    </div>\n  </div>\n    <div class=\"row\">\n        <div class=\"col s12\">\n          <h3>{{tournamentDetail.gameName}}</h3>\n          <h4>{{tournamentDetail.tournamentName}}</h4>\n          <button mat-raised-button color=\"primary\">Book Now</button>\n        </div>\n      </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/tournament-detail/tournament-detail.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/tournament-detail/tournament-detail.component.ts ***!
  \******************************************************************/
/*! exports provided: TournamentDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentDetailComponent", function() { return TournamentDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tournamentDeatil__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tournamentDeatil */ "./src/app/tournamentDeatil.ts");
/* harmony import */ var _http_service_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../http-service.service */ "./src/app/http-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TournamentDetailComponent = /** @class */ (function () {
    function TournamentDetailComponent(route, httpService, location) {
        this.route = route;
        this.httpService = httpService;
        this.location = location;
    }
    TournamentDetailComponent.prototype.ngOnInit = function () {
        this.getTournamentDetail();
    };
    TournamentDetailComponent.prototype.getTournamentDetail = function () {
        var _this = this;
        var id = +this.route.snapshot.paramMap.get('tournamentId');
        this.httpService.getTournament(id)
            .subscribe(function (tournament) { return _this.tournamentDetail = tournament; });
    };
    TournamentDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _tournamentDeatil__WEBPACK_IMPORTED_MODULE_3__["TournamentDetail"])
    ], TournamentDetailComponent.prototype, "tournamentDetail", void 0);
    TournamentDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tournament-detail',
            template: __webpack_require__(/*! ./tournament-detail.component.html */ "./src/app/tournament-detail/tournament-detail.component.html"),
            styles: [__webpack_require__(/*! ./tournament-detail.component.css */ "./src/app/tournament-detail/tournament-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _http_service_service__WEBPACK_IMPORTED_MODULE_4__["HttpServiceService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["Location"]])
    ], TournamentDetailComponent);
    return TournamentDetailComponent;
}());



/***/ }),

/***/ "./src/app/tournamentDeatil.ts":
/*!*************************************!*\
  !*** ./src/app/tournamentDeatil.ts ***!
  \*************************************/
/*! exports provided: TournamentDetail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TournamentDetail", function() { return TournamentDetail; });
var TournamentDetail = /** @class */ (function () {
    function TournamentDetail() {
    }
    return TournamentDetail;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_4__);





if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\I332893\Desktop\valiumhub\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map