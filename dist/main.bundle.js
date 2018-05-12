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

module.exports = "<app-nav></app-nav> <!-- Navigation Bar -->\n<div class = \"container\">\n  <app-messages></app-messages> <!-- Messages -->\n  <router-outlet></router-outlet>\n\n</div>"

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
var messages_component_1 = __webpack_require__("./src/app/messages/messages.component.ts");
var home_component_1 = __webpack_require__("./src/app/home/home.component.ts");
var fit_component_1 = __webpack_require__("./src/app/fit/fit.component.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var share_component_1 = __webpack_require__("./src/app/share/share.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var sign_up_component_1 = __webpack_require__("./src/app/sign-up/sign-up.component.ts");
var profile_component_1 = __webpack_require__("./src/app/profile/profile.component.ts");
var edit_profile_component_1 = __webpack_require__("./src/app/edit-profile/edit-profile.component.ts");
var history_component_1 = __webpack_require__("./src/app/history/history.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                nav_component_1.NavComponent,
                messages_component_1.MessagesComponent,
                home_component_1.HomeComponent,
                fit_component_1.FitComponent,
                share_component_1.ShareComponent,
                login_component_1.LoginComponent,
                sign_up_component_1.SignUpComponent,
                profile_component_1.ProfileComponent,
                edit_profile_component_1.EditProfileComponent,
                history_component_1.HistoryComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                router_1.RouterModule.forRoot([
                    { path: 'home', component: home_component_1.HomeComponent },
                    { path: 'fit', component: fit_component_1.FitComponent },
                    { path: 'share', component: share_component_1.ShareComponent },
                    { path: 'login', component: login_component_1.LoginComponent },
                    { path: 'sign-up', component: sign_up_component_1.SignUpComponent },
                    { path: 'profile', component: profile_component_1.ProfileComponent },
                    { path: 'editProfile', component: edit_profile_component_1.EditProfileComponent },
                    { path: 'history', component: history_component_1.HistoryComponent },
                    { path: '', redirectTo: '/home', pathMatch: 'full' }
                ])
            ],
            providers: [messages_service_1.MessagesService, fit_service_1.FitService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 15px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.textWrap{\n    height: 150px;\n   padding: 1.2rem;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase-own{\n    text-transform: uppercase;\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\" >\n    <div class=\"card-header-own\">\n        <div class=\" text-uppercase\">\n        {{Me.Name}}'s Profile\n        </div>\n        <div class=\"text-uppercase-own\">Edit your profile or set your new goal</div> \n    </div>\n    \n    <div class=\"card-body\">\n        <form>\n            <div class=\"form-row\">\n        \n            <div class=\"form-group col-md-4\">\n                <label for=\"inputName\">Name</label>\n                <input #name type=\"text\" readonly class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n            </div>\n        \n            <div class=\"form-group col-md-4\">\n                <label for=\"inputAge\">Age</label>\n                <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" [value]=\"Me.Profile.Age\" placeholder=\"Age\">\n            </div>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Height\">Height</label>\n                <input #height type=\"number\" class=\"form-control\" id=\"Height\" [value]=\"Me.Profile.Height\" placeholder=\"cm\">\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Weight\">Weight</label>\n                <input #weight type=\"number\" class=\"form-control\" id=\"Weight\" [value]=\"Me.Profile.Weight\" placeholder=\"kg\">\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"inputGoalWeight\">Goal Weight</label>\n                <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" [value]=\"Me.Profile.GoalWeight\" placeholder=\"kg\">\n            </div>\n            </form>\n        <div>\n            <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"editing(age.value, weight.value, height.value, goalWeight.value, name.value)\">Edit</button>\n        </div> \n      </div>\n</div> \n\n\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent(_Fit, _Router) {
        this._Fit = _Fit;
        this._Router = _Router;
        this.Me = this._Fit.Me;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.prototype.editing = function (age, weight, height, goalWeight, name) {
        var goalBmi = this.calculateBMI(goalWeight, height);
        var bmi = this.calculateBMI(weight, height);
        console.log('profile component');
        this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
    };
    EditProfileComponent.prototype.calculateBMI = function (weight, height) {
        return Math.round((weight / height / height * 10000) * 100) / 100;
    };
    EditProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-edit-profile',
            template: __webpack_require__("./src/app/edit-profile/edit-profile.component.html"),
            styles: [__webpack_require__("./src/app/edit-profile/edit-profile.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, router_1.Router])
    ], EditProfileComponent);
    return EditProfileComponent;
}());
exports.EditProfileComponent = EditProfileComponent;


/***/ }),

