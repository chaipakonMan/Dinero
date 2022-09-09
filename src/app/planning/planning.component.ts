import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Category } from '../models/Category';
import { PlaningToAnalyzerServiceComponent } from '../services/PlaningToAnalyzerServiceComponent';

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {
  budgetTitle: String = "";
  flag: boolean = false;
  expensesCategories: string[] = ['Bills&Util', 'Foods&Drinks', 'Grocery', 'Personal', 'Gas', 'Shopping', 'Enterainment', 'Travel'];
  selectedOptions = [];
  budgetAmount:number = 0;

  SelectedOptionsWithBudgetAmount: Category[] = [];

  currentPercent:number = 0;

  constructor(private router: Router, private planingToAnalyzerServiceComponent: PlaningToAnalyzerServiceComponent) { }

  ngOnInit(): void {
  }

  next() {
    for(var val of this.selectedOptions){
      const temp: Category = {
        title: val,
        budgetAmount: 0,
        expense: 0
      }
      this.SelectedOptionsWithBudgetAmount.push(temp)
    }
    this.flag = true;
  }

  submit() {
    console.log(this.selectedOptions)
    console.log(this.budgetAmount)
    console.log(this.currentPercent)
    console.log(this.SelectedOptionsWithBudgetAmount)
    console.log(this.budgetTitle)
    this.planingToAnalyzerServiceComponent.setBudgets(this.SelectedOptionsWithBudgetAmount);
    this.planingToAnalyzerServiceComponent.setTotalBudgetAmount(this.budgetAmount);
    this.planingToAnalyzerServiceComponent.setBudgetName(this.budgetTitle);
    this.router.navigateByUrl('/analyzer');
  }
  
}
