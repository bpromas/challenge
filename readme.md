Para executar o projeto basta baixar o mesmo e abrir o arquivo "index.html"

Inicialmente fiz um desenho em um caderninho para planejar como vou fazer este desenvolvimento, anotando também alguns entraves e dúvidas que seria necessário sanar antes de pular para o desenvolvimento.

O escopo do desafio parece ser reduzido para apenas uma página com produtos e manipulação de carrinho, porém com uma exigência adicional de responsividade para plataformas mobile

Por questão de familiaridade, optei por utilizar o framework do bootstrap. Estudei o componente navbar deles para implementar o header já com responsividade.

Fazendo uso da fonte e dos ícones solicitados, montei uma primeira versão do header da página, incluindo um dropdown para o carrinho, que por enquanto apenas exibe a mensagem de que o carrinho está vazio. No interesse de dispôr responsividade, optei por ocultar as opções "lorem ipsum" dentro de um menu, que o próprio bootstrap proporciona

Foram encontrados problemas na ordenação dos elementos do header em ambiente mobile, que procurei solucionar fazendo uso das classes .d-flex e .order-lg-1