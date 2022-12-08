import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-simple-templateform',
  templateUrl: './simple-templateform.component.html',
  styleUrls: ['./simple-templateform.component.css']
})
export class SimpleTemplateformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  OnSubmit(form:NgForm){
    console.log(form);
    console.log(form.value);
    
  }
}
