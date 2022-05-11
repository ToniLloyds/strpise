import {StripeProvider} from '@stripe/stripe-react-native';
import {SafeAreaView, Text} from 'react-native';
import React from 'react';
import CheckoutScreen from './CheckoutScreen';

export function App() {
  return (
    <StripeProvider
      publishableKey="pk_test_wM5GWAdQILVi0Z4RkmFm4nHF"
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <SafeAreaView
        style={{alignItems: 'center', justifyContent: 'center', flex: 1}}>
        <CheckoutScreen />
      </SafeAreaView>
    </StripeProvider>
  );
}
