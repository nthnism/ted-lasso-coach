import {shallowEqual, useSelector} from 'react-redux';
import {RootState} from '../redux/store';

const typedUseSelector = useSelector.withTypes<RootState>();

export const useAppSelector = <TSelected>(
  selector: (state: RootState) => TSelected,
) => typedUseSelector(selector, shallowEqual);
