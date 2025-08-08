import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout';
import Home from './pages/Home';
import { Toaster } from "sonner";
import LoginPage from './pages/LoginPage';
import Register from './pages/Register';
import Profile from './pages/Profile';

function App() {
return (
<BrowserRouter>
<Toaster poistion ="top-right"/>
    <Routes>
        <Route path = "/" element = { <UserLayout/> }>
        <Route index element = {<Home/>}></Route>
            <Route path = "login" element = { <LoginPage/> }/>
             <Route path = "register" element = { <Register/> }/>
              <Route path = "profile" element = { <Profile/> }/>

         </Route>
      </Routes>
</BrowserRouter>
)};

export default App
