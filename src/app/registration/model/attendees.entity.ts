export class Attendees {
  id: number;
  firstName: string;
  lastName: string;
  eventId: number;
  ticketIdentifier: number;
  checkedInAt: string;

  constructor(attendees: {id?:number , firstName?:string,lastName?: string, eventId?: number,ticketIdentifier?: number, checkedInAt?: string}){
  this.id = attendees.id || 0;
  this.firstName = attendees.firstName || '';
  this.lastName = attendees.lastName || '';
  this.eventId = attendees.eventId || 0;
  this.ticketIdentifier= attendees.ticketIdentifier || 0;
  this.checkedInAt=attendees.checkedInAt || '';
  }
}
