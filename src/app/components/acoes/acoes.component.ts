import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AcoesService } from 'src/app/services/acoes.service';

@Component({
  selector: 'app-acoes',
  templateUrl: './acoes.component.html',
  styleUrls: ['./acoes.component.scss']
})
export class AcoesComponent implements OnInit {

  margin = false;
  acoes;
  
  constructor(
    private acoesService: AcoesService
  ) { }

  ngOnInit() {
    this.acoesService.getAll().subscribe(res=>{
      this.acoes = res
    })
  }

}
