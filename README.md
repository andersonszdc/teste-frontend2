# Desafio Desenvolvedor Front-end Pleno - Onyma

Neste desafio você deverá construir uma interface de cadastro de funcionários para empresas de RH.

## Contexto

Neste cenário proposto, a área de RH de empresas clientes utilizam de nossa interface para cadastrar funcionários que poderão ou não realizar exames ocupacionais.

A interface deve permitir que o usuário escolha em qual das empresas o novo funcionário será inserido, sendo que um funcionário não pode estar ativo em duas empresas ao mesmo tempo.

Você desenvolverá uma página única que mostre a lista de usuários de cada empresa separadamente, permitindo que os dados sejam alterados ou excluídos, além de um modal de form que permita o cadastro de novos funcionários.

## Observações
- Os dados das empresas e funcionários para listagem e filtragem podem utilizar _mocks_ ou uma fake API *(ex: json-server)*, não é necessário desenvolver uma API para o desafio.


## Requisitos

Você deve criar um serviço com os seguintes requisitos:

1. Requisitos gerais
   - A aplicação deve ser desenvolvida utilizando NextJS
   - O projeto deve ter um README.md com todas as instruções sobre como executar e testar o projeto
   - O projeto deve utilizar Git como ferramenta de controle de versão
   - *Possuir testes automatizados é um diferencial*
   - *Estratégias de SEO são um diferencial*
1. Requisitos da página
    1. Cadastro de funcionários
        - Deve ser possível cadastrar novos funcionários para a empresa.
       - Cada funcionário deve ter nome, CPF, RG, data de nascimento, email, telefone, endereço, setor e cargo.
        - Todos os campos são obrigatórios, exceto email e telefone.
        - É obrigatório ter um email OU um telefone.
        - Não pode haver dois funcionários com o mesmo CPF (inclusive em empresas diferentes)
        - O funcionário não pode estar **ativo** em duas empresas
        - O endereço do funcionário deve ser capturado automaticamente *(ex: latitude/longitude do browser + Geocoding API)*
        - *Cadastro em lote/batch [adicional]*
    2. Lista dos funcionários
        - A página deve conter a lista dos funcionários cadastrados.
        - Deve ser possível inativar um funcionário em determinada empresa (o registro continua, mas com status inativo).
        - Deve ser possível alterar um funcionário ao clicar no card listado.
        - *Alterar a ordem dos cards (drag and drop) [adicional]*


## Avaliação

1. O teste deve ser clonado em seu repositório do Github e, após finalizado, a URL do repositório deverá ser enviada para o contato que lhe enviou o teste
2. Uma breve explicação das decisões tomadas deverá ser enviada para nós, da forma que for acordado entre você e quem lhe enviou o desafio.
3. A avaliação ocorrerá com base na arquitetura, design e qualidade do código, entendimento das regras de negócio, tolerância a falhas e o quão preparado esse serviço estaria para ser rodado em produção.
4. Existem algumas funcionalidades adicionais. Apesar de não serem obrigatórias, terão peso considerável na avaliação.
4. Achamos que entre **5 a 7 dias** é tempo suficiente para a finalização, mas caso sua disponibilidade exija mais tempo, avise a gente com, pelo menos, 1 dia de antecedência do prazo final.
5. Boa sorte.
