import { Component,OnInit } from '@angular/core';
import {EventApiService} from '../../../registration/services/event-api.service';
import {Events} from '../../../registration/model/events.entity';
import {EventSummaryComponent} from '../../../registration/components/event-summary/event-summary.component';
import {EventGridComponent} from '../../../registration/components/event-grid/event-grid.component';
import {ToolbarComponent} from '../../components/toolbar/toolbar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ToolbarComponent,EventGridComponent,EventSummaryComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  registeredEvents: Events[] = [];

  constructor(private eventApi: EventApiService) {}

  ngOnInit(): void {
    this.eventApi.getAll().subscribe(
      {
        next: (data: any) => {
          this.registeredEvents = data;
        },
        error:(err: any) => {
          console.error('error fetching events',err);
        }
      });
  }
}
