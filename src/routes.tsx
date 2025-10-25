import {
  Router,
  RootRoute,
  Route,
} from '@tanstack/react-router';


import LandingPage from './frontends/landingPage/LandingPage';
import Dashboard from './frontends/dashboard/Dashboard';
import AdminArea from './frontends/adminArea/AdminArea';
import Connections from './frontends/adminArea/components/Connections';
import PersonnelDetails from './frontends/adminArea/components/PersonnelDetails';
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
