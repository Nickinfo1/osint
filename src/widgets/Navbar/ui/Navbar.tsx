import { classNames } from 'shared/lib';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import cls from './Navbar.module.scss';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

const Navbar = ({ className }: NavbarProps) => {
    
    const { t } = useTranslation("translation");
    
    return (
        <div className={classNames(cls.navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/'}>{t('Главная')}</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to={'/about'}>{t('О компании')}</AppLink>
        </div>
    )
}

export default Navbar;
