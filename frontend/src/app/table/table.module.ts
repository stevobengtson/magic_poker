import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '@app/shared/shared.module';
import { PlayerModule } from '@app/player/player.module';
import { TableComponent } from './table.component';
import { TableSpaceComponent } from './table-space/table-space.component';

@NgModule({
  declarations: [
    TableComponent,
    TableSpaceComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    PlayerModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
