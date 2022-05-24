import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View, FlatList, ListRenderItem, Text } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { RaceCategory } from "src/assets/RaceCategory";
import { RaceItem, ToggleSection} from "src/components";
import config from "../../config";
import DispatchConstants from "src/reduxSagas/DispatchConstants";
import { List } from "src/reduxStates";
import { RaceSummary } from "src/types/list";

const MainView = (): JSX.Element => {
  const dispatch = useDispatch();
  const [filteredList, setFilteredList] = useState<RaceSummary[]>([]);
  const selectNextToGoList = useSelector(List.selectNextToGoList);
  const selectToggleGreyhound = useSelector(List.selectToggleGreyhound);
  const selectToggleHarness = useSelector(List.selectToggleHarness);
  const selectToggleHorse = useSelector(List.selectToggleHorse);

  useEffect(() => {
    if(selectNextToGoList.length < 5){
      dispatch({type:DispatchConstants.FETCH_NEXT_TO_GO_LIST});
    }
  }, [selectNextToGoList, dispatch])

  useEffect(() => {
    if(!selectNextToGoList){return};
      const newList = selectNextToGoList.filter(x => {
        if (selectToggleGreyhound && x.category_id === RaceCategory.GreyhoundRacing) {
          return true;
        }
        else if (selectToggleHarness && x.category_id === RaceCategory.HarnessRacing) {
          return true;
        }
        else if (selectToggleHorse && x.category_id === RaceCategory.HorseRacing) {
          return true;
        }
        else{
          return false;
        }
      });
      setFilteredList(newList);
  }, [selectNextToGoList, selectToggleGreyhound, selectToggleHarness, selectToggleHorse])
  

  const renderItem: ListRenderItem<RaceSummary> = ({item}) => {
    return <RaceItem raceSummary={item} />;
  };

  const WarningView = () => (
    <Text style={styles.text_error}>{config.strings.NOT_SELECT_CATEGORY_ERROR}</Text>
  )

  const notSelectCategory = !selectToggleGreyhound && !selectToggleHarness && !selectToggleHorse;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.contentContainer}>
        <ToggleSection />
        {notSelectCategory && <WarningView />}
        <FlatList<RaceSummary>
          keyExtractor={item => item.race_id}
          data={filteredList?.slice(0, 5)}
          renderItem={renderItem}
          maxToRenderPerBatch={5}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  contentContainer: {
    flex: 1,
  },
  text_race_name:{
    fontSize:12,
  },
  text_error:{
    color: config.colors.error,
    marginTop:10,
    marginLeft:15,
  },
});

export default MainView;
