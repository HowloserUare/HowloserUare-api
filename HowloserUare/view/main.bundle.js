webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var auth_component_1 = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
var routes = [
    { path: '', redirectTo: 'dash', pathMatch: 'full' },
    { path: 'dash', component: dashboard_component_1.DashboardComponent },
    { path: 'auth', component: auth_component_1.AuthComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: login_component_1.LoginComponent },
            { path: 'register', component: register_component_1.RegisterComponent },
        ] },
];
var config = {
    'useHash': true,
};
var AppRouter = /** @class */ (function () {
    function AppRouter() {
    }
    AppRouter = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, config)],
            exports: [router_1.RouterModule]
        })
    ], AppRouter);
    return AppRouter;
}());
exports.AppRouter = AppRouter;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var app_routing_1 = __webpack_require__("../../../../../src/app/app-routing.ts");
var dashboard_component_1 = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
var auth_component_1 = __webpack_require__("../../../../../src/app/auth/auth.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/auth/login/login.component.ts");
var register_component_1 = __webpack_require__("../../../../../src/app/auth/register/register.component.ts");
var nav_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/nav/nav.component.ts");
var sidebar_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/sidebar/sidebar.component.ts");
var content_component_1 = __webpack_require__("../../../../../src/app/dashboard/components/content/content.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                login_component_1.LoginComponent,
                auth_component_1.AuthComponent,
                register_component_1.RegisterComponent,
                nav_component_1.NavComponent,
                sidebar_component_1.SidebarComponent,
                content_component_1.ContentComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                app_routing_1.AppRouter
            ],
            providers: [
                { provide: common_1.APP_BASE_HREF, useValue: '/' },
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/auth/auth.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    cursor: pointer !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid-full\" style=\"background: url(assets/img/bg-login.jpg)\">\n  <div class=\"row-fluid\">\n    <div class=\"login-box\">\n      <router-outlet></router-outlet>\n    </div>\n    <!--/span-->\n  </div>\n  <!--/row-->\n</div>\n<!--/.fluid-container-->"

/***/ }),

/***/ "../../../../../src/app/auth/auth.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var AuthComponent = /** @class */ (function () {
    function AuthComponent(service, router) {
        var _this = this;
        this.service = service;
        this.router = router;
        this.service.status().subscribe(function (res) {
            if (res.status === true) {
                _this.router.navigate(['/dash']);
            }
        });
    }
    AuthComponent.prototype.ngOnInit = function () {
    };
    AuthComponent = __decorate([
        core_1.Component({
            selector: 'app-auth',
            template: __webpack_require__("../../../../../src/app/auth/auth.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/auth.component.css")],
            providers: [login_service_1.LoginService,]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.Router])
    ], AuthComponent);
    return AuthComponent;
}());
exports.AuthComponent = AuthComponent;


/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Login</h2>\n<form class=\"form-horizontal\">\n  <div class=\"input-prepend\" title=\"Username\">\n    <span class=\"add-on\">\n      <i class=\"halflings-icon user\"></i>\n    </span>\n    <input class=\"input-large span10\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" placeholder=\"type username\" />\n  </div>\n  <div class=\"clearfix\"></div>\n\n  <div class=\"input-prepend\" title=\"Password\">\n    <span class=\"add-on\">\n      <i class=\"halflings-icon lock\"></i>\n    </span>\n    <input class=\"input-large span10\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" placeholder=\"type password\" />\n  </div>\n  <div class=\"clearfix\"></div>\n\n  <div class=\"button-login\">\n    <button type=\"submit\" class=\"btn btn-primary\" (click)='Login(username, password)'>Login</button>\n  </div>\n</form>\n<hr>\n<h3 class=\"text-error\"><span *ngIf=\"error\" class=\"text-error\">{{error}}</span> &nbsp;</h3>\n<div class=\"clearfix\"></div>\n<p>\n  <a class=\"\" (click)=\"switchPanel()\">{{ panelString }}</a>\n</p>"

/***/ }),

