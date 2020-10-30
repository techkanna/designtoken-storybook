import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() { }

  getTodos(){
    return [
      {
        id:1,
        title:'todo one',
        completed:false,
      },
      {
        id:2,
        title:'todo two',
        completed:true,
      },
      {
        id:3,
        title:'todo three',
        completed:false,
      }
    ];
  }
}
