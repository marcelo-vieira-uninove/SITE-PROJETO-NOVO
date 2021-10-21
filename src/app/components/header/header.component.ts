import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
 //referencia o menu como API no menu component
  menu = [
    {
      label:"O FILME",
      routerLink:""
    },
    {
      label:"ONDE ASSISTIR",
      link:""
    },
    {
      label:"FAÇA PARTE",
      link:""
    },
    {
      label:"REDE DE IMPACTO",
      link:""
    },
    {
      label:"CONTATO",
      link:""
    },
  ]
  ngOnInit(): void {
  }
  
}
