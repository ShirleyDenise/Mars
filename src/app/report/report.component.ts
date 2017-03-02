import { Component, OnInit } from '@angular/core';
import { Alien, NewEncounter } from '../models';
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
  styleUrls: ['report.component.scss']
})
export class ReportComponent implements OnInit {

  marsAliens: Alien[];
  encounter: NewEncounter;
  reportForm: FormGroup;

  constructor() { 

    this.marsAliens = [
      { type: 'Special K', submitted_by: '1', id: '1', description: 'Special.' },
      { type: 'Endomorph', submitted_by: '1', id: '2', description: 'Slimy, and gross.' },
      { type: 'Endomorph', submitted_by: '1', id: '3', description: 'End-to-end freakyness.' },
      { type: 'Octospider', submitted_by: '1', id: '4', description: 'Rendevous with Rama.' },
      { type: 'The Predator', submitted_by: '1', id: '5', description: 'Yeah, hes here. Call Arnold.' },
      { type: 'Darth Vader', submitted_by: '1', id: '6', description: 'Got daddy issues.' },
      { type: 'Donald Trump', submitted_by: '1', id: '7', description: 'Douche' },
      { type: 'Yoda', submitted_by: '1', id: '8', description: 'Do or do not do; there is not try.' },
      
      ];

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

}
