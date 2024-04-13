import ItemList from "./components/ItemList";
import ShopingCart from "./components/ShopingCart";

function App() {
  return (
    <div>
      <h1 className="text-center text-2xl">🛒 Shopping List 🛒</h1>
      <div className="flex justify-center items-center flex-wrap px-5">
        <ItemList name="Vivo Y73" price={15000} />
        <ItemList name="Apple 15 Pro" price={35000} />
        <ItemList name="Jio Bharat" price={1500} />
        <ItemList name="Redmi 11" price={12770} />
        <ItemList name="Macbook Air" price={10470} />
        <ItemList name="Dell Inspirion" price={19970} />
        <ItemList name="HP Omen" price={11780} />
        
      </div>

      <div className="">
        <ShopingCart />
      </div>
    </div>
  );
}

export default App;
