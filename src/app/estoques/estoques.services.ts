import { Injectable } from '@angular/core';
import { Estoque } from './estoques.moduls';

@Injectable({
  providedIn: 'root'
})
export class ListService {
private produtos: Estoque[]

  constructor() {
    this.produtos = [
      new Estoque(1,1001,"Volante",300,350,10),
      new Estoque(2,1002,"Calotas",30,35,15),
      new Estoque(3,1003,"Eixo/roda",40,50,18),
      new Estoque(4,1004,"Óleo/lumbrificante",18,35,20),
      new Estoque(5,1005,"Parafuso/roda",5,12,100),
      new Estoque(6,1006,"Rodas/dianteiras",1000,2000,4)
    ]
   
   }
   getEstoque(){
     return this.produtos
   }

   getItemEstoque(i:number){
    return this.produtos[i]
  }


  adicionarQuantidade(i:number, quantidade_inserida:number){
    this.produtos[i].qtde = this.produtos[i].qtde + quantidade_inserida;
    
  }

  removerQuantidade(i:number, quantidade_inserida:number){
    this.produtos[i].qtde = this.produtos[i].qtde - quantidade_inserida;
  }

  adicionarSaida(i:number, saida_inserida:number){
    this.produtos[i].saida = this.produtos[i].saida + saida_inserida;
    
  }

  removerSaida(i:number,saida_inserida:number){
    this.produtos[i].saida = this.produtos[i].saida - saida_inserida;
  }

  adicionarEntrada(i:number,valor_inserido:number){
    this.produtos[i].entrada = this.produtos[i].entrada + valor_inserido;
  }

  removerEntrada(i:number,valor_inserido:number){
    
    this.produtos[i].entrada = this.produtos[i].entrada - valor_inserido;

  }



   addProduto(id:number,cod:number,nome:string,entrada:number,saida:number,qtde:number){
    this.produtos.push(new Estoque(id,cod,nome,entrada,saida,qtde))
   }
}
