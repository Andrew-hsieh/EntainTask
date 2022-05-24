import { useAppDispatch } from "../../config/hooks";
import React from "react";
import {
  View,
  StyleSheet,
  Text,
  Pressable,
  TouchableWithoutFeedback,
  Platform,
} from "react-native";
import { useSelector } from "react-redux";
import { UI } from "../../reduxStates";
import { AlertContent } from "../../reduxStates/UI";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import config from "../../config/colors";

const CustomAlert = () => {
  
  const dispatch = useAppDispatch();
  const alertContent: AlertContent = useSelector(UI.selectAlertContent);
  if (!alertContent) {
    return null;
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        dispatch(UI.updateAlertContent(null));
      }}>
      <View
        style={[
          styles.mainBackViewStyle,
          { paddingBottom: alertContent.paddingBottom || 0 },
        ]}>
        <TouchableWithoutFeedback>
          {alertContent?.title === 'icon-info' ?
          (<View style={[styles.alertBoxStyle]}>
            <View style={styles.alertMain}>
              {alertContent?.title && (
                <Text style={styles.alertTitle}>
                  Category
                </Text>
              )}
              <View style={styles.alertContentContainer}>
              <View style={styles.row}>
                <Icon name="dog-side" size={25} color="gray" />
                <Text style={styles.text_category}>: GreyhoundRacing</Text>
              </View>
              <View style={styles.row}>
              <Icon name="horse" size={25} color="gray" />
                <Text style={styles.text_category}>: HorseRacing</Text>
              </View>
              <View style={styles.row}>
              <Icon name="horse-human" size={25} color="gray" />
                <Text style={styles.text_category}>: HarnessRacing</Text>
              </View>
            </View>
            </View>
              <Pressable
                style={styles.alertButton}
                onPress={() => {
                  dispatch(UI.updateAlertContent(null));
                  alertContent.action && alertContent.action();
                }}>
                <Text style={styles.buttonTextStyle}>
                  OK
                </Text>
              </Pressable>
          </View>)
          :(
            <View style={[styles.alertBoxStyle]}>
            <View style={styles.alertMain}>
              {alertContent?.title && (
                <Text style={styles.alertTitle}>
                  {alertContent?.title ?? ""}
                </Text>
              )}
              <Text style={styles.alertContentContainer}>
                {alertContent?.content ?? ""}
              </Text>
            </View>
              <Pressable
                style={styles.alertButton}
                onPress={() => {
                  dispatch(UI.updateAlertContent(null));
                  alertContent.action && alertContent.action();
                }}>
                <Text style={styles.buttonTextStyle}>
                  {alertContent?.buttonTitle ?? "OK"}
                </Text>
              </Pressable>
          </View>
          )}
        </TouchableWithoutFeedback>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  mainBackViewStyle: {
    backgroundColor: "#00000066",
    width: "100%",
    height: "100%",
    position: "absolute",
    zIndex: 1001,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    elevation: Platform.OS === "android" ? 1 : 0,
  },
  alertBoxStyle: {
    maxWidth: "90%",
    minWidth: '50%',
    maxHeight: "80%",
    backgroundColor: "#FFFFFF",
    borderRadius: 20,
  },
  alertMain: {
    paddingHorizontal: 20,
    paddingTop: 20,
    maxHeight: "95%",
  },
  alertButton: {
    paddingBottom: 0,
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "white",
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  buttonBGView: {
    bottom: 0,
    borderTopWidth: 0.25,
    flexDirection: "row",
    width: "100%",
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    backgroundColor: "white",
    height: 50,
  },
  horizontalButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    flex: 1,
  },
  horizontalSeparator: {
    height: 50,
    width: 0.5,
    backgroundColor: "gray",
  },
  verticalSeparator: {
    borderBottomWidth: 1,
    borderColor: "gray",
    backgroundColor: "gray",
  },
  alertTitle: {
    fontSize: 24,
    textAlign: "center",
    color: config.tickBlue,
  },
  alertContentContainer: {
    fontSize: 20,
    marginVertical: 12,
    textAlign: "center",
    maxHeight: "86%",
    paddingHorizontal:20,
    color: "#212121",
  },
  buttonTextStyle: {
    fontWeight: "500",
    color: config.tickBlue,
    fontSize: 20,
  },
  columnButtonTextStyle: {
    color: "#7BB62D",
    fontSize: 17,
    textAlign: "center",
    paddingVertical: 3,
  },
  verticalButtonContainer: {
    flexDirection: "column",
    borderTopWidth: 0.5,
    borderTopColor: "rgba(63, 63, 63, 0.25)",
    borderBottomColor: "#3F3F3F",
    width: "100%",
    paddingVertical: 10,
  },
  column: {
    flexDirection: "column",
  },
  row:{
    flexDirection:'row',
    alignContent:'center',
    paddingVertical:4,
    paddingHorizontal:10,
  },
  text_category:{
    fontSize:16,
    marginLeft:8,
    color:config.grayText,
    alignSelf:'center',
  },
});

export default CustomAlert;
