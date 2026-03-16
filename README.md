AgendaNuza - Sistema de Gestão Inteligente para Salão de Beleza

O AgendaNuza é uma plataforma web desenvolvida para o Danuza Andrietti Studio, com o objetivo de modernizar o controle de atendimentos, clientes e serviços, substituindo agendas físicas por uma solução digital organizada, intuitiva e escalável.

O sistema permite que clientes realizem seus próprios agendamentos e que a administradora tenha controle total da agenda, serviços e atendimentos.

1. Domínio do Problema

Pequenos salões de beleza frequentemente enfrentam dificuldades no controle manual de horários, o que pode causar:

Conflitos de agendamento

Esquecimento de atendimentos

Falta de organização financeira

Dificuldade em acompanhar clientes atendidos

O AgendaNuza centraliza essas informações em um sistema digital moderno, proporcionando melhor organização e experiência tanto para o cliente quanto para o profissional.

2. Requisitos do Sistema
Requisitos Funcionais (RF)

RF01: Cadastro de clientes com nome, email, senha e telefone.
RF02: Login de clientes para acesso ao sistema.
RF03: Visualização dos serviços disponíveis.
RF04: Agendamento de serviços com seleção de data e horário.
RF05: Painel administrativo para visualização dos atendimentos agendados.
RF06: Cadastro manual de clientes pela administradora (caso o agendamento seja presencial).
RF07: Marcação de atendimento como finalizado pela administradora.

Requisitos Não Funcionais (RNF)

RNF01: Interface responsiva para uso em celulares, tablets e desktops.
RNF02: Interface moderna com identidade visual do salão (verde claro, branco e dourado).
RNF03: Tempo de resposta rápido para carregamento de agenda e serviços.
RNF04: Estrutura preparada para escalabilidade futura (ex: múltiplos profissionais).

3. Tecnologias Utilizadas
Tecnologia	Papel no Sistema	Justificativa
Next.js	Frontend e Backend (Fullstack)	Permite criar interfaces modernas e API no mesmo projeto
React	Interface	Componentização e interatividade
Tailwind CSS	Estilização	Desenvolvimento rápido com design moderno
Node.js	Ambiente de execução	Base para o Next.js
MySQL	Banco de dados	Simplicidade e confiabilidade para sistemas de gestão
Prisma ORM	Integração com banco	Facilita modelagem e consultas

4. Arquitetura do Sistema

O sistema segue uma arquitetura simples em camadas:

Cliente → Interface Web → API do Next.js → Prisma → MySQL

Essa estrutura facilita manutenção, evolução e integração futura com aplicativos mobile.

5. Como Executar o Projeto

Clone o repositório:

git clone https://github.com/seu-usuario/AgendaNuza.git

Instale as dependências:

npm install

Execute o ambiente de desenvolvimento:

npm run dev

Acesse no navegador:

http://localhost:3000
