import { createBrowserRouter } from 'react-router-dom';
import DetailPage from './DetailPage';
import ListCategories from '../component/ListCategories';
import DetailsCategories from '../component/DetailsCategories';

const router = createBrowserRouter([
    {path: '/', element: <ListCategories />},
    {path: '/details/:id', element: <DetailsCategories />}
]);

export default router;