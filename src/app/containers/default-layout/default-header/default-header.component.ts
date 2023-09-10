import { Component, Input } from '@angular/core';


import { HeaderComponent } from '@coreui/angular';

import * as Sentry from "@sentry/browser";

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
})
export class DefaultHeaderComponent extends HeaderComponent {

  @Input() sidebarId: string = "sidebar";

  public newMessages = new Array(4)
  public newTasks = new Array(5)
  public newNotifications = new Array(5)

  constructor() {
    super();
  }
}
