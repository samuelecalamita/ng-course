import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe("A test Recipe", "this is simply a test", "https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg"),
    new Recipe("A test Recipe", "this is simply a test", "https://cookieandkate.com/images/2019/02/best-shakshuka-recipe-3-768x1154.jpg")
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
