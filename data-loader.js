/**
 * Begônia Data Loader
 * Carrega dados dos arquivos JSON para uso dinâmico nas páginas
 */

class BegoniaDataLoader {
    constructor() {
        this.produtos = null;
        this.artesas = null;
        this.destaque = null;
    }

    /**
     * Carrega todos os dados necessários
     */
    async loadAll() {
        await Promise.all([
            this.loadProdutos(),
            this.loadArtesas()
        ]);
        return this;
    }

    /**
     * Carrega produtos do JSON
     */
    async loadProdutos() {
        try {
            const response = await fetch('produtos.json');
            const data = await response.json();
            this.produtos = data.produtos || [];
            this.destaque = data.destaque || null;
            return data;
        } catch (error) {
            console.error('Erro ao carregar produtos:', error);
            return null;
        }
    }

    /**
     * Carrega artesãs do JSON
     */
    async loadArtesas() {
        try {
            const response = await fetch('artesas.json');
            const data = await response.json();
            this.artesas = data.artesas || [];
            return data;
        } catch (error) {
            console.error('Erro ao carregar artesãs:', error);
            return null;
        }
    }

    /**
     * Busca um produto pelo código
     */
    getProdutoByCode(code) {
        if (this.destaque && this.destaque.code === code) {
            return this.destaque;
        }
        return this.produtos?.find(p => p.code === code) || null;
    }

    /**
     * Busca uma artesã pelo ID
     */
    getArtesaById(id) {
        return this.artesas?.find(a => a.id === id) || null;
    }

    /**
     * Retorna os primeiros N produtos para a vitrine
     */
    getProdutosVitrine(limit = 6) {
        return this.produtos?.slice(0, limit) || [];
    }

    /**
     * Retorna todos os produtos
     */
    getAllProdutos() {
        const all = [...(this.produtos || [])];
        if (this.destaque) {
            all.unshift(this.destaque);
        }
        return all;
    }

    /**
     * Retorna todas as artesãs
     */
    getAllArtesas() {
        return this.artesas || [];
    }
}

// Instância global
const dataLoader = new BegoniaDataLoader();

// Export para uso em módulos
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { BegoniaDataLoader, dataLoader };
}
