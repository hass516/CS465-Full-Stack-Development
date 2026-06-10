import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data';
import { TripCard } from '../trip-card/trip-card';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  providers: [TripDataService],
  templateUrl: './trip-listing.html',
  styleUrl: './trip-listing.css'
})
export class TripListing implements OnInit {
  trips: Trip[] = [];
  message: string = 'Loading trips...';

  constructor(
    private tripDataService: TripDataService,
    private cdr: ChangeDetectorRef,
    private router: Router,
    private authenticationService: Authentication
  ) {
    console.log('trip-listing constructor');
    }

  private getStuff(): void {
    this.tripDataService.getTrips()
      .subscribe({
        next: (value: Trip[]) => {
          console.log('Trips returned from API:', value);

          this.trips = value;

          if (value.length > 0) {
            this.message = 'There are ' + value.length + ' trips available.';
          } else {
            this.message = 'There were no trips retrieved from the database';
          }

          console.log(this.message);
          this.cdr.detectChanges();
        },
        error: (error: any) => {
          console.error('Error retrieving trips:', error);
          this.trips = [];
          this.message = 'Unable to load trips. Make sure the API server is running at http://localhost:3000.';
        }
      });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }

  public addTrip(): void {
    this.router.navigate(['add-trip']);
  }
  public isLoggedIn(): boolean {
  return this.authenticationService.isLoggedIn();
  }
}
