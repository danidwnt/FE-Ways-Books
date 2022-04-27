import React, { useContext, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import Landing from './page/Landing'
import Profile from './page/Profile'
import DownloadBook from './page/DownloadBook';
import Home from './page/Home'

// import { UserContext } from './context/userContext'
// import { API, setAuthToken } from './config/api'
import DetailBook from './page/DetailBook';
import Keranjang from './page/Keranjang';
import Complain from './page/Complain';
import TransAdmin from './page/TransAdmin';
import AddBook from './page/AddBook';
import ComplainAdmin from './page/ComplainAdmin';


// init token on axios every time the app is refreshed
// if (localStorage.token) {
//   setAuthToken(localStorage.token);
// }

function App() {
  // const navigate = useNavigate();
  // const [state, dispatch] = useContext(UserContext);

  // useEffect(() => {
  //   if (localStorage.token) {
  //     setAuthToken(localStorage.token);
  //   } else {
  //     navigate('/landing')
  //   }
  // }, [state]);

  // const checkUser = async () => {
  //   try {
  //     const response = await API.get("/check-auth");

  //     if (response.status === 404) {
  //       return dispatch({
  //         type: "failed",
  //       });
  //     }

  //     let payload = response.data.data.user;
  //     payload.token = localStorage.token;

  //     // Send data to useContext
  //     dispatch({
  //       type: "success",
  //       payload,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   checkUser();
  // }, []);

  return (
    <Routes>
      <Route path='/landing' element={<Landing />} />
      <Route path="/" element={<Home />}/>
      <Route path="/profile" element={<Profile />} />
      <Route path="/download" element={<DownloadBook />} />
      <Route path="/detail-book" element={<DetailBook />} />
      <Route path="/keranjang" element={<Keranjang />} />
      <Route path="/Complain" element={<Complain />} />
      <Route path="/ListTrans" element={<TransAdmin/>} />
      <Route path="/ComplainAdmin" element={<ComplainAdmin/>} />
      <Route path="/AddBook" element={<AddBook/>} />
    </Routes >
  );
}

export default App;
