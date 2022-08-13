import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

type cat = {
  title: string;
  amount: number;
};

@Component({
  selector: 'app-planning',
  templateUrl: './planning.component.html',
  styleUrls: ['./planning.component.css']
})
export class PlanningComponent implements OnInit {

  flag: boolean = false;
  expensesCategories: string[] = ['Bills&Util', 'Foods&Drinks', 'Grocery', 'Personal', 'Gas', 'Shopping', 'Enterainment', 'Travel'];
  selectedOptions = [];
  budgetAmount:number = 0;

  SelectedOptionsWithBudgetAmount: cat[] = [];

  currentPercent:number = 0;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  next() {
    for(var val of this.selectedOptions){
      const temp: cat = {
        title: val,
        amount: 0
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
    this.router.navigateByUrl('/analyzer');
  }
  
}
