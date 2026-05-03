# MaintOS API 🚀

API robusta para gerenciamento de manutenção, incluindo controle de equipamentos, usuários e ordens de serviço.

## 🛠 Tecnologias

- **Node.js** com **TypeScript**
- **Express** (Framework Web)
- **PostgreSQL** (Banco de Dados)
- **Postgres.js** (Driver SQL)
- **JWT** (Autenticação)
- **bcryptjs** (Criptografia de senhas)
- **Swagger/OpenAPI** (Documentação)

## 📋 Pré-requisitos

- Node.js (v18+)
- PostgreSQL instanciado (Local ou Cloud)

## 🚀 Instalação e Configuração

1. **Clone o repositório:**
   ```bash
   git clone <url-do-repositorio>
   cd maintos-api
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Configuração do Ambiente:**
   Crie um arquivo `.env` na raiz do projeto ou configure as variáveis de ambiente:
   ```env
   DATABASE_URL=postgres://usuario:senha@host:porta/database
   JWT_SECRET=sua_chave_secreta_aqui
   PORT=3000
   ```

4. **Execução:**
   ```bash
   # Modo de desenvolvimento
   npm run dev

   # Build e produção
   npm run build
   npm start
   ```

## 📖 Documentação da API

A documentação interativa (Swagger) está disponível em:
`http://localhost:3000/api-docs`

### Principais Endpoints

#### 🔐 Autenticação
- `POST /auth/login`: Realiza login e retorna o token JWT.

#### 👤 Usuários
- `GET /users`: Lista todos os usuários.
- `POST /users`: Cria um novo usuário (senha será criptografada).
- `GET /users/:id`: Detalhes de um usuário.
- `PUT /users/:id`: Atualiza dados.
- `DELETE /users/:id`: Remove usuário.

#### 🏗 Equipamentos
- `GET /equipments`: Lista equipamentos.
- `POST /equipments`: Adiciona novo equipamento.
- `GET /equipments/:id`: Detalhes do equipamento.
- `PUT /equipments/:id`: Atualiza dados.
- `DELETE /equipments/:id`: Remove equipamento.

#### 📝 Ordens de Serviço
- `GET /work-orders`: Lista todas as ordens.
- `POST /work-orders`: Cria nova ordem (requer `equipment_id` e `technician_id` válidos).
- `GET /work-orders/:id`: Detalhes da ordem.
- `PUT /work-orders/:id`: Atualiza status, prioridade ou técnico.
- `DELETE /work-orders/:id`: Remove ordem.

## 🔒 Segurança

Para proteger rotas, utilize o `authMiddleware`. Exemplo de uso nas rotas:
```typescript
router.post("/protegido", authMiddleware, controller.metodo);
```
As requisições protegidas devem enviar o header:
`Authorization: Bearer <seu_token_jwt>`

## 🗄 Estrutura do Projeto

```
src/
├── config/        # Conexões e configurações (DB, Swagger)
├── controllers/   # Lógica de controle das rotas
├── domain/        # Enums e erros customizados
├── middlewares/   # Interceptores (Auth, etc)
├── repositories/  # Acesso direto ao banco de dados (SQL)
├── routes/        # Definição dos endpoints
└── services/      # Lógica de negócio e validações
```
