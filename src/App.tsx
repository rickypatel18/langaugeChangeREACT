import "./App.css";
import "./i18n";
import LanguageSwitcher from "./components/LanguageSwitcher";
import ProductCard from "./components/ProductCard";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const initialProducts = [
  {
    id: 1,
    name: "Product 1",
    price: 10.99,
    dateAdded: "2025-3-04",
  },
  {
    id: 2,
    name: "Product 2",
    price: 19,
    dateAdded: "2025-2-04",
  },
  {
    id: 3,
    name: "Product 3",
    price: 29,
    dateAdded: "2025-12-04",
  },
];

function App() {
  const [products] = useState(initialProducts);
  const { t } = useTranslation();

  return (
    <div className="border flex flex-col items-center justify-center">
      <LanguageSwitcher />
      <br />
      <h2 className="text-2xl font-bold">{t("welcome")}</h2>
      <br />
      <div className="grid grid-cols-3 gap-2">
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
}

export default App;
