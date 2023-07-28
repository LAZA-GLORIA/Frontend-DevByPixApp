import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Technologie } from 'src/app/core/models/technologie.model';
import { TechnologiesService } from 'src/app/core/services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css'],
})
export class TechnologiesComponent implements OnInit {
  tabTech?: Technologie[];
  oneNewTechnologie = new Technologie();
  technologieForm!: FormGroup;

  constructor(
    private technologieService: TechnologiesService,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.tabTech = this.technologieService.listeTechnologies();
    this.oneNewTechnologie = this.technologieService.consulterTechnologie(this.activatedRoute.snapshot.params['id'])
    console.log("this.oneNewTechnologie : ", this.oneNewTechnologie);
    this.initForm();
  }

  private initForm(): void {
    this.technologieForm = this.fb.group({
      titreTechnologie: ['', Validators.required],
      nomTechnologie: ['', Validators.required],
      description: ['', Validators.required],
      // Autres contrôles de formulaire souhaités...
    });
  }

  onSubmit(): void {
    if (this.technologieForm.valid) {
      // Récupérer les valeurs du formulaire et ajouter la nouvelle technologie
      const newTechnologie = this.technologieForm.value as Technologie;
      this.tabTech?.push(newTechnologie);
      this.technologieForm.reset();
    }
  }

  addNewTechnologie() {
    this.technologieService.ajouterUneTechnologie(this.oneNewTechnologie);
  }

  deleteOneTechnologie(tech: Technologie) {
    let conf = confirm('Etes-vous sûr ?');
    if (conf) this.technologieService.supprimerUneTechnologie(tech);
    console.table(this.technologieService.listeTechnologies());
  }
}
