export class Ratings {

  id:number;
  attedeeId:number;
  eventId:number;
  rating:number;
  ratedAt:string;
  constructor(ratings:{id:number, attedeeId:number,eventId:number,rating:number,ratedAt:string}){
    this.id = ratings.id;
    this.attedeeId = ratings.attedeeId;
    this.eventId = ratings.eventId;
    this.rating = ratings.rating;
    this.ratedAt = ratings.ratedAt;

  }
}



