import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Jobs } from '../models';
import { JOBS_URL } from '../models/API';

@Injectable()
export class JobsAPIService {

    fetchJobs(): Observable<Job[]> {

    }
}