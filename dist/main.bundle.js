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

module.exports = ""

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
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
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
                ng_bootstrap_1.NgbModule.forRoot(),
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

module.exports = "\n.btn-own{\n    margin: 15px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.text-uppercase-own{\n    text-transform: uppercase;\n    font-size: 12px;\n    color: white;\n}\n\n"

/***/ }),

/***/ "./src/app/edit-profile/edit-profile.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Editing user's profile -->\n<div class=\"card\" >\n    <div class=\"card-header-own\">\n        <div class=\" text-uppercase\">\n            {{Me.Name}}'s Profile\n        </div>\n        <div class=\"text-uppercase-own\">Edit your profile or set your new goal</div> \n    </div> <!-- card header -->\n    \n    <div class=\"card-body\">\n        <form>\n            <div class=\"form-row\">\n                <div class=\"form-group col-md-4\">\n                    <label for=\"inputName\">Name</label>\n                    <input #name type=\"text\" readonly class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n                </div>\n            \n                <div class=\"form-group col-md-4\">\n                    <label for=\"inputAge\">Age</label>\n                    <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" [value]=\"Me.Profile.Age\" placeholder=\"Age\">\n                </div>\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Height\">Height</label>\n                <input #height type=\"number\" class=\"form-control\" id=\"Height\" [value]=\"Me.Profile.Height\" placeholder=\"cm\">\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"Weight\">Weight</label>\n                <input #weight type=\"number\" class=\"form-control\" id=\"Weight\" [value]=\"Me.Profile.Weight\" placeholder=\"kg\">\n            </div>\n        \n            <div class=\"form-group\">\n                <label for=\"inputGoalWeight\">Goal Weight</label>\n                <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" [value]=\"Me.Profile.GoalWeight\" placeholder=\"kg\">\n            </div>\n        </form>\n        <div>\n            <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"editing(age.value, weight.value, height.value, goalWeight.value, name.value)\">Edit</button>\n        </div> \n    </div><!-- card body-->\n</div>  <!-- card -->\n\n\n"

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

