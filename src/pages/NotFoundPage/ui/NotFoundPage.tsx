import { classNames } from 'shared/lib';
import cls from './NotFoundPage.module.scss';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
  className?: string;
}

const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation("translation");
    return (
        <div className={classNames(cls.notfoundpage, {}, [className])}>
            {t("Страница не найдена")}
        </div>
    )
}

export default NotFoundPage;
