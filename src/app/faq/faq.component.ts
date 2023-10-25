import { Component } from '@angular/core';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  preguntaAbierta: number | null = null;

  togglePregunta(index: number) {
    if (this.preguntaAbierta === index) {
      this.preguntaAbierta = null;
    } else {
      this.preguntaAbierta = index;
    }
  }
}
