import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  nombre: string = '';
  correo: string = '';
  mensaje: string = '';

  enviarFormulario() {
    // Aquí puedes implementar la lógica para enviar el formulario, por ejemplo, a través de una solicitud HTTP.
    console.log('Formulario enviado');
  }
}
