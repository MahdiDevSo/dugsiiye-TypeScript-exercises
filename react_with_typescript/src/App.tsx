import Age_Form from "./Age_Form";
import Contact_Form from "./Contact_Form";
import Email_Form from "./Email_Form";
import ProductCard from "./ProductCard";
import { UseState } from "./UseState";
import Welcome from "./Welcome";
import Welcome_Props from "./Welcome_Props";

function App() {
  const handleEmailSubmit = (email: string) => {
    console.log(email);
  };


  const handleAgeSubmit = (age: number) => {
    console.log(age);
  };


  const handleContactSubmit = (data: {
    name: string;
    email: string;
  }) => {
    console.log(data);
  };

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

      <ProductCard name="Mouse" price={500} />

      {/* Rebuild Using type */}
      <Welcome_Props username="Asma" isPremium={true} />

      {/* Exercise 8 */}
      <UseState />

      {/* Exercise 9 */}
      <Email_Form onSubmit={handleEmailSubmit} />
      <Age_Form onSubmit={handleAgeSubmit} />
      <Contact_Form onSubmit={handleContactSubmit} />
    </>
  );
}

export default App;
