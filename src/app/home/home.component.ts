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
      description: 'Lorem ipsum dolor.'
    },{
      id: 2,
      title: 'Segundo Logro',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum lacus sed sapien tincidunt ultricies. Nam ac enim velit. Vivamus vitae lectus vitae ante condimentum molestie. Fusce placerat libero vel libero gravida facilisis. Curabitur eu est erat. Ut at nibh vel mi mollis scelerisque.'
    },{
      id: 2,
      title: 'Tercer Logro',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum lacus sed sapien tincidunt ultricies. Nam ac enim velit. Vivamus vitae lectus vitae ante condimentum molestie. Fusce placerat libero vel libero gravida facilisis. Curabitur eu est erat. Ut at nibh vel mi mollis scelerisque.'
    }];
  }
}

interface ILogro {
  id: number;
  title: string;
  description?: string;
}
