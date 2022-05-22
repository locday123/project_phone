import Home from '~/page/Home'
import NewProduct from '~/page/NewProduct'
import KhuyenMai from '~/page/KhuyenMai'


const publicRoutes = [
    {path:'/', component: Home},
    {path:'/khuyen-mai', component: KhuyenMai},
    {path:'/newsp', component: NewProduct, layout: null}
]

const privateRoutes=[

]

export {publicRoutes, privateRoutes}