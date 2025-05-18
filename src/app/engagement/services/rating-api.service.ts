import { Injectable } from '@angular/core';
import {BaseService} from "../../shared/services/base.service"
import {Ratings} from "../model/ratings.entity"
import {environment} from '../../../environments/environment'


const  ratingsResourceEndpointPath = environment.ratingsEndpointPath;
@Injectable({
  providedIn: 'root'
})
export class RatingApiService extends BaseService<Ratings> {
  constructor() {
    super();
    this.resourceEndpoint = ratingsResourceEndpointPath;
  }
}

