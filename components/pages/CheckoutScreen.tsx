import React from 'react';
import {CheckoutTemplate} from '../templates/CheckoutTemplate';
import {ProductList} from '../organisms/ProductList';
import {CheckoutButton} from '../organisms/CheckoutButton';
import {usePaymentSheet} from '../../hooks/usePaymentSheet';

export type ProductType = {
  imageUri: string;
  id: string;
  price: number;
};

export default function CheckoutScreen() {
  const products: ProductType[] = [
    {
      id: '1',
      imageUri:
        'https://loremflickr.com/cache/resized/65535_51514961823_3738502cf3_c_500_500_nofilter.jpg',
      price: 200,
    },
    {
      id: '2',
      imageUri:
        'https://loremflickr.com/cache/resized/65535_51511626776_f8542fa729_c_500_500_nofilter.jpg',
      price: 220,
    },
    {
      id: '3',
      imageUri:
        'https://loremflickr.com/cache/resized/65535_51696326178_96581e9ab7_c_500_500_nofilter.jpg',
      price: 400,
    },
    {
      id: '4',
      imageUri:
        'https://loremflickr.com/cache/resized/65535_51641289437_9a6d5a651a_b_500_500_nofilter.jpg',
      price: 190,
    },
    {
      id: '5',
      imageUri:
        'https://loremflickr.com/cache/resized/3148_2942711405_a0156d3192_c_500_500_nofilter.jpg',
      price: 200,
    },
    {
      id: '6',
      imageUri:
        'https://loremflickr.com/cache/resized/65535_51909301278_0817277668_c_500_500_nofilter.jpg',
      price: 202,
    },
  ];

  const [loading] = usePaymentSheet();

  return (
    <CheckoutTemplate
      bottomContent={() => <CheckoutButton loading={loading} />}>
      <ProductList products={products} />
    </CheckoutTemplate>
  );
}
