
import Home from './components/views/Home';
export const routes = [

    {
        path:'/',
        name:'home',
        component:Home,
        meta: {
            auth: false
        }
    },

];