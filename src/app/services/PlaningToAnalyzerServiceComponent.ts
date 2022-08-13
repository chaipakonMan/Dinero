import { Injectable } from '@angular/core';
import { Category } from '../models/Category';

@Injectable()
export class PlaningToAnalyzerServiceComponent {

    private optionsWithBudgetAmount: Category[];

    constructor() {
        this.optionsWithBudgetAmount = [];
    }

    setBudgets(selectedOptionsAndAmounts: Category[]) {
        this.optionsWithBudgetAmount = selectedOptionsAndAmounts;
    }

    getBudgets() {
        return this.optionsWithBudgetAmount;
    }

}
