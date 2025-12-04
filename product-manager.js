/**
 * Product Manager - Carrega produtos de produtos.json
 */

const ProductManager = {
    destaque: null,
    produtos: [],
    _loaded: false,

    /**
     * Carrega produtos do JSON
     */
    async init() {
        if (this._loaded) return;

        try {
            const response = await fetch('produtos.json');
            const data = await response.json();

            this.destaque = data.destaque;
            this.produtos = data.produtos;
            this._loaded = true;

            console.log('✅ ProductManager: carregou', this.produtos.length + 1, 'produtos de produtos.json');
        } catch (error) {
            console.error('❌ ProductManager: erro ao carregar produtos.json', error);
        }
    },

    /**
     * Busca produto por código
     */
    getByCode(code) {
        if (this.destaque && this.destaque.code === code) {
            return this.destaque;
        }
        return this.produtos.find(p => p.code === code) || null;
    },

    /**
     * Retorna todos os produtos (sem destaque)
     */
    getAll() {
        return this.produtos;
    },

    /**
     * Retorna todos os produtos incluindo destaque
     */
    getAllWithDestaque() {
        return [this.destaque, ...this.produtos];
    },

    /**
     * Retorna o produto destaque
     */
    getDestaque() {
        return this.destaque;
    },

    /**
     * Retorna produtos para vitrine
     */
    getVitrine(limit = 6) {
        return this.produtos.slice(0, limit);
    },

    /**
     * Retorna caminho da imagem
     */
    getImagePath(product, index = 0) {
        if (!product || !product.images || product.images.length === 0) {
            return 'images/placeholder.jpg';
        }
        const imageName = product.images[index] || product.images[0];
        return `images/${imageName}`;
    },

    /**
     * Retorna todos os caminhos de imagem
     */
    getAllImagePaths(product) {
        if (!product || !product.images) {
            return ['images/placeholder.jpg'];
        }
        return product.images.map(img => `images/${img}`);
    },

    /**
     * Retorna contagem total de produtos
     */
    getCount() {
        return this.produtos.length + (this.destaque ? 1 : 0);
    }
};
