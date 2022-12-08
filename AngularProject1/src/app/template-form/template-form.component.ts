import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent implements OnInit {
fName: string="";
mName: string="";
lName: string="";
  constructor() { }
  getfName(value){
    this.fName=value.target.value;
  }
  getmName(value){
    this.mName=value.target.value;
  }
  getlName(value){
    this.lName=value.target.value;
  }
  OnSubmit(form:NgForm){
    console.log(form);
    console.log(form.value);
    
  }
  ngOnInit() {
  }

}
