import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
  showNav: boolean;
  contentClass: string;
  constructor() {
    this.showNav = true;
  }

  ngOnInit(): void {
  }

  navToggle() {
    this.showNav = !this.showNav;
    this.contentClass = this.showNav ? 'col-10' : 'col-12';
  }
}
