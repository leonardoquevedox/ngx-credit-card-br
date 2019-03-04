/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Credit card component.
 */
import { ChangeDetectorRef, Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import * as moment_ from 'moment-mini';
import { NgForm } from '@angular/forms';
/** @type {?} */
var moment = moment_;
var NgxCreditCardBrComponent = /** @class */ (function () {
    function NgxCreditCardBrComponent(changeDetector) {
        this.changeDetector = changeDetector;
    }
    /**
     * @return {?}
     */
    NgxCreditCardBrComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.initExpirationOptions();
    };
    /**
     * @param {?} phone
     * @return {?}
     */
    NgxCreditCardBrComponent.prototype.getPhoneMask = /**
     * @param {?} phone
     * @return {?}
     */
    function (phone) {
        return (phone && phone.length > 14) ? '(99) 99999-9999' : '(99) 9999-9999';
    };
    /**
     * @param {?} documentType
     * @return {?}
     */
    NgxCreditCardBrComponent.prototype.getDocumentMask = /**
     * @param {?} documentType
     * @return {?}
     */
    function (documentType) {
        return documentType == 'CNPJ' ? '99.999.999/9999-99' : '999.999.999-99';
    };
    /**
     * @return {?}
     */
    NgxCreditCardBrComponent.prototype.initExpirationOptions = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var expiration, month, year;
            return tslib_1.__generator(this, function (_a) {
                expiration = {
                    months: [],
                    years: []
                };
                for (month = 1; month <= 12; month++) {
                    expiration.months.push(this.pad(month));
                }
                for (year = 0; year <= 30; year++) {
                    expiration.years.push(moment().add(year, 'years').format('YYYY'));
                }
                this.expirationMonths = expiration.months;
                this.expirationYears = expiration.years;
                this.changeDetector.detectChanges();
                return [2 /*return*/];
            });
        });
    };
    /**
     * @param {?} num
     * @return {?}
     */
    NgxCreditCardBrComponent.prototype.pad = /**
     * @param {?} num
     * @return {?}
     */
    function (num) {
        return (num < 10) ? '0' + num.toString() : num.toString();
    };
    NgxCreditCardBrComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-credit-card-br',
                    template: "<article credit-card max-width-container *ngIf=\"card\">\n  <article card-back>\n    <section card-stripe></section>\n  </article>\n  <article card-front>\n    <form #cardForm=\"ngForm\" *ngIf=\"!showBack\">\n      <label>\n        N\u00FAmero do cart\u00E3o\n      </label>\n      <input\n        required\n        type=\"tel\"\n        autocomplete=\"cc-number\"\n        card-number\n        name=\"cardNumber\"\n        mask=\"9999 9999 9999 9999\"\n        [(ngModel)]=\"card.number\"\n        placeholder=\"1234 5678 9101 1112\"\n        length=\"16\"\n      />\n      <section cardholder-container>\n        <label>\n          Nome do titular\n        </label>\n        <input\n          required\n          type=\"text\"\n          autocomplete=\"cc-name\"\n          card-holder\n          name=\"holderName\"\n          [(ngModel)]=\"card.holder.name\"\n          placeholder=\"Ada Lovelace\"\n        />\n      </section>\n\n      <section exp-container>\n        <label>\n          Validade\n        </label>\n        <select\n          required\n          card-month\n          name=\"expMonth\"\n          [(ngModel)]=\"card.expirationMonth\"\n          autocomplete=\"cc-exp-month\"\n        >\n          <option\n            *ngFor=\"let month of expirationMonths; let index = index\"\n            [value]=\"month\"\n            [selected]=\"index == 0\"\n          >\n            {{ month }}\n          </option>\n        </select>\n        <select\n          required\n          card-year\n          name=\"expYear\"\n          [(ngModel)]=\"card.expirationYear\"\n          autocomplete=\"cc-exp-year\"\n        >\n          <option\n            *ngFor=\"let year of expirationYears; let index = index\"\n            [value]=\"year\"\n            [selected]=\"index == 0\"\n          >\n            {{ year }}\n          </option>\n        </select>\n      </section>\n\n      <section cvc-container>\n        <label for=\"card-cvc\">\n          CVV:\n        </label>\n        <input\n          required\n          card-cvc\n          autocomplete=\"cc-csc\"\n          placeholder=\"XXXX\"\n          name=\"cardCvv\"\n          [(ngModel)]=\"card.cvv\"\n          type=\"tel\"\n          min-length=\"3\"\n          max-length=\"4\"\n        />\n        <p>\n          <span> </span>\n        </p>\n      </section>\n    </form>\n  </article>\n</article>\n",
                    changeDetection: ChangeDetectionStrategy.Default,
                    styles: ["[credit-card]{padding-bottom:2.5rem;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:6rem;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1e99e5 100%);max-width:400px;min-height:230px;border-radius:.6rem;padding:2rem 3rem 0;font-size:1rem;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px .2rem rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-25rem;margin-left:-2rem}[credit-card] [card-back]{z-index:-2;padding:2rem 0 0;margin-right:-2rem}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:5.5rem;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:.2rem solid #fff;display:block;padding:1rem;color:#fff;float:right;border-radius:3rem;background-color:#1e88e5}[credit-card] [next-button]{margin-top:2rem}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-1rem}[credit-card] [card-brand]{float:left;margin-left:.6rem}[credit-card] [card-brand-select]{width:20.8rem}[credit-card] [card-brand-pic]{opacity:0;width:4.2rem;height:2rem}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:.8rem;text-transform:uppercase;letter-spacing:.05rem;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:.5rem}[credit-card] [exp-container]{margin-left:1rem;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:3rem;line-height:3rem;padding:0 1rem;margin:0 0 .8rem;color:#1e88e5;font-size:1rem;box-sizing:border-box;border-radius:.4rem;letter-spacing:.07rem}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79c2f0}[credit-card] input::-moz-placeholder{color:#79c2f0}[credit-card] input:-ms-input-placeholder{color:#79c2f0}[credit-card] input:-moz-placeholder{color:#79c2f0}[credit-card] label{display:block;margin:0 auto .7rem;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:6rem}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
                }] }
    ];
    NgxCreditCardBrComponent.ctorParameters = function () { return [
        { type: ChangeDetectorRef }
    ]; };
    NgxCreditCardBrComponent.propDecorators = {
        card: [{ type: Input, args: ['card',] }],
        form: [{ type: ViewChild, args: ['cardForm',] }]
    };
    return NgxCreditCardBrComponent;
}());
export { NgxCreditCardBrComponent };
if (false) {
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.expirationMonths;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.expirationYears;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.availableBrands;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.showBack;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.card;
    /** @type {?} */
    NgxCreditCardBrComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    NgxCreditCardBrComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNyZWRpdC1jYXJkLWJyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jcmVkaXQtY2FyZC1ici8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY3JlZGl0LWNhcmQtYnIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3ZHLE9BQU8sS0FBSyxPQUFPLE1BQU0sYUFBYSxDQUFBO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7SUFFakMsTUFBTSxHQUFHLE9BQU87QUFFdEI7SUFjSSxrQ0FBb0IsY0FBaUM7UUFBakMsbUJBQWMsR0FBZCxjQUFjLENBQW1CO0lBQUksQ0FBQzs7OztJQUUxRCwyQ0FBUTs7O0lBQVI7UUFDSSxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELCtDQUFZOzs7O0lBQVosVUFBYSxLQUFLO1FBQ2QsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUE7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxrREFBZTs7OztJQUFmLFVBQWdCLFlBQW9CO1FBQ2hDLE9BQU8sWUFBWSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFBO0lBQzNFLENBQUM7Ozs7SUFFSyx3REFBcUI7OztJQUEzQjs7OztnQkFDUSxVQUFVLEdBQUc7b0JBQ2IsTUFBTSxFQUFFLEVBQUU7b0JBQ1YsS0FBSyxFQUFFLEVBQUU7aUJBQ1o7Z0JBQ0QsS0FBUyxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7b0JBQ3RDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTtpQkFDMUM7Z0JBQ0QsS0FBUyxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7b0JBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7aUJBQ3BFO2dCQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFBO2dCQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7Z0JBQ3ZDLElBQUksQ0FBQyxjQUFjLENBQUMsYUFBYSxFQUFFLENBQUE7Ozs7S0FDdEM7Ozs7O0lBRUQsc0NBQUc7Ozs7SUFBSCxVQUFJLEdBQUc7UUFDSCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0QsQ0FBQzs7Z0JBOUNKLFNBQVMsU0FBQztvQkFDUCxRQUFRLEVBQUUsb0JBQW9CO29CQUM5QixzMUVBQWdEO29CQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzs7aUJBQ25EOzs7Z0JBWFEsaUJBQWlCOzs7dUJBaUJyQixLQUFLLFNBQUMsTUFBTTt1QkFDWixTQUFTLFNBQUMsVUFBVTs7SUFtQ3pCLCtCQUFDO0NBQUEsQUEvQ0QsSUErQ0M7U0F6Q1ksd0JBQXdCOzs7SUFDakMsb0RBQTRCOztJQUM1QixtREFBMkI7O0lBQzNCLG1EQUEyQjs7SUFDM0IsNENBQWlCOztJQUNqQix3Q0FBd0I7O0lBQ3hCLHdDQUFtQzs7Ozs7SUFFdkIsa0RBQXlDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZSBNSVRcbiAqIEB2ZXJzaW9uIDEuMS4wXG4gKiBAYXV0aG9yIExlb25hcmRvIFF1ZXZlZG9cbiAqIEBkZXNjcmlwdGlvbiBDcmVkaXQgY2FyZCBjb21wb25lbnQuXG4gKi9cblxuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgSW5wdXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuaW1wb3J0ICogYXMgbW9tZW50XyBmcm9tICdtb21lbnQtbWluaSdcbmltcG9ydCB7IE5nRm9ybSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJ1xuXG5jb25zdCBtb21lbnQgPSBtb21lbnRfXG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnbmd4LWNyZWRpdC1jYXJkLWJyJyxcbiAgICB0ZW1wbGF0ZVVybDogJ25neC1jcmVkaXQtY2FyZC1ici5jb21wb25lbnQuaHRtbCcsXG4gICAgc3R5bGVVcmxzOiBbJ25neC1jcmVkaXQtY2FyZC1ici5jb21wb25lbnQuc2NzcyddLFxuICAgIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuRGVmYXVsdFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hDcmVkaXRDYXJkQnJDb21wb25lbnQge1xuICAgIGV4cGlyYXRpb25Nb250aHM6IEFycmF5PGFueT5cbiAgICBleHBpcmF0aW9uWWVhcnM6IEFycmF5PGFueT5cbiAgICBhdmFpbGFibGVCcmFuZHM6IEFycmF5PGFueT5cbiAgICBzaG93QmFjazogYm9vbGVhblxuICAgIEBJbnB1dCgnY2FyZCcpIGNhcmQ6IGFueVxuICAgIEBWaWV3Q2hpbGQoJ2NhcmRGb3JtJykgZm9ybTogTmdGb3JtXG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGNoYW5nZURldGVjdG9yOiBDaGFuZ2VEZXRlY3RvclJlZikgeyB9XG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0RXhwaXJhdGlvbk9wdGlvbnMoKVxuICAgIH1cblxuICAgIGdldFBob25lTWFzayhwaG9uZSkge1xuICAgICAgICByZXR1cm4gKHBob25lICYmIHBob25lLmxlbmd0aCA+IDE0KSA/ICcoOTkpIDk5OTk5LTk5OTknIDogJyg5OSkgOTk5OS05OTk5J1xuICAgIH1cblxuICAgIGdldERvY3VtZW50TWFzayhkb2N1bWVudFR5cGU6IHN0cmluZykge1xuICAgICAgICByZXR1cm4gZG9jdW1lbnRUeXBlID09ICdDTlBKJyA/ICc5OS45OTkuOTk5Lzk5OTktOTknIDogJzk5OS45OTkuOTk5LTk5J1xuICAgIH1cblxuICAgIGFzeW5jIGluaXRFeHBpcmF0aW9uT3B0aW9ucygpIHtcbiAgICAgICAgbGV0IGV4cGlyYXRpb24gPSB7XG4gICAgICAgICAgICBtb250aHM6IFtdLFxuICAgICAgICAgICAgeWVhcnM6IFtdXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgbW9udGggPSAxOyBtb250aCA8PSAxMjsgbW9udGgrKykge1xuICAgICAgICAgICAgZXhwaXJhdGlvbi5tb250aHMucHVzaCh0aGlzLnBhZChtb250aCkpXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgeWVhciA9IDA7IHllYXIgPD0gMzA7IHllYXIrKykge1xuICAgICAgICAgICAgZXhwaXJhdGlvbi55ZWFycy5wdXNoKG1vbWVudCgpLmFkZCh5ZWFyLCAneWVhcnMnKS5mb3JtYXQoJ1lZWVknKSlcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV4cGlyYXRpb25Nb250aHMgPSBleHBpcmF0aW9uLm1vbnRoc1xuICAgICAgICB0aGlzLmV4cGlyYXRpb25ZZWFycyA9IGV4cGlyYXRpb24ueWVhcnNcbiAgICAgICAgdGhpcy5jaGFuZ2VEZXRlY3Rvci5kZXRlY3RDaGFuZ2VzKClcbiAgICB9XG5cbiAgICBwYWQobnVtKSB7XG4gICAgICAgIHJldHVybiAobnVtIDwgMTApID8gJzAnICsgbnVtLnRvU3RyaW5nKCkgOiBudW0udG9TdHJpbmcoKVxuICAgIH1cbn1cbiJdfQ==