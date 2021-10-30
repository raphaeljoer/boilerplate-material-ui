import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { ReduxStore } from 'store/types';

export const useAppSelector: TypedUseSelectorHook<ReduxStore> = useSelector;
