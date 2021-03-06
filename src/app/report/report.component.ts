import { Component, OnInit } from '@angular/core';
import { Alien, NewEncounter } from '../models';
import { Router } from '@angular/router';
import { ALIENS_URL, ENCOUNTERS_URL } from '../models/API';

import { AliensAPIService } from '../apiService/aliens';
import { EncountersAPIService } from '../apiService/encounters';

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
  providers: [AliensAPIService, EncountersAPIService]
})
export class ReportComponent implements OnInit {

  marsAliens: Alien[];
  encounter: NewEncounter;
  reportForm: FormGroup;

  constructor(private aliensAPIService: AliensAPIService,
              private encountersAPIService: EncountersAPIService) { 

      this.getAliens();

      this.reportForm = new FormGroup({
      action: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      type: new FormControl('', [Validators.required]),
    });

  }

  // logAlien() {

  //   console.log(this.reportForm);
  // }

  ngOnInit() {
  }

  getAliens() {
    this.aliensAPIService.getAliens()
                       .subscribe((result) => {
                        this.marsAliens = result;
                       });
    
  }

  postNewEncounter() {
    event.preventDefault();
    if(!this.reportForm.invalid) {
      //the form is invalid..
    }else {
      const atype = this.reportForm.get('atype').value;
      const date = this.reportForm.get('date').value;
      const action = this.reportForm.get('action').value;
      const colonist_id = this.reportForm.get('colonist_id').value;

      const newEncounter = new NewEncounter(atype, date, action, colonist_id);
      const encounterPostRequest = { encounter: newEncounter };
      this.encountersAPIService.saveNewEncounter(encounterPostRequest)
                             .subscribe((result) => {
                               console.log('Encounter was saved:', result);
                             });
    }
  }
}
