// ESTADO

// Conceito interessante e importe do React
// É a memória de um componente, como se fosse uma variável que vai armazenar um valor e sempre que exciste uma alteração no valor dessa variável (chamada estado) o recat entende que ele precisa renderizar novamente o componente.
// Importa o useState
// Para criar esse estado cria uma const com um array entre function e return.
// No exemplo o primeiro parâmetro é texto, e o segundo é o que vai atualizar esse estado (coloca-se set e sequência nome = setTexto) 
// useState para mostrar como esse estado se inicializa (exeplo um título do estado inicial)
// na onde estava o valor do título (<h1 style={{ color:cor }}>Hello World!</h1>) vou mostrar esse estado 
// Coloca o nome texto para buscar o resultado do estado
// Foi colocado um Button para ao clicar ele mude que o estado receba outro valor ao ser clicado
// Foi colocado no button criado uma array function para mudar cada parágrafo 

import { useState } from "react";

function MeuComponente({ cor }) {
    const [texto, setTexto] = useState("Título Inicial")
    return (
        <div>
            <h1 style={{ color:cor }}>{texto}</h1> 
            <button 
            onClick={() =>{setTexto("Mudei via Button")}}>Mudar            
            </button>
            
        </div>  
    )       
}

export default MeuComponente;

//-------------------------------------------------------------------


import MeuComponente from "../props/Props";

function App() {
    return (
        <div>
            <MeuComponente cor="red" />
            <MeuComponente cor="blue" />
            <MeuComponente cor="orangered" />
        </div>
    )
}


//########################################################################

// Colocar input campo text para poder digital alguma coisa na página
// Criar outro estado, pode colocar quantos estados necessários e quiser
// const [text, setInputText] = useState("") sendo vazio
// colocar dentro de input value (<input type="text" />) conforme abaixo 
// fazer um evento chamado onChange = quando ele mudar querer que ele faça uma função (onChange={(e)}) passando um evento 
// Quando clicar no Button chamar clicou
// Fazer uma função clicou em baixo de const. Quando for chamado essa função querer que o texto receba o valor que tem dentro do estado que está armazenando o valor do input. Estará alterando o valor do primeiro estado com o valor do segundo estado


import { useState } from "react";

function MeuComponente({ cor }) {
    const [texto, setTexto] = useState("Título Inicial")
    const [inputText, setInputText] = useState("");

    function clicou() {
        setTexto(inputText);
    }

    return (
        <div>
            <h1 style={{ color:cor }}>{texto}</h1> 
            <input value={inputText} onChange={(e)=>{setInputText(e.target.value)}} type="text" />
            <button onClick={clicou}>Mudar </button>            
        </div>  
    );      
};

export default MeuComponente;

//-------------------------------------------------------------------

import MeuComponente from "../props/Props";
import { Elsie } from "next/font/google";

function App() {
    return (
        <div>
            <MeuComponente cor="red" />
            <MeuComponente cor="blue" />
            <MeuComponente cor="orangered" />
        </div>
    )
}


//########################################################################
// // Outro exemplo completo de estado
// Importação de React e useState: No início do código, importamos o React e a função useState do pacote React. useState é um hook do React que nos permite adicionar estado a componentes de função.

// Definição do componente Counter: Criamos um componente de função chamado Counter. Esse componente renderiza um contador e dois botões para incrementar e decrementar o contador.

// Definição do estado com useState: Dentro do componente Counter, usamos o hook useState para definir o estado inicial do contador como 0. O useState retorna um par de valores: o estado atual (count) e uma função para atualizar esse estado (setCount).

// Funções increment e decrement: Criamos duas funções increment e decrement que atualizam o estado do contador. A função increment aumenta o contador em 1, enquanto a função decrement diminui o contador em 1.

// Renderização do componente: No retorno do componente, renderizamos o valor do contador (count) e dois botões que chamam as funções increment e decrement quando clicados.

// Exportação do componente: Por fim, exportamos o componente Counter para que ele possa ser usado em outros lugares da aplicação.

// Quando o componente Counter é renderizado, ele exibirá o valor do contador e permitirá que o usuário o incremente ou decremente clicando nos botões correspondentes. O estado do contador é mantido internamente pelo React e é atualizado automaticamente quando chamamos a função setCount.

import React, { useState } from 'react';

const Counter = () => {
  // Definindo o estado inicial do contador como 0
  const [count, setCount] = useState(0);

  // Função para aumentar o contador em 1
  const increment = () => {
    setCount(count + 1);
  };

  // Função para diminuir o contador em 1
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={increment}>Incrementar</button>
      <button onClick={decrement}>Decrementar</button>
    </div>
  );
};

export default Counter;
