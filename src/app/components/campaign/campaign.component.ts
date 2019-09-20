import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-campaign',
  templateUrl: './campaign.component.html',
  styleUrls: ['./campaign.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class CampaignComponent implements OnInit {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['DATE', 'CAMPAIGN', 'VIEW', 'ACTIONS'];
  expandedElement: Campaign | null;

  constructor() { }

  ngOnInit() {
  }

}
export interface Campaign {
  dateCampaign: Date;
  name: string;
}

const ELEMENT_DATA: Campaign[] = [
  {
    dateCampaign: new Date('2017-05-01'),
    name: "Test Whatsapp"
  },
  {
    dateCampaign: new Date('2017-05-01'),
    name: "Test Whatsapp"
  }
];

