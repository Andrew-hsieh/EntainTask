import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleButton from './ToggleButton';
import { useDispatch, useSelector } from 'react-redux';
import { List, UI } from 'src/reduxStates';
import config from '../../config';

const ToggleSection = () => {
  const selectToggleGreyhound = useSelector(List.selectToggleGreyhound);
  const selectToggleHarness = useSelector(List.selectToggleHarness);
  const selectToggleHorse = useSelector(List.selectToggleHorse);
  const dispatch = useDispatch();
  const displayInfo = () => {
    dispatch(UI.updateAlertContent({
      title:'icon-info',
      content:'',
    }))
  };
  return (
    <View style={styles.container}>
    <View style={styles.row}>
      <ToggleButton iconName="dog-side" value={selectToggleGreyhound} action={()=>{
          dispatch({type: List.toggleGreyhoundState})
      }} />
      <ToggleButton iconName="horse" value={selectToggleHorse} action={()=>{
          dispatch({type: List.toggleHorseState})
      }} />
      <ToggleButton iconName="horse-human" value={selectToggleHarness} action={()=>{
          dispatch({type: List.toggleHarnessState})
      }} />
    </View>
      <TouchableOpacity style={styles.helpButton} onPress={displayInfo}>
        <Icon name="progress-question" size={25} color='gray' />
      </TouchableOpacity>
    </View>
  )
}

export default ToggleSection

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width:'100%',
        paddingVertical:10,
        backgroundColor:'white',
        borderBottomColor: config.colors.borderColor,
        borderBottomWidth: 1,
    },
    row:{
        flexDirection:'row',
        flex:1,
    },
    helpButton:{
        alignSelf:'center',
        marginRight:10,
    },
})