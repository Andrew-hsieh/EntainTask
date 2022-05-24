import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';
import config from '../../config/colors';
import { removeExpiredRace } from 'src/reduxStates/List';
import { timeFormat } from '../../utils/timeCalculator';

interface CountDownProps {
  timeLeft: number;
  raceId: string;
}
const CountDownTimer: React.FC<CountDownProps> = ({timeLeft, raceId}) => {
  const [timerCount, setTimer] = useState(timeLeft);
  const dispatch = useDispatch();
  const removeExpiredRaceTime = -60; //seconds
  const warningColorSeconds = 300;

  useEffect(() => {
    if (timerCount <= removeExpiredRaceTime) {
      dispatch({type: removeExpiredRace, payload: raceId});
    }
  }, [timerCount, raceId, dispatch]);

  useEffect(() => {
    let interval = setInterval(() => {
      setTimer(lastTimerCount => {
        return lastTimerCount - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.countDownContainer}>
      <Text style={{color: timerCount > warningColorSeconds ? config.black : config.error}}>{timeFormat(timerCount)}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  countDownContainer: {
    width: 80,
    paddingVertical: 5,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
export default CountDownTimer;