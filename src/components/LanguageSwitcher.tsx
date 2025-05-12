import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  console.log(i18n);
  

  return (
    <div className="flex justify-center p-4 gap-2">
      <button
        className={` hover:bg-black hover:text-white flex gap-1 items-center  px-4 py-2 text-sm ${
          i18n.language == "en" ? "text-white bg-black" : "bg-gray-300 "
        }`}
        onClick={() => i18n.changeLanguage("en")}
      >
        English
      </button>
      <button
        className={`hover:bg-black hover:text-white flex gap-1 items-center  px-4 py-2 text-sm ${
          i18n.language == "es" ? "text-white bg-black" : "bg-gray-300"
        }`}
        onClick={() => i18n.changeLanguage("es")}
      >
        spain
      </button>
    </div>
  );
};

export default LanguageSwitcher;
