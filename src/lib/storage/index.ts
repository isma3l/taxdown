import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: object) => {
  try {
    const data = JSON.stringify(value);
    AsyncStorage.setItem(key, data);
  } catch (error) {
    console.error(error);
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    const value = data ? JSON.parse(data) : null;
    return value;
  } catch (error) {
    console.log(error);
  }
};

export const clearAllData = async () => {
  try {
    await AsyncStorage.clear();
  } catch (error) {
    console.log(error);
  }
};
