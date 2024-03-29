import { IEvent } from './shared/event.model';
import { EventService } from './shared/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'events-list',
    template: `
    <div>
        <h1>Upcoming Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5">
                <event-thumbnail [event]="event"></event-thumbnail>  
            </div>
        </div>
    </div>
    `
})

/**
 * --- tempplate variable ---
 * <event-thumbnail #thumbnail /="event1"></event-thumbnail>
        <h3>{{thumbnail.someProperty}}</h3>
        <button (click)="thumbnail.logfoo()">Log</button>
 */

//#thumbnail is the refrence variable //logfoo is the function in the child component //called from parent component

export class EventsListComponent implements OnInit {
  
  events:IEvent[]

  constructor(private eventService: EventService) {

  }
  
  ngOnInit() {
    this.events = this.eventService.getEvents()
  }
}