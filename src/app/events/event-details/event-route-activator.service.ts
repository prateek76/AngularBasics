import { EventService } from './../shared/event.service';
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, CanActivate } from "@angular/router"

@Injectable()

export class EventRouteActicator implements CanActivate {
    constructor(private eventService:EventService, private router:Router) {

    }

    canActivate(route:ActivatedRouteSnapshot) {
        const eventExists = !!this.eventService.getEvent(+route.params['id'])

        if(!eventExists) {
            this.router.navigate(['/404'])
        }

        return eventExists
    }
}