/***/ "../../../../../src/app/auth/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(service, router) {
        this.service = service;
        this.router = router;
        this.panelString = 'register';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.Login = function (username, password) {
        var _this = this;
        this.error = '';
        this.service.login({
            username: this.username,
            password: this.password
        }).subscribe(function (res) {
            if (res && res.status === true) {
                _this.router.navigate(['/dash']);
            }
            else {
                _this.error = res.msg;
                _this.username = '';
                _this.password = '';
            }
        });
    };
    LoginComponent.prototype.switchPanel = function () {
        this.router.navigate(['/auth/register']);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/auth/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/login/login.component.css")],
            providers: [login_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<h2>Register</h2>\n<form class=\"form-horizontal\">\n  <div class=\"input-prepend\" title=\"Username\">\n    <span class=\"add-on\">\n      <i class=\"halflings-icon user\"></i>\n    </span>\n    <input class=\"input-large span10\" [(ngModel)]=\"username\" name=\"username\" type=\"text\" placeholder=\"type username\" />\n  </div>\n  <div class=\"clearfix\"></div>\n\n  <div class=\"input-prepend\" title=\"Password\">\n    <span class=\"add-on\">\n      <i class=\"halflings-icon lock\"></i>\n    </span>\n    <input class=\"input-large span10\" [(ngModel)]=\"password\" name=\"password\" type=\"password\" placeholder=\"type password\" />\n  </div>\n  <div class=\"clearfix\"></div>\n\n  <div class=\"input-prepend\" title=\"QueryPassword\">\n    <span class=\"add-on\">\n      <i class=\"halflings-icon lock\"></i>\n    </span>\n    <input class=\"input-large span10\" [(ngModel)]=\"querypass\" name=\"querypass\" type=\"password\" placeholder=\"re-type password\" />\n  </div>\n  <div class=\"clearfix\"></div>\n\n  <div class=\"button-login\">\n    <button type=\"submit\" class=\"btn btn-primary\" (click)='Register(username, password, querypass)'>Register</button>\n  </div>\n</form>\n<hr>\n<h3 class=\"text-error\"><span *ngIf=\"error\" class=\"text-error\">{{error}}</span> &nbsp;</h3>\n<div class=\"clearfix\"></div>\n<p>\n  <a class=\"\" (click)=\"switchPanel()\">{{ panelString }}</a>\n</p>"

/***/ }),