module.exports = "ul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 3px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.list-group-item-success{\n    background-color:#FBE9C1;\n}\n\n.badge{\n    margin-left: 5px;\n}\n\n.display-none{\n    display: none;\n}\n\n.today{\n    color: white;\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/app/fit/fit.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Display Saved Profile -->\n<div class=\"row\" >\n    <!-- Saved Profile Display -->\n    <div class=\"col-md-4\">\n        <div class=\"card\" >\n            <div class=\"card-header-own text-uppercase\">\n            {{Me.Name}}'s Profile\n            </div> <!-- card header -->\n\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"Name\" class=\"col-sm-10 col-form-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Name\" value= {{Me.Name}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Age\" class=\"col-sm-10 col-form-label\">Age</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Age\" value= {{Me.Profile.Age}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Height\" class=\"col-sm-10 col-form-label\">Height</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Height\" value= \"{{Me.Profile.Height}} cm\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Weight\" class=\"col-sm-10 col-form-label\">Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Weight\" value= \"{{Me.Profile.Weight}} kg\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"BMI\" class=\"col-sm-10 col-form-label\">BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"BMI\" value= {{Me.Profile.BMI}}>\n                        </div>\n                    </div>                    \n                    <div class=\"form-group row\">\n                        <label for=\"GoalWeight\" class=\"col-sm-10 col-form-label\">Goal Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalWeight\" value= \"{{Me.Profile.GoalWeight}} kg\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"GoalBMI\" class=\"col-sm-10 col-form-label\">Goal BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalBMI\" value= {{Me.Profile.GoalBMI}}>\n                        </div>\n                    </div>  \n                </form>\n            </div> <!-- card body -->\n        </div> <!-- card -->\n    </div><!-- column -->\n    <!-- Saved Profile display ends-->\n\n    <!-- Set Workout Date -->\n    <div class =\"col-md-8\">\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none' : Me.Month && Me.Date}\">\n                <div class=\" card-header-own \">\n                    <div class=\"text-uppercase d-flex justify-content-center\" >\n                        Set Your Date\n                    </div>\n                    <div class=\" d-flex justify-content-center subtitle\">\n                        Record the Date You Worked Out Or Continue Where You Left\n                    </div>\n                </div> <!-- card header -->\n                    \n                <div class=\"card-body d-flex justify-content-center\">\n                    <div class=\"row\">\n                        <div class=\"col\">\n                            <form>\n                                <div class=\"row d-flex justify-content-center\">\n                                    <div class=\"col\">\n                                        <input #month type=\"number\" class=\"form-control\" placeholder=\"Month\">\n                                    </div> \n                                    <div class=\"col\">\n                                        <input #date type=\"number\" class=\"form-control\" placeholder=\"Date\">\n                                    </div>\n                                    <div class=\"col\">\n                                        <div class=\"d-flex justify-content-end\">\n                                            <button class=\"btn btn-primary\" \n                                                    type=\"submit\" \n                                                    (click)=\"addTime($event, month.value, date.value)\" >\n                                                Save\n                                            </button>\n                                        </div>\n                                    </div>\n                                </div> <!-- row -->\n                            </form>\n                        </div> <!-- col -->\n                        \n                    </div> <!-- row -->\n                </div> <!-- card body -->\n                            \n            </div> <!-- card -->\n        </div> <!-- row -->\n        <!-- Set Workout Date -->\n\n        <!-- Recorded Date List -->\n        <div class=\"row-md-4\">\n            <div class=\"card\"  >\n                <div class=\"card-header-own\">\n                    <div class=\"text-uppercase\">\n                        Workout Record \n                    </div>\n                    <div class=\"subtitle\">Click to retrieve workout data on selected date.</div>\n                </div> <!-- card header -->\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                                <option *ngIf =\"Me.History.length == 0\">No Workout History Yet!</option>\n                                <option *ngFor=\"let list of Me.History\" (click)=\"submitDate($event, list.KeyDate)\">\n                                    {{list.KeyDate}}\n                                </option>\n                            </select>\n                        </div>\n                    </form>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n        </div> <!-- row -->\n        <!-- Recorded Date List -->\n \n\n        <!-- Workout List -->\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Month && !Me.Date}\" >\n                <div class=\"card-header-own\">\n                    <div class=\"text-uppercase\">\n                        Workout List \n                    </div>\n                    <div class=\"subtitle\">Click to add workout to your plan</div>\n                </div> <!-- card header -->\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                            <option *ngFor=\"let list of ExerciseList\" (click)=\"submitWorkout($event, list)\">\n                                {{list}}\n                            </option>\n                            </select>\n                        </div>\n                    </form>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n        </div><!-- row -->\n        <!-- Workout List -->\n        \n        <!-- Workout Plan-->\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Month && !Me.Date}\">\n                <div class=\"card-header-own\">\n                    <div class=\"text-uppercase today\" >\n                        {{Me.Month}} {{Me.Date}}\n                    </div>\n                    <div class=\"text-uppercase \">\n                        Workout Plan\n                    </div>\n                    <div class=\"subtitle\">Add your time and sets.<br/> When you are done, click Done button</div>\n\n                </div> <!-- card header -->\n                \n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush \">\n                        <li *ngFor=\"let list of Me.PlanExercise\"\n                            [ngClass]=\"{ 'list-group-item-success': list.Chosen }\"                            \n                            class=\"list-group-item list-group-flush \">\n                            {{list.Text}}\n                            <form>\n                                <div class=\"row d-flex justify-content-end\">\n                                    <div class=\"col\">\n                                    <input #time type=\"number\" class=\"form-control\" placeholder=\"Minutes\">\n                                    </div>\n                                    <div class=\"col\">\n                                    <input #set type=\"number\" class=\"form-control\" placeholder=\"Sets\">\n                                    </div>\n                                </div>\n                            </form>\n                            <div class=\"d-flex justify-content-end\">\n                                <button (click)=\"doneExercise($event, list.Text, time.value, set.value)\"\n                                        class=\"col-sm-3 btn btn-sm btn-primary\">\n                                        Done\n                                </button>\n                            </div>\n                        </li>\n                    </ul>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n        </div> <!-- row -->\n        <!-- Workout Plan-->\n\n        <!-- Workout Log -->\n        <div class = \"row-md-4\">\n            <div class=\"card tracking display-none\" [ngClass]=\"{'display-none': !Me.Month && !Me.Date}\">\n                <div class=\"card-header-own date\">\n                    <div class=\"text-uppercase subtitle\">\n                            You worked out on <br /> {{Me.Month}} {{Me.Date}}\n                    </div> \n                    <div class=\"text-uppercase\">\n                        Workout Log \n                    </div> \n                    <div class=\"subtitle\"> Well Done, You Are The Best!  </div>\n                </div> <!-- card header -->\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush\" *ngFor= \"let choice of Me.DoneExerciseList\">\n                        <li class=\"list-group-item \">\n                            {{choice.Text}}\n                            <div>\n                                <i class=\"badge float-right badge-info d-flex justify-content-end\" >\n                                    Total Cycle: {{choice.TotalTime}} min \n                                </i>\n                                <i class=\"badge float-right badge-light d-flex justify-content-end\" >\n                                    Total Set: {{choice.Set}} times\n                                </i>\n                                <i class=\"badge float-right badge-light d-flex justify-content-end\" >\n                                    Total Time: {{choice.Time}} min \n                                </i>\n                            </div>\n                            \n                        </li>\n                    </ul>\n                    <div class=\"card-body\">\n                        <i>\n                            Your Total Workout Time: {{Me.TotalSetTime}} minutes\n                        </i>\n                    </div>\n                </div> <!-- card body -->\n            </div> <!-- card -->\n        </div> <!-- row -->\n        <!-- Workout Log -->\n\n        <!-- Reset -->\n        <div class=\"row-md-4 display-none \" [ngClass]=\"{'display-none' : !Me.Month && !Me.Date}\">\n            <div class=\"card-body \" style=\"border: 1px solid #7CACEA\" >\n                <div class=\"d-flex justify-content-center\"> Ready to track another workout? </div>\n                <div class=\"d-flex justify-content-center\">Reset your Workout List!</div>\n                <div class=\" d-flex justify-content-center\">\n                    <button class=\"btn btn-sm btn-primary\" (click)=\"reset($event)\">Reset</button>\n                </div>\n            </div> <!-- card body -->\n        </div> <!-- row -->\n        <!-- Reset -->\n    </div><!-- col -->\n</div> <!-- row -->"

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
    }
    FitComponent.prototype.ngOnInit = function () {
    };
    // Record the month and the date ((user input)) of completed workout
    FitComponent.prototype.addTime = function (e, month, date) {
        e.preventDefault();
        // prevent empty submit.
        if (!date || !month) {
            alert('Please input month and date');
            return;
        }
        // convert month to corresponding string.
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
        // set number range for date
        if (date < 1 || date > 31) {
            alert('Please input between 1 - 31');
            return;
        }
        var key = month + ' / ' + date;
        // create a new date history
        if (!this.Me.History.find(function (x) { return x.KeyDate == key; })) {
            this.Me.PlanExercise = [];
            this.Me.DoneExerciseList = [];
            this.Me.TotalSetTime = 0;
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
    // submit previous date to get workout history of that day
    FitComponent.prototype.submitDate = function (e, key) {
        if (this.Me.History.find(function (x) { return x.KeyDate == key; })) {
            this._Fit.getHistory(key);
        }
        else {
            console.log('no history found');
        }
    };
    // submit planned workout list 
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
        if (!time || !set) {
            alert('Please enter time and set');
            return;
        }
        var key = this.Me.Month + ' / ' + this.Me.Date;
        var totalTime = time * set;
        // if text is chosen, change the color by submitting the text to server and changing Chosen to true.
        this._Fit.makeChosen(text, key);
        // Find user's history and return to the user so that user can see each date's data.
        if (!this.Me.History.find(function (x) { return x.KeyDate == key; }).DoneExerciseList.find(function (x) { return x.Text == text; })) {
            this.Me.TotalSetTime = this.Me.TotalSetTime + Number(totalTime);
            this.Me.History.find(function (x) { return x.KeyDate == key; }).TotalSetTime = Number(totalTime);
            this.Me.History.find(function (x) { return x.KeyDate == key; }).DoneExerciseList.push({ Text: text, Time: time, Set: set, TotalTime: totalTime });
            this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
            this._Fit.RecordDay(text, key, time, set, totalTime);
        }
        else {
            // if the workout list is already submitted, find the data via key.
            var user = this.Me.History.find(function (x) { return x.KeyDate == key; }).DoneExerciseList.find(function (x) { return x.Text == text; });
            this.Me.History.find(function (x) { return x.KeyDate == key; }).TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
            user.Time = Number(user.Time) + Number(time);
            user.Set = Number(user.Set) + Number(set);
            user.TotalTime = Number(user.TotalTime) + Number(totalTime);
            this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
            var result = this.Me.History.find(function (x) { return x.KeyDate == key; });
            this.Me.Month = result.Month;
            this.Me.Date = result.Date;
            this.Me.DoneExerciseList = result.DoneExerciseList;
            this.Me.PlanExercise = result.PlanExercise;
            this.Me.TotalSetTime = result.TotalSetTime;
            this._Fit.getTotalTime(this.Me.Name, key, this.Me.TotalSetTime);
            this._Fit.RecordDay(text, key, time, set, totalTime);
        }
    };
    // when user hits Reset button, reset the page.
    FitComponent.prototype.reset = function (e) {
        // call set day to either start a new date or to retrieve history
        this.Me.Month = null;
        this.Me.Date = null;
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

module.exports = "ul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 3px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.badge{\n    margin-left: 5px;\n}\n"

/***/ }),