/***/ "./src/app/fit/fit.component.css":
/***/ (function(module, exports) {

module.exports = "\n.btn-own{\n    margin: 5px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n   \n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.heightAdjust{\n    height: 160px;\n}\n\n.heightAdjust-big{\n    height: 200px;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 3px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.text-uppercase-own{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.list-group-item-success{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.badge{\n    margin-left: 5px;\n}\n\n.display-none{\n    display: none;\n}\n\n.today{\n    color: white;\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/app/fit/fit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Display Saved Profile -->\n<div class=\"row\" >\n    <div class=\"col-md-4\">\n        <div class=\"card\" >\n            <div class=\"card-header-own text-uppercase\">\n            {{Me.Name}}'s Profile\n            </div> <!-- card header -->\n\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"Name\" class=\"col-sm-10 col-form-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Name\" value= {{Me.Name}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Age\" class=\"col-sm-10 col-form-label\">Age</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Age\" value= {{Me.Profile.Age}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Height\" class=\"col-sm-10 col-form-label\">Height</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Height\" value= \"{{Me.Profile.Height}} cm\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Weight\" class=\"col-sm-10 col-form-label\">Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Weight\" value= \"{{Me.Profile.Weight}} kg\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"BMI\" class=\"col-sm-10 col-form-label\">BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"BMI\" value= {{Me.Profile.BMI}}>\n                        </div>\n                    </div>                    \n                    <div class=\"form-group row\">\n                        <label for=\"GoalWeight\" class=\"col-sm-10 col-form-label\">Goal Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalWeight\" value= \"{{Me.Profile.GoalWeight}} kg\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"GoalBMI\" class=\"col-sm-10 col-form-label\">Goal BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalBMI\" value= {{Me.Profile.GoalBMI}}>\n                        </div>\n                    </div>  \n                </form>\n            </div> <!-- card body -->\n        </div> <!-- card -->\n    </div><!-- column -->\n    <!-- Saved Profile display ends-->\n\n    <!-- Set Workout Date -->\n    <div class =\"col-md-8\">\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none' : Me.Month && Me.Date}\">\n                <div class=\" card-header-own \">\n                    <div class=\"text-uppercase d-flex justify-content-center\" >\n                        Set Your Date\n                    </div>\n                    <div class=\" d-flex justify-content-center subtitle\">\n                        Record the Date You Worked Out Or Continue Where You Left\n                    </div>\n                </div> <!-- card header -->\n                    \n                    <div class=\"card-body d-flex justify-content-center\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <form>\n                                    <div class=\"row d-flex justify-content-center\">\n                                        <div class=\"col\">\n                                            <input #month type=\"number\" class=\"form-control\" placeholder=\"Month\">\n                                        </div> \n                                        <div class=\"col\">\n                                            <input #date type=\"number\" class=\"form-control\" placeholder=\"Date\">\n                                        </div>\n                                        <div class=\"col\">\n                                            <div class=\"d-flex justify-content-end\">\n                                                <button class=\"btn btn-primary\" \n                                                        type=\"submit\" \n                                                        (click)=\"addTime($event, month.value, date.value)\">\n                                                    Save\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div> <!-- row -->\n                                </form>\n                            </div> <!-- col -->\n                            \n                        </div> <!-- row -->\n                    </div> <!-- card body -->\n                        \n            </div> <!-- card -->\n        </div> <!-- row -->\n        <!-- Set Workout -->\n\n        <!-- Workout List -->\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Month && !Me.Date}\" >\n                <div class=\"card-header-own\">\n                    <div class=\"text-uppercase\">\n                        Workout List \n                    </div>\n                    <div class=\"subtitle\">Click to add workout to your plan</div>\n                </div> <!-- card header -->\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                            <option *ngFor=\"let list of ExerciseList\" (click)=\"submitWorkout($event, list)\">\n                                {{list}}\n                            </option>\n                            </select>\n                        </div>\n                    </form>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n        <!-- Workout List -->\n        \n        <!-- Workout Plan-->\n            <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Month && !Me.Date}\">\n                <div class=\"card-header-own heightAdjust\">\n                    <div class=\"text-uppercase today\" >\n                        {{Me.Month}} {{Me.Date}}\n                    </div>\n                    <div class=\"text-uppercase \">\n                        Workout Plan\n                    </div>\n    \n                    <div class=\"subtitle\">Add your time and sets.<br/> When you are done, click Done button</div>\n\n                </div> <!-- card header -->\n                \n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush \">\n                        <li *ngFor=\"let list of Me.PlanExercise\"\n                            [ngClass]=\"{ 'list-group-item-success': list.Chosen }\"                            \n                            class=\"list-group-item list-group-flush \">\n                            {{list.Text}}\n                            <form>\n                                <div class=\"row d-flex justify-content-end\">\n                                    <div class=\"col\">\n                                    <input #time type=\"number\" class=\"form-control\" placeholder=\"Minutes\">\n                                    </div>\n                                    <div class=\"col\">\n                                    <input #set type=\"number\" class=\"form-control\" placeholder=\"Sets\">\n                                    </div>\n                                </div>\n                            </form>\n                            <div class=\"d-flex justify-content-end\">\n                                <button (click)=\"doneExercise($event, list.Text, time.value, set.value)\"\n                                        class=\"col-sm-3 btn btn-sm btn-primary\">\n                                        Done\n                                </button>\n                            </div>\n                        </li>\n                    </ul>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n\n\n        </div> <!-- row -->\n        <!-- Workout Plan-->\n\n        <!-- Workout Log -->\n        <div class = \"row-md-4\">\n            <div class=\"card tracking display-none\" [ngClass]=\"{'display-none': !Me.Month && !Me.Date}\">\n                <div class=\"card-header-own heightAdjust-big date\">\n                    <div class=\"text-uppercase subtitle\">\n                            You worked out on <br /> {{Me.Month}} {{Me.Date}}\n                    </div> \n                    <div class=\"text-uppercase\">\n                        Workout Log \n                    </div> \n                    <div class=\"subtitle\"> Well Done, You Are The Best!  </div>\n                </div> <!-- card header -->\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush\" *ngFor= \"let choice of Me.DoneExerciseList\">\n                        <li class=\"list-group-item \">\n                            {{choice.Text}}\n                            <div>\n                                <i class=\"badge float-right badge-info d-flex justify-content-end\" >\n                                    Total Cycle: {{choice.TotalTime}} min \n                                </i>\n                                <i class=\"badge float-right badge-light d-flex justify-content-end\" >\n                                    Total Set: {{choice.Set}} times\n                                </i>\n                                <i class=\"badge float-right badge-light d-flex justify-content-end\" >\n                                    Total Time: {{choice.Time}} min \n                                </i>\n                            </div>\n                            \n                        </li>\n                    </ul>\n                    <div class=\"card-body\">\n                        <i>\n                            Your Total Workout Time: {{Me.TotalSetTime}} minutes\n                        </i>\n                    </div>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n        </div> <!-- row -->\n    <!-- Workout Log -->\n\n    <!-- Reset -->\n        <div class=\"row-md-4 display-none \" [ngClass]=\"{'display-none' : !Me.Month && !Me.Date}\">\n            <div class=\"card-body \" style=\"border: 1px solid #7CACEA\" >\n                <div class=\"d-flex justify-content-center\"> Ready to track another workout? </div>\n                <div class=\"d-flex justify-content-center\">Reset your Workout List!</div>\n                <div class=\" d-flex justify-content-center\">\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"reset($event)\">Reset</button>\n                </div>\n            </div> <!-- card body -->\n        </div> <!-- row -->\n    <!-- Reset -->\n\n    </div> <!-- column -->\n</div> <!-- row -->"

/***/ }),

