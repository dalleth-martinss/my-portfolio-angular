import { Component, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  public arrayProjects = signal<IProjects[]>([
    {
      src: 'assets/img/channel.png',
      alt: "Vida de Front End",
      title: 'Front-End ',
      height: '51px',
      width: '51px',
      description: ' ',
      links: [
        {
          name: 'Conheça meu linkedIn',
          href: 'https://www.linkedin.com/in/dalleth-martins/'
        }
      ]


    }
  ])

}
