// import Footer from "./components/Footer";
// import Header from "./components/Header";
import{BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home";
import Cart from "./pages/Cart";


function App() {
 
  return (
    <>
          {/* <Header /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          </Routes>
      </BrowserRouter>
                {/* <Footer /> */}

      </>
  );
}

export default App;
