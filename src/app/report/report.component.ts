import { Component, OnInit } from '@angular/core';
import { Alien, NewEncounter } from '../models';
import { ALIENS_URL } from '../models/API';

import { AlienAPIService } from '../apiService/aliens';

import { FormGroup,
         FormControl,
         FormBuilder,
         Validators,
         ValidatorFn,
         AbstractControl
        } from '@angular/forms';

@Component({
  selector: 'app-report',
  templateUrl: 'report.component.html',
  styleUrls: ['report.component.scss'],
  providers: [AlienAPIService]
})
export class ReportComponent implements OnInit {

  marsAliens: Alien[];
  encounter: NewEncounter;
  reportForm: FormGroup;

  constructor(private alienAPIService: AlienAPIService) { 

      this.getAliens();

      this.reportForm = new FormGroup({
      action: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      type: new FormControl('', [Validators.required]),
    });

  }

  logAlien() {

    console.log(this.reportForm);
  }

  ngOnInit() {
  }

  getAliens() {
    this.alienAPIService.getAliens()
                       .subscribe((result) => {
                        this.marsAliens = result;
                       });
    
  }

}
