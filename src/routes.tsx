import {
  Router,
  RootRoute,
  Route,
} from '@tanstack/react-router';


import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import AdminArea from './pages/AdminArea';
import Connections from './pages/Connections';
import PersonnelDetails from './pages/PersonnelDetails';
import App from './App';

const rootRoute = new RootRoute({
  component: App,
});

const landingRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: LandingPage,
});

const dashboardRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'dashboard',
  component: Dashboard,
});

const adminRoute = new Route({
  getParentRoute: () => rootRoute,
  path: 'admin',
  component: AdminArea,
});

const connectionsRoute = new Route({
  getParentRoute: () => adminRoute,
  path: 'connections',
  component: Connections,
});

const personnelRoute = new Route({
  getParentRoute: () => adminRoute,
  path: 'personnel',
  component: PersonnelDetails,
});

export const router = new Router({
  routeTree: rootRoute.addChildren([
    landingRoute,
    dashboardRoute,
    adminRoute.addChildren([
      connectionsRoute,
      personnelRoute,
    ]),
  ]),
});
