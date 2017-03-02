import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { FormGroup,
         FormControl,
         FormBuilder,
         Validators,
         ValidatorFn,
         AbstractControl
        } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.scss']
})
export class RegisterComponent implements OnInit {

  newColonist: NewColonist;
  marsJobs: Job[];
  registerForm: FormGroup;

  constructor() { 
    //TODO: Call API, get jobs.
    this.marsJobs = [
      { name: 'Alien Hunter', id: '1', description: 'Hunting Aliens is life.' },
      { name: 'Yoga Teacher', id: '2', description: 'Staying flexible on Mars.' },
      { name: 'Dust Farmer', id: '3', description: 'Somebodys got to do it...' },
      { name: 'Front-End Developer', id: '4', description: 'Making apps on Mars.' },
      ];
    
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      age: new FormControl('', [Validators.required, this.acceptAge(18, 50)]),
      job_id: new FormControl('', [Validators.required]),
    });
  }

  acceptAge(min: number, max: number) {
    return (control: AbstractControl): {[key: string]: any} => {
      if(control.value < 18 || control.value > 50) {
        return { 'Sorry good luck!': {age: control.value}};
      }
    }
  }

  logColonist() {

    console.log(this.registerForm);
  }

  ngOnInit() {

  }

}
