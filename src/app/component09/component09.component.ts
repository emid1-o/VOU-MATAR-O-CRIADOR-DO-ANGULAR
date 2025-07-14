import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-component09',
  imports: [FormsModule],
  templateUrl: './component09.component.html',
  styleUrl: './component09.component.scss'
})
export class Component09Component {

  nome!:string;

  cidade!: string;

}
