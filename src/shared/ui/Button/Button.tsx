import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib';
import cls from './Button.module.scss';


export enum ThemeButton {
  CLEAR = 'clear',
  TOGGLE = 'toggle'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton
}

const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        theme,
        children,
        ...otherProps
    } = props;

    return (
        <button className={classNames(cls.button_style, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </button>
    )
}

export default Button;
