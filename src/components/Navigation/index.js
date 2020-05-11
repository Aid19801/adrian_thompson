import React, { useState } from 'react'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import Menu from '@material-ui/icons/Menu';
import './styles.css';

function Navigation() {

  const [headerStyle, setHeaderStyle] = useState({
    transition: 'all 200ms ease-in',
    visibility: 'visible',
    // transitionDelay: '1000ms',
  })

  const [drawer, setDrawer] = useState(true);

  useScrollPosition(({ prevPos, currPos }) => {
    const isVisible = (currPos.y > prevPos.y) || currPos.y === 0;

    const shouldBeStyle = {
      visibility: isVisible ? 'visible' : 'hidden',
      transition: `all 200ms ${isVisible ? 'ease-in' : 'ease-out'}`,
      transform: isVisible ? 'none' : 'translate(0, -100%)',
      // transitionDelay: '1000ms',
    }

    if (JSON.stringify(shouldBeStyle) === JSON.stringify(headerStyle)) return;
    setHeaderStyle(shouldBeStyle)
  }, [headerStyle]);

  const handleClick = () => {
    setDrawer(!drawer);
  }

  return (
    <header style={{ ...headerStyle, position: 'absolute' }} >

      <div className="nav__container flex-center">

        <div className="small-logo">
          <h1>S</h1>
          <h1 style={{ color: 'rgb(69, 188, 243)', fontWeight: 'bold' }}>.</h1>
        </div>

        <Menu onClick={handleClick} />

      </div>


      <div id="drawer__container" className={drawer ? "fade-in" : "fade-out"}>
        {drawer && (
          <ul className="flex-row space-evenly">
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        )}
      </div>
    </header>
  )
}

export default Navigation;