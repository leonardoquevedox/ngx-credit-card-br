import { __awaiter, __generator } from 'tslib';
import * as moment_ from 'moment-mini';
import { ChangeDetectorRef, Component, Input, ViewChild, ChangeDetectionStrategy, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
                    template: "<article credit-card max-width-container *ngIf=\"card\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\" *ngIf=\"!showBack\">\n            <label>\n                N\u00FAmero do cart\u00E3o\n            </label>\n            <input required type=\"text\" autocomplete=\"cc-number\" card-number name=\"cardNumber\" mask=\"9999 9999 9999 9999\"\n                [(ngModel)]=\"card.number\" placeholder=\"1234 5678 9101 1112\" length=\"16\">\n            <section cardholder-container>\n                <label>\n                    Nome do titular\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"card.holder.name\"\n                    placeholder=\"Ada Lovelace\" />\n            </section>\n\n            <section exp-container>\n                <label>\n                    Validade\n                </label>\n                <select required card-month name=\"expMonth\" [(ngModel)]=\"card.expirationMonth\" autocomplete=\"cc-exp-month\">\n                    <option *ngFor=\"let month of expirationMonths; let index = index;\" [value]=\"month\" [selected]=\"index == 0\">\n                        {{month}}\n                    </option>\n                </select>\n                <select required card-year name=\"expYear\" [(ngModel)]=\"card.expirationYear\" autocomplete=\"cc-exp-year\">\n                    <option *ngFor=\"let year of expirationYears; let index = index;\" [value]=\"year\" [selected]=\"index == 0\">\n                        {{year}}\n                    </option>\n                </select>\n            </section>\n\n            <section cvc-container>\n                <label for=\"card-cvc\">\n                    CVV:\n                </label>\n                <input required card-cvc autocomplete=\"cc-csc\" placeholder=\"XXXX\" name=\"cardCvv\" [(ngModel)]=\"card.cvv\"\n                    type=\"text\" min-length=\"3\" max-length=\"4\">\n                <p>\n                    <span>\n                    </span>\n                </p>\n            </section>\n        </form>\n    </article>\n</article>",
                    changeDetection: ChangeDetectionStrategy.Default,
                    styles: ["[credit-card]{padding-bottom:25px;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:60px;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1ee5bd 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:6px;padding:20px 30px 0;font-size:10px;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px 2px rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-250px;margin-left:-20px}[credit-card] [card-back]{z-index:-2;padding:20px 0 0;margin-right:-20px}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:55px;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:2px solid #fff;display:block;padding:10px;color:#fff;float:right;border-radius:30px;background-color:#1e88e5}[credit-card] [next-button]{margin-top:20px}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-10px}[credit-card] [card-brand]{float:left;margin-left:6px}[credit-card] [card-brand-select]{width:208px}[credit-card] [card-brand-pic]{opacity:0;width:42px;height:20px}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:8px;text-transform:uppercase;letter-spacing:.5px;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:5px}[credit-card] [exp-container]{margin-left:10px;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:30px;line-height:30px;padding:0 10px;margin:0 0 8px;color:#1e88e5;font-size:10px;box-sizing:border-box;border-radius:4px;letter-spacing:.7px}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79f0d8}[credit-card] input::-moz-placeholder{color:#79f0d8}[credit-card] input:-ms-input-placeholder{color:#79f0d8}[credit-card] input:-moz-placeholder{color:#79f0d8}[credit-card] label{display:block;margin:0 auto 7px;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:60px}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
                }] }
    ];
    /** @nocollapse */
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */

export { NgxCreditCardBrComponent, NgxCreditCardBrModule, Component$1 as ɵa };

//# sourceMappingURL=ngx-credit-card-br.js.map