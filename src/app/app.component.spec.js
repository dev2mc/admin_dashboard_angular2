"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var topbar_module_1 = require('./TopbarModule/topbar.module');
describe('AppComponent: ', function () {
    var fixture;
    var comp;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [topbar_module_1.TopbarModule],
            declarations: [app_component_1.AppComponent]
        });
        fixture = testing_1.TestBed.createComponent(app_component_1.AppComponent);
        comp = fixture.componentInstance;
    });
    it('should be created', function () {
        expect(comp instanceof app_component_1.AppComponent).toBe(true, 'should create AppComponent');
    });
    it('should contain "topbar" component', function () {
        var debugTopbar = fixture.debugElement.query(platform_browser_1.By.css('topbar'));
        var elemTopbar = debugTopbar.nativeElement;
        expect(elemTopbar).toBeDefined();
    });
});
//# sourceMappingURL=app.component.spec.js.map