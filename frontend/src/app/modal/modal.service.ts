import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Class } from '../class-list/class';

@Injectable({
    providedIn: 'root'
})
export class ModalService {

    classUrl: string;
    teamUrl: string;
    contentUrl: string;
    roomsUrl: string;

    constructor(private http: HttpClient) {
        this.classUrl = "http://ec2-3-15-145-30.us-east-2.compute.amazonaws.com:3000/api/v1";
        this.teamUrl = "http://ec2-34-238-241-74.compute-1.amazonaws.com:3000";
        this.contentUrl = "http://18.223.190.133:3333";
        this.roomsUrl = "http://ec2-3-23-106-145.us-east-2.compute.amazonaws.com:3001";
    }
    
    updateClass(form: object, id: string): Observable<Class[]> {
        return this.http.patch<Class[]>(`${this.classUrl}/classes/${id}`, form);
    }

    createClass(form: object): Observable<Class[]> {
        return this.http.post<Class[]>(`${this.classUrl}/classes`, form);

    }

    getAllRooms() {
        return this.http.get(`${this.roomsUrl}/room`)
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

