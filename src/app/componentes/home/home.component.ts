import { LivroService } from 'src/app/servicos/livro.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  livros:any

  constructor(private service:LivroService) {}

  ngOnInit(): void {
    this.busca()
    this.listarLivros()
  }

  
  busca(){
    return `https://lojasaraiva.vteximg.com.br/arquivos/ids/12104802/1009575881.jpg?v=637142231559930000`
  }

  listarLivros(){
    this.service.listar().subscribe(resultado=>{
      this.livros = resultado
    })
  }
  
}
