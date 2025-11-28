# Sistema de Gerenciamento de Produtos - Begônia Arte e Presentes

## 📋 Visão Geral

Este sistema centraliza todos os dados de produtos em um único arquivo JSON (`produtos.json`), facilitando a adição, edição e gerenciamento de produtos sem precisar editar múltiplos arquivos HTML.

## 🗂️ Estrutura de Arquivos

### Arquivos Principais

- **`produtos.json`** - Banco de dados de produtos (JSON)
- **`product-manager.js`** - Gerenciador de produtos (JavaScript)
- **`images/`** - Pasta com todas as imagens dos produtos

### Padrão de Nomenclatura de Imagens

#### Produto em Destaque
```
destaque.jpg       # Imagem principal
destaque_1.jpg     # Imagem adicional 1
destaque_2.jpg     # Imagem adicional 2
destaque_3.jpg     # Imagem adicional 3
...
destaque_8.jpg     # Imagem adicional 8 (máximo)
```

#### Produtos Regulares
```
[CÓDIGO].jpg       # Imagem principal (ex: 503384716.jpg)
[CÓDIGO]_1.jpg     # Imagem adicional 1
[CÓDIGO]_2.jpg     # Imagem adicional 2
[CÓDIGO]_3.jpg     # Imagem adicional 3
...
[CÓDIGO]_8.jpg     # Imagem adicional 8 (máximo)
```

**Exemplos:**
- `503384716.jpg` - Imagem principal do produto 503384716
- `503384716_1.jpg` - Segunda imagem do produto
- `503384716_2.jpg` - Terceira imagem do produto

## 📝 Estrutura do produtos.json

```json
{
  "destaque": {
    "code": "BAP-DM-001",
    "title": "Nome do Produto em Destaque",
    "shortDescription": "Descrição curta (1-2 linhas)",
    "longDescription": "Descrição longa e detalhada...",
    "badge": "★ Destaque",
    "featured": true,
    "images": [
      "destaque.jpg",
      "destaque_1.jpg",
      "destaque_2.jpg"
    ]
  },
  "produtos": [
    {
      "code": "503384716",
      "title": "Nome do Produto",
      "shortDescription": "Descrição curta",
      "longDescription": "Descrição longa...",
      "badge": "✨ Popular",
      "featured": false,
      "images": [
        "503384716.jpg",
        "503384716_1.jpg",
        "503384716_2.jpg"
      ]
    }
  ]
}
```

### Campos Obrigatórios

| Campo | Tipo | Descrição |
|-------|------|-----------|
| `code` | String | Código único do produto (ex: "503384716") |
| `title` | String | Nome do produto |
| `shortDescription` | String | Descrição curta (1-2 linhas) |
| `longDescription` | String | Descrição detalhada (use `\n` para quebras de linha) |
| `badge` | String | Badge do produto (ex: "✨ Popular") |
| `featured` | Boolean | Se é produto em destaque (true/false) |
| `images` | Array | Lista de nomes de arquivos de imagem |

### Badges Disponíveis

- `"★ Destaque"` - Produto em destaque
- `"✨ Popular"` - Produto popular
- `"🌟 Novo"` - Lançamento
- `"💝 Exclusivo"` - Peça exclusiva
- `"🔥 Promoção"` - Em promoção
- Ou crie seus próprios!

## ➕ Como Adicionar um Novo Produto

### Passo 1: Preparar as Imagens

1. Renomeie as imagens seguindo o padrão:
   ```
   503384716.jpg      # Imagem principal
   503384716_1.jpg    # Imagem 2
   503384716_2.jpg    # Imagem 3
   503384716_3.jpg    # Imagem 4
   ...
   ```

2. Coloque todas as imagens na pasta `images/`

3. **Recomendações de Imagem:**
   - Resolução mínima: 1200px de largura
   - Formato: JPG ou PNG
   - Otimize para web (use TinyPNG ou similar)
   - Proporção: Quadrada (1:1) ou 4:3

### Passo 2: Adicionar ao produtos.json

Abra `produtos.json` e adicione o novo produto no array `produtos`:

