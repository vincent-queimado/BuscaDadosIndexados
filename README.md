<img src="https://github.com/vincent-queimado/BuscaDadosIndexados/blob/master/public/assets/images/logo.png?raw=true" alt="Logo" height="100px"/>

# Programa de busca por indexação

## Sobre o programa
O objetivo deste programa é realizar buscas por sentença (conjunto de palavras chaves) em arquivos de dados (exemplificado no projeto com arquivos .txt). 
O programa é focado no pré-processamento dos dados de arquivos e algoritmo de indexação de forma a otimizar a velocidade de busca (0.001ms), retornando a quantidade de ocorrências encontradas assim como a lista de arquivos que possuem as palavras-chaves pesquisadas. 
O programa não utiliza dependências, a menos para os testes unitários do projeto. 

Segue abaixo algumas premissas implementadas no projeto: 
1. O programa é executado a partir de linha de comando do terminal preparados para ambiente Linux/MacOS.
2. O programa não utiliza dependências/pacotes de terceiros (apenas código nativo).
2. O resultado de ocorrências encontradas é listado em ordem crescente e alfabética. 
3. O programa permite a busca de múltiplas palavras-chaves (lógica combinatória com AND), ou seja palavras que se encontram em mesmos arquivos não necessariamente juntas.

## Estrutura

```
database\               # Pasta de arquivos de dados (contém os arquivos de dados para tratamento de extração e indexação antes de operar a busca)
 |--data                # Pasta de arquivos de dados para uso staging/produção
 |--data_sample         # Pasta de arquivos de exemplo para uso em desenvolvimento
public\                 # Pasta de imagens de documentação do git (pasta criada apenas para ilustrações relacionadas ao Readme do projeto)
src\                    # Pasta do programa source (sem compilação - futuramente poderá ser compilado e criado uma pasta dist)   
 |--app\                # Subpasta do programa/serviço separados em server/client
     |--client          # Pasta de arquivos relacionados a execução de buscas pelo usuário
     |--config\         # Pasta de arquivos de configuração do programa (filtragem de arquivos por extensão, separador de palavra, etc..)
     |--server\         # Pasta de arquivos relacionados ao pré-processamento de arquivos de dados e criação de servidor de busca por indexação 
     |--utils\          # Pasta de arquivos de uso comum no projeto
test\                   # Pasta de arquivos de testes unitérios
```

## Instalação 

Para realizar a instalação do programa, segue o passo a passo abaixo.

Clone do repositório projeto:
```bash
  git clone https://github.com/vincent-queimado/BuscaDadosIndexados.git
  cd BuscaDadosIndexados
```

Instalação de dependência de desenvolvimento apenas para realização de testes unitários. O comando irá instalar o Jest (https://jestjs.io/pt-BR/):
```bash
  npm install
```

Após realizar a instalação, copiar e colar todos os arquivos de textos (.txt) desejados na pasta adequada do projeto:
```bash
 /database/movies/data/
```

Obs.: Existe uma pasta para arquivos de dados de testes em ambiente de desenvolvimento (/database/movies/data_sample). 

## Execução

O programa deve ser executado em duas partes a partir de um script de pré-processamento de dados e e outro script de execução de busca via comando no terminal:

1. O primeiro script é responsável pelo pré-processamento dos dados dos arquivos, criando uma indexação e um servidor pronta para receber as buscas.

2. O segundo script é responsável pela execução de um comando de busca via terminal (script seguido das palavras-chaves separadas por espaço).

### Executando o pré-processamento de dados

Para executar o script de pré-processamento de dados em ambiente de staging/produção:
```bash
  npm run server
```
Para executar o script de pré-processamento de dados em ambiente de desenvolvimento:
```bash
  npm run dev-server
```
Ao executar o o pré-processamento de dados e iniciar o server, o terminal estará aguardando as requisições de pesquisa por comandos.

### Executando a busca de palavres-chaves

Para executar a busca de palavres-chaves em ambiente de staging/produção:
```bash
  npm run search palavra1 palavra2
```
Para executar a busca de palavres-chaves em ambiente de desenvolvimento:
```bash
  npm run dev-search palavra1 palavra2
```
Ao executar a busca de palavres-chaves no terminal, será retornado os arquivos de textos onde encontram-se as plavras.

Exemplo:
```bash
Foram encontradas 2 ocorrências pelo termo "vincent"
01-jan.txt
3-dots.txt
```

```bash
Foi encontrada 1 ocorrência pelos termos "vincent","dots"
3-dots.txt
```

ou caso nenhuma ocorrência é encontrada:
```bash
Nenhuma ocorrência encontrada!
```

## Resultado de buscas

Exemplo de execução de uma busca por indexação em tempo 0.016ms considerando uma palavra-chave localizada em 74 arquivos de textos:

<img src="https://github.com/vincent-queimado/BuscaDadosIndexados/blob/develop/public/assets/images/searchresult.png?raw=true" alt="Resultado de busca" width="600px"/>


## Execução de testes unitários

Para realizar alguns testes unitários de possíveis cenários de busca:
```bash
npm run test
```
Exemplo de execução de testes unitários:

<img src="https://github.com/vincent-queimado/BuscaDadosIndexados/blob/develop/public/assets/images/jesttest.png?raw=true" alt="Teste Unitários com Jest" width="600px"/>
