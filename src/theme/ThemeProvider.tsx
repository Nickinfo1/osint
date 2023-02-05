import React, {useState, useMemo, ReactNode} from 'react';
import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext} from './ThemeContext';
import type {FC} from "react"; 

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider: FC<any> = ({children}) => {
	
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProp = useMemo(()=>({
		theme: theme,
		setTheme: setTheme
	}), [theme]);


	return (
		<ThemeContext.Provider value={defaultProp}>
			{children}
		</ThemeContext.Provider>
	);
}

export default ThemeProvider;

