import React , {useState} from 'react';
import Navbar from '../components/Navbar';
import PizzaHome from '../components/pizzahome';
import Cart from '../components/Cart';
import FriesData from '../Dishes/FriesData';
// import Pizzadata from '../Dishes/Pizzadata'; // Import Pizza data

import MenuToggle from '../components/MenuButton'; // Import the MenuButton component
import '../styles/amazon.css';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	const [filteredItems, setFilteredItems] = useState(FriesData); // State for filtered items


	const handleClick = (item)=>{
		let isPresent = false;
		cart.forEach((product)=>{
			if (item.id === product.id)
			isPresent = true;
		})
		if (isPresent){
			setWarning(true);
			setTimeout(()=>{
				setWarning(false);
			}, 2000);
			return ;
		}
		setCart([...cart, item]);
	}

	const handleChange = (item, d) =>{
		let ind = -1;
		cart.forEach((data, index)=>{
			if (data.id === item.id)
				ind = index;
		});
		const tempArr = cart;
		tempArr[ind].amount += d;
		
		if (tempArr[ind].amount === 0)
			tempArr[ind].amount = 1;
		setCart([...tempArr])
	}
	// Handle category selection
	const handleCategorySelect = (category) => {
		let newFilteredItems = [];
	
		switch (category) {
		  case 'Recommended':
			newFilteredItems = FriesData;
			break;
		  case 'Veg Pizza ':
			newFilteredItems = FriesData.filter(item => item.category === 'Veg Pizza ');
			break;
		  case 'Non Veg Pizza ':
			newFilteredItems = FriesData.filter(item => item.category === 'Non Veg Pizza ');
			break;
		  case 'Pasta ':
			newFilteredItems = FriesData.filter(item => item.category === 'Pasta ');
			break;
		  default:
			newFilteredItems = FriesData;
		}
	
		setFilteredItems(newFilteredItems);
	  };
	


  return (
	<React.Fragment>
		<Navbar size={cart.length} setShow={setShow} />
		<MenuToggle handleCategorySelect={handleCategorySelect} />
		{show ? (
        <PizzaHome items={filteredItems} handleClick={handleClick} />
      ) : (
        <Cart cart={cart} setCart={setCart} handleChange={handleChange} />
      )}
      {warning && <div className='warning'>Item is already added to your cart</div>}
    </React.Fragment>
  )
}

export default App