import { Component, inject, signal } from '@angular/core';
import { IProjects } from '../../interface/IProjects.interface';
//material dialog
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
//enum
import { EDialogPanelClass } from '../../enum/EdialogPanelClass.enum';
import { DialogProjectsComponent } from '../../dialog/dialog-projects/dialog-projects.component';
@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

  #dialog = inject(MatDialog);

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


    },
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


    },    {
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


    },    {
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


    },    {
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


    },    {
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


    },
  ])

  public openDialog(data: IProjects){
    this.#dialog.open(DialogProjectsComponent, {
      data,
      panelClass: EDialogPanelClass.PROJECTS
    })
  }

}
