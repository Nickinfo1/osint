
import { classNames } from 'shared/lib';
import cls from './Seniority.module.scss';

interface SeniorityProps {
  className?: string;
}

function calc(): string {
    const res = '12.02.2023';
    return res;
}

const Seniority = ({ className }: SeniorityProps) => {

    return (
        <div className={classNames(cls.seniority, {}, [className])}>
            {calc()}
        </div>
    )
}

export default Seniority;
