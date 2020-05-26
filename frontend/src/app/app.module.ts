import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { AngularTokenModule } from 'angular-token';
import { HttpClientModule } from '@angular/common/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { BlockUIModule } from 'ng-block-ui';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppConfigService } from './services/app-config.service';

import { SharedModule } from './shared/shared.module';
import { TableModule } from './table/table.module';
import { PlayerModule } from './player/player.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export function init_app(appConfigService: AppConfigService) {
  return () => appConfigService.load();
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AngularTokenModule.forRoot({
      apiBase: 'http://localhost:3000'
    }),
    HttpClientModule,
    NgbModule,
    BlockUIModule.forRoot(),
    StorageServiceModule,
    AppRoutingModule,
    SharedModule,
    TableModule,
    PlayerModule
  ],
  providers: [
    AppConfigService,
    { provide: APP_INITIALIZER, useFactory: init_app, deps: [AppConfigService], multi: true }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
