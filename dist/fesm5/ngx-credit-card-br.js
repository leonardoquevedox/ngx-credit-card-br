import { __awaiter, __generator } from 'tslib';
import * as moment_ from 'moment-mini';
import { ChangeDetectorRef, Component, Input, ViewChild, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
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
        return __awaiter(this, void 0, void 0, function () {
            var expiration, month, year;
            return __generator(this, function (_a) {
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
                    styles: ["[credit-card]{padding-bottom:2.5rem;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:6rem;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1e99e5 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:.6rem;padding:2rem 3rem 0;font-size:1rem;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px .2rem rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-25rem;margin-left:-2rem}[credit-card] [card-back]{z-index:-2;padding:2rem 0 0;margin-right:-2rem}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:5.5rem;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:.2rem solid #fff;display:block;padding:1rem;color:#fff;float:right;border-radius:3rem;background-color:#1e88e5}[credit-card] [next-button]{margin-top:2rem}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-1rem}[credit-card] [card-brand]{float:left;margin-left:.6rem}[credit-card] [card-brand-select]{width:20.8rem}[credit-card] [card-brand-pic]{opacity:0;width:4.2rem;height:2rem}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:.8rem;text-transform:uppercase;letter-spacing:.05rem;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:.5rem}[credit-card] [exp-container]{margin-left:1rem;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:3rem;line-height:3rem;padding:0 1rem;margin:0 0 .8rem;color:#1e88e5;font-size:1rem;box-sizing:border-box;border-radius:.4rem;letter-spacing:.07rem}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79c2f0}[credit-card] input::-moz-placeholder{color:#79c2f0}[credit-card] input:-ms-input-placeholder{color:#79c2f0}[credit-card] input:-moz-placeholder{color:#79c2f0}[credit-card] label{display:block;margin:0 auto .7rem;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:6rem}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
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

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
/** @type {?} */
var Component$1 = [NgxCreditCardBrComponent];
var NgxCreditCardBrModule = /** @class */ (function () {
    function NgxCreditCardBrModule() {
    }
    NgxCreditCardBrModule.decorators = [
        { type: NgModule, args: [{
                    imports: [CommonModule, FormsModule],
                    declarations: [Component$1],
                    exports: [Component$1]
                },] }
    ];
    return NgxCreditCardBrModule;
}());

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCreditCardBrComponent, NgxCreditCardBrModule, Component$1 as ɵa };

//# sourceMappingURL=ngx-credit-card-br.js.map