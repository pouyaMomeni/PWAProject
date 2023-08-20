import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Login from "./pages/login/login.page";
import Home from "./pages/Home/home.page";
import Profile from "./pages/profile/profile.page";
import Internet from "./pages/SimCard/Internet/internet.page";
import PaymentType from "./pages/PaymentType/paymentType.page";
import PaymentResult from "./pages/PaymentResult/paymentResult.page";
import Charge from "./pages/SimCard/Charge/charge.page";
import InternetType from "./pages/SimCard/Internet/internetType.page";
import Cart from "./pages/Cart/cart.page";
import CartPaymentResult from "./pages/Cart/cartPpaymentResult.page";
import Wallet from "./pages/Wallet/wallet.page";
import WalletCartNumber from "./pages/Wallet/walletCartNumber.page";
import Splash from "./pages/login/Splash.page";
import Insurance from "./pages/Insurance/insurance.page";
import ChargeType from "./pages/SimCard/Charge/chargeType.page";
import CartData from "./pages/Cart/cartData.page";
import UpdateProfile from "./pages/profile/UpdateProfile";
import IncreaseAmount from "./pages/Wallet/increase/IncreaseAmount";
import MinusAmount from "./pages/Wallet/minus/MinusAmount";
import TransitionAmount from "./pages/Wallet/trans/TransitionAmount";
import Ticket from "./pages/Ticket/Ticket.page";
import TicketPayment from "./pages/Ticket/payment/TicketPayment.page";
import Bills from "./pages/Bills/Bills.page";
import EditBills from "./pages/Bills/Bills.edit";
import TResult from "./pages/Wallet/transResult/TResult";
import Activity from "./pages/Activity/Activity";
import BuyTicket from "./pages/Ticket/Ticket.buy";
// import UpdateProfile from "./pages/profile/updateProfile/updateProfile.page";

export default function App() {
  let element = useRoutes([
    { path: "/login", element: <Login /> },
    { path: "/", element: <Home/> },
    { path: "/home", element: <Home /> },
    { path: "/Profile", element: <Profile /> },
    { path: "/Profile/ProfileUpdate", element: <UpdateProfile /> },
    { path: "/simCharge", element: <Charge /> },
    { path: "/chargeType", element: <ChargeType /> },
    { path: "/PaymentType", element: <PaymentType /> },
    { path: "/PaymentResult", element: <PaymentResult /> },
    { path: "/Internet", element: <Internet /> },
    { path: "/internetType", element: <InternetType /> },
    { path: "/CartToCart", element: <Cart /> },
    { path: "/CartData", element: <CartData /> },
    { path: "/Wallet", element: <Wallet /> },
    { path: "/Bills", element: <Bills /> },
    { path: "/Bills/Edit", element: <EditBills /> },
    { path: "/Ticket", element: <Ticket /> },
    { path: "/Ticket/buy", element: <BuyTicket /> },
    { path: "/Ticket/payment", element: <TicketPayment /> },
    { path: "/Wallet/plus", element: <IncreaseAmount /> },
    { path: "/Wallet/minus", element: <MinusAmount /> },
    { path: "/Wallet/trans", element: <TransitionAmount /> },
    { path: "/TransResult", element: <TResult /> },
    { path: "/Cart", element: <Cart /> }, // for Now
    { path: "/WalletCartNumber", element: <WalletCartNumber /> },
    { path: "/CartPaymentResult", element: <CartPaymentResult /> },
    { path: "/activity", element: <Activity /> },
    { path: "/insurance", element: <Insurance /> },
  ]);
  return element;
}
