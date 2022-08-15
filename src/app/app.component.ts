import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  filter:'all'|'active'|'done'='all';

  allItems=[
    {description:'eat', done:true},
    {description:'sleep', done:false},
    {description:'play', done:false},
    {description:'laugh', done:false},
  ];

  //篩選 allItems 陣列中符合 filter 條件的元素，放入 items 陣列
  get items(){
    if(this.filter==='all'){
      return this.allItems;
    }
    return this.allItems.filter(item=>this.filter==='done'?item.done:!item.done);
  }

  //新增項目到 allItems 陣列
  addItem(description: string){
    this.allItems.unshift({
      description,
      done:false
    });
  }

  remove(item: { description: string; done: boolean; }){
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

}


