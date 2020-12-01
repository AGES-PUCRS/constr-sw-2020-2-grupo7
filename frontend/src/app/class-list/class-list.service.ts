import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from './class';

@Injectable({
    providedIn: 'root'
})
export class ClassListService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = "http://ec2-3-15-145-30.us-east-2.compute.amazonaws.com:3000/api/v1";
    }

    getClasses(): Observable<Class[]> {
        return this.http.get<Class[]>(`${this.url}/classes`);
    }

    deleteClass(id: string) {
        return this.http.delete(`${this.url}/classes/${id}`)
    }

    getSpecificClass(id: string) {
        return this.http.get(`${this.url}/classes/${id}?expanded=team&expanded=content&expanded=evaluation&expanded=room`)
    }
}
