import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.scss']
})
export class ColorsComponent implements OnInit {

  cores: any[] = [
    {cor: '#006052', class: 'primary'},
    {cor: '#078472', class: 'primary-l'},
    {cor: '#e28935', class: 'secondary'},
    {cor: '#f5d372', class: 'secondary-l'},
    {cor: '#49a8e9', class: 'info'},
    {cor: '#e74054', class: 'danger'},
    {cor: '#7e7e7e', class: 'neutro'},
  ]
  
  constructor() { }

  ngOnInit() {
  }

}
