import { Component, OnInit } from '@angular/core';
import { Girl } from './component1';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }
  //property
  
  hero: Girl = {
    fname:'bivuti',
    age:4
  };

  ngOnInit(): void {
  }

}
