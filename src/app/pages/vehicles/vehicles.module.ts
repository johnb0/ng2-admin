import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
// import { FormsModule } from '@angular/forms';
// import { NgaModule } from '../../theme/nga.module';

import { routing }       from './vehicles.routing';
import { Vehicles } from './vehicles.component';
import { VehiclesService } from './vehicles.service';


@NgModule({
  imports: [
    CommonModule,
    // FormsModule,
    // NgaModule,
    routing
  ],
  declarations: [
    Vehicles
  ],
  providers: [
    VehiclesService
  ]
})
export class VehiclesModule {}
