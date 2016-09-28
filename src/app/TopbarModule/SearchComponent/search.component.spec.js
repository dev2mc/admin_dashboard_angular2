"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var search_component_1 = require('./search.component');
describe('Search Component: ', function () {
    var fixture;
    var comp;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [search_component_1.SearchComponent]
        });
        fixture = testing_1.TestBed.createComponent(search_component_1.SearchComponent);
        comp = fixture.componentInstance;
    });
    it('should be created', function () {
        expect(comp instanceof search_component_1.SearchComponent).toBe(true, 'should create SearchComponent');
    });
    it('should contain element with class "search__form"', function () {
        var elemSearchForm = fixture.debugElement.query(platform_browser_1.By.css('.search__form')).nativeElement;
        expect(elemSearchForm).toBeDefined();
    });
    it('should contain element with class "search__input"', function () {
        var elemSearchInput = fixture.debugElement.query(platform_browser_1.By.css('.search__input')).nativeElement;
        expect(elemSearchInput).toBeDefined();
    });
    it('should contain element with class "search__submit"', function () {
        var elemSearchSubmit = fixture.debugElement.query(platform_browser_1.By.css('.search__submit')).nativeElement;
        expect(elemSearchSubmit).toBeDefined();
    });
    describe('when showMobInput property is truthy: ', function () {
        beforeEach(function () {
            comp.showMobInput = true;
            fixture.detectChanges();
        });
        it('element with class "search__form_device_mob" should appear', function () {
            var elemSearchFormMobile = fixture.debugElement.query(platform_browser_1.By.css('.search__form_device_mob')).nativeElement;
            expect(elemSearchFormMobile).toBeDefined();
        });
        it('element with class "search__show-mob" should appear', function () {
            var elemSearchShowMob = fixture.debugElement.query(platform_browser_1.By.css('.search__show-mob')).nativeElement;
            expect(elemSearchShowMob).toBeDefined();
        });
    });
});
//# sourceMappingURL=search.component.spec.js.map