import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  sibeBarLinks = [
    {
      'title': 'Dashboard',
      'link': 'admin/dashboard'
    },
    {
      'title': 'Products',
      'link': '',
      'child': [
        {
          'title': 'Add Product',
          'link': 'admin/product/add',
        },
        {
          'title': 'Products',
          'link': 'admin/product/list',
        }
      ]
    }
  ];

  showNav: boolean;
  constructor() {
    this.showNav = true;
  }

  ngOnInit(): void {
  }

  navToggle() {
    this.showNav = !this.showNav;
  }

  menuToggle(menu) {
    console.log(menu.target)
    $(menu.target).next().slideToggle();
    if($(menu.target).next().css('display') == 'none') {
      $(menu.target).children('mat-icon').css('transform', 'rotate(-90deg)');
    } else {
      $(menu.target).children('mat-icon').css('transform', 'rotate(0deg)');
    }
  }
}
