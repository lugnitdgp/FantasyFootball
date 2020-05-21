import Home from './components/Home'
import Register from './components/Register';
import Player from './components/Player';
import Team from './components/Team';



export const routes = [
  { path: '/', component: Home},
  { path: '/register', component:Register},
  { path: '/players', component:Player},
  { path: '/teams', component:Team},




  ]
