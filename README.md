# prova_integracao
Repositório relativo a prova de Integração de Sistemas 

rotas testadas no INSOMNIA: 

Aplicação A:

com Prisma e Axios

Porta: 3001

POST com corpo em json http://localhost:3001/folha/cadastrar
GET para listar as folhas cadastradas (está sem a parte de cálculos) http://localhost:3001/folha/calcular

---------------------------------

Aplicação B:

Integrada com a A via Axios

Porta: 3002

GET retornando as folhas cadastradas NO CONSOLE http://localhost:3002/folha/listar

