import { Component } from '@angular/core';
import { APP_CONFIG } from "../../../config/app-settings.config";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent {
  title = APP_CONFIG.appTitle;

  constructor() {};

  ngOnInit(): void {};
}
