import { Route, Switch } from 'react-router-dom';
import BookList from '../pages/book/BookList';
import BookDetails from '../pages/book/BookDetails';
import React from 'react';
import NotFound from '../pages/shared/NotFound';

type RouteConfig = {
  path: string[] | string | undefined;
  component: JSX.Element;
};

const routes: RouteConfig[] = [
  {
    path: '/',
    component: <BookList />,
  },
  {
    path: '/books/:id(\\d+)',
    component: <BookDetails />,
  },
  {
    path: undefined,
    component: <NotFound />,
  },
];

export default function Routes(): JSX.Element {
  return (
    <Switch>
      {routes.map((route: RouteConfig, index: number) => (
        <Route exact key={index} path={route.path}>
          {route.component}
        </Route>
      ))}
    </Switch>
  );
}
