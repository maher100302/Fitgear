import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProductCard } from './ProductCard';
import { Product } from '../types';

interface FeaturedProductsProps {
  products: Product[];
  onViewDetails: (product: Product) => void;
}

export const FeaturedProducts: React.FC<FeaturedProductsProps> = ({ products, onViewDetails }) => {
  const featuredProducts = products.filter(product => product.isFeatured).slice(0, 4);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Handpicked premium equipment for serious athletes
            </p>
          </div>
          
          <button className="hidden md:flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200">
            View All
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>

        {/* Mobile View All Button */}
        <div className="md:hidden text-center mt-8">
          <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200">
            View All Products
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};