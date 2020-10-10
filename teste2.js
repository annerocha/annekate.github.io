var botao = document.querySelector('#enviar');
console.log(botao);
botao.addEventListener('click', function (event) {
 event.preventDefault();
})

function verificar() {
    var resultado = 0;
    var testecompleto = false;
    
    for(i=1; i<=10; i++) {
        if (document.querySelector(`input[name="pergunta${i}"]:checked`)) {
            resultado += parseInt(document.querySelector(`input[name="pergunta${i}"]:checked`).value);
            testecompleto=true;
        } else {
            alert('Por favor, preencha todas as respostas!')
            break;
        }
    }
if (testecompleto){tos, dev!!! Parabéns! Corpo sano, mente sana (Corpo são, mente sã). Porque já basta JavaScript pra tirar nossa sanidade, nãvar  botao  =  documento . querySelector ( '#enviar' ) ;
console . log ( botao ) ;
botao . addEventListener ( 'click' ,  function  ( event )  {
 evento . preventDefault ( ) ;
} )

function  verificar ( )  {
    var  resultado  =  0 ;
    var  testecompleto  =  false ;
    
    para ( i = 1 ;  i <= 10 ;  i ++ )  {
        se  ( documento . querySelector ( `input [name = "pergunta $ { i } "]: checked` ) )  {
            resultado  + =  parseInt ( documento . querySelector ( `input [name = "pergunta $ { i } "]: checked` ) . valor ) ;
            testecompleto = true ;
        }  else  {
            alert ( 'Por favor, preencha todas as respostas!' )
            testecompleto = false ;
            pausa ;
        }
    }

if  ( testecompleto ) {
    if ( resultado <= 10 ) {
        alert  ( 'Só' +  resultado + 'pontos, dev !!! Você precisa reprogramar sua vida já !!! Você quer realmente chegar numa vida.lenght> 70?' ) ;
    }  else  if ( resultado > 10  &&  resultado <= 20 ) {
        alert  ( resultado + 'pontos, dev !!! Você está fora das boas práticas de programação da vida! Vamos dar um maushabitos.clear (). O que você pode mudar esta semana?' ) ;        
    }  else  if ( resultado > 20  &&  resultado <= 30 ) {
        alerta  ( resultado + 'pontos, dev !!! Nem tão ruim, nem tão bom. Mas quem se conforma com a mediocridade? Vamos fazer um saúde ++?' ) ;
    }  else  if  ( resultado > 30  &&  resultado <= 40 ) {
        alert ( resultado + 'pontos, dev !!! Você é quase um programador atleta! Mas ainda podemos melhorar. Qual variável da sua saúde você pode incrementar esta semana?' ) ;
    }  else  {
        alert ( resultado + 'pontos, dev !!! Parabéns! Corpo sano, mente sana (Corpo são, mente sã). Porque já basta JavaScript pra tirar nossa sanidade, não é mesmo?' )
    
    }    
}
documento . querySelector ( '#perguntas' ) . reset ( ) ;
}
