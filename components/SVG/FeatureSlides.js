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
          <feFlood flood-color="#121212" flood-opacity="0.161" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Register-step-1" transform="translate(180 3681)">
        <rect
          id="Rectangle_38"
          data-name="Rectangle 38"
          width="890"
          height="760"
          rx="11"
          transform="translate(-180 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Register-step-1-2"
          data-name="Register-step-1"
          transform="translate(-129.92 -3611.945)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -50.08, -69.05)"
            filter="url(#Rectangle_22)"
          >
            <rect
              id="Rectangle_22-2"
              data-name="Rectangle 22"
              width="789.84"
              height="621.89"
              rx="10"
              transform="translate(50.08 69.05)"
              fill="#fff"
            />
          </g>
          <text
            id="First_Name"
            data-name="First Name"
            transform="translate(55.35 192.34)"
            fill="#333"
            font-size="16"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              First Name
            </tspan>
          </text>
          <text
            id="Please_enter_your_first_name"
            data-name="Please enter your first name"
            transform="translate(55.35 274.6)"
            fill="#b3b3b3"
            font-size="14"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our first name</tspan>
          </text>
          <text
            id="Please_enter_your_first_name-2"
            data-name="Please enter your first name"
            transform="translate(404.35 274.6)"
            fill="#b3b3b3"
            font-size="14"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our first name</tspan>
          </text>
          <text
            id="Please_enter_your_company_name"
            data-name="Please enter your company name"
            transform="translate(55.35 390.6)"
            fill="#b3b3b3"
            font-size="14"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our compa</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              n
            </tspan>
            <tspan y="0">y name</tspan>
          </text>
          <text
            id="Please_enter_your_short_name"
            data-name="Please enter your short name"
            transform="translate(56.59 507.6)"
            fill="#b3b3b3"
            font-size="14"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Please en
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              y
            </tspan>
            <tspan y="0">our short name</tspan>
          </text>
          <text
            id="Set_Up_Your_Workspace"
            data-name="Set Up Your Workspace"
            transform="translate(56.35 143.09)"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Set Up{" "}
            </tspan>
            <tspan y="0" letter-spacing="-0.11em">
              Y
            </tspan>
            <tspan y="0">our </tspan>
            <tspan y="0" letter-spacing="-0.03em">
              W
            </tspan>
            <tspan y="0">orkspace</tspan>
          </text>
          <rect
            id="Rectangle_23"
            data-name="Rectangle 23"
            width="323.15"
            height="53.89"
            rx="6"
            transform="translate(55.12 204)"
            fill="#f4f6fa"
          />
          <text
            id="Last_Name"
            data-name="Last Name"
            transform="translate(404.35 192.34)"
            fill="#333"
            font-size="16"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Last Name
            </tspan>
          </text>
          <rect
            id="Rectangle_24"
            data-name="Rectangle 24"
            width="323.15"
            height="53.89"
            rx="6"
            transform="translate(403.97 204)"
            fill="#f4f6fa"
          />
          <text
            id="Workspace_Name"
            data-name="Workspace Name"
            transform="translate(56.35 308.34)"
            fill="#333"
            font-size="16"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0" letter-spacing="-0.03em">
              W
            </tspan>
            <tspan y="0">orkspace Name</tspan>
          </text>
          <rect
            id="Rectangle_25"
            data-name="Rectangle 25"
            width="671.87"
            height="54.02"
            rx="6"
            transform="translate(55.24 319.87)"
            fill="#f4f6fa"
          />
          <text
            id="Workspace_URL"
            data-name="Workspace URL"
            transform="translate(56.35 425.34)"
            fill="#333"
            font-size="16"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0" letter-spacing="-0.03em">
              W
            </tspan>
            <tspan y="0">orkspace URL</tspan>
          </text>
          <rect
            id="Rectangle_26"
            data-name="Rectangle 26"
            width="671.87"
            height="54.15"
            rx="6"
            transform="translate(55.24 436.74)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_27"
            data-name="Rectangle 27"
            width="182"
            height="43"
            rx="5"
            transform="translate(539.12 441.89)"
            fill="#e3e5e8"
          />
          <text
            id="_.wirewise.com"
            data-name=".wirewise.com"
            transform="translate(579.2 468.97)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              .wirewise.com
            </tspan>
          </text>
          <path
            id="Path_31"
            data-name="Path 31"
            d="M923.71,280a1.9,1.9,0,0,1-.09-.58c0-.59.42-.89,1.26-.89a1.57,1.57,0,0,1,1,.32l3.8,12.36,4-12.43h1.52l4,12.43L942.59,280a2.6,2.6,0,0,1,.67-1.17,1.619,1.619,0,0,1,1.11-.37,1.47,1.47,0,0,1,1.17.51l-5.45,16.08h-1.56l-4-11.94-4.06,11.94h-1.58Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_32"
            data-name="Path 32"
            d="M949.16,275.67a1.959,1.959,0,1,1,2.76,0A2,2,0,0,1,949.16,275.67Zm.08,19.46V280.49a2.169,2.169,0,0,1,.44-1.42,1.55,1.55,0,0,1,1.27-.53,3,3,0,0,1,.89.13V293.3a2.15,2.15,0,0,1-.45,1.43,1.54,1.54,0,0,1-1.26.52,3,3,0,0,1-.89-.12Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_33"
            data-name="Path 33"
            d="M957.22,295.13V280.49a2.12,2.12,0,0,1,.45-1.42,1.53,1.53,0,0,1,1.26-.53,3,3,0,0,1,.89.13v4.39a7.541,7.541,0,0,1,1.9-3.46,4.07,4.07,0,0,1,2.85-1.15c1.19,0,1.78.53,1.78,1.6a1.66,1.66,0,0,1-.63,1.41,2.19,2.19,0,0,0-1-.16,4,4,0,0,0-3.67,2.13c-.84,1.42-1.27,3.72-1.27,6.9v3a2.17,2.17,0,0,1-.44,1.42,1.54,1.54,0,0,1-1.26.52A3,3,0,0,1,957.22,295.13Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_34"
            data-name="Path 34"
            d="M971.26,294.42a6.79,6.79,0,0,1-2.6-2.94,10.34,10.34,0,0,1-.92-4.49,10.5,10.5,0,0,1,.93-4.55,7.211,7.211,0,0,1,2.6-3,6.9,6.9,0,0,1,3.85-1.07,6,6,0,0,1,4.86,2.13,8.851,8.851,0,0,1,1.76,5.77,2.17,2.17,0,0,1-.24,1.22,1.16,1.16,0,0,1-1,.32H970.3a6.06,6.06,0,0,0,1.28,4,4.3,4.3,0,0,0,3.44,1.5,5.86,5.86,0,0,0,2.87-.7,5.69,5.69,0,0,0,2-1.86,1.4,1.4,0,0,1,.95,1.44,2.11,2.11,0,0,1-.86,1.6,6.468,6.468,0,0,1-2.2,1.19,8.789,8.789,0,0,1-2.74.45,7.3,7.3,0,0,1-3.78-1.01Zm7.89-8.77a7.159,7.159,0,0,0-1-3.93,3.28,3.28,0,0,0-2.88-1.32,4.14,4.14,0,0,0-3.26,1.4,7.529,7.529,0,0,0-1.59,4.1Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_35"
            data-name="Path 35"
            d="M983.77,280a2.8,2.8,0,0,1-.09-.58c0-.59.42-.89,1.27-.89a1.54,1.54,0,0,1,1,.32l3.8,12.36,4-12.43h1.52l4,12.43,3.33-11.15a2.59,2.59,0,0,1,.66-1.17,1.65,1.65,0,0,1,1.11-.37,1.45,1.45,0,0,1,1.17.51l-5.45,16.08H998.6l-4.05-11.94-4.06,11.94H988.9Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_36"
            data-name="Path 36"
            d="M1009.23,275.67a1.955,1.955,0,1,1,2.75,0A2,2,0,0,1,1009.23,275.67Zm.08,19.46V280.49a2.12,2.12,0,0,1,.44-1.42,1.55,1.55,0,0,1,1.27-.53,2.891,2.891,0,0,1,.88.13V293.3a2.15,2.15,0,0,1-.44,1.43,1.57,1.57,0,0,1-1.27.52,2.919,2.919,0,0,1-.88-.12Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_37"
            data-name="Path 37"
            d="M1018.68,295a5.419,5.419,0,0,1-2-1.19,2.18,2.18,0,0,1-.75-1.57,1.09,1.09,0,0,1,.89-1.18,7.9,7.9,0,0,0,2.14,1.62,5.64,5.64,0,0,0,2.67.65,3.28,3.28,0,0,0,2.19-.67,2.31,2.31,0,0,0,.79-1.86,2.28,2.28,0,0,0-.76-1.76,7.23,7.23,0,0,0-2.66-1.31,10,10,0,0,1-3.88-2.07,4.2,4.2,0,0,1-1.12-3.09,3.62,3.62,0,0,1,1.47-3.25,6.62,6.62,0,0,1,3.72-1,7,7,0,0,1,3.82.93,2.69,2.69,0,0,1,1.44,2.28,1.09,1.09,0,0,1-.88,1.18,8.651,8.651,0,0,0-1.92-1.7,4.46,4.46,0,0,0-2.36-.64,3.4,3.4,0,0,0-2.08.6,1.84,1.84,0,0,0-.8,1.55,2.25,2.25,0,0,0,.82,1.79,9.3,9.3,0,0,0,2.85,1.41,9.57,9.57,0,0,1,3.79,2,4,4,0,0,1,1.09,2.91,4.23,4.23,0,0,1-1.55,3.59,6.46,6.46,0,0,1-4,1.18,8.681,8.681,0,0,1-2.92-.4Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_38"
            data-name="Path 38"
            d="M1033.41,294.42a6.85,6.85,0,0,1-2.6-2.94,10.339,10.339,0,0,1-.91-4.49,10.5,10.5,0,0,1,.93-4.55,7.139,7.139,0,0,1,2.6-3,6.9,6.9,0,0,1,3.85-1.07,6,6,0,0,1,4.86,2.13,8.8,8.8,0,0,1,1.76,5.77,2.17,2.17,0,0,1-.24,1.22,1.17,1.17,0,0,1-1,.32h-10.2a6,6,0,0,0,1.29,4,4.26,4.26,0,0,0,3.43,1.51,5.87,5.87,0,0,0,2.87-.71,5.669,5.669,0,0,0,2-1.85,1.38,1.38,0,0,1,1,1.44,2.11,2.11,0,0,1-.85,1.6,6.458,6.458,0,0,1-2.2,1.2,8.549,8.549,0,0,1-2.74.45,7.31,7.31,0,0,1-3.85-1.03Zm7.89-8.77a7.081,7.081,0,0,0-1-3.93,3.31,3.31,0,0,0-2.89-1.32,4.16,4.16,0,0,0-3.26,1.4,7.69,7.69,0,0,0-1.59,4.1Z"
            transform="translate(-565.88 -231.11)"
          />
          <path
            id="Path_39"
            data-name="Path 39"
            d="M907.68,286.72l-7.3,12.64a6.315,6.315,0,0,1-1,1.33,6.44,6.44,0,0,1-9.1,0,6.679,6.679,0,0,1-1-1.34L873.8,272.54a8.4,8.4,0,0,1,1.36-1.78,8.58,8.58,0,0,1,12.13,0,8.341,8.341,0,0,1,1.36,1.77l8.06,13.95a6.43,6.43,0,0,0,11,.23Z"
            transform="translate(-565.88 -231.11)"
            fill="#27c1bc"
            fill-rule="evenodd"
          />
          <path
            id="Path_40"
            data-name="Path 40"
            d="M867.58,298.29a8.59,8.59,0,0,0,14.86,0L867,271.48a6.44,6.44,0,0,0-8.79-2.38,6.731,6.731,0,0,0-1.34,1h0l-9.4,9.4a6.43,6.43,0,0,1,9.1,0,7,7,0,0,1,1,1.33Z"
            transform="translate(-565.88 -231.11)"
            fill="#139bbf"
            fill-rule="evenodd"
          />
          <path
            id="Path_41"
            data-name="Path 41"
            d="M905.35,268.25a7.5,7.5,0,1,0,7.51,7.5,7.59,7.59,0,0,0-2.2-5.31,7.46,7.46,0,0,0-5.31-2.19Z"
            transform="translate(-565.88 -231.11)"
            fill="#e55217"
            fill-rule="evenodd"
          />
          <rect
            id="Rectangle_28"
            data-name="Rectangle 28"
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
            font-size="16"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_11"
            data-name="Line 11"
            x1="13.06"
            transform="translate(682.88 549.7)"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="1.5"
            opacity="0.3"
          />
          <line
            id="Line_12"
            data-name="Line 12"
            x2="6.1"
            y2="6.1"
            transform="translate(690.28 543.6)"
            fill="none"
            stroke="#fff"
            stroke-linejoin="bevel"
            stroke-width="1.5"
          />
          <line
            id="Line_13"
            data-name="Line 13"
            x1="6.1"
            y2="6.1"
            transform="translate(690.28 549.7)"
            fill="none"
            stroke="#fff"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <line
            id="Line_14"
            data-name="Line 14"
            x2="671"
            transform="translate(56.12 99.89)"
            fill="none"
            stroke="#e6e6e6"
            stroke-miterlimit="10"
            stroke-width="1"
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
          <feFlood flood-color="#121212" flood-opacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Add_Network-step-2" transform="translate(-776 3681)">
        <rect
          id="Rectangle_39"
          data-name="Rectangle 39"
          width="890"
          height="760"
          rx="11"
          transform="translate(776 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Add_Network-step-2-2"
          data-name="Add_Network-step-2"
          transform="translate(840.29 -3636.185)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -64.29, -44.81)"
            filter="url(#Rectangle_7)"
          >
            <rect
              id="Rectangle_7-2"
              data-name="Rectangle 7"
              width="760.92"
              height="670.37"
              rx="10"
              transform="translate(64.29 44.81)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_2"
            data-name="Path 2"
            d="M630.45,337.06H632V349h-1.3l-6.47-9.07V349h-1.55V337.06H624l6.46,9Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_3"
            data-name="Path 3"
            d="M642.11,344.37a3.836,3.836,0,0,1-.07.78h-6.72a2.73,2.73,0,0,0,.87,2,2.81,2.81,0,0,0,2,.77,2.65,2.65,0,0,0,2.49-1.5l1.22.64a3.45,3.45,0,0,1-1.43,1.51,4.41,4.41,0,0,1-2.3.6,4.16,4.16,0,0,1-3.1-1.26,4.74,4.74,0,0,1,0-6.36,4,4,0,0,1,3-1.24A3.81,3.81,0,0,1,641,341.5,4,4,0,0,1,642.11,344.37Zm-6.76-.4h5.2a2.32,2.32,0,0,0-.76-1.74,2.42,2.42,0,0,0-1.72-.71,2.62,2.62,0,0,0-1.81.67,2.72,2.72,0,0,0-.91,1.81Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_4"
            data-name="Path 4"
            d="M647.25,349.07a2.74,2.74,0,0,1-2-.7,2.64,2.64,0,0,1-.71-2v-4.58h-1.69V340.5h.44a1.2,1.2,0,0,0,1.25-1.25v-1.5h1.4v2.75H648v1.31h-2.1v4.58a2.282,2.282,0,0,0,.05.48,2,2,0,0,0,.18.48,1,1,0,0,0,.5.42,2.109,2.109,0,0,0,.86.15,3,3,0,0,0,.61-.05V349A3.579,3.579,0,0,1,647.25,349.07Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_5"
            data-name="Path 5"
            d="M660.32,340.5h1.58l-3,8.48h-1.31l-2.12-6.59L653.33,349H652l-3-8.48h1.59l2.11,6.45,2-6.45h1.54l2,6.41Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_6"
            data-name="Path 6"
            d="M670.25,347.91a4.66,4.66,0,0,1-6.37,0,4.3,4.3,0,0,1-1.29-3.19,4.24,4.24,0,0,1,1.29-3.17,4.71,4.71,0,0,1,6.37,0,4.27,4.27,0,0,1,1.28,3.17,4.33,4.33,0,0,1-1.28,3.19Zm-5.31-1a3,3,0,0,0,4.24,0,3.28,3.28,0,0,0,0-4.43,3,3,0,0,0-4.24,0,3.28,3.28,0,0,0,0,4.43Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_7"
            data-name="Path 7"
            d="M676.9,340.4h.71v1.31h-.92a2,2,0,0,0-1.52.59,2.26,2.26,0,0,0-.56,1.62V349H673.2v-8.5h1.36v1.05A2.5,2.5,0,0,1,676.9,340.4Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_8"
            data-name="Path 8"
            d="M686.2,340.5l-3.2,3.39,3.2,5.11h-1.62l-2.52-4.07-1.54,1.62V349h-1.41V337.06h1.41v7.6l4-4.16Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_9"
            data-name="Path 9"
            d="M698.14,337.06h1.55V349h-1.31l-6.46-9.07V349h-1.56V337.06h1.31l6.47,9Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_10"
            data-name="Path 10"
            d="M705.36,340.31a3.6,3.6,0,0,1,2.43.81,2.67,2.67,0,0,1,.94,2.11V349h-1.38v-1.19a3,3,0,0,1-1.17,1,3.32,3.32,0,0,1-1.56.37,3.39,3.39,0,0,1-2.23-.71,2.26,2.26,0,0,1-.86-1.83,2,2,0,0,1,.72-1.57,4.53,4.53,0,0,1,2.06-.93l3-.66v-.24a1.4,1.4,0,0,0-.55-1.16,2.13,2.13,0,0,0-1.41-.45A2.45,2.45,0,0,0,704,342a2.329,2.329,0,0,0-.89,1l-1.26-.64a3.19,3.19,0,0,1,1.35-1.46,4.11,4.11,0,0,1,2.16-.59Zm-.66,7.63a2.55,2.55,0,0,0,2.62-2.61v-.74l-2.68.61a2.631,2.631,0,0,0-1.19.54,1.13,1.13,0,0,0-.43.89,1.17,1.17,0,0,0,.45,1,2,2,0,0,0,1.23.31Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_11"
            data-name="Path 11"
            d="M719.85,340.31a3.07,3.07,0,0,1,2.24.87,3,3,0,0,1,.88,2.21V349h-1.4v-5.14a2.25,2.25,0,0,0-.56-1.61,2.14,2.14,0,0,0-3,0,2.25,2.25,0,0,0-.57,1.61V349h-1.41v-5.14a2.25,2.25,0,0,0-.55-1.61,2.14,2.14,0,0,0-3,0,2.25,2.25,0,0,0-.57,1.61V349H710.5v-8.5h1.38v1a2.69,2.69,0,0,1,2.41-1.16,3.19,3.19,0,0,1,1.6.4,2.73,2.73,0,0,1,1.11,1.1,2.9,2.9,0,0,1,1.14-1.11A3.46,3.46,0,0,1,719.85,340.31Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <path
            id="Path_12"
            data-name="Path 12"
            d="M732.75,344.37a3.831,3.831,0,0,1-.07.78H726a2.78,2.78,0,0,0,.88,2,2.81,2.81,0,0,0,2,.77,2.63,2.63,0,0,0,2.48-1.5l1.23.64a3.45,3.45,0,0,1-1.43,1.51,4.41,4.41,0,0,1-2.3.6,4.15,4.15,0,0,1-3.1-1.26,4.75,4.75,0,0,1,0-6.36,4,4,0,0,1,3-1.24,3.83,3.83,0,0,1,2.93,1.19,4.06,4.06,0,0,1,1.06,2.87ZM726,344h5.2a2.32,2.32,0,0,0-.76-1.74,2.44,2.44,0,0,0-1.73-.71,2.61,2.61,0,0,0-1.8.67A2.681,2.681,0,0,0,726,344Z"
            transform="translate(-566.08 -204.63)"
            fill="#333"
          />
          <text
            id="Network_Address"
            data-name="Network Address"
            transform="translate(56.35 243.09)"
            fill="#329afc"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Net
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              A
            </tspan>
            <tspan y="0">ddress</tspan>
          </text>
          <text
            id="Network_Definition"
            data-name="Network Definition"
            transform="translate(56.35 111.09)"
            fill="#329afc"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Net
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork Definition</tspan>
          </text>
          <text
            id="DNS_Server"
            data-name="DNS Server"
            transform="translate(56.35 374.09)"
            fill="#329afc"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              DNS Ser
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              v
            </tspan>
            <tspan y="0">er</tspan>
          </text>
          <text
            id="Enable_Network"
            data-name="Enable Network"
            transform="translate(56.35 502.09)"
            fill="#329afc"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Enable Net
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <rect
            id="Rectangle_8"
            data-name="Rectangle 8"
            width="651.61"
            height="53.89"
            rx="8"
            transform="translate(55.12 154)"
            fill="#f4f6fa"
          />
          <text
            id="Reported_network_address:_100.000.000.0_10"
            data-name="Reported network address:    100.000.000.0/10"
            transform="translate(56.35 270.97)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0" letter-spacing="-0.03em">
              R
            </tspan>
            <tspan y="0">epo</tspan>
            <tspan y="0" letter-spacing="0.01em">
              r
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              t
            </tspan>
            <tspan y="0">ed net</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0" xmlSpace="preserve">
              ork address:{" "}
            </tspan>
            <tspan y="0" fill="#666">
              100.000.000.0/10
            </tspan>
          </text>
          <text
            id="Reported_DNS_server:"
            data-name="Reported DNS server:"
            transform="translate(56.35 399.97)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0" letter-spacing="-0.03em">
              R
            </tspan>
            <tspan y="0">epo</tspan>
            <tspan y="0" letter-spacing="0.01em">
              r
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              t
            </tspan>
            <tspan y="0">ed DNS ser</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              v
            </tspan>
            <tspan y="0">er:</tspan>
          </text>
          <text
            id="Enable_Network-2"
            data-name="Enable Network"
            transform="translate(87.35 574.97)"
            fill="#999"
            font-size="15"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Enable Net
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <text
            id="If_you_would_like_to_enable_the_network_now_check_the_box_below._Otherwise_you_can_enable_it_at_a_later_time"
            data-name="If you would like to enable the network now, check the box below. Otherwise you can enable it at a 
