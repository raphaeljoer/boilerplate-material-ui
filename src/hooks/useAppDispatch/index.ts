import { useDispatch } from 'react-redux';
import { ReduxDispatch } from 'store/types';

export const useAppDispatch = () => useDispatch<ReduxDispatch>();
