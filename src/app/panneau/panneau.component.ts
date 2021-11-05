import { Component, OnInit } from '@angular/core';
import { Panneau } from '../panneau';

@Component({
  selector: 'app-panneau',
  templateUrl: './panneau.component.html',
  styleUrls: ['./panneau.component.css']
})
export class PanneauComponent implements OnInit {

  panneau: Panneau = {
    name: 'nom',
    size: 14,
    font:'Arial, Helvetica, sans-serif',
    align:'left',
  };

  constructor() { }

  ngOnInit(): void {
  }

  setSize(): number {
    return this.panneau.size;
  }

  setAlign(): string {
    return this.panneau.align;
  }

  setFont(): string {
    return this.panneau.font;
  }

}
