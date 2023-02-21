import { useState, useEffect } from 'react';

function useLocalStorage(initValue, key) {
	const getValue = () => {
		const storage = localStorage.getItem(key);

		if(storage) {
			return JSON.parse(storage);
		}

		return initValue;
	}
	const [value, setValue] = useState(getValue);

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value));
	}, [value])

	return [value, setValue]
}

export default useLocalStorage;