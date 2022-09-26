import { BrowserRouter, Route, Routes } from 'react-router-dom';
import * as React from "react";
import './App.css';
import Header from './Component/Shared/Header/Header';
import Home from './Component/Home/Home';
import Dashbord from './Component/Home/Dashbord/Dashbord';
import Sms from './Component/Sms/Sms';
import Footer from './Component/Shared/Footer/Footer';
import Phonebook from './Component/PhoneBook/Phonebook';
import Group from './Component/Group/Group';
import Report from './Component/Report/Report';
import Package from './Component/Package/Package';
import TramsAndCondition from './Component/TramsAndCondition/TramsAndCondition';
import PrivacyPolicy from './Component/PrivecyPolicy/PrivacyPolicy';
import About from './Component/About/About';
import Notice from './Component/Notice/Notice';
import SignIn from './Component/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Home></Home>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Dashbord />} />
          <Route path='dashbord' element={<Dashbord />} />
          <Route path='sms' element={<Sms />} ></Route>
          <Route path='phone-book' element={<Phonebook />} />
          <Route path='group' element={<Group />} />
          <Route path='report' element={<Report />} />
          <Route path='package' element={<Package />} />
          <Route path='terms-cons' element={<TramsAndCondition />} />
          <Route path='privacy' element={<PrivacyPolicy />} />
          <Route path='about' element={<About />} />
          <Route path='notice' element={<Notice />} />
          <Route path='signin' element={<SignIn />} />
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}
export default App;
