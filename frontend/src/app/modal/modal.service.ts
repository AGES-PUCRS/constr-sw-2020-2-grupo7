import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../class-list/class';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    classUrl: string;
    teamUrl: string;
    contentUrl: string;

    constructor(private http: HttpClient) {
        this.classUrl = "http://ec2-18-218-177-125.us-east-2.compute.amazonaws.com:3000/api/v1";
        this.teamUrl = "http://ec2-34-238-114-89.compute-1.amazonaws.com:3000";
        this.contentUrl = "http://3.21.130.129:5000"; 
    }
    
    updateClass(form: object, id: string): Observable<Class[]> {
        return this.http.patch<Class[]>(`${this.classUrl}/classes/${id}`, form);
    }

    createClass(form: object): Observable<Class[]> {
        return this.http.post<Class[]>(`${this.classUrl}/classes`, form);
    }

    getAllRooms() {
        return this.http.get(`${this.classUrl}/classes/rooms`)
    }

    getAllEvaluations() {
        return this.http.get(`${this.classUrl}/classes/evaluations`)
    }

    getAllTeams() {
        return this.http.get(`${this.teamUrl}/turma`)
    }
    
    getAllContents() {
        return this.http.get(`${this.contentUrl}/content`)
    }


}

