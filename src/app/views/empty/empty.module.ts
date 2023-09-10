import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmptyRoutingModule } from './empty-routing.module';
import { EmptyComponent } from './empty.component';

@NgModule({
  imports: [
    EmptyRoutingModule,
    CommonModule
  ],
  declarations: [EmptyComponent]
})
export class EmptyModule {
}
