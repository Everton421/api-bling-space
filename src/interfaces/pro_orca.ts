export interface pro_orca{
orcamento:number,
sequencia:number, 
produto:number,
grade:number,
padronizado:number,
complemento:string,
unidade:string, 
item_unid:number,
just_ipi:number,
just_icms:number,
just_subst:number,
}

/*
$sql = "INSERT INTO pro_orca (orcamento, sequencia, produto,
     grade, padronizado, complemento, unidade, 
     item_unid, just_ipi,
      just_icms, just_subst, quantidade,
      unitario, tabela, preco_tabela, CUSTO_MEDIO, ULT_CUSTO, FRETE, ipi, desconto)
														VALUES ('$codigoOrcamento',
														'$i',
														'$itens->produto_codigo',               
														'0',             
														'0',    
														'',           
														'$tp_unid',                        
														'1',
														'0',
														'0',
														'0',
														'$itens->quantidade',
														'$itens->preco_tabela',
														'$tabprecoVend ',
														'$valor_prod',
														'$custo_medio',
														'$ultimo_custo',
														'$pedidoFrete',
														'$ipi',
														'$descontoTotal')";
*/