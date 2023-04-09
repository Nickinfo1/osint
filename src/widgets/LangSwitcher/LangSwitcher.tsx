import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib';
import Button from 'shared/ui/Button/Button';
import cls from './LangSwitcher.module.scss';
import { ThemeButton } from 'shared/ui/Button/Button';

interface LangSwitcherProps {
  className?: string;
}

const LangSwitcher = ({ className }: LangSwitcherProps) => {
    const { t, i18n } = useTranslation();
    const toggle = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en');
    }

    return (
        <Button
            className={classNames(cls.langswitcher, {}, [className])}
            theme={ThemeButton.CLEAR}
            onClick={toggle}>
            {t('Язык')}

        </Button>
    )
}

export default LangSwitcher;
