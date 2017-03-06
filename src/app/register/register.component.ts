import { Component, OnInit } from '@angular/core';
import { NewColonist, Job } from '../models';
import { Router } from '@angular/router';
import { JOBS_URL,
         COLONISTS_URL 
       } from '../models/API';

import { ColonistAPIService } from '../apiService/colonist';
import { JobsAPIService } from '../apiService/jobs'

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
  styleUrls: ['register.component.scss'],
  providers: [ColonistAPIService, JobsAPIService]
})
export class RegisterComponent implements OnInit {

  marsJobs: Job[];
  registerForm: FormGroup;
  clickedButton: boolean;

  constructor(private colonistApiService: ColonistAPIService,
              private jobsAPIService: JobsAPIService,
              private router: Router) { 
    
    this.getMarsJobs();

    this.clickedButton = false;

    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      age: new FormControl('', [Validators.required, this.acceptAge(0, 50)]),
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

  acceptJob() {
    return (control: AbstractControl): {[Key: string]: any} => {
      if(control.value == 'none') {
        return {job_id: control.value};
      }
    }
  }

 

  ngOnInit() {

  }

  getMarsJobs() {
    this.jobsAPIService.getMarsJobs()
                       .subscribe((result) => {
                        this.marsJobs = result;
                       });
    
  }

  postNewColonist(event) {
    event.preventDefault();
    this.clickedButton = true;
    if(this.registerForm.invalid) {
      //the form is invalid..
    }else {
      const name = this.registerForm.get('name').value;
      const age = this.registerForm.get('age').value;
      const job_id = this.registerForm.get('job_id').value;

      const newColonist = new NewColonist(name, age, job_id);
      const colonistPostRequest = { colonist: newColonist };

      this.colonistApiService.saveColonist(colonistPostRequest)
                             .subscribe((result) => {
                              //  console.log('Colonist was saved:', result);

            this.router.navigate(['encounters']);
                             });
    }
  }

}
