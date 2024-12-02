import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component2Component } from './component2/component2.component'; // Importa el componente standalone

const routes: Routes = [
  { path: '', component: Component2Component }, // Asigna el componente a la ruta
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Configura el enrutamiento
  ],
})
export class Module2Module {}

