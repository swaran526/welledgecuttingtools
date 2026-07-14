import IntegratedProductsShowcase from '../components/sections/ToolingPortfolio'
import BottomCTA from '../components/sections/BottomCTA'

export default function ProductsPage({ 
  activeFilter, 
  setActiveFilter, 
  selectedProduct, 
  setSelectedProduct 
}) {
  return (
    <div className="pt-24">
      <IntegratedProductsShowcase 
        activeFilter={activeFilter} 
        setActiveFilter={setActiveFilter} 
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      <BottomCTA />
    </div>
  )
}
