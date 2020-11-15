import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bindingdemo',
  templateUrl: './bindingdemo.component.html',
  styleUrls: ['./bindingdemo.component.css']
})
export class BindingdemoComponent implements OnInit {

  public name: String ='hmm..';
  public contact: any ={name:'aaa',phone:'1111',email:'a@a.com', imageUrl:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/SNice.svg/1200px-SNice.svg.png'};
  public isDisabled:boolean =false;
  public buttonclass='btn-bg';
  public ctname:String ='test';
  constructor() { }

  ngOnInit() {
  }

  changeName(name1){
    this.ctname=name1;
  }
  addContact1(name){
    console.log('works')
    console.dir(name)
    this.buttonclass='btn-bg-clicked'
  }
  addContact(name){
    console.log('works')
    console.dir(name)
    this.buttonclass='btn-bg-clicked'
  }

}
