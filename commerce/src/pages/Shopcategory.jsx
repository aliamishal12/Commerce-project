 
import { useContext } from 'react'
import './CSS/ShopCategory.css'
  import  {ShopContext} from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
 import Item from '../components/Items/Item'
const Shopcategory = (props) => {
  const {all_product} = useContext(shopContextp);
  return (
    <div className='shop-category'>
      <img src= {props.banner} alt="" />
      <div className="shopcategory-indexsort">
<p>
  <span>Showing 1-12</span> out of 36 product
</p>
<div className="shopcategory-sort">
  sort by <img src={dropdown_icon} alt="" />
</div>
      </div>
<div className="shopcategory-products">
  {all_product.map((item,i)=>{
    if(props.category===item.category){
     return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.old_price}/>
    }
    else{
      return null;
    }
  })}
</div>

    </div>
  )
}

export default Shopcategory


