import { Component, ElementRef, HostListener, Input, OnInit, ViewChild } from "@angular/core";

@Component ({
  selector: "app-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})


export class ListComponent  {

 @Input() itemsList!: [];

  @ViewChild('anotherComponent')
  anotherComponent!: ElementRef;

  getData(){
    this.itemsList = JSON.parse(localStorage.getItem('items')!)

  }

}
