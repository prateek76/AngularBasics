import { IEvent } from './../shared/event.model';
import { EventService } from './../shared/event.service';
import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .container { padding-left: 20px; padding-right: 20px; }
        .event-image { height: 100px; }
    `]
})

export class EventDetailsComponent {
    constructor(private eventsService: EventService, private route: ActivatedRoute) { //inject in constructor

    }

    filterBy: string = 'all'
    
    event:IEvent

    ngOnInit() {
       const id = this.route.snapshot.params['id'];
       this.event = this.eventsService.getEvent(+id)
    }
}