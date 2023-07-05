import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility/facility.service';


@Component({
  selector: 'app-facility-list',
  templateUrl: './facility-list.component.html',
  styleUrls: ['./facility-list.component.css']
})
export class FacilityListComponent implements OnInit {
  facilityList: Facility[];
  deleteId: string;
  deleteName: string;
  constructor(private facilityService: FacilityService) {
  }

  ngOnInit(): void {
    this.facilityService.findAll().subscribe(next => {
      this.facilityList = next;
    });
  }
  showDelete(facility: Facility) {
    this.deleteId = facility.id;
    this.deleteName = facility.name;
  }
  delete(id: string) {
    this.facilityService.deleteFacility(id).subscribe(() => {
      this.ngOnInit();
      alert('Xóa thành công rồi nhé');
    });
  }

}
