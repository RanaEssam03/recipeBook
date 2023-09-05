import { Component, OnInit } from "@angular/core";

@Component ({
  selector: "view",
  templateUrl: "./view.component.html",
  styleUrls: ["./view.component.css"]
})


export class  ViewComponent implements OnInit{
  ngOnInit(): void {
    this.items = JSON.parse(localStorage.getItem('items')!)
  }
  hide: boolean = false;
  items!: [];

  onAddItem(items: []){
    this.items = items;
  }

  showForm(){
   this.hide = ! this.hide;
 }

}
