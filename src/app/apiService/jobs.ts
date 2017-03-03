import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Jobs } from '../models';
import { JOBS_URL } from '../models/API';

@Injectable()
export class JobsAPIService {

    constructor(private http: Http) {}

    fetchJobs(): Observable<Job[]> {
        const headers = new Headers();
        headers.append('Content-Type', 'application/json');
        // return this.http.post(JOBS_URL, { headers })
        //             .map((res: Response) => res.json().encounter);
    }
}