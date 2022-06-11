import { useEffect, useState } from 'react';
import useSound from 'use-sound';
import sfxOff from '../src/pop-off.mp3'

export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [mountedComponent, setMountedComponent] = useState(false)
    //sound effect
    const [switchOFF] = useSound(sfxOff);

    const setMode = mode => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {
        theme === 'light' ? setMode('dark') : setMode('light');
        switchOFF();
    };


    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme ? setTheme(localTheme) : setMode('light')
        setMountedComponent(true)
    }, []);

    return [theme, themeToggler, mountedComponent]
};