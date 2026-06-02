import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})

export class TripDataService {

  constructor(private http: HttpClient) {}

  getTrips(): Observable<Trip[]> {
    let url = 'http://localhost:3000/api/trips';

    return this.http.get<Trip[]>(url);
  }

  getTrip(tripCode: string) {

  let url = 'http://localhost:3000/api/trips/' + tripCode;

  return this.http.get<Trip>(url);

  }

  addTrip(formData: Trip): Observable<Trip> {
    let url = 'http://localhost:3000/api/trips';

    return this.http.post<Trip>(url, formData);
  }

  updateTrip(formData: Trip): Observable<Trip> {
    let url = 'http://localhost:3000/api/trips/' + formData.code;

    return this.http.put<Trip>(url, formData);
  }
}