import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../class-list/class';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    url: string;

    constructor(private http: HttpClient) {
        this.url = "http://ec2-18-218-177-125.us-east-2.compute.amazonaws.com:3000/api/v1";
    }

    updateClass(form: object, id: string): Observable<Class[]> {
        return this.http.patch<Class[]>(`${this.url}/classes/${id}`, form);
    }

    // createClass(form: object): Observable<Class[]> {
    //     return this.http.post<Class[]>(`${this.url}/classes`, {

    //     });
    // }


}

