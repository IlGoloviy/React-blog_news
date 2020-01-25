import Main from './pages/Main';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import Modal from './pages/Modal';
import Login from './pages/Login';

export default [
  {
    path: '/',
    component: Main,
    exact: true
  },
  {
    path: '/news',
    component: NewsPage,
    exact: true
  },
  {
    path: '/modal',
    component: Modal,
    exact: true
  },
  {
    path: '/profile',
    component: ProfilePage,
    exact: true
  },
  {
    path: '/login',
    component: Login,
    exact: true
  }
]