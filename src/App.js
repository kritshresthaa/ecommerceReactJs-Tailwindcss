import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import product1 from "../src/assets/1.jpg";
import product2 from "../src/assets/2.jpg";
import product3 from "../src/assets/3.jpg";
import product4 from "../src/assets/4.jpg";
import product5 from "../src/assets/5.jpg";
import product6 from "../src/assets/6.jpg";
import product7 from "../src/assets/7.jpg";
import product8 from "../src/assets/8.jpg";
import product9 from "../src/assets/9.jpg";
import product10 from "../src/assets/10.png";
import product11 from "../src/assets/11.jpg";
import product12 from "../src/assets/12.jpg";
import product13 from "../src/assets/13.jpg";
import categories from "./categories";
const products = [
  {
    id: 1,
    title: "Product 1",
    description: "This is the description of Product 1",
    price: 19.99,
    image: product1,
  },
  {
    id: 2,
    title: "Product 2",
    description: "This is the description of Product 2",
    price: 29.99,
    image: product2,
  },
  {
    id: 3,
    title: "Product 3",
    description: "This is the description of Product 3",
    price: 39.99,
    image: product3,
  },
  {
    id: 4,
    title: "Product 4",
    description: "This is the description of Product 4",
    price: 49.99,
    image: product4,
  },
  {
    id: 5,
    title: "Product 5",
    description: "This is the description of Product 5",
    price: 59.99,
    image: product5,
  },
  {
    id: 6,
    title: "Product 6",
    description: "This is the description of Product 6",
    price: 69.99,
    image: product6,
  },
  {
    id: 7,
    title: "Product 7",
    description: "This is the description of Product 7",
    price: 79.99,
    image: product7,
  },
  {
    id: 8,
    title: "Product 8",
    description: "This is the description of Product 8",
    price: 89.99,
    image: product8,
  },
  {
    id: 9,
    title: "Product 9",
    description: "This is the description of Product 9",
    price: 99.99,
    image: product9,
  },
  {
    id: 10,
    title: "Product 10",
    description: "This is the description of Product 10",
    price: 109.99,
    image: product10,
  },
  {
    id: 11,
    title: "Product 11",
    description: "This is the description of Product 11",
    price: 119.99,
    image: product11, // Use the imported image variable for the 11th product
  },
  {
    id: 12,
    title: "Product 12",
    description: "This is the description of Product 12",
    price: 129.99,
    image: product12, // Use the imported image variable for the 12th product
  },
  {
    id: 13,
    title: "Product 13",
    description: "This is the description of Product 13",
    price: 139.99,
    image: product13, // Use the imported image variable for the 13th product
  },
];

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Products products={products} categories={categories} />
    </div>
  );
}

export default App;
