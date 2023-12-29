import { Component, signal } from '@angular/core';
import { IKnowledge } from '../../interface/IKnowledge.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.scss'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowledge[]>([

    {
      src: 'assets/icons/html5.svg',
      alt: 'Ícone de conhecimentos de html5',
    },    {
      src: 'assets/icons/css3.svg',
      alt: 'Ícone de conhecimentos de css3',
    },    {
      src: 'assets/icons/angular.svg',
      alt: 'Ícone de conhecimentos de angular',
    },    {
      src: 'assets/icons/javascript.svg',
      alt: 'Ícone de conhecimentos de javascript',
    },    {
      src: 'assets/icons/typescript.svg',
      alt: 'Ícone de conhecimentos de typescript',
    },
    {
      src: 'assets/icons/nodejs.svg',
      alt: 'Ícone de conhecimentos de nodejs',
    },
    {
      src: 'assets/icons/git-hub.svg',
      alt: 'Ícone de conhecimentos de git-hub',
    },

  ]);


}
