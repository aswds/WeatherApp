import {useDispatch} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../redux/actions/fetchWeather';
import {useAppDispatch} from './useAppDispatch';

export function useActions() {
  const dispatch = useAppDispatch();
  return bindActionCreators({fetchWeather}, dispatch);
}
