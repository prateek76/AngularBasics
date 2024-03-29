import { IEvent } from './shared/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'event-thumbnail',
    template: `
    <div [routerLink]="['/events', event.id]" class="well">
        <h2>{{event?.name}}</h2>
        <div>Date: {{event?.date}}</div>
        <div [ngSwitch]="event?.time"> 
            Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <div>Price: \${{event?.price}}</div>
        <div *ngIf="event?.location">
            <span>Location: {{event?.location?.address}}</span>
            <span class="pad-left">{{event?.location?.city}}, {{event?.location?.country}}</span>
        </div>
    </div>
    `,
    styles: [`
        .pad-left {margin-left: 10px;}
        .well {color: #222}
        `
    ]
})

export class EventThumbnailComponent{
    @Input() event:IEvent

    /*someProperty:any = "some value"

    logfoo() {
        console.log("fooChk");
    }*/
}