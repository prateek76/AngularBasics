import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    template: `
        <h1>New Event</h1>
        <hr>
        <div class="col-md-6">
            <button class="btn btn-primary">Save</button>
            <button (click)="cancel()" class="btn btn-default">cancel</button>
        </div>
    `
})

export class CreateEventComponent {
    
    isDirty:boolean = true;

    constructor(private router: Router) { }

    cancel() {
        this.router.navigate(['/events'])
    }
}