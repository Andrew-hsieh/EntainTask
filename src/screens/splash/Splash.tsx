import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';
import { useAppSelector } from 'src/config/hooks';
import { User } from 'src/reduxStates';
import config from 'src/config';

const Splash = ({ navigation }: any): JSX.Element => {
  useEffect(() => {
    navigation.dispatch(StackActions.replace(config.routes.MAIN_VIEW));
  }, []);

  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default Splash;
