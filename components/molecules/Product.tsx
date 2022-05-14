/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {ProductType} from '../pages/CheckoutScreen';

const S = StyleSheet.create({
  container: {paddingBottom: 16},
  imageContainer: {aspectRatio: 1},
  image: {width: '100%', height: '100%'},
});

export const Product = ({
  product,
  size,
}: {
  product: ProductType;
  size: number;
}) => {
  const {price, imageUri} = product;

  return (
    <View style={S.container}>
      <View style={[S.imageContainer, {width: size}]}>
        <Image
          style={S.image}
          source={{
            uri: imageUri,
          }}
          resizeMode="cover"
        />
      </View>
      <Text style={{fontSize: 24}}>{price.toFixed(2) + ' HRK'}</Text>
    </View>
  );
};
