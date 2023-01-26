import React, { useEffect } from 'react';
import { HStack, Spinner } from 'native-base';
import { useAppDispatch } from '@/hooks';
import { restoreSession } from '../login';
import { getData } from '@/lib';
import { resetAndNavigate } from '@navigation/RootNavigation';
import { USER_DATA } from '@/config';
import { LOGIN, TAXES } from '@navigation/Routes';
import { User } from '@model';

const Splash = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const onAppStart = async () => {
      const user: User = await getData(USER_DATA);
      if (user) {
        dispatch(restoreSession(true));
        resetAndNavigate(TAXES);
      } else {
        resetAndNavigate(LOGIN);
      }
    };
    onAppStart();
  }, [dispatch]);

  return (
    <HStack flex="1" justifyContent="center">
      <Spinner size="lg" />
    </HStack>
  );
};

export default Splash;
