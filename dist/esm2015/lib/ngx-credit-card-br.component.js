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
const moment = moment_;
export class NgxCreditCardBrComponent {
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
NgxCreditCardBrComponent.decorators = [
    { type: Component, args: [{
                selector: 'ngx-credit-card-br',
                template: "<article credit-card max-width-container *ngIf=\"card\">\n  <article card-back>\n    <section card-stripe></section>\n  </article>\n  <article card-front>\n    <form #cardForm=\"ngForm\" *ngIf=\"!showBack\">\n      <label>\n        N\u00FAmero do cart\u00E3o\n      </label>\n      <input\n        required\n        type=\"tel\"\n        autocomplete=\"cc-number\"\n        card-number\n        name=\"cardNumber\"\n        mask=\"9999 9999 9999 9999\"\n        [(ngModel)]=\"card.number\"\n        placeholder=\"1234 5678 9101 1112\"\n        length=\"16\"\n      />\n      <section cardholder-container>\n        <label>\n          Nome do titular\n        </label>\n        <input\n          required\n          type=\"text\"\n          autocomplete=\"cc-name\"\n          card-holder\n          name=\"holderName\"\n          [(ngModel)]=\"card.holder.name\"\n          placeholder=\"Ada Lovelace\"\n        />\n      </section>\n\n      <section exp-container>\n        <label>\n          Validade\n        </label>\n        <select\n          required\n          card-month\n          name=\"expMonth\"\n          [(ngModel)]=\"card.expirationMonth\"\n          autocomplete=\"cc-exp-month\"\n        >\n          <option\n            *ngFor=\"let month of expirationMonths; let index = index\"\n            [value]=\"month\"\n            [selected]=\"index == 0\"\n          >\n            {{ month }}\n          </option>\n        </select>\n        <select\n          required\n          card-year\n          name=\"expYear\"\n          [(ngModel)]=\"card.expirationYear\"\n          autocomplete=\"cc-exp-year\"\n        >\n          <option\n            *ngFor=\"let year of expirationYears; let index = index\"\n            [value]=\"year\"\n            [selected]=\"index == 0\"\n          >\n            {{ year }}\n          </option>\n        </select>\n      </section>\n\n      <section cvc-container>\n        <label for=\"card-cvc\">\n          CVV:\n        </label>\n        <input\n          required\n          card-cvc\n          autocomplete=\"cc-csc\"\n          placeholder=\"XXXX\"\n          name=\"cardCvv\"\n          [(ngModel)]=\"card.cvv\"\n          type=\"tel\"\n          min-length=\"3\"\n          max-length=\"4\"\n        />\n        <p>\n          <span> </span>\n        </p>\n      </section>\n    </form>\n  </article>\n</article>\n",
                changeDetection: ChangeDetectionStrategy.Default,
                styles: ["[credit-card]{padding-bottom:2.5rem;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:6rem;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1e99e5 100%);max-width:400px;min-height:230px;border-radius:.6rem;padding:2rem 3rem 0;font-size:1rem;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px .2rem rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-25rem;margin-left:-2rem}[credit-card] [card-back]{z-index:-2;padding:2rem 0 0;margin-right:-2rem}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:5.5rem;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:.2rem solid #fff;display:block;padding:1rem;color:#fff;float:right;border-radius:3rem;background-color:#1e88e5}[credit-card] [next-button]{margin-top:2rem}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-1rem}[credit-card] [card-brand]{float:left;margin-left:.6rem}[credit-card] [card-brand-select]{width:20.8rem}[credit-card] [card-brand-pic]{opacity:0;width:4.2rem;height:2rem}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:.8rem;text-transform:uppercase;letter-spacing:.05rem;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:.5rem}[credit-card] [exp-container]{margin-left:1rem;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:3rem;line-height:3rem;padding:0 1rem;margin:0 0 .8rem;color:#1e88e5;font-size:1rem;box-sizing:border-box;border-radius:.4rem;letter-spacing:.07rem}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79c2f0}[credit-card] input::-moz-placeholder{color:#79c2f0}[credit-card] input:-ms-input-placeholder{color:#79c2f0}[credit-card] input:-moz-placeholder{color:#79c2f0}[credit-card] label{display:block;margin:0 auto .7rem;color:#fff;font-size:1rem;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:6rem}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
            }] }
];
NgxCreditCardBrComponent.ctorParameters = () => [
    { type: ChangeDetectorRef }
];
NgxCreditCardBrComponent.propDecorators = {
    card: [{ type: Input, args: ['card',] }],
    form: [{ type: ViewChild, args: ['cardForm',] }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWNyZWRpdC1jYXJkLWJyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1jcmVkaXQtY2FyZC1ici8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtY3JlZGl0LWNhcmQtYnIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBT0EsT0FBTyxFQUFFLGlCQUFpQixFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLHVCQUF1QixFQUFFLE1BQU0sZUFBZSxDQUFBO0FBQ3ZHLE9BQU8sS0FBSyxPQUFPLE1BQU0sYUFBYSxDQUFBO0FBQ3RDLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQTs7TUFFakMsTUFBTSxHQUFHLE9BQU87QUFRdEIsTUFBTTs7OztJQVFGLFlBQW9CLGNBQWlDO1FBQWpDLG1CQUFjLEdBQWQsY0FBYyxDQUFtQjtJQUFJLENBQUM7Ozs7SUFFMUQsUUFBUTtRQUNKLElBQUksQ0FBQyxxQkFBcUIsRUFBRSxDQUFBO0lBQ2hDLENBQUM7Ozs7O0lBRUQsWUFBWSxDQUFDLEtBQUs7UUFDZCxPQUFPLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUM5RSxDQUFDOzs7OztJQUVELGVBQWUsQ0FBQyxZQUFvQjtRQUNoQyxPQUFPLFlBQVksSUFBSSxNQUFNLENBQUMsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQTtJQUMzRSxDQUFDOzs7O0lBRUsscUJBQXFCOzs7Z0JBQ25CLFVBQVUsR0FBRztnQkFDYixNQUFNLEVBQUUsRUFBRTtnQkFDVixLQUFLLEVBQUUsRUFBRTthQUNaO1lBQ0QsS0FBSyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxJQUFJLEVBQUUsRUFBRSxLQUFLLEVBQUUsRUFBRTtnQkFDdEMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFBO2FBQzFDO1lBQ0QsS0FBSyxJQUFJLElBQUksR0FBRyxDQUFDLEVBQUUsSUFBSSxJQUFJLEVBQUUsRUFBRSxJQUFJLEVBQUUsRUFBRTtnQkFDbkMsVUFBVSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxPQUFPLENBQUMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQTthQUNwRTtZQUNELElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFBO1lBQ3pDLElBQUksQ0FBQyxlQUFlLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQTtZQUN2QyxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsRUFBRSxDQUFBO1FBQ3ZDLENBQUM7S0FBQTs7Ozs7SUFFRCxHQUFHLENBQUMsR0FBRztRQUNILE9BQU8sQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQTtJQUM3RCxDQUFDOzs7WUE5Q0osU0FBUyxTQUFDO2dCQUNQLFFBQVEsRUFBRSxvQkFBb0I7Z0JBQzlCLHMxRUFBZ0Q7Z0JBRWhELGVBQWUsRUFBRSx1QkFBdUIsQ0FBQyxPQUFPOzthQUNuRDs7O1lBWFEsaUJBQWlCOzs7bUJBaUJyQixLQUFLLFNBQUMsTUFBTTttQkFDWixTQUFTLFNBQUMsVUFBVTs7OztJQUxyQixvREFBNEI7O0lBQzVCLG1EQUEyQjs7SUFDM0IsbURBQTJCOztJQUMzQiw0Q0FBaUI7O0lBQ2pCLHdDQUF3Qjs7SUFDeEIsd0NBQW1DOzs7OztJQUV2QixrREFBeUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlIE1JVFxuICogQHZlcnNpb24gMS4xLjBcbiAqIEBhdXRob3IgTGVvbmFyZG8gUXVldmVkb1xuICogQGRlc2NyaXB0aW9uIENyZWRpdCBjYXJkIGNvbXBvbmVudC5cbiAqL1xuXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3RvclJlZiwgQ29tcG9uZW50LCBJbnB1dCwgVmlld0NoaWxkLCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5pbXBvcnQgKiBhcyBtb21lbnRfIGZyb20gJ21vbWVudC1taW5pJ1xuaW1wb3J0IHsgTmdGb3JtIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnXG5cbmNvbnN0IG1vbWVudCA9IG1vbWVudF9cblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICduZ3gtY3JlZGl0LWNhcmQtYnInLFxuICAgIHRlbXBsYXRlVXJsOiAnbmd4LWNyZWRpdC1jYXJkLWJyLmNvbXBvbmVudC5odG1sJyxcbiAgICBzdHlsZVVybHM6IFsnbmd4LWNyZWRpdC1jYXJkLWJyLmNvbXBvbmVudC5zY3NzJ10sXG4gICAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5EZWZhdWx0XG59KVxuZXhwb3J0IGNsYXNzIE5neENyZWRpdENhcmRCckNvbXBvbmVudCB7XG4gICAgZXhwaXJhdGlvbk1vbnRoczogQXJyYXk8YW55PlxuICAgIGV4cGlyYXRpb25ZZWFyczogQXJyYXk8YW55PlxuICAgIGF2YWlsYWJsZUJyYW5kczogQXJyYXk8YW55PlxuICAgIHNob3dCYWNrOiBib29sZWFuXG4gICAgQElucHV0KCdjYXJkJykgY2FyZDogYW55XG4gICAgQFZpZXdDaGlsZCgnY2FyZEZvcm0nKSBmb3JtOiBOZ0Zvcm1cblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgY2hhbmdlRGV0ZWN0b3I6IENoYW5nZURldGVjdG9yUmVmKSB7IH1cblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmluaXRFeHBpcmF0aW9uT3B0aW9ucygpXG4gICAgfVxuXG4gICAgZ2V0UGhvbmVNYXNrKHBob25lKSB7XG4gICAgICAgIHJldHVybiAocGhvbmUgJiYgcGhvbmUubGVuZ3RoID4gMTQpID8gJyg5OSkgOTk5OTktOTk5OScgOiAnKDk5KSA5OTk5LTk5OTknXG4gICAgfVxuXG4gICAgZ2V0RG9jdW1lbnRNYXNrKGRvY3VtZW50VHlwZTogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBkb2N1bWVudFR5cGUgPT0gJ0NOUEonID8gJzk5Ljk5OS45OTkvOTk5OS05OScgOiAnOTk5Ljk5OS45OTktOTknXG4gICAgfVxuXG4gICAgYXN5bmMgaW5pdEV4cGlyYXRpb25PcHRpb25zKCkge1xuICAgICAgICBsZXQgZXhwaXJhdGlvbiA9IHtcbiAgICAgICAgICAgIG1vbnRoczogW10sXG4gICAgICAgICAgICB5ZWFyczogW11cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBtb250aCA9IDE7IG1vbnRoIDw9IDEyOyBtb250aCsrKSB7XG4gICAgICAgICAgICBleHBpcmF0aW9uLm1vbnRocy5wdXNoKHRoaXMucGFkKG1vbnRoKSlcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCB5ZWFyID0gMDsgeWVhciA8PSAzMDsgeWVhcisrKSB7XG4gICAgICAgICAgICBleHBpcmF0aW9uLnllYXJzLnB1c2gobW9tZW50KCkuYWRkKHllYXIsICd5ZWFycycpLmZvcm1hdCgnWVlZWScpKVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXhwaXJhdGlvbk1vbnRocyA9IGV4cGlyYXRpb24ubW9udGhzXG4gICAgICAgIHRoaXMuZXhwaXJhdGlvblllYXJzID0gZXhwaXJhdGlvbi55ZWFyc1xuICAgICAgICB0aGlzLmNoYW5nZURldGVjdG9yLmRldGVjdENoYW5nZXMoKVxuICAgIH1cblxuICAgIHBhZChudW0pIHtcbiAgICAgICAgcmV0dXJuIChudW0gPCAxMCkgPyAnMCcgKyBudW0udG9TdHJpbmcoKSA6IG51bS50b1N0cmluZygpXG4gICAgfVxufVxuIl19