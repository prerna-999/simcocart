export interface FilterOption {
  label: string;
  value: string;
}

export interface FilterField {
  key: string;
  label: string;
  type: 'checkbox' | 'radio' | 'range';
  options?: FilterOption[];
  min?: number;
  max?: number;
}

export const mobileFilterConfig: FilterField[] = [
  {
    key: 'brand',
    label: 'Brand',
    type: 'checkbox',
    options: [
      { label: 'Samsung', value: 'Samsung' },
      { label: 'Apple', value: 'Apple' },
      { label: 'Xiaomi', value: 'Xiaomi' },
      { label: 'OnePlus', value: 'OnePlus' },
      { label: 'Realme', value: 'Realme' },
    ],
  },
  {
    key: 'ram',
    label: 'RAM',
    type: 'checkbox',
    options: [
      { label: '4GB', value: '4GB' },
      { label: '6GB', value: '6GB' },
      { label: '8GB', value: '8GB' },
      { label: '12GB', value: '12GB' },
    ],
  },
  {
    key: 'storage',
    label: 'Storage',
    type: 'checkbox',
    options: [
      { label: '64GB', value: '64GB' },
      { label: '128GB', value: '128GB' },
      { label: '256GB', value: '256GB' },
      { label: '512GB', value: '512GB' },
    ],
  },
  {
    key: 'price',
    label: 'Price',
    type: 'range',
    min: 5000,
    max: 100000,
  },
  {
    key: 'rating',
    label: 'Rating',
    type: 'radio',
    options: [
      { label: '4★ & above', value: '4' },
      { label: '3★ & above', value: '3' },
      { label: '2★ & above', value: '2' },
    ],
  },
];