# Meu Repositório de Exercícios - Minha Jornada de Aprendizado

## 1 - Crie uma função usando o operador &&

<details>
  <summary>
    Implemente a função <code>compareTrue</code> utilizando somente o operador <code>&&</code>
  </summary> <br />

A função `compareTrue` ao receber dois parâmetros booleanos deve:

- Retornar `true` se ambos os valores forem verdadeiros;
- Retornar `false` se um ou ambos os parâmetros forem falsos.


Exemplo:

```javascript
const girafa = true;
const elefante = true;
const macaco = false;
```

Se a função for chamada com os valores `girafa` e `elefante` como parâmetro, retorna `true`, mas caso  seja chamada com os parâmetro `macaco` e `elefante` retorna `false`.

**O que será testado:**

- Retorne false quando se chamar a função compareTrue com um parâmetro de valor false e outro de valor true;

- Retorne false quando se chamar a função compareTrue com dois parâmetros de valor false;

- Retorne true quando se chamar a função compareTrue com dois parâmetros de valor true.

</details>

## 2 - Crie uma função que calcula a área de um triângulo

<details>
  <summary>
Implemente a função <code>calcArea</code> que retorna o cálculo da área total de um triângulo

  </summary> <br />

A função `calcArea` recebe o valor da base (`base`) e outro da altura (`height`) de um triângulo e retorna o cálculo da sua área.

- Realize o cálculo da área total do triângulo utilizando a fórmula `(base * altura) / 2`.

**O que será testado:**

- Retorne o valor 250 quando a funcão calcArea é chamada com o parâmetro base com o valor 10 e o parâmetro height com o valor 50;

- Retorne o valor 5 quando a funcão `calcArea` é chamada com o parâmetro `base` com o valor 5 e o parâmetro `height` com o valor 2;

- Retorne o valor 25.5 quando a funcão `calcArea` é chamada com o parâmetro `base` com o valor 51 e o parâmetro `height` com o valor 1.


</details>
estou estudando js, quero que voce me passa 10 teste fundamento de js

## 3 - Crie uma função que divida uma frase

<details>
  <summary>
Implemente a função <code>splitSentence</code> que divide uma frase de acordo com a quantidade de palavras

  </summary> <br />
A função `splitSentence` recebe uma string como parâmetro e deve retornar um array com as palavras separadas por vírgula.

  Exemplo: se a função receber a string `'go Trybe'`, o retorno deverá ser `['go', 'Trybe']`.

**O que será testado:**

- Retorne o valor `['go', 'Trybe']` se a função receber a string `'go Trybe'`;

- Retorne o valor `['vamo', 'que', 'vamo']` se a função receber a string `'vamo que vamo'`;

- Retorne o valor `['foguete']` se a função receber a string `'foguete'`.


</details>


## 4 - Crie uma função que use concatenação de strings

<details>
  <summary>
Implemente a função <code>concatName</code> que recebe um array de strings e retorna o último item na primeira posição

  </summary> <br />
A função `concatName` recebe um array de strings e deve retornar uma string com o formato `'ÚLTIMO ITEM, PRIMEIRO ITEM`, independente do tamanho do array.

  Exemplo:

- Caso o parâmetro passado para a função `concatName` seja o array `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`, a função deverá retornar `Paolillo, Lucas`.

**O que será testado:**

- Retorne `'Paolillo, Lucas'` quando o parâmetro passado na funcão concatName seja `['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']`;

- Retorne `'ré, foguete'` quando o parâmetro passado na funcão concatName seja `['foguete', 'não', 'tem', 'ré']`;

- Retorne `'captain, captain'` quando o parâmetro passado na funcão concatName seja `['captain', 'my', 'captain']`.


</details>

## 5 - Crie uma função que calcula a quantidade de pontos em um campeonato de futebol

<details>
  <summary>
