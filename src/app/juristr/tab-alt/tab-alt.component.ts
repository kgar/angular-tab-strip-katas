import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'tab-alt',
  templateUrl: './tab-alt.component.html',
  styleUrls: ['./tab-alt.component.scss']
})
export class TabAltComponent implements OnInit {
  @Input() tabTitle: string;
  active = false;

  constructor() { }

  ngOnInit(): void {
  }

}
