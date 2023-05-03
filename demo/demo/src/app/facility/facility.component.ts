import {Component, OnInit} from '@angular/core';
import {Facility} from '../facility';
import {FacilityType} from '../facility-type';
import {Renttype} from '../renttype';
import {FacilityService} from '../service/facility.service';
import {FacilityTypeService} from '../service/facility-type.service';
import {RentTypeService} from '../service/rent-type.service';


@Component({
  selector: 'app-facility',
  templateUrl: './facility.component.html',
  styleUrls: ['./facility.component.css']
})
export class FacilityComponent implements OnInit {
  facilityList: Facility [] = [];
  facilityTypeList: FacilityType [] = [];
  rentTypeList: Renttype [] = [];
  idDelete: number;
  id: number;
  name: string;
  area: string;
  cost: string;
  maxPeople: string;
  rentType: string;
  facilityType: string;
  standardRoom: string;
  other: string;
  pool: string;
  floors: string;
  free: string;
  p = 0;

  constructor(private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.facilityList = this.facilityService.findAll();
    this.facilityTypeList = this.facilityTypeService.findAll();
    this.rentTypeList = this.rentTypeService.findAll();
  }
  showDetail(facility: Facility) {
    this.id = facility.id;
    this.name = facility.name;
    this.area = facility.area;
    this.cost = facility.cost;
    this.maxPeople = facility.maxPeople;
    this.rentType = facility.rentType.name;
    this.facilityType = facility.facilityType.name;
    this.standardRoom = facility.standardRoom;
    this.other = facility.other;
    this.pool = facility.pool;
    this.floors = facility.floors;
    this.free = facility.free;
  }
  showDelete(facility: Facility) {
    this.idDelete = facility.id;
    this.name = facility.name;
  }
  delete(idDelete: number) {
  }

}
