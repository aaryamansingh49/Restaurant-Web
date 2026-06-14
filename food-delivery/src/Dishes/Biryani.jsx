import React , {useState} from 'react';
import Navbar from '../components/Navbar';
import PizzaHome from '../components/pizzahome';
import Cart from '../components/Cart';
import BiryaniData from '../Dishes/BiryaniData';
// import Pizzadata from '../Dishes/Pizzadata'; // Import Pizza data
import MenuToggle from '../components/MenuButton'; // Import the MenuButton component
import '../styles/amazon.css';

const App = () => {
	const [show, setShow] = useState(true);
	const [cart , setCart] = useState([]);
	const [warning, setWarning] = useState(false);
	const [filteredItems, setFilteredItems] = useState(BiryaniData); // State for filtered items


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
			newFilteredItems = BiryaniData;
			break;
		  case 'Veg Pizza ':
			newFilteredItems = BiryaniData.filter(item => item.category === 'Veg Pizza ');
			break;
		  case 'Non Veg Pizza ':
			newFilteredItems = BiryaniData.filter(item => item.category === 'Non Veg Pizza ');
			break;
		  case 'Pasta ':
			newFilteredItems = BiryaniData.filter(item => item.category === 'Pasta ');
			break;
		  default:
			newFilteredItems = BiryaniData;
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