/***/ "./src/app/fit/fit.component.ts":
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
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var FitComponent = /** @class */ (function () {
    // date: Date;
    function FitComponent(http, _Messages, _Fit, _Router) {
        this.http = http;
        this._Messages = _Messages;
        this._Fit = _Fit;
        this._Router = _Router;
        this.Me = _Fit.Me;
        this.Model = _Fit.Model;
        this.ExerciseList = _Fit.ExerciseStack;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
        // setInterval(()=> this.refreshList(), 1000);
        //  this.date = new Date();
    }
    FitComponent.prototype.ngOnInit = function () {
    };
    FitComponent.prototype.refreshList = function () {
        /*    this._Fit.getDay().subscribe(data=>{
             this.Me.Date = data;
           })
           this._Fit.getMonth().subscribe(data=>{
             this.Me.Month = data;
           })
         */
        /* this._Fit.getUserStatus().subscribe(data=>{
          this.Me = data;
        })  */
    };
    // Record the month and the date ((user input)) of completed workout
    FitComponent.prototype.addTime = function (e, month, date) {
        e.preventDefault();
        if (!date || !month) {
            alert('Please input month and date');
            return;
        }
        while (true) {
            if (month == 1) {
                month = 'January';
                break;
            }
            else if (month == 2) {
                month = 'February';
                break;
            }
            else if (month == 3) {
                month = 'March';
                break;
            }
            else if (month == 4) {
                month = 'April';
                break;
            }
            else if (month == 5) {
                month = 'May';
                break;
            }
            else if (month == 6) {
                month = 'June';
                break;
            }
            else if (month == 7) {
                month = 'July';
                break;
            }
            else if (month == 8) {
                month = 'August';
                break;
            }
            else if (month == 9) {
                month = 'September';
                break;
            }
            else if (month == 10) {
                month = 'October';
                break;
            }
            else if (month == 11) {
                month = 'November';
                break;
            }
            else if (month == 12) {
                month = 'December';
                break;
            }
            else {
                alert('Please input between 1 - 12');
                return;
            }
        }
        if (date < 1 || date > 31) {
            alert('Please input between 1 - 31');
            return;
        }
        var key = month + ' / ' + date;
        // create a new date history
        if (!this.Me.History.find(function (x) { return x.KeyDate == key; })) {
            this.Me.PlanExercise = [];
            this.Me.DoneExerciseList = [];
            this.Me.Month = month;
            this.Me.Date = date;
            this.Me.History.push({ Name: this.Me.Name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0,
                Month: month, Date: date, KeyDate: key.toString() });
            this._Fit.SetDay(this.Me.Name, key, month, date);
        }
        else {
            // find user's history from History[] then return to the user.
            var result = this.Me.History.find(function (x) { return x.KeyDate == key; });
            this.Me.Month = result.Month;
            this.Me.Date = result.Date;
            this.Me.DoneExerciseList = result.DoneExerciseList;
            this.Me.PlanExercise = result.PlanExercise;
            this.Me.TotalSetTime = result.TotalSetTime;
            this._Fit.SetDay(this.Me.Name, key, month, date);
        }
    };
    FitComponent.prototype.submitWorkout = function (e, text) {
        e.preventDefault();
        // prevent submitting same list again and again.
        if (this.Me.PlanExercise.find(function (x) { return x.Text == text; })) {
            return;
        }
        else {
            // to display current date and Me's workout list
            this.Me.PlanExercise.push({ Text: text, Chosen: false });
        }
        var key = this.Me.Month + ' / ' + this.Me.Date;
        // find the user's plan history from History[] by key
        if (this.Me.History.find(function (x) { return x.KeyDate == key; }).PlanExercise.length == 0) {
            this.Me.History.find(function (x) { return x.KeyDate == key; }).PlanExercise.push({ Text: text, Chosen: false });
            this._Fit.planHistory(text, key);
        }
        else {
            var result = this.Me.History.find(function (x) { return x.KeyDate == key; });
            this.Me.Month = result.Month;
            this.Me.Date = result.Date;
            this.Me.DoneExerciseList = result.DoneExerciseList;
            this.Me.PlanExercise = result.PlanExercise;
            this.Me.TotalSetTime = result.TotalSetTime;
            this._Fit.planHistory(text, key);
        }
    };
    // doneExercise() will track the completed workout that a user checks it as "done"
    FitComponent.prototype.doneExercise = function (e, text, time, set) {
        e.preventDefault();
        var key = this.Me.Month + ' / ' + this.Me.Date;
        var totalTime = time * set;
        // if text is chosen, change the color by submitting the text to server and changing Chosen to true.
        this._Fit.makeChosen(text, key);
        // if the workout list is already exist, don't push it
        if (this.Me.DoneExerciseList.find(function (x) { return x.Text == text; })) {
            var user = this.Me.DoneExerciseList.find(function (x) { return x.Text == text; });
            // keep tracking of total workout time
            user.Time = Number(user.Time) + Number(time);
            user.Set = Number(user.Set) + Number(set);
            user.TotalTime = Number(user.TotalTime) + Number(totalTime);
            this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
            this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
            this._Fit.doneExercise(text, time, set, totalTime);
        }
        else {
            // to display current date and Me's workout list
            this.Me.DoneExerciseList.push({ Text: text, Time: time, Set: set, TotalTime: totalTime });
            // tracking the total workout time 
            this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
            this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
            this._Fit.doneExercise(text, time, set, totalTime);
        }
        // Find user's history and return to the user so that user can see each date's data.
        if (this.Me.History.find(function (x) { return x.KeyDate == key; }).DoneExerciseList.length == 0) {
            console.log('+++++++++++++++++ If there is no history for this date');
            console.log(this.Me);
            this.Me.History.find(function (x) { return x.KeyDate == key; }).DoneExerciseList.push({ Text: text, Time: time, Set: set, TotalTime: totalTime });
            this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
            this._Fit.RecordDay(text, key, time, set, totalTime);
        }
        else {
            var result = this.Me.History.find(function (x) { return x.KeyDate == key; });
            this.Me.Month = result.Month;
            this.Me.Date = result.Date;
            this.Me.DoneExerciseList = result.DoneExerciseList;
            console.log('......... Here? ');
            console.log(this.Me);
            this.Me.PlanExercise = result.PlanExercise;
            this.Me.TotalSetTime = result.TotalSetTime;
            this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
            this._Fit.RecordDay(text, key, time, set, totalTime);
        }
        /*
            // find user's complete exercise list  from History, and show it to user.
            if(this.Me.History.find(x => x.KeyDate == key)){
              this.Me.History.find(x => x.KeyDate == key).Name = this.Me.Name;
              this.Me.History.find(x => x.KeyDate == key).DoneExerciseList = this.Me.DoneExerciseList;
              this.Me.History.find(x => x.KeyDate == key).PlanExercise = this.Me.PlanExercise;
              this.Me.History.find(x => x.KeyDate == key).TotalSetTime = this.Me.TotalSetTime;
              this.Me.History.find(x => x.KeyDate == key).Month = this.Me.Month;
              this.Me.History.find(x => x.KeyDate == key).Date = this.Me.Date;
              // send this history to server
              this._Fit.RecordDay(this.Me, key);
        
        
            } */
        // console.log('_comp_doneEx_this.Me.History');
        // console.log(this.Me.History);
    };
    // when user hits Reset button, reset the page (workout lists)
    FitComponent.prototype.reset = function (e) {
        // call set day retrieve history
    };
    FitComponent = __decorate([
        core_1.Component({
            selector: 'app-fit',
            template: __webpack_require__("./src/app/fit/fit.component.html"),
            styles: [__webpack_require__("./src/app/fit/fit.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http,
            messages_service_1.MessagesService,
            fit_service_1.FitService,
            router_1.Router])
    ], FitComponent);
    return FitComponent;
}());
exports.FitComponent = FitComponent;


/***/ }),

