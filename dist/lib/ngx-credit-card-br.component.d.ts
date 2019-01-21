/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Credit card component.
 */
import { ChangeDetectorRef } from '@angular/core';
import { NgForm } from '@angular/forms';
export declare class NgxCreditCardBrComponent {
    private changeDetector;
    expirationMonths: Array<any>;
    expirationYears: Array<any>;
    availableBrands: Array<any>;
    showBack: boolean;
    card: any;
    form: NgForm;
    constructor(changeDetector: ChangeDetectorRef);
    ngOnInit(): void;
    getPhoneMask(phone: any): "(99) 99999-9999" | "(99) 9999-9999";
    getDocumentMask(documentType: string): "99.999.999/9999-99" | "999.999.999-99";
    initExpirationOptions(): Promise<void>;
    pad(num: any): any;
}
