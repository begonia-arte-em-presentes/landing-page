/**
 * Artesa Manager - Carrega artesãs de artesas.json
 */

const ArtesaManager = {
    artesas: [],
    _loaded: false,

    // Mapa de cores para gradientes
    colorMap: {
        'coral': 'linear-gradient(135deg, var(--coral), var(--terracotta))',
        'teal': 'linear-gradient(135deg, var(--teal), var(--teal-light))',
        'olive': 'linear-gradient(135deg, var(--olive), var(--olive-light))'
    },

    /**
     * Carrega artesãs do JSON
     */
    async init() {
        if (this._loaded) return;

        try {
            const response = await fetch('artesas.json');
            const data = await response.json();

            this.artesas = data.artesas;
            this._loaded = true;

            console.log('✅ ArtesaManager: carregou', this.artesas.length, 'artesãs de artesas.json');
        } catch (error) {
            console.error('❌ ArtesaManager: erro ao carregar artesas.json', error);
        }
    },

    /**
     * Busca artesã por ID
     */
    getById(id) {
        return this.artesas.find(a => a.id === id) || null;
    },

    /**
     * Retorna todas as artesãs
     */
    getAll() {
        return this.artesas;
    },

    /**
     * Retorna contagem de artesãs
     */
    getCount() {
        return this.artesas.length;
    },

    /**
     * Retorna gradiente de fundo para artesã
     */
    getGradient(artesaOrCor) {
        const cor = typeof artesaOrCor === 'string' ? artesaOrCor : artesaOrCor?.cor;
        return this.colorMap[cor] || this.colorMap['coral'];
    },

    /**
     * Retorna caminho da imagem
     */
    getImagePath(artesa) {
        if (!artesa || !artesa.foto) return '';
        return `images/${artesa.foto}`;
    },

    /**
     * Retorna primeiro nome
     */
    getFirstName(artesa) {
        if (!artesa || !artesa.nome) return '';
        return artesa.nome.split(' ')[0];
    },

    /**
     * Verifica se tem biografia
     */
    hasBio(artesa) {
        return !!(artesa && (artesa.bio1 || artesa.bio2 || artesa.bio3));
    },

    /**
     * Verifica se tem galeria
     */
    hasGallery(artesa) {
        return !!(artesa && artesa.galeria && artesa.galeria.length > 0);
    },

    /**
     * Retorna seções da biografia
     */
    getBioSections(artesa) {
        return [
            {
                title: 'Como Comecei na Arte',
                content: artesa?.bio1 || '',
                icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z'
            },
            {
                title: 'Minha Técnica e Inspiração',
                content: artesa?.bio2 || '',
                icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z'
            },
            {
                title: 'O Que a Begônia Representa',
                content: artesa?.bio3 || '',
                icon: 'M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z'
            }
        ];
    },

    /**
     * Retorna SVG placeholder para foto
     */
    getPlaceholderSVG() {
        return `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
            <circle cx="12" cy="8" r="4"/>
            <path d="M20 21a8 8 0 0 0-16 0"/>
        </svg>`;
    }
};
