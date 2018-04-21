webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".center{\n    margin: 0 auto;\n    max-width: 100%;\n    width: 1000px;\n    padding: 1rem;\n    -ms-flex-line-pack: center;\n        align-content: center;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-nav></app-nav> <!-- Navigation Bar -->\n<div class = \"container center\">\n  <app-messages></app-messages> <!-- Messages -->\n  <router-outlet></router-outlet>\n\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var nav_component_1 = __webpack_require__("./src/app/nav/nav.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                home_component_1.HomeComponent,
                messages_component_1.MessagesComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' },
                ])
            ],
            providers: [],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin-top: 10px;\n}\n\n.card {\n    padding: 0.5rem;\n    \n}\n\n.add-button {\n    \n    \n    display:block;\n    width:70px;\n    height:70px;\n    border: .5px solid grey;\n    border-radius: 50%;\n    color:grey;\n    text-align: center;\n    text-decoration:none;\n    background: white;\n    font-size: 15px;\n    font-weight: bold;\n    \n    \n}\n\n.add-button:hover {\n    cursor: pointer;\n    border: .5px solid darkcyan;\n    color: darkcyan;\n}\n\n.center{\n    margin: 0 auto;\n    max-width: 100%;\n    width: 100px;\n    padding: 1rem;\n}\n\n.already{\n    font-size: 10px;\n    color: chocolate;\n\n}\n\n.tracking{\n    margin-left: 5px;\n    margin-right: 5px;\n  \n}\n\n.list{\n    list-style-type: none;\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" *ngIf = \"!hide\">\n  <div class=\"card-header\">Welcome to Fit Tracker!</div>\n  <div>\n    <p>Please Sign in Here with Your User Name</p>\n    <button (click) = \"hasId()\">Sign In Here</button>\n  </div>\n</div><!-- Sign in button ends-->\n\n<div class=\"card\" *ngIf= \"hide && !hideWelcome\">\n  <div class=\"card-header\">Please Sign in</div>\n  <!-- Login Form-->\n  <div>\n    <input #Name placeholder=\"Name\" /><button (click)=\"isLogin(Name.value)\"> Login</button>\n  </div>\n  <div>\n    <button class=\"btn btn-primary\">Back</button> <!-- ? How to go back to previous?-->\n    <!-- ** need to bind login property **-->\n  </div>\n</div> <!-- Log in Form Ends-->\n\n  <!--\n  <div *ngIf=\"!hideSignIn\">\n\n    <p>Are you a new user?</p>\n    <button (click) = \"saveProfile()\">\n      Create New Profile\n    </button>\n  </div>\n-->\n\n<div class=\"card\" *ngIf= \"login && !finishProfile\">\n  <div class=\"card-header\">\n  Please Create Your Profile Before Tracking Your Workout!\n  </div>\n  <form>\n    <div class=\"form-row\">\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputName\">Name</label>\n        <input #name type=\"text\" class=\"form-control\" id=\"inputName\" [value]=\"logInName\">\n      </div>\n\n      <div class=\"form-group col-md-4\">\n        <label for=\"inputAge\">Age</label>\n        <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" placeholder=\"Age\" >\n      </div>\n    </div>\n\n      <div class=\"form-group\">\n        <label for=\"inputWeight\">Weight</label>\n        <input #weight type=\"number\" class=\"form-control\" id=\"inputWeight\" placeholder=\"kg\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"inputHeight\">Height</label>\n        <input #height type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"cm\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"inputGoalWeight\">Goal Weight</label>\n        <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" placeholder=\"kg\">\n      </div>\n    </form>\n  <div>\n    <button class=\"btn btn-primary btn-sm\" (click)=\"doneProfile(name.value, age.value, height.value, weight.value, goalWeight.value)\">Save</button>\n  </div> \n</div> <!-- Profile Form ends-->\n\n  <!-- if profile is saved, display Workout Plan-->\n<div class=\"row justify-content-md-center\">\n    <!-- Saved Profile display-->\n  <div class=\"col-md-3\">\n    <div class=\"card tracking\" *ngIf = \"finishProfile\">\n      <div class=\"card-header\">\n        Your Profile\n      </div>\n      <ul class=\"list-group list-group-flush list\" *ngFor =\"let user of Model.User\">\n        <!-- **ngfor: display profile here** -->\n        <li>Name: {{user.Name}}</li>\n        <li>Age: {{user.Age}}</li>\n        <li>Weight: {{user.Weight}}</li>\n        <li>BMI: {{user.BMI}}</li>\n        <li>Goal Weight: {{user.GoalWeight}}</li>\n        <li>Goal BMI: {{user.GoalBMI}}</li>\n      </ul>\n    </div> <!-- Saved Profile display ends-->\n  </div>  \n  <!-- if profile is saved and disappear, display plan to choose-->\n  <div class=\"col-md-3\">\n    <!-- Exercise Plan-->\n    <div class=\"card tracking\" *ngIf=\"finishProfile\">\n      <div class=\"card-header\">\n        Which Workout did you do today?\n      </div>\n\n      <ul class=\"list-group list-group-flush\">\n        <form>\n          <div class=\"form-group\">\n            <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n              <option *ngFor= \"let list of Model.ExerciseList\" (click)=\"addPlan($event, list.List)\">{{list.List}}</option>\n            </select>\n          </div>\n        </form>\n      </ul>\n    </div><!-- Exercise Plan end-->\n  </div>\n  <div class=\"col-md-3\">\n    <!-- Exercise Info-->\n    <div class =\"card tracking\" *ngIf = \"finishProfile\">\n      <div class=\"card-header\">\n        Today you achieved\n      </div>\n      <!-- ** Added Plan Display Here-->\n      <ul class=\"list-group list-group-flush\">\n        <li *ngFor=\"let list of Model.Track\" class=\"list-group-item d-flex justify-content-between align-items-center\" (click) =\"removeList($event, list)\" > <!-- if in ngClass MyPlayedQuote is enabled, execute not-allowed pointer -->\n          {{list}}\n        </li>\n      </ul>\n    </div>\n  </div>\n</div>\n\n<!--\n<div class=\"center\">\n    <button class=\"add-button\" >Track</button>\n  </div> -->"

/***/ }),

