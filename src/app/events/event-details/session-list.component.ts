import { ISession } from '../shared/index';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'session-list',
    templateUrl: 'session-list.component.html'
})

export class SessionListComponent {
    @Input() sessions:ISession[]
    constructor() { }

}