```json
{
  "code": "503384716",
  "title": "Conjunto Jardim Secreto",
  "shortDescription": "Pratos decorativos com motivos de jardim pintados à mão.",
  "longDescription": "Este conjunto exclusivo foi inspirado nos jardins secretos das fazendas brasileiras.\n\nCada peça é pintada à mão com esmaltes cerâmicos de alta qualidade.\n\nPerfeito para ocasiões especiais ou uso diário.",
  "badge": "🌟 Novo",
  "featured": false,
  "images": [
    "503384716.jpg",
    "503384716_1.jpg",
    "503384716_2.jpg",
    "503384716_3.jpg"
  ]
}
```

**⚠️ IMPORTANTE:**
- Adicione uma vírgula (`,`) após o produto anterior
- Não adicione vírgula após o último produto
- Use `\n` para quebras de linha na descrição longa
- O código deve ser único

### Passo 3: Testar

1. Salve o arquivo `produtos.json`
2. Atualize a página no navegador (F5)
3. Verifique se o produto aparece corretamente
4. Teste a navegação para a página de detalhes

## ✏️ Como Editar um Produto Existente

1. Abra `produtos.json`
2. Localize o produto pelo `code`
3. Edite os campos desejados:
   - `title` - Nome do produto
   - `shortDescription` - Descrição curta
   - `longDescription` - Descrição longa
   - `badge` - Badge do produto
   - `images` - Lista de imagens

4. Salve e atualize o navegador

## 🌟 Como Atualizar o Produto em Destaque

1. Abra `produtos.json`
2. Localize a seção `"destaque"`
3. Edite os campos conforme necessário
4. Atualize as imagens seguindo o padrão `destaque.jpg`, `destaque_1.jpg`, etc.
5. Salve e atualize o navegador

## 🖼️ Como Adicionar Mais Imagens a um Produto

### Método 1: Produto Novo

Ao criar um produto, adicione todas as imagens no array `images`:

```json
"images": [
  "503384716.jpg",
  "503384716_1.jpg",
  "503384716_2.jpg",
  "503384716_3.jpg",
  "503384716_4.jpg",
  "503384716_5.jpg",
  "503384716_6.jpg",
  "503384716_7.jpg"
]
```

### Método 2: Produto Existente

1. Adicione as novas imagens na pasta `images/` seguindo o padrão
2. Abra `produtos.json`
3. Localize o produto
4. Adicione os nomes das novas imagens no array `images`:

```json
"images": [
  "BAP-002.jpg",
  "BAP-002_1.jpg",  // ← Nova imagem
  "BAP-002_2.jpg"   // ← Nova imagem
]
```

**Limite:** Até 8 imagens por produto

## 🔄 Workflow Completo: Novo Produto

### 1. Receber Imagens do Produto

Você recebe as fotos do produto (ex: código 503384716)

### 2. Processar Imagens

```bash
# Renomear arquivos
foto1.jpg → 503384716.jpg
foto2.jpg → 503384716_1.jpg
foto3.jpg → 503384716_2.jpg
foto4.jpg → 503384716_3.jpg
```

### 3. Otimizar Imagens

