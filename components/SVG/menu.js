const Menu = ({ menuOpen, darkMode }) => (
  <svg
    id="menuIcon--SVG"
    viewBox="0 0 30 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="fb2c06542532917bf52a0150b903e1fc" style={{
      transform: `translateX(${menuOpen ? '4px' : '0'})`,
      transition: '.1s all .06125s ease-in-out'
    }}>
      <path
        id="ed9ac06aaa200b5c882cec62e149fc5e"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 3H1V1H29V3Z"
        fill={menuOpen || darkMode ? 'white' : 'black'}
        style={{
          opacity: menuOpen ? 0 : 1,
          transform: menuOpen ? 'translateY(6px)' : 'translateY(0)',
          transition: 'all .125s ease-in-out'
        }}
      ></path>
      <path
        id="7dd432f30b7c70c3fc0b82b8e56fe6a7"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 9H1V7H29V9Z"
        fill={menuOpen || darkMode ? 'white' : 'black'}
        style={{
          transform: menuOpen ? 'rotate(40.5deg) translate(-1px, -4px)' : 'rotate(0) translate(0,0)',
          transition: '.1s all .06125s ease-in-out'
        }}
      ></path>
      <path
        id="28691597a75762d5ab276fe2cddf7754"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 15H1V13H29V15Z"
        fill={menuOpen || darkMode ? 'white' : 'black'}
        style={{
          transform: menuOpen ? 'rotate(-40.5deg) translate(-17px, 0px)' : 'rotate(0) translate(0,0)',
          transition: '.1s all .06125s ease-in-out'
        }}
      ></path>
      <path
        id="e408d68ad57349f47e48a5f77e929f60"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 21H1V19H29V21Z"
        fill={menuOpen || darkMode ? 'white' : 'black'}
        style={{
          opacity: menuOpen ? 0 : 1,
          transform: menuOpen ? 'translateY(-6px)' : 'translateY(0)',
          transition: 'all .125s ease-in-out'
        }}
      ></path>
    </g>
  </svg>
);

export default Menu