/***/ "./src/app/history/history.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 5px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.heightAdjust{\n    height: 160px;\n}\n\n.heightAdjust-big{\n    height: 200px;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 3px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.text-uppercase-own{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.list-group-item-success{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.badge{\n    margin-left: 5px;\n}\n\n.display-none{\n    display: none;\n}\n\n.today{\n    color: white;\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row-md-4\">\n  <div class=\"card\" >\n      <div class=\"card-header-own\">\n          <div class=\"text-uppercase\">\n              Workout Day\n          </div>\n          <div class=\"subtitle\">Select Your Date to See Your Workout History </div>\n      </div>\n      <div class=\"card-body\">\n          <form>\n              <div class=\"form-group\">\n                  <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                  <option *ngFor=\"let list of Me.History\" (click)=\"submitLog($event, list.KeyDate)\">\n                      {{list.KeyDate}}\n                  </option>\n                  </select>\n              </div>\n          </form>\n      </div>\n  </div>\n\n\n  <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Summary}\">\n      <div class=\"card-header-own heightAdjust\">\n          \n          <div class=\"text-uppercase \">\n              Workout Summary\n          </div>\n\n          <div class=\"subtitle\">Enjoy your Achievement!</div>\n\n      </div>\n      \n      <div class=\"card-body\">\n          <ul class=\"list-group list-group-flush \">\n              <li *ngFor=\"let list of Me.Summary.DoneExerciseList\"\n                  class=\"list-group-item list-group-flush \">\n                  {{list.Text}}\n              </li>\n          </ul>\n      </div>\n      <div class=\"card-text\">\n        <div class=\"d-flex justify-content-center\">\n            <i class=\"badge float-right badge-info\" >\n              Total Time: {{Me.Summary.TotalSetTime}} min <br />\n            </i>\n        </div>\n      </div>\n\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/history/history.component.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent(_Fit, _Router) {
        this._Fit = _Fit;
        this._Router = _Router;
        this.Me = _Fit.Me;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent.prototype.submitLog = function (e, key) {
        console.log('submit log');
        if (this.Me.History.find(function (x) { return x.KeyDate == key; })) {
            console.log('history found');
            this._Fit.getSummary(key);
            console.log('this.Me.Summary');
            console.log(this.Me.Summary);
        }
        else {
            console.log('no history found');
        }
    };
    HistoryComponent = __decorate([
        core_1.Component({
            selector: 'app-history',
            template: __webpack_require__("./src/app/history/history.component.html"),
            styles: [__webpack_require__("./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, router_1.Router])
    ], HistoryComponent);
    return HistoryComponent;
}());
exports.HistoryComponent = HistoryComponent;


/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".btn{\n    margin-top: 10px;\n}\n.center{\n    margin: 0 auto;\n    max-width: 100%;\n    width: 100px;\n    padding: 1rem;\n}\n.list{\n    list-style-type: none;\n}\n.center-img{\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 500px;\n}\n.lead{\n    color:  #1C5F93;\n}\n@media only screen and (max-width: 480px) {\n    /*change to vertical nav bar*/\n    .navbar{\n        \n    }\n}"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Need to find health info database api-->\n<!-- <div class=\"card\">\n    <img class=\"card-img-top card-img-bottom\" *ngIf=\"Model.HealthInfo\" [src]=\"Model.HealthInfo.url\" /> \n    <div class = \"card-img-overlay\" style=\"text-align: center\">\n      <button class=\"btn btn-success btn-lg\" (click)=\"getHealthInfo($event)\">\n              Get Health Information\n      </button>\n    </div>\n</div> \n -->\n\n<div class=\"jumbotron\">\n  <h1 class=\" d-flex justify-content-center display-4\">Welcome to Fitness Tracker!</h1>\n  <div class=\"d-flex justify-content-center\">\n    <p class=\"lead\">This is a simple fitness tracker app. You can use it as if it's your workout journal! </p>\n  </div>\n  <div class=\"d-flex justify-content-center\">\n    <p class=\"lead\">You can record your date and workout lists to be proud of your awesome achievement!</p>\n  </div>\n  <hr class=\"my-4\">\n  <img src=\"https://images.pexels.com/photos/864990/pexels-photo-864990.jpeg?cs=srgb&dl=active-adult-aerobic-864990.jpg&fm=jpg\" \n      class = \"center-img\">\n  <span class=\"d-flex justify-content-center\">\n      <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>\n  </span>\n  <span class=\"d-flex justify-content-center\">\n    <a class=\"btn btn-primary btn-lg\" href=\"/sign-up\" role=\"button\">Get Started</a>\n  </span>\n</div>"

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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, _Fit) {
        this.http = http;
        this._Fit = _Fit;
        this._api = "http://localhost:8080/fit";
        this.Me = _Fit.Me;
        // setInterval(()=> this.refresh(), 1000)
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http, fit_service_1.FitService])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    \n    padding: 0.4rem 0.4rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.btn-margin{\n    margin:0px;\n}\n\n.col-sm-2{\n    margin: 2px;\n    padding: 0.2rem;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- existing user sign in here -->\n<div class=\"d-flex justify-content-center\">\n    <div class=\"card text-center\" style=\"width: 30rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Please Sign In</div>\n        </div>\n        <div class =\"text-uppercase black\">\n            Already a user? \n        </div>\n        <div class=\"font-margin\">\n            Please Sign In\n        </div> \n        <div class=\"login-form\" >\n            <input #Name type =\"text\" placeholder =\"User Name\"/><br/>\n            <input #Password type =\"text\" placeholder =\"Password\" />\n        </div>\n    \n        <div class=\"row justify-content-center\">\n            <div class=\"col-sm-2\">\n                <button class=\" btn btn-margin\" (click)=\"login(Name.value, Password.value)\" >Sign In</button>\n            </div>\n            <div class=\"col-sm-2\">\n                <button class=\"btn btn-margin\" (click)=\"googleLogin()\" >Sign In with Google</button>\n            </div>\n        </div>\n        <div class=\"card-link\">\n            <div class =\"text-uppercase black\">\n                New to Here?\n            </div>\n            \n            <button type=\"submit\" class=\"btn btn-sm\">\n                <div class=\"nav-link\" routerLink=\"/sign-up\" >\n                    Please Sign Up\n                </div> \n            </button>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Fit) {
        this._Fit = _Fit;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    // pass name and password to Service for a user to sign-in
    LoginComponent.prototype.login = function (name, password) {
        this._Fit.login(name, password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/messages/messages.component.css":
/***/ (function(module, exports) {

module.exports = "#messages {\n    padding-top: 0.5rem;\n    padding-left: 0.2rem;\n    \n}\n\n.button {\n    margin-left: 5px;\n    color: #1C5F93;\n    font-weight: bold;\n    float: right;\n    font-size: 22px;\n    line-height: 20px;\n    cursor: pointer;\n    -webkit-transition: 0.3s;\n    transition: 0.3s;\n}\n\n.button:hover {\n    color: black;\n    cursor: pointer;\n}\n\n.alert{\n    padding: 10px;\n    border: 2px solid #CFD5E1;\n    color: #1C5F93;\n    margin-bottom: 15px;\n}\n\n.msg{\n    list-style-type: none;\n    padding-top: 0.2rem;\n    padding-left: 0.2rem;\n    padding-bottom: 0.2rem;\n}\n\nh3{\n    text-align: center;\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"messages\">\n  <div class=\"alert\" *ngFor=\"let msg of Messages.Messages; let i = index;\">\n    <!-- Binding-->\n    <button class=\"close\" (click) = \"delete(i)\"> <!-- javascript-->\n      &times;\n    </button>\n\n    {{msg}}\n    \n    \n  </div><!-- Alert -->\n</div><!--messages-->\n\n\n"

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
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(Messages) {
        this.Messages = Messages;
    }
    MessagesComponent.prototype.ngOnInit = function () {
    };
    MessagesComponent.prototype.delete = function (i) {
        this.Messages.Messages.splice(i, 1);
    };
    MessagesComponent = __decorate([
        core_1.Component({
            selector: 'app-messages',
            template: __webpack_require__("./src/app/messages/messages.component.html"),
            styles: [__webpack_require__("./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [messages_service_1.MessagesService])
    ], MessagesComponent);
    return MessagesComponent;
}());
exports.MessagesComponent = MessagesComponent;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    padding: 0 1rem;\n    height: 120px;\n  }\n  \n  .nav-back{\n    background-color: #7CACEA;\n}\n  \n  .navbar-brand{\n  font-size: 20px;\n}\n  \n  .navbar-nav\n{\n  font-size:20px;\n \n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark nav-back\">\n  <div class=\"container\">\n    <div>\n        <a class=\"navbar-brand\" routerLink=\"/fit\">Fitness Tracker</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse navbar-nav\" id=\"#navbarNav\">\n      <ul class=\"navbar-nav navbarNav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/editProfile\" routerLinkActive=\"active\" >Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/fit\" routerLinkActive=\"active\" >Fitness</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/history\" routerLinkActive=\"active\">History</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/share\" routerLinkActive=\"active\">Share</a>\n        </li>\n       \n\n      </ul>\n    </div>\n\n    \n\n    <div class=\"d-flex justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign Up</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Sign In</a>\n        </li>\n      </ul>\n    </div>\n  </div><!-- navbar container -->\n</nav><!-- nav bar -->\n\n\n"

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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var NavComponent = /** @class */ (function () {
    function NavComponent(_Fit) {
        this._Fit = _Fit;
    }
    NavComponent.prototype.ngOnInit = function () {
    };
    NavComponent = __decorate([
        core_1.Component({
            selector: 'app-nav',
            template: __webpack_require__("./src/app/nav/nav.component.html"),
            styles: [__webpack_require__("./src/app/nav/nav.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService])
    ], NavComponent);
    return NavComponent;
}());
exports.NavComponent = NavComponent;


/***/ }),

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 15px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.textWrap{\n    height: 150px;\n   padding: 1.2rem;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase-own{\n    text-transform: uppercase;\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  >\n  <div class=\"card-header-own\">\n  <div class=\"text-uppercase-own\">Please Create Your Profile Before Tracking Your Workout!</div> \n  <div class=\"text-uppercase\">Profile</div>\n  \n\n  </div>\n  <form>\n      <div class=\"form-row\">\n  \n      <div class=\"form-group col-md-4\">\n          <label for=\"inputName\">Name</label>\n          <input #name disabled type=\"text\" class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n      </div>\n  \n      <div class=\"form-group col-md-4\">\n          <label for=\"inputAge\">Age</label>\n          <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" placeholder=\"Age\" >\n      </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"inputHeight\">Height</label>\n          <input #height type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"cm\">\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"inputWeight\">Weight</label>\n          <input #weight type=\"number\" class=\"form-control\" id=\"inputWeight\" placeholder=\"kg\">\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"inputGoalWeight\">Goal Weight</label>\n          <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" placeholder=\"kg\">\n      </div>\n      </form>\n  <div>\n      <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"adding(age.value, weight.value, height.value, goalWeight.value, name.value)\">Save</button>\n  </div> \n</div> <!-- Profile Form ends-->\n\n\n\n        "

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_Fit) {
        this._Fit = _Fit;
        this.Me = this._Fit.Me;
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    // pass user's profile information to Service after calculating all bmi.
    ProfileComponent.prototype.adding = function (age, weight, height, goalWeight, name) {
        var goalBmi = this.calculateBMI(goalWeight, height);
        var bmi = this.calculateBMI(weight, height);
        this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
    };
    // calculate BMI.
    ProfileComponent.prototype.calculateBMI = function (weight, height) {
        return Math.round((weight / height / height * 10000) * 100) / 100;
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'app-profile',
            template: __webpack_require__("./src/app/profile/profile.component.html"),
            styles: [__webpack_require__("./src/app/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;


/***/ }),

/***/ "./src/app/services/fit.service.ts":
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
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
__webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
var FitService = /** @class */ (function () {
    function FitService(http, _Router) {
        this.http = http;
        this._Router = _Router;
        this._api = "http://localhost:8080/fit";
        this.ExerciseStack = [];
        this.ExerciseStack = [
            "Squat",
            "Plank",
            "Running",
            "Jump Rope",
            "Swimming",
            "Walk",
            "Aerobic Dance",
            "Zumba",
            "Yoga",
            "Centergy",
            "Stretching",
            "Gentle Yoga",
            "Push Up"
        ];
        //   setInterval(()=> this.refresh(), 1000)
    }
    /*  refresh(){
       this.http.get(this._api + "/state")
           .subscribe(data=> this.Model = data.json())
     } */
    // initialize user's data when they sign-up.
    FitService.prototype.signUp = function (name, password) {
        var _this = this;
        this.Me = { Name: name, Password: password, Profile: { Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null },
            PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0, EachShare: [], Notice: [], Requested: false, FriendList: [], History: [],
            Month: null, Date: null, Summary: { Name: name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0, Month: 0, Date: 0, KeyDate: null } };
        this.http.get(this._api + "/sign-up", { params: { name: name, password: password } })
            .subscribe(function (data) {
            if (!data.json()) {
                // alert user name taken
                alert("User Name is taken, please try different name");
                return;
            }
            _this._Router.navigate(['/profile']);
        });
    };
    /* oAuthLogin(name: string, token: string, pic: string){
      // this.Me = { Name: name };
      // this.pic = pic;
      // this.token = token;
      this.Me = {Name: name, Password: null, Profile: {Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null },
      PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0};
      this._Router.navigate(['/fit']);
    } */
    // get user's information from the server.
    FitService.prototype.login = function (name, password) {
        var _this = this;
        this.http.get(this._api + "/exercise/login", { params: { name: name, password: password } })
            .subscribe(function (data) {
            var check = data.json();
            // if there is no username or password matching in the server, alert.
            if (!check) {
                alert('Username or Password doesn\'t match in our system! - service ');
                return;
            }
            // if there is a user, set Me to received data.
            _this.Me = data.json();
            _this._Router.navigate(['/fit']);
        });
    };
    // add user's profile to server
    FitService.prototype.profileAdd = function (age, weight, height, goalWeight, bmi, goalBmi, name) {
        var _this = this;
        this.http.post(this._api + "/exercise/profile", { Age: age, Weight: weight, Height: height,
            GoalWeight: goalWeight, BMI: bmi,
            GoalBMI: goalBmi, name: name })
            .subscribe(function (data) {
            _this.Me.Profile = data.json();
        });
        this._Router.navigate(['/fit']);
    };
    // set the month and the date of user's log in the server.
    FitService.prototype.SetDay = function (name, key, month, date) {
        var _this = this;
        this.http.post(this._api + '/exercise/setDay', { name: name, key: key, month: month, date: date })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
            _this.Me.History = data.json();
        });
    };
    // post planned workout list to the History[] in server
    FitService.prototype.planHistory = function (text, key) {
        var _this = this;
        this.http.post(this._api + "/exercise/planHistory", { name: this.Me.Name, Text: text, key: key })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
            _this.Me.PlanExercise = data.json();
        });
    };
    // set the selected workout list to the server and make Chosen to true
    FitService.prototype.makeChosen = function (text, key) {
        var _this = this;
        this.http.post(this._api + "/exercise/chosen", { name: this.Me.Name, text: text, key: key })
            .subscribe(function (data) {
            _this.Me.PlanExercise = data.json();
        });
    };
    // post selected workout to the server
    FitService.prototype.doneExercise = function (text, time, set, totalTime) {
        var _this = this;
        console.log('--------------');
        this.http.post(this._api + '/exercise/done', { name: this.Me.Name, text: text, time: time, set: set, total: totalTime })
            .subscribe(function (data) {
            console.log('/// data.json() ///');
            console.log(data.json());
            if (!data.json()) {
                return;
            }
            _this.Me.DoneExerciseList = data.json();
        });
    };
    // post total workout time to the server
    FitService.prototype.getTotalTime = function (name, key, totalTime) {
        var _this = this;
        console.log('///// Get Total Time Service ////');
        this.http.post(this._api + "/exercise/totaltime", { name: name, key: key, totalTime: totalTime })
            .subscribe(function (data) {
            _this.Me.TotalSetTime = Number(data.json());
        });
    };
    // Update the Done Exercise List in History[] in the server.
    FitService.prototype.RecordDay = function (text, key, time, set, totalTime) {
        var _this = this;
        this.http.post(this._api + '/exercise/recordDay', { name: this.Me.Name, key: key, text: text, time: time, set: set, total: totalTime })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
            _this.Me.DoneExerciseList = data.json();
        });
    };
    // get the list of other users from the server
    FitService.prototype.getUserList = function () {
        return this.http.get(this._api + '/exercise/people', { params: { name: this.Me.Name } })
            .map(function (response) { return response.json(); });
    };
    // get the updated information from the server to refresh Share Component.
    FitService.prototype.getRequestState = function () {
        return this.http.get(this._api + '/exercise/request/state', { params: { name: this.Me.Name } })
            .map(function (response) { return response.json(); });
    };
    // Send a request notice to a selected user.
    FitService.prototype.friendRequest = function (friendName) {
        this.http.post(this._api + '/exercise/request', { friend: friendName, name: this.Me.Name })
            .subscribe();
    };
    // Add friends to this user's FriendList in the server when user accepts the request.
    FitService.prototype.addFriendList = function (friendName) {
        var _this = this;
        this.http.post(this._api + '/exercise/addFriend', { name: this.Me.Name, friend: friendName })
            .subscribe(function (data) {
            _this.Me.FriendList = data.json();
            console.log('FriendList ---');
            console.log(_this.Me.FriendList);
        });
    };
    // if user gets friend request, change the Requested status to inform the user that they have friend requests.
    FitService.prototype.changeRequested = function (name) {
        this.http.post(this._api + '/exercise/changeRequest', { name: name })
            .subscribe();
    };
    // get summary from the server to display it at History
    FitService.prototype.getSummary = function (key) {
        var _this = this;
        // console.log('getSummary this.Me');
        // console.log(this.Me);
        this.http.get(this._api + "/exercise/summary", { params: { user: this.Me.Name, key: key } })
            .subscribe(function (data) {
            // console.log('_service_ getSummary gets data.json()');
            // console.log(data.json());
            _this.Me.Summary = data.json();
            // console.log('Summary +++++');
            // console.log(this.Me.Summary);
        });
    };
    FitService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http,
            router_1.Router])
    ], FitService);
    return FitService;
}());
exports.FitService = FitService;


/***/ }),

