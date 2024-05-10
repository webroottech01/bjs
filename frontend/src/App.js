import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './style.scss';
import Header from './components/header/header';
import Footer from './components/footer/footer'
import Home from './pages/home/home';
import ContactUs from "./pages/contact-us/contact-us";
import ComingSoon from "./components/coming-soon/coming-soon";
import Pricing from "./pages/pricing/pricing";
import Insights from "./pages/Insights/insights"; 
import Automobile from "./pages/industries/automobile/automobile";
import AccountManagment from "./pages/solutions/account-managment/account-managment";
import Finance from "./pages/industries/finance/finance";
import ContactCenter from "./pages/solutions/contact-center/contact-center";



function App() {
  return (
    <div className="App">
      
      <BrowserRouter basename={process.env.PUBLIC_URL} > 
      <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          {/*  Solutions routes */}
          <Route path="solutions/contact-center" element={<ContactCenter />} />
          <Route path="solutions/account-managment" element={<AccountManagment />} />
          <Route path="solutions/integrated-sales" element={<ComingSoon />} />
          <Route path="solutions/virtual-pa" element={<ComingSoon />} />
          <Route path="solutions/human-resources" element={<ComingSoon />} />
          <Route path="solutions/process-consulting" element={<ComingSoon />} />
          <Route path="solutions/finance-accounting" element={<ComingSoon />} />
          <Route path="solutions/e-commerce" element={<ComingSoon />} />
          <Route path="solutions/field-agent-management" element={<ComingSoon />} />
          {/* end Solutions routes */}
          {/*  Industries routes */}
          <Route path="/industries/automobile" element={<Automobile />} />
          <Route path="/industries/e-commerce" element={<Finance />} /> 
          <Route path="/industries/finance" element={<Finance />} /> 
          <Route path="/industries/hospitality" element={<ComingSoon />} /> 
          <Route path="/industries/real-estate" element={<ComingSoon />} /> 
          <Route path="/industries/supply-chain" element={<ComingSoon />} /> 
          <Route path="/industries/tele-communications" element={<ComingSoon />} />
           {/*  end Industries routes */}
          <Route path="/insights" element={<Insights />} /> 
        </Routes> 
        <Footer /> 
      </BrowserRouter>
      
    </div>
  );
}

export default App;