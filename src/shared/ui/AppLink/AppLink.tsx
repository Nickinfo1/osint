import { Link, LinkProps } from 'react-router-dom';
import { classNames } from 'shared/lib';
import cls from './AppLink.module.scss';
import { FC } from 'react';

export enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary"
}

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme
}

const AppLink: FC<AppLinkProps> = (props) => {
    const { to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps } = props;
    return (
        <Link to={to} className={classNames(cls.applink, {}, [className, cls[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    )
}

export default AppLink;
