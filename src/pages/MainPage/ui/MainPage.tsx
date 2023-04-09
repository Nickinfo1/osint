import { useTranslation } from "react-i18next";
import Seniority from "widgets/Seniority/ui/Seniority";


const MainPage = () => {
    const { t } = useTranslation('main');

    return (
        <div>
            {t("Главная страница")}
            <Seniority />
        </div>
    )
}

export default MainPage;
