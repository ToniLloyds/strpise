import {StripeProvider} from '@stripe/stripe-react-native';
import React from 'react';

import {SafeAreaProvider} from 'react-native-safe-area-context';
import CheckoutScreen from './components/pages/CheckoutScreen';

export function App() {
  return (
    <StripeProvider
      publishableKey="pk_test_wM5GWAdQILVi0Z4RkmFm4nHF"
      // merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
      <SafeAreaProvider>
        <CheckoutScreen />
      </SafeAreaProvider>
    </StripeProvider>
  );
}
