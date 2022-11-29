import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attri',
  templateUrl: './attri.component.html',
  styleUrls: ['./attri.component.css']
})

export class AttriComponent implements OnInit {

password:string="";
cnfrmPassword:string="";
msg:string= "";
isPassMatched(){
  console.log(this.cnfrmPassword);
  console.log(this.password);
  
  
  if (this.password==this.cnfrmPassword) {
    this.msg='Password matched';
  } else {
    this.msg='Password missmatch';
  }
}

colorVal = 'yellow';
people:any[]=[
  {
    "name":"Jack",
    "country": "UK"
  },
  {
    "name":"Sumit",
    "country": "USA"
  },
  {
    "name":"Anup",
    "country": "HK"
  },
  {
    "name":"CodeMind",
    "country": "UK"
  },
  {
    "name":"Surya",
    "country": "USA"
  }
];
textInput:string = "";
getInputValue(value){
  this.textInput=value;
}
  constructor() { }

  ngOnInit() {
  }

}
