# Guia de Gerenciamento de Produtos - Begônia Arte e Presentes

## Como Adicionar ou Editar Produtos

### 1. Estrutura de Dados dos Produtos

Os produtos são definidos no arquivo `detalhes.html` dentro do objeto JavaScript `products`. Cada produto possui a seguinte estrutura:

```javascript
'CODIGO-DO-PRODUTO': {
    code: 'CODIGO-DO-PRODUTO',
    title: 'Nome do Produto',
    shortDescription: 'Descrição curta (1-2 linhas)',
    description: `Descrição longa e detalhada.
    
    Pode ter múltiplos parágrafos.
    
    Use quebras de linha para separar parágrafos.`,
    images: [
        'images/imagem1.jpg',
        'images/imagem2.jpg',
        'images/imagem3.jpg',
        // ... até 8 imagens
    ]
}
```

### 2. Adicionando um Novo Produto

#### Passo 1: Adicionar o produto em `index.html`

Localize a seção `<div class="produtos-grid">` e adicione um novo card:

```html
<div class="produto-card" data-produto="CODIGO-NOVO">
    <div class="produto-image">
        <img src="images/produto-novo.jpg" alt="Descrição do produto">
    </div>
    <div class="produto-info">
        <h3>Nome do Produto</h3>
        <span class="codigo">CODIGO-NOVO</span>
    </div>
    <div class="produto-overlay"><a href="detalhes.html?produto=CODIGO-NOVO">Ver Detalhes</a></div>
</div>
```

#### Passo 2: Adicionar os dados do produto em `detalhes.html`

No arquivo `detalhes.html`, localize o objeto `products` no JavaScript (dentro da tag `<script>`) e adicione:

```javascript
'CODIGO-NOVO': {
    code: 'CODIGO-NOVO',
    title: 'Nome do Produto',
    shortDescription: 'Uma descrição curta e atraente do produto.',
    description: `Descrição detalhada do produto.
    
    Explique a história, o processo de criação, materiais utilizados, etc.
    
    Pode incluir múltiplos parágrafos para uma descrição completa.`,
    images: [
        'images/produto-novo-1.jpg',
        'images/produto-novo-2.jpg',
        'images/produto-novo-3.jpg'
        // Adicione até 8 imagens
    ]
},
```

### 3. Adicionando Múltiplas Imagens

A página de detalhes suporta até **8 imagens** por produto. Para adicionar mais imagens:

1. Coloque as imagens na pasta `images/`
2. Adicione os caminhos no array `images` do produto em `detalhes.html`

Exemplo com 5 imagens:

```javascript
images: [
    'images/produto-001-frente.jpg',
    'images/produto-001-verso.jpg',
    'images/produto-001-lateral.jpg',
    'images/produto-001-detalhe.jpg',
    'images/produto-001-uso.jpg'
]
```

### 4. Editando um Produto Existente

Para editar um produto, localize o código do produto no objeto `products` em `detalhes.html` e modifique:

- **Título**: Altere o campo `title`
- **Descrição Curta**: Altere o campo `shortDescription`
- **Descrição Longa**: Altere o campo `description`
- **Imagens**: Adicione, remova ou reordene itens no array `images`

### 5. Dicas de Boas Práticas

#### Imagens
- Use imagens de alta qualidade (mínimo 1200px de largura)
- Mantenha proporções consistentes (quadradas ou 4:3)
- Otimize as imagens para web (use ferramentas como TinyPNG)
- Nomeie as imagens de forma descritiva: `produto-nome-angulo.jpg`

#### Descrições
- **Descrição Curta**: 1-2 frases que capturam a essência do produto
- **Descrição Longa**: 
  - Conte a história do produto
  - Explique o processo de criação
  - Destaque materiais e técnicas
  - Mencione usos e cuidados
  - Use quebras de linha para separar parágrafos

#### Códigos de Produto
- Use um padrão consistente (ex: `BAP-XXX`)
- Mantenha os códigos únicos
- Use números sequenciais para facilitar organização

### 6. Exemplo Completo

```javascript
'BAP-008': {
    code: 'BAP-008',
    title: 'Conjunto Jardim Secreto',
    shortDescription: 'Pratos decorativos com motivos de jardim pintados à mão, trazendo a natureza para sua mesa.',
    description: `Este conjunto exclusivo foi inspirado nos jardins secretos das fazendas brasileiras, onde cada flor conta uma história. Nossas artesãs dedicaram semanas para criar cada detalhe, desde as pétalas delicadas até as folhagens que emolduram cada peça.

O processo começa com a seleção cuidadosa da argila, seguida pela modelagem manual que garante a forma orgânica única de cada prato. Após a primeira queima, cada peça é pintada à mão com esmaltes cerâmicos de alta qualidade, em tons que variam do verde-musgo ao rosa-antigo.

Perfeito para ocasiões especiais ou para transformar o dia a dia em momentos únicos. Cada conjunto é acompanhado de certificado de autenticidade assinado pela artesã.`,
    images: [
        'images/jardim-secreto-conjunto.jpg',
        'images/jardim-secreto-detalhe-1.jpg',
        'images/jardim-secreto-detalhe-2.jpg',
        'images/jardim-secreto-mesa.jpg',
        'images/jardim-secreto-close.jpg'
    ]
}
```

### 7. Testando as Alterações

Após fazer alterações:

1. Salve os arquivos
2. Atualize a página no navegador (F5 ou Ctrl+R)
3. Teste a navegação do card para a página de detalhes
4. Verifique se todas as imagens carregam corretamente
5. Teste a galeria de imagens clicando nas miniaturas

### 8. Estrutura de Arquivos

```
landing-page/
├── index.html          # Página principal com grid de produtos
├── detalhes.html       # Página de detalhes do produto
├── images/             # Pasta com todas as imagens
│   ├── logo.jpg
│   ├── produto-1.jpg
│   ├── produto-2.jpg
│   └── ...
└── PRODUTOS.md         # Este arquivo
```

## Suporte

Para dúvidas ou problemas, consulte os comentários no código ou entre em contato com o desenvolvedor.
