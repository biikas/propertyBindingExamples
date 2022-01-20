import { Component, OnInit } from '@angular/core';

import { Book } from './indisplay';

@Component({
  selector: 'app-indisplay',
  templateUrl: './indisplay.component.html',
  styleUrls: ['./indisplay.component.css']
})
export class IndisplayComponent implements OnInit {
  book1 :Book ={
    id:1,
    bookname:'',
    author:''
  }


  constructor() { }

  ngOnInit(): void {
  }

}
