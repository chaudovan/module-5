import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityService} from '../../service/facility/facility.service';
import {RentTypeService} from '../../service/facility/rent-type.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-facility-edit',
  templateUrl: './facility-edit.component.html',
  styleUrls: ['./facility-edit.component.css']
})
export class FacilityEditComponent implements OnInit {
  rfEdit: FormGroup;
  id: string;
  rentTyps: RentType[];

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private activateRouter: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.rentTypeService.findAll().subscribe(next => {
      this.rentTyps = next;
    });
    this.activateRouter.paramMap.subscribe(paramMap => {
      this.id = paramMap.get('id');
      this.facilityService.findById(this.id).subscribe(facility => {
        this.rfEdit = new FormGroup({
          id: new FormControl(facility.id, [Validators.required, Validators.pattern(/^DV-\d{4}$/)]),
          name: new FormControl(facility.name, [Validators.required]),
          area: new FormControl(facility.area, [Validators.required, this.checkNumber]),
          floor: new FormControl(facility.floor, [Validators.required, this.checkNumber]),
          maxPeople: new FormControl(facility.maxPeople, [Validators.required, this.checkNumber]),
          cost: new FormControl(facility.cost, [Validators.required, this.checkNumber]),
          rentType: new FormControl(this.rentTyps.filter(item => item.id === facility.rentType.id)[0], [Validators.required]),
          status: new FormControl(facility.status, [Validators.required])
        });
      });
    });
  }

  checkNumber(control: AbstractControl) {
    const salary = control.value;
    if (salary < 0) {
      return {numberError: true};
    }
    return null;
  }

  update() {
    const facility = this.rfEdit.value;
    this.facilityService.editFacility(this.id, facility).subscribe(() => {
      this.router.navigateByUrl('/facility');
      alert('Sửa thành công');
    });
  }
}
