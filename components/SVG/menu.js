const Menu = ({ menuOpen, darkMode }) => (
  <svg
    id="menuIcon--SVG"
    viewBox="0 0 30 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g
      id="fb2c06542532917bf52a0150b903e1fc"
      style={{
        transform: `translateX(${menuOpen ? "4px" : "0"})`,
        transition: ".1s all .06125s ease-in-out",
      }}
    >
      <path
        id="ed9ac06aaa200b5c882cec62e149fc5e"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 3H1V1H29V3Z"
        fill={menuOpen || darkMode ? "white" : "black"}
        style={{
          opacity: menuOpen ? 0 : 1,
          transform: menuOpen ? "translateY(6px)" : "translateY(0)",
          transition: "all .125s ease-in-out",
        }}
      ></path>
      <path
        id="7dd432f30b7c70c3fc0b82b8e56fe6a7"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 9H1V7H29V9Z"
        fill={menuOpen || darkMode ? "white" : "black"}
        style={{
          transform: menuOpen
            ? "rotate(40.5deg) translate(-1px, -4px)"
            : "rotate(0) translate(0,0)",
          transition: ".1s all .06125s ease-in-out",
        }}
      ></path>
      <path
        id="28691597a75762d5ab276fe2cddf7754"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 15H1V13H29V15Z"
        fill={menuOpen || darkMode ? "white" : "black"}
        style={{
          transform: menuOpen
            ? "rotate(-40.5deg) translate(-17px, 0px)"
            : "rotate(0) translate(0,0)",
          transition: ".1s all .06125s ease-in-out",
        }}
      ></path>
      <path
        id="e408d68ad57349f47e48a5f77e929f60"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M29 21H1V19H29V21Z"
        fill={menuOpen || darkMode ? "white" : "black"}
        style={{
          opacity: menuOpen ? 0 : 1,
          transform: menuOpen ? "translateY(-6px)" : "translateY(0)",
          transition: "all .125s ease-in-out",
        }}
      ></path>
    </g>
  </svg>
);

const MenuV2 = ({ menuOpen, darkMode }) => {
  const subRectColor = darkMode ? "#898C98" : "#646772";
  const mainRectColor = darkMode || menuOpen ? "#fff" : "#252939";

  return (
    <svg
      id="menuIcon--SVG"
      width="500"
      height="500"
      viewBox="0 0 500 500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="menu-v2">
        <rect
          id="rect-1"
          x="217"
          y="117"
          width="200"
          height="54"
          rx="27"
          fill={subRectColor}
          style={{
            transformOrigin: "50% 50%",
            transition: ".31s ease-in-out all",
            opacity: menuOpen ? 0 : 1,
            transform: menuOpen ? "scaleY(0%)" : "scaleY(100%)",
          }}
        />
        <rect
          id="rect-2"
          x="82"
          y="223"
          width="336"
          height="54"
          rx="27"
          fill={mainRectColor}
          style={{
            transformOrigin: "50% 50%",
            transition: ".34s ease-in-out",
            transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)",
          }}
        />
        <rect
          id="rect-3"
          x="147"
          y="329"
          width="270"
          height="54"
          rx="27"
          fill={subRectColor}
          style={{
            transformOrigin: "50% 50%",
            transition: ".34s ease-in-out transform, .22s ease-in-out opacity",
            transform: menuOpen
              ? "rotate(-45deg) translate(-52px, -102px)"
              : "rotate(0deg) translate(0, 0)",
            opacity: menuOpen ? 0 : 1,
          }}
        />
        <rect
          id="rect-4"
          x="181"
          y="300"
          width="168"
          height="27"
          rx="13.5"
          fill={subRectColor}
          style={{
            transform: menuOpen ? 'scale(2) rotate(-45deg) translate(-13px, -61px)' : 'scale(1) rotate(-45deg) translate(-13px, -61px)',
            transformOrigin: "50% 50%",
            transition:
              ".475s ease-in-out transform, .23s ease-in-out .12s opacity",
            opacity: menuOpen ? 1 : 0
          }}
        />
      </g>
    </svg>
  );
};

export { Menu, MenuV2 };
