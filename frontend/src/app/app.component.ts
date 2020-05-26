import { Component, OnInit } from '@angular/core';
import { AppConfigService } from '@services/app-config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private readonly config: AppConfigService) {}

  ngOnInit() {
    console.log(`Base URL = ${this.config.settings.baseApiUrl}`);
  }
}