/***/ "../../../../../src/app/auth/register/register.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(service, router) {
        this.service = service;
        this.router = router;
        this.panelString = 'already had a account?';
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.Register = function (username, password, querypass) {
        var _this = this;
        this.error = '';
        if (this.password !== this.querypass) {
            this.error = 'password not match the re-type password';
            this.password = '';
            this.querypass = '';
            return true;
        }
        this.service.signup({
            username: this.username,
            password: this.password
        }).subscribe(function (res) {
            if (res && res.status === true) {
                alert("User " + _this.username + " register success!");
                _this.router.navigate(['/auth/login']);
            }
            else {
                _this.error = res.msg;
                _this.password = '';
                _this.querypass = '';
            }
        });
    };
    RegisterComponent.prototype.switchPanel = function () {
        this.router.navigate(['/auth/login']);
    };
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/auth/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/auth/register/register.component.css")],
            providers: [login_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService,
            router_1.Router])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/components/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  content works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/content/content.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var ContentComponent = /** @class */ (function () {
    function ContentComponent() {
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent = __decorate([
        core_1.Component({
            selector: 'app-content',
            template: __webpack_require__("../../../../../src/app/dashboard/components/content/content.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/components/content/content.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContentComponent);
    return ContentComponent;
}());
exports.ContentComponent = ContentComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/components/nav/nav.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <div class=\"container-fluid\">\n      <a class=\"btn btn-navbar\" data-toggle=\"collapse\" data-target=\".top-nav.nav-collapse,.sidebar-nav.nav-collapse\">\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </a>\n      <a class=\"brand\" href=\"index.html\">\n        <span>HowloserUare</span>\n      </a>\n\n      <!-- start: Header Menu -->\n      <div class=\"nav-no-collapse header-nav\">\n        <ul class=\"nav pull-right\">\n          <!-- start: Notifications Dropdown -->\n          <li class=\"dropdown hidden-phone\">\n            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"halflings-icon white tasks\"></i>\n            </a>\n            <ul class=\"dropdown-menu tasks\">\n              <li class=\"dropdown-menu-title\">\n                <span>You have 17 tasks in progress</span>\n                <a href=\"#\">\n                  <i class=\"icon-repeat\"></i>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <span class=\"header\">\n                    <span class=\"title\">iOS Development</span>\n                    <span class=\"percent\">80%</span>\n                  </span>\n                  <div class=\"taskProgress progressSlim red ui-progressbar ui-widget ui-widget-content ui-corner-all\" role=\"progressbar\" aria-valuemin=\"0\"\n                    aria-valuemax=\"100\" aria-valuenow=\"80\">80\n                    <div class=\"ui-progressbar-value ui-widget-header ui-corner-left\" style=\"width: 80%;\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <span class=\"header\">\n                    <span class=\"title\">Android Development</span>\n                    <span class=\"percent\">47%</span>\n                  </span>\n                  <div class=\"taskProgress progressSlim green ui-progressbar ui-widget ui-widget-content ui-corner-all\" role=\"progressbar\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"47\">47\n                    <div class=\"ui-progressbar-value ui-widget-header ui-corner-left\" style=\"width: 47%;\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <span class=\"header\">\n                    <span class=\"title\">ARM Development</span>\n                    <span class=\"percent\">32%</span>\n                  </span>\n                  <div class=\"taskProgress progressSlim yellow ui-progressbar ui-widget ui-widget-content ui-corner-all\" role=\"progressbar\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"32\">32\n                    <div class=\"ui-progressbar-value ui-widget-header ui-corner-left\" style=\"width: 32%;\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <span class=\"header\">\n                    <span class=\"title\">ARM Development</span>\n                    <span class=\"percent\">63%</span>\n                  </span>\n                  <div class=\"taskProgress progressSlim greenLight ui-progressbar ui-widget ui-widget-content ui-corner-all\" role=\"progressbar\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"63\">63\n                    <div class=\"ui-progressbar-value ui-widget-header ui-corner-left\" style=\"width: 63%;\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <span class=\"header\">\n                    <span class=\"title\">ARM Development</span>\n                    <span class=\"percent\">80%</span>\n                  </span>\n                  <div class=\"taskProgress progressSlim orange ui-progressbar ui-widget ui-widget-content ui-corner-all\" role=\"progressbar\"\n                    aria-valuemin=\"0\" aria-valuemax=\"100\" aria-valuenow=\"80\">80\n                    <div class=\"ui-progressbar-value ui-widget-header ui-corner-left\" style=\"width: 80%;\"></div>\n                  </div>\n                </a>\n              </li>\n              <li>\n                <a class=\"dropdown-menu-sub-footer\">View all tasks</a>\n              </li>\n            </ul>\n          </li>\n          <!-- end: Notifications Dropdown -->\n          <!-- start: User Dropdown -->\n          <li class=\"dropdown\">\n            <a class=\"btn dropdown-toggle\" data-toggle=\"dropdown\" href=\"#\">\n              <i class=\"halflings-icon white user\"></i> Dennis Ji\n              <span class=\"caret\"></span>\n            </a>\n            <ul class=\"dropdown-menu\">\n              <li class=\"dropdown-menu-title\">\n                <span>Account Settings</span>\n              </li>\n              <li>\n                <a href=\"#\">\n                  <i class=\"halflings-icon user\"></i> Profile</a>\n              </li>\n              <li>\n                <a (click)=\"logout()\">\n                  <i class=\"halflings-icon off\"></i> Logout</a>\n              </li>\n            </ul>\n          </li>\n          <!-- end: User Dropdown -->\n        </ul>\n      </div>\n      <!-- end: Header Menu -->\n\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/nav/nav.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var NavComponent = /** @class */ (function () {
    function NavComponent(service) {
        this.service = service;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent.prototype.logout = function () {
        if (!confirm('are you sure?')) {
            return;
        }
        this.service.logout().subscribe(function (res) {
            if (res.status === true) {
                alert('logout successed.');
                location.reload();
            }
        }, function (err) {
            alert("logout failed, error: " + err.error);
            location.reload();
        });
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("../../../../../src/app/dashboard/components/nav/nav.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/components/nav/nav.component.css")],
            providers: [login_service_1.LoginService]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/components/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/components/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"sidebar-left\" class=\"span2\">\n  <div class=\"nav-collapse sidebar-nav\">\n    <ul class=\"nav nav-tabs nav-stacked main-menu\">\n      <li>\n        <a href=\"index.html\">\n          <i class=\"icon-bar-chart\"></i>\n          <span class=\"hidden-tablet\"> Dashboard</span>\n        </a>\n      </li>\n      <li>\n        <a class=\"dropmenu\" href=\"#\">\n          <i class=\"icon-folder-close-alt\"></i>\n          <span class=\"hidden-tablet\"> Dropdown</span>\n          <span class=\"label label-important\"> 3 </span>\n        </a>\n        <ul>\n          <li>\n            <a class=\"submenu\" href=\"submenu.html\">\n              <i class=\"icon-file-alt\"></i>\n              <span class=\"hidden-tablet\"> Sub Menu 1</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"submenu\" href=\"submenu2.html\">\n              <i class=\"icon-file-alt\"></i>\n              <span class=\"hidden-tablet\"> Sub Menu 2</span>\n            </a>\n          </li>\n          <li>\n            <a class=\"submenu\" href=\"submenu3.html\">\n              <i class=\"icon-file-alt\"></i>\n              <span class=\"hidden-tablet\"> Sub Menu 3</span>\n            </a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/dashboard/components/sidebar/sidebar.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent = __decorate([
        core_1.Component({
            selector: 'app-sidebar',
            template: __webpack_require__("../../../../../src/app/dashboard/components/sidebar/sidebar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/components/sidebar/sidebar.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SidebarComponent);
    return SidebarComponent;
}());
exports.SidebarComponent = SidebarComponent;


/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n\n\n\n    <!-- start: Header -->\n    <app-nav></app-nav>\n    <!-- start: Header -->\n    \n    <div class=\"container-fluid-full\">\n        <div class=\"row-fluid\" style=\"background-color: #1C2B36;\">\n            \n            <!-- start: Main Menu -->\n            <app-sidebar></app-sidebar>\n            <!-- end: Main Menu -->\n\n            <noscript>\n                &lt;div class=\"alert alert-block span10\"&gt; &lt;h4 class=\"alert-heading\"&gt;Warning!&lt;/h4&gt; &lt;p&gt;You need to have\n                &lt;a href=\"http://en.wikipedia.org/wiki/JavaScript\" target=\"_blank\"&gt;JavaScript&lt;/a&gt; enabled to use\n                this site.&lt;/p&gt; &lt;/div&gt;\n            </noscript>\n\n            <!-- start: Content -->\n            <div id=\"content\" class=\"span10\" style=\"min-height: 635px;\">\n\n\n                <ul class=\"breadcrumb\">\n                    <li>\n                        <i class=\"icon-home\"></i>\n                        <a href=\"index.html\">Home</a>\n                        <i class=\"icon-angle-right\"></i>\n                    </li>\n                    <li>\n                        <a href=\"#\">Typography</a>\n                    </li>\n                </ul>\n\n                <app-content></app-content>\n\n            </div>\n            <!--/.fluid-container-->\n\n            <!-- end: Content -->\n        </div>\n        <!--/#content.span10-->\n    </div>\n    <!--/fluid-row-->\n\n    <div class=\"modal hide fade\" id=\"myModal\">\n        <div class=\"modal-header\">\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\">×</button>\n            <h3>Settings</h3>\n        </div>\n        <div class=\"modal-body\">\n            <p>Here settings can be configured...</p>\n        </div>\n        <div class=\"modal-footer\">\n            <a href=\"#\" class=\"btn\" data-dismiss=\"modal\">Close</a>\n            <a href=\"#\" class=\"btn btn-primary\">Save changes</a>\n        </div>\n    </div>\n\n    <div class=\"clearfix\"></div>\n\n    <footer>\n\n        <p>\n            <span style=\"text-align:left;float:left\">© 2013\n                <a href=\"http://jiji262.github.io/Bootstrap_Metro_Dashboard/\" alt=\"Bootstrap_Metro_Dashboard\">Bootstrap Metro Dashboard</a>\n            </span>\n\n        </p>\n\n    </footer>\n\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var login_service_1 = __webpack_require__("../../../../../src/app/services/login.service.ts");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(service) {
        this.service = service;
        this.service.checkLoginStatus();
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")],
            providers: [login_service_1.LoginService,]
        }),
        __metadata("design:paramtypes", [login_service_1.LoginService])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "../../../../../src/app/services/login.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../common/esm5/http.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginService = /** @class */ (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
    }
    LoginService.prototype.login = function (obj) {
        return this.http.post('/api/core/login/', obj, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
            })
        });
    };
    LoginService.prototype.signup = function (obj) {
        return this.http.post('/api/core/signup/', obj, {
            headers: new http_1.HttpHeaders({
                'Content-Type': 'application/json',
            })
        });
    };
    LoginService.prototype.status = function () {
        return this.http.get('/api/core/status/', {
            headers: new http_1.HttpHeaders({}),
        });
    };
    LoginService.prototype.logout = function () {
        return this.http.get('/api/core/logout/', {
            headers: new http_1.HttpHeaders({}),
        });
    };
    LoginService.prototype.checkLoginStatus = function () {
        var _this = this;
        return this.status().subscribe(function (data) {
            if (data.status !== true) {
                _this.router.navigate(['/auth/login']);
            }
        }, function (err) {
            _this.router.navigate(['/auth/login']);
        });
    };
    LoginService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient,
            router_1.Router])
    ], LoginService);
    return LoginService;
}());
exports.LoginService = LoginService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map