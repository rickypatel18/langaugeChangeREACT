import { useTranslation } from "react-i18next";

interface Product {
  id: number;
  name: string;
  price: number;
  dateAdded: string;
}

const ProductCard = ({ product }: { product: Product }) => {
  const { t } = useTranslation();

  return (
    <div className="max-w-sm p-4 border bg-gray-900 rounded-2xl text-white">
      <h2>
        {t("product_name")} : {product.name}
      </h2>
      <h2>{t("price", { price: product.price })}</h2>
      <h2>
        {/* {t("date_added")} : {new Date(product.dateAdded).toLocaleDateString()} */}
        {t("date_added")}:
        {t("{{value, datetime}}", { value: product.dateAdded })}
      </h2>
    </div>
  );
};

export default ProductCard;
