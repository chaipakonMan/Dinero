import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  HomeClick() {
    // console.log("Home CLick!")
    this.router.navigateByUrl('/home');
  
  }

  planningClick() {
    // console.log("Planning CLick!")
    this.router.navigateByUrl('/planning');
    
  }

  analyzerClick(){
    this.router.navigateByUrl('/analyzer');
  }

}
