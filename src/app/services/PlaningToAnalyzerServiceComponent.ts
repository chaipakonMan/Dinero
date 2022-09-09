import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable()
export class PlaningToAnalyzerServiceComponent {

    private optionsWithBudgetAmount: Category[];
    private totalBudgetAmount: number;
    private budgetName: String;

    constructor() {
        this.optionsWithBudgetAmount = [];
    }

    setBudgetName(budgetTitle: String){
        this.budgetName = budgetTitle;
    }
    getBudgetName(){
        return this.budgetName;
    }

    setBudgets(selectedOptionsAndAmounts: Category[]) {
        this.optionsWithBudgetAmount = selectedOptionsAndAmounts;
    }
    getBudgets() {
        return this.optionsWithBudgetAmount;
    }

    setTotalBudgetAmount(budgetAmount:number){
        this.totalBudgetAmount = budgetAmount;
    }
    getTotalBudgetAmount(){
        return this.totalBudgetAmount;
    }



}
