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
var core_1 = require('@angular/core');
var styles = require('./topbar.component.scss');
var TopbarComponent = (function () {
    function TopbarComponent() {
    }
    TopbarComponent = __decorate([
        core_1.Component({
            selector: 'topbar',
            template: "\n  <div class=\"topbar\">\n    <div class=\"topbar__link-wrapper\">\n      <a href=\"#\" class=\"topbar__link\">\n        <h1 class=\"topbar__logo\">Dash<span class=\"topbar__logo_f-weight_thinner\">Board</span></h1>\n      </a>\n    </div>\n    <div class=\"topbar__search-notifs-wrapper\">\n      <div class=\"topbar__search-wrapper\"><search></search></div>\n      <div class=\"topbar__notifs-wrapper\"></div>\n    </div>\n    <div class=\"topbar__profile-wrapper\"></div>\n  </div>\n  ",
            styles: [styles]
        }), 
        __metadata('design:paramtypes', [])
    ], TopbarComponent);
    return TopbarComponent;
}());
exports.TopbarComponent = TopbarComponent;
;
//# sourceMappingURL=topbar.component.js.map