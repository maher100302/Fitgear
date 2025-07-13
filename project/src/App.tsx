import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeaturedProducts } from './components/FeaturedProducts';
import { ProductGrid } from './components/ProductGrid';
import { Cart } from './components/Cart';
import { ProductModal } from './components/ProductModal';
import { Footer } from './components/Footer';
import { CartProvider } from './context/CartContext';
import { products } from './data/products';
import { Product } from './types';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isProductModalOpen, setIsProductModalOpen] = useState(false);

  const handleViewDetails = (product: Product) => {
    setSelectedProduct(product);
    setIsProductModalOpen(true);
  };

  const closeProductModal = () => {
    setIsProductModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-white">
        <Header onCartClick={() => setIsCartOpen(true)} />
        
        <main>
          <Hero />
          <FeaturedProducts products={products} onViewDetails={handleViewDetails} />
          <ProductGrid products={products} onViewDetails={handleViewDetails} />
        </main>
        
        <Footer />
        
        <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />
        
        <ProductModal
          product={selectedProduct}
          isOpen={isProductModalOpen}
          onClose={closeProductModal}
        />
      </div>
    </CartProvider>
  );
}

export default App;