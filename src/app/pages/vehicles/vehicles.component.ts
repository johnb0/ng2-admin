import { Component } from '@angular/core';
import { VehiclesService } from './vehicles.service';
import { Vehicle } from './vehicle';
import { PagedModel }     from 'app/common/models/pagedModel.interface';

@Component({
  selector: 'vehicles',
  styles: [],
  template: `
    <div>
      <button type="button" (click)="getVehicle(11)" class="btn btn-danger">getVehicle(11)</button>
      {{vehicle | json}}
      <button type="button" (click)="getVehicles()" class="btn btn-danger">getVehicles()</button>
      {{vehicles | json}}
    </div>`,
  providers: [
    VehiclesService
  ]
})
export class Vehicles {

  constructor(
    private _vehiclesService: VehiclesService
  ) {}

  private vehicle: Vehicle;
  private vehicles: PagedModel<Vehicle>;

  getVehicle(id: number) {
    this._vehiclesService.getVehicle(id).subscribe(
      vehicle => this.vehicle = vehicle,
      err => {
          console.log(err);
      }
    );
  }

  getVehicles() {
    this._vehiclesService.getVehicles().subscribe(
      vehicles => this.vehicles = vehicles,
      err => {
          console.log(err);
      }
    );
  }
}
