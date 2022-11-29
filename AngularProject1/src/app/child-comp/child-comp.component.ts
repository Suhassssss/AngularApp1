import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-comp',
  templateUrl: './child-comp.component.html',
  styleUrls: ['./child-comp.component.css']
})
export class ChildCompComponent implements OnInit {

  
  @Input() siblings: [];
  @Input() emp1: [];



  constructor() { }

  ngOnInit() {
    console.log("Array of objects of class Employee are passed from parent to child component:");
    
    console.table(this.emp1);
  }

}
