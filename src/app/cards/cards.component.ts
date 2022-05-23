import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css'],
})
export class CardsComponent implements OnInit {
  recipeArr: any[] = [
    {
      id: 1,
      title: 'BurgerExtrem',
    },
    {
      id: 2,
      title: 'DönerMöner',
    },
    {
      id: 3,
      title: 'BestKnödel',
    },
    {
      id: 4,
      title: 'EatThisSchnitzel',
    },
    {
      id: 5,
      title: 'Fooddly',
    },
    {
      id: 6,
      title: 'Suppex',
    },
    {
      id: 7,
      title: 'LasagnaCrazy',
    },
  ];
  trackByData(index: number, studentArr: any): number {
    return studentArr.id;
  }

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  onCardClick() {
    console.log('funktioniert');
    (<any>this.route).navigate(['/recipe'], { queryParams: { id: '1' } });
  }
}
