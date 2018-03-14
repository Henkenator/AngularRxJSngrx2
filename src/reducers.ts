/**
 * Created by Henke on 2018-03-14.
 */
export const HOUR = 'HOUR';
export const SECOND = 'SECOND';

export const clock = (state = new Date(), {type}) => {
  const date = new Date(state.getTime());

  switch (type) {
    case HOUR:
      date.setHours(date.getHours() + 1);
      return date;
    case SECOND:
      date.setSeconds(date.getSeconds() + 1);
      return date;
    default:
      return state;
  }
}
