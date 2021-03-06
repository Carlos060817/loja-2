import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Estoque } from '../update/update.moduls';
import { ListService } from '../estoques/estoques.services';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})
export class UpdatePage implements OnInit {

  index: number = 0;
  produtos: Estoque[] = [];
  quantidade: number = 0;
  valor: number = 0;
  saida: number = 0;

  constructor(private route:ActivatedRoute, public estoqueService:ListService) {
    this.index = this.route.snapshot.params.id;
    this.produtos[0] = estoqueService.getItemEstoque(this.index);
   }

   ngOnInit(): void {

  }

  onSubmit(from:any){

  }
  //quantidade
  adicionar(): void{
    this.estoqueService.adicionarQuantidade(this.index, this.quantidade);
  }

  remover(): void{
    this.estoqueService.removerQuantidade(this.index, this.quantidade);
  }

  //saida
  adicionar1(): void{
    this.estoqueService.adicionarSaida(this.index,this.saida);
  }

  remover1(): void{
    this.estoqueService.removerSaida(this.index,this.saida);
  }

//entrada
  adicionar2(): void{
    this.estoqueService.adicionarEntrada(this.index,this.valor);
  }

  remover2(): void{
    this.estoqueService.removerEntrada(this.index,this.valor);
  }
}
