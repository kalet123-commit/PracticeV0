export class Events {
  id: number;
  name: string;
  description:string;
  scheduleAt: string;

  constructor(events: {id?: number, name?: string, description?: string, scheduleAt?: string}) {
    this.id = events.id || 0;
    this.name = events.name || '';
    this.description = events.description || '';
    this.scheduleAt = events.scheduleAt|| ''
  }
}
