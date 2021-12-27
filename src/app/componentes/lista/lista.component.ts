import { Livro } from './../../Livro';
import { Component, OnInit } from '@angular/core';
import { LivroService } from 'src/app/servicos/livro.service';
import { FormsModule } from '@angular/forms';
import { Router} from '@angular/router'

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  isModal:boolean = false
 
  idLivroExcluir !: any

  idProcurado!: any

  livros!: Livro[]

  constructor(private service:LivroService,
              private router:Router,
              private forms:FormsModule) { }

  ngOnInit(): void {
    this.listarLivros()
    this.busca()
  }

  listarLivros(){
    this.service.listar().subscribe(resultado=>{
      this.livros = resultado
    })
  }

  busca(){
    return `https://lojasaraiva.vteximg.com.br/arquivos/ids/12104802/1009575881.jpg?v=637142231559930000`
  }

  editarLivros(id:any){
    this.router.navigate(['/editar/' + id])
  }

  cancelarAcao(){
    this.isModal=false
  }

  confirmarAcao(){
      this.service.excluir(this.idLivroExcluir).subscribe({
        next: (resultado) =>{console.log('Excluído.')
                              this.listarLivros()
                              this.isModal=false},
      error: (erro) => console.error(erro),
      complete: () => {console.info('Exclusão concluída.')
                          this.isModal=false}
      })     
    }

    mostrarModal(id:any){
      this.isModal = true
      this.idLivroExcluir = id
    }
}
