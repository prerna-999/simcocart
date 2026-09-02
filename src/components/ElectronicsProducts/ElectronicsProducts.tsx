import ProductListingLayout from '@/components/comman/ProductCard/ProductListingLayout';
import { Container } from 'react-bootstrap';
import { ElectronicsProducts } from '@/data/ElectronicsProducts';
// import { mobileFilterConfig } from '@/components/config/mobileFilterConfig';

const Electronics = () => {
  return (
    <Container>
      <ProductListingLayout
        title="ElectronicsProducts"
        products={ElectronicsProducts}
        // filters={mobileFilterConfig}
      />
    </Container>
  );
};

export default Electronics;
