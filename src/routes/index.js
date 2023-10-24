import CartPage from "../pages/CartPage/CartPage";
import HomePage from "../pages/HomePage/HomePage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import OrderPage from "../pages/OrderPage/OrderPage";
import ProductDetailPage from "../pages/ProductDetailPage/ProductDetailPage";
import ProductPage from "../pages/ProductPage/ProductPage";
import SignInPage from "../pages/SignInPage/SignInPage";
import SignUpPage from "../pages/SignUpPage/SignUpPage";
import TypeProductPage from "../pages/TypeProductPage/TypeProductPage";

const routes = [
    {
        path: '/',
        page: HomePage,
        IsShowHeader: true,
    },

    {
        path: '/order',
        page: OrderPage,
        IsShowHeader: true
    },

    {
        path: '/products',
        page: ProductPage,
        IsShowHeader: true

    },

    {
        path: '/sign-in',
        page: SignInPage,
        IsShowHeader: false,
    },

    {
        path: '/sign-up',
        page: SignUpPage,
        IsShowHeader: false
    },

    {
        path: '/product-detail',
        page: ProductDetailPage,
        IsShowHeader: true

    },

    {
        path: '*',
        page: NotFoundPage,
    },

    {
        path: '/:type',
        page: TypeProductPage,
        IsShowHeader: true
    },

    {
        path: '/cart',
        page: CartPage,
        IsShowHeader: true
    },
    


]
export default routes;