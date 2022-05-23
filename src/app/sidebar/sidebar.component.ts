import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  constructor() {}
  followedCookbooksArr: any[] = [
    {
      id: 1,
      name: 'Cookbook1',
    },
    {
      id: 2,
      name: 'Cookbook2',
    },
    {
      id: 3,
      name: 'Cookbook3',
    },
    {
      id: 4,
      name: 'Cookbook4',
    },
    {
      id: 5,
      name: 'Cookbook5',
    },
    {
      id: 6,
      name: 'Cookbook6',
    },
    {
      id: 7,
      name: 'Cookbook7',
    },
  ];
  trackByData(index: number, followedCookbooksArr: any): number {
    return followedCookbooksArr.id;
  }

  ngOnInit(): void {}
}
