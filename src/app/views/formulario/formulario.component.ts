import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/models/users';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  userModel = new Users("", "")

  onSubmit() {
    console.log(this.userModel)
  }

}