/***/ "./src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- User's Workout Summary -->\n<div class=\"row d-flex justify-content-center\">\n    <div class=\"col-md-4\">\n        <div class=\"card\" >\n            <div class=\"card-header-own\">\n                <div class=\"text-uppercase\">\n                    Workout Day\n                </div>\n                <div class=\"subtitle\">Select Your Date to See Your Workout History </div>\n            </div> <!-- card header-->\n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group\">\n                        <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                        <option *ngIf =\"Me.History.length == 0\">No Workout History Yet!</option>\n                        <option *ngFor=\"let list of Me.History\" (click)=\"submitLog($event, list.KeyDate)\">\n                            {{list.KeyDate}}\n                        </option>\n                        </select>\n                    </div>\n                </form>\n            </div> <!-- card body -->\n        </div><!-- card-->\n    </div><!-- col -->\n\n    <div class=\"col-md-6\">\n        <div class=\"card\">\n            <div class=\"card-header-own\">\n                <div class=\"text-uppercase \">\n                    Workout Summary\n                </div>\n                <div class=\"subtitle\">Enjoy your Achievement!</div>\n            </div> <!-- card header-->\n            \n            <div class=\"card-body\">\n                <ul class=\"list-group list-group-flush \">\n                    <li *ngIf =\"Me.History.length == 0\">No Workout History Yet!</li>\n                    <li *ngFor=\"let list of Me.Summary.DoneExerciseList\"\n                        class=\"list-group-item list-group-flush \">\n                        {{list.Text}}\n                    </li>\n                </ul>\n            </div> <!-- card body -->\n            <div class=\"card-body\">\n                <div class=\"d-flex justify-content-center\">\n                    <i class=\"badge float-right badge-info\" >\n                    Total Time: {{Me.Summary.TotalSetTime}} min <br />\n                    </i>\n                </div>\n            </div>\n\n        </div><!-- card -->\n    </div><!-- col -->\n\n</div><!-- row -->\n"

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
    // find workout summary via key.
    HistoryComponent.prototype.submitLog = function (e, key) {
        if (this.Me.History.find(function (x) { return x.KeyDate == key; })) {
            this._Fit.getHistory(key);
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

module.exports = ".btn{\n    margin-top: 10px;\n}\n\n.center-img{\n\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 80%;\n}\n\n.lead{\n    color:  #1C5F93;\n}\n"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron justify-content-center\">\n  <h1 class=\" d-flex justify-content-center display-4\">Welcome to Fitness Tracker!</h1>\n  <div class=\"d-flex justify-content-center\">\n    <p class=\"lead\">This is a simple fitness tracker app. You can use it as if it's your workout journal! </p>\n  </div>\n  <div class=\"d-flex justify-content-center\">\n    <p class=\"lead\">You can record your date and workout lists to be proud of your awesome achievement!</p>\n  </div>\n  <hr class=\"my-4\">\n <!-- Carousel -->\n  <ngb-carousel>\n    <ng-template ngbSlide>\n      <img *ngIf =\"images\" class=\"center-img\"  [src]=\"images|| ''\" alt=\"Random first slide\">\n      <div class=\"carousel-caption\">\n        <h3>\n          Motivate\n        </h3>\n        <p>\n          Fitness motivates you to live a full life.\n        </p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img *ngIf =\"images\" class=\"center-img\" [src]=\"images[1] || ''\" alt=\"Random second slide\">\n      <div class=\"carousel-caption\">\n        <h3>Mind</h3>\n        <p>Fitness is not just for your physical body, it's also for your mind and soul.  </p>\n      </div>\n    </ng-template>\n    <ng-template ngbSlide>\n      <img *ngIf =\"images\" class=\"center-img\" [src]=\"images[3]|| ''\" alt=\"Random third slide\">\n      <div class=\"carousel-caption\">\n        <h3>More</h3>\n        <p>You can do more with healthy body and soul!</p>\n      </div>\n    </ng-template>\n  </ngb-carousel>\n  \n  <span class=\"d-flex justify-content-center\">\n    <a class=\"btn btn-primary btn-lg\" href=\"/sign-up\" role=\"button\">Get Started</a>\n  </span>\n</div>"

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
var ng_bootstrap_1 = __webpack_require__("./node_modules/@ng-bootstrap/ng-bootstrap/index.js");
var HomeComponent = /** @class */ (function () {
    function HomeComponent(http, _Fit, config) {
        var _this = this;
        this.http = http;
        this._Fit = _Fit;
        this._api = "http://localhost:8080/fit";
        this.images = [];
        _Fit.getPic().subscribe(function (data) {
            _this.images = data;
        });
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        this.Me = _Fit.Me;
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [http_1.Http, fit_service_1.FitService, ng_bootstrap_1.NgbCarouselConfig])
    ], HomeComponent);
    return HomeComponent;
}());
exports.HomeComponent = HomeComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-form{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    \n    padding: 0.4rem 0.4rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    color: #7CACEA;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.btn-margin{\n    margin:0px;\n}\n\n.col-sm-2{\n    margin: 2px;\n    padding: 0.2rem;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- existing user sign in here -->\n<div class=\"d-flex justify-content-center\">\n    <div class=\"card text-center\" style=\"width: 30rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Please Sign In</div>\n        </div>\n        <div class =\"text-uppercase black\">\n            Already a user? \n        </div>\n        <div class=\"font-margin\">\n            Please Sign In\n        </div> \n        <div class=\"login-form\" >\n            <input #Name type =\"text\" placeholder =\"User Name\"/><br/>\n            <input #Password type =\"password\" placeholder =\"Password\" />\n        </div>\n    \n        <div class=\"row justify-content-center\">\n            <div class=\"col-sm-2\">\n                <button class=\" btn btn-margin\" (click)=\"login(Name.value, Password.value)\" >Sign In</button>\n            </div>\n        </div>\n        <div class=\"card-link\">\n            <div class =\"text-uppercase black\">\n                New to Here?\n            </div>\n            \n            <button type=\"button\" class=\"btn btn-sm\">\n                <div class=\"nav-link\" routerLink=\"/sign-up\" >\n                    Go to Sign Up\n                </div> \n            </button>\n        </div>\n    </div>\n</div>\n"

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
        if (!name || !password) {
            alert('Please Enter Username and Password');
            return;
        }
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

module.exports = ".bg-color{\n  background-color:  #7CACEA;\n  color: white;\n}\n.btn{\n  background-color: #F5F5F5;\n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Navigation -->\n<nav class=\"navbar navbar-expand-md bg-color navbar-dark \">\n        <a class=\"navbar-brand\" routerLink = \"/fit\">Fitness Tracker</a>\n        <button (click)=\"isCollapsed = !isCollapsed\" class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n          <span class=\"navbar-toggler-icon\"></span>\n        </button>\n    \n        <div [ngbCollapse]=\"isCollapsed\" class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n          <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home<span class=\"sr-only\">(current)</span></a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/editProfile\" routerLinkActive=\"active\">Profile</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/fit\" routerLinkActive=\"active\">Fitness</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/history\" routerLinkActive=\"active\">History</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" routerLink=\"/share\" routerLinkActive=\"active\">Share</a>\n            </li>\n          </ul>\n          <button class=\"btn btn-sm nav-item justify-content:between\"><a class=\"nav-link\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign up</a></button>\n          <button class=\"btn btn-sm nav-item justify-content:between\"><a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Sign in</a></button>\n        </div>\n    </nav>"

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
        this.isCollapsed = true;
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

/***/ "./src/app/profile/profile.component.css":
/***/ (function(module, exports) {

module.exports = ".btn-own{\n    margin: 15px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.text-uppercase-own{\n    text-transform: uppercase;\n    font-size: 12px;\n    color: white;\n}"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"card\"  >\n  <div class=\"card-header-own\">\n    <div class=\"text-uppercase-own\">Please Create Your Profile Before Tracking Your Workout!</div> \n    <div class=\"text-uppercase\">Profile</div>\n  </div> <!-- card header-->\n\n  <form> <!-- form -->\n      <div class=\"form-row\">\n        <div class=\"form-group col-md-4\">\n            <label for=\"inputName\">Name</label>\n            <input #name disabled type=\"text\" class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n        </div>\n    \n        <div class=\"form-group col-md-4\">\n            <label for=\"inputAge\">Age</label>\n            <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" placeholder=\"Age\" >\n        </div>\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"inputHeight\">Height</label>\n        <input #height type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"cm\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"inputWeight\">Weight</label>\n        <input #weight type=\"number\" class=\"form-control\" id=\"inputWeight\" placeholder=\"kg\">\n      </div>\n  \n      <div class=\"form-group\">\n        <label for=\"inputGoalWeight\">Goal Weight</label>\n        <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" placeholder=\"kg\">\n      </div>\n    </form> <!-- form -->\n    <div>\n        <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"adding(age.value, weight.value, height.value, goalWeight.value, name.value)\">Save</button>\n    </div>  <!-- button -->\n</div> <!-- Profile Form ends-->\n\n\n\n        "

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
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(_Fit, _Messages) {
        this._Fit = _Fit;
        this._Messages = _Messages;
        this.Me = this._Fit.Me;
        this._Messages.Messages.push('Complete your Profile before you begin to plan your workout.');
    }
    ProfileComponent.prototype.ngOnInit = function () {
    };
    // pass user's profile information to Service after calculating all bmi.
    ProfileComponent.prototype.adding = function (age, weight, height, goalWeight, name) {
        // prevent empty profile submit
        if (!weight || !height || !goalWeight || !age) {
            alert('Please Fill All Information Above');
            return;
        }
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
        __metadata("design:paramtypes", [fit_service_1.FitService, messages_service_1.MessagesService])
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
    }
    // send random images to home component.
    FitService.prototype.getPic = function () {
        return this.http.get(this._api + "/home/getImage", {})
            .map(function (response) { return response.json(); });
    };
    // initialize user's data when they sign-up.
    FitService.prototype.signUp = function (name, password) {
        var _this = this;
        this.Me = { Name: name, Password: password, Profile: { Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null },
            PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0, EachShare: [], Notice: [], Requested: false, FriendList: [], History: [],
            Month: null, Date: null, Summary: { Name: name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0, Month: 0, Date: 0, KeyDate: null }, FriendSummary: { Name: name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: 0, Month: 0, Date: 0, KeyDate: null } };
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
    // get user's information from the server.
    FitService.prototype.login = function (name, password) {
        var _this = this;
        this.http.get(this._api + "/exercise/login", { params: { name: name, password: password } })
            .subscribe(function (data) {
            var check = data.json();
            // if there is no username or password matching in the server, alert.
            if (!check) {
                alert('Username or Password doesn\'t match in our system! ');
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
        this.http.post(this._api + '/exercise/done', { name: this.Me.Name, text: text, time: time, set: set, total: totalTime })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
            _this.Me.DoneExerciseList = data.json();
        });
    };
    // post total workout time to the server
    FitService.prototype.getTotalTime = function (name, key, totalTime) {
        var _this = this;
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
    // Send a request notice to a selected user.
    FitService.prototype.friendRequest = function (friendName) {
        this.http.post(this._api + '/exercise/request', { friend: friendName, name: this.Me.Name })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
        });
    };
    // indicate if a user send a friend request to another user to remove that user from User's list
    FitService.prototype.changeSentRequest = function (friendName, status) {
        console.log('Change Sent Request ');
        this.http.post(this._api + '/exercise/sentRequestChange', { friend: friendName, name: this.Me.Name, status: status })
            .subscribe(function (data) {
            console.log('change request works?');
            if (!data.json()) {
                return;
            }
        });
    };
    // Add friends to this user's FriendList in the server when user accepts the request.
    FitService.prototype.addFriendList = function (friendName) {
        var _this = this;
        this.http.post(this._api + '/exercise/addFriend', { name: this.Me.Name, friend: friendName })
            .subscribe(function (data) {
            _this.Me.FriendList = data.json();
        });
    };
    // add Friend's Workout Summary to Record
    FitService.prototype.addFriendHistory = function (friend) {
        var _this = this;
        this.http.post(this._api + '/exercise/addFriendHistory', { name: this.Me.Name, friend: friend })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
            var history = data.json();
            _this.Me.Record = history;
        });
    };
    // if user gets friend request, change the Requested status to inform the user that they have friend requests.
    FitService.prototype.changeRequested = function (name) {
        var _this = this;
        this.http.post(this._api + '/exercise/changeRequest', { name: name })
            .subscribe(function (data) {
            _this.Me.Requested = data.json();
        });
    };
    // retrieve previous date's workout data
    FitService.prototype.getHistory = function (key) {
        var _this = this;
        this.http.get(this._api + "/exercise/getHistory", { params: { user: this.Me.Name, key: key } })
            .subscribe(function (data) {
            var history = data.json();
            _this.Me.PlanExercise = history.PlanExercise;
            _this.Me.DoneExerciseList = history.DoneExerciseList;
            _this.Me.Month = history.Month;
            _this.Me.Date = history.Date;
            _this.Me.TotalSetTime = history.TotalSetTime;
            _this.Me.Summary = data.json();
        });
    };
    // get friend's workout summary
    FitService.prototype.getFriendSummary = function (key, friend) {
        var _this = this;
        this.http.get(this._api + "/exercise/friendSummary", { params: { name: this.Me.Name, key: key, friend: friend } })
            .subscribe(function (data) {
            _this.Me.FriendSummary = data.json();
        });
    };
    // refresh Me Object to update Share component.
    FitService.prototype.refreshMe = function () {
        return this.http.get(this._api + "/exercise/refreshMe", { params: { name: this.Me.Name } })
            .map(function (response) { return response.json(); });
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
        this.Messages = ['Welcome to Fitness Tracker! You can record your workout plan.'];
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

module.exports = "ul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n    \n}\n\n.btn-color{\n    background-color: #F4C3D8;\n    border: none;\n    color: white;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 10px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}"

/***/ }),

/***/ "./src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Users can send a friend request and share their workout history -->\n<div class=\"row justify-content-md-center\">\n  <!-- Choose a user to share workout log-->\n  <div class=\"col-lg-4\">\n    <div class=\"card\" >\n      <div class=\"card-header\">\n        <div class=\"text-uppercase\">Other Users</div>\n        <div class=\"subtitle\"> Send a Friend Request to Other Users!</div>\n      </div> <!-- card header -->\n      <div class=\"card-body\">\n        <ul class=\"list-group-item list-group-flush list\" *ngFor =\" let users of Me.EachShare\">\n          <div class=\"row justify-content-md-center\">\n            <div class=\"col\">\n              <li *ngIf =\"Me.EachShare.length == 0\">No Other Users</li>\n              <li  >{{users.Name}} </li>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-color btn-sm d-flex justify-content-end\" (click) = \"friendRequest($event, users.Name)\" > Request </button>\n            </div>\n          </div>  \n        </ul>\n      </div> <!-- card-body -->\n    </div> <!-- card -->\n  </div><!-- col -->\n  <!-- Choose a user to share workout log-->\n\n  <!-- Received Friend Requests-->\n  <div class=\"col-lg-4\">\n    <div class=\"card\">\n      <div class=\"card-header\">\n        <div class=\"text-uppercase\">Friend Request</div>\n        <div class=\"subtitle\"> You've Got Friend Requests!</div>\n      </div> <!-- card header-->\n      <div class=\"card-body\">\n        <div class=\"d-flex justify-content-md-center\">\n          <button class=\"btn btn-color\" disabled *ngIf=\"!Me.Requested\">No Friend Request</button>\n          <button class=\"btn btn-warning\"  disabled *ngIf=\"Me.Requested\">You Have a Friend Request</button>\n        </div>\n        <ul class=\"list-group-item list-group-flush list\" *ngFor = \"let friend of _Fit.Me.Notice\">\n          <div class = \"row justify-content-md-center\">\n            <div class=\"col\">\n              <li > {{friend.Friend}} </li>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-sm d-flex justify-content-end btn-warning\"  (click) = \"requestBox($event, friend.Friend)\"> Confirm </button>\n            </div>\n          </div>\n        </ul>\n      </div> <!-- card body-->\n    </div>\n  </div> <!-- col -->\n  <!-- Received Friend Requests-->\n\n  <!-- Friends List-->\n  <div class=\"col-lg-4\">\n    <div class=\"card\" >\n      <div class=\"card-header\">\n        <div class=\"text-uppercase\">\n          <div class=\"text-uppercase\">Friends List</div>\n          <div class=\"subtitle\"> Click the Display to See Friend's Workout Date.</div>\n        </div>\n      </div> <!-- card header -->\n      <div class=\"card-body\">\n        <ul class=\"list-group-item list-group-flush list\" *ngFor = \"let friend of Me.FriendList\">\n          <div class = \"row justify-content-md-center\">\n            <div class=\"col\">\n              <li *ngIf =\"Me.FriendList.length == 0\" > No Friends Yet! </li>\n              <li > {{friend.Name}} </li>\n            </div>\n            <div class=\"col\">\n              <button class=\"btn btn-sm d-flex justify-content-end btn-color\" (click) = \"friendHistory($event, friend.Name)\"> Display </button>\n            </div>\n           \n          </div>\n        </ul>\n      </div> <!-- card body-->\n    </div> <!-- card -->\n  </div> <!-- col -->\n  <!-- Friends List-->\n</div><!-- row -->\n\n\n<div class=\"row d-flex justify-content-md-center\">\n  <!-- Friend's Workout Date -->\n  <div class=\"col-lg-4\">\n    <div class=\"card\" >\n        <div class=\"card-header\">\n          <div class=\"text-uppercase\">Friend's Workout Date</div>\n          <div class=\"subtitle\"> Select Date to See Friend's Achievement</div>\n        </div> <!-- card header-->\n        <div class=\"card-body\" >\n          <form>\n              <div class=\"form-group\">\n                  <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                    <option *ngIf =\"Me.Record.length == 0\">No Friend's Workout Yet!</option>\n                    <option *ngFor=\"let friend of Me.Record\" (click)=\"displayHistory($event, friend.KeyDate, friend.Name)\">\n                        {{friend.KeyDate}}\n                    </option>\n                  </select>\n              </div>\n          </form>\n        </div> <!-- card body -->\n        \n    </div>  <!-- card -->\n  </div> <!-- col -->\n  <!-- Friend's Workout Date -->\n\n  <!-- Friend's Workout History by Date-->\n  <div class=\"col-lg-6\">\n      <div class=\"card\" >\n        <div class=\"card-header\">\n          <div class=\"text-uppercase\">Friend's Workout Achievement</div>\n          <div class=\"subtitle\"> Here's Friend's Awesome Achievements!</div>\n        </div> <!-- card header-->\n        <div class=\"card-body\" >\n          <ul class=\"list-group list-group-flush \">\n            <li *ngIf =\"Me.FriendSummary.DoneExerciseList.length == 0\">No Friend's Workout History Yet!</li>\n            <li *ngFor=\"let list of Me.FriendSummary.DoneExerciseList\"\n                class=\"list-group-item list-group-flush \">\n                {{list.Text}}\n            </li>\n          </ul>\n        </div> <!-- card body -->\n\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-center\">\n              <i class=\"badge float-right badge-info\" >\n              Total Time: {{Me.FriendSummary.TotalSetTime}} min <br />\n              </i>\n          </div>\n        </div> <!-- card body -->\n      </div>  <!-- card -->\n    </div> <!-- col -->\n    <!-- Friend's Workout History by Date-->\n\n</div> <!-- row -->\n\n\n"

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
        if (!_Fit.Me) {
            _Router.navigate(['/login']);
        }
        setInterval(function () { return _this.refreshList(); }, 1000);
    }
    ShareComponent.prototype.ngOnInit = function () {
    };
    ShareComponent.prototype.refreshList = function () {
        var _this = this;
        // refresh Me object - receive Notice, FriendList, Requested status to update
        this._Fit.refreshMe().subscribe(function (data) {
            _this.Me.Notice = data.Notice;
            _this.Me.FriendList = data.FriendList;
            _this.Me.Requested = data.Requested;
        });
        // create other users list to share and refresh to update
        this._Fit.getUserList().subscribe(function (data) {
            _this.Me.EachShare = data;
            // remove myself from the share list
            _this.Me.EachShare.splice(_this.Me.EachShare.indexOf(_this.Me.EachShare.find(function (x) { return x.Name == _this.Me.Name; })), 1);
            // if a user send a friend request, remove that friend from the user list.
            if ((_this.Me.EachShare.indexOf(_this.Me.EachShare.find(function (x) { return x.RequestSent == true; }))) != -1) {
                _this.Me.EachShare.splice(_this.Me.EachShare.indexOf(_this.Me.EachShare.find(function (x) { return x.RequestSent == true; })), 1);
            }
        });
    };
    // Send a friend request via friend's name
    ShareComponent.prototype.friendRequest = function (e, friendName) {
        var sendRequest = true;
        this._Fit.changeSentRequest(friendName, sendRequest);
        this._Fit.friendRequest(friendName);
    };
    // Accept or Decline Friend's request. 
    ShareComponent.prototype.requestBox = function (e, friendName) {
        var friend = this.Me.Notice.find(function (x) { return x.Friend == friendName; });
        // accept request
        if (confirm(friend.Msg + '\nHit Ok to Accept or Cancel to Decline.')) {
            this._Fit.addFriendList(friendName);
        }
        else {
            // dismiss request
            var decline = false;
            this._Fit.changeSentRequest(friendName, decline);
            return;
        }
        // change the request state of Me
        this._Fit.changeRequested(this.Me.Name);
    };
    // update friend's history if hits Display button
    ShareComponent.prototype.friendHistory = function (e, friend) {
        this._Fit.addFriendHistory(friend);
    };
    // display friend's history if date is selected
    ShareComponent.prototype.displayHistory = function (e, key, friend) {
        this._Fit.getFriendSummary(key, friend);
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

module.exports = ".login-form{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\nform{\n    padding: 1rem;\n}\n\n.text-uppercase{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    \n    padding: 0.4rem 0.4rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    color: #7CACEA;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.btn-margin{\n    margin:0px;\n}\n\n.col-sm-2{\n    margin: 2px;\n    padding: 0.2rem;\n}"

/***/ }),

