# 🌿 AgendaNuza - Sistema de Gestão Inteligente

> Modernizando o controle de atendimentos do **Danuza Andrietti Studio** com uma solução digital intuitiva e escalável.

![Next.js](https://img.shields.io/badge/Next.js-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-00000F?style=for-the-badge&logo=mysql&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=prisma&logoColor=white)

O **AgendaNuza** é uma plataforma web desenvolvida para o *Danuza Andrietti Studio*, com o objetivo de modernizar o controle de atendimentos, clientes e serviços, substituindo agendas físicas por uma solução digital organizada, intuitiva e escalável.

O sistema permite que clientes realizem seus próprios agendamentos e que a administradora tenha controle total da agenda, serviços e atendimentos.

---

## 1. Domínio do Problema

Pequenos salões de beleza frequentemente enfrentam dificuldades no controle manual de horários, o que pode causar:

* ❌ Conflitos de agendamento
* ❌ Esquecimento de atendimentos
* ❌ Falta de organização financeira
* ❌ Dificuldade em acompanhar clientes atendidos

O AgendaNuza centraliza essas informações em um sistema digital moderno, proporcionando melhor organização e experiência tanto para o cliente quanto para o profissional.

---

## 2. Requisitos do Sistema

### 📋 Requisitos Funcionais (RF)
* **RF01:** Cadastro de clientes com nome, email, senha e telefone.
* **RF02:** Login de clientes para acesso ao sistema.
* **RF03:** Visualização dos serviços disponíveis.
* **RF04:** Agendamento de serviços com seleção de data e horário.
* **RF05:** Painel administrativo para visualização dos atendimentos agendados.
* **RF06:** Cadastro manual de clientes pela administradora (caso o agendamento seja presencial).
* **RF07:** Marcação de atendimento como finalizado pela administradora.

### ⚙️ Requisitos Não Funcionais (RNF)
* **RNF01:** Interface responsiva para uso em celulares, tablets e desktops.
* **RNF02:** Interface moderna com identidade visual do salão (verde claro, branco e dourado).
* **RNF03:** Tempo de resposta rápido para carregamento de agenda e serviços.
* **RNF04:** Estrutura preparada para escalabilidade futura (ex: múltiplos profissionais).

---

## 3. Tecnologias Utilizadas

| Tecnologia | Papel no Sistema | Justificativa |
| :--- | :--- | :--- |
| **Next.js** | Frontend e Backend (Fullstack) | Permite criar interfaces modernas e API no mesmo projeto |
| **React** | Interface | Componentização e interatividade |
| **Tailwind CSS** | Estilização | Desenvolvimento rápido com design moderno |
| **Node.js** | Ambiente de execução | Base para o Next.js |
| **MySQL** | Banco de dados | Simplicidade e confiabilidade para sistemas de gestão |
| **Prisma ORM** | Integração com banco | Facilita modelagem e consultas |

---

## 4. Arquitetura do Sistema

O sistema segue uma arquitetura simples em camadas:

`Cliente` → `Interface Web` → `API do Next.js` → `Prisma` → `MySQL`

Essa estrutura facilita manutenção, evolução e integração futura com aplicativos mobile.

<img width="501" height="714" alt="image" src="https://github.com/user-attachments/assets/d69da58b-7870-402f-92ec-e42156e67120" />
<img width="463" height="1143" alt="image" src="https://github.com/user-attachments/assets/687180d4-dc14-403e-aa57-c440cbdec3a0" />


---

## 5. Como Executar o Projeto

1. **Clone o repositório:**
   ```bash
   git clone [https://github.com/seu-usuario/AgendaNuza.git](https://github.com/seu-usuario/AgendaNuza.git)

## 6. Prints das telas atuais
   <img width="1410" height="694" alt="image" src="https://github.com/user-attachments/assets/e99a2dac-11bd-41ac-b5bb-de9c0460f839" />
   <img width="1326" height="772" alt="image" src="https://github.com/user-attachments/assets/6239389b-caee-4c07-8338-c1efcd75312e" />
   <img width="1196" height="869" alt="image" src="https://github.com/user-attachments/assets/7a62f79e-770a-4c9c-8101-91d509cd71e3" />
   <img width="1920" height="924" alt="image" src="https://github.com/user-attachments/assets/f36eb47f-3f75-4f96-9080-162de18955fd" />
   <img width="1897" height="921" alt="image" src="https://github.com/user-attachments/assets/6624181f-a023-498e-98dd-591d90222a8c" />





