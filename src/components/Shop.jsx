import { useSelector } from "react-redux";
import FoodItem from "./FoodItem";

const Shop = () =>{
    const {loading,items}=useSelector(state=>state)
    console.log(items.length)
    return(
        <div>
            <section className="text-dimWhite body-font">
  <div className="container px-5 py-24 mx-auto grid grid-cols-3 gap-2">  
    {items.map((item)=><FoodItem name={item.name} img={item.img} dsc={item.dsc} price={item.price} />)}
  </div>
</section>
        </div>
    )
}
export default Shop;