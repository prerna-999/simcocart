import ProductListingLayout from '@/components/comman/ProductCard/ProductListingLayout';
import { Product } from '@/components/hooks/useProductFilters';
import { Container } from 'react-bootstrap';

const products: Product[] = [
  {
    id: '1',
    title: 'Chitrarekha Attractive kurti set',
    category: 'Suits',
    price: 194,
    rating: 4,
    reversible: 'no',
    smartcoins: 'no',
    imageUrl: '/assets/img/all-images/home/combo1.webp',
    sellerName: 'GoPro',
    reviewCount: 10,
  },
  {
    id: '2',
    title: "STI Men's shirts",
    category: 'Shirts',
    gender: 'men',
    price: 228,
    rating: 4,
    imageUrl: '/assets/img/all-images/home/combo1.webp',
    sellerName: 'GoPro',
    reviewCount: 10,
  },
  {
    id: '3',
    title: 'Pretty Graceful Women T-Shirt',
    category: 'T Shirts',
    gender: 'women',
    price: 105,
    mrp: 300,
    rating: 4,
    imageUrl: '/assets/img/all-images/home/combo1.webp',
    sellerName: 'GoPro',
    reviewCount: 10,
  },
  {
    id: '4',
    title: 'Relaxed Fashionable Men Slippers',
    category: 'Slippers',
    gender: 'men',
    price: 165,
    rating: 4,
    imageUrl: '/assets/img/all-images/home/combo1.webp',
    sellerName: 'GoPro',
    reviewCount: 10,
  },
];

const HomeProduct = () => {
  return (
    <Container>
      <ProductListingLayout title="Products For You" products={products} />
    </Container>
  );
};

export default HomeProduct;