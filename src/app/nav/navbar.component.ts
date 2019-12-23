import { EventService } from './../events/shared/event.service';
import { ISession } from './../events/shared/event.model';
import { AuthService } from './../user/auth.service';
import { Component } from '@angular/core';

@Component({
    selector: 'nav-bar',
    templateUrl: './navbar.component.html',
    styles: [`
        li > a.active {color: coral}
    `]
})

export class NavbarComponent {
    searchTerm: string = "";
    foundSessions: ISession[];

    constructor(public auth:AuthService, private eventService:EventService) {
        
    }

    searchSessions(searchTerm) {
        this.eventService.searchSessions(searchTerm).subscribe(
            sessions => {
                this.foundSessions = sessions;
                console.log(this.foundSessions)
            }
        )
    }
}