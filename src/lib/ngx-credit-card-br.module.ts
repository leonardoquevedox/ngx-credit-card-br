/**
 * @license MIT
 * @author Leonardo Quevedo
 * @description Component module.
 */

import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { NgxCreditCardBrComponent } from './ngx-credit-card-br.component'

export const Component = [NgxCreditCardBrComponent];

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [Component],
    exports: [Component]
})
export class NgxCreditCardBrModule { }