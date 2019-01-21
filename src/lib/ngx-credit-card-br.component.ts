/**
 * @license MIT
 * @version 1.1.0
 * @author Leonardo Quevedo
 * @description Credit card component.
 */

import { ChangeDetectorRef, Component, Input, ViewChild, ChangeDetectionStrategy } from '@angular/core'
import * as moment_ from 'moment-mini'
import { NgForm } from '@angular/forms'

const moment = moment_

@Component({
    selector: 'ngx-credit-card',
    templateUrl: 'ngx-credit-card-br.component.html',
    styleUrls: ['ngx-credit-card-br.component.scss'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class NgxCreditCardBrComponent {
    expirationMonths: Array<any>
    expirationYears: Array<any>
    availableBrands: Array<any>
    showBack: boolean
    @Input('card') card: any
    @ViewChild('cardForm') form: NgForm

    constructor(private changeDetector: ChangeDetectorRef) { }

    ngOnInit() {
        this.initExpirationOptions()
    }

    getPhoneMask(phone) {
        return (phone && phone.length > 14) ? '(99) 99999-9999' : '(99) 9999-9999'
    }

    getDocumentMask(documentType: string) {
        return documentType == 'CNPJ' ? '99.999.999/9999-99' : '999.999.999-99'
    }

    async initExpirationOptions() {
        let expiration = {
            months: [],
            years: []
        }
        for (let month = 1; month <= 12; month++) {
            expiration.months.push(this.pad(month))
        }
        for (let year = 0; year <= 30; year++) {
            expiration.years.push(moment().add(year, 'years').format('YYYY'))
        }
        this.expirationMonths = expiration.months
        this.expirationYears = expiration.years
        this.changeDetector.detectChanges()
    }

    pad(num) {
        return (num < 10) ? '0' + num.toString() : num.toString()
    }
}
