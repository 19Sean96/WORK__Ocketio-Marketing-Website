import styled from "styled-components";

const StyledSlide1 = styled.svg`
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
const Slide1 = ({ active, previous }) => {
  return (
    <StyledSlide1
      active={active}
      previous={previous}
      viewBox="0 0 890 760"
      className="slideshow--item"
    >
      <defs>
        <filter
          id="Rectangle_22"
          x="23.08"
          y="49.055"
          width="843.84"
          height="675.89"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feFlood floodColor="#121212" floodOpacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Register-step-1" transform="translate(180 3681)">
        <rect
          id="Rectangle_38"
          dataname="Rectangle 38"
          width="890"
          height="760"
          rx="11"
          transform="translate(-180 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Register-step-1-2"
          dataname="Register-step-1"
          transform="translate(-129.92 -3611.945)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -50.08, -69.05)"
            filter="url(#Rectangle_22)"
          >
            <rect
              id="Rectangle_22-2"
              dataname="Rectangle 22"
              width="789.84"
              height="621.89"
              rx="10"
              transform="translate(50.08 69.05)"
              fill="#fff"
            />
          </g>
          <text
            id="First_Name"
            dataname="First Name"
            transform="translate(55.35 192.34)"
            fill="#333"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              First Name
            </tspan>
          </text>
          <text
            id="Please_enter_your_first_name"
            dataname="Please enter your first name"
            transform="translate(55.35 274.6)"
            fill="#b3b3b3"
            fontSize="14"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our first name</tspan>
          </text>
          <text
            id="Please_enter_your_first_name-2"
            dataname="Please enter your first name"
            transform="translate(404.35 274.6)"
            fill="#b3b3b3"
            fontSize="14"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our first name</tspan>
          </text>
          <text
            id="Please_enter_your_company_name"
            dataname="Please enter your company name"
            transform="translate(55.35 390.6)"
            fill="#b3b3b3"
            fontSize="14"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our compa</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              n
            </tspan>
            <tspan y="0">y name</tspan>
          </text>
          <text
            id="Please_enter_your_short_name"
            dataname="Please enter your short name"
            transform="translate(56.59 507.6)"
            fill="#b3b3b3"
            fontSize="14"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our short name</tspan>
          </text>
          <text
            id="Set_Up_Your_Workspace"
            dataname="Set Up Your Workspace"
            transform="translate(56.35 143.09)"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Set Up{" "}
            </tspan>
            <tspan y="0" letterSpacing="-0.11em">
              Y
            </tspan>
            <tspan y="0">our </tspan>
            <tspan y="0" letterSpacing="-0.03em">
              W
            </tspan>
            <tspan y="0">orkspace</tspan>
          </text>
          <rect
            id="Rectangle_23"
            dataname="Rectangle 23"
            width="323.15"
            height="53.89"
            rx="6"
            transform="translate(55.12 204)"
            fill="#f4f6fa"
          />
          <text
            id="Last_Name"
            dataname="Last Name"
            transform="translate(404.35 192.34)"
            fill="#333"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Last Name
            </tspan>
          </text>
          <rect
            id="Rectangle_24"
            dataname="Rectangle 24"
            width="323.15"
            height="53.89"
            rx="6"
            transform="translate(403.97 204)"
            fill="#f4f6fa"
          />
          <text
            id="Workspace_Name"
            dataname="Workspace Name"
            transform="translate(56.35 308.34)"
            fill="#333"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0" letterSpacing="-0.03em">
              W
            </tspan>
            <tspan y="0">orkspace Name</tspan>
          </text>
          <rect
            id="Rectangle_25"
            dataname="Rectangle 25"
            width="671.87"
            height="54.02"
            rx="6"
            transform="translate(55.24 319.87)"
            fill="#f4f6fa"
          />
          <text
            id="Workspace_URL"
            dataname="Workspace URL"
            transform="translate(56.35 425.34)"
            fill="#333"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0" letterSpacing="-0.03em">
              W
            </tspan>
            <tspan y="0">orkspace URL</tspan>
          </text>
          <rect
            id="Rectangle_26"
            dataname="Rectangle 26"
            width="671.87"
            height="54.15"
            rx="6"
            transform="translate(55.24 436.74)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_27"
            dataname="Rectangle 27"
            width="182"
            height="43"
            rx="5"
            transform="translate(539.12 441.89)"
            fill="#e3e5e8"
          />
          <text
            id="_.wirewise.com"
            dataname=".wirewise.com"
            transform="translate(579.2 468.97)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              .wirewise.com
            </tspan>
          </text>
          <path
            id="Path_31"
            dataname="Path 31"
            d="M923.71,280a1.9,1.9,0,0,1-.09-.58c0-.59.42-.89,1.26-.89a1.57,1.57,0,0,1,1,.32l3.8,12.36,4-12.43h1.52l4,12.43L942.59,280a2.6,2.6,0,0,1,.67-1.17,1.619,1.619,0,0,1,1.11-.37,1.47,1.47,0,0,1,1.17.51l-5.45,16.08h-1.56l-4-11.94-4.06,11.94h-1.58Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_32"
            dataname="Path 32"
            d="M949.16,275.67a1.959,1.959,0,1,1,2.76,0A2,2,0,0,1,949.16,275.67Zm.08,19.46V280.49a2.169,2.169,0,0,1,.44-1.42,1.55,1.55,0,0,1,1.27-.53,3,3,0,0,1,.89.13V293.3a2.15,2.15,0,0,1-.45,1.43,1.54,1.54,0,0,1-1.26.52,3,3,0,0,1-.89-.12Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_33"
            dataname="Path 33"
            d="M957.22,295.13V280.49a2.12,2.12,0,0,1,.45-1.42,1.53,1.53,0,0,1,1.26-.53,3,3,0,0,1,.89.13v4.39a7.541,7.541,0,0,1,1.9-3.46,4.07,4.07,0,0,1,2.85-1.15c1.19,0,1.78.53,1.78,1.6a1.66,1.66,0,0,1-.63,1.41,2.19,2.19,0,0,0-1-.16,4,4,0,0,0-3.67,2.13c-.84,1.42-1.27,3.72-1.27,6.9v3a2.17,2.17,0,0,1-.44,1.42,1.54,1.54,0,0,1-1.26.52A3,3,0,0,1,957.22,295.13Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_34"
            dataname="Path 34"
            d="M971.26,294.42a6.79,6.79,0,0,1-2.6-2.94,10.34,10.34,0,0,1-.92-4.49,10.5,10.5,0,0,1,.93-4.55,7.211,7.211,0,0,1,2.6-3,6.9,6.9,0,0,1,3.85-1.07,6,6,0,0,1,4.86,2.13,8.851,8.851,0,0,1,1.76,5.77,2.17,2.17,0,0,1-.24,1.22,1.16,1.16,0,0,1-1,.32H970.3a6.06,6.06,0,0,0,1.28,4,4.3,4.3,0,0,0,3.44,1.5,5.86,5.86,0,0,0,2.87-.7,5.69,5.69,0,0,0,2-1.86,1.4,1.4,0,0,1,.95,1.44,2.11,2.11,0,0,1-.86,1.6,6.468,6.468,0,0,1-2.2,1.19,8.789,8.789,0,0,1-2.74.45,7.3,7.3,0,0,1-3.78-1.01Zm7.89-8.77a7.159,7.159,0,0,0-1-3.93,3.28,3.28,0,0,0-2.88-1.32,4.14,4.14,0,0,0-3.26,1.4,7.529,7.529,0,0,0-1.59,4.1Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_35"
            dataname="Path 35"
            d="M983.77,280a2.8,2.8,0,0,1-.09-.58c0-.59.42-.89,1.27-.89a1.54,1.54,0,0,1,1,.32l3.8,12.36,4-12.43h1.52l4,12.43,3.33-11.15a2.59,2.59,0,0,1,.66-1.17,1.65,1.65,0,0,1,1.11-.37,1.45,1.45,0,0,1,1.17.51l-5.45,16.08H998.6l-4.05-11.94-4.06,11.94H988.9Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_36"
            dataname="Path 36"
            d="M1009.23,275.67a1.955,1.955,0,1,1,2.75,0A2,2,0,0,1,1009.23,275.67Zm.08,19.46V280.49a2.12,2.12,0,0,1,.44-1.42,1.55,1.55,0,0,1,1.27-.53,2.891,2.891,0,0,1,.88.13V293.3a2.15,2.15,0,0,1-.44,1.43,1.57,1.57,0,0,1-1.27.52,2.919,2.919,0,0,1-.88-.12Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_37"
            dataname="Path 37"
            d="M1018.68,295a5.419,5.419,0,0,1-2-1.19,2.18,2.18,0,0,1-.75-1.57,1.09,1.09,0,0,1,.89-1.18,7.9,7.9,0,0,0,2.14,1.62,5.64,5.64,0,0,0,2.67.65,3.28,3.28,0,0,0,2.19-.67,2.31,2.31,0,0,0,.79-1.86,2.28,2.28,0,0,0-.76-1.76,7.23,7.23,0,0,0-2.66-1.31,10,10,0,0,1-3.88-2.07,4.2,4.2,0,0,1-1.12-3.09,3.62,3.62,0,0,1,1.47-3.25,6.62,6.62,0,0,1,3.72-1,7,7,0,0,1,3.82.93,2.69,2.69,0,0,1,1.44,2.28,1.09,1.09,0,0,1-.88,1.18,8.651,8.651,0,0,0-1.92-1.7,4.46,4.46,0,0,0-2.36-.64,3.4,3.4,0,0,0-2.08.6,1.84,1.84,0,0,0-.8,1.55,2.25,2.25,0,0,0,.82,1.79,9.3,9.3,0,0,0,2.85,1.41,9.57,9.57,0,0,1,3.79,2,4,4,0,0,1,1.09,2.91,4.23,4.23,0,0,1-1.55,3.59,6.46,6.46,0,0,1-4,1.18,8.681,8.681,0,0,1-2.92-.4Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_38"
            dataname="Path 38"
            d="M1033.41,294.42a6.85,6.85,0,0,1-2.6-2.94,10.339,10.339,0,0,1-.91-4.49,10.5,10.5,0,0,1,.93-4.55,7.139,7.139,0,0,1,2.6-3,6.9,6.9,0,0,1,3.85-1.07,6,6,0,0,1,4.86,2.13,8.8,8.8,0,0,1,1.76,5.77,2.17,2.17,0,0,1-.24,1.22,1.17,1.17,0,0,1-1,.32h-10.2a6,6,0,0,0,1.29,4,4.26,4.26,0,0,0,3.43,1.51,5.87,5.87,0,0,0,2.87-.71,5.669,5.669,0,0,0,2-1.85,1.38,1.38,0,0,1,1,1.44,2.11,2.11,0,0,1-.85,1.6,6.458,6.458,0,0,1-2.2,1.2,8.549,8.549,0,0,1-2.74.45,7.31,7.31,0,0,1-3.85-1.03Zm7.89-8.77a7.081,7.081,0,0,0-1-3.93,3.31,3.31,0,0,0-2.89-1.32,4.16,4.16,0,0,0-3.26,1.4,7.69,7.69,0,0,0-1.59,4.1Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_39"
            dataname="Path 39"
            d="M907.68,286.72l-7.3,12.64a6.315,6.315,0,0,1-1,1.33,6.44,6.44,0,0,1-9.1,0,6.679,6.679,0,0,1-1-1.34L873.8,272.54a8.4,8.4,0,0,1,1.36-1.78,8.58,8.58,0,0,1,12.13,0,8.341,8.341,0,0,1,1.36,1.77l8.06,13.95a6.43,6.43,0,0,0,11,.23Z"
            transform="translate(-565.88 -231.11)"
            fill="#27c1bc"
            fillRule="evenodd"
          />
          <path
            id="Path_40"
            dataname="Path 40"
            d="M867.58,298.29a8.59,8.59,0,0,0,14.86,0L867,271.48a6.44,6.44,0,0,0-8.79-2.38,6.731,6.731,0,0,0-1.34,1h0l-9.4,9.4a6.43,6.43,0,0,1,9.1,0,7,7,0,0,1,1,1.33Z"
            transform="translate(-565.88 -231.11)"
            fill="#139bbf"
            fillRule="evenodd"
          />
          <path
            id="Path_41"
            dataname="Path 41"
            d="M905.35,268.25a7.5,7.5,0,1,0,7.51,7.5,7.59,7.59,0,0,0-2.2-5.31,7.46,7.46,0,0,0-5.31-2.19Z"
            transform="translate(-565.88 -231.11)"
            fill="#e55217"
            fillRule="evenodd"
          />
          <rect
            id="Rectangle_28"
            dataname="Rectangle 28"
            width="127"
            height="50.84"
            rx="6"
            transform="translate(600.19 525.05)"
            fill="#3399fe"
          />
          <text
            id="Next"
            transform="translate(632.19 555.81)"
            fill="#fff"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_11"
            dataname="Line 11"
            x1="13.06"
            transform="translate(682.88 549.7)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <line
            id="Line_12"
            dataname="Line 12"
            x2="6.1"
            y2="6.1"
            transform="translate(690.28 543.6)"
            fill="none"
            stroke="#fff"
            strokeLinejoin="bevel"
            strokeWidth="1.5"
          />
          <line
            id="Line_13"
            dataname="Line 13"
            x1="6.1"
            y2="6.1"
            transform="translate(690.28 549.7)"
            fill="none"
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <line
            id="Line_14"
            dataname="Line 14"
            x2="671"
            transform="translate(56.12 99.89)"
            fill="none"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
        </g>
      </g>
    </StyledSlide1>
  );
};

const StyledSlide2 = styled.svg`
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
const Slide2 = ({ active, previous }) => {
  return (
    <StyledSlide2
      active={active}
      previous={previous}
      viewBox="0 0 890 760"
      className="slideshow--item"
    >
      <defs>
        <filter
          id="Rectangle_7"
          x="37.29"
          y="24.815"
          width="814.92"
          height="724.37"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feFlood floodColor="#121212" floodOpacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Add_Network-step-2" transform="translate(-776 3681)">
        <rect
          id="Rectangle_39"
          dataname="Rectangle 39"
          width="890"
          height="760"
          rx="11"
          transform="translate(776 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Add_Network-step-2-2"
          dataname="Add_Network-step-2"
          transform="translate(871.544 -3608.668)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -95.54, -72.33)"
            filter="url(#Rectangle_7)"
          >
            <rect
              id="Rectangle_7-2"
              dataname="Rectangle 7"
              width="698.454"
              height="615.338"
              rx="10"
              transform="translate(95.54 72.33)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_2"
            dataname="Path 2"
            d="M629.812,337.06h1.423v10.96h-1.193l-5.939-8.325v8.325H622.68V337.06h1.212l5.93,8.261Z"
            transform="translate(-570.727 -215.502)"
            fill="#333"
          />
          <path
            id="Path_3"
            dataname="Path 3"
            d="M641.432,344.036a3.523,3.523,0,0,1-.064.716H635.2a2.506,2.506,0,0,0,.8,1.836,2.58,2.58,0,0,0,1.836.707,2.433,2.433,0,0,0,2.286-1.377l1.12.587a3.168,3.168,0,0,1-1.313,1.386,4.049,4.049,0,0,1-2.111.551,3.818,3.818,0,0,1-2.845-1.157,4.351,4.351,0,0,1,0-5.838,3.672,3.672,0,0,1,2.754-1.138,3.5,3.5,0,0,1,2.689,1.092A3.672,3.672,0,0,1,641.432,344.036Zm-6.205-.367H640a2.129,2.129,0,0,0-.7-1.6,2.221,2.221,0,0,0-1.579-.652,2.4,2.4,0,0,0-1.661.615,2.5,2.5,0,0,0-.835,1.661Z"
            transform="translate(-571.643 -215.768)"
            fill="#333"
          />
          <path
            id="Path_4"
            dataname="Path 4"
            d="M646.889,348.141a2.516,2.516,0,0,1-1.836-.643,2.423,2.423,0,0,1-.652-1.836v-4.2H642.85v-1.184h.4a1.1,1.1,0,0,0,1.147-1.147V337.75h1.285v2.524h1.891v1.2H645.65v4.2a2.1,2.1,0,0,0,.046.441,1.84,1.84,0,0,0,.165.441.918.918,0,0,0,.459.386,1.936,1.936,0,0,0,.789.138,2.754,2.754,0,0,0,.56-.046v1.037A3.285,3.285,0,0,1,646.889,348.141Z"
            transform="translate(-572.382 -215.558)"
            fill="#333"
          />
          <path
            id="Path_5"
            dataname="Path 5"
            d="M659.391,340.5h1.45l-2.754,7.784h-1.2l-1.946-6.049-1.964,6.067h-1.221L649,340.518h1.46l1.937,5.92,1.836-5.92h1.414l1.836,5.884Z"
            transform="translate(-572.887 -215.784)"
            fill="#333"
          />
          <path
            id="Path_6"
            dataname="Path 6"
            d="M669.621,347.286a4.277,4.277,0,0,1-5.847,0,3.947,3.947,0,0,1-1.184-2.928,3.892,3.892,0,0,1,1.184-2.91,4.323,4.323,0,0,1,5.847,0,3.919,3.919,0,0,1,1.175,2.91A3.974,3.974,0,0,1,669.621,347.286Zm-4.874-.918a2.754,2.754,0,0,0,3.892,0,3.011,3.011,0,0,0,0-4.066,2.754,2.754,0,0,0-3.892,0,3.011,3.011,0,0,0,0,4.066Z"
            transform="translate(-574.003 -215.768)"
            fill="#333"
          />
          <path
            id="Path_7"
            dataname="Path 7"
            d="M676.6,340.4h.652v1.2H676.4a1.836,1.836,0,0,0-1.4.542,2.074,2.074,0,0,0-.514,1.487v4.663H673.2v-7.8h1.248v.964A2.3,2.3,0,0,1,676.6,340.4Z"
            transform="translate(-574.874 -215.775)"
            fill="#333"
          />
          <path
            id="Path_8"
            dataname="Path 8"
            d="M685.618,340.218l-2.937,3.112,2.937,4.69h-1.487l-2.313-3.736-1.414,1.487v2.249H679.11V337.06H680.4v6.976l3.672-3.819Z"
            transform="translate(-575.359 -215.502)"
            fill="#333"
          />
          <path
            id="Path_9"
            dataname="Path 9"
            d="M697.5,337.06h1.423v10.96h-1.2l-5.93-8.325v8.325H690.36V337.06h1.2l5.939,8.261Z"
            transform="translate(-576.282 -215.502)"
            fill="#333"
          />
          <path
            id="Path_10"
            dataname="Path 10"
            d="M705.046,340.31a3.3,3.3,0,0,1,2.231.744,2.451,2.451,0,0,1,.863,1.937v5.3h-1.267v-1.092a2.753,2.753,0,0,1-1.074.918,3.048,3.048,0,0,1-1.432.34,3.112,3.112,0,0,1-2.047-.652,2.075,2.075,0,0,1-.789-1.68,1.836,1.836,0,0,1,.661-1.441,4.158,4.158,0,0,1,1.891-.854l2.754-.606V343a1.285,1.285,0,0,0-.5-1.065,1.955,1.955,0,0,0-1.294-.413,2.249,2.249,0,0,0-1.239.34,2.138,2.138,0,0,0-.817.918l-1.157-.587a2.929,2.929,0,0,1,1.239-1.34,3.773,3.773,0,0,1,1.983-.542Zm-.606,7a2.341,2.341,0,0,0,2.4-2.4v-.679l-2.46.56a2.415,2.415,0,0,0-1.092.5,1.038,1.038,0,0,0-.395.817,1.074,1.074,0,0,0,.413.918,1.836,1.836,0,0,0,1.129.285Z"
            transform="translate(-577.199 -215.768)"
            fill="#333"
          />
          <path
            id="Path_11"
            dataname="Path 11"
            d="M719.082,340.31a2.818,2.818,0,0,1,2.056.8,2.754,2.754,0,0,1,.808,2.029v5.149h-1.285v-4.718a2.066,2.066,0,0,0-.514-1.478,1.964,1.964,0,0,0-2.754,0,2.065,2.065,0,0,0-.523,1.478v4.718h-1.294v-4.718a2.065,2.065,0,0,0-.5-1.478,1.964,1.964,0,0,0-2.754,0,2.065,2.065,0,0,0-.523,1.478v4.718H710.5v-7.8h1.267v.918a2.469,2.469,0,0,1,2.212-1.065,2.928,2.928,0,0,1,1.469.367,2.506,2.506,0,0,1,1.019,1.01,2.663,2.663,0,0,1,1.046-1.019A3.176,3.176,0,0,1,719.082,340.31Z"
            transform="translate(-577.936 -215.768)"
            fill="#333"
          />
          <path
            id="Path_12"
            dataname="Path 12"
            d="M732.076,344.036a3.514,3.514,0,0,1-.064.716H725.88a2.552,2.552,0,0,0,.808,1.836,2.579,2.579,0,0,0,1.836.707,2.414,2.414,0,0,0,2.276-1.377l1.129.587a3.167,3.167,0,0,1-1.313,1.386,4.048,4.048,0,0,1-2.111.551,3.809,3.809,0,0,1-2.845-1.157,4.36,4.36,0,0,1,0-5.838,3.672,3.672,0,0,1,2.754-1.138A3.516,3.516,0,0,1,731.1,341.4a3.726,3.726,0,0,1,.973,2.634Zm-6.2-.34h4.773a2.13,2.13,0,0,0-.7-1.6,2.24,2.24,0,0,0-1.588-.652,2.4,2.4,0,0,0-1.652.615,2.461,2.461,0,0,0-.835,1.634Z"
            transform="translate(-579.088 -215.768)"
            fill="#333"
          />
          <text
            id="Network_Address"
            dataname="Network Address"
            transform="translate(51.724 221.694)"
            fill="#329afc"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Net
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              A
            </tspan>
            <tspan y="0">ddress</tspan>
          </text>
          <text
            id="Network_Definition"
            dataname="Network Definition"
            transform="translate(51.724 100.53)"
            fill="#329afc"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Net
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork Definition</tspan>
          </text>
          <text
            id="DNS_Server"
            dataname="DNS Server"
            transform="translate(51.724 341.94)"
            fill="#329afc"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              DNS Ser
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              v
            </tspan>
            <tspan y="0">er</tspan>
          </text>
          <text
            id="Enable_Network"
            dataname="Enable Network"
            transform="translate(51.724 459.432)"
            fill="#329afc"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Enable Net
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <rect
            id="Rectangle_8"
            dataname="Rectangle 8"
            width="598.118"
            height="49.466"
            rx="8"
            transform="translate(50.595 141.358)"
            fill="#f4f6fa"
          />
          <text
            id="Reported_network_address:_100.000.000.0_10"
            dataname="Reported network address:    100.000.000.0/10"
            transform="translate(51.724 247.039)"
            fill="#333"
            fontSize="12"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0" letterSpacing="-0.03em">
              R
            </tspan>
            <tspan y="0">epo</tspan>
            <tspan y="0" letterSpacing="0.01em">
              r
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              t
            </tspan>
            <tspan y="0">ed net</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0" xmlSpace="preserve">
              ork address:
            </tspan>
            <tspan y="0" fill="#666">
              100.000.000.0/10
            </tspan>
          </text>
          <text
            id="Reported_DNS_server:"
            dataname="Reported DNS server:"
            transform="translate(51.724 365.449)"
            fill="#333"
            fontSize="12"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0" letterSpacing="-0.03em">
              R
            </tspan>
            <tspan y="0">epo</tspan>
            <tspan y="0" letterSpacing="0.01em">
              r
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              t
            </tspan>
            <tspan y="0">ed DNS ser</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              v
            </tspan>
            <tspan y="0">er:</tspan>
          </text>
          <text
            id="Enable_Network-2"
            dataname="Enable Network"
            transform="translate(80.179 526.083)"
            fill="#999"
            fontSize="12"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Enable Net
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <text
            id="If_you_would_like_to_enable_the_network_now_check_the_box_below._Otherwise_you_can_enable_it_at_a_later_time"
            dataname="If you would like to enable the network now, check the box below. Otherwise you can enable it at a 
later time"
            transform="translate(51.724 481.225)"
            fill="#999"
            fontSize="11"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              If
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              y
            </tspan>
            <tspan y="0">ou</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ould li</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              k
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">o enable the net</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork n</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              o
            </tspan>
            <tspan y="0" letterSpacing="-0.04em">
              w
            </tspan>
            <tspan y="0">, check the b</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              o
            </tspan>
            <tspan y="0">x bel</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              o
            </tspan>
            <tspan y="0" letterSpacing="-0.04em">
              w
            </tspan>
            <tspan y="0">. Otherwise</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              y
            </tspan>
            <tspan y="0">ou can enable it at a</tspan>
            <tspan x="0" y="14">
              la
            </tspan>
            <tspan y="14" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="14">er time</tspan>
          </text>
          <rect
            id="Rectangle_9"
            dataname="Rectangle 9"
            width="598.182"
            height="49.585"
            rx="8"
            transform="translate(50.705 261.484)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_10"
            dataname="Rectangle 10"
            width="598.182"
            height="49.705"
            rx="8"
            transform="translate(50.705 378.857)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_11"
            dataname="Rectangle 11"
            width="16.954"
            height="17.101"
            rx="3"
            transform="translate(50.705 514.707)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_12"
            dataname="Rectangle 12"
            width="116.574"
            height="46.666"
            rx="8"
            transform="translate(532.561 535.186)"
            fill="#3399fe"
          />
          <text
            id="Next"
            transform="translate(561.934 561.816)"
            fill="#fff"
            fontSize="13"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_7"
            dataname="Line 7"
            x1="11.988"
            transform="translate(608.462 557.812)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <line
            id="Line_8"
            dataname="Line 8"
            x2="5.599"
            y2="5.599"
            transform="translate(615.255 552.213)"
            fill="none"
            stroke="#fff"
            strokeLinejoin="bevel"
            strokeWidth="1.5"
          />
          <line
            id="Line_9"
            dataname="Line 9"
            x1="5.599"
            y2="5.599"
            transform="translate(615.255 557.812)"
            fill="none"
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
          <line
            id="Line_10"
            dataname="Line 10"
            x2="698.527"
            transform="translate(0.386 63.235)"
            fill="none"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <text
            id="Create_a_Network"
            dataname="Create a Network"
            transform="translate(84.769 39.02)"
            fontSize="17"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Crea
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              t
            </tspan>
            <tspan y="0">e a Net</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <rect
            id="Rectangle_13"
            dataname="Rectangle 13"
            width="30.667"
            height="3.222"
            rx="1"
            transform="translate(42.554 42.527)"
            fill="#329afc"
          />
          <rect
            id="Rectangle_14"
            dataname="Rectangle 14"
            width="25.187"
            height="18.055"
            rx="1"
            transform="translate(44.987 22.92)"
            fill="none"
            stroke="#3399fe"
            strokeMiterlimit="10"
            strokeWidth="2.5"
          />
        </g>
      </g>
    </StyledSlide2>
  );
};

