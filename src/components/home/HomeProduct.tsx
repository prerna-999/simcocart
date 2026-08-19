import ProductListingLayout from '@/components/comman/ProductCard/ProductListingLayout';
import { Container } from 'react-bootstrap';
import { HomeProducts } from '@/data/HomeProduct';

const HomeProduct = () => {
  return (
    <Container>
      <ProductListingLayout title="Products For You" products={HomeProducts} />
    </Container>
  );
};

export default HomeProduct;