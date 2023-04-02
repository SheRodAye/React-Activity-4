import { Route, Routes } from "react-router";
import Header from "./Components/header";
import Footer from "./Components/footer";
import Cars from "./Pages/cars";
import ContactUs from "./Pages/contactUs";
import Home from "./Pages/home";

function App() {
  return (
    <div>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="contactUs" element={<ContactUs />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
