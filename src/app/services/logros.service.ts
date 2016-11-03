import { Injectable } from '@angular/core';
import { ILogro } from '../home/home.component';

@Injectable()
export class LogrosService {

  constructor() { }

  all(): ILogro[] {
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
