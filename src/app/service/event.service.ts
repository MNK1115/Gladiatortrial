import { Injectable } from '@angular/core';
import{ Event} from 'src/app/Model/event'

@Injectable({
  providedIn: 'root'
})
export class EventService {

  events: Event[] = [
    { id: 1, name: 'Angular', description: 'Angular Event', speaker: 'Himanshu' },
    { id: 2, name: 'React', description: 'React Event', speaker: 'Saurabh' },
    { id: 3, name: 'Java', description: 'Java Event', speaker: 'Meenal' }
];
getEvents() {
  return this.events;
}
deleteevent(e:Event){
 const target=this.events.indexOf(e);
 this.events.splice(target,1)
}
addEvent(eventname:string,description:string,speaker:string){
  let newEvent={id:this.events.length+1,name:eventname,description:description,speaker:speaker};
  return this.events.push(newEvent);
}
  constructor() { }
}
