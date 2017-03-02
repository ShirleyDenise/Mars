export interface Job {
    name: string;
    id: string;
    description: string;
}

export class NewColonist {
    name: string;
    age: string;
    job_id: string;
    constructor(name: string, age: string, job_id: string) {
        this.name = name;
        this.age = age;
        this.job_id = job_id;

    }
}

export class NewEncounter {
    atype: string;
    date: string;
    action: string;
    colonist_id: number;
}

export interface Colonist {
    name: string;
    id: string;
    age: number;
    job: Job;
}

export interface Encounter {
    id: string;
    date: string;
    colonist_id: number;
    atype: string;
    action: string;
}

export interface Alien {
    type: string;
    id: string;
    description: string;
    submitted_by: string;
}