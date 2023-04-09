
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { classNames } from 'shared/lib';
import cls from './ThemeSwitcher.module.scss';
import LightBtn from 'shared/assets/icons/light.png';
import DarkBtn from 'shared/assets/icons/dark.png';
import Button, { ThemeButton } from 'shared/ui/Button/Button';

interface ThemeSwitcherProps {
  className?: string;
}

const LightPic = ({ className }: ThemeSwitcherProps) => {
    return (
        <img className={classNames(cls.themeswitcher_pic, {}, [className])}
            src={LightBtn} alt="Toggle" />
    )
}

const DarkPic = ({ className }: ThemeSwitcherProps) => {
    return (
        <img className={classNames(cls.themeswitcher_pic, {}, [className])}
            src={DarkBtn} alt="Toggle" />
    )
}

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.TOGGLE}
            onClick={toggleTheme}
        >
            {theme === Theme.LIGHT ? <LightPic /> : <DarkPic />}
        </Button>
    //<LightBtn />
    )
}

export default ThemeSwitcher;



