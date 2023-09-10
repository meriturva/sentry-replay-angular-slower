import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EditorDemoComponent } from './editor.component';

const routes: Routes = [
  {
    path: '',
    component: EditorDemoComponent,
    data: {
      title: $localize`Editor demo`
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditorRoutingModule {
}
