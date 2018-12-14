/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
const moment = moment_;
export class NgxCreditCardComponent {
    /**
     * @param {?} changeDetector
     */
    constructor(changeDetector) {
        this.changeDetector = changeDetector;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.initExpirationOptions();
    }
    /**
     * @param {?} phone
     * @return {?}
     */
    getPhoneMask(phone) {
        return (phone && phone.length > 14) ? '(99) 99999-9999' : '(99) 9999-9999';
    }
    /**
     * @param {?} documentType
     * @return {?}
     */
    getDocumentMask(documentType) {
        return documentType == 'CNPJ' ? '99.999.999/9999-99' : '999.999.999-99';
    }
    /**
     * @return {?}
     */
    initExpirationOptions() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            let expiration = {
                months: [],
                years: []
            };
            for (let month = 1; month <= 12; month++) {
                expiration.months.push(this.pad(month));
            }
            for (let year = 0; year <= 30; year++) {
                expiration.years.push(moment().add(year, 'years').format('YYYY'));
            }
            this.expirationMonths = expiration.months;
            this.expirationYears = expiration.years;
            this.changeDetector.detectChanges();
        });
    }
    /**
     * @param {?} num
     * @return {?}
     */
    pad(num) {
        return (num < 10) ? '0' + num.toString() : num.toString();
    }
}
NgxCreditCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-credit-card',
                template: "<article credit-card max-width-container *ngIf=\"card\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\" *ngIf=\"!showBack\">\n            <label>\n                N\u00FAmero do cart\u00E3o\n            </label>\n            <input required type=\"text\" autocomplete=\"cc-number\" card-number name=\"cardNumber\" mask=\"9999 9999 9999 9999\"\n                [(ngModel)]=\"card.number\" placeholder=\"1234 5678 9101 1112\" length=\"16\">\n            <section cardholder-container>\n                <label>\n                    Nome do titular\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"card.holder.name\"\n                    placeholder=\"Ada Lovelace\" />\n            </section>\n\n            <section exp-container>\n                <label>\n                    Validade\n                </label>\n                <select required card-month name=\"expMonth\" [(ngModel)]=\"card.expirationMonth\" autocomplete=\"cc-exp-month\">\n                    <option *ngFor=\"let month of expirationMonths; let index = index;\" [value]=\"month\" [selected]=\"index == 0\">\n                        {{month}}\n                    </option>\n                </select>\n                <select required card-year name=\"expYear\" [(ngModel)]=\"card.expirationYear\" autocomplete=\"cc-exp-year\">\n                    <option *ngFor=\"let year of expirationYears; let index = index;\" [value]=\"year\" [selected]=\"index == 0\">\n                        {{year}}\n                    </option>\n                </select>\n            </section>\n\n            <section cvc-container>\n                <label for=\"card-cvc\">\n                    CVV:\n                </label>\n                <input required card-cvc autocomplete=\"cc-csc\" placeholder=\"XXXX\" name=\"cardCvv\" [(ngModel)]=\"card.cvv\"\n                    type=\"text\" min-length=\"3\" max-length=\"4\">\n                <p>\n                    <span>\n                    </span>\n                </p>\n            </section>\n        </form>\n    </article>\n</article>",
                changeDetection: ChangeDetectionStrategy.Default,
                styles: ["[credit-card]{padding-bottom:25px;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:60px;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1ee5bd 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:6px;padding:20px 30px 0;font-size:10px;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px 2px rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-250px;margin-left:-20px}[credit-card] [card-back]{z-index:-2;padding:20px 0 0;margin-right:-20px}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:55px;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:2px solid #fff;display:block;padding:10px;color:#fff;float:right;border-radius:30px;background-color:#1e88e5}[credit-card] [next-button]{margin-top:20px}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-10px}[credit-card] [card-brand]{float:left;margin-left:6px}[credit-card] [card-brand-select]{width:208px}[credit-card] [card-brand-pic]{opacity:0;width:42px;height:20px}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:8px;text-transform:uppercase;letter-spacing:.5px;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:5px}[credit-card] [exp-container]{margin-left:10px;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:30px;line-height:30px;padding:0 10px;margin:0 0 8px;color:#1e88e5;font-size:10px;box-sizing:border-box;border-radius:4px;letter-spacing:.7px}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79f0d8}[credit-card] input::-moz-placeholder{color:#79f0d8}[credit-card] input:-ms-input-placeholder{color:#79f0d8}[credit-card] input:-moz-placeholder{color:#79f0d8}[credit-card] label{display:block;margin:0 auto 7px;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:60px}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
            }] }
];
/** @nocollapse */
NgxCreditCardComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NgxCreditCardComponent.propDecorators = {
    card: [{ type: Input, args: ['card',] }],
    form: [{ type: ViewChild, args: ['cardForm',] }]
};
if (false) {
    /** @type {?} */
    NgxCreditCardComponent.prototype.expirationMonths;
    /** @type {?} */
    NgxCreditCardComponent.prototype.expirationYears;
    /** @type {?} */
    NgxCreditCardComponent.prototype.availableBrands;
    /** @type {?} */
    NgxCreditCardComponent.prototype.showBack;
    /** @type {?} */
    NgxCreditCardComponent.prototype.card;
    /** @type {?} */
    NgxCreditCardComponent.prototype.form;
    /**
     * @type {?}
     * @private
     */
    NgxCreditCardComponent.prototype.changeDetector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNyZWRpdC1jYXJkLWJyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1iYW5rLWFjY291bnQtYnIvIiwic291cmNlcyI6WyJuZ3gtY3JlZGl0LWNhcmQtYnIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3ZHLE9BQU8sS0FBSyxPQUFPLE1BQU0sYUFBYSxDQUFBO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7TUFFakMsTUFBTSxHQUFHLE9BQU87QUFRdEIsTUFBTSxPQUFPLHNCQUFzQjs7OztJQVEvQixZQUFvQixjQUFpQztRQUFqQyxtQkFBYyxHQUFkLGNBQWMsQ0FBbUI7SUFBSSxDQUFDOzs7O0lBRTFELFFBQVE7UUFDSixJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQTtJQUNoQyxDQUFDOzs7OztJQUVELFlBQVksQ0FBQyxLQUFLO1FBQ2QsT0FBTyxDQUFDLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUE7SUFDOUUsQ0FBQzs7Ozs7SUFFRCxlQUFlLENBQUMsWUFBb0I7UUFDaEMsT0FBTyxZQUFZLElBQUksTUFBTSxDQUFDLENBQUMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLENBQUE7SUFDM0UsQ0FBQzs7OztJQUVLLHFCQUFxQjs7O2dCQUNuQixVQUFVLEdBQUc7Z0JBQ2IsTUFBTSxFQUFFLEVBQUU7Z0JBQ1YsS0FBSyxFQUFFLEVBQUU7YUFDWjtZQUNELEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxFQUFFLEtBQUssSUFBSSxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUU7Z0JBQ3RDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQTthQUMxQztZQUNELEtBQUssSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFFLElBQUksSUFBSSxFQUFFLEVBQUUsSUFBSSxFQUFFLEVBQUU7Z0JBQ25DLFVBQVUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUE7YUFDcEU7WUFDRCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQTtZQUN6QyxJQUFJLENBQUMsZUFBZSxHQUFHLFVBQVUsQ0FBQyxLQUFLLENBQUE7WUFDdkMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxhQUFhLEVBQUUsQ0FBQTtRQUN2QyxDQUFDO0tBQUE7Ozs7O0lBRUQsR0FBRyxDQUFDLEdBQUc7UUFDSCxPQUFPLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUE7SUFDN0QsQ0FBQzs7O1lBOUNKLFNBQVMsU0FBQztnQkFDUCxRQUFRLEVBQUUsaUJBQWlCO2dCQUMzQix3c0VBQWdEO2dCQUVoRCxlQUFlLEVBQUUsdUJBQXVCLENBQUMsT0FBTzs7YUFDbkQ7Ozs7WUFYUSxpQkFBaUI7OzttQkFpQnJCLEtBQUssU0FBQyxNQUFNO21CQUNaLFNBQVMsU0FBQyxVQUFVOzs7O0lBTHJCLGtEQUE0Qjs7SUFDNUIsaURBQTJCOztJQUMzQixpREFBMkI7O0lBQzNCLDBDQUFpQjs7SUFDakIsc0NBQXdCOztJQUN4QixzQ0FBbUM7Ozs7O0lBRXZCLGdEQUF5QyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2UgTUlUXG4gKiBAdmVyc2lvbiAxLjEuMFxuICogQGF1dGhvciBMZW9uYXJkbyBRdWV2ZWRvXG4gKiBAZGVzY3JpcHRpb24gQ3JlZGl0IGNhcmQgY29tcG9uZW50LlxuICovXG5cbmltcG9ydCB7IENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIElucHV0LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcbmltcG9ydCAqIGFzIG1vbWVudF8gZnJvbSAnbW9tZW50LW1pbmknXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3JtcydcblxuY29uc3QgbW9tZW50ID0gbW9tZW50X1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ25neC1jcmVkaXQtY2FyZCcsXG4gICAgdGVtcGxhdGVVcmw6ICduZ3gtY3JlZGl0LWNhcmQtYnIuY29tcG9uZW50Lmh0bWwnLFxuICAgIHN0eWxlVXJsczogWyduZ3gtY3JlZGl0LWNhcmQtYnIuY29tcG9uZW50LnNjc3MnXSxcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5LkRlZmF1bHRcbn0pXG5leHBvcnQgY2xhc3MgTmd4Q3JlZGl0Q2FyZENvbXBvbmVudCB7XG4gICAgZXhwaXJhdGlvbk1vbnRoczogQXJyYXk8YW55PlxuICAgIGV4cGlyYXRpb25ZZWFyczogQXJyYXk8YW55PlxuICAgIGF2YWlsYWJsZUJyYW5kczogQXJyYXk8YW55PlxuICAgIHNob3dCYWNrOiBib29sZWFuXG4gICAgQElucHV0KCdjYXJkJykgY2FyZDogYW55XG4gICAgQFZpZXdDaGlsZCgnY2FyZEZvcm0nKSBmb3JtOiBOZ0Zvcm1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXRFeHBpcmF0aW9uT3B0aW9ucygpXG4gICAgfVxuXG4gICAgZ2V0UGhvbmVNYXNrKHBob25lKSB7XG4gICAgICAgIHJldHVybiAocGhvbmUgJiYgcGhvbmUubGVuZ3RoID4gMTQpID8gJyg5OSkgOTk5OTktOTk5OScgOiAnKDk5KSA5OTk5LTk5OTknXG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnRNYXNrKGRvY3VtZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudFR5cGUgPT0gJ0NOUEonID8gJzk5Ljk5OS45OTkvOTk5OS05OScgOiAnOTk5Ljk5OS45OTktOTknXG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEV4cGlyYXRpb25PcHRpb25zKCkge1xuICAgICAgICBsZXQgZXhwaXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1vbnRoczogW10sXG4gICAgICAgICAgICB5ZWFyczogW11cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtb250aCA9IDE7IG1vbnRoIDw9IDEyOyBtb250aCsrKSB7XG4gICAgICAgICAgICBleHBpcmF0aW9uLm1vbnRocy5wdXNoKHRoaXMucGFkKG1vbnRoKSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB5ZWFyID0gMDsgeWVhciA8PSAzMDsgeWVhcisrKSB7XG4gICAgICAgICAgICBleHBpcmF0aW9uLnllYXJzLnB1c2gobW9tZW50KCkuYWRkKHllYXIsICd5ZWFycycpLmZvcm1hdCgnWVlZWScpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXhwaXJhdGlvbk1vbnRocyA9IGV4cGlyYXRpb24ubW9udGhzXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblllYXJzID0gZXhwaXJhdGlvbi55ZWFyc1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKVxuICAgIH1cblxuICAgIHBhZChudW0pIHtcbiAgICAgICAgcmV0dXJuIChudW0gPCAxMCkgPyAnMCcgKyBudW0udG9TdHJpbmcoKSA6IG51bS50b1N0cmluZygpXG4gICAgfVxufVxuIl19