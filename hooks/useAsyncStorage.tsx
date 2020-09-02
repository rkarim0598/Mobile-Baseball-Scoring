import { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';

export default function useAsyncStorage(key: string, initialValue: any): Array<Function> {
    const [storedValue, setStoredValue] = useState();

    async function getStoredItem(key: string, initialValue: any) {
        try {
            // Get from local storage by key
            const item = await AsyncStorage.getItem(key);
            // Parse stored json or if none return initialValue
            const value = item ? JSON.parse(item) : initialValue;
            setStoredValue(value);
        } catch (error) {
            // If error also return initialValue
            console.log(error);
            return initialValue;
        }
    }

    useEffect(() => {
        console.log('get value', key, initialValue);
        getStoredItem(key, initialValue);
    }, [key, initialValue]);

    const setValue = async (value: any) => {
        try {
            // Allow value to be a function so we have same API as useState
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;
            // Save state
            setStoredValue(valueToStore);
            // Save to local storage
            await AsyncStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            // A more advanced implementation would handle the error case
            console.log(error);
        }
    };

    const clearStoredValue = async (resetValue: any) => {
        try {
            setStoredValue(resetValue);
            await AsyncStorage.removeItem(key);
        } catch (error) {
            console.log(error);
        }
    }

    return [storedValue, setValue, clearStoredValue];
}