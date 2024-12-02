import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { Component1Component } from './component1/component1.component'; // Importa el componente standalone

const routes: Routes = [
  { path: '', component: Component1Component }, // Asigna el componente a la ruta
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes), // Configura el enrutamiento
  ],
})
export class Module1Module {}

