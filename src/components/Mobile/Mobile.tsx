import ProductListingLayout from '@/components/comman/ProductCard/ProductListingLayout';
import { Container } from 'react-bootstrap';
import { mobiledata } from '@/data/MobileData';
import { mobileFilterConfig } from '@/components/config/mobileFilterConfig';

const Mobile = () => {
  return (
    <Container>
      <ProductListingLayout
        title="Mobiles"
        products={mobiledata}
        filters={mobileFilterConfig}
      />
    </Container>
  );
};

export default Mobile;

