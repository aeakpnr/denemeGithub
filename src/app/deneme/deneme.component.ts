import { Component, Input, NgModule, OnInit } from '@angular/core';
import { DenemeClass } from '../deneme-class';

@Component({
  selector: 'app-deneme',
  templateUrl: './deneme.component.html',
  styleUrls: ['./deneme.component.css']
})
export class DenemeComponent implements OnInit {
  name!:string
  public denemeArray:DenemeClass[]=[];

input: any;
setValue(names:string){

  this.denemeArray.push({baslik: names,icerik: "dsfgsfdgsdfg",kategori:"diğer",tarih:"29.06.1996"})
  console.log(this.denemeArray)
  this.name='';
}

  constructor() { }

  ngOnInit(): void {
  }

}
