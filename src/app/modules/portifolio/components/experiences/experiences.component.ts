import { Component, signal } from '@angular/core';
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary:{
        strong:'Assistente Contábil',
        p: 'Contabilidade e Consultoria | Junho 2022 - Presente'
       },
       text:'<p>Faço toda a parte de contábil das empresas de minha responsabilidade. </p>'
    }
  ])

}
