# 🌿 AgendaNuza - Sistema de Gestão Inteligente

> Modernizando o controle de atendimentos do **Danuza Andrietti Studio** com uma solução digital intuitiva, organizada e escalável.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)
![GitHub Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=for-the-badge&logo=github-actions&logoColor=white)
![Status](https://img.shields.io/badge/Status-MVP%20Conclu%C3%ADdo-success?style=for-the-badge)

🚀 Status do Projeto

MVP Concluído e Funcional

O sistema já possui autenticação, cadastro de clientes, agendamentos, painel administrativo, controle de serviços, finalização de atendimentos e persistência de dados utilizando Prisma ORM.

⸻

📖 Sobre o Projeto

O AgendaNuza é uma plataforma web desenvolvida para o Danuza Andrietti Studio, com o objetivo de modernizar o gerenciamento de atendimentos, clientes e serviços.

A solução substitui o controle manual por uma aplicação web moderna, permitindo que clientes realizem seus próprios agendamentos enquanto a administradora mantém controle total sobre a operação do salão.

⸻

🎯 Domínio do Problema

Pequenos salões de beleza frequentemente enfrentam dificuldades relacionadas ao gerenciamento manual da agenda, causando problemas como:

* ❌ Conflitos de horários
* ❌ Falta de controle dos atendimentos
* ❌ Dificuldade para acompanhar clientes
* ❌ Falta de organização operacional
* ❌ Controle manual de serviços realizados

O AgendaNuza centraliza todas essas informações em um único ambiente digital.

⸻

📋 Requisitos Funcionais

RF01
Cadastro de clientes com nome, e-mail, telefone e senha.

RF02
Login de clientes e administradores.

RF03
Visualização dos serviços disponíveis.

RF04
Agendamento de serviços com escolha de data e horário.

RF05
Visualização dos horários ocupados.

RF06
Dashboard administrativo para acompanhamento da agenda.

RF07
Cadastro manual de clientes pela administradora.

RF08
Visualização do histórico de agendamentos.

RF09
Cancelamento de agendamentos pelo cliente.

RF10
Finalização de atendimentos pela administradora.

RF11
Controle de status dos atendimentos.

RF12
Gestão dos serviços cadastrados.

RF13
Dashboard do cliente com acompanhamento dos atendimentos.

RF14
Dashboard administrativo com indicadores do salão.

⸻

⚙️ Requisitos Não Funcionais

RNF01
Interface responsiva para dispositivos móveis e desktop.

RNF02
Interface moderna alinhada à identidade visual do salão.

RNF03
Baixo tempo de resposta para carregamento de informações.

RNF04
Arquitetura preparada para expansão futura.

RNF05
Persistência de dados utilizando ORM.

RNF06
Integração contínua através do GitHub Actions.

⸻

🛠️ Tecnologias Utilizadas

Tecnologia	Papel no Sistema
Next.js	Frontend e Backend
React	Interface do usuário
Tailwind CSS	Estilização
Node.js	Ambiente de execução
SQLite	Banco de dados
Prisma ORM	Persistência e consultas
GitHub Actions	Integração Contínua

⸻

🔄 CI/CD

O projeto possui pipeline de Integração Contínua configurado com GitHub Actions.

A cada push ou pull request, o pipeline executa automaticamente:

* Instalação das dependências
* Geração do Prisma Client
* Build da aplicação
* Validação da estrutura do projeto

Arquivo responsável:

.github/workflows/ci.yml

⸻

🏗️ Arquitetura

O sistema utiliza uma arquitetura Full Stack baseada em Next.js.

Cliente/Admin
      ↓
   Next.js
      ↓
 API Routes
      ↓
 Prisma ORM
      ↓
   SQLite

Essa estrutura facilita manutenção, escalabilidade e futuras integrações.

⸻

🗄️ Modelagem de Dados

Entidades Principais

Usuário

* Cliente
* Administrador

Serviço

* Nome
* Preço
* Categoria
* Duração

Agendamento

* Data
* Horário
* Status
* Cliente
* Serviço

Status dos Agendamentos

* PENDENTE
* CONFIRMADO
* FINALIZADO
* CANCELADO

⸻

✨ Funcionalidades Implementadas

Área do Cliente

* Cadastro
* Login
* Dashboard do cliente
* Visualização de serviços
* Agendamento de horários
* Consulta de horários disponíveis
* Histórico de atendimentos
* Cancelamento de agendamentos
* Perfil do cliente

Área Administrativa

* Dashboard administrativo
* Agenda geral do salão
* Cadastro manual de clientes
* Listagem de clientes
* Gestão de serviços
* Controle dos atendimentos
* Finalização de agendamentos
* Indicadores operacionais

⸻

▶️ Como Executar o Projeto

1. Clonar o repositório
git clone https://github.com/honoratoog/agenda-nuza.git

2. Acessar a pasta
cd agenda-nuza

3. Instalar dependências
npm install

4. Gerar o Prisma Client
npx prisma generate

5. Criar o banco
npx prisma db push

6. Popular dados iniciais
npx prisma db seed

7. Executar a aplicação
npm run dev

8. Abrir no navegador
http://localhost:3000

⸻

📸 Telas do Sistema

Área Pública

* Login
<img width="1440" height="719" alt="Captura de Tela 2026-06-22 às 09 13 45" src="https://github.com/user-attachments/assets/285b6e6b-1367-49c1-887e-48693d943f63" />

* Cadastro
<img width="1440" height="719" alt="Captura de Tela 2026-06-22 às 09 13 20" src="https://github.com/user-attachments/assets/ddbe30d9-d115-4564-adf7-55b6e9caf838" />

Área do Cliente

*Início
<img width="1440" height="714" alt="Captura de Tela 2026-06-22 às 09 15 38" src="https://github.com/user-attachments/assets/ba9b95a8-ac7f-4b02-b087-b969e83649c2" />

* Dashboard
<img width="1440" height="713" alt="Captura de Tela 2026-06-22 às 09 18 13" src="https://github.com/user-attachments/assets/553ea3a8-0d27-43f2-bcef-2dbcd710b4b4" />

* Serviços
<img width="1440" height="716" alt="Captura de Tela 2026-06-22 às 09 18 35" src="https://github.com/user-attachments/assets/1993abc2-fb71-4cda-baad-92ad1cf2a83f" />

Área Administrativa
<img width="1440" height="718" alt="Captura de Tela 2026-06-22 às 09 19 34" src="https://github.com/user-attachments/assets/c6b1c65a-93c5-42d2-b4b7-ef72f21ade50" />

* Agenda
<img width="1440" height="715" alt="Captura de Tela 2026-06-22 às 09 21 34" src="https://github.com/user-attachments/assets/c7081278-8787-4609-bb32-37d64bd037bd" />

* Clientes
<img width="1440" height="715" alt="Captura de Tela 2026-06-22 às 09 23 10" src="https://github.com/user-attachments/assets/e172f436-0507-4044-bb5f-73efd267bd54" />


* Serviços
<img width="1440" height="715" alt="Captura de Tela 2026-06-22 às 09 22 24" src="https://github.com/user-attachments/assets/3ec4df48-6ab1-4a97-bdde-b11478c49d9b" />

⸻

Lucas Honorato dos Santos

Projeto desenvolvido para a disciplina de Programação Web, com foco em desenvolvimento Full Stack utilizando tecnologias modernas do ecossistema JavaScript.

⸻

📌 Repositório:

https://github.com/honoratoog/agenda-nuza
