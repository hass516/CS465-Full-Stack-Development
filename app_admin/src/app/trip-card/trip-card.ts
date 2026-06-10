import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Authentication } from '../services/authentication';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrl: './trip-card.css'
})

export class TripCard implements OnInit {

  @Input('trip') trip: any;

  constructor(
    private router: Router,
    private authenticationService: Authentication
  ) {}

  ngOnInit(): void {

  }

  public editTrip(tripCode: string): void {
    localStorage.setItem("tripCode", tripCode);
    this.router.navigate(['edit-trip', tripCode]);
  }

  public isLoggedIn(): boolean {
    return this.authenticationService.isLoggedIn();
  }
}