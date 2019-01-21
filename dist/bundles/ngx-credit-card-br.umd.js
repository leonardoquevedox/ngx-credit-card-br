(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('moment-mini'), require('@angular/core'), require('@angular/common'), require('@angular/forms')) :
    typeof define === 'function' && define.amd ? define('ngx-credit-card-br', ['exports', 'moment-mini', '@angular/core', '@angular/common', '@angular/forms'], factory) :
    (factory((global['ngx-credit-card-br'] = {}),global.moment_,global.ng.core,global.ng.common,global.ng.forms));
}(this, (function (exports,moment_,core,common,forms) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

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
            { type: core.Component, args: [{
                        selector: 'ngx-credit-card',
                        template: "<article credit-card max-width-container *ngIf=\"card\">\n    <article card-back>\n        <section card-stripe></section>\n    </article>\n    <article card-front>\n        <form #cardForm=\"ngForm\" *ngIf=\"!showBack\">\n            <label>\n                N\u00FAmero do cart\u00E3o\n            </label>\n            <input required type=\"text\" autocomplete=\"cc-number\" card-number name=\"cardNumber\" mask=\"9999 9999 9999 9999\"\n                [(ngModel)]=\"card.number\" placeholder=\"1234 5678 9101 1112\" length=\"16\">\n            <section cardholder-container>\n                <label>\n                    Nome do titular\n                </label>\n                <input required type=\"text\" autocomplete=\"cc-name\" card-holder name=\"holderName\" [(ngModel)]=\"card.holder.name\"\n                    placeholder=\"Ada Lovelace\" />\n            </section>\n\n            <section exp-container>\n                <label>\n                    Validade\n                </label>\n                <select required card-month name=\"expMonth\" [(ngModel)]=\"card.expirationMonth\" autocomplete=\"cc-exp-month\">\n                    <option *ngFor=\"let month of expirationMonths; let index = index;\" [value]=\"month\" [selected]=\"index == 0\">\n                        {{month}}\n                    </option>\n                </select>\n                <select required card-year name=\"expYear\" [(ngModel)]=\"card.expirationYear\" autocomplete=\"cc-exp-year\">\n                    <option *ngFor=\"let year of expirationYears; let index = index;\" [value]=\"year\" [selected]=\"index == 0\">\n                        {{year}}\n                    </option>\n                </select>\n            </section>\n\n            <section cvc-container>\n                <label for=\"card-cvc\">\n                    CVV:\n                </label>\n                <input required card-cvc autocomplete=\"cc-csc\" placeholder=\"XXXX\" name=\"cardCvv\" [(ngModel)]=\"card.cvv\"\n                    type=\"text\" min-length=\"3\" max-length=\"4\">\n                <p>\n                    <span>\n                    </span>\n                </p>\n            </section>\n        </form>\n    </article>\n</article>",
                        changeDetection: core.ChangeDetectionStrategy.Default,
                        styles: ["[credit-card]{padding-bottom:25px;max-width:400px;margin:auto}[credit-card] *{transition-property:all;transition-duration:.3s}[credit-card] [card-cvc]{width:60px;margin-bottom:0}[credit-card] [card-back],[credit-card] [card-front]{background:#1e88e5;background:linear-gradient(to bottom,#1e88e5 0,#1ee5bd 100%);min-width:320px;max-width:400px;min-height:230px;border-radius:6px;padding:20px 30px 0;font-size:10px;letter-spacing:1px;font-weight:300;color:#fff;box-shadow:1px 1px 2px rgba(0,0,0,.2)}[credit-card] [card-front]{z-index:999;margin-top:-250px;margin-left:-20px}[credit-card] [card-back]{z-index:-2;padding:20px 0 0;margin-right:-20px}[credit-card] [card-extra-info] [field] select,[credit-card] [card-extra-info] [field][full-width],[credit-card] [card-holder],[credit-card] [card-number],[credit-card] [cvc-container] label{width:100%}[credit-card] [card-stripe]{width:100%;height:55px;background-color:rgba(0,0,0,.5);right:0}[credit-card] [card-token]{display:none}[credit-card] [card-month]{width:37%}[credit-card] [card-year]{width:53%;float:right}[credit-card] [cardholder-container]{width:60%;display:inline-block}[credit-card] [cvc-container]{box-sizing:border-box;text-align:right}[credit-card] [card-button]{border:2px solid #fff;display:block;padding:10px;color:#fff;float:right;border-radius:30px;background-color:#1e88e5}[credit-card] [next-button]{margin-top:20px}[credit-card] [save-button]{border-radius:50%;font-weight:700;margin-top:-10px}[credit-card] [card-brand]{float:left;margin-left:6px}[credit-card] [card-brand-select]{width:208px}[credit-card] [card-brand-pic]{opacity:0;width:42px;height:20px}[credit-card] [card-brand-pic][visible=true]{opacity:1}[credit-card] [cvc-container] p{font-size:8px;text-transform:uppercase;letter-spacing:.5px;color:#fff;font-weight:700}[credit-card] [cvc-container] p span{max-width:80px;display:inline-block;padding-top:5px}[credit-card] [exp-container]{margin-left:10px;width:32%;display:inline-block}[credit-card] input,[credit-card] select{border:none;outline:0;background-color:#fff;font-weight:700;height:30px;line-height:30px;padding:0 10px;margin:0 0 8px;color:#1e88e5;font-size:10px;box-sizing:border-box;border-radius:4px;letter-spacing:.7px}[credit-card] select{padding:0;text-align:center}[credit-card] select option{background-color:#fff;font-weight:700;color:#444}[credit-card] input::-webkit-input-placeholder{color:#79f0d8}[credit-card] input::-moz-placeholder{color:#79f0d8}[credit-card] input:-ms-input-placeholder{color:#79f0d8}[credit-card] input:-moz-placeholder{color:#79f0d8}[credit-card] label{display:block;margin:0 auto 7px;color:#fff;font-size:10px;font-weight:700;text-transform:uppercase}[credit-card] [card-extra-info] input{margin-bottom:0}[credit-card] [card-extra-info] [field]{display:inline-block;margin-right:1.5%;margin-left:1.5%;width:46%;height:60px}[credit-card] [card-extra-info] [field][email] input,[credit-card] [card-extra-info] [field][email] label{display:inline-block}[credit-card] [card-extra-info] [field][email] label{width:20%}[credit-card] [card-extra-info] [field][email] input{width:75%}"]
                    }] }
        ];
        /** @nocollapse */
        NgxCreditCardBrComponent.ctorParameters = function () {
            return [
                { type: core.ChangeDetectorRef }
            ];
        };
        NgxCreditCardBrComponent.propDecorators = {
            card: [{ type: core.Input, args: ['card',] }],
            form: [{ type: core.ViewChild, args: ['cardForm',] }]
        };
        return NgxCreditCardBrComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    /** @type {?} */
    var Component = [NgxCreditCardBrComponent];
    var NgxCreditCardBrModule = /** @class */ (function () {
        function NgxCreditCardBrModule() {
        }
        NgxCreditCardBrModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [common.CommonModule, forms.FormsModule],
                        declarations: [Component],
                        exports: [Component]
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

    exports.NgxCreditCardBrComponent = NgxCreditCardBrComponent;
    exports.NgxCreditCardBrModule = NgxCreditCardBrModule;
    exports.ɵa = Component;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=ngx-credit-card-br.umd.js.map