import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  a=100
  b=200
  res
  c	
  mks=[40,70,30,60,90]
  
  emp_details={'eno':1001001,'enm':'abc','esal':10000.11}
  
  users=[{'eno':1001001,'enm':'abc','esal':10000.11},{'eno':1001002,'enm':'pqr','esal':20000.11},{'eno':1001003,'enm':'xyz','esal':30000.11}]
  
  constructor() { }

  ngOnInit() {
  	this.c=this.a+this.b
  	if(this.a>this.b)
  		this.res=1
  	else
  		this.res=0	
  }

}
