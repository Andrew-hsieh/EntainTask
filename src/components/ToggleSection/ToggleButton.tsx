import config from "../../config/colors";
import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import IconAntDesign from 'react-native-vector-icons/AntDesign';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  iconName: string;
  value: boolean;
  action: ()=>void;
}
const ToggleButton = ({ iconName, value, action }: Props): JSX.Element => {
  return (
    <TouchableOpacity
      style={styles.btnContainer}
      onPress={action}
    >
      <View style={styles.iconContainer}>
        {value ? (
          <View style={styles.selectedBackground}>
            <IconAntDesign name="check" size={20} color={config.tickBlue} />
          </View>
        ) : (
          <View style={styles.square} />
        )}
      </View>
      <Icon name={iconName} size={25} color="gray" />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
    btnContainer: {
      flexDirection: "row",
      alignItems: "center",
      height: 50,
    //   backgroundColor:'yellow',
      paddingHorizontal:15,
    },
    iconContainer: {
      paddingHorizontal:5,
    },
    text: {
      color: "white",
      fontSize: 18,
    },
    square: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: config.tickBlue,
    },
    selectedBackground: {
      width: 20,
      height: 20,
      borderWidth: 1,
      borderColor: config.tickBlue,
      justifyContent: "center",
      alignItems: "center",
    },
  });
export default ToggleButton;

