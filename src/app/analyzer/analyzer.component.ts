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
  TotalBudgetAmount:number = 0;
  BudgetTitle:String = "";
  constructor(private planingToAnalyzerServiceComponent: PlaningToAnalyzerServiceComponent) { }
  currentExpenese:number = 0;

  ngOnInit(): void {
    console.log("In analyzer ts")
    this.OptionsWithBudgetAmount = this.planingToAnalyzerServiceComponent.getBudgets();
    this.TotalBudgetAmount = this.planingToAnalyzerServiceComponent.getTotalBudgetAmount();
    this.BudgetTitle = this.planingToAnalyzerServiceComponent.getBudgetName();
    console.log(this.OptionsWithBudgetAmount)
    console.log(this.TotalBudgetAmount)
    console.log(this.BudgetTitle)
  }

  check() {
    console.log("Clicked")
    this.CalCurrentExpenese();
  }

  CalCurrentExpenese(){
    for(var i=0;i<this.OptionsWithBudgetAmount.length;i++){
      console.log(this.OptionsWithBudgetAmount[i].expense);
    }
  }

}
