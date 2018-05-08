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

module.exports = ".login-form{\n    margin: 10px;\n}\n\n.btn-own{\n    margin: 5px;\n    color: white;\n    background-color: #F4C3D8;\n    border: none;\n}\n\nul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header-own{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.heightAdjust{\n    height: 160px;\n}\n\n.heightAdjust-big{\n    height: 200px;\n}\n\nform{\n    padding: 1rem;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 3px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.text-uppercase-own{\n    font-size: 12px;\n    color: white;\n}\n\n.title{\n    font-size: 20px;\n    padding: 0.4rem 0rem;\n}\n\n.black{\n    margin-top: 10px;\n    margin-bottom: 2px;\n    margin-left: 10px;\n    color: #7CACEA;\n}\n\n.list-group-item-success{\n    background-color:#FBE9C1;\n}\n\n.font-margin{\n    margin-bottom: 5px;\n    margin-left: 10px;\n}\n\n.badge{\n    margin-left: 5px;\n}\n\n.display-none{\n    display: none;\n}\n\n.today{\n    color: white;\n    font-size: 15px;\n}"

/***/ }),

/***/ "./src/app/fit/fit.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" >\n    <!-- Create Profile display-->\n    <div class=\"col-md-4\">\n        <div class=\"card\" >\n            <div class=\"card-header-own text-uppercase\">\n            {{Me.Name}}'s Profile\n            </div>\n\n            \n            <div class=\"card-body\">\n                <form>\n                    <div class=\"form-group row\">\n                        <label for=\"Name\" class=\"col-sm-10 col-form-label\">Name</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Name\" value= {{Me.Name}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Age\" class=\"col-sm-10 col-form-label\">Age</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Age\" value= {{Me.Profile.Age}}>\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Height\" class=\"col-sm-10 col-form-label\">Height</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Height\" value= \"{{Me.Profile.Height}} cm\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"Weight\" class=\"col-sm-10 col-form-label\">Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"Weight\" value= \"{{Me.Profile.Weight}} kg\"> \n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"BMI\" class=\"col-sm-10 col-form-label\">BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"BMI\" value= {{Me.Profile.BMI}}>\n                        </div>\n                    </div>                    \n                    <div class=\"form-group row\">\n                        <label for=\"GoalWeight\" class=\"col-sm-10 col-form-label\">Goal Weight</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalWeight\" value= \"{{Me.Profile.GoalWeight}} kg\">\n                        </div>\n                    </div>\n                    <div class=\"form-group row\">\n                        <label for=\"GoalBMI\" class=\"col-sm-10 col-form-label\">Goal BMI</label>\n                        <div class=\"col-sm-10\">\n                        <input type=\"text\" readonly class=\"form-control-plaintext\" id=\"GoalBMI\" value= {{Me.Profile.GoalBMI}}>\n                        </div>\n                    </div>  \n                </form>\n            </div>\n        </div> \n    </div><!-- Saved Profile display ends-->\n\n\n\n    <div class =\"col-md-8\">\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none' : Me.Month}\">\n                <div class=\" card-header-own \">\n                    <div class=\"text-uppercase d-flex justify-content-center\" >\n                        Set Your Date\n                    </div>\n                    <div class=\" d-flex justify-content-center subtitle\">\n                        Record the Date You Worked Out\n                    </div>\n                </div>\n                    \n                    <div class=\"card-body d-flex justify-content-center\">\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <form>\n                                    <div class=\"row d-flex justify-content-center\">\n                                        <div class=\"col\">\n                                            <input #month type=\"number\" class=\"form-control\" placeholder=\"Month\">\n                                        </div>\n                                        <div class=\"col\">\n                                            <input #date type=\"number\" class=\"form-control\" placeholder=\"Date\">\n                                        </div>\n                                        <div class=\"col\">\n                                            <div class=\"d-flex justify-content-end\">\n                                                <button class=\"btn btn-primary\" \n                                                        type=\"submit\" \n                                                        (click)=\"addTime($event, month.value, date.value)\">\n                                                    Save\n                                                </button>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </form>\n                            </div>\n                            \n                        </div>\n                    </div>\n                        \n            </div>\n        </div>\n        <div class=\"row-md-4\">\n            <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Month}\" >\n                <div class=\"card-header-own\">\n                    <div class=\"text-uppercase\">\n                        Workout List \n                    </div>\n                    <div class=\"subtitle\">Click to add workout to your plan</div>\n                </div>\n                <div class=\"card-body\">\n                    <form>\n                        <div class=\"form-group\">\n                            <select multiple class=\"form-control\" id=\"exampleFormControlSelect2\" >\n                            <option *ngFor=\"let list of ExerciseList\" (click)=\"submitWorkout($event, list)\">\n                                {{list}}\n                            </option>\n                            </select>\n                        </div>\n                    </form>\n                </div>\n            </div>\n\n        \n            <div class=\"card display-none\" [ngClass]=\"{'display-none': !Me.Month}\">\n                <div class=\"card-header-own heightAdjust\">\n                    <div class=\"text-uppercase today\" >\n                        {{Me.Month}} {{Me.Date}}\n                    </div>\n                    <div class=\"text-uppercase \">\n                        Workout Plan\n                    </div>\n    \n                    <div class=\"subtitle\">Add your time and sets.<br/> When you are done, click Done button</div>\n\n                </div>\n                \n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush \">\n                        <li *ngFor=\"let list of Me.PlanExercise\"\n                            [ngClass]=\"{ 'list-group-item-success': list.Chosen }\"                            \n                            class=\"list-group-item list-group-flush \">\n                            {{list.Text}}\n                            <form>\n                                <div class=\"row d-flex justify-content-end\">\n                                    <div class=\"col\">\n                                    <input #time type=\"number\" class=\"form-control\" placeholder=\"Minutes\">\n                                    </div>\n                                    <div class=\"col\">\n                                    <input #set type=\"number\" class=\"form-control\" placeholder=\"Sets\">\n                                    </div>\n                                </div>\n                            </form>\n                            <div class=\"d-flex justify-content-end\">\n                                <button (click)=\"doneExercise($event, list.Text, time.value, set.value)\"\n                                        class=\"col-sm-3 btn btn-sm btn-primary\">\n                                        Done\n                                </button>\n                            </div>\n                        </li>\n                    </ul>\n                </div>\n            </div>\n\n\n        </div>\n\n        <div class = \"row-md-4\">\n            <div class=\"card tracking display-none\" [ngClass]=\"{'display-none': !Me.Month}\">\n                <div class=\"card-header-own heightAdjust-big date\">\n                    <div class=\"subtitle\"> Well Done, You Are The Best!  </div>\n                    <div class=\"text-uppercase subtitle\">\n                            You worked out on <br /> {{Me.Month}} {{Me.Date}}\n                    </div> \n                    <div class=\"text-uppercase\">\n                        Workout Log \n                    </div> \n                </div>\n                <div class=\"card-body\">\n                    <ul class=\"list-group list-group-flush\" *ngFor= \"let choice of Me.DoneExerciseList\">\n                        <li class=\"list-group-item \">\n                            {{choice.Text}}\n                            <!-- need to individually change total time.-->\n                            <div>\n                                <i class=\"badge float-right badge-info d-flex justify-content-end\" >\n                                    Total Cycle: {{choice.TotalTime}} min \n                                </i>\n                                <i class=\"badge float-right badge-light d-flex justify-content-end\" >\n                                    Total Set: {{choice.Set}} times\n                                </i>\n                                <i class=\"badge float-right badge-light d-flex justify-content-end\" >\n                                    Total Time: {{choice.Time}} min \n                                </i>\n                            </div>\n                            \n                        </li>\n                    </ul>\n                    <div class=\"card-body\">\n                        <i>\n                            Your Total Workout Time: {{Me.TotalSetTime}} minutes\n                        </i>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>"

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
        this.added = false;
        this.Me = _Fit.Me;
        this.Model = _Fit.Model;
        this.ExerciseList = _Fit.ExerciseStack;
        if (!this.Me) {
            _Router.navigate(['/login']);
        }
        // setInterval(()=> this.refreshList(), 1000);
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
    FitComponent.prototype.submitWorkout = function (e, text) {
        e.preventDefault();
        this._Fit.chooseExercise(text);
    };
    /* doneExercise() will track the completed workout that a user checks it as "done"
       */
    FitComponent.prototype.doneExercise = function (e, text, time, set) {
        e.preventDefault();
        this._Fit.makeChosen(text);
        var totalTime = time * set;
        // if the workout list is a newly selected, add it to DoneExerciseList
        if (!this.Me.DoneExerciseList.find(function (x) { return x.Text == text; })) {
            this.Me.DoneExerciseList.push({ Text: text, Time: time, Set: set, TotalTime: totalTime });
            // tracking the total workout time 
            this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
            this._Fit.selectExercise(this.Me.DoneExerciseList);
        }
        else {
            var user = this.Me.DoneExerciseList.find(function (x) { return x.Text == text; });
            // keep tracking of total workout time
            user.Time = Number(user.Time) + Number(time);
            user.Set = Number(user.Set) + Number(set);
            user.TotalTime = Number(user.TotalTime) + Number(totalTime);
            this.Me.TotalSetTime = Number(this.Me.TotalSetTime) + Number(totalTime);
            this._Fit.getTotalTime(this.Me.TotalSetTime);
            this._Fit.selectExercise(this.Me.DoneExerciseList);
            //this._Fit.putHistory(this.Me.DoneExerciseList);
        }
        this._Fit.RecordDay(this.Me.Month, this.Me.Date);
    };
    // Record the month and the date ((user input)) of completed workout
    FitComponent.prototype.addTime = function (e, month, date) {
        e.preventDefault();
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
                break;
            }
        }
        var key = month + '/' + date;
        var user = this.Me;
        user.Month = month;
        user.Date = date;
        user.History.push({ Name: this.Me.Name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: null,
            Month: month, Date: date, KeyDate: key.toString() });
        // create a history for specific month and date
        // var monthMatch = user.History.find(x=>x.Month == month);
        // var dateMatch = user.History.find(x=>x.Date == date);
        /* if(!monthMatch){
            user.History.push({ Name: this.Me.Name, DoneExerciseList: [], PlanExercise: [], TotalSetTime: null,
                Month: month, Date: date, KeyDate: key.toString()});
        }
        else{
            // if the specific date history already existed, don't create a new one, but find this history and return it to user.
            if(dateMatch){
                console.log('datematch is ');
                console.log(dateMatch);
                this.Me.History = dateMatch;
              }
    
            else{
                console.log('no history found');
            }
        }
     */
        this._Fit.SetDay(user);
        // instead of this, how to disable date setting until user resets the list?
        // this.added = !this.added;
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

