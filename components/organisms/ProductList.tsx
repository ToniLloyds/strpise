import React, {useMemo} from 'react';
import {useWindowDimensions} from 'react-native';
import {Product} from '../molecules/Product';
import {ProductType} from '../pages/CheckoutScreen';

interface ProductListProps {
  products: ProductType[];
}

export const ProductList = ({products}: ProductListProps) => {
  const window = useWindowDimensions();
  const imageWidth = useMemo(() => window.width - 2 * 16, [window.width]);

  return (
    <>
      {products.map(product => {
        return <Product key={product.id} product={product} size={imageWidth} />;
      })}
    </>
  );
};
