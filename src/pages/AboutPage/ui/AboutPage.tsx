import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';

interface MyProps {
	value: string;
}

const TestComp = (props: MyProps) => {
    return (
        <div>
            <h1>{props.value}</h1>
        </div>
    )
}


const AboutPage = () => {
    const el = useRef();
    const [num, setNum] = useState(1);
    const [isGreen, setIsGreen] = useState(true);
    const [observer, setObs] = useState(null);
    const { t } = useTranslation('about');

    //const result = Counter(num);
    //const obs = new MutationObserver

    useEffect(() => {
        console.log("ALL ELEMENT IS PAINTED");
        //const el = document.getElementById("handler");
        console.log(el.current);
        const obs = new MutationObserver((mut) => {
            console.log(mut);
        });

        setObs(obs);


        //console.log(obs);
    }, []);

    useEffect(() => {
        if (!observer) return;
        observer.observe(el.current, {
            //attributes: true,
            subtree: true,
            //attributeOldValue: true,
            //childList: true,
            characterData: true
        });
        console.log(observer);
    }, [el.current]);

    return (
        <div>
            <h1 onClick={() => setIsGreen(!isGreen)}
                style={{ color: isGreen ? "green" : "red" }}
            >

                {t("Об этой странице")}

            </h1>
            <h2 ref={el}>
                Sum {num}
            </h2>

            <TestComp value="Hello from props" />
            <button onClick={() => setNum(1)}>reset</button>
            <button onClick={() => setNum(num + 1)}>+</button>
            <button onClick={() => setNum(prevCou => prevCou - 1)}>-</button>
        </div>
    )
}

export default AboutPage;
