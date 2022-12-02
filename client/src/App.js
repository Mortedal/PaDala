import "./App.css";
import Authen from "./components/Authen";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Services from "./pages/Services";
import About from "./pages/About";
import AdminDashboard from "./pages/AdminDash";
import ProfileDash from "./pages/ProfileDash";
import TransactionsDash from "./pages/TransactionsDash";
import EditProfile from "./pages/EditDash";
import AllTransactions from "./pages/AllTransactions";
import CustomerProfile from "./pages/CustomerProfile";
import RiderProfile from "./pages/RiderProfile";
import PopupForm from "./components/PopupForm";
import Pending from "./pages/Pending";
import Completed from "./pages/Completed";
import Canceled from "./pages/Canceled";
import OngoingOrder from "./pages/Ongoingorder";
import PendingAdmin from "./pages/Pendingadmin";
import CompletedAdmin from "./pages/Completedadmin";
import OngoingOrderAdmin from "./pages/Ongoingorderadmin";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Deactprofile from "./pages/Deactprofile";

function App() {
  return (
    <div className="App">
      <Router history={BrowserRouter}>
        <Navbar />
        <Routes>
          <Route element={<Authen />}>
            <Route
              path="/admineditprofile"
              exact
              element={<AdminDashboard />}
            />
            <Route path="/profile" exact element={<ProfileDash />} />
            <Route path="/transaction" exact element={<TransactionsDash />} />
            <Route path="/editprofile" exact element={<EditProfile />} />
            <Route path="/chat" exact element={<Chat />} />
            <Route
              path="/alltransactions"
              exact
              element={<AllTransactions />}
            />
            <Route path="/pending" exact element={<Pending />} />
            <Route path="/completed" exact element={<Completed />} />
            <Route path="/canceled" exact element={<Canceled />} />
            <Route path="/pendingadmin" exact element={<PendingAdmin />} />
            <Route path="/completedadmin" exact element={<CompletedAdmin />} />
            <Route path="/riderprofile" exact element={<RiderProfile />} />
            <Route path="/ongoingorder" exact element={<OngoingOrder />} />
            <Route
              path="/ongoingorderadmin"
              exact
              element={<OngoingOrderAdmin />}
            />
            <Route
              path="/customerprofile"
              exact
              element={<CustomerProfile />}
            />
            <Route path="/deactprofile" exact element={<Deactprofile />} />
          </Route>
          <Route path="/" exact element={<Home />} />
          <Route path="/services" exact element={<Services />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/popupform" exact element={<PopupForm />} />
        </Routes>
        <Footer />
      </Router>

      {/*-------------------------------for design-------------------------------------------------*/}

      {/* <Router>
    <Navbar />
    <Routes>
      <Route path='/dashboard' exact element={<Dashboard/>}/>
      <Route path='/' exact element={<Home/>}/>
      <Route path='/about' exact element={<About/>}/>
      <Route path='/signup' exact element={<Signup/>}/>
      <Route path='/services' exact element={<Services/>}/>
      <Route path='/login' exact element={<Login/>}/>
      <Route path='/profile' exact element={<ProfileDash/>}/>
      <Route path='/transaction' exact element={<TransactionsDash/>}/>
      <Route path='/address' exact element={<AddressDash/>}/>
      <Route path='/favorite' exact element={<FavoriteDash/>}/>
      <Route path='/popupform' exact element={<PopupForm/>}/>
      </Routes>
    <Footer />
    </Router> */}
    </div>
  );
}

export default App;
