Para executar o projeto basta baixar o mesmo e abrir o arquivo "index.html"

Inicialmente fiz um desenho em um caderninho para planejar como vou fazer este desenvolvimento, anotando também alguns entraves e dúvidas que seria necessário sanar antes de pular para o desenvolvimento.

O escopo do desafio parece ser reduzido para apenas uma página com produtos e manipulação de carrinho, porém com uma exigência adicional de responsividade para plataformas mobile

Por questão de familiaridade, optei por utilizar o framework do bootstrap. Estudei o componente navbar deles para implementar o header já com responsividade.

Fazendo uso da fonte e dos ícones solicitados, montei uma primeira versão do header da página, incluindo um dropdown para o carrinho, que por enquanto apenas exibe a mensagem de que o carrinho está vazio. No interesse de dispôr responsividade, optei por ocultar as opções "lorem ipsum" dentro de um menu, que o próprio bootstrap proporciona

Foram encontrados problemas na ordenação dos elementos do header em ambiente mobile, que procurei solucionar fazendo uso das classes .d-flex e .order-lg-1

Após isso finalizado, comecei a desenvolver o dropdown do carrinho, utilizando jQuery para buscar os dados do JSON. Tive problemas ao tentar obter estes dados localmente (um erro "jquery Access to XMLHttpRequest has been blocked by CORS policy local file"), portanto busquei direto do github, e não obtive problemas, e para dar prosseguimento optei por deixar assim por enquanto.

Com o JSON em mãos, era só uma questão de iterar pelos itens, e adicioná-los a minha div do carrinho. Previamente a isso eu já havia montado um item de testes direto no HTML para já definir a estrutura do layout, portanto quando populei pelo jQuery, não obtive problemas. Para o nome truncado, criei uma função que substitui o final de qualquer string por uma elipse, e utilizei a função toLocaleString para formatar a somatória dos valores em um valor final.

Após isto foi apenas questão de adicionar o "botão" de finalizar compra. Que não é bem um botão, mas uma div com estilo de cursor "pointer".

Testando o layout, percebi que em telas pequenas o site ficava muito ilegível, com textos muito pequenos, portanto fiz o uso da regra @media do CSS para aumentar o tamanho das fontes do site, também tomei a liberdade de ocultar o texto "Total do pedido" no carrinho, para evitar que o texto acabasse quebrando a linha.