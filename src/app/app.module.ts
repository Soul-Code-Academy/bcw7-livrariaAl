import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { ListaComponent } from './componentes/lista/lista.component';
import { CadastroComponent } from './componentes/cadastro/cadastro.component';
import { HomeComponent } from './componentes/home/home.component';
import { LivroService } from './servicos/livro.service';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComponent,
    CadastroComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [LivroService],
  bootstrap: [AppComponent]
})
export class AppModule { }
