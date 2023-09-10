import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EditorModule } from '@progress/kendo-angular-editor';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { LabelModule } from '@progress/kendo-angular-label';
import { GridModule } from '@progress/kendo-angular-grid';
import { LayoutModule } from "@progress/kendo-angular-layout";

import { EditorRoutingModule } from './editor-routing.module';
import { EditorDemoComponent } from './editor.component';

@NgModule({
  imports: [
    EditorModule,
    InputsModule,
    ButtonsModule,
    LabelModule,
    LayoutModule,
    GridModule,
    EditorRoutingModule,
    CommonModule
  ],
  declarations: [EditorDemoComponent]
})
export class EditorDemoModule {
}
