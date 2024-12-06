import { useState, useEffect } from 'react';
import './Navbar.css';

import { Flag_of_the_US } from '../../assets/images';

export const Navbar = () => {
  const [scrollingDown, setScrollingDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0); // Track last scroll position

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollingDown(true);
      } else {
        setScrollingDown(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div className="nav-section">
      <div className={`nav ${scrollingDown ? 'nav-hidden' : ''}`}>
        <div className="nav__menu">
            <div className="nav__logo">
                <img src={Flag_of_the_US} alt="" />
                <p>American <br/> Voting</p>
            </div>
            <a className="nav__item" href='/'>
                <p className="nav__item-content">About</p>
            </a>
            <a className="nav__item" href='/'>
                <p className="nav__item-content">Candidates</p>
            </a>
            <a className="nav__item">
                <p className="nav__item-content">Story</p>
            </a>
            <a className="nav__item">
                <p className="nav__item-content">Contact</p>
            </a>

            <button className="nav__login">Log In</button>
        </div>
      </div>
    </div>
  );
};
