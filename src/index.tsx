import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {About, App, BlogAndArticles, Contact, NotFound, Projects} from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {TextRendererArticle} from "./articles/TextRenderer";
import {TamuHack24} from "./articles/TamuHack24";

const router = createBrowserRouter(
    [
        {path: '/', element: <App />},
        {path: '/about', element: <About />},
        {path: '/projects', element: <Projects />},
        {path: '/contact', element: <Contact />},
        {path: '/blog', element: <BlogAndArticles />},
        {path: '/blog/text-renderer', element: <TextRendererArticle />},
        {path: '/blog/tamu2024', element: <TamuHack24 />},
        {path: '/*', element: <NotFound />},
        {path: '/blog/*', element: <NotFound />}
    ]
);
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
