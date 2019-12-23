import { CollapsibleWellComponent } from './common/collapsible-well.component';
import { AuthService } from './user/auth.service';
import { Error404Component } from './errors/404.component';
import { TOASTR_TOKEN, Toastr } from './common/toastr.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventDetailsComponent,
  EventRouteActicator,
  CreateEventComponent,
  EventService,
  SessionListComponent
} from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavbarComponent } from './nav/navbar.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';

let toastr:Toastr = window['toastr'];

@NgModule({
  declarations: [
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    NavbarComponent,
    EventDetailsComponent,
    CreateEventComponent,
    Error404Component,
    SessionListComponent,
    CollapsibleWellComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    EventService,
    {
      provide: TOASTR_TOKEN,
      useValue: toastr
    },
    EventRouteActicator,
    {
      provide: 'canDeactivateRoute',
      useValue: checkDirtyState
    },
    AuthService
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule { }

export function checkDirtyState(component: CreateEventComponent) {
  if(component.isDirty)
    return window.confirm('You have not saved this event, do you really want to cancel?')
  return true;
}