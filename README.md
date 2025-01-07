# Encurtador de Link - API Serverless

Um projeto serverless para encurtar e redirecionar URLs, desenvolvido usando Serverless Framework e hospedado na AWS.

## 🚀 Tecnologias Utilizadas

- **Serverless Framework**: Para gerenciar a infraestrutura como código.
- **AWS Lambda**: Para executar as funções serverless.
- **AWS API Gateway**: Para expor as rotas HTTP.
- **Node.js**: Como ambiente de execução.
- **MongoDB**: Para armazenar dados de URLs encurtadas.
- **serverless-offline**: Para rodar a aplicação localmente.

---

## 📋 Documentação das Rotas

### POST `/`

**Descrição**: Encurta uma URL e retorna um código curto que pode ser usado para redirecionamento.

**Body da Requisição**:

```json
{
  "url": "https://www.exemplo.com"
}
```

### GET `/{shortCode}`

**Descrição**: Redireciona o usuário para a URL original associada ao código curto.

**Parâmetro de Rota**:

- `shortCode`: Código curto gerado para a URL.

**Exemplo**:

- Requisição: `GET /abc123`
- Resposta: Redireciona para `https://www.exemplo.com`.

---

## 🛠️ Como Clonar e Rodar o Projeto

Siga os passos abaixo para rodar este projeto localmente, mesmo que você não tenha nada instalado.

### Pré-requisitos

- Node.js (versão 20.x ou superior)
- NPM ou Yarn
- MongoDB (local ou na nuvem)

### Passo a Passo

1. **Clone o repositório**:

```bash
git clone https://github.com/seu-usuario/encurtador-de-link.git
cd encurtador-de-link
```

2. **Instale o Serverless Framework** (se ainda não tiver instalado):

```bash
npm install -g serverless
```

3. **Instale as dependências do projeto:**

```bash
npm install
```

4. **Configure o MongoDB:** Certifique-se de que o MongoDB esteja rodando localmente ou configure o arquivo serverless.yml para usar uma instância na nuvem. O banco de dados padrão esperado é mongodb://localhost:27017/encurtador-de-link.

5. **Execute o projeto localmente:** Inicie o servidor local usando o plugin serverless-offline:

```bash
serverless offline
```

6. **Testando as rotas**:
   - Use um cliente HTTP como Postman, Insomnia ou `curl` para testar as rotas.
   - Encurtar uma URL:
     ```bash
     curl -X POST http://localhost:3000/ -H "Content-Type: application/json" -d '{"url": "https://www.exemplo.com"}'
     ```
   - Redirecionar usando o código curto:
     Abra no navegador: `http://localhost:3000/{shortCode}`.

---

## 🌍 Deploy

Para realizar o deploy na AWS, certifique-se de ter [configurado as credenciais](https://docs.aws.amazon.com/pt_br/cli/v1/userguide/cli-chap-configure.html) da AWS no seu ambiente. Depois, execute:

```bash
serverless deploy
```

## 👤 Autor

- **Nome**: Jelson Rodrigues
- **GitHub**: [https://github.com/JelsonJr](https://github.com/JelsonJr)
- **LinkedIn**: [https://www.linkedin.com/in/jelson-rodrigues](https://www.linkedin.com/in/jelson-rodrigues-53333a229/)