/***/ "./src/app/home/home.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
var exercise_1 = __webpack_require__("./src/app/models/exercise.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http) {
        var _this = this;
        this.http = http;
        this.Model = new exercise_1.Fit();
        this._api = "http://localhost:8080/fit";
        this.alreadyUser = false;
        this.hideWelcome = false;
        this.hide = false;
        this.login = false;
        this.finishProfile = false;
        setInterval(function () { return _this.refresh(); }, 1000);
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.refresh = function () {
        var _this = this;
        this.http.get(this._api + "/state")
            .subscribe(function (data) { return _this.Model = data.json(); });
    };
    HomeComponent.prototype.hasId = function () {
        this.hide = !this.hide;
    };
    HomeComponent.prototype.isLogin = function (name) {
        this.login = !this.login;
        this.hideWelcome = !this.hideWelcome;
        this.logInName = name;
        this.http.get(this._api + "/exercise", { params: { Name: name } });
    };
    HomeComponent.prototype.doneProfile = function (logInName, age, height, weight, goalWeight) {
        this.finishProfile = !this.finishProfile;
        this.Model.User.push({ Name: logInName, Age: age, Height: height, Weight: weight, GoalWeight: goalWeight,
            BMI: this.calculateBMI(weight, height), GoalBMI: this.calculateBMI(goalWeight, height) });
        console.log('name is ' + name);
        console.log(this.Model.User);
    };
    HomeComponent.prototype.calculateBMI = function (weight, height) {
        return Math.round((weight / height / height * 10000) * 100) / 100;
    };
    HomeComponent.prototype.addPlan = function (e, plan) {
        e.preventDefault();
        console.log('adding: ' + plan);
        this.Model.ExerciseList.push({ List: plan });
        console.log(this.Model.Track);
    };
    HomeComponent.prototype.removeList = function (e, list) {
        console.log('removing: ' + list);
        this.Model.Track.splice(this.Model.Track.indexOf(list), 1);
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages {\n    padding-top: 0.5rem;\n    padding-left: 0.2rem;\n}\n\n.button {\n    margin-left: 5px;\n    color: white;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n.button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.alert{\n    padding: 10px;\n    background-color: lightseagreen;\n    color: white;\n    margin-bottom: 15px;\n}\n\n.msg{\n    list-style-type: none;\n    padding-top: 0.2rem;\n    padding-left: 0.2rem;\n    padding-bottom: 0.2rem;\n}\n\nh3{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\">\n  <div class=\"alert alert-success\">\n    <!-- Binding-->\n    <span class=\"button\" onclick=\"this.parentElement.style.display='none';\"> <!-- javascript-->\n      &times;\n    </span>\n    <h3>Track your Exercise!</h3>\n    \n    <ul class = \"msg\">\n      <li *ngFor =\"let msg of Messages\">{{msg}}</li>\n    </ul>\n  </div><!-- Alert -->\n</div><!--messages-->\n\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent() {
        this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/models/exercise.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fit = /** @class */ (function () {
    function Fit() {
        this.User = [];
        this.ExerciseList = [];
        this.Track = [];
    }
    return Fit;
}());
exports.Fit = Fit;
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
exports.Person = Person;
var Workout = /** @class */ (function () {
    function Workout() {
    }
    return Workout;
}());
exports.Workout = Workout;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    padding: 0 1rem;\n  }\n  \n  .bg-color {\n      background-color: darkcyan;\n  }"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark bg-color\">\n  <div class = \"container\">\n      <a class=\"navbar-brand\" routerLink = \"/home\">Fitness Tracker</a>\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n      </button>\n\n      <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink = \"/home\" routerLinkActive=\"active\">Exercise <span class=\"sr-only\">(current)</span></a>\n            <!-- ?? how to refresh the page when a user hits navbar ??-->\n          </li>\n          <!--\n          <li class=\"nav-item\">\n            <a class=\"nav-link disabled\" routerLink = \"/tips\" routerLinkActive=\"active\">Tips</a>\n          </li>\n        -->\n        \n        </ul>\n      </div>\n \n  </div><!-- navbar container -->\n</nav> <!-- nav bar -->"

/***/ }),

/***/ "./src/app/nav/nav.component.ts":
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
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var NavComponent = /** @class */ (function () {
    function NavComponent() {
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map