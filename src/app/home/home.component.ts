import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  logros: ILogro[];
  title: string = 'Bienvenido';

  constructor() { }

  ngOnInit() {
    this.logros = this.getLogros();
  }

  getLogros(): ILogro[] {
    return [{
      id: 1,
      title: 'Primer Logro',
      description: 'Description Primer Logro'
    },{
      id: 2,
      title: 'Segundo Logro',
      description: 'Description Segundo Logro'
    },{
      id: 2,
      title: 'Tercer Logro',
      description: 'Description Tercer Logro'
    }];
  }
}

interface ILogro {
  id: number;
  title: string;
  description?: string;
}
