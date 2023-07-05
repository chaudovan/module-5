import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {RentType} from '../../model/rent-type';
import {FacilityService} from '../../service/facility/facility.service';
import {RentTypeService} from '../../service/facility/rent-type.service';
import {Router} from '@angular/router';
import {filterToMembersWithDecorator} from '@angular/compiler-cli/src/ngtsc/reflection';

@Component({
  selector: 'app-facility-create',
  templateUrl: './facility-create.component.html',
  styleUrls: ['./facility-create.component.css']
})
export class FacilityCreateComponent implements OnInit {
  rfCreate: FormGroup;
  rentTyps: RentType[];

  constructor(private facilityService: FacilityService,
              private rentTypeService: RentTypeService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.rentTypeService.findAll().subscribe(next => {
      this.rentTyps = next;
    });
    this.rfCreate = new FormGroup({
      id: new FormControl('', [Validators.required, Validators.pattern(/^DV-\d{4}$/)]),
      name: new FormControl('', [Validators.required]),
      area: new FormControl('', [Validators.required, this.checkNumber]),
      floor: new FormControl('', [Validators.required, this.checkNumber]),
      maxPeople: new FormControl('', [Validators.required, this.checkNumber]),
      cost: new FormControl('', [Validators.required, this.checkNumber]),
      rentType: new FormControl('', [Validators.required]),
      status: new FormControl('', [Validators.required])
    });
  }

  checkNumber(control: AbstractControl) {
    const salary = control.value;
    if (salary < 0) {
      return {numberError: true};
    }
    return null;
  }

  save() {
    this.facilityService.save(this.rfCreate.value).subscribe(next => {
      this.router.navigateByUrl('/facility');
      alert('Thêm Thành Công');
    });
  }
}
