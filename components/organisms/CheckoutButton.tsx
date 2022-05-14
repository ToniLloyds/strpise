import {presentPaymentSheet} from '@stripe/stripe-react-native';
import React, {useCallback} from 'react';
import {Alert} from 'react-native';
import {Button} from '../atoms/Button';

interface CheckoutButtonProps {
  loading: boolean;
}

export const CheckoutButton = ({loading}: CheckoutButtonProps) => {
  const openPaymentSheet = useCallback(async () => {
    const {error} = await presentPaymentSheet();

    if (error) {
      Alert.alert(`Error code: ${error.code}`, error.message);
    } else {
      Alert.alert('Success', 'Your order is confirmed!');
    }
  }, []);
  return (
    <Button disabled={!loading} title="Checkout" onPress={openPaymentSheet} />
  );
};
