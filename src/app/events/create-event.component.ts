import { EventService } from './shared/event.service';
import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    templateUrl: 'create-event.component.html'
})

export class CreateEventComponent {
    
    isDirty:boolean = true;
    newEvent:any
    constructor(private router: Router, private eventService: EventService) { }

    saveEvent(formValues) {
        this.eventService.saveEvent(formValues);
        console.log(formValues);
        this.isDirty = false
        this.router.navigate(['/events'])
    }

    cancel() {
        this.router.navigate(['/events'])
    }
}