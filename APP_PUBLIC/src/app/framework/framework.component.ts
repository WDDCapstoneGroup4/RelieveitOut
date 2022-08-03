import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-framework',
  templateUrl: './framework.component.html',
  styleUrls: ['./framework.component.css']
})
export class FrameworkComponent implements OnInit {
  isloggedIn = false;
  constructor() { 
    console.log("checks");
    
  }

  ngOnInit(): void {
  this.isloggedIn = JSON.parse(localStorage.getItem("isloggedIn"));

  }

}
