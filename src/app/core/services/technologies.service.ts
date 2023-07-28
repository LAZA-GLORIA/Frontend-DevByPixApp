import { Injectable } from '@angular/core';
import { Technologie } from '../models/technologie.model';

@Injectable({
  providedIn: 'root',
})
export class TechnologiesService {
  technologies: Technologie[]; //un tableau de Technologies
  oneTech?: Technologie;
 
  constructor() {
    this.technologies = [
      {
        idTechnologie: 1,
        titreTechnologie: 'Apprenez le POO avec Java',
        nomTechnologie: 'Java',
        typeTechnologie: 'Langage de programmation',
        categorieTechnologie: 'POO',
        horodatageCreation: new Date('01/14/2011'),
      },
      {
        idTechnologie: 2,
        titreTechnologie: 'Le Machine Learning avec Python',
        nomTechnologie: 'Python',
        typeTechnologie: 'Langage de programmation',
        categorieTechnologie: 'POO',
        horodatageCreation: new Date('12/17/2010'),
      },
      {
        idTechnologie: 3,
        titreTechnologie: 'Dynamisez vos sites web avec JavaScript',
        nomTechnologie: 'JS',
        typeTechnologie: 'Langage de programmation',
        categorieTechnologie: 'Programmation procedurale',
        horodatageCreation: new Date('02/20/2020'),
      },
      {
        idTechnologie: 4,
        titreTechnologie: 'Le Backend avec SpringBoot',
        nomTechnologie: 'Spring Boot',
        typeTechnologie: 'Framework Java',
        categorieTechnologie: 'Front-end',
        horodatageCreation: new Date('02/20/2020'),
      },
    ];
  }

  listeTechnologies(): Technologie[] {
    return this.technologies;
  }

  ajouterUneTechnologie(tech : Technologie) {
    this.technologies.push(tech);
  }

  supprimerUneTechnologie(tech : Technologie){
    //supprimer l'objet tech du tableau technologies
    const index = this.technologies.indexOf(tech, 0);
    if (index > -1) {
    this.technologies.splice(index, 1);
    }
    //ou Bien
    /* this.produits.forEach((cur, index) => {
    if(prod.idProduit === cur.idProduit) {
    this.produits.splice(index, 1);
    }
    }); */
    }

    consulterTechnologie(id:number): Technologie {
      this.oneTech = this.technologies.find(p => p.idTechnologie == id)!;
      return this.oneTech;
      }
    
}
