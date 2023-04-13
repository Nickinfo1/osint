import './PageLoader.scss';
import { classNames } from 'shared/lib';

interface PageLoaderProps {
  className?: string;
}

const PageLoader = ({ className }: PageLoaderProps) => {

    return (
        <div className={classNames("pageloader", {}, [className])}>
            <div className="lds-ring">
                <div />
                <div />
                <div />
                <div />
            </div>
        </div>
    )
}

export default PageLoader;
