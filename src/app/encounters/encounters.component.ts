import { Component, OnInit } from '@angular/core';
import { Encounter } from '../models';
import { Router } from '@angular/router';
import { ENCOUNTERS_URL } from '../models/API';

import { EncountersAPIService } from '../apiService/encounters';

import { FormGroup,
         FormControl,
         FormBuilder,
         Validators,
         ValidatorFn,
         AbstractControl
        } from '@angular/forms';

@Component({
  selector: 'app-encounters',
  templateUrl: 'encounters.component.html',
  styleUrls: ['encounters.component.scss'],
  providers: [EncountersAPIService]
})
export class EncountersComponent implements OnInit {

  encounterList: Encounter[];
  clickedButton: boolean;

  constructor(private encountersAPIService: EncountersAPIService) { 

    this.getEncounters();

    this.clickedButton = false;

    }
  

  ngOnInit() {
  }

  getEncounters() {
    this.encountersAPIService.getEncounters()
                             .subscribe((result) => {
                               this.encounterList = result;
                             });
  }

}
