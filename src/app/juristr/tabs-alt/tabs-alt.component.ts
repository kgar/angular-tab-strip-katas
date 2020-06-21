import { Component, OnInit, ContentChildren, QueryList, AfterContentInit } from '@angular/core';
import { TabAltComponent } from '../tab-alt/tab-alt.component';

@Component({
  selector: 'tabs-alt',
  templateUrl: './tabs-alt.component.html',
  styleUrls: ['./tabs-alt.component.scss']
})
export class TabsAltComponent implements OnInit, AfterContentInit {

  @ContentChildren(TabAltComponent) tabs: QueryList<TabAltComponent>;

  constructor() { }

  ngOnInit(): void {
  }

  selectTab(tab: TabAltComponent) {
    this.tabs.toArray().forEach(t => t.active = false);

    tab.active = true;
  }

  ngAfterContentInit(): void {
    let activeTabs = this.tabs.toArray().filter(t => t.active);

    if (activeTabs.length > 0) return;

    this.tabs.first.active = true;
  }
}
