import {ScrollView, StyleSheet, View} from 'react-native';
import React, {PropsWithChildren} from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const S = StyleSheet.create({
  conatiner: {backgroundColor: '#ccf5fc', flex: 1},
  scrollview: {
    flex: 1,
    padding: 16,
  },
  bottomContainer: {backgroundColor: 'white'},
});

interface TopScrollViewBottomViewProps {
  bottomContent: () => any;
}

export const CheckoutTemplate = ({
  children,
  bottomContent,
}: PropsWithChildren<TopScrollViewBottomViewProps>) => {
  const insets = useSafeAreaInsets();
  return (
    <View style={S.conatiner}>
      <ScrollView
        contentContainerStyle={{paddingBottom: insets.bottom + 40}}
        style={[S.scrollview, {paddingTop: insets.top}]}>
        {children}
      </ScrollView>
      <View style={[S.bottomContainer, {paddingBottom: insets.bottom}]}>
        {bottomContent()}
      </View>
    </View>
  );
};