module.exports = ""

/***/ }),

/***/ "./src/app/history/history.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  history works!\n</p>\n"

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
var HistoryComponent = /** @class */ (function () {
    function HistoryComponent() {
    }
    HistoryComponent.prototype.ngOnInit = function () {
    };
    HistoryComponent = __decorate([
        core_1.Component({
            selector: 'app-history',
            template: __webpack_require__("./src/app/history/history.component.html"),
            styles: [__webpack_require__("./src/app/history/history.component.css")]
        }),
        __metadata("design:paramtypes", [])
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

module.exports = "<div class=\"d-flex justify-content-center\">\n    <div class=\"card text-center\" style=\"width: 30rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Please Sign In</div>\n        </div>\n        <div class =\"text-uppercase black\">\n            Already a user? \n        </div>\n        <div class=\"font-margin\">\n            Please Sign In\n        </div> \n        <div class=\"login-form\" >\n            <input #Name type =\"text\" placeholder =\"User Name\"/><br/>\n            <input #Password type =\"text\" placeholder =\"Password\" />\n        </div>\n    \n        <div class=\"row justify-content-center\">\n            <div class=\"col-sm-2\">\n                <button class=\" btn btn-margin\" (click)=\"login(Name.value, Password.value)\" >Sign In</button>\n            </div>\n            <div class=\"col-sm-2\">\n                <button class=\"btn btn-margin\" (click)=\"googleLogin()\" >Sign In with Google</button>\n            </div>\n        </div>\n        <div class=\"card-link\">\n            <div class =\"text-uppercase black\">\n                New to Here?\n            </div>\n            \n            <button type=\"submit\" class=\"btn\">\n                <div class=\"nav-link\" routerLink=\"/sign-up\" >\n                    Please Sign Up\n                </div> \n            </button>\n        </div>\n    </div>\n</div>\n"

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
var exercise_1 = __webpack_require__("./src/app/models/exercise.ts");
var messages_service_1 = __webpack_require__("./src/app/services/messages.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_Fit, _Messages) {
        this._Fit = _Fit;
        this._Messages = _Messages;
        this.Model = new exercise_1.Fit();
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function (name, password) {
        this._Fit.login(name, password);
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [fit_service_1.FitService, messages_service_1.MessagesService])
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

/***/ "./src/app/models/exercise.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Fit = /** @class */ (function () {
    function Fit() {
        this.Person = [];
        this.Share = [];
        /** Need to find health info database api
        HealthInfo: {
            url: string;
        }
        */
    }
    return Fit;
}());
exports.Fit = Fit;
var User = /** @class */ (function () {
    function User() {
        this.PlanExercise = [];
        this.DoneExerciseList = [];
        this.Record = [];
        this.EachShare = [];
        this.FriendList = [];
        this.History = [];
    }
    return User;
}());
exports.User = User;
var Log = /** @class */ (function () {
    function Log() {
        this.DoneExerciseList = [];
        this.PlanExercise = [];
    }
    return Log;
}());
exports.Log = Log;
var People = /** @class */ (function () {
    function People() {
    }
    return People;
}());
exports.People = People;
var Friend = /** @class */ (function () {
    function Friend() {
    }
    return Friend;
}());
exports.Friend = Friend;
var Exercise = /** @class */ (function () {
    function Exercise() {
        this.Chosen = false;
    }
    return Exercise;
}());
exports.Exercise = Exercise;
var Done = /** @class */ (function () {
    function Done() {
    }
    return Done;
}());
exports.Done = Done;
var Info = /** @class */ (function () {
    function Info() {
    }
    return Info;
}());
exports.Info = Info;


/***/ }),

/***/ "./src/app/nav/nav.component.css":
/***/ (function(module, exports) {

module.exports = ".navbar {\n    padding: 0 1rem;\n    height: 120px;\n  }\n  \n  .nav-back{\n    background-color: #7CACEA;\n}\n  \n  .navbar-brand{\n  font-size: 20px;\n}\n  \n  .navbar-nav\n{\n  font-size:20px;\n \n}"

/***/ }),

/***/ "./src/app/nav/nav.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-sm navbar-dark nav-back\">\n  <div class=\"container\">\n    <div>\n        <a class=\"navbar-brand\" routerLink=\"/fit\">Fitness Tracker</a>\n    </div>\n    <button class=\"navbar-toggler\" type=\"button\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n        <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse navbar-nav\" id=\"#navbarNav\">\n      <ul class=\"navbar-nav navbarNav\">\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\" >Home <span class=\"sr-only\">(current)</span></a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/editProfile\" routerLinkActive=\"active\" >Profile</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/fit\" routerLinkActive=\"active\" >Fitness</a>\n        </li>\n  \n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/share\" routerLinkActive=\"active\">Share</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/history\" routerLinkActive=\"active\">History</a>\n        </li>\n\n      </ul>\n    </div>\n\n    \n\n    <div class=\"d-flex justify-content-end\">\n      <ul class=\"navbar-nav\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link\" routerLink=\"/sign-up\" routerLinkActive=\"active\">Sign Up</a>\n        </li>\n        <li class=\"nav-item\">\n          <a class=\"nav-link\" routerLink=\"/login\" routerLinkActive=\"active\">Sign In</a>\n        </li>\n      </ul>\n    </div>\n  </div><!-- navbar container -->\n</nav><!-- nav bar -->\n\n\n"

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

module.exports = "<div class=\"card\"  >\n  <div class=\"card-header-own\">\n  <div class=\"text-uppercase-own\">Please Create Your Profile Before Tracking Your Workout!</div> \n  <div class=\"text-uppercase\">Profile</div>\n  \n\n  </div>\n  <form>\n      <div class=\"form-row\">\n  \n      <div class=\"form-group col-md-4\">\n          <label for=\"inputName\">Name</label>\n          <input #name type=\"text\" class=\"form-control\" id=\"inputName\" [value]=\"Me.Name\">\n      </div>\n  \n      <div class=\"form-group col-md-4\">\n          <label for=\"inputAge\">Age</label>\n          <input #age type=\"number\" class=\"form-control\" id=\"inputAge\" placeholder=\"Age\" >\n      </div>\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"inputHeight\">Height</label>\n          <input #height type=\"number\" class=\"form-control\" id=\"inputHeight\" placeholder=\"cm\">\n      </div>\n\n      <div class=\"form-group\">\n          <label for=\"inputWeight\">Weight</label>\n          <input #weight type=\"number\" class=\"form-control\" id=\"inputWeight\" placeholder=\"kg\">\n      </div>\n  \n      <div class=\"form-group\">\n          <label for=\"inputGoalWeight\">Goal Weight</label>\n          <input #goalWeight type=\"number\" class=\"form-control\" id=\"inputGoalWeight\" placeholder=\"kg\">\n      </div>\n      </form>\n  <div>\n      <button class=\"btn btn-primary btn-sm btn-own\" (click)=\"adding(age.value, weight.value, height.value, goalWeight.value, name.value)\">Save</button>\n  </div> \n</div> <!-- Profile Form ends-->\n\n\n\n        "

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
    ProfileComponent.prototype.adding = function (age, weight, height, goalWeight, name) {
        var goalBmi = this.calculateBMI(goalWeight, height);
        var bmi = this.calculateBMI(weight, height);
        console.log('profile component');
        this._Fit.profileAdd(age, weight, height, goalWeight, bmi, goalBmi, name);
    };
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
    FitService.prototype.signUp = function (name, password) {
        var _this = this;
        this.Me = { Name: name, Password: password, Profile: { Age: null, Weight: null, Height: null, GoalWeight: null, BMI: null, GoalBMI: null },
            PlanExercise: [], DoneExerciseList: [], Record: [], TotalSetTime: 0, EachShare: [], Notice: [], Requested: false, FriendList: [], History: [],
            Month: null, Date: null };
        this.http.get(this._api + "/exercise", { params: { name: name, password: password } })
            .subscribe(function (data) {
            if (!data.json()) {
                // alert user name taken
                alert("User Name is taken, please try different name");
                return;
            }
            //this.getUserList();
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
    FitService.prototype.login = function (name, password) {
        var _this = this;
        this.http.get(this._api + "/exercise/login", { params: { name: name, password: password } })
            .subscribe(function (data) {
            var check = data.json();
            if (!check) {
                alert('Username or Password doesn\'t match in our system! - service ');
                return;
            }
            _this.Me = data.json();
            _this._Router.navigate(['/fit']);
        });
    };
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
    // post planned workout list to the server
    FitService.prototype.chooseExercise = function (text) {
        var _this = this;
        this.http.post(this._api + "/exercise/choose", { name: this.Me.Name, Text: text })
            .subscribe(function (data) {
            if (!data.json()) {
                return;
            }
            _this.Me.PlanExercise = data.json();
        });
    };
    // set the selected workout list to the server and make Chosen to true
    FitService.prototype.makeChosen = function (text) {
        var _this = this;
        this.http.post(this._api + "/exercise/chosen", { name: this.Me.Name, text: text })
            .subscribe(function (data) {
            _this.Me.PlanExercise = data.json();
        });
    };
    // post selected workout to the server
    FitService.prototype.selectExercise = function (done) {
        this.http.post(this._api + '/exercise/done', { name: this.Me.Name, list: done })
            .subscribe(function (data) {
            if (!data.json()) {
                console.log('done data is false - service');
                return;
            }
        });
    };
    // post total workout time to the server
    FitService.prototype.getTotalTime = function (total) {
        var _this = this;
        this.http.post(this._api + "/exercise/totaltime", { name: this.Me.Name, totalSet: total })
            .subscribe(function (data) {
            _this.Me.TotalSetTime = Number(data.json());
        });
    };
    // get the list of other users from the server
    FitService.prototype.getUserList = function () {
        return this.http.get(this._api + '/exercise/people', { params: { name: this.Me.Name } })
            .map(function (response) { return response.json(); });
    };
    FitService.prototype.getRequestState = function () {
        return this.http.get(this._api + '/exercise/request/state', { params: { name: this.Me.Name } })
            .map(function (response) { return response.json(); });
    };
    // Send a request notice to a selected user
    FitService.prototype.friendRequest = function (friendName) {
        this.http.post(this._api + '/exercise/request', { friend: friendName, name: this.Me.Name })
            .subscribe();
    };
    FitService.prototype.addFriendList = function (friendName) {
        var _this = this;
        this.http.post(this._api + '/exercise/addFriend', { name: this.Me.Name, friend: friendName })
            .subscribe(function (data) {
            _this.Me.FriendList = data.json();
            console.log('FriendList ---');
            console.log(_this.Me.FriendList);
        });
    };
    FitService.prototype.changeRequested = function (name) {
        this.http.post(this._api + '/exercise/changeRequest', { name: name })
            .subscribe();
    };
    // set the month and the date of user's log in the server.
    FitService.prototype.SetDay = function (user) {
        /*     console.log('month: ' + month);
            console.log('date ' + date);
            var key = month +'/'+date;
            this.http.post(this._api + '/exercise/setDay', {month: month, date: date, name: this.Me.Name, key: key.toString()})
            .subscribe(); */
        this.http.post(this._api + '/exercise/setDay', { user: user })
            .subscribe();
    };
    FitService.prototype.RecordDay = function (month, date) {
        var key = month + '/' + date;
        this.http.post(this._api + '/exercise/recordDay', { name: this.Me.Name, month: month, date: date, key: key.toString() })
            .subscribe();
    };
    /*   getDay(){
        return this.http.get(this._api+'/exercise/getDay', {params:{name: this.Me.Name}})
        .map((response:Response)=>response.json());
        
      }
      getMonth(){
        return this.http.get(this._api+'/exercise/getMonth', {params:{name: this.Me.Name}})
        .map((response:Response)=>response.json());
        
      }
  
      putHistory(done){
        this.http.post(this._api + '/exercise/recordWorkout', {name: this.Me.Name, done: done})
        .subscribe();
      }
   */
    FitService.prototype.getUserStatus = function () {
        return this.http.get(this._api + '/exercise/user', { params: { name: this.Me.Name } })
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

module.exports = "ul{\n    list-style-type: none;\n    margin: 10px;\n}\n\n.card{\n    margin: 10px;\n    color: #1C5F93;\n}\n\n.card-header{\n    background-color: #7CACEA;\n    height: 120px;\n    text-align: center;\n    border: none;\n    padding: 1.7rem 0;\n    font-size: 30px;\n    color: white;\n    \n    \n}\n\n.btn{\n    margin-top: 2px;\n    margin-bottom: 5px;\n\n    \n    \n}\n\n.btn-color{\n    background-color: #F4C3D8;\n    border: none;\n    color: white;\n}\n\n.subtitle{\n    font-size: 15px;\n    margin: 1px;\n    margin-bottom: 10px;\n    font-weight: 300;\n    padding: 0.2rem;\n    \n}\n\n.text-uppercase-own{\n    font-size: 12px;\n    color: white;\n}\n\n.heightAdjust{\n    height: 160px;\n}"

/***/ }),

/***/ "./src/app/share/share.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row justify-content-md-center\">\n  <button class=\"btn btn-color\" disabled *ngIf=\"!Me.Requested\">No Friend Request</button>\n  <button class=\"btn btn-warning\"  *ngIf=\"Me.Requested\" (click)=\"requestBox($event)\">You Have a Friend Request</button>\n</div>\n<div class=\"row justify-content-md-center\">\n  <!-- Choose a user to share workout log-->\n  <div class=\"col\">\n      <div class=\"card\" >\n          <div class=\"card-header heightAdjust\">\n            <div class=\"text-uppercase\">Users List</div>\n            <div class=\"subtitle\"> Please choose a user you want to share your workout summary</div>\n          </div>\n          <div class=\"card-body\">\n            <ul class=\"list-group-item list-group-flush list\" *ngFor =\" let users of Me.EachShare\">\n                <li  >User Name: {{users.Name}}\n                  <button class=\"btn btn-color btn-sm d-flex justify-content-end\" (click) = \"friendRequest($event, users.Name)\" *ngIf = \"!users.Requested\"> Request Friend </button>\n                  <button class=\"btn btn-sm btn-light d-flex justify-content-end\" disabled *ngIf = \"users.Requested\"> Requested </button>\n                </li>\n    \n            </ul>\n          </div>\n      </div> \n    </div>\n\n  <div class=\"col\">\n    <div class=\"card\" >\n        <div class=\"card-header\">\n          Other user's Workout Achievement\n        </div>\n        <ul class=\"list-group list-group-flush list\">\n          <li>users name and workout summary will be here</li>\n        </ul>\n    </div> \n  </div>\n\n    \n  <div class=\"col\">\n    <div class=\"card\" >\n      <div class=\"card-header\">\n        <div class=\"text-uppercase\">\n          Friends List\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <ul class=\"list-group-item list-group-flush list\" *ngFor = \"let friend of Me.FriendList\">\n          <li > {{friend.Name}}\n            <button class=\"btn btn-sm d-flex justify-content-end\" (click) = \"acceptFriend()\"> Share </button>\n\n          </li>\n        </ul>\n      </div>\n    </div> \n  </div> \n</div>\n\n\n"

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

module.exports = "\n<div class=\"row justify-content-center\">\n    <div class=\"card text-center\" style =\"width: 20rem\">\n        <div class=\"card-header\">\n            <div class=\"text-uppercase title\">Welcome!</div>\n        </div>\n            <div class=\"text-uppercase black\">New to Here?</div>\n            <div class=\"font-margin \">\n                Please Sign Up\n            </div>  \n            <div class=\"login-form\" >\n                <input #Name type =\"text\" placeholder =\"User Name\" /><br/>\n                <input #Password type =\"text\" placeholder =\"Password\" />\n            \n            </div>\n            <div class=\"btn-margin\">\n                <button class=\"btn\" (click)=\"newUser(Name.value, Password.value)\" >Sign Up</button>\n            </div>\n        </div>\n</div>\n"

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