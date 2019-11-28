import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service'
import { HttpClient } from '@angular/common/http'


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {

  pList		
  cDate	
  constructor(private obj:MyserviceService,private http:HttpClient) { }

  ngOnInit() {
  	this.cDate=this.obj.currentDate()
  	
  	this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe((data)=>this.showData(data))
  }
  
  showData(d)
  {
  	this.pList=d
  }

}
