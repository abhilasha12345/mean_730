import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor() { }
  
  currentDate()
  {
  	return new Date()
  }
  
}
