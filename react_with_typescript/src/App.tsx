import ProductCard from "./ProductCard";
import { UseState } from "./UseState";
import Welcome from "./Welcome";
import Welcome_Props from "./Welcome_Props";

function App() {
  return (
    <>
      <Welcome username="Omar Tood" isPremium={true} />
      <Welcome username="Mahdi iltireh" isPremium={false} />
      <Welcome username="Mc Hamouda" isPremium={true} />

      {/*  ProductCard*/}
      <ProductCard
        name="Laptop"
        price={2000}
        description="Powerful gaming laptop"
      />

      <ProductCard
        name="Smart phone"
        price={1000}
        description="A smartphone is a portable electronic device that combines"
      />

      <ProductCard
        name="Mouse"
        price={500}
       
      />

      {/* Rebuild Using type */}
      <Welcome_Props username="Asma" isPremium={true}/>

      {/* Exercise 8 */}
      <UseState/>
    </>
  );
}

export default App;