Implemente a função <code>footballPoints</code> que calcula a pontuação de um time de futebol em um campeonato a partir do número de vitórias e empates

  </summary> <br />

A função `footballPoints` recebe o número de vitórias (`wins`) e o número de empates (`ties`) e retorna a quantidade de pontos que o time marcou em um campeonato. Para isso, considere que:

- `wins`: é o número de vitórias e vale 3 pontos;
- `ties`: é o número de empates e vale 1 ponto.


**O que será testado:**

- Retorne `50` pontos quando o time tenha 14 vitórias e 8 empates;

- Retorne `5` pontos quando o time tenha 1 vitória e 2 empates;

- Retorne `0` pontos quando o time tenha 0 vitórias e 0 empates.


</details>


## 6 - Crie uma função que calcula o número de repetições do maior número

<details>
  <summary>
Implemente a função <code>highestCount</code> que deverá retornar a quantidade de vezes que o maior número se repete ao receber um array de números.

  </summary> <br />

A função deve retornar a quantidade de vezes que o **maior** número se repete dentro do array.

  Por exemplo:

- Caso o parâmetro seja um array com valores `[9, 1, 2, 3, 9, 5, 7]`, a função deverá retornar `2`, que é a quantidade de vezes que o número `9` (maior número do array) se repete.

**O que será testado:**

- Retorne `2` quando o parâmetro passado na função highestCount seja `[9, 1, 2, 3, 9, 5, 7]`;

- Retorne `1` quando o parâmetro passado na função highestCount seja `[0, 4, 4, 4, 9, 2, 1]`;

- Retorne `3` quando o parâmetro passado na função highestCount seja `[0, 0, 0]`.


</details>


## 7 - Crie uma função de Caça ao Rato

<details>
  <summary>
Implemente a função <code>catAndMouse</code> que verifica qual gato está mais perto do rato

  </summary> <br />
Imagine que dois gatos estão caçando o mesmo rato. Você precisa verificar qual gato está mais perto de sua presa. Para isso, implemente a função `catAndMouse` que recebe 3 parâmetros do tipo `number` na seguinte ordem:

    - `mouse`: representa a posição do rato.

    - `cat1`: representa a posição de um dos gatos;

    - `cat2`: representa a posição do outro gato ;


- Calcule as distâncias entre o rato e cada um dos gatos e retorne qual dos felinos está mais próximo do rato:

   - Retorne a string `'cat2'` se o gato `cat2` estiver mais próximo do rato;
   - Retorne a string `'cat1'` se o gato `cat1` estiver mais próximo do rato;
   - Retorne a string `'os gatos trombam e o rato foge'` caso os gatos estejam na mesma distância do rato.

Exemplo:

- Caso o gato `cat2` esteja a 2 unidades de distância do rato e o `cat1` esteja a 3 unidades, sua função deverá retornar `'cat2'`;

- Caso os gatos estejam na mesma distância do rato, a função deverá retornar a string `'os gatos trombam e o rato foge'`.

**O que será testado:**

- Retorne a string `'cat2'` caso a função `catAndMouse` receba os parâmetros onde gato `cat2` esteja a 2 unidades de distância do rato e `cat1` esteja a 3 unidades de distância do rato;

- Retorne a string `'cat1'` caso a função catAndMouse receba os parâmetros onde gato `cat1` esteja a 6 unidades de distância do rato e `cat2` esteja a 12 unidades de distância do rato ;

- Retorne a string `'os gatos trombam e o rato foge'` caso a função `catAndMouse` receba os parâmetros onde os gatos estejam na mesma distância do rato.


</details>


## 8 - Crie uma função FizzBuzz

<details>
  <summary>
Implemente a função <code>fizzBuzz</code> que recebe um array de números e retorna um array de string de acordo com o resultado

  </summary> <br />

A função `fizzBuzz` recebe um array de números e para cada número do array é realizada a divisão por 3 e por 5 e de acordo com o resultado, a função deve retornar uma string:

