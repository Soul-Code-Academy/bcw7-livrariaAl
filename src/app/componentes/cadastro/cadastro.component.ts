import { LivroService } from 'src/app/servicos/livro.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  isModal:boolean = false

  form!:FormGroup

  status: boolean = true

  livro: any


  constructor(private fb:FormBuilder,
              private service:LivroService,
              private router:Router,
              private actRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.form = this.fb.group({
      id:[null],
      nome:[null],
      autor:[null],
      foto:[null]
    })

    const id_livro = <any> this.actRoute.snapshot.params["id"]
    this.service.listarIndividual(id_livro).subscribe({
      next: (resultado) => {console.log(resultado)
      this.livro = resultado
      this.editarLivro(this.livro)
      this.status = false},
      error: (erro) => console.error (erro),
      complete:() => console.info ('Concluído!')
    })
  }

  salvarLivro(){
    console.log(this.form.value)
    if(this.form.value.id){
      this.service.editar(this.form.value.id, this.form.value).subscribe({
        next:(resultado) => console.log('Edição realizada.'),
        error: (erro) => console.error(erro),
        complete: () => {console.info('Edição finalizada.')
                        this.router.navigate(['/listagem'])}
       })
    }else{
      this.service.cadastrar(this.form.value).subscribe({
        next: (resultado) => {console.log('Cadastrado.')
                              this.isModal=false},
        error: (erro) => console.error(erro),
        complete: () =>{console.info('Cadastro finalizado.')
                        this.isModal=false
                        this.router.navigate(['/listagem'])}
      })
    }
  }

  editarLivro(livro:any){
    this.form.patchValue({
      id:livro.id,
      nome:livro.nome,
      autor:livro.autor,
      foto:livro.foto
    })
  }

  cancelarAcao(){
    this.isModal=false
  }

  mostrarModal(id:any){
    this.isModal = true
  }

}

