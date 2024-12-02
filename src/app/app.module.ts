import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Importa el enrutador principal
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes'; // Importa las rutas principales

@NgModule({
  declarations: [
    AppComponent, // Declara el componente raíz
  ],
  imports: [
    BrowserModule, // Módulo esencial para aplicaciones web
    RouterModule.forRoot(appRoutes), // Configura el enrutamiento principal
  ],
  providers: [],
  bootstrap: [AppComponent], // Componente raíz para arrancar la app
})
export class AppModule {}
