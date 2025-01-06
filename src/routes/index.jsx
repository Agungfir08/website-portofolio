import React, { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
const RootLayout = lazy(() => import('../components/layout/RootLayout'));
const Home = lazy(() => import('../components/layout/Home'));
const Resume = lazy(() => import('../features/resume/Resume'));
const Project = lazy(() => import('../features/project/Project'));
const Analog = lazy(() => import('../features/analog/Analog'));

export const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: 'resume',
                element: <Resume />,
            },
            {
                path: 'project',
                element: <Project />,
            },
            {
                path: 'analog',
                element: <Analog />,
            },
        ],
    },
]);