/***/ "./src/app/sign-up/sign-up.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- user sign up here -->\n<div class=\"d-flex justify-content-center\">\n    <div class=\"card text-center\" style =\"width: 30rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Welcome!</div>\n        </div>\n        <div class=\"text-uppercase black\">New to Here?</div>\n        <div class=\"font-margin \">\n            Please Sign Up\n        </div>  \n        <div class=\"login-form\" >\n            <input #Name type =\"text\" placeholder =\"User Name\" /><br/>\n            <input #Password type =\"password\" placeholder =\"Password\" />\n        </div>\n\n        <div class=\"row justify-content-center\">\n            <div class=\"col-sm-2\">\n                <button class=\" btn btn-margin\" (click)=\"newUser(Name.value, Password.value)\" >Sign Up</button>\n            </div>\n        </div>\n        <div class=\"card-link\">\n            <div class =\"text-uppercase black\">\n                Already a User?\n            </div>\n            \n            <button type=\"button\" class=\"btn btn-sm\">\n                <div class=\"nav-link\" routerLink=\"/login\" >\n                    Go to Sign In\n                </div> \n            </button>\n        </div>\n    </div>\n</div>\n"

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
        if (!name || !password) {
            alert('Please Enter Username and Password');
            return;
        }
        this._Fit.signUp(name, password);
        this._Messages.Messages.push('Successfully Signed Up! Welcome, ' + name + '!');
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