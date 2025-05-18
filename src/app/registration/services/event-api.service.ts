import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Events} from "../model/events.entity"
import {environment} from '../../../environments/environment'

const  eventsResourceEndpointPath = environment.eventsEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class EventApiService extends BaseService<Events> {

  constructor() {
    super();
    this.resourceEndpoint = eventsResourceEndpointPath
  }
}

