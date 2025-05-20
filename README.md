# 🚀 Projeto React com Cypress, Docker e GitHub Actions

![CI Status](https://github.com/Joaozinm/cypress-github-actions/actions/workflows/ci.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-✓-blue)
![Cypress](https://img.shields.io/badge/Cypress-12.17.1-green)

## 📋 Visão Geral

Projeto React com testes E2E usando Cypress em containers Docker e pipeline CI com GitHub Actions.

## 🛠️ Pré-requisitos

- Node.js 18+
- Docker 20+
- npm 9+
- Git

## 🏁 Começando

### 🔧 Instalação Local

```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
npm install
```

## 🐳 Execução com Docker

```bash
docker-compose up --build
```

## ⚡ Execução sem Docker

```bash
npm run dev       # Inicia servidor de desenvolvimento
npm run test:e2e  # Executa testes Cypress no modo headless
npm run test:ui   # Abre interface do Cypress
```

## 📂 Estrutura do Projeto

```bash
.
├── cypress/
│   ├── e2e/          # Testes end-to-end
│   ├── fixtures/     # Dados de teste
│   └── support/      # Configurações do Cypress
├── dist/             # Build de produção (gerado pelo Vite)
├── src/              # Código-fonte React
├── .github/
│   └── workflows/    # Configurações do GitHub Actions
├── Dockerfile        # Configuração do container
├── docker-compose.yml
├── vite.config.js
└── cypress.config.js
```

## 🧪 Testes

### 🔍 Rodando Testes Localmente

```bash
# Executar todos os testes
npm run test:e2e

# Abrir interface do Cypress
npm run test:ui
```

### ⚙️ Configuração do Cypress

Os testes estão configurados para:

Usar baseUrl: "http://react-app:5173" no Docker

Gerar screenshots e vídeos dos testes

Timeout de 60 segundos para inicialização

## 🔄 CI Pipeline

O workflow no GitHub Actions (ci.yml):

1. Build da aplicação

```bash
npm run build  # Gera arquivos em dist/
```

2. Inicialização do servidor

```bash
serve -s dist -l 5173
```

3. Execução dos testes Cypress

- Roda em container Docker

- Gera relatórios de falhas

4. Upload de artefatos

- Screenshots de falhas

- Vídeos da execução

## 🐛 Solução de Problemas

### ❌ Erro 404 no Docker

```bash
# Verificar se o build foi gerado corretamente
docker exec <container-id> ls -la /app/dist

# Verificar logs do servidor
docker-compose logs react-app
```

### ⏱️ Healthcheck falhando

Ajuste no docker-compose.yml:

```bash
healthcheck:
  test: ["CMD", "curl", "-f", "http://localhost:5173/index.html"]
  interval: 5s
  timeout: 15s
  retries: 10
  start_period: 10s
```

## 💡 Melhores Práticas

- Sempre verifique se dist/index.html existe após o build

- Não altere o diretório dist/ sem atualizar Dockerfile e CI

- Use volumes do Docker para desenvolvimento local

## 📜 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo LICENSE para detalhes.

Pronto para começar? Clone o projeto e execute `docker-compose up` para ver tudo funcionando! 🎉

Problemas ou dúvidas? Abra uma issue no repositório ou consulte os logs com docker-compose logs.

### Como usar:

1. Crie um novo arquivo chamado `README.md` na raiz do seu projeto
2. Copie todo o conteúdo acima
3. Substitua `seu-usuario/seu-repositorio` pelos dados do seu projeto
4. Personalize as seções conforme necessário

O arquivo inclui:

- Badges de status
- Seções organizadas
- Blocos de código formatados
- Ícones visuais
- Solução de problemas comum
- Melhores práticas

Você pode adicionar/modificar seções conforme suas necessidades específicas!
