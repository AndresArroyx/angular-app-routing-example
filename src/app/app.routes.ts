import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  { path: 'module1', loadChildren: () => import('./module1/module1.module').then(m => m.Module1Module) },
  { path: 'module2', loadChildren: () => import('./module2/module2.module').then(m => m.Module2Module) },
  { path: 'module3', loadChildren: () => import('./module3/module3.module').then(m => m.Module3Module) },
  { path: '', redirectTo: '/module1', pathMatch: 'full' }, // Redirección inicial
  { path: '**', redirectTo: '/module1' } // Ruta por defecto para páginas no encontradas
];

