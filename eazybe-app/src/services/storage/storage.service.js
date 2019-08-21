import AsyncStorage from '@react-native-community/async-storage';

export default class StorageService {
  static STORAGE_KEY = '@EAZYBE_'

  static set = async (key, value) => {
    try {
      await AsyncStorage.setItem(`${StorageService.STORAGE_KEY}${key}`, value)
    } catch (e) {
      // saving error
    }
  }

  static get = async (key) => {
    try {
      const value = await AsyncStorage.getItem(`${StorageService.STORAGE_KEY}${key}`)
      if (value !== null) {
        return value
      }
    } catch(e) {
      // error reading value
    }
  }
}

