import { createBrowserRouter } from 'react-router-dom';
import { AppContainer } from './AppContainer';
import BasicMode from './BasicMode';
import PracticeMode from './PracticeMode';


const router = createBrowserRouter([
  {
    path: '/colordle',
    element: <AppContainer />,
    children: [
      {
        index: true,
        element: <BasicMode />,
      },
      {
        path: `/colordle/practice`,
        element: <PracticeMode />,
      },
    ],
  },
]);

export default router;