later time"
            transform="translate(56.35 526.19)"
            fill="#999"
            font-size="14"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              If{" "}
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              y
            </tspan>
            <tspan y="0">ou </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ould li</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              k
            </tspan>
            <tspan y="0">e </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">o enable the net</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork n</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              o
            </tspan>
            <tspan y="0" letter-spacing="-0.04em">
              w
            </tspan>
            <tspan y="0">, check the b</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              o
            </tspan>
            <tspan y="0">x bel</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              o
            </tspan>
            <tspan y="0" letter-spacing="-0.04em">
              w
            </tspan>
            <tspan y="0">. Otherwise </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              y
            </tspan>
            <tspan y="0">ou can enable it at a </tspan>
            <tspan x="0" y="17">
              la
            </tspan>
            <tspan y="17" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="17">er time</tspan>
          </text>
          <rect
            id="Rectangle_9"
            data-name="Rectangle 9"
            width="651.68"
            height="54.02"
            rx="8"
            transform="translate(55.24 284.87)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_10"
            data-name="Rectangle 10"
            width="651.68"
            height="54.15"
            rx="8"
            transform="translate(55.24 412.74)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_11"
            data-name="Rectangle 11"
            width="18.47"
            height="18.63"
            rx="3"
            transform="translate(55.24 560.74)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_12"
            data-name="Rectangle 12"
            width="127"
            height="50.84"
            rx="8"
            transform="translate(580.19 583.05)"
            fill="#3399fe"
          />
          <text
            id="Next"
            transform="translate(612.19 613.81)"
            fill="#fff"
            font-size="16"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_7"
            data-name="Line 7"
            x1="13.06"
            transform="translate(662.88 607.7)"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="1.5"
            opacity="0.3"
          />
          <line
            id="Line_8"
            data-name="Line 8"
            x2="6.1"
            y2="6.1"
            transform="translate(670.28 601.6)"
            fill="none"
            stroke="#fff"
            stroke-linejoin="bevel"
            stroke-width="1.5"
          />
          <line
            id="Line_9"
            data-name="Line 9"
            x1="6.1"
            y2="6.1"
            transform="translate(670.28 607.7)"
            fill="none"
            stroke="#fff"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
          <line
            id="Line_10"
            data-name="Line 10"
            x2="761"
            transform="translate(0.42 68.89)"
            fill="none"
            stroke="#e6e6e6"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
          <text
            id="Create_a_Network"
            data-name="Create a Network"
            transform="translate(92.35 43.9)"
            font-size="20"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Crea
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              t
            </tspan>
            <tspan y="0">e a Net</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <rect
            id="Rectangle_13"
            data-name="Rectangle 13"
            width="33.41"
            height="3.51"
            rx="1"
            transform="translate(46.36 46.33)"
            fill="#329afc"
          />
          <rect
            id="Rectangle_14"
            data-name="Rectangle 14"
            width="27.44"
            height="19.67"
            rx="1"
            transform="translate(49.01 24.97)"
            fill="none"
            stroke="#3399fe"
            stroke-miterlimit="10"
            stroke-width="2.5"
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
          <feFlood flood-color="#121212" flood-opacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Install_Gateway-step-3" transform="translate(-1732 3681)">
        <rect
          id="Rectangle_40"
          data-name="Rectangle 40"
          width="890"
          height="760"
          rx="11"
          transform="translate(1732 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Install_Gateway-step-3-2"
          data-name="Install_Gateway-step-3"
          transform="translate(1882.2 -3621.48)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -150.2, -59.52)"
            filter="url(#Rectangle_15)"
          >
            <rect
              id="Rectangle_15-2"
              data-name="Rectangle 15"
              width="589.03"
              height="640.96"
              rx="10"
              transform="translate(150.69 59.52)"
              fill="#eaf1f8"
            />
          </g>
          <rect
            id="Rectangle_16"
            data-name="Rectangle 16"
            width="589.15"
            height="100.74"
            rx="10"
            transform="translate(0.44 0.21)"
            fill="#252939"
          />
          <path
            id="Path_13"
            data-name="Path 13"
            d="M930.75,256.9a2.7,2.7,0,0,1-.09-.57c0-.6.42-.9,1.27-.9a1.6,1.6,0,0,1,1,.32l3.8,12.36,4-12.42h1.53l4,12.42L949.63,257a2.579,2.579,0,0,1,.67-1.17,1.62,1.62,0,0,1,1.11-.37,1.45,1.45,0,0,1,1.17.51L947.13,272h-1.55l-4.06-11.94-4,11.94h-1.59Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_14"
            data-name="Path 14"
            d="M956.21,252.63a1.91,1.91,0,0,1-.56-1.39,1.93,1.93,0,0,1,.56-1.4,2,2,0,0,1,2.75,0,1.93,1.93,0,0,1,.56,1.4,1.91,1.91,0,0,1-.56,1.39A2,2,0,0,1,956.21,252.63Zm.08,19.45V257.45a2.15,2.15,0,0,1,.44-1.43,1.53,1.53,0,0,1,1.27-.52,2.921,2.921,0,0,1,.88.12v14.64a2.17,2.17,0,0,1-.44,1.42,1.58,1.58,0,0,1-1.27.53,3,3,0,0,1-.89-.13Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_15"
            data-name="Path 15"
            d="M964.27,272.08V257.45a2.2,2.2,0,0,1,.44-1.43,1.54,1.54,0,0,1,1.27-.52,2.88,2.88,0,0,1,.88.12V260a7.469,7.469,0,0,1,1.91-3.45,4.09,4.09,0,0,1,2.85-1.16c1.18,0,1.77.54,1.77,1.61a1.659,1.659,0,0,1-.63,1.4,2.29,2.29,0,0,0-1-.16,4,4,0,0,0-3.68,2.13q-1.26,2.13-1.26,6.9v3a2.129,2.129,0,0,1-.45,1.43,1.54,1.54,0,0,1-1.26.52A3,3,0,0,1,964.27,272.08Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_16"
            data-name="Path 16"
            d="M978.3,271.38a6.809,6.809,0,0,1-2.6-2.95,11.43,11.43,0,0,1,0-9,7.23,7.23,0,0,1,2.6-3,7,7,0,0,1,3.84-1.07,6,6,0,0,1,4.86,2.13,8.83,8.83,0,0,1,1.76,5.78,2.13,2.13,0,0,1-.24,1.21,1.16,1.16,0,0,1-1,.33h-10.2a6,6,0,0,0,1.28,4,4.29,4.29,0,0,0,3.44,1.51,5.87,5.87,0,0,0,2.87-.71,5.58,5.58,0,0,0,2-1.85,1.38,1.38,0,0,1,1,1.44,2.11,2.11,0,0,1-.85,1.6,6.559,6.559,0,0,1-2.2,1.18,8.549,8.549,0,0,1-2.74.45,7.311,7.311,0,0,1-3.82-1.05Zm7.89-8.78a7,7,0,0,0-1-3.92,3.32,3.32,0,0,0-2.89-1.33,4.12,4.12,0,0,0-3.26,1.41,7.69,7.69,0,0,0-1.59,4.1Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_17"
            data-name="Path 17"
            d="M990.82,256.9a2.2,2.2,0,0,1-.1-.57c0-.6.43-.9,1.27-.9a1.6,1.6,0,0,1,1,.32l3.81,12.36,4-12.42h1.52l4,12.42L1009.7,257a2.57,2.57,0,0,1,.66-1.17,1.65,1.65,0,0,1,1.11-.37,1.45,1.45,0,0,1,1.17.51L1007.2,272h-1.55l-4.06-11.94L997.53,272h-1.59Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_18"
            data-name="Path 18"
            d="M1016.27,252.63a1.86,1.86,0,0,1-.55-1.39,1.88,1.88,0,0,1,.55-1.4,1.931,1.931,0,0,1,3.31,1.4,1.941,1.941,0,0,1-.55,1.39,2,2,0,0,1-2.76,0Zm.08,19.45V257.45a2.2,2.2,0,0,1,.44-1.43,1.54,1.54,0,0,1,1.27-.52,3,3,0,0,1,.89.12v14.64a2.12,2.12,0,0,1-.45,1.42,1.55,1.55,0,0,1-1.26.53,3,3,0,0,1-.89-.13Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_19"
            data-name="Path 19"
            d="M1025.73,272a5.25,5.25,0,0,1-2.05-1.18,2.22,2.22,0,0,1-.74-1.57,1.08,1.08,0,0,1,.88-1.18,8,8,0,0,0,2.14,1.61,5.71,5.71,0,0,0,2.68.66,3.23,3.23,0,0,0,2.18-.68,2.29,2.29,0,0,0,.8-1.85,2.37,2.37,0,0,0-.76-1.77,7.629,7.629,0,0,0-2.67-1.31,10.24,10.24,0,0,1-3.88-2.06,4.2,4.2,0,0,1-1.12-3.09,3.59,3.59,0,0,1,1.48-3.25,6.6,6.6,0,0,1,3.72-1,7,7,0,0,1,3.82.93,2.69,2.69,0,0,1,1.44,2.27,1.1,1.1,0,0,1-.89,1.19,8,8,0,0,0-1.92-1.7,4.37,4.37,0,0,0-2.36-.64,3.45,3.45,0,0,0-2.07.59,1.84,1.84,0,0,0-.81,1.56,2.26,2.26,0,0,0,.83,1.79,9.059,9.059,0,0,0,2.85,1.41,9.591,9.591,0,0,1,3.78,2,4,4,0,0,1,1.1,2.91,4.23,4.23,0,0,1-1.56,3.59,6.419,6.419,0,0,1-4,1.18,8.63,8.63,0,0,1-2.87-.41Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_20"
            data-name="Path 20"
            d="M1040.46,271.38a6.81,6.81,0,0,1-2.6-2.95,10.3,10.3,0,0,1-.92-4.48,10.473,10.473,0,0,1,.93-4.55,7.3,7.3,0,0,1,2.6-3,7,7,0,0,1,3.85-1.07,6,6,0,0,1,4.86,2.13,8.771,8.771,0,0,1,1.76,5.78,2.129,2.129,0,0,1-.24,1.21,1.13,1.13,0,0,1-1,.32h-10.2a6,6,0,0,0,1.28,4,4.3,4.3,0,0,0,3.44,1.5,5.72,5.72,0,0,0,2.86-.7,5.64,5.64,0,0,0,2.05-1.86,1.4,1.4,0,0,1,.95,1.44,2.11,2.11,0,0,1-.86,1.6,6.47,6.47,0,0,1-2.2,1.19,8.51,8.51,0,0,1-2.74.45A7.3,7.3,0,0,1,1040.46,271.38Zm7.88-8.78a7,7,0,0,0-1-3.92,3.3,3.3,0,0,0-2.88-1.33,4.15,4.15,0,0,0-3.27,1.41,7.61,7.61,0,0,0-1.58,4.1Z"
            transform="translate(-674.4 -217.04)"
            fill="#fff"
          />
          <path
            id="Path_21"
            data-name="Path 21"
            d="M914.72,263.67l-7.29,12.65a7,7,0,0,1-1,1.33,6.45,6.45,0,0,1-10.13-1.35l-15.48-26.81a8.678,8.678,0,0,1,1.36-1.77,8.59,8.59,0,0,1,12.14,0,8.923,8.923,0,0,1,1.35,1.77l8.06,13.95a6.44,6.44,0,0,0,11,.23Z"
            transform="translate(-674.4 -217.04)"
            fill="#27c1bc"
            fill-rule="evenodd"
          />
          <path
            id="Path_22"
            data-name="Path 22"
            d="M874.63,275.25a8.58,8.58,0,0,0,14.85,0L874,248.43a6.43,6.43,0,0,0-8.78-2.37,6.7,6.7,0,0,0-1.35,1h0l-9.4,9.41a6.44,6.44,0,0,1,9.1,0,6.682,6.682,0,0,1,1,1.34Z"
            transform="translate(-674.4 -217.04)"
            fill="#139bbf"
            fill-rule="evenodd"
          />
          <path
            id="Path_23"
            data-name="Path 23"
            d="M912.39,245.2a7.51,7.51,0,1,0,5.31,2.2,7.51,7.51,0,0,0-5.31-2.2Z"
            transform="translate(-674.4 -217.04)"
            fill="#e55217"
            fill-rule="evenodd"
          />
          <circle
            id="Ellipse_4"
            data-name="Ellipse 4"
            cx="7.67"
            cy="7.67"
            r="7.67"
            transform="translate(14.05 11.19)"
            fill="#ed1c24"
            opacity="0.9"
          />
          <circle
            id="Ellipse_5"
            data-name="Ellipse 5"
            cx="7.67"
            cy="7.67"
            r="7.67"
            transform="translate(34.1 11.19)"
            fill="#fbb03b"
            opacity="0.9"
          />
          <circle
            id="Ellipse_6"
            data-name="Ellipse 6"
            cx="7.67"
            cy="7.67"
            r="7.67"
            transform="translate(53.26 11.19)"
            fill="#22b573"
            opacity="0.9"
          />
          <rect
            id="Rectangle_17"
            data-name="Rectangle 17"
            width="589.6"
            height="12"
            transform="translate(0 89.96)"
            fill="#eaf1f8"
          />
          <text
            id="Gateway_IP"
            data-name="Gateway IP"
            transform="translate(105.53 175.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Ga
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay IP</tspan>
          </text>
          <text
            id="Install_Locally"
            data-name="Install Locally"
            transform="translate(130.53 494.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Install Locally
            </tspan>
          </text>
          <text
            id="Enter_Remote_Gateway_Information"
            data-name="Enter Remote Gateway Information"
            transform="translate(134.53 132.68)"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              En
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              t
            </tspan>
            <tspan y="0">er </tspan>
            <tspan y="0" letter-spacing="-0.03em">
              R
            </tspan>
            <tspan y="0">em</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              ot
            </tspan>
            <tspan y="0">e Ga</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay In</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ormation</tspan>
          </text>
          <path
            id="Path_24"
            data-name="Path 24"
            d="M112.43,182H476.79a7.63,7.63,0,0,1,7.63,7.63V220a7.63,7.63,0,0,1-7.62,7.63H112.43A7.63,7.63,0,0,1,104.8,220V189.59a7.62,7.62,0,0,1,7.63-7.59Z"
            fill="#fff"
          />
          <path
            id="Path_25"
            data-name="Path 25"
            d="M1151.2,399.38a7.26,7.26,0,0,1,7.25,7.25V437a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V406.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V437a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V406.63A8,8,0,0,0,1151.2,398.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <path
            id="Path_26"
            data-name="Path 26"
            d="M112.43,260H476.79a7.63,7.63,0,0,1,7.63,7.63V298a7.63,7.63,0,0,1-7.62,7.63H112.43A7.63,7.63,0,0,1,104.8,298V267.59A7.62,7.62,0,0,1,112.43,260Z"
            fill="#fff"
          />
          <path
            id="Path_27"
            data-name="Path 27"
            d="M1151.2,477.38a7.26,7.26,0,0,1,7.25,7.25V515a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V484.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V515a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V484.63A8,8,0,0,0,1151.2,476.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <text
            id="Username"
            transform="translate(105.53 254.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Username
            </tspan>
          </text>
          <text
            id="Password"
            transform="translate(105.53 331.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0" letter-spacing="-0.03em">
              P
            </tspan>
            <tspan y="0">ass</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ord</tspan>
          </text>
          <rect
            id="Rectangle_18"
            data-name="Rectangle 18"
            width="379.62"
            height="45.66"
            rx="7.63"
            transform="translate(104.8 337.96)"
            fill="#fff"
          />
          <path
            id="Path_28"
            data-name="Path 28"
            d="M1151.2,555.38a7.26,7.26,0,0,1,7.25,7.25V593a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V562.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V593a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V562.63A8,8,0,0,0,1151.2,554.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <rect
            id="Rectangle_19"
            data-name="Rectangle 19"
            width="379.62"
            height="45.66"
            rx="7.63"
            transform="translate(104.8 415.96)"
            fill="#fff"
          />
          <path
            id="Path_29"
            data-name="Path 29"
            d="M1151.2,633.38a7.26,7.26,0,0,1,7.25,7.25V671a7.26,7.26,0,0,1-7.25,7.25H786.83a7.26,7.26,0,0,1-7.25-7.25V640.63a7.26,7.26,0,0,1,7.25-7.25H1151.2m0-.75H786.83a8,8,0,0,0-8,8V671a8,8,0,0,0,8,8H1151.2a8,8,0,0,0,8-8V640.63A8,8,0,0,0,1151.2,632.63Z"
            transform="translate(-674.4 -217.04)"
            fill="#e6e6e6"
          />
          <text
            id="API_Path"
            data-name="API Path"
            transform="translate(105.53 410.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              API{" "}
            </tspan>
            <tspan y="0" letter-spacing="-0.03em">
              P
            </tspan>
            <tspan y="0">ath</tspan>
          </text>
          <rect
            id="Rectangle_20"
            data-name="Rectangle 20"
            width="380.1"
            height="45.37"
            rx="8"
            transform="translate(104.49 535.63)"
            fill="#252939"
          />
          <text
            id="Install_Gateway"
            data-name="Install Gateway"
            transform="translate(235.82 563.4)"
            fill="#fff"
            font-size="16"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Install Ga
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay</tspan>
          </text>
          <rect
            id="Rectangle_21"
            data-name="Rectangle 21"
            width="17.61"
            height="17.63"
            rx="3.63"
            transform="translate(104.61 480.37)"
            fill="#fff"
          />
          <path
            id="Path_30"
            data-name="Path 30"
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
          <feFlood flood-color="#121212" flood-opacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Security_Settings-step-4" transform="translate(-2688 3681)">
        <rect
          id="Rectangle_41"
          data-name="Rectangle 41"
          width="890"
          height="760"
          rx="11"
          transform="translate(2688 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Security_Settings-step-4-2"
          data-name="Security_Settings-step-4"
          transform="translate(2767.545 -3602.805)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -79.54, -78.2)"
            filter="url(#Rectangle_29)"
          >
            <rect
              id="Rectangle_29-2"
              data-name="Rectangle 29"
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
            font-size="22"
            font-family="PlusJakartaSans-Bold, Plus Jakarta Sans"
            font-weight="700"
          >
            <tspan x="0" y="0">
              Settings
            </tspan>
          </text>
          <text
            id="DNS_configuration"
            data-name="DNS configuration"
            transform="translate(98.83 168.34)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              DNS configur
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion</tspan>
          </text>
          <text
            id="Max_Life_Managed"
            data-name="Max Life Managed"
            transform="translate(101.91 293.01)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Max Li
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              f
            </tspan>
            <tspan y="0">e Managed</tspan>
          </text>
          <text
            id="Re-Key_Before_Expiration"
            data-name="Re-Key Before Expiration"
            transform="translate(42.92 351.68)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0" letter-spacing="-0.03em">
              R
            </tspan>
            <tspan y="0">e-</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              K
            </tspan>
            <tspan y="0">ey Be</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ore Expir</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion</tspan>
          </text>
          <text
            id="Managed_Devices"
            data-name="Managed Devices"
            transform="translate(101.19 472.68)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Managed D
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vices</tspan>
          </text>
          <text
            id="Notify_Before_Expiration"
            data-name="Notify Before Expiration"
            transform="translate(53.32 527.68)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              o
            </tspan>
            <tspan y="0">tify Be</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ore Expir</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion</tspan>
          </text>
          <text
            id="Network"
            transform="translate(268.15 123.89)"
            fill="#333"
            font-size="19.56"
            font-family="PlusJakartaSans-Bold, Plus Jakarta Sans"
            font-weight="700"
          >
            <tspan x="0" y="0">
              Net
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              w
            </tspan>
            <tspan y="0">ork</tspan>
          </text>
          <rect
            id="Rectangle_30"
            data-name="Rectangle 30"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 139.22)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_31"
            data-name="Rectangle 31"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 263.23)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_32"
            data-name="Rectangle 32"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 321.5)"
            fill="#f4f6fa"
          />
          <rect
            id="Rectangle_33"
            data-name="Rectangle 33"
            width="400.9"
            height="44.01"
            rx="8"
            transform="translate(264.48 437.98)"
            fill="#f4f6fa"
          />
          <g id="Group_1" data-name="Group 1" opacity="0.6">
            <rect
              id="Rectangle_34"
              data-name="Rectangle 34"
              width="400.9"
              height="44.01"
              rx="8"
              transform="translate(264.48 497.33)"
              fill="#f4f6fa"
            />
          </g>
          <text
            id="Encryption_Key"
            data-name="Encryption Key"
            transform="translate(267.38 246.35)"
            fill="#333"
            font-size="19.56"
            font-family="PlusJakartaSans-Bold, Plus Jakarta Sans"
            font-weight="700"
          >
            <tspan x="0" y="0">
              Encry
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              p
            </tspan>
            <tspan y="0">tion </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              K
            </tspan>
            <tspan y="0">ey</tspan>
          </text>
          <text
            id="User_Validation_Requirements"
            data-name="User Validation Requirements"
            transform="translate(267.38 422.35)"
            fill="#333"
            font-size="19.56"
            font-family="PlusJakartaSans-Bold, Plus Jakarta Sans"
            font-weight="700"
          >
            <tspan x="0" y="0">
              User{" "}
            </tspan>
            <tspan y="0" letter-spacing="-0.04em">
              V
            </tspan>
            <tspan y="0">alid</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              a
            </tspan>
            <tspan y="0">tion </tspan>
            <tspan y="0" letter-spacing="-0.03em">
              R
            </tspan>
            <tspan y="0">equirements</tspan>
          </text>
          <line
            id="Line_15"
            data-name="Line 15"
            x2="653.37"
            transform="translate(35.84 78.5)"
            fill="none"
            stroke="#e6e6e6"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <text
            id="Gateway_Default"
            data-name="Gateway Default"
            transform="translate(279.9 168.34)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              G
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              a
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">e</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              w
            </tspan>
            <tspan y="0">ay De</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              f
            </tspan>
            <tspan y="0">ault</tspan>
          </text>
          <text
            id="_30_days"
            data-name="30 days"
            transform="translate(279.9 291.79)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              30 days
            </tspan>
          </text>
          <text
            id="_3_days"
            data-name="3 days"
            transform="translate(279.9 350.46)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              3 days
            </tspan>
          </text>
          <text
            id="_30_days-2"
            data-name="30 days"
            transform="translate(279.9 466.57)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              30 days
            </tspan>
          </text>
          <text
            id="_1_hour"
            data-name="1 hour"
            transform="translate(279.9 526.46)"
            fill="#666"
            font-size="17.11"
            font-family="PlusJakartaSans-Medium, Plus Jakarta Sans"
            font-weight="500"
          >
            <tspan x="0" y="0">
              1 hour
            </tspan>
          </text>
          <rect
            id="Rectangle_35"
            data-name="Rectangle 35"
            width="2.88"
            height="6.49"
            rx="1"
            transform="translate(65.46 29.65)"
            fill="#329afc"
          />
          <line
            id="Line_16"
            data-name="Line 16"
            x2="36"
            transform="translate(48.08 33.15)"
            fill="none"
            stroke="#329afc"
            stroke-miterlimit="10"
            stroke-width="2.75"
          />
          <rect
            id="Rectangle_36"
            data-name="Rectangle 36"
            width="2.88"
            height="6.49"
            rx="1"
            transform="translate(75.2 48.66)"
            fill="#329afc"
          />
          <line
            id="Line_17"
            data-name="Line 17"
            x2="36"
            transform="translate(48.08 52.15)"
            fill="none"
            stroke="#329afc"
            stroke-miterlimit="10"
            stroke-width="2.75"
          />
          <rect
            id="Rectangle_37"
            data-name="Rectangle 37"
            width="2.88"
            height="6.49"
            rx="1"
            transform="translate(54.08 39.71)"
            fill="#329afc"
          />
          <line
            id="Line_18"
            data-name="Line 18"
            x2="36"
            transform="translate(48.08 43.15)"
            fill="none"
            stroke="#329afc"
            stroke-miterlimit="10"
            stroke-width="2.75"
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
          <feFlood flood-color="#121212" flood-opacity="0.157" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Add_Device-step-5" transform="translate(-3644 3681)">
        <rect
          id="Rectangle_42"
          data-name="Rectangle 42"
          width="890"
          height="760"
          rx="11"
          transform="translate(3644 -3681)"
          fill="#f5f5f5"
        />
        <g
          id="Add_Device-step-5-2"
          data-name="Add_Device-step-5"
          transform="translate(3693.93 -3571)"
        >
          <g
            transform="matrix(1, 0, 0, 1, -49.93, -110)"
            filter="url(#Rectangle_1)"
          >
            <rect
              id="Rectangle_1-2"
              data-name="Rectangle 1"
              width="789.84"
              height="540"
              rx="10"
              transform="translate(49.93 110)"
              fill="#fff"
            />
          </g>
          <text
            id="Operating_System"
            data-name="Operating System"
            transform="translate(352.87 203.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              Operating Sys
            </tspan>
            <tspan y="0" letter-spacing="-0.02em">
              t
            </tspan>
            <tspan y="0">em</tspan>
          </text>
          <text
            id="Device_Details"
            data-name="Device Details"
            transform="translate(95.87 182.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice Details</tspan>
          </text>
          <text
            id="Download_Software"
            data-name="Download Software"
            transform="translate(95.87 247.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              o
            </tspan>
            <tspan y="0">wnload So</tspan>
            <tspan y="0" letter-spacing="0.02em">
              f
            </tspan>
            <tspan y="0">t</tspan>
            <tspan y="0" letter-spacing="-0.02em">
              w
            </tspan>
            <tspan y="0">are</tspan>
          </text>
          <text
            id="Apply_Configuration"
            data-name="Apply Configuration"
            transform="translate(95.87 312.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              Apply{" "}
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              C
            </tspan>
            <tspan y="0">onfiguration</tspan>
          </text>
          <text
            id="Device_Details-2"
            data-name="Device Details"
            transform="translate(351.87 157.68)"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice Details</tspan>
          </text>
          <text
            id="Add_a_Device"
            data-name="Add a Device"
            transform="translate(92.87 54.68)"
            font-size="18"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0" letter-spacing="-0.02em">
              A
            </tspan>
            <tspan y="0">dd a D</tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice</tspan>
          </text>
          <rect
            id="Rectangle_2"
            data-name="Rectangle 2"
            width="379.62"
            height="54.14"
            rx="7.62"
            transform="translate(352.15 215.96)"
            fill="#fff"
          />
          <path
            id="Path_1"
            data-name="Path 1"
            d="M1289,485.86a7.26,7.26,0,0,1,7.25,7.25V532a7.26,7.26,0,0,1-7.25,7.25H924.63a7.26,7.26,0,0,1-7.25-7.25V493.11a7.26,7.26,0,0,1,7.25-7.25H1289m0-.75H924.63a8,8,0,0,0-8,8V532a8,8,0,0,0,8,8H1289a8,8,0,0,0,8-8V493.11A8,8,0,0,0,1289,485.11Z"
            transform="translate(-564.86 -269.52)"
            fill="#e6e6e6"
          />
          <text
            id="Device_Name"
            data-name="Device Name"
            transform="translate(352.87 299.56)"
            fill="#333"
            font-size="15"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              D
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">vice Name</tspan>
          </text>
          <rect
            id="Rectangle_3"
            data-name="Rectangle 3"
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
            font-size="16"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_1"
            data-name="Line 1"
            y2="432.77"
            transform="translate(300.84 89.21)"
            fill="#e6e6e6"
            stroke="#e6e6e6"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
          <circle
            id="Ellipse_1"
            data-name="Ellipse 1"
            cx="19.5"
            cy="19.5"
            r="19.5"
            transform="translate(44.34 157.5)"
            fill="#3399fe"
          />
          <text
            id="_1"
            data-name="1"
            transform="translate(60.72 184.6)"
            fill="#fff"
            font-size="18"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              1
            </tspan>
          </text>
          <circle
            id="Ellipse_2"
            data-name="Ellipse 2"
            cx="19.5"
            cy="19.5"
            r="19.5"
            transform="translate(44.84 223)"
            fill="#d4d5d6"
          />
          <text
            id="_2"
            data-name="2"
            transform="translate(59.53 249.1)"
            fill="#fff"
            font-size="18"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              2
            </tspan>
          </text>
          <circle
            id="Ellipse_3"
            data-name="Ellipse 3"
            cx="19.5"
            cy="19.5"
            r="19.5"
            transform="translate(45.84 287)"
            fill="#d4d5d6"
          />
          <text
            id="_3"
            data-name="3"
            transform="translate(60.46 313.1)"
            fill="#fff"
            font-size="18"
            font-family="PlusJakartaDisplay-Regular, Plus Jakarta Display"
          >
            <tspan x="0" y="0">
              3
            </tspan>
          </text>
          <line
            id="Line_2"
            data-name="Line 2"
            x2="376.56"
            transform="translate(355.58 388.5)"
            fill="none"
            stroke="#e6e6e6"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
          <line
            id="Line_3"
            data-name="Line 3"
            x2="790"
            transform="translate(0.14 89.48)"
            fill="none"
            stroke="#e6e6e6"
            stroke-miterlimit="10"
            stroke-width="0.75"
          />
          <rect
            id="Rectangle_4"
            data-name="Rectangle 4"
            width="33.41"
            height="3.51"
            rx="1"
            transform="translate(46.89 57.85)"
            fill="#329afc"
          />
          <rect
            id="Rectangle_5"
            data-name="Rectangle 5"
            width="27.44"
            height="19.67"
            rx="1"
            transform="translate(49.53 36.49)"
            fill="none"
            stroke="#3399fe"
            stroke-miterlimit="10"
            stroke-width="2.5"
          />
          <rect
            id="Rectangle_6"
            data-name="Rectangle 6"
            width="127"
            height="50.84"
            rx="8"
            transform="translate(605.29 410.13)"
            fill="#3399fe"
          />
          <text
            id="Next-2"
            data-name="Next"
            transform="translate(637.29 440.9)"
            fill="#fff"
            font-size="16"
            font-family="PlusJakartaDisplay-Medium, Plus Jakarta Display"
            font-weight="500"
          >
            <tspan x="0" y="0">
              N
            </tspan>
            <tspan y="0" letter-spacing="-0.01em">
              e
            </tspan>
            <tspan y="0">xt</tspan>
          </text>
          <line
            id="Line_4"
            data-name="Line 4"
            x1="13.06"
            transform="translate(687.98 434.78)"
            fill="none"
            stroke="#fff"
            stroke-miterlimit="10"
            stroke-width="1.5"
            opacity="0.3"
          />
          <line
            id="Line_5"
            data-name="Line 5"
            x2="6.1"
            y2="6.09"
            transform="translate(695.38 428.69)"
            fill="none"
            stroke="#fff"
            stroke-linejoin="bevel"
            stroke-width="1.5"
          />
          <line
            id="Line_6"
            data-name="Line 6"
            x1="6.1"
            y2="6.1"
            transform="translate(695.38 434.78)"
            fill="none"
            stroke="#fff"
            stroke-linecap="square"
            stroke-miterlimit="10"
            stroke-width="1.5"
          />
        </g>
      </g>
    </StyledSlide5>
  );
};

export { Slide1, Slide2, Slide3, Slide4, Slide5 };
