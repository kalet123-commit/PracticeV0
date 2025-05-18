import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Attendees} from "../model/attendees.entity"
import {environment} from '../../../environments/environment'

const  attendeesResourceEndpointPath = environment.attendeesEndpointPath;

@Injectable({
  providedIn: 'root'
})
export class AttendeeApiService extends BaseService<Attendees> {

  constructor() {
    super();
    this.resourceEndpoint = attendeesResourceEndpointPath;
  }
}
