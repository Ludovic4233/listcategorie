import { createBrowserRouter } from 'react-router-dom';
import HomePage from './HomePage';
import DetailsCategories from '../component/DetailsCategories';

const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/details/:id', element: <DetailsCategories />}
]);

export default router;