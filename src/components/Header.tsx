import { Translate } from '@phosphor-icons/react';
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const { i18n } = useTranslation();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setIsDropdownOpen(false);
  };

  return (
    <header className="w-full py-2 px-8 absolute top-0">
      <nav className="flex justify-between items-center">
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-200">Sobre Nós</Link>
          <Link to="/contact" className="text-white hover:text-gray-200">Contato</Link>
        </div>
        <div className="relative">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="text-white focus:outline-none"
          >
            <Translate size={24} />
          </button>
          {isDropdownOpen && (
            <ul className="absolute right-0 mt-2 w-40 bg-white border rounded shadow-lg">
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-xs"
                onClick={() => changeLanguage('en')}
              >
                English
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-xs"
                onClick={() => changeLanguage('pt')}
              >
                Português (BR)
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-xs"
                onClick={() => changeLanguage('es')}
              >
                Español
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-xs"
                onClick={() => changeLanguage('fr')}
              >
                Français
              </li>
              <li
                className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-xs"
                onClick={() => changeLanguage('zh')}
              >
                中文
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;