const StyledSlide3 = styled.svg`
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
const Slide3 = ({ active, previous }) => {
  return (
    <StyledSlide3
      viewBox="0 0 890 760"
      className="slideshow--item"
      id="slide3"
      active={active}
      previous={previous}
    >
      <defs>
        <filter
          id="Rectangle_15"
          x="123.69"
          y="39.52"
          width="643.03"
          height="694.96"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feFlood floodColor="#121212" floodOpacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Install_Gateway-step-3" transform="translate(-1732 3681)">
        <rect
          id="Rectangle_40"
          dataname="Rectangle 40"
          width="890"
          height="760"
          rx="11"
          transform="translate(1732 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Install_Gateway-step-3-2"
          dataname="Install_Gateway-step-3"
          transform="translate(1882.2 -3621.48)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -150.2, -59.52)"
            filter="url(#Rectangle_15)"
          >
            <rect
              id="Rectangle_15-2"
              dataname="Rectangle 15"
              width="589.03"
              height="640.96"
              rx="10"
              transform="translate(150.69 59.52)"
              fill="#eaf1f8"
            />
          </g>
          <rect
            id="Rectangle_16"
            dataname="Rectangle 16"
            width="589.15"
            height="100.74"
            rx="10"
            transform="translate(0.44 0.21)"
            fill="#252939"
          />
          <path
            id="Path_13"
            dataname="Path 13"
            d="M930.75,256.9a2.7,2.7,0,0,1-.09-.57c0-.6.42-.9,1.27-.9a1.6,1.6,0,0,1,1,.32l3.8,12.36,4-12.42h1.53l4,12.42L949.63,257a2.579,2.579,0,0,1,.67-1.17,1.62,1.62,0,0,1,1.11-.37,1.45,1.45,0,0,1,1.17.51L947.13,272h-1.55l-4.06-11.94-4,11.94h-1.59Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_14"
            dataname="Path 14"
            d="M956.21,252.63a1.91,1.91,0,0,1-.56-1.39,1.93,1.93,0,0,1,.56-1.4,2,2,0,0,1,2.75,0,1.93,1.93,0,0,1,.56,1.4,1.91,1.91,0,0,1-.56,1.39A2,2,0,0,1,956.21,252.63Zm.08,19.45V257.45a2.15,2.15,0,0,1,.44-1.43,1.53,1.53,0,0,1,1.27-.52,2.921,2.921,0,0,1,.88.12v14.64a2.17,2.17,0,0,1-.44,1.42,1.58,1.58,0,0,1-1.27.53,3,3,0,0,1-.89-.13Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_15"
            dataname="Path 15"
            d="M964.27,272.08V257.45a2.2,2.2,0,0,1,.44-1.43,1.54,1.54,0,0,1,1.27-.52,2.88,2.88,0,0,1,.88.12V260a7.469,7.469,0,0,1,1.91-3.45,4.09,4.09,0,0,1,2.85-1.16c1.18,0,1.77.54,1.77,1.61a1.659,1.659,0,0,1-.63,1.4,2.29,2.29,0,0,0-1-.16,4,4,0,0,0-3.68,2.13q-1.26,2.13-1.26,6.9v3a2.129,2.129,0,0,1-.45,1.43,1.54,1.54,0,0,1-1.26.52A3,3,0,0,1,964.27,272.08Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_16"
            dataname="Path 16"
            d="M978.3,271.38a6.809,6.809,0,0,1-2.6-2.95,11.43,11.43,0,0,1,0-9,7.23,7.23,0,0,1,2.6-3,7,7,0,0,1,3.84-1.07,6,6,0,0,1,4.86,2.13,8.83,8.83,0,0,1,1.76,5.78,2.13,2.13,0,0,1-.24,1.21,1.16,1.16,0,0,1-1,.33h-10.2a6,6,0,0,0,1.28,4,4.29,4.29,0,0,0,3.44,1.51,5.87,5.87,0,0,0,2.87-.71,5.58,5.58,0,0,0,2-1.85,1.38,1.38,0,0,1,1,1.44,2.11,2.11,0,0,1-.85,1.6,6.559,6.559,0,0,1-2.2,1.18,8.549,8.549,0,0,1-2.74.45,7.311,7.311,0,0,1-3.82-1.05Zm7.89-8.78a7,7,0,0,0-1-3.92,3.32,3.32,0,0,0-2.89-1.33,4.12,4.12,0,0,0-3.26,1.41,7.69,7.69,0,0,0-1.59,4.1Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_17"
            dataname="Path 17"
            d="M990.82,256.9a2.2,2.2,0,0,1-.1-.57c0-.6.43-.9,1.27-.9a1.6,1.6,0,0,1,1,.32l3.81,12.36,4-12.42h1.52l4,12.42L1009.7,257a2.57,2.57,0,0,1,.66-1.17,1.65,1.65,0,0,1,1.11-.37,1.45,1.45,0,0,1,1.17.51L1007.2,272h-1.55l-4.06-11.94L997.53,272h-1.59Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_18"
            dataname="Path 18"
            d="M1016.27,252.63a1.86,1.86,0,0,1-.55-1.39,1.88,1.88,0,0,1,.55-1.4,1.931,1.931,0,0,1,3.31,1.4,1.941,1.941,0,0,1-.55,1.39,2,2,0,0,1-2.76,0Zm.08,19.45V257.45a2.2,2.2,0,0,1,.44-1.43,1.54,1.54,0,0,1,1.27-.52,3,3,0,0,1,.89.12v14.64a2.12,2.12,0,0,1-.45,1.42,1.55,1.55,0,0,1-1.26.53,3,3,0,0,1-.89-.13Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_19"
            dataname="Path 19"
            d="M1025.73,272a5.25,5.25,0,0,1-2.05-1.18,2.22,2.22,0,0,1-.74-1.57,1.08,1.08,0,0,1,.88-1.18,8,8,0,0,0,2.14,1.61,5.71,5.71,0,0,0,2.68.66,3.23,3.23,0,0,0,2.18-.68,2.29,2.29,0,0,0,.8-1.85,2.37,2.37,0,0,0-.76-1.77,7.629,7.629,0,0,0-2.67-1.31,10.24,10.24,0,0,1-3.88-2.06,4.2,4.2,0,0,1-1.12-3.09,3.59,3.59,0,0,1,1.48-3.25,6.6,6.6,0,0,1,3.72-1,7,7,0,0,1,3.82.93,2.69,2.69,0,0,1,1.44,2.27,1.1,1.1,0,0,1-.89,1.19,8,8,0,0,0-1.92-1.7,4.37,4.37,0,0,0-2.36-.64,3.45,3.45,0,0,0-2.07.59,1.84,1.84,0,0,0-.81,1.56,2.26,2.26,0,0,0,.83,1.79,9.059,9.059,0,0,0,2.85,1.41,9.591,9.591,0,0,1,3.78,2,4,4,0,0,1,1.1,2.91,4.23,4.23,0,0,1-1.56,3.59,6.419,6.419,0,0,1-4,1.18,8.63,8.63,0,0,1-2.87-.41Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_20"
            dataname="Path 20"
            d="M1040.46,271.38a6.81,6.81,0,0,1-2.6-2.95,10.3,10.3,0,0,1-.92-4.48,10.473,10.473,0,0,1,.93-4.55,7.3,7.3,0,0,1,2.6-3,7,7,0,0,1,3.85-1.07,6,6,0,0,1,4.86,2.13,8.771,8.771,0,0,1,1.76,5.78,2.129,2.129,0,0,1-.24,1.21,1.13,1.13,0,0,1-1,.32h-10.2a6,6,0,0,0,1.28,4,4.3,4.3,0,0,0,3.44,1.5,5.72,5.72,0,0,0,2.86-.7,5.64,5.64,0,0,0,2.05-1.86,1.4,1.4,0,0,1,.95,1.44,2.11,2.11,0,0,1-.86,1.6,6.47,6.47,0,0,1-2.2,1.19,8.51,8.51,0,0,1-2.74.45A7.3,7.3,0,0,1,1040.46,271.38Zm7.88-8.78a7,7,0,0,0-1-3.92,3.3,3.3,0,0,0-2.88-1.33,4.15,4.15,0,0,0-3.27,1.41,7.61,7.61,0,0,0-1.58,4.1Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_21"
            dataname="Path 21"
            d="M914.72,263.67l-7.29,12.65a7,7,0,0,1-1,1.33,6.45,6.45,0,0,1-10.13-1.35l-15.48-26.81a8.678,8.678,0,0,1,1.36-1.77,8.59,8.59,0,0,1,12.14,0,8.923,8.923,0,0,1,1.35,1.77l8.06,13.95a6.44,6.44,0,0,0,11,.23Z"
            transform="translate(-674.4 -217.04)"
            fill="#27c1bc"
            fillRule="evenodd"
          />
          <path
            id="Path_22"
            dataname="Path 22"
            d="M874.63,275.25a8.58,8.58,0,0,0,14.85,0L874,248.43a6.43,6.43,0,0,0-8.78-2.37,6.7,6.7,0,0,0-1.35,1h0l-9.4,9.41a6.44,6.44,0,0,1,9.1,0,6.682,6.682,0,0,1,1,1.34Z"
            transform="translate(-674.4 -217.04)"
            fill="#139bbf"
            fillRule="evenodd"
          />
          <path
            id="Path_23"
            dataname="Path 23"
            d="M912.39,245.2a7.51,7.51,0,1,0,5.31,2.2,7.51,7.51,0,0,0-5.31-2.2Z"
            transform="translate(-674.4 -217.04)"
            fill="#e55217"
            fillRule="evenodd"
          />
          <circle
            id="Ellipse_4"
            dataname="Ellipse 4"
            cx="7.67"
            cy="7.67"
            r="7.67"
            transform="translate(14.05 11.19)"
            fill="#ed1c24"
            opacity="0.9"
          />
          <circle
            id="Ellipse_5"
            dataname="Ellipse 5"
            cx="7.67"
            cy="7.67"
            r="7.67"
            transform="translate(34.1 11.19)"
            fill="#fbb03b"
            opacity="0.9"
          />
          <circle
            id="Ellipse_6"
            dataname="Ellipse 6"
            cx="7.67"
            cy="7.67"
            r="7.67"
            transform="translate(53.26 11.19)"
            fill="#22b573"
            opacity="0.9"
          />
          <rect
            id="Rectangle_17"
            dataname="Rectangle 17"
            width="589.6"
            height="12"
            transform="translate(0 89.96)"
            fill="#eaf1f8"
          />
          <text
            id="Gateway_IP"
            dataname="Gateway IP"
            transform="translate(105.53 175.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Ga
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay IP</tspan>
          </text>
          <text
            id="Install_Locally"
            dataname="Install Locally"
            transform="translate(130.53 494.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Install Locally
            </tspan>
          </text>
          <text
            id="Enter_Remote_Gateway_Information"
            dataname="Enter Remote Gateway Information"
            transform="translate(134.53 132.68)"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              En
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letterSpacing="-0.03em">
              R
            </tspan>
            <tspan y="0">em</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              ot
            </tspan>
            <tspan y="0">e Ga</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay In</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ormation</tspan>
          </text>
          <path
            id="Path_24"
            dataname="Path 24"
            d="M112.43,182H476.79a7.63,7.63,0,0,1,7.63,7.63V220a7.63,7.63,0,0,1-7.62,7.63H112.43A7.63,7.63,0,0,1,104.8,220V189.59a7.62,7.62,0,0,1,7.63-7.59Z"
            fill="#fff"
          />
          <path
            id="Path_25"
            dataname="Path 25"
            d="M1151.2,399.38a7.26,7.26,0,0,1,7.25,7.25V437a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V406.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V437a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V406.63A8,8,0,0,0,1151.2,398.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <path
            id="Path_26"
            dataname="Path 26"
            d="M112.43,260H476.79a7.63,7.63,0,0,1,7.63,7.63V298a7.63,7.63,0,0,1-7.62,7.63H112.43A7.63,7.63,0,0,1,104.8,298V267.59A7.62,7.62,0,0,1,112.43,260Z"
            fill="#fff"
          />
          <path
            id="Path_27"
            dataname="Path 27"
            d="M1151.2,477.38a7.26,7.26,0,0,1,7.25,7.25V515a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V484.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V515a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V484.63A8,8,0,0,0,1151.2,476.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <text
            id="Username"
            transform="translate(105.53 254.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Username
            </tspan>
          </text>
          <text
            id="Password"
            transform="translate(105.53 331.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0" letterSpacing="-0.03em">
              P
            </tspan>
            <tspan y="0">ass</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ord</tspan>
          </text>
          <rect
            id="Rectangle_18"
            dataname="Rectangle 18"
            width="379.62"
            height="45.66"
            rx="7.63"
            transform="translate(104.8 337.96)"
            fill="#fff"
          />
          <path
            id="Path_28"
            dataname="Path 28"
            d="M1151.2,555.38a7.26,7.26,0,0,1,7.25,7.25V593a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V562.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V593a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V562.63A8,8,0,0,0,1151.2,554.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_19"
            dataname="Rectangle 19"
            width="379.62"
            height="45.66"
            rx="7.63"
            transform="translate(104.8 415.96)"
            fill="#fff"
          />
          <path
            id="Path_29"
            dataname="Path 29"
            d="M1151.2,633.38a7.26,7.26,0,0,1,7.25,7.25V671a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V640.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V671a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V640.63A8,8,0,0,0,1151.2,632.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <text
            id="API_Path"
            dataname="API Path"
            transform="translate(105.53 410.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              API{" "}
            </tspan>
            <tspan y="0" letterSpacing="-0.03em">
              P
            </tspan>
            <tspan y="0">ath</tspan>
          </text>
          <rect
            id="Rectangle_20"
            dataname="Rectangle 20"
            width="380.1"
            height="45.37"
            rx="8"
            transform="translate(104.49 535.63)"
            fill="#252939"
          />
          <text
            id="Install_Gateway"
            dataname="Install Gateway"
            transform="translate(235.82 563.4)"
            fill="#fff"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Install Ga
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay</tspan>
          </text>
          <rect
            id="Rectangle_21"
            dataname="Rectangle 21"
            width="17.61"
            height="17.63"
            rx="3.63"
            transform="translate(104.61 480.37)"
            fill="#fff"
          />
          <path
            id="Path_30"
            dataname="Path 30"
            d="M793,697.79a3.26,3.26,0,0,1,3.25,3.25v10.38a3.26,3.26,0,0,1-3.25,3.25H782.64a3.26,3.26,0,0,1-3.25-3.25V701a3.26,3.26,0,0,1,3.25-3.25H793m0-.75H782.64a4,4,0,0,0-4,4v10.38a4,4,0,0,0,4,4H793a4,4,0,0,0,4-4V701A4,4,0,0,0,793,697Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
        </g>
      </g>
    </StyledSlide3>
  );
};

const StyledSlide4 = styled.svg`
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
const Slide4 = ({ active, previous }) => {
  return (
    <StyledSlide4
      viewBox="0 0 890 760"
      id="slide4"
      className="slideshow--item"
      active={active}
      previous={previous}
    >
      <defs>
        <filter
          id="Rectangle_29"
          x="52.545"
          y="58.195"
          width="784.91"
          height="657.61"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feFlood floodColor="#121212" floodOpacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Security_Settings-step-4" transform="translate(-2688 3681)">
        <rect
          id="Rectangle_41"
          dataname="Rectangle 41"
          width="890"
          height="760"
          rx="11"
          transform="translate(2688 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Security_Settings-step-4-2"
          dataname="Security_Settings-step-4"
          transform="translate(2767.545 -3602.805)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -79.54, -78.2)"
            filter="url(#Rectangle_29)"
          >
            <rect
              id="Rectangle_29-2"
              dataname="Rectangle 29"
              width="730.91"
              height="603.61"
              rx="10"
              transform="translate(79.54 78.2)"
              fill="#fff"
            />
          </g>
          <text
            id="Settings"
            transform="translate(98.34 50.15)"
            fill="#666"
            fontSize="22"
            fontFamily="PlusJakartaSans-Bold, Plus Jakarta Sans"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              Settings
            </tspan>
          </text>
          <text
            id="DNS_configuration"
            dataname="DNS configuration"
            transform="translate(98.83 168.34)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              DNS configur
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion</tspan>
          </text>
          <text
            id="Max_Life_Managed"
            dataname="Max Life Managed"
            transform="translate(101.91 293.01)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Max Li
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              f
            </tspan>
            <tspan y="0">e Managed</tspan>
          </text>
          <text
            id="Re-Key_Before_Expiration"
            dataname="Re-Key Before Expiration"
            transform="translate(42.92 351.68)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0" letterSpacing="-0.03em">
              R
            </tspan>
            <tspan y="0">e-</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              K
            </tspan>
            <tspan y="0">ey Be</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ore Expir</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion</tspan>
          </text>
          <text
            id="Managed_Devices"
            dataname="Managed Devices"
            transform="translate(101.19 472.68)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Managed D
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vices</tspan>
          </text>
          <text
            id="Notify_Before_Expiration"
            dataname="Notify Before Expiration"
            transform="translate(53.32 527.68)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              o
            </tspan>
            <tspan y="0">tify Be</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ore Expir</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion</tspan>
          </text>
          <text
            id="Network"
            transform="translate(268.15 123.89)"
            fill="#333"
            fontSize="19.56"
            fontFamily="PlusJakartaSans-Bold, Plus Jakarta Sans"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              Net
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <rect
            id="Rectangle_30"
            dataname="Rectangle 30"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 139.22)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_31"
            dataname="Rectangle 31"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 263.23)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_32"
            dataname="Rectangle 32"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 321.5)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_33"
            dataname="Rectangle 33"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 437.98)"
            fill="#f4f6fa"
          />
          <g id="Group_1" dataname="Group 1" opacity="0.6">
            <rect
              id="Rectangle_34"
              dataname="Rectangle 34"
              width="400.9"
              height="44.01"
              rx="8"
              transform="translate(264.48 497.33)"
              fill="#f4f6fa"
            />
          </g>
          <text
            id="Encryption_Key"
            dataname="Encryption Key"
            transform="translate(267.38 246.35)"
            fill="#333"
            fontSize="19.56"
            fontFamily="PlusJakartaSans-Bold, Plus Jakarta Sans"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              Encry
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              p
            </tspan>
            <tspan y="0">tion </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              K
            </tspan>
            <tspan y="0">ey</tspan>
          </text>
          <text
            id="User_Validation_Requirements"
            dataname="User Validation Requirements"
            transform="translate(267.38 422.35)"
            fill="#333"
            fontSize="19.56"
            fontFamily="PlusJakartaSans-Bold, Plus Jakarta Sans"
            fontWeight="700"
          >
            <tspan x="0" y="0">
              User{" "}
            </tspan>
            <tspan y="0" letterSpacing="-0.04em">
              V
            </tspan>
            <tspan y="0">alid</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion </tspan>
            <tspan y="0" letterSpacing="-0.03em">
              R
            </tspan>
            <tspan y="0">equirements</tspan>
          </text>
          <line
            id="Line_15"
            dataname="Line 15"
            x2="653.37"
            transform="translate(35.84 78.5)"
            fill="none"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <text
            id="Gateway_Default"
            dataname="Gateway Default"
            transform="translate(279.9 168.34)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              G
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              a
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay De</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ault</tspan>
          </text>
          <text
            id="_30_days"
            dataname="30 days"
            transform="translate(279.9 291.79)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              30 days
            </tspan>
          </text>
          <text
            id="_3_days"
            dataname="3 days"
            transform="translate(279.9 350.46)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              3 days
            </tspan>
          </text>
          <text
            id="_30_days-2"
            dataname="30 days"
            transform="translate(279.9 466.57)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              30 days
            </tspan>
          </text>
          <text
            id="_1_hour"
            dataname="1 hour"
            transform="translate(279.9 526.46)"
            fill="#666"
            fontSize="17.11"
            fontFamily="PlusJakartaSans-Medium, Plus Jakarta Sans"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              1 hour
            </tspan>
          </text>
          <rect
            id="Rectangle_35"
            dataname="Rectangle 35"
            width="2.88"
            height="6.49"
            rx="1"
            transform="translate(65.46 29.65)"
            fill="#329afc"
          />
          <line
            id="Line_16"
            dataname="Line 16"
            x2="36"
            transform="translate(48.08 33.15)"
            fill="none"
            stroke="#329afc"
            strokeMiterlimit="10"
            strokeWidth="2.75"
          />
          <rect
            id="Rectangle_36"
            dataname="Rectangle 36"
            width="2.88"
            height="6.49"
            rx="1"
            transform="translate(75.2 48.66)"
            fill="#329afc"
          />
          <line
            id="Line_17"
            dataname="Line 17"
            x2="36"
            transform="translate(48.08 52.15)"
            fill="none"
            stroke="#329afc"
            strokeMiterlimit="10"
            strokeWidth="2.75"
          />
          <rect
            id="Rectangle_37"
            dataname="Rectangle 37"
            width="2.88"
            height="6.49"
            rx="1"
            transform="translate(54.08 39.71)"
            fill="#329afc"
          />
          <line
            id="Line_18"
            dataname="Line 18"
            x2="36"
            transform="translate(48.08 43.15)"
            fill="none"
            stroke="#329afc"
            strokeMiterlimit="10"
            strokeWidth="2.75"
          />
        </g>
      </g>
    </StyledSlide4>
  );
};

