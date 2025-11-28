# 📸 Guia Rápido: Nomenclatura de Imagens

## 🌟 Produto em Destaque

```
destaque.jpg       ← Imagem principal (SEMPRE)
destaque_1.jpg     ← Imagem 2 (opcional)
destaque_2.jpg     ← Imagem 3 (opcional)
destaque_3.jpg     ← Imagem 4 (opcional)
destaque_4.jpg     ← Imagem 5 (opcional)
destaque_5.jpg     ← Imagem 6 (opcional)
destaque_6.jpg     ← Imagem 7 (opcional)
destaque_7.jpg     ← Imagem 8 (opcional)
```

## 📦 Produtos Regulares

### Padrão: `[CÓDIGO].jpg` e `[CÓDIGO]_N.jpg`

**Exemplo 1: Produto 503384716**
```
503384716.jpg      ← Imagem principal (SEMPRE)
503384716_1.jpg    ← Imagem 2 (opcional)
503384716_2.jpg    ← Imagem 3 (opcional)
503384716_3.jpg    ← Imagem 4 (opcional)
503384716_4.jpg    ← Imagem 5 (opcional)
503384716_5.jpg    ← Imagem 6 (opcional)
503384716_6.jpg    ← Imagem 7 (opcional)
503384716_7.jpg    ← Imagem 8 (opcional)
```

**Exemplo 2: Produto BAP-002**
```
BAP-002.jpg        ← Imagem principal (SEMPRE)
BAP-002_1.jpg      ← Imagem 2 (opcional)
BAP-002_2.jpg      ← Imagem 3 (opcional)
```

**Exemplo 3: Produto 789456123**
```
789456123.jpg      ← Imagem principal (SEMPRE)
789456123_1.jpg    ← Imagem 2 (opcional)
789456123_2.jpg    ← Imagem 3 (opcional)
789456123_3.jpg    ← Imagem 4 (opcional)
```

## ✅ Regras Importantes

1. **Imagem Principal**: SEMPRE use `[CÓDIGO].jpg` (sem underscore)
2. **Imagens Adicionais**: Use `[CÓDIGO]_1.jpg`, `[CÓDIGO]_2.jpg`, etc.
3. **Numeração**: Comece do `_1` (não `_0`)
4. **Máximo**: Até 8 imagens por produto (principal + 7 adicionais)
5. **Formato**: Prefira `.jpg` (pode usar `.png` se necessário)
6. **Minúsculas**: Use sempre letras minúsculas nos nomes

## 🔢 Checklist de Nomenclatura

Antes de adicionar imagens, verifique:

- [ ] Código do produto está correto
- [ ] Imagem principal não tem underscore (`503384716.jpg` ✅)
- [ ] Imagens adicionais começam com `_1` (não `_0`)
- [ ] Numeração é sequencial (`_1`, `_2`, `_3`...)
- [ ] Não há espaços no nome do arquivo
- [ ] Extensão é `.jpg` ou `.png`
- [ ] Todas as imagens estão na pasta `images/`

## 📋 Template para Copiar

### Para Produto Novo

```
# Substitua CÓDIGO pelo código real do produto

CÓDIGO.jpg         # Imagem principal
CÓDIGO_1.jpg       # Imagem 2
CÓDIGO_2.jpg       # Imagem 3
CÓDIGO_3.jpg       # Imagem 4
CÓDIGO_4.jpg       # Imagem 5
CÓDIGO_5.jpg       # Imagem 6
CÓDIGO_6.jpg       # Imagem 7
CÓDIGO_7.jpg       # Imagem 8
```

### Para Destaque

```
destaque.jpg       # Imagem principal
destaque_1.jpg     # Imagem 2
destaque_2.jpg     # Imagem 3
destaque_3.jpg     # Imagem 4
destaque_4.jpg     # Imagem 5
destaque_5.jpg     # Imagem 6
destaque_6.jpg     # Imagem 7
destaque_7.jpg     # Imagem 8
```

## ❌ Erros Comuns

| ❌ ERRADO | ✅ CORRETO |
|-----------|------------|
| `503384716_0.jpg` | `503384716.jpg` |
| `503384716 1.jpg` | `503384716_1.jpg` |
| `503384716-1.jpg` | `503384716_1.jpg` |
| `Produto 503384716.jpg` | `503384716.jpg` |
| `503384716_01.jpg` | `503384716_1.jpg` |
| `503384716.JPG` | `503384716.jpg` |

## 🚀 Workflow Rápido

1. **Receber fotos** do produto (ex: código 503384716)
2. **Renomear** seguindo o padrão:
   - Primeira foto → `503384716.jpg`
   - Segunda foto → `503384716_1.jpg`
   - Terceira foto → `503384716_2.jpg`
   - E assim por diante...
3. **Mover** todas para `landing-page/images/`
4. **Adicionar** ao `produtos.json`:
   ```json
   "images": [
     "503384716.jpg",
     "503384716_1.jpg",
     "503384716_2.jpg"
   ]
   ```
5. **Testar** no navegador

## 💡 Dicas

- Use ferramentas de renomeação em lote para economizar tempo
- Mantenha as fotos originais em backup antes de renomear
- Otimize as imagens antes de fazer upload
- Verifique se todas as imagens têm o mesmo código
- Teste sempre após adicionar novas imagens

---

**Lembre-se:** A consistência é fundamental! Sempre siga o mesmo padrão.
