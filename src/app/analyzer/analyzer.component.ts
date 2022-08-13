import { Component, OnInit } from '@angular/core';
import { Category } from '../models/Category';
import { PlaningToAnalyzerServiceComponent } from '../services/PlaningToAnalyzerServiceComponent';

@Component({
  selector: 'app-analyzer',
  templateUrl: './analyzer.component.html',
  styleUrls: ['./analyzer.component.css']
})
export class AnalyzerComponent implements OnInit {

  OptionsWithBudgetAmount: Category[] = [];

  constructor(private planingToAnalyzerServiceComponent: PlaningToAnalyzerServiceComponent) { }

  ngOnInit(): void {
    console.log("In analyzer ts")
    this.OptionsWithBudgetAmount = this.planingToAnalyzerServiceComponent.getBudgets();
    console.log(this.OptionsWithBudgetAmount)
  }

  check() {
    console.log("Clicked")
  }

}