Use ferramentas como:
- [TinyPNG](https://tinypng.com/) - Compressão online
- [Squoosh](https://squoosh.app/) - Compressão e redimensionamento
- Photoshop/GIMP - Edição profissional

### 4. Mover para Pasta

Copie todas as imagens para `landing-page/images/`

### 5. Adicionar ao JSON

Edite `produtos.json` e adicione:

```json
{
  "code": "503384716",
  "title": "Nome do Produto",
  "shortDescription": "Descrição curta aqui",
  "longDescription": "Descrição longa aqui.\n\nSegundo parágrafo.\n\nTerceiro parágrafo.",
  "badge": "🌟 Novo",
  "featured": false,
  "images": [
    "503384716.jpg",
    "503384716_1.jpg",
    "503384716_2.jpg",
    "503384716_3.jpg"
  ]
}
```

### 6. Validar JSON

Use um validador JSON online:
- [JSONLint](https://jsonlint.com/)
- [JSON Formatter](https://jsonformatter.curiousconcept.com/)

### 7. Testar

1. Abra o site no navegador
2. Verifique se o produto aparece
3. Teste a página de detalhes
4. Verifique todas as imagens

## 🛠️ Ferramentas Úteis

### Validação JSON
- [JSONLint](https://jsonlint.com/) - Validador online
- [JSON Editor Online](https://jsoneditoronline.org/) - Editor visual

### Otimização de Imagens
- [TinyPNG](https://tinypng.com/) - Compressão PNG/JPG
- [Squoosh](https://squoosh.app/) - Compressão avançada
- [ImageOptim](https://imageoptim.com/) - App desktop (Mac)

### Renomeação em Lote
- **Windows**: PowerShell ou Bulk Rename Utility
- **Mac/Linux**: Terminal com comando `mv`

## ❌ Erros Comuns e Soluções

### Erro: Produto não aparece

**Causa:** JSON inválido
**Solução:** Valide o JSON em [JSONLint](https://jsonlint.com/)

### Erro: Imagem não carrega

**Causa:** Nome de arquivo incorreto
**Solução:** Verifique se o nome no JSON corresponde ao arquivo em `images/`

### Erro: Vírgula faltando ou extra

**Causa:** Sintaxe JSON incorreta
**Solução:** 
- Adicione vírgula entre objetos: `}, {`
- Não adicione vírgula após o último item: `}]`

### Erro: Quebra de linha não funciona

**Causa:** Uso incorreto de quebras de linha
**Solução:** Use `\n` para quebras de linha no JSON:
```json
"longDescription": "Parágrafo 1.\n\nParágrafo 2.\n\nParágrafo 3."
```

## 📊 Exemplo Completo

```json
{
  "destaque": {
    "code": "BAP-DM-001",
    "title": "Conjunto Tajine Botânico",
    "shortDescription": "A fusão perfeita entre tradição e arte brasileira.",
    "longDescription": "Peça única criada por nossas artesãs.\n\nProcesso de uma semana.\n\nGarantia de qualidade.",
    "badge": "★ Destaque",
    "featured": true,
    "images": [
      "destaque.jpg",
      "destaque_1.jpg",
      "destaque_2.jpg"
    ]
  },
  "produtos": [
    {
      "code": "503384716",
      "title": "Conjunto Jardim Secreto",
      "shortDescription": "Pratos decorativos com motivos de jardim.",
      "longDescription": "Inspirado nos jardins brasileiros.\n\nPintado à mão.\n\nCerâmica de alta qualidade.",
      "badge": "🌟 Novo",
      "featured": false,
      "images": [
        "503384716.jpg",
        "503384716_1.jpg",
        "503384716_2.jpg",
        "503384716_3.jpg",
        "503384716_4.jpg"
      ]
    },
    {
      "code": "BAP-002",
      "title": "Coleção Oliveira",
      "shortDescription": "Conjunto com folhas de oliveira.",
      "longDescription": "Técnicas ancestrais.\n\nCores harmoniosas.\n\nFuncional e decorativo.",
      "badge": "✨ Popular",
      "featured": false,
      "images": [
        "produto-1.jpg"
      ]
    }
  ]
}
```

## 🔐 Boas Práticas

### Códigos de Produto
- ✅ Use códigos únicos e consistentes
- ✅ Prefira números ou padrão BAP-XXX
- ❌ Não use espaços ou caracteres especiais

### Imagens
- ✅ Otimize antes de fazer upload
- ✅ Use nomes descritivos e consistentes
- ✅ Mantenha proporções similares
- ❌ Não use imagens muito grandes (>2MB)

### Descrições
- ✅ Seja descritivo e detalhado
- ✅ Use quebras de linha (`\n`) para legibilidade
- ✅ Conte a história do produto
- ❌ Não use HTML nas descrições

### JSON
- ✅ Valide sempre após editar
- ✅ Use indentação consistente (2 ou 4 espaços)
- ✅ Faça backup antes de grandes mudanças
- ❌ Não edite diretamente em produção

## 📞 Suporte

Para dúvidas ou problemas:
1. Verifique este guia primeiro
2. Valide o JSON em [JSONLint](https://jsonlint.com/)
3. Verifique os nomes dos arquivos de imagem
4. Consulte o console do navegador (F12) para erros

---

**Última atualização:** 2024
**Versão do Sistema:** 1.0
