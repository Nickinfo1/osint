
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routeConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';
//import {AboutPage} from 'pages/AboutPage';
//import {MainPage} from 'pages/MainPage';


const AppRouter = () => {
    const arr = Object.values(routeConfig);
    //console.log(arr)

    return (
        <Suspense fallback={<PageLoader />}>
            <Routes>
                {arr.map(({ path, element }) =>
                    (
                        <Route
                            key={path}
                            path={path}
                            element={(
                                <div className='page-wrapper'>
                                    {element}
                                </div>
                            )}
                        />
                    ))
                }
            </Routes>
        </Suspense>
    )
}

export default AppRouter;


