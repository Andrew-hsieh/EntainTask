  export const timeCalculator = (unixTime: number): number => {
      const currentTime = Math.round(new Date().getTime() / 1000);
      return unixTime - currentTime;
  };
  
  export const timeFormat = (duration: number) => {
    const hours = Math.floor(duration / 3600);
    const mins = Math.floor((duration % 3600) / 60);
    const secs = Math.floor(duration % 60);

    if (duration < 0) {
      let timeText = '-' + Math.abs(duration) + 's';
      return timeText;
    } else {
      let timeText = '';
      if (hours > 0) {
        timeText += '' + hours + 'h ' + (mins < 10 ? '0' : '');
      }
      if (mins > 0){
        timeText += '' + mins + 'm ' + (secs < 10 ? '0' : '');
      }
      timeText += '' + secs + 's';
      return timeText;
    }
  };