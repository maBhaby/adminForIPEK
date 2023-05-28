import { useContext } from 'react';
import { RootStore } from '@/store/Root';
import { StoreContext } from '@/context/StoreProvider';

export const useStores = (): RootStore => useContext(StoreContext);