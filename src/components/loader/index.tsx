import React from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

import { RootState } from '../../config/store';
import { useAppSelector } from '../../config/hooks';

function Loader() {
  const authLoading = useAppSelector((state: RootState) => state.ui.isLoading);
  
  if (!authLoading) {
    return null;
  }
  return (
    <View style={styles.mainBackViewStyle}>
      <View style={styles.loaderStyle}>
        <ActivityIndicator size="large" color={"#7BB62D"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    mainBackViewStyle: {
      backgroundColor: '#00000066',
      width: '100%',
      height: '100%',
      position: 'absolute',
      zIndex: 2,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loaderStyle: {
      backgroundColor: '#00000059',
      maxWidth: '80%',
      zIndex: 5,
      borderRadius: 13,
      justifyContent: 'space-around',
      padding: 20,
    },
  });

  export default Loader