/***/ "./src/app/services/messages.service.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var MessagesService = /** @class */ (function () {
    function MessagesService(_Fit) {
        this._Fit = _Fit;
        this.Messages = [];
        this.Messages = ['Complete your Profile before you begin to plan your workout.', 'You can choose your workout plan.'];
    }
    MessagesService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [fit_service_1.FitService])
    ], MessagesService);
    return MessagesService;
}());
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./src/app/share/share.component.css":
/***/ (function(module, exports) {

module.exports = "ul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n    \n}\n\n.btn-color{\n    background-color: #F4C3D8;\n    border: none;\n    color: white;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 10px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.text-uppercase-own{\n    font-size: 12px;\n    color: white;\n}\n\n.heightAdjust{\n    height: 160px;\n}"

/***/ }),

/***/ "./src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-3\">\n    <button class=\"btn btn-color\" disabled *ngIf=\"!Me.Requested\">No Friend Request</button>\n    <button class=\"btn btn-warning\"  *ngIf=\"Me.Requested\" (click)=\"requestBox($event)\">You Have a Friend Request</button>\n  </div>\n</div>\n<div class=\"row justify-content-md-center\">\n  <!-- Choose a user to share workout log-->\n  <div class=\"col-md-4\">\n      <div class=\"card\" >\n          <div class=\"card-header heightAdjust\">\n            <div class=\"text-uppercase\">Users List</div>\n            <div class=\"subtitle\"> Please choose a user you want to share your workout summary</div>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group-item list-group-flush list\" *ngFor =\" let users of Me.EachShare\">\n                <li  >User Name: {{users.Name}}\n                  <button class=\"btn btn-color btn-sm d-flex justify-content-end display-none\" (click) = \"friendRequest($event, users.Name)\" [ngClass]=\"{'display-none': !users.Requested}\" > Request Friend </button>\n                  <button class=\"btn btn-sm btn-light d-flex justify-content-end display-none\" disabled [ngClass]=\"{'display-none': users.Requested}\"> Requested </button>\n                </li>\n    \n            </ul>\n          </div>\n      </div> \n    </div>\n\n  <div class=\"col-md-4\">\n    <div class=\"card\" >\n        <div class=\"card-header\">\n          Other user's Workout Achievement\n        </div>\n        <ul class=\"list-group list-group-flush list\">\n          <li>users name and workout summary will be here</li>\n        </ul>\n    </div> \n  </div>\n\n    \n  <div class=\"col\">\n    <div class=\"card\" >\n      <div class=\"card-header\">\n        <div class=\"text-uppercase\">\n          Friends List\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-group-item list-group-flush list\" *ngFor = \"let friend of Me.FriendList\">\n          <li > {{friend.Name}}\n            <button class=\"btn btn-sm d-flex justify-content-end\" (click) = \"acceptFriend()\"> Share </button>\n\n          </li>\n        </ul>\n      </div>\n    </div> \n  </div> \n</div>\n\n\n"

