import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./style.scss";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./pages/home/home";
import ContactUs from "./pages/contact-us/contact-us";
// import ComingSoon from "./components/coming-soon/coming-soon";
import Pricing from "./pages/pricing/pricing";
import Insights from "./pages/Insights/insights";
import Automobile from "./pages/industries/automobile/automobile";
import AccountManagment from "./pages/solutions/account-managment/account-managment";
import Finance from "./pages/industries/finance/finance";
import ContactCenter from "./pages/solutions/contact-center/contact-center";
import ECommerce from "./pages/industries/e-commerce/e-commerce";
import Manufacturing from "./pages/industries/manufacturing/manufacturing";
import RealEstate from "./pages/industries/real-estate/realestate";
import Supplychain from "./pages/industries/supplychain/supplychain";
import TeleCommunications from "./pages/industries/telecommunications/telecommunications";
import IntegratedSales from "./pages/solutions/integrated-sales/integrated-sales";
import VirtualPa from "./pages/solutions/virtual-pa/virtual-pa";
import HumanResources from "./pages/solutions/human-resources/human-resources";
import Banner from "./components/banner/banner";
import ProcessConsulting from "./pages/solutions/process-consulting/process-consulting";
import FinanceEcomm from "./pages/solutions/finance-ecomm/finance-ecomm";
import Ecommerce from "./pages/solutions/e-commerce/e-commerce";
import FieldAgentManagement from "./pages/solutions/field-agent-management/field-agent-management";
import SingleInsight from "./pages/single-insight/single-insight";
import Outsourcing from "./pages/outsourcing/outsourcing";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/help" element={<ContactUs />} />
          <Route path="/pricing" element={<Pricing />} />
          {/*  Solutions routes */}
          <Route path="solutions/contact-center" element={<ContactCenter />} />
          <Route
            path="solutions/account-management"
            element={<AccountManagment />}
          />
          <Route
            path="solutions/integrated-sales"
            element={<IntegratedSales />}
          />
          <Route path="solutions/virtual-pa" element={<VirtualPa />} />
          <Route
            path="solutions/human-resources"
            element={<HumanResources />}
          />
          <Route path="solutions/process-consulting" element={<ProcessConsulting />} />
          <Route path="solutions/finance-ecomm" element={<FinanceEcomm />} />
          <Route path="solutions/e-commerce" element={<Ecommerce />} />
          <Route
            path="solutions/field-agent-management"
            element={<FieldAgentManagement />}
          />
          {/* end Solutions routes */}
          {/*  Industries routes */}
          <Route path="/industries/automobile" element={<Automobile />} />
          <Route path="/industries/e-commerce" element={<ECommerce />} />
          <Route path="/industries/finance" element={<Finance />} />
          <Route path="/industries/manufacturing" element={<Manufacturing />} />
          <Route path="/industries/real-estate" element={<RealEstate />} />
          <Route path="/industries/supply-chain" element={<Supplychain />} />
          <Route
            path="/industries/tele-communications"
            element={<TeleCommunications />}
          />
          {/*  end Industries routes */}

          {/*  end Insights routes */}
          <Route path="/insights" element={<Insights />} />

          <Route path="/insight/:id" element={<SingleInsight />} />
          <Route path="/insight/why-outsourcing-your-call-center-is-a-smart-move-for-your-business" element={<Outsourcing />} />
          {/*  end Industries routes */}  
        </Routes>
        <Footer />
        <div className="underconst">
        <img className="underlogo" src={"images/bjslogo.svg"} alt="" />
          <Banner title={"Coming Soon: Responsive version"} desc="A responsive version of our website is in the works. In the meantime, please visit us on a screen size of 1920px or larger for the best experience. Thank you for your patience."></Banner>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