const StyledSlide5 = styled.svg`
  opacity: ${(props) => (props.active ? "1" : "0")};
`;
const Slide5 = ({ active, previous }) => {
  return (
    <StyledSlide5
      viewBox="0 0 890 760"
      id="slide5"
      className="slideshow--item"
      active={active}
      previous={previous}
    >
      <defs>
        <filter
          id="Rectangle_1"
          x="22.93"
          y="90"
          width="843.84"
          height="594"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9" result="blur" />
          <feFlood floodColor="#121212" floodOpacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Add_Device-step-5" transform="translate(-3644 3681)">
        <rect
          id="Rectangle_42"
          dataname="Rectangle 42"
          width="890"
          height="760"
          rx="11"
          transform="translate(3644 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Add_Device-step-5-2"
          dataname="Add_Device-step-5"
          transform="translate(3693.93 -3571)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -49.93, -110)"
            filter="url(#Rectangle_1)"
          >
            <rect
              id="Rectangle_1-2"
              dataname="Rectangle 1"
              width="789.84"
              height="540"
              rx="10"
              transform="translate(49.93 110)"
              fill="#fff"
            />
          </g>
          <text
            id="Operating_System"
            dataname="Operating System"
            transform="translate(352.87 203.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Operating Sys
            </tspan>
            <tspan y="0" letterSpacing="-0.02em">
              t
            </tspan>
            <tspan y="0">em</tspan>
          </text>
          <text
            id="Device_Details"
            dataname="Device Details"
            transform="translate(95.87 182.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice Details</tspan>
          </text>
          <text
            id="Download_Software"
            dataname="Download Software"
            transform="translate(95.87 247.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              o
            </tspan>
            <tspan y="0">wnload So</tspan>
            <tspan y="0" letterSpacing="0.02em">
              f
            </tspan>
            <tspan y="0">t</tspan>
            <tspan y="0" letterSpacing="-0.02em">
              w
            </tspan>
            <tspan y="0">are</tspan>
          </text>
          <text
            id="Apply_Configuration"
            dataname="Apply Configuration"
            transform="translate(95.87 312.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              Apply{" "}
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              C
            </tspan>
            <tspan y="0">onfiguration</tspan>
          </text>
          <text
            id="Device_Details-2"
            dataname="Device Details"
            transform="translate(351.87 157.68)"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice Details</tspan>
          </text>
          <text
            id="Add_a_Device"
            dataname="Add a Device"
            transform="translate(92.87 54.68)"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0" letterSpacing="-0.02em">
              A
            </tspan>
            <tspan y="0">dd a D</tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice</tspan>
          </text>
          <rect
            id="Rectangle_2"
            dataname="Rectangle 2"
            width="379.62"
            height="54.14"
            rx="7.62"
            transform="translate(352.15 215.96)"
            fill="#fff"
          />
          <path
            id="Path_1"
            dataname="Path 1"
            d="M1289,485.86a7.26,7.26,0,0,1,7.25,7.25V532a7.26,7.26,0,0,1-7.25,7.25H924.63a7.26,7.26,0,0,1-7.25-7.25V493.11a7.26,7.26,0,0,1,7.25-7.25H1289m0-.75H924.63a8,8,0,0,0-8,8V532a8,8,0,0,0,8,8H1289a8,8,0,0,0,8-8V493.11A8,8,0,0,0,1289,485.11Z"
            transform="translate(-564.86 -269.52)"
            fill="#e6e6e6"
          />
          <text
            id="Device_Name"
            dataname="Device Name"
            transform="translate(352.87 299.56)"
            fill="#333"
            fontSize="15"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice Name</tspan>
          </text>
          <rect
            id="Rectangle_3"
            dataname="Rectangle 3"
            width="380.37"
            height="53.89"
            rx="8"
            transform="translate(351.77 311.59)"
            fill="#f4f6fa"
          />
          <text
            id="Next"
            transform="translate(624.84 432.4)"
            fill="#fff"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_1"
            dataname="Line 1"
            y2="432.77"
            transform="translate(300.84 89.21)"
            fill="#e6e6e6"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <circle
            id="Ellipse_1"
            dataname="Ellipse 1"
            cx="19.5"
            cy="19.5"
            r="19.5"
            transform="translate(44.34 157.5)"
            fill="#3399fe"
          />
          <text
            id="_1"
            dataname="1"
            transform="translate(60.72 184.6)"
            fill="#fff"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              1
            </tspan>
          </text>
          <circle
            id="Ellipse_2"
            dataname="Ellipse 2"
            cx="19.5"
            cy="19.5"
            r="19.5"
            transform="translate(44.84 223)"
            fill="#d4d5d6"
          />
          <text
            id="_2"
            dataname="2"
            transform="translate(59.53 249.1)"
            fill="#fff"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              2
            </tspan>
          </text>
          <circle
            id="Ellipse_3"
            dataname="Ellipse 3"
            cx="19.5"
            cy="19.5"
            r="19.5"
            transform="translate(45.84 287)"
            fill="#d4d5d6"
          />
          <text
            id="_3"
            dataname="3"
            transform="translate(60.46 313.1)"
            fill="#fff"
            fontSize="18"
            fontFamily="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              3
            </tspan>
          </text>
          <line
            id="Line_2"
            dataname="Line 2"
            x2="376.56"
            transform="translate(355.58 388.5)"
            fill="none"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <line
            id="Line_3"
            dataname="Line 3"
            x2="790"
            transform="translate(0.14 89.48)"
            fill="none"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="0.75"
          />
          <rect
            id="Rectangle_4"
            dataname="Rectangle 4"
            width="33.41"
            height="3.51"
            rx="1"
            transform="translate(46.89 57.85)"
            fill="#329afc"
          />
          <rect
            id="Rectangle_5"
            dataname="Rectangle 5"
            width="27.44"
            height="19.67"
            rx="1"
            transform="translate(49.53 36.49)"
            fill="none"
            stroke="#3399fe"
            strokeMiterlimit="10"
            strokeWidth="2.5"
          />
          <rect
            id="Rectangle_6"
            dataname="Rectangle 6"
            width="127"
            height="50.84"
            rx="8"
            transform="translate(605.29 410.13)"
            fill="#3399fe"
          />
          <text
            id="Next-2"
            dataname="Next"
            transform="translate(637.29 440.9)"
            fill="#fff"
            fontSize="16"
            fontFamily="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            fontWeight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letterSpacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_4"
            dataname="Line 4"
            x1="13.06"
            transform="translate(687.98 434.78)"
            fill="none"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            opacity="0.3"
          />
          <line
            id="Line_5"
            dataname="Line 5"
            x2="6.1"
            y2="6.09"
            transform="translate(695.38 428.69)"
            fill="none"
            stroke="#fff"
            strokeLinejoin="bevel"
            strokeWidth="1.5"
          />
          <line
            id="Line_6"
            dataname="Line 6"
            x1="6.1"
            y2="6.1"
            transform="translate(695.38 434.78)"
            fill="none"
            stroke="#fff"
            strokeLinecap="square"
            strokeMiterlimit="10"
            strokeWidth="1.5"
          />
        </g>
      </g>
    </StyledSlide5>
  );
};

export { Slide1, Slide2, Slide3, Slide4, Slide5 };
