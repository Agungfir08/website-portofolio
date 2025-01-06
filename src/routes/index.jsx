import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../components/layout/RootLayout';
import Home from '../components/layout/Home';
import Resume from '../features/resume/Resume';
import Analog from '../features/analog/Analog';
import Project from '../features/project/Project';

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
