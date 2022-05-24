import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import { iconGenerator } from '../../assets/RaceCategory';
import {timeCalculator} from '../../utils/timeCalculator';
import CountDownTimer from '../CountDown/CountDown';
import { RaceSummary } from '../../types/list';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import config from '../../config';

interface RaceItemProps {
  raceSummary: RaceSummary;
}

const RaceItem = ({ raceSummary } : RaceItemProps) => {
  const timeLeft = timeCalculator(raceSummary.advertised_start.seconds);
  return (
    <View style={styles.item}>
      <View style={styles.infoContainer}>
        <View style={styles.row}>
          <Icon name={iconGenerator(raceSummary.category_id)} size={25} color="gray" />
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text style={styles.title}>{`${raceSummary.meeting_name}`}</Text>
              <Text style={styles.text_race_number}>{`- ${raceSummary.race_number}`}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.text_subtitle}>{`${raceSummary.venue_state}`}</Text>
              <Text style={styles.text_subtitle}>{` · ${raceSummary.race_form?.distance?.toString() || ''}${raceSummary.race_form?.distance_type?.short_name || ''}`}</Text>
            </View>
          </View>
        </View>
      </View>
      <View>
        <CountDownTimer timeLeft={timeLeft} raceId={raceSummary.race_id} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'white',
    padding: 12,
    flexDirection: 'row',
    alignItems:'center',
    borderBottomColor: config.colors.borderColor,
    borderBottomWidth: 1,
  },
  header: {
    fontSize: 32,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 16,
  },
  text_race_number: {
    paddingLeft:5,
    fontSize: 14,
  },
  text_subtitle: {
    paddingTop:2,
    fontSize: 11,
    color:'gray',
  },
  infoContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  row:{
    flexDirection:'row',
    alignItems:'center',
  },
  textContainer:{
    paddingLeft:10,
  },
});

export default RaceItem;