- Retorne a string `'fizz` para cada número do array que seja divisível apenas por 3;
- Retorne a string `'buzz'` para cada número do array que seja divisível apenas por 5;
- Retorne a string `'fizzBuzz'` para cada número do array que seja divisível por 3 **e** 5;
- Retorne a string `'bug!'` para cada número do array que não seja dividido por 3 nem por 5.

Exemplo: caso o parâmetro seja [2, 15, 7, 9, 45], sua função deverá retornar `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']`.

**O que será testado:**

- Retorne as strings `['bug!', 'fizzBuzz', 'bug!', 'fizz', 'fizzBuzz']` quando é passado os parâmetros [2, 15, 7, 9, 45] para a função `fizzBuzz`;

- Retorne as strings `['bug!', 'fizz']` quando é passado os parâmetros [7, 9] para a função `fizzBuzz`;

- Retorne as strings `['fizz', 'buzz']` quando é passado os parâmetros [9, 25] para a função `fizzBuzz`.


</details>


## 9 - Crie uma função que Codifique e Decodifique

<details>
  <summary>
Implemente uma função que codifica e decodifica uma frase, trocando vogais por números ou números por vogais.

  </summary> <br />

  Para codificar a frase utilize a função `encode` que recebe uma string como parâmetro e deverá trocar todas as **vogais minúsculas por números**, de acordo com o formato:

a -> 1 \
e -> 2 \
i -> 3 \
o -> 4 \
u -> 5

  Ou seja, caso o parâmetro de `encode` seja `'hi there!'`, o retorno deverá ser `'h3 th2r2!'`.


  Para decodificar a frase utilize a função `decode` que recebe uma string contendo letras e números como parâmetro e deverá trocar todos os **números por vogais minúsculas**, de acordo com o formato:

1 -> a \
2 -> e \
3 -> i \
4 -> o \
5 -> u

  Por exemplo, caso o parâmetro de `decode` seja `'h3 th2r2!'`, o retorno deverá ser `'hi there!'`.

**O que será testado:**

- Ao utilizar o parâmetro `hello`, deverá trazer como retorno `h2ll4`;
- Ao utilizar o parâmetro `How are you today?` deverá trazer como retorno `H4w 1r2 y45 t4d1y?`;
- Ao utilizar o parâmetro `This is an encoding test.` deverá trazer como retorno `Th3s 3s 1n 2nc4d3ng t2st.`;
- Ao utilizar o parâmetro `go Trybe! `deverá trazer como retorno `g4 Tryb2!` .



</details>


## 10 - Crie uma função de Lista de Tecnologias

<details>
  <summary>
Implemente a função <code>techList</code> que recebe um array e uma string e retorna um array de objetos.

  </summary> <br />

  A função `techList` recebe dois parâmetros:

  - Um array com nomes de tecnologias ;
  - Um nome referente ao nome de uma pessoa.

  A função deverá retornar:
  - 'Vazio!' se não receber parâmetro algum ;
  - Um objeto para cada tecnologia do array, com a seguinte estrutura:

```javascript
{
  tech: 'NomeTech',
  name: 'nome da pessoa'
}
```

Por exemplo, se a função recebe os parâmetros `['React', 'Jest', 'HTML', 'CSS', 'JavaScript']` e `'Lucas'`, o retorno deve ser:

```javascript
[
  {
    tech: "CSS",
    name: "Lucas"
  },
  {
    tech: "HTML",
    name: "Lucas"
  },
  {
    tech: "JavaScript",
    name: "Lucas"
  },
  {
    tech: "Jest",
    name: "Lucas"
  },
  {
    tech: "React",
    name: "Lucas"
  }
]
```

**O que será testado:**

- Retorne uma lista de objetos ordenados quando é passada uma lista com 5 tecnologias;

- Retorne a mensagem de erro `'Vazio!'` quando a lista não tiver tecnologias.


</details>