/***/ }),

/***/ "./src/app/share/share.component.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var ShareComponent = /** @class */ (function () {
    function ShareComponent(_Fit, _Router) {
        var _this = this;
        this._Fit = _Fit;
        this._Router = _Router;
        this.Me = _Fit.Me;
        // if there user is not logged in or not signed up, direct user to login.
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
        setInterval(function () { return _this.refreshList(); }, 1000);
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.prototype.refreshList = function () {
        var _this = this;
        // refresh user's data 
        this._Fit.getRequestState().subscribe(function (data) {
            _this.Me = data;
        });
        // create other users list to share and refresh to update
        this._Fit.getUserList().subscribe(function (data) {
            _this.Me.EachShare = data;
            // remove myself from the share list
            _this.Me.EachShare.splice(_this.Me.EachShare.indexOf(_this.Me.EachShare.find(function (x) { return x.Name == _this.Me.Name; })), 1);
            //console.log(this.Me.EachShare);
        });
    };
    ShareComponent.prototype.friendRequest = function (e, friendName) {
        this._Fit.friendRequest(friendName);
        /* console.log('friendName is ' + friendName);
        console.log('###EachShare');
        console.log(this.Me.EachShare); */
        // this.Me.EachShare.find(x=> x.Name == friendName).FriendRequest = true;
    };
    ShareComponent.prototype.requestBox = function (e) {
        var _this = this;
        var friend = this.Me.Notice[0].Friend;
        console.log('friend name** ' + friend);
        if (confirm(this.Me.Notice.find(function (x) { return x.Name == _this.Me.Name; }).Msg + '\n Hit Ok to Accept or Cancel to Decline.')) {
            this._Fit.addFriendList(friend);
        }
        else {
            // dismiss request
        }
        this.Me.Notice.unshift();
        this._Fit.changeRequested(this.Me.Name);
    };
    ShareComponent = __decorate([
        core_1.Component({
            selector: 'app-share',
            template: __webpack_require__("./src/app/share/share.component.html"),
            styles: [__webpack_require__("./src/app/share/share.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, router_1.Router])
    ], ShareComponent);
    return ShareComponent;
}());
exports.ShareComponent = ShareComponent;


/***/ }),

/***/ "./src/app/sign-up/sign-up.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    color: white;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.btn{\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    font-weight: 300;\n    \n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    \n    padding: 0.4rem 0.4rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    color: #7CACEA;\n}\n\n.selected{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.btn-margin{\n    margin-left:98px;\n    margin-top: 0px;\n\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- user sign up here -->\n<div class=\"row justify-content-center\">\n    <div class=\"card text-center\" style =\"width: 20rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Welcome!</div>\n        </div>\n            <div class=\"text-uppercase black\">New to Here?</div>\n            <div class=\"font-margin \">\n                Please Sign Up\n            </div>  \n            <div class=\"login-form\" >\n                <input #Name type =\"text\" placeholder =\"User Name\" /><br/>\n                <input #Password type =\"text\" placeholder =\"Password\" />\n            \n            </div>\n            <div class=\"btn-margin\">\n                <button class=\"btn\" (click)=\"newUser(Name.value, Password.value)\" >Sign Up</button>\n            </div>\n        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.ts":
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
var fit_service_1 = __webpack_require__("./src/app/services/fit.service.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(_Fit, _Messages) {
        this._Fit = _Fit;
        this._Messages = _Messages;
        this.Me = _Fit.Me;
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    // send name and password to Service to create a new user
    SignUpComponent.prototype.newUser = function (name, password) {
        this._Fit.signUp(name, password);
        console.log('Sign Up Yay');
        // this._Messages.Messages.push('Successfully Signed Up! Welcome, ' + name + '!');
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: 'app-sign-up',
            template: __webpack_require__("./src/app/sign-up/sign-up.component.html"),
            styles: [__webpack_require__("./src/app/sign-up/sign-up.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, messages_service_1.MessagesService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;


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