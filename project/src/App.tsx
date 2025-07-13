import { useState } from 'react';
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
import { ContactForm } from './components/ContactForm';

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
          <section id="home">
            <Hero />
          </section>
          <section id="products" className="py-12">
            <FeaturedProducts products={products} onViewDetails={handleViewDetails} />
            <ProductGrid products={products} onViewDetails={handleViewDetails} />
          </section>
          <section id="categories" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-center mb-12">Shop by Category</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    name: 'Strength Training',
                    description: 'Build muscle and increase strength with our premium equipment',
                    icon: '💪',
                    count: '24 Products'
                  },
                  {
                    name: 'Cardio Equipment',
                    description: 'Boost your endurance and burn calories effectively',
                    icon: '🏃',
                    count: '18 Products'
                  },
                  {
                    name: 'Yoga & Pilates',
                    description: 'Enhance flexibility and find your balance',
                    icon: '🧘',
                    count: '32 Products'
                  },
                  {
                    name: 'Home Gyms',
                    description: 'Complete workout solutions for your home',
                    icon: '🏋️',
                    count: '12 Products'
                  },
                  {
                    name: 'Accessories',
                    description: 'Essential gear to complement your workout',
                    icon: '🧤',
                    count: '45+ Products'
                  },
                  {
                    name: 'Recovery',
                    description: 'Tools to help you recover and perform better',
                    icon: '❄️',
                    count: '20 Products'
                  }
                ].map((category, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{category.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{category.name}</h3>
                    <p className="text-gray-600 mb-4">{category.description}</p>
                    <span className="text-sm text-red-600 font-medium">{category.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section id="about" className="py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">About FitGear</h2>
                <div className="w-24 h-1 bg-red-600 mx-auto"></div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Our Story</h3>
                  <p className="text-gray-700 mb-4">
                    Founded in 2020, FitGear started with a simple mission: to provide high-quality, affordable fitness equipment to help people achieve their health and fitness goals from the comfort of their homes.
                  </p>
                  <p className="text-gray-700 mb-6">
                    What began as a small store in Tunis has grown into Tunisia's leading online fitness equipment retailer, serving thousands of satisfied customers across the country.
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">5K+</div>
                      <div className="text-gray-600">Happy Customers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">100+</div>
                      <div className="text-gray-600">Quality Products</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-red-600">24/7</div>
                      <div className="text-gray-600">Customer Support</div>
                    </div>
                  </div>
                </div>
                <div className="relative h-80 rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1571902943201-8fa2ac23f43f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                    alt="FitGear Store Interior"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h4 className="text-xl font-semibold">Visit Our Store</h4>
                      <p className="text-sm opacity-90">Experience our products in person</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose FitGear?</h3>
                <div className="grid md:grid-cols-3 gap-8">
                  {[
                    {
                      title: 'Quality Products',
                      description: 'We source only the highest quality fitness equipment from trusted manufacturers.',
                      icon: '🛡️'
                    },
                    {
                      title: 'Fast Delivery',
                      description: 'Quick and reliable shipping across Tunisia with real-time order tracking.',
                      icon: '🚚'
                    },
                    {
                      title: 'Expert Support',
                      description: 'Our fitness experts are available to help you choose the right equipment.',
                      icon: '💪'
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                      <div className="text-4xl mb-4">{feature.icon}</div>
                      <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
          <section id="contact" className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">Have questions or need assistance? Our team is here to help you with any inquiries about our products or services.</p>
              </div>
              <ContactForm />
              
              <div className="mt-16">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12782.21570312628!2d10.1815306!3d36.8064948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12e2bcd0f1c7e9c1%3A0x8c0b0f1c0f1c7e9c!2sTunis%20City%2C%20Tunisia!5e0!3m2!1sen!2stn!4v1620000000000!5m2!1sen!2stn" 
                    width="100%" 
                    height="400" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                    title="Our Location"
                    className="w-full h-full min-h-[400px]"
                  ></iframe>
                </div>
              </div>
            </div>
          </section>
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