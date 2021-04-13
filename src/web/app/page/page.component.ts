import { Component, OnInit } from '@angular/core';
import { HowserParentComponent, NavigationService } from '@howser/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'gns-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent extends HowserParentComponent implements OnInit {

  constructor(nav: NavigationService, route: ActivatedRoute) {
    super(nav, route);
    this.__showNavBar();
  }

  ngOnInit() {
  }

}
