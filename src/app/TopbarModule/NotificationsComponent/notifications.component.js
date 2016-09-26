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
var NotificationsComponent = (function () {
    function NotificationsComponent() {
    }
    ;
    NotificationsComponent.prototype.ngOnInit = function () {
        this.notificationsData = [
            {
                type: 'comment',
                link: '#',
                quantity: 9
            },
            {
                type: 'email',
                link: '#',
                quantity: 1
            }
        ];
    };
    NotificationsComponent = __decorate([
        core_1.Component({
            selector: 'notifications',
            template: "\n    <div class=\"notifications\">\n      <notifications-item *ngFor='let item of notificationsData' [type]='item.type' [link]='item.link' [quantity]='item.quantity'></notifications-item>\n    </div>\n  ",
            styles: ["\n    .notifications {\n      display: flex;\n    }\n  "]
        }), 
        __metadata('design:paramtypes', [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
exports.NotificationsComponent = NotificationsComponent;
//# sourceMappingURL=notifications.component.js.map