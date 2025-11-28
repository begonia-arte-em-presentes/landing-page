/**
 * Product Manager - Centralized product data management
 * Loads products from produtos.json and provides helper functions
 */

class ProductManager {
    constructor() {
        this.products = [];
        this.destaque = null;
        this.loaded = false;
    }

    /**
     * Load products from JSON file
     * @returns {Promise<void>}
     */
    async loadProducts() {
        try {
            const response = await fetch('produtos.json');
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            
            this.destaque = data.destaque;
            this.products = data.produtos;
            this.loaded = true;
            
            console.log('✅ Products loaded successfully:', this.products.length, 'products');
            return data;
        } catch (error) {
            console.error('❌ Error loading products:', error);
            throw error;
        }
    }

    /**
     * Get product by code
     * @param {string} code - Product code (e.g., 'BAP-002')
     * @returns {Object|null} Product object or null if not found
     */
    getProductByCode(code) {
        // Check if it's the featured product
        if (this.destaque && this.destaque.code === code) {
            return this.destaque;
        }
        
        // Search in regular products
        return this.products.find(p => p.code === code) || null;
    }

    /**
     * Get all products
     * @returns {Array} Array of all products
     */
    getAllProducts() {
        return this.products;
    }

    /**
     * Get featured/destaque product
     * @returns {Object|null} Featured product or null
     */
    getFeaturedProduct() {
        return this.destaque;
    }

    /**
     * Get products with pagination
     * @param {number} page - Page number (1-indexed)
     * @param {number} perPage - Products per page
     * @returns {Object} Object with products array and pagination info
     */
    getProductsPaginated(page = 1, perPage = 6) {
        const startIndex = (page - 1) * perPage;
        const endIndex = startIndex + perPage;
        const paginatedProducts = this.products.slice(startIndex, endIndex);
        
        return {
            products: paginatedProducts,
            currentPage: page,
            totalPages: Math.ceil(this.products.length / perPage),
            totalProducts: this.products.length,
            hasNext: endIndex < this.products.length,
            hasPrev: page > 1
        };
    }

    /**
     * Get image path for a product
     * @param {Object} product - Product object
     * @param {number} index - Image index (0-based)
     * @returns {string} Image path
     */
    getImagePath(product, index = 0) {
        if (!product || !product.images || product.images.length === 0) {
            return 'images/placeholder.jpg';
        }
        
        const imageName = product.images[index] || product.images[0];
        return `images/${imageName}`;
    }

    /**
     * Get all image paths for a product
     * @param {Object} product - Product object
     * @returns {Array<string>} Array of image paths
     */
    getAllImagePaths(product) {
        if (!product || !product.images) {
            return ['images/placeholder.jpg'];
        }
        
        return product.images.map(img => `images/${img}`);
    }

    /**
     * Format product for display
     * @param {Object} product - Product object
     * @returns {Object} Formatted product with full image paths
     */
    formatProduct(product) {
        return {
            ...product,
            mainImage: this.getImagePath(product, 0),
            allImages: this.getAllImagePaths(product),
            imageCount: product.images ? product.images.length : 0
        };
    }

    /**
     * Search products by title or description
     * @param {string} query - Search query
     * @returns {Array} Matching products
     */
    searchProducts(query) {
        const lowerQuery = query.toLowerCase();
        return this.products.filter(product => 
            product.title.toLowerCase().includes(lowerQuery) ||
            product.shortDescription.toLowerCase().includes(lowerQuery) ||
            product.longDescription.toLowerCase().includes(lowerQuery) ||
            product.code.toLowerCase().includes(lowerQuery)
        );
    }

    /**
     * Get products by badge
     * @param {string} badge - Badge text (e.g., '✨ Popular')
     * @returns {Array} Products with matching badge
     */
    getProductsByBadge(badge) {
        return this.products.filter(product => product.badge === badge);
    }

    /**
     * Check if products are loaded
     * @returns {boolean} True if loaded
     */
    isLoaded() {
        return this.loaded;
    }
}

// Create global instance
const productManager = new ProductManager();

// Export for use in other scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = ProductManager;
}
