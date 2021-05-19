<img src="https://github.com/vincent-queimado/BuscaDadosIndexados/blob/main/public/assets/images/logo.png?raw=true" alt="Logo" height="100px"/>

# Programa de busca por indexação

## Sobre o programa
O objetivo deste programa é realizar buscas por sentença (conjunto de palavras chaves) em arquivos de dados (exemplo com arquivos .txt). Uma das premissas do programa é a velocidade de tratamento de busca através de algoritmo de indexecação (0.001ms), retornando a quantidade de ocorrências encontradas assim como a lista de arquivos que possuem as palavras chaves pesquisadas.

Seguem as premissas implementadas no projeto: 
1. O programa é executado a partir de linha de comando do terminal (Linux/MacOS).
2. O programa não utiliza dependências.
2. O resultado de ocorrências encontradas é listado em ordem crescente e alfabética. 
3. O programa oferece um busca de multiplas palavras chaves (chaveado com AND) que se encontram em mesmos aquivos mesmo de forma separadas dentro do contéudo do arquivo.

## Estrutura

```
database\               # Pasta de arquivos de dados 
 |--data                # Pasta de arquivos de dados para uso staging/produção
 |--data_sample         # Pasta de arquivos de exemplo para uso em desenvolvimento
public\                 # Pasta de imagens de documentação do git (pasta criada apenas para ilustração)
src\                    # Pasta do programa source (sem compilação)   
 |--app\                # Subpasta do programa/serviço
     |--client          # Pasta de arquivos relacionados a execução da busca de usuário 
     |--config\         # Pasta de arquivos de configuração do programa
     |--server\         # Pasta de arquivos relacionados ao preprocessamento e motor de busca por indexação 
     |--utils\          # Pasta de arquivos de uso comum no projeto
test\                   # Pasta de arquivos de testes unitérios
```

## Sobre a instalação 

O programa deve ser executado em duas partes a partir de scripts. 
O primeiro script é responsável pelo preprocessamento dos dados dos arquivos, criando uma indexação e um servidor pronta para receber as buscas.
O segundo script é responsável pela execução de um comando de busca pelo terminal.

Para realizar a instalação do programa, segue o passo a passo abaixo.

Clone do repositório:
```bash
  git clone https://github.com/vincent-queimado/BuscaDadosIndexados.git
  cd BuscaDadosIndexados
```

Instalação de dependências (apenas dependências de testes unitários - JEST):
```bash
  npm install
```

Após realizar a instalação, copiar e colar todos os arquivos de textos (.txt) na pasta do projeto:
```bash
 /database/movies/data/
```

## Sobre a execução

Executando localmente em ambiente de desenvolvimento:
```bash
  npm run dev-server
```

```bash
  npm run dev-search palavra1 palavra2
```

Executando em ambiente staging ou produção:
```bash
  npm run server
```
```bash
  npm run search palavra1 palavra2
```

