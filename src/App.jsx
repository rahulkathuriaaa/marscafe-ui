import styles from "./style";
import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import Contact from "./components/Contact";
import Shop from "./components/Shop";
import { useDispatch } from "react-redux";
import { GetFoodThunk } from "./redux/GetFoodSlice";
import { useEffect } from "react";

const App = () => {
const dispatch=useDispatch();
useEffect(()=>{
  dispatch(GetFoodThunk())
},[])
return(
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
        <Shop/>
      </div>
    </div>
    
    <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </div>
)};

export default App;
