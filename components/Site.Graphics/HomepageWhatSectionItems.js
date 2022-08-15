import styled from "styled-components";
import { useAppContext } from "../../Context";
import { useRef } from "react";
const StyledCloud = styled.g`
  transform: scale(1)
    ${(props) =>
      isSafari 
      ? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
      : `translate(0,0)`
    };
`;

const StyledLock = styled.g`
  transform: scale(1)
    ${(props) =>
      isSafari
      ? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
      : `translate(0,0)`
    };
`;
const StyledProfile = styled.g`
  transform: scale(1)
    ${(props) =>
      isSafari
      ? `translate(0, calc(${(props.offset - props.distanceY) / -34}px))`
      : `translate(0,0)`
    };
`;
const StyledLaptop = styled.g`
  transform: scale(1)
    ${(props) =>
      isSafari 
      ? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
      : `translate(0,0)`
    };
`;

const StyledDatabase = styled.g`
  transform: scale(1)
    ${(props) =>
      isSafari 
      ? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
      : `translate(0,0)`
    };
`;

const SecureSVG = ({ alt, id, className }) => {
  const { scrollOffset, windowInnerHeight, windowScrollY, isSafari } = useAppContext();
  const ref = useRef();
  const distanceY =
    ref?.current?.getBoundingClientRect()?.top +
    windowScrollY -
    windowInnerHeight / 2;

  return (
    <svg ref={ref} id={id} className={className} viewBox="0 0 1305.959 856.19">
      <defs>
        <filter
          id="Rectangle_217"
          x="500.06"
          y="108.72"
          width="796.8"
          height="730.14"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="-8" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="31" result="blur" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_219"
          x="133.05"
          y="0"
          width="735.51"
          height="671.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="39.5" result="blur-2" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_97"
          x="0"
          y="129.55"
          width="252.62"
          height="252.62"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="12" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="21.5" result="blur-3" />
          <feFlood floodOpacity="0.149" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_98"
          x="610.82"
          y="649.02"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-4" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_99"
          x="638.6"
          y="649.02"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-5" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-5" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_100"
          x="666.38"
          y="648.67"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-6" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-6" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_101"
          x="694.15"
          y="648.67"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-7" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-7" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_102"
          x="610.82"
          y="676.97"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-8" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-8" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_103"
          x="638.6"
          y="676.97"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-9" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-9" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_104"
          x="666.38"
          y="676.62"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-10" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-10" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_105"
          x="694.15"
          y="676.62"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-11" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-11" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_106"
          x="610.82"
          y="704.66"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-12" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-12" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_107"
          x="638.6"
          y="704.66"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-13" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-13" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_108"
          x="666.38"
          y="704.31"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-14" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-14" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_109"
          x="694.15"
          y="704.31"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-15" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-15" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_110"
          x="610.82"
          y="732.61"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-16" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-16" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_111"
          x="638.6"
          y="732.61"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-17" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-17" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_112"
          x="666.38"
          y="732.26"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-18" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_113"
          x="694.15"
          y="732.26"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-19" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-19" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_114"
          x="1081.14"
          y="324.71"
          width="224.82"
          height="224.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="11" dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-20" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-20" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_225"
          x="162.27"
          y="17.15"
          width="431.72"
          height="289"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="6" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15.5" result="blur-21" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-21" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_232"
          x="463.06"
          y="269.7"
          width="380"
          height="370.33"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="22" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="20" result="blur-22" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-22" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_222"
          x="127.2"
          y="321.21"
          width="380.52"
          height="534.98"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="6" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15.5" result="blur-23" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-23" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_230"
          x="786.62"
          y="4.34"
          width="343.93"
          height="409.81"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="6" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15.5" result="blur-24" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-24" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_227"
          x="757.36"
          y="535.15"
          width="503.29"
          height="301"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="6" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15.5" result="blur-25" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-25" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Secure" transform="translate(13.86 -25.35)">
        <g
          transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
          filter="url(#Rectangle_217)"
        >
          <rect
            id="Rectangle_217-2"
            data-name="Rectangle 217"
            width="610.8"
            height="544.14"
            rx="20"
            transform="translate(593.06 209.72)"
            fill="#27c1bc"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
          filter="url(#Rectangle_219)"
        >
          <rect
            id="Rectangle_219-2"
            data-name="Rectangle 219"
            width="498.51"
            height="434.82"
            rx="20"
            transform="translate(251.55 115.5)"
            fill="#eaf1f8"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
          filter="url(#Ellipse_97)"
        >
          <circle
            id="Ellipse_97-2"
            data-name="Ellipse 97"
            cx="61.81"
            cy="61.81"
            r="61.81"
            transform="translate(64.5 182.05)"
            fill="#f15a24"
          />
        </g>
        <path
          id="Path_72"
          data-name="Path 72"
          d="M949.89,656.34V743s4.93,16-50.91,16H667.42"
          transform="translate(-310 -80)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_73"
          data-name="Path 73"
          d="M809.9,270.06H930.62S953,267.41,953,297.45V422"
          transform="translate(-310 -80)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g id="circles">
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_98)"
          >
            <circle
              id="Ellipse_98-2"
              data-name="Ellipse 98"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(646.82 685.02)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_99)"
          >
            <circle
              id="Ellipse_99-2"
              data-name="Ellipse 99"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(674.6 685.02)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_100)"
          >
            <circle
              id="Ellipse_100-2"
              data-name="Ellipse 100"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(702.38 684.67)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_101)"
          >
            <circle
              id="Ellipse_101-2"
              data-name="Ellipse 101"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(730.15 684.67)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_102)"
          >
            <circle
              id="Ellipse_102-2"
              data-name="Ellipse 102"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(646.82 712.97)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_103)"
          >
            <circle
              id="Ellipse_103-2"
              data-name="Ellipse 103"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(674.6 712.97)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_104)"
          >
            <circle
              id="Ellipse_104-2"
              data-name="Ellipse 104"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(702.38 712.62)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_105)"
          >
            <circle
              id="Ellipse_105-2"
              data-name="Ellipse 105"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(730.15 712.62)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_106)"
          >
            <circle
              id="Ellipse_106-2"
              data-name="Ellipse 106"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(646.82 740.66)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_107)"
          >
            <circle
              id="Ellipse_107-2"
              data-name="Ellipse 107"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(674.6 740.66)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_108)"
          >
            <circle
              id="Ellipse_108-2"
              data-name="Ellipse 108"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(702.38 740.31)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_109)"
          >
            <circle
              id="Ellipse_109-2"
              data-name="Ellipse 109"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(730.15 740.31)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_110)"
          >
            <circle
              id="Ellipse_110-2"
              data-name="Ellipse 110"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(646.82 768.61)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_111)"
          >
            <circle
              id="Ellipse_111-2"
              data-name="Ellipse 111"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(674.6 768.61)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_112)"
          >
            <circle
              id="Ellipse_112-2"
              data-name="Ellipse 112"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(702.38 768.26)"
              fill="#f15a24"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Ellipse_113)"
          >
            <circle
              id="Ellipse_113-2"
              data-name="Ellipse 113"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(730.15 768.26)"
              fill="#f15a24"
            />
          </g>
        </g>
        <path
          id="Path_74"
          data-name="Path 74"
          d="M1069,589.09h203.31s37.69-2.23,37.69,23.07v104.9"
          transform="translate(-310 -80)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_75"
          data-name="Path 75"
          d="M1254.93,453v54s3.22,10-33.35,10H1069.9"
          transform="translate(-310 -80)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g
          transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
          filter="url(#Ellipse_114)"
        >
          <circle
            id="Ellipse_114-2"
            data-name="Ellipse 114"
            cx="76.41"
            cy="76.41"
            r="76.41"
            transform="translate(1106.14 357.71)"
            fill="#f15a24"
          />
        </g>
        <StyledCloud id="clouds" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Rectangle_225)"
          >
            <rect
              id="Rectangle_225-2"
              data-name="Rectangle 225"
              width="338.72"
              height="196"
              rx="20"
              transform="translate(208.77 57.65)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_76"
            data-name="Path 76"
            d="M748.66,311.74c18.13,0,32.83-14.37,32.83-32.09s-14.7-32.1-32.83-32.1a20.468,20.468,0,0,0-2.95.14,13.811,13.811,0,0,0,1.17-5.56,14.21,14.21,0,0,0-14.37-14,14.48,14.48,0,0,0-7.1,1.84,42,42,0,0,0-38.93-25.61c-23.21,0-42,18.39-42,41.08v.68h-1.36c-18.78,0-34,14.89-34,33.25s15.23,33.4,34,33.25Zm-32.38-37.4"
            transform="translate(-310 -80)"
            fill="#252939"
          />
          <path
            id="Path_77"
            data-name="Path 77"
            d="M706.23,313.49c18.14,0,32.84-14.37,32.84-32.1s-14.7-32.09-32.84-32.09a23.165,23.165,0,0,0-3,.13,13.74,13.74,0,0,0,1.17-5.56,14.21,14.21,0,0,0-14.37-14.05,14.55,14.55,0,0,0-7.1,1.85A42,42,0,0,0,644,206.06c-23.2,0-42,18.39-42,41.07v.69h-1.35c-18.79,0-34,14.89-34,33.26s15.23,33.39,34,33.25Zm-32.37-37.4"
            transform="translate(-310 -80)"
            fill="#ebf1f8"
          />
        </StyledCloud>
        <StyledLock id="lock" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Rectangle_232)"
          >
            <rect
              id="Rectangle_232-2"
              data-name="Rectangle 232"
              width="260"
              height="250.33"
              rx="20"
              transform="translate(523.06 307.7)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_78"
            data-name="Path 78"
            d="M994.16,519.64v.3c-2.73-.25-5.45-.29-8.18-.28-4.05,0-8.09,0-12.13-.06-.09-8.56.35-17.14-.19-25.69-.77-12-11.23-21.54-23.45-21.59s-22.83,9.5-23.6,21.59c-.55,8.55-.11,17.13-.2,25.69-6.76.27-13.54-.24-20.3.34v-.3c.06-8.67-.23-17.34.17-26a42.3,42.3,0,0,1,9.9-25.52,43.45,43.45,0,0,1,25.89-15.35c1.21-.24,2.49-.12,3.62-.76h8.88c2,.81,4.09.73,6.1,1.3q25.41,7.18,32.27,32.66a41.769,41.769,0,0,1,1.21,10.51C994.21,504.19,994.16,511.92,994.16,519.64Z"
            transform="translate(-310 -80)"
            fill="#252939"
          />
          <path
            id="Path_79"
            data-name="Path 79"
            d="M994.16,519.64h-3.27c-4.6,0-9.19,0-13.79-.06-.1-9.74.4-19.49-.22-29.21-.87-13.68-12.77-24.5-26.65-24.56s-26,10.81-26.84,24.56c-.62,9.72-.12,19.47-.22,29.21-5.69.22-11.37,0-17.06.08.06-8.67-.23-17.34.17-26a42.3,42.3,0,0,1,9.9-25.52,43.45,43.45,0,0,1,25.89-15.35c1.21-.24,2.49-.12,3.62-.76h8.88c2,.81,4.09.73,6.1,1.3q25.41,7.18,32.27,32.66a41.768,41.768,0,0,1,1.21,10.51C994.21,504.19,994.16,511.92,994.16,519.64Z"
            transform="translate(-310 -80)"
            fill="#bdc4c6"
          />
          <path
            id="Path_80"
            data-name="Path 80"
            d="M975,516c4.24,0,8.48.08,12.71.06a84.626,84.626,0,0,1,8.58.29,19.08,19.08,0,0,1,10.52,6.82,15.83,15.83,0,0,1,3.55,9.48c.12,7,.07,14.08.07,21.12v43.42c0,8.85-5.34,15.76-13.61,17.8a19.224,19.224,0,0,1-4.61.51H908c-10.43,0-18.16-7.56-18.19-18q-.12-31.77,0-63.54c0-8.54,5.26-15.12,13.52-17.36a3.56,3.56,0,0,0,.6-.27c7.09-.6,14.19-.07,21.29-.35.72,0,1.44.07,2.16.07H972.3C973.23,516.08,974.12,516,975,516Z"
            transform="translate(-310 -80)"
            fill="#252939"
          />
          <path
            id="Path_81"
            data-name="Path 81"
            d="M950,585.84h-4.28a2.45,2.45,0,0,1-2.6-3c.54-3.76,1.08-7.53,1.66-11.28a1.33,1.33,0,0,0-.74-1.58,11.693,11.693,0,1,1,12.23-.06,1.42,1.42,0,0,0-.8,1.74c.59,3.72,1.11,7.44,1.62,11.17a2.43,2.43,0,0,1-2.59,3C953,585.87,951.53,585.84,950,585.84Z"
            transform="translate(-310 -80)"
            fill="#fff"
          />
        </StyledLock>
        <StyledProfile id="profile" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Rectangle_222)"
          >
            <rect
              id="Rectangle_222-2"
              data-name="Rectangle 222"
              width="287.52"
              height="441.98"
              rx="20"
              transform="translate(173.7 361.71)"
              fill="#fff"
            />
          </g>
          <circle
            id="Ellipse_118"
            data-name="Ellipse 118"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(217.76 704.09)"
            fill="#f15a24"
          />
          <circle
            id="Ellipse_119"
            data-name="Ellipse 119"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(217.76 752.07)"
            fill="#f15a24"
          />
          <rect
            id="Rectangle_238"
            data-name="Rectangle 238"
            width="168.48"
            height="17.29"
            rx="6"
            transform="translate(217.84 622.93)"
            fill="#b3b3b3"
          />
          <rect
            id="Rectangle_239"
            data-name="Rectangle 239"
            width="137.56"
            height="8.53"
            rx="3"
            transform="translate(243.43 703.03)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_240"
            data-name="Rectangle 240"
            width="74.64"
            height="8.53"
            rx="3"
            transform="translate(243.43 715.82)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_241"
            data-name="Rectangle 241"
            width="137.56"
            height="8.53"
            rx="3"
            transform="translate(243.43 749.95)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_242"
            data-name="Rectangle 242"
            width="74.64"
            height="8.53"
            rx="3"
            transform="translate(243.43 762.74)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_243"
            data-name="Rectangle 243"
            width="84.24"
            height="17.29"
            rx="6"
            transform="translate(217.84 647.71)"
            fill="#f15a24"
          />
          <rect
            id="Rectangle_244"
            data-name="Rectangle 244"
            width="158.63"
            height="152.73"
            rx="20"
            transform="translate(214.65 430.27)"
            fill="#e6e6e6"
          />
          <path
            id="Path_82"
            data-name="Path 82"
            d="M564.67,636.39c0-27.48,17.75-49.76,39.65-49.76S644,608.91,644,636.39"
            transform="translate(-310 -80)"
            fill="#3399fe"
            stroke="#e6e6e6"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_120"
            data-name="Ellipse 120"
            cx="21.35"
            cy="21.35"
            r="21.35"
            transform="translate(272.97 457.69)"
            fill="#3399fe"
          />
        </StyledProfile>
        <StyledLaptop id="laptop" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Rectangle_230)"
          >
            <rect
              id="Rectangle_230-2"
              data-name="Rectangle 230"
              width="250.93"
              height="316.81"
              rx="20"
              transform="translate(833.12 44.84)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_233"
            data-name="Rectangle 233"
            width="173.03"
            height="13.94"
            rx="6"
            transform="translate(858.04 308.68)"
            fill="#b3b3b3"
          />
          <rect
            id="Rectangle_234"
            data-name="Rectangle 234"
            width="86.52"
            height="13.94"
            rx="6"
            transform="translate(858.04 284.3)"
            fill="#f15a24"
          />
          <path
            id="Path_83"
            data-name="Path 83"
            d="M1173.7,296.77v-2.29c0-31.8.07-63.61-.08-95.42,0-5,3.28-8.16,8-8.14q71.08.18,142.18.07c5.55,0,8,2.45,8,8.07v95.23c0,.83,0,1.66.05,2.48h-49.1a13.78,13.78,0,0,0-10.44,4.48,1.859,1.859,0,0,1-1.37.58h-35.92a1,1,0,0,1-.74-.39,14.9,14.9,0,0,0-11.26-4.71ZM1253,201.3h-66.62c-1.78,0-2.37.38-2.37,2.27q.09,40.38,0,80.75c0,1.68.34,2.26,2.17,2.26q66.61-.07,133.24,0c1.83,0,2.17-.58,2.17-2.26q-.07-40.27,0-80.55c0-2.42,0-2.43-2.52-2.43Z"
            transform="translate(-310 -80)"
            fill="#3399fe"
          />
          <path
            id="Path_84"
            data-name="Path 84"
            d="M1272.64,300.34a9.23,9.23,0,0,1,7.58-3.54h51.7c2.55,0,5.09.06,7.64,0,1,0,1.52.27,1.44,1.39-.16,2.22.24,4.45-.26,6.66a6.65,6.65,0,0,1-6.5,5.39H1173.09c-6,0-8.47-2.44-8.44-8.42,0-1.58-.68-3.61.29-4.61s3.13-.29,4.76-.38c1.33-.07,2.67,0,4,0h52.56a9.38,9.38,0,0,1,7,3.44,2.43,2.43,0,0,0,2,.77h33.69C1271.14,301,1272.17,301,1272.64,300.34Z"
            transform="translate(-310 -80)"
            fill="#1673bf"
          />
          <path
            id="Path_85"
            data-name="Path 85"
            d="M1253,201.3h66c2.51,0,2.52,0,2.52,2.42v80.56c0,1.67-.34,2.26-2.17,2.26q-66.62-.07-133.24,0c-1.83,0-2.17-.59-2.17-2.26q.07-40.38,0-80.75c0-1.9.59-2.27,2.37-2.27Q1219.69,201.35,1253,201.3Z"
            transform="translate(-310 -80)"
            fill="#ebf1f8"
          />
        </StyledLaptop>
        <StyledDatabase
          id="database"
          offset={scrollOffset}
          distanceY={distanceY}
          isSafari={isSafari}
        >
          <g
            transform="matrix(1, 0, 0, 1, -13.86, 25.35)"
            filter="url(#Rectangle_227)"
          >
            <rect
              id="Rectangle_227-2"
              data-name="Rectangle 227"
              width="410.29"
              height="208"
              rx="20"
              transform="translate(803.86 575.65)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_235"
            data-name="Rectangle 235"
            width="132.77"
            height="41.4"
            rx="6"
            transform="translate(844.58 637.46)"
            fill="#252939"
          />
          <rect
            id="Rectangle_236"
            data-name="Rectangle 236"
            width="132.77"
            height="41.4"
            rx="6"
            transform="translate(844.55 686.29)"
            fill="#252939"
          />
          <rect
            id="Rectangle_237"
            data-name="Rectangle 237"
            width="132.77"
            height="41.4"
            rx="6"
            transform="translate(844.55 735.26)"
            fill="#252939"
          />
          <circle
            id="Ellipse_115"
            data-name="Ellipse 115"
            cx="9.73"
            cy="9.73"
            r="9.73"
            transform="translate(852.84 648.77)"
            fill="#fff"
          />
          <circle
            id="Ellipse_116"
            data-name="Ellipse 116"
            cx="9.73"
            cy="9.73"
            r="9.73"
            transform="translate(852.84 696.98)"
            fill="#fff"
          />
          <circle
            id="Ellipse_117"
            data-name="Ellipse 117"
            cx="9.73"
            cy="9.73"
            r="9.73"
            transform="translate(852.84 747.01)"
            fill="#fff"
          />
          <rect
            id="Rectangle_245"
            data-name="Rectangle 245"
            width="123.25"
            height="12.02"
            rx="6"
            transform="translate(1017.05 673.1)"
            fill="#b3b3b3"
          />
          <rect
            id="Rectangle_246"
            data-name="Rectangle 246"
            width="123.25"
            height="12.02"
            rx="6"
            transform="translate(1017.05 729.21)"
            fill="#b3b3b3"
          />
          <circle
            id="Ellipse_121"
            data-name="Ellipse 121"
            cx="8.62"
            cy="8.62"
            r="8.62"
            transform="translate(1017.07 698.73)"
            fill="#f15a24"
          />
          <circle
            id="Ellipse_122"
            data-name="Ellipse 122"
            cx="8.62"
            cy="8.62"
            r="8.62"
            transform="translate(1043.13 698.73)"
            fill="#f15a24"
          />
          <circle
            id="Ellipse_123"
            data-name="Ellipse 123"
            cx="8.62"
            cy="8.62"
            r="8.62"
            transform="translate(1070.18 698.73)"
            fill="#f15a24"
          />
          <circle
            id="Ellipse_124"
            data-name="Ellipse 124"
            cx="8.62"
            cy="8.62"
            r="8.62"
            transform="translate(1097.24 698.73)"
            fill="#f15a24"
          />
          <circle
            id="Ellipse_125"
            data-name="Ellipse 125"
            cx="8.62"
            cy="8.62"
            r="8.62"
            transform="translate(1123.29 698.73)"
            fill="#f15a24"
          />
        </StyledDatabase>
      </g>
    </svg>
  );
};

const StreamlinedSVG = ({ alt, id, className }) => {
  const { scrollOffset, windowInnerHeight, windowScrollY, isSafari } = useAppContext();
  const ref = useRef();
  const distanceY =
    ref?.current?.getBoundingClientRect()?.top +
    windowScrollY -
    windowInnerHeight / 2;

  return (
    <svg ref={ref} id={id} className={className} viewBox="0 0 1333.45 986.9">
      <defs>
        <filter
          id="Rectangle_248"
          x="21.5"
          y="122.4"
          width="809.2"
          height="680.93"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="26" result="blur" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_126"
          x="22.7"
          y="302.76"
          width="158.7"
          height="158.7"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="13" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="11" result="blur-2" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_127"
          x="498.12"
          y="136.81"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-3" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_128"
          x="528.84"
          y="136.81"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-4" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_129"
          x="559.56"
          y="136.42"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-5" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-5" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_130"
          x="590.28"
          y="136.42"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-6" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-6" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_131"
          x="498.12"
          y="167.72"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-7" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-7" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_132"
          x="528.84"
          y="167.72"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-8" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-8" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_133"
          x="559.56"
          y="167.34"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-9" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-9" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_134"
          x="590.28"
          y="167.34"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-10" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-10" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_135"
          x="498.12"
          y="198.34"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-11" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-11" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_136"
          x="528.84"
          y="198.34"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-12" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-12" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_137"
          x="559.56"
          y="197.96"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-13" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-13" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_138"
          x="590.28"
          y="197.96"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-14" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-14" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_139"
          x="498.12"
          y="229.26"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-15" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-15" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_140"
          x="528.84"
          y="228.87"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-16" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-16" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_141"
          x="559.56"
          y="228.87"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-17" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-17" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_142"
          x="590.28"
          y="228.87"
          width="93.5"
          height="93.5"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-18" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_252"
          x="557.7"
          y="255.06"
          width="701.3"
          height="681.84"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="35" dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="35" result="blur-19" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-19" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_143"
          x="1000.7"
          y="356.16"
          width="184.7"
          height="184.7"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="7" dy="13" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="11" result="blur-20" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-20" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_255"
          x="0"
          y="531.9"
          width="574"
          height="455"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="14" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="42.5" result="blur-21" />
          <feFlood floodOpacity="0.059" />
          <feComposite operator="in" in2="blur-21" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_144"
          x="526.38"
          y="702.92"
          width="269.82"
          height="269.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="13" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="19.5" result="blur-22" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-22" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_260"
          x="395.2"
          y="338.91"
          width="428"
          height="391.33"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="22" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="23.5" result="blur-23" />
          <feFlood floodOpacity="0.122" />
          <feComposite operator="in" in2="blur-23" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_258"
          x="133.44"
          y="74.55"
          width="328.06"
          height="408.85"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="13" result="blur-24" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-24" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_272"
          x="718.19"
          y="586.9"
          width="570.81"
          height="363"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="5" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="22.5" result="blur-25" />
          <feFlood floodOpacity="0.059" />
          <feComposite operator="in" in2="blur-25" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_266"
          x="651.25"
          y="0"
          width="682.2"
          height="579.9"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="49.5" result="blur-26" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-26" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Streamlined" transform="translate(5.5 43.4)">
        <g
          transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
          filter="url(#Rectangle_248)"
        >
          <rect
            id="Rectangle_248-2"
            data-name="Rectangle 248"
            width="653.2"
            height="524.93"
            rx="20"
            transform="translate(99.5 197.4)"
            fill="#eaf1f8"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
          filter="url(#Ellipse_126)"
        >
          <circle
            id="Ellipse_126-2"
            data-name="Ellipse 126"
            cx="46.35"
            cy="46.35"
            r="46.35"
            transform="translate(55.7 322.76)"
            fill="#f15a24"
          />
        </g>
        <path
          id="Path_86"
          data-name="Path 86"
          d="M901.61,661.3V761.44s4,18.56-41.29,18.56H672.53"
          transform="translate(-341 -74)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_87"
          data-name="Path 87"
          d="M814.66,567H661.41S633,568.72,633,548.76V466"
          transform="translate(-341 -74)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g id="circles">
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_127)"
          >
            <circle
              id="Ellipse_127-2"
              data-name="Ellipse 127"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(534.12 172.81)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_128)"
          >
            <circle
              id="Ellipse_128-2"
              data-name="Ellipse 128"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(564.84 172.81)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_129)"
          >
            <circle
              id="Ellipse_129-2"
              data-name="Ellipse 129"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(595.56 172.42)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_130)"
          >
            <circle
              id="Ellipse_130-2"
              data-name="Ellipse 130"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(626.28 172.42)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_131)"
          >
            <circle
              id="Ellipse_131-2"
              data-name="Ellipse 131"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(534.12 203.72)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_132)"
          >
            <circle
              id="Ellipse_132-2"
              data-name="Ellipse 132"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(564.84 203.72)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_133)"
          >
            <circle
              id="Ellipse_133-2"
              data-name="Ellipse 133"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(595.56 203.34)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_134)"
          >
            <circle
              id="Ellipse_134-2"
              data-name="Ellipse 134"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(626.28 203.34)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_135)"
          >
            <circle
              id="Ellipse_135-2"
              data-name="Ellipse 135"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(534.12 234.34)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_136)"
          >
            <circle
              id="Ellipse_136-2"
              data-name="Ellipse 136"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(564.84 234.34)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_137)"
          >
            <circle
              id="Ellipse_137-2"
              data-name="Ellipse 137"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(595.56 233.96)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_138)"
          >
            <circle
              id="Ellipse_138-2"
              data-name="Ellipse 138"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(626.28 233.96)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_139)"
          >
            <circle
              id="Ellipse_139-2"
              data-name="Ellipse 139"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(534.12 265.26)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_140)"
          >
            <circle
              id="Ellipse_140-2"
              data-name="Ellipse 140"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(564.84 264.87)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_141)"
          >
            <circle
              id="Ellipse_141-2"
              data-name="Ellipse 141"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(595.56 264.87)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Ellipse_142)"
          >
            <circle
              id="Ellipse_142-2"
              data-name="Ellipse 142"
              cx="10.75"
              cy="10.75"
              r="10.75"
              transform="translate(626.28 264.87)"
              fill="#3399fe"
            />
          </g>
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
          filter="url(#Rectangle_252)"
        >
          <rect
            id="Rectangle_252-2"
            data-name="Rectangle 252"
            width="491.3"
            height="471.84"
            rx="20"
            transform="translate(627.7 357.06)"
            fill="#252939"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
          filter="url(#Ellipse_143)"
        >
          <circle
            id="Ellipse_143-2"
            data-name="Ellipse 143"
            cx="59.35"
            cy="59.35"
            r="59.35"
            transform="translate(1026.7 376.16)"
            fill="#f15a24"
          />
        </g>
        <path
          id="Path_88"
          data-name="Path 88"
          d="M1096.66,554.05H1295.2s36.8-2.23,36.8,23.07V682"
          transform="translate(-341 -74)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_89"
          data-name="Path 89"
          d="M1011.06,443V351.05S1008.55,334,1037,334h118"
          transform="translate(-341 -74)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <StyledCloud
          offset={scrollOffset}
          distanceY={distanceY}
          isSafari={isSafari}
          transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
          filter="url(#Rectangle_255)"
        >
          <rect
            id="Rectangle_255-2"
            data-name="Rectangle 255"
            width="319"
            height="200"
            rx="20"
            transform="translate(127.5 645.4)"
            fill="#fff"
          />
          <path
            id="Path_93"
            data-name="Path 93"
            d="M712.22,836.76c20.77,0,37.61-16.46,37.61-36.77S733,763.23,712.22,763.23c-1.14,0-2.27.06-3.38.15a15.73,15.73,0,0,0,1.34-6.37,16.28,16.28,0,0,0-16.46-16.09,16.62,16.62,0,0,0-8.13,2.11A48.17,48.17,0,0,0,641,713.69c-26.58,0-48.13,21.07-48.13,47.06v.78h-1.55c-21.52,0-39,17.06-39,38.1s17.45,38.25,39,38.09Zm-37.09-42.85"
            transform="translate(-341 -34)"
            fill="#252939"
          />
          <path
            id="Path_94"
            data-name="Path 94"
            d="M651.62,838.76c20.77,0,37.61-16.46,37.61-36.77s-16.84-36.76-37.61-36.76c-1.14,0-2.27.06-3.38.15a15.73,15.73,0,0,0,1.34-6.37,16.28,16.28,0,0,0-16.46-16.09A16.62,16.62,0,0,0,625,745a48.17,48.17,0,0,0-44.6-29.34c-26.58,0-48.13,21.07-48.13,47.06v.78h-1.55c-21.52,0-39,17.06-39,38.1s17.45,38.25,39,38.09Zm-37.09-42.85"
            transform="translate(-341 -34)"
            fill="#ebf1f8"
          />
        </StyledCloud>
        <g
          transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
          filter="url(#Ellipse_144)"
        >
          <circle
            id="Ellipse_144-2"
            data-name="Ellipse 144"
            cx="76.41"
            cy="76.41"
            r="76.41"
            transform="translate(584.88 748.42)"
            fill="#f15a24"
          />
        </g>
        <StyledProfile
          id="profiles"
          offset={scrollOffset}
          distanceY={distanceY}
          isSafari={isSafari}
        >
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Rectangle_260)"
          >
            <rect
              id="Rectangle_260-2"
              data-name="Rectangle 260"
              width="287"
              height="250.33"
              rx="20"
              transform="translate(465.7 387.41)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_90"
            data-name="Path 90"
            d="M957.73,594c0-44,21.25-79.62,47.46-79.62S1052.64,550,1052.64,594"
            transform="translate(-341 -74)"
            fill="#252939"
          />
          <circle
            id="Ellipse_145"
            data-name="Ellipse 145"
            cx="25.55"
            cy="25.55"
            r="25.55"
            transform="translate(638.64 384.31)"
            fill="#252939"
          />
          <path
            id="Path_91"
            data-name="Path 91"
            d="M846.6,585.21c0-37.41,18.07-67.74,40.37-67.74s40.37,30.33,40.37,67.74"
            transform="translate(-341 -74)"
            fill="#252939"
          />
          <circle
            id="Ellipse_146"
            data-name="Ellipse 146"
            cx="21.74"
            cy="21.74"
            r="21.74"
            transform="translate(524.23 395.54)"
            fill="#252939"
          />
          <path
            id="Path_92"
            data-name="Path 92"
            d="M894.73,620.27c0-45.37,21.92-82.15,49-82.15s49,36.78,49,82.15"
            transform="translate(-341 -74)"
            fill="#252939"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_147"
            data-name="Ellipse 147"
            cx="26.36"
            cy="26.36"
            r="26.36"
            transform="translate(576.33 403.7)"
            fill="#252939"
          />
        </StyledProfile>
        <StyledLaptop id="phone" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Rectangle_258)"
          >
            <rect
              id="Rectangle_258-2"
              data-name="Rectangle 258"
              width="250.06"
              height="330.85"
              rx="20"
              transform="translate(172.44 113.55)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_261"
            data-name="Rectangle 261"
            width="189.19"
            height="189.16"
            rx="30"
            transform="translate(196.92 103.58)"
            fill="#f2f2f2"
          />
          <rect
            id="Rectangle_262"
            data-name="Rectangle 262"
            width="74.37"
            height="144.01"
            rx="8"
            transform="translate(254.32 125.43)"
            fill="#27c1bc"
          />
          <circle
            id="Ellipse_148"
            data-name="Ellipse 148"
            cx="6.18"
            cy="6.18"
            r="6.18"
            transform="translate(285.3 249.77)"
            fill="#fff"
          />
          <line
            id="Line_72"
            data-name="Line 72"
            x2="22.89"
            transform="translate(279.5 133.99)"
            fill="none"
            stroke="#fff"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <rect
            id="Rectangle_263"
            data-name="Rectangle 263"
            width="157.78"
            height="12.71"
            rx="6"
            transform="translate(200.59 349.39)"
            fill="#b3b3b3"
          />
          <rect
            id="Rectangle_264"
            data-name="Rectangle 264"
            width="78.89"
            height="12.71"
            rx="6"
            transform="translate(200.59 327.15)"
            fill="#f15a24"
          />
        </StyledLaptop>
        <StyledLock id="folder" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Rectangle_272)"
          >
            <rect
              id="Rectangle_272-2"
              data-name="Rectangle 272"
              width="435.81"
              height="228"
              rx="20"
              transform="translate(785.69 649.4)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_273"
            data-name="Rectangle 273"
            width="150.6"
            height="106.53"
            rx="4"
            transform="translate(813.98 668.75)"
            fill="#139bbf"
          />
          <rect
            id="Rectangle_274"
            data-name="Rectangle 274"
            width="150.6"
            height="106.53"
            rx="4"
            transform="translate(813.98 668.75)"
            fill="none"
            stroke="#139bbf"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <rect
            id="Rectangle_275"
            data-name="Rectangle 275"
            width="153.69"
            height="106.53"
            rx="4"
            transform="translate(813.98 677.47)"
            fill="#27c1bc"
          />
          <rect
            id="Rectangle_276"
            data-name="Rectangle 276"
            width="153.69"
            height="106.53"
            rx="4"
            transform="translate(813.98 677.47)"
            fill="none"
            stroke="#27c1bc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <rect
            id="Rectangle_277"
            data-name="Rectangle 277"
            width="68.24"
            height="106.53"
            rx="4"
            transform="translate(813.96 660)"
            fill="#27c1bc"
          />
          <rect
            id="Rectangle_278"
            data-name="Rectangle 278"
            width="68.24"
            height="106.53"
            rx="4"
            transform="translate(813.96 660)"
            fill="none"
            stroke="#27c1bc"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="6"
          />
          <circle
            id="Ellipse_149"
            data-name="Ellipse 149"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(1002.86 715.05)"
            fill="#f15a24"
          />
          <rect
            id="Rectangle_279"
            data-name="Rectangle 279"
            width="137.56"
            height="8.53"
            rx="3"
            transform="translate(1028.53 713.99)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_280"
            data-name="Rectangle 280"
            width="74.64"
            height="8.53"
            rx="3"
            transform="translate(1028.53 726.78)"
            fill="#ccc"
          />
          <circle
            id="Ellipse_150"
            data-name="Ellipse 150"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(1002.86 758.03)"
            fill="#f15a24"
          />
          <rect
            id="Rectangle_281"
            data-name="Rectangle 281"
            width="137.56"
            height="8.53"
            rx="3"
            transform="translate(1028.53 755.9)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_282"
            data-name="Rectangle 282"
            width="74.64"
            height="8.53"
            rx="3"
            transform="translate(1028.53 768.7)"
            fill="#ccc"
          />
          <circle
            id="Ellipse_151"
            data-name="Ellipse 151"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(1002.86 674.03)"
            fill="#f15a24"
          />
          <rect
            id="Rectangle_283"
            data-name="Rectangle 283"
            width="137.56"
            height="8.53"
            rx="3"
            transform="translate(1028.53 671.9)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_284"
            data-name="Rectangle 284"
            width="74.64"
            height="8.53"
            rx="3"
            transform="translate(1028.53 684.7)"
            fill="#ccc"
          />
        </StyledLock>
        <StyledCloud id="screen" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, -5.5, -43.4)"
            filter="url(#Rectangle_266)"
          >
            <rect
              id="Rectangle_266-2"
              data-name="Rectangle 266"
              width="385.2"
              height="282.9"
              rx="20"
              transform="translate(799.75 148.5)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_267"
            data-name="Rectangle 267"
            width="196"
            height="68.98"
            rx="10"
            transform="translate(942 166.17)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_268"
            data-name="Rectangle 268"
            width="356"
            height="28.08"
            rx="8"
            transform="translate(810 117.92)"
            fill="#252939"
          />
          <rect
            id="Rectangle_269"
            data-name="Rectangle 269"
            width="88.35"
            height="112.54"
            rx="10"
            transform="translate(942 250.46)"
            fill="#ccc"
          />
          <rect
            id="Rectangle_270"
            data-name="Rectangle 270"
            width="88.35"
            height="112.54"
            rx="10"
            transform="translate(1049.65 250.46)"
            fill="#ccc"
          />
          <circle
            id="Ellipse_152"
            data-name="Ellipse 152"
            cx="6.21"
            cy="6.21"
            r="6.21"
            transform="translate(820.02 125.24)"
            fill="#ed1c24"
            opacity="0.9"
          />
          <circle
            id="Ellipse_153"
            data-name="Ellipse 153"
            cx="6.21"
            cy="6.21"
            r="6.21"
            transform="translate(838.42 125.24)"
            fill="#fbb03b"
            opacity="0.9"
          />
          <circle
            id="Ellipse_154"
            data-name="Ellipse 154"
            cx="6.21"
            cy="6.21"
            r="6.21"
            transform="translate(856.58 125.24)"
            fill="#22b573"
            opacity="0.9"
          />
          <path
            id="Path_95"
            data-name="Path 95"
            d="M1249,248.5a8,8,0,0,1-8,7.87h-71.37a7.88,7.88,0,1,1,0-15.75H1241a8,8,0,0,1,8,7.881Z"
            transform="translate(-341 -74)"
            fill="#ccc"
          />
          <path
            id="Path_96"
            data-name="Path 96"
            d="M1222.94,282.12a8,8,0,0,1-8,7.88h-45.31a7.88,7.88,0,1,1,0-15.75h45.31a8,8,0,0,1,8,7.871Z"
            transform="translate(-341 -74)"
            fill="#ccc"
          />
          <path
            id="Path_97"
            data-name="Path 97"
            d="M1249,316.5a8,8,0,0,1-8,7.87h-71.37a7.88,7.88,0,1,1,0-15.75H1241a8,8,0,0,1,8,7.881Z"
            transform="translate(-341 -74)"
            fill="#ccc"
          />
          <path
            id="Path_98"
            data-name="Path 98"
            d="M1222.94,350.12a8,8,0,0,1-8,7.88h-45.31a7.88,7.88,0,1,1,0-15.75h45.31a8,8,0,0,1,8,7.871Z"
            transform="translate(-341 -74)"
            fill="#ccc"
          />
        </StyledCloud>
      </g>
    </svg>
  );
};

const EfficientSVG = ({ alt, id, className }) => {
  const { scrollOffset, windowInnerHeight, windowScrollY } = useAppContext();
  const ref = useRef();
  const distanceY =
    ref?.current?.getBoundingClientRect()?.top +
    windowScrollY -
    windowInnerHeight / 2;


  return (
    <svg ref={ref} id={id} className={className} viewBox="0 0 1231.63 867.83">
      <defs>
        <filter
          id="Rectangle_158"
          x="112.121"
          y="275.43"
          width="612.51"
          height="548.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="8" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="19" result="blur" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_67"
          x="512.13"
          y="679.13"
          width="188.7"
          height="188.7"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="16" result="blur-2" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_68"
          x="0"
          y="215.1"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-3" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_69"
          x="27.771"
          y="215.1"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-4" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_70"
          x="55.551"
          y="214.75"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-5" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-5" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_71"
          x="83.33"
          y="214.75"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-6" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-6" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_72"
          x="0"
          y="243.05"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-7" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-7" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_73"
          x="27.771"
          y="243.05"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-8" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-8" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_74"
          x="55.551"
          y="242.7"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-9" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-9" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_75"
          x="83.33"
          y="242.7"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-10" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-10" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_76"
          x="0"
          y="270.74"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-11" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-11" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_77"
          x="27.771"
          y="270.74"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-12" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-12" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_78"
          x="55.551"
          y="270.39"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-13" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-13" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_79"
          x="83.33"
          y="270.39"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-14" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-14" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_80"
          x="0"
          y="298.69"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-15" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-15" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_81"
          x="27.771"
          y="298.69"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-16" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-16" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_82"
          x="55.551"
          y="298.34"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-17" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-17" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_83"
          x="83.33"
          y="298.34"
          width="91.44"
          height="91.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="12" result="blur-18" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_84"
          x="1021.811"
          y="337.29"
          width="209.82"
          height="209.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="9" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9.5" result="blur-19" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-19" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_166"
          x="705.3"
          y="533.13"
          width="490"
          height="302"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="15" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="17" result="blur-20" />
          <feFlood floodOpacity="0.051" />
          <feComposite operator="in" in2="blur-20" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_163"
          x="108.67"
          y="0"
          width="363.06"
          height="330.25"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="-7" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="14.5" result="blur-21" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-21" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_171"
          x="398.23"
          y="265.75"
          width="382"
          height="372.36"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="24" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="19" result="blur-22" />
          <feFlood floodOpacity="0.122" />
          <feComposite operator="in" in2="blur-22" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_169"
          x="774.23"
          y="45.75"
          width="328"
          height="396"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="-9" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9" result="blur-23" />
          <feFlood floodOpacity="0.051" />
          <feComposite operator="in" in2="blur-23" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_161"
          x="59.49"
          y="493.25"
          width="392.24"
          height="305.79"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="19" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="9.5" result="blur-24" />
          <feFlood floodOpacity="0.051" />
          <feComposite operator="in" in2="blur-24" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Efficient" transform="translate(-24.77 -10.25)">
        <rect
          id="Rectangle_156"
          data-name="Rectangle 156"
          width="623"
          height="544.14"
          rx="20"
          transform="translate(517 120.43)"
          fill="#f15a24"
        />
        <g
          transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
          filter="url(#Rectangle_158)"
        >
          <rect
            id="Rectangle_158-2"
            data-name="Rectangle 158"
            width="498.51"
            height="434.82"
            rx="20"
            transform="translate(169.12 324.43)"
            fill="#eaf1f8"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
          filter="url(#Ellipse_67)"
        >
          <circle
            id="Ellipse_67-2"
            data-name="Ellipse 67"
            cx="46.35"
            cy="46.35"
            r="46.35"
            transform="translate(560.13 720.13)"
            fill="#3399fe"
          />
        </g>
        <path
          id="Path_60"
          data-name="Path 60"
          d="M608.08,675.81V561.51s-3.65-21.19,37.73-21.19H817.4"
          transform="translate(-327 -94)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_61"
          data-name="Path 61"
          d="M780,281.05H891.36S912,278.7,912,305.38V416"
          transform="translate(-327 -94)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g id="circles">
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_68)"
          >
            <circle
              id="Ellipse_68-2"
              data-name="Ellipse 68"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(36 251.1)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_69)"
          >
            <circle
              id="Ellipse_69-2"
              data-name="Ellipse 69"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(63.77 251.1)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_70)"
          >
            <circle
              id="Ellipse_70-2"
              data-name="Ellipse 70"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(91.55 250.75)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_71)"
          >
            <circle
              id="Ellipse_71-2"
              data-name="Ellipse 71"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(119.33 250.75)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_72)"
          >
            <circle
              id="Ellipse_72-2"
              data-name="Ellipse 72"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(36 279.05)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_73)"
          >
            <circle
              id="Ellipse_73-2"
              data-name="Ellipse 73"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(63.77 279.05)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_74)"
          >
            <circle
              id="Ellipse_74-2"
              data-name="Ellipse 74"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(91.55 278.7)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_75)"
          >
            <circle
              id="Ellipse_75-2"
              data-name="Ellipse 75"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(119.33 278.7)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_76)"
          >
            <circle
              id="Ellipse_76-2"
              data-name="Ellipse 76"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(36 306.74)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_77)"
          >
            <circle
              id="Ellipse_77-2"
              data-name="Ellipse 77"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(63.77 306.74)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_78)"
          >
            <circle
              id="Ellipse_78-2"
              data-name="Ellipse 78"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(91.55 306.39)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_79)"
          >
            <circle
              id="Ellipse_79-2"
              data-name="Ellipse 79"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(119.33 306.39)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_80)"
          >
            <circle
              id="Ellipse_80-2"
              data-name="Ellipse 80"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(36 334.69)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_81)"
          >
            <circle
              id="Ellipse_81-2"
              data-name="Ellipse 81"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(63.77 334.69)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_82)"
          >
            <circle
              id="Ellipse_82-2"
              data-name="Ellipse 82"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(91.55 334.34)"
              fill="#3399fe"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Ellipse_83)"
          >
            <circle
              id="Ellipse_83-2"
              data-name="Ellipse 83"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(119.33 334.34)"
              fill="#3399fe"
            />
          </g>
        </g>
        <path
          id="Path_62"
          data-name="Path 62"
          d="M1108,784H967.42s-26.06,2-26.06-21.3V666"
          transform="translate(-327 -94)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_63"
          data-name="Path 63"
          d="M976.07,436V344.07S973,327,1007.36,327H1149.7"
          transform="translate(-327 -94)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g
          transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
          filter="url(#Ellipse_84)"
        >
          <circle
            id="Ellipse_84-2"
            data-name="Ellipse 84"
            cx="76.41"
            cy="76.41"
            r="76.41"
            transform="translate(1050.31 356.79)"
            fill="#252939"
          />
        </g>
        <StyledCloud offset={scrollOffset} distanceY={distanceY} isSafari={isSafari} id="clouds">
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Rectangle_166)"
          >
            <rect
              id="Rectangle_166-2"
              data-name="Rectangle 166"
              width="388"
              height="200"
              rx="20"
              transform="translate(756.3 569.13)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_64"
            data-name="Path 64"
            d="M1387.29,834.14c20.77,0,37.61-16.46,37.61-36.76s-16.84-36.77-37.61-36.77c-1.15,0-2.27.06-3.39.16a15.636,15.636,0,0,0,1.35-6.37,16.29,16.29,0,0,0-16.47-16.1,16.727,16.727,0,0,0-8.127,2.108,48.14,48.14,0,0,0-44.593-29.328c-26.59,0-48.14,21.06-48.14,47v.79h-1.54c-21.52,0-39,17-39,38.09s17.45,38.25,39,38.09ZM1350.2,791.3"
            transform="translate(-327 -94)"
            fill="#252939"
          />
          <path
            id="Path_65"
            data-name="Path 65"
            d="M1326.69,836.14c20.77,0,37.61-16.46,37.61-36.76s-16.84-36.77-37.61-36.77c-1.14,0-2.27.06-3.39.16a15.638,15.638,0,0,0,1.35-6.37,16.28,16.28,0,0,0-16.46-16.1,16.74,16.74,0,0,0-8.14,2.11,48.14,48.14,0,0,0-44.59-29.33c-26.59,0-48.14,21.06-48.14,47v.79h-1.54c-21.52,0-39,17-39,38.09s17.45,38.25,39,38.09ZM1289.6,793.3"
            transform="translate(-327 -94)"
            fill="#eaf1f8"
          />
        </StyledCloud>
        <StyledLaptop id="gears" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Rectangle_163)"
          >
            <rect
              id="Rectangle_163-2"
              data-name="Rectangle 163"
              width="276.06"
              height="243.25"
              rx="20"
              transform="translate(152.17 50.5)"
              fill="#fff"
            />
          </g>
          <circle
            id="Ellipse_85"
            data-name="Ellipse 85"
            cx="50.36"
            cy="50.36"
            r="50.36"
            transform="translate(224.79 148.99)"
            fill="#252939"
            stroke="#252939"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <rect
            id="Rectangle_172"
            data-name="Rectangle 172"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(315.27 191.66)"
            fill="#252939"
          />
          <rect
            id="Rectangle_173"
            data-name="Rectangle 173"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(315.27 191.66)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_174"
            data-name="Rectangle 174"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(267.47 138.74)"
            fill="#252939"
          />
          <rect
            id="Rectangle_175"
            data-name="Rectangle 175"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(267.47 138.74)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_176"
            data-name="Rectangle 176"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(269.18 237.05)"
            fill="#252939"
          />
          <rect
            id="Rectangle_177"
            data-name="Rectangle 177"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(269.18 237.05)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_178"
            data-name="Rectangle 178"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(216.25 191.66)"
            fill="#252939"
          />
          <rect
            id="Rectangle_179"
            data-name="Rectangle 179"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(216.25 191.66)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_180"
            data-name="Rectangle 180"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(298.087 165.049) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_181"
            data-name="Rectangle 181"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(298.087 165.049) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_182"
            data-name="Rectangle 182"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(226.512 235.239) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_183"
            data-name="Rectangle 183"
            width="20.49"
            height="13.66"
            rx="2"
            transform="translate(226.512 235.239) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_184"
            data-name="Rectangle 184"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(226.513 162.128) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_185"
            data-name="Rectangle 185"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(226.513 162.128) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_186"
            data-name="Rectangle 186"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(296.512 232.121) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_187"
            data-name="Rectangle 187"
            width="13.66"
            height="20.49"
            rx="2"
            transform="translate(296.512 232.121) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_86"
            data-name="Ellipse 86"
            cx="24.75"
            cy="24.75"
            r="24.75"
            transform="translate(250.75 175.09)"
            fill="#fff"
          />
          <circle
            id="Ellipse_87"
            data-name="Ellipse 87"
            cx="34.75"
            cy="34.75"
            r="34.75"
            transform="translate(325.83 111.62)"
            fill="#252939"
            stroke="#252939"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <rect
            id="Rectangle_188"
            data-name="Rectangle 188"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(387.95 152.371) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_189"
            data-name="Rectangle 189"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(387.95 152.371) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_190"
            data-name="Rectangle 190"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(357.189 118.401) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_191"
            data-name="Rectangle 191"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(357.189 118.401) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_192"
            data-name="Rectangle 192"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(353.815 186.489) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_193"
            data-name="Rectangle 193"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(353.815 186.489) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_194"
            data-name="Rectangle 194"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(319.777 147.751) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_195"
            data-name="Rectangle 195"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(319.777 147.751) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_196"
            data-name="Rectangle 196"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(377.975 123.857) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_197"
            data-name="Rectangle 197"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(377.975 123.857) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_198"
            data-name="Rectangle 198"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(325.425 168.848) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_199"
            data-name="Rectangle 199"
            width="14.14"
            height="9.42"
            rx="1"
            transform="translate(325.425 168.848) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_200"
            data-name="Rectangle 200"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(328.84 118.503) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_201"
            data-name="Rectangle 201"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(328.84 118.503) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_202"
            data-name="Rectangle 202"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(373.755 169.96) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_203"
            data-name="Rectangle 203"
            width="9.42"
            height="14.14"
            rx="1"
            transform="translate(373.755 169.96) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_88"
            data-name="Ellipse 88"
            cx="17.07"
            cy="17.07"
            r="17.07"
            transform="translate(343.4 129.84)"
            fill="#fff"
          />
        </StyledLaptop>
        <StyledDatabase id="database" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Rectangle_171)"
          >
            <rect
              id="Rectangle_171-2"
              data-name="Rectangle 171"
              width="268"
              height="258.36"
              rx="20"
              transform="translate(455.23 298.75)"
              fill="#fff"
            />
          </g>
          <rect
            id="Rectangle_204"
            data-name="Rectangle 204"
            width="152.52"
            height="47.55"
            rx="6"
            transform="translate(538.09 361.1)"
            fill="#252939"
          />
          <rect
            id="Rectangle_205"
            data-name="Rectangle 205"
            width="152.52"
            height="47.55"
            rx="6"
            transform="translate(538.06 417.19)"
            fill="#252939"
          />
          <rect
            id="Rectangle_206"
            data-name="Rectangle 206"
            width="152.52"
            height="47.55"
            rx="6"
            transform="translate(538.06 473.45)"
            fill="#252939"
          />
          <circle
            id="Ellipse_89"
            data-name="Ellipse 89"
            cx="11.18"
            cy="11.18"
            r="11.18"
            transform="translate(547.58 374.09)"
            fill="#fff"
          />
          <circle
            id="Ellipse_90"
            data-name="Ellipse 90"
            cx="11.18"
            cy="11.18"
            r="11.18"
            transform="translate(547.58 429.47)"
            fill="#fff"
          />
          <circle
            id="Ellipse_91"
            data-name="Ellipse 91"
            cx="11.18"
            cy="11.18"
            r="11.18"
            transform="translate(547.58 486.94)"
            fill="#fff"
          />
        </StyledDatabase>
        <StyledLock offset={scrollOffset} distanceY={distanceY} isSafari={isSafari} id="lock">
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Rectangle_169)"
          >
            <rect
              id="Rectangle_169-2"
              data-name="Rectangle 169"
              width="274"
              height="342"
              rx="20"
              transform="translate(801.23 81.75)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_66"
            data-name="Path 66"
            d="M1324.92,285.89v.24c-2.27-.21-4.55-.24-6.83-.23h-10.14c-.07-7.16.3-14.32-.16-21.47-.64-10.06-9.38-18-19.6-18s-19.08,7.94-19.72,18c-.46,7.15-.09,14.31-.17,21.47-5.65.23-11.32-.2-17,.28v-.24c.06-7.25-.19-14.5.15-21.75a35.4,35.4,0,0,1,8.27-21.33A36.289,36.289,0,0,1,1281.39,230a9.33,9.33,0,0,0,3-.64h7.42c1.63.68,3.42.61,5.09,1.09q21.24,6,27,27.29a34.686,34.686,0,0,1,1,8.79C1325,273,1324.93,279.43,1324.92,285.89Z"
            transform="translate(-327 -94)"
            fill="#252939"
          />
          <path
            id="Path_67"
            data-name="Path 67"
            d="M1324.92,285.89h-2.73c-3.84,0-7.68,0-11.52-.06-.09-8.13.33-16.28-.19-24.41-.73-11.43-10.67-20.47-22.27-20.52s-21.7,9-22.43,20.52c-.52,8.13-.1,16.28-.19,24.41-4.75.19-9.5,0-14.26.08.06-7.25-.19-14.5.15-21.75a35.4,35.4,0,0,1,8.27-21.33A36.29,36.29,0,0,1,1281.39,230a9.33,9.33,0,0,0,3-.64h7.42c1.63.68,3.42.61,5.09,1.09q21.24,6,27,27.29a34.686,34.686,0,0,1,1,8.79C1325,273,1324.93,279.43,1324.92,285.89Z"
            transform="translate(-327 -94)"
            fill="#bdc4c6"
          />
          <path
            id="Path_68"
            data-name="Path 68"
            d="M1308.91,282.84c3.54,0,7.09.06,10.63.05a68.431,68.431,0,0,1,7.16.25,15.9,15.9,0,0,1,8.8,5.69,13.281,13.281,0,0,1,3,7.92c.1,5.89.06,11.77.07,17.66V350.7c0,7.4-4.46,13.17-11.37,14.87a16.07,16.07,0,0,1-3.85.43H1253c-8.72,0-15.18-6.32-15.21-15q-.09-26.55,0-53.1c0-7.14,4.4-12.64,11.31-14.51a5.445,5.445,0,0,0,.5-.22c5.92-.51,11.86-.06,17.79-.3.6,0,1.2.06,1.8.06h37.55C1307.43,282.9,1308.17,282.87,1308.91,282.84Z"
            transform="translate(-327 -94)"
            fill="#252939"
          />
          <path
            id="Path_69"
            data-name="Path 69"
            d="M1288,341.21h-3.58a2,2,0,0,1-2.17-2.51c.45-3.14.91-6.29,1.39-9.42a1.13,1.13,0,0,0-.62-1.33,9.774,9.774,0,1,1,10.22-.05,1.21,1.21,0,0,0-.67,1.46c.5,3.11.93,6.22,1.36,9.34a2,2,0,0,1-2.17,2.51C1290.55,341.23,1289.3,341.21,1288,341.21Z"
            transform="translate(-327 -94)"
            fill="#fff"
          />
          <rect
            id="Rectangle_214"
            data-name="Rectangle 214"
            width="149"
            height="15.38"
            rx="6"
            transform="translate(887 317)"
            fill="#b3b3b3"
          />
          <rect
            id="Rectangle_215"
            data-name="Rectangle 215"
            width="63"
            height="15.38"
            rx="6"
            transform="translate(931 372.63)"
            fill="#b3b3b3"
          />
          <circle
            id="Ellipse_92"
            data-name="Ellipse 92"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(899.7 343.37)"
            fill="#27c1bc"
          />
          <circle
            id="Ellipse_93"
            data-name="Ellipse 93"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(925.7 343.37)"
            fill="#27c1bc"
          />
          <circle
            id="Ellipse_94"
            data-name="Ellipse 94"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(952.7 343.37)"
            fill="#27c1bc"
          />
          <circle
            id="Ellipse_95"
            data-name="Ellipse 95"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(979.7 343.37)"
            fill="#27c1bc"
          />
          <circle
            id="Ellipse_96"
            data-name="Ellipse 96"
            cx="8.61"
            cy="8.61"
            r="8.61"
            transform="translate(1005.7 343.37)"
            fill="#27c1bc"
          />
        </StyledLock>
        <StyledProfile offset={scrollOffset} distanceY={distanceY} isSafari={isSafari} id="battery">
          <g
            transform="matrix(1, 0, 0, 1, 24.77, 10.25)"
            filter="url(#Rectangle_161)"
          >
            <rect
              id="Rectangle_161-2"
              data-name="Rectangle 161"
              width="335.24"
              height="248.79"
              rx="20"
              transform="translate(87.99 502.75)"
              fill="#fff"
            />
          </g>
          <g id="Group_18" data-name="Group 18">
            <g id="Group_17" data-name="Group 17">
              <rect
                id="Rectangle_207"
                data-name="Rectangle 207"
                width="15.19"
                height="39.36"
                rx="4"
                transform="translate(363.81 590.64)"
                fill="#252939"
              />
              <rect
                id="Rectangle_208"
                data-name="Rectangle 208"
                width="179.35"
                height="88.32"
                rx="8"
                transform="translate(186.06 566.68)"
                fill="none"
                stroke="#252939"
                strokeMiterlimit="10"
                strokeWidth="10"
              />
              <rect
                id="Rectangle_209"
                data-name="Rectangle 209"
                width="24.3"
                height="70"
                rx="4"
                transform="translate(195.2 576)"
                fill="#27c1bc"
              />
              <rect
                id="Rectangle_210"
                data-name="Rectangle 210"
                width="24.3"
                height="70"
                rx="4"
                transform="translate(225.03 576)"
                fill="#27c1bc"
              />
              <rect
                id="Rectangle_211"
                data-name="Rectangle 211"
                width="24.3"
                height="70"
                rx="4"
                transform="translate(254.86 576)"
                fill="#27c1bc"
              />
              <rect
                id="Rectangle_212"
                data-name="Rectangle 212"
                width="24.3"
                height="70"
                rx="4"
                transform="translate(284.7 576)"
                fill="#27c1bc"
              />
              <rect
                id="Rectangle_213"
                data-name="Rectangle 213"
                width="24.3"
                height="70"
                rx="4"
                transform="translate(314.7 576)"
                fill="#27c1bc"
              />
            </g>
            <path
              id="Path_70"
              data-name="Path 70"
              d="M662.49,810.7a6,6,0,0,1-6,6h-137a6,6,0,0,1-6-6h0a6,6,0,0,1,6-6h137A6,6,0,0,1,662.49,810.7Z"
              transform="translate(-327 -94)"
              fill="#b3b3b3"
            />
            <path
              id="Path_71"
              data-name="Path 71"
              d="M588,789.7a6,6,0,0,1-6,6H519.5a6,6,0,0,1-6-6h0a6,6,0,0,1,6-6H582A6,6,0,0,1,588,789.7Z"
              transform="translate(-327 -94)"
              fill="#f15a24"
            />
          </g>
        </StyledProfile>
      </g>
    </svg>
  );
};

const CostEffectiveSVG = ({ alt, id, className }) => {
  const { scrollOffset, windowInnerHeight, windowScrollY } = useAppContext();
  const ref = useRef();
  const distanceY =
    ref?.current?.getBoundingClientRect()?.top +
    windowScrollY -
    windowInnerHeight / 2;


  return (
    <svg ref={ref} id={id} className={className} viewBox="0 0 1224.141 873.52">
      <defs>
        <filter
          id="big-bg"
          x="45.54"
          y="196.98"
          width="740"
          height="661.14"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="9" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="19.5" result="blur" />
          <feFlood floodOpacity="0.149" />
          <feComposite operator="in" in2="blur" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="small-bg"
          x="546.03"
          y="104.74"
          width="591.51"
          height="527.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="24" dy="4" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="15.5" result="blur-2" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-2" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="circle-sm"
          x="480.64"
          y="696.82"
          width="176.7"
          height="176.7"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="14" result="blur-3" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-3" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_43"
          x="0"
          y="306.29"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-4" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-4" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_44"
          x="27.78"
          y="306.29"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-5" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-5" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_45"
          x="55.56"
          y="305.94"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-6" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-6" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_46"
          x="83.33"
          y="305.94"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-7" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-7" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_47"
          x="0"
          y="334.24"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-8" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-8" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_48"
          x="27.78"
          y="334.24"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-9" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-9" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_49"
          x="55.56"
          y="333.89"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-10" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-10" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_50"
          x="83.33"
          y="333.89"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-11" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-11" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_51"
          x="0"
          y="361.93"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-12" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-12" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_52"
          x="27.78"
          y="361.93"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-13" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-13" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_53"
          x="55.56"
          y="361.58"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-14" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-14" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_54"
          x="83.33"
          y="361.58"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-15" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-15" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_55"
          x="0"
          y="389.88"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-16" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-16" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_56"
          x="27.78"
          y="389.88"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-17" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-17" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_57"
          x="55.56"
          y="389.53"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-18" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-18" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Ellipse_58"
          x="83.33"
          y="389.53"
          width="82.44"
          height="82.44"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="10.5" result="blur-19" />
          <feFlood floodOpacity="0.078" />
          <feComposite operator="in" in2="blur-19" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="circle-lg"
          x="966.32"
          y="321.98"
          width="257.82"
          height="257.82"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dx="6" dy="2" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="17.5" result="blur-20" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-20" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_104"
          x="343.74"
          y="275.47"
          width="456.3"
          height="376.95"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="19" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="23" result="blur-21" />
          <feFlood floodOpacity="0.122" />
          <feComposite operator="in" in2="blur-21" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_98"
          x="51.54"
          y="0"
          width="418.93"
          height="386.61"
          filterUnits="userSpaceOnUse"
        >
          <feOffset input="SourceAlpha" />
          <feGaussianBlur stdDeviation="24.5" result="blur-22" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-22" />
          <feComposite in="SourceGraphic" />
        </filter>
        <filter
          id="Rectangle_122"
          x="729.53"
          y="493.02"
          width="363.06"
          height="330.25"
          filterUnits="userSpaceOnUse"
        >
          <feOffset dy="3" input="SourceAlpha" />
          <feGaussianBlur stdDeviation="14.5" result="blur-23" />
          <feFlood floodOpacity="0.102" />
          <feComposite operator="in" in2="blur-23" />
          <feComposite in="SourceGraphic" />
        </filter>
      </defs>
      <g id="Cost-Effective" transform="translate(-28.96 13.42)">
        <g transform="matrix(1, 0, 0, 1, 28.96, -13.42)" filter="url(#big-bg)">
          <rect
            id="big-bg-2"
            data-name="big-bg"
            width="623"
            height="544.14"
            rx="20"
            transform="translate(104.04 246.48)"
            fill="#eaf1f8"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
          filter="url(#small-bg)"
        >
          <rect
            id="small-bg-2"
            data-name="small-bg"
            width="498.51"
            height="434.82"
            rx="20"
            transform="translate(568.53 147.24)"
            fill="#3399fe"
          />
        </g>
        <g
          transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
          filter="url(#circle-sm)"
        >
          <circle
            id="circle-sm-2"
            data-name="circle-sm"
            cx="46.35"
            cy="46.35"
            r="46.35"
            transform="translate(522.64 735.82)"
            fill="#f15a24"
          />
        </g>
        <path
          id="Path_50"
          data-name="Path 50"
          d="M605.78,674.83V560.53s-3.65-21.19,37.73-21.19H815.09"
          transform="translate(-358 -101)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_51"
          data-name="Path 51"
          d="M777.7,275.08h126s23.36-2.51,23.36,25.95V419"
          transform="translate(-358 -101)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g id="circles">
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_43)"
          >
            <circle
              id="Ellipse_43-2"
              data-name="Ellipse 43"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(31.5 337.79)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_44)"
          >
            <circle
              id="Ellipse_44-2"
              data-name="Ellipse 44"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(59.28 337.79)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_45)"
          >
            <circle
              id="Ellipse_45-2"
              data-name="Ellipse 45"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(87.06 337.44)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_46)"
          >
            <circle
              id="Ellipse_46-2"
              data-name="Ellipse 46"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(114.83 337.44)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_47)"
          >
            <circle
              id="Ellipse_47-2"
              data-name="Ellipse 47"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(31.5 365.74)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_48)"
          >
            <circle
              id="Ellipse_48-2"
              data-name="Ellipse 48"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(59.28 365.74)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_49)"
          >
            <circle
              id="Ellipse_49-2"
              data-name="Ellipse 49"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(87.06 365.39)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_50)"
          >
            <circle
              id="Ellipse_50-2"
              data-name="Ellipse 50"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(114.83 365.39)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_51)"
          >
            <circle
              id="Ellipse_51-2"
              data-name="Ellipse 51"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(31.5 393.43)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_52)"
          >
            <circle
              id="Ellipse_52-2"
              data-name="Ellipse 52"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(59.28 393.43)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_53)"
          >
            <circle
              id="Ellipse_53-2"
              data-name="Ellipse 53"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(87.06 393.08)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_54)"
          >
            <circle
              id="Ellipse_54-2"
              data-name="Ellipse 54"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(114.83 393.08)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_55)"
          >
            <circle
              id="Ellipse_55-2"
              data-name="Ellipse 55"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(31.5 421.38)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_56)"
          >
            <circle
              id="Ellipse_56-2"
              data-name="Ellipse 56"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(59.28 421.38)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_57)"
          >
            <circle
              id="Ellipse_57-2"
              data-name="Ellipse 57"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(87.06 421.03)"
              fill="#27c1bc"
            />
          </g>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Ellipse_58)"
          >
            <circle
              id="Ellipse_58-2"
              data-name="Ellipse 58"
              cx="9.72"
              cy="9.72"
              r="9.72"
              transform="translate(114.83 421.03)"
              fill="#27c1bc"
            />
          </g>
        </g>
        <path
          id="Path_52"
          data-name="Path 52"
          d="M1170.06,783H975.18s-36.12,2.06-36.12-21.25V665"
          transform="translate(-358 -101)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <path
          id="Path_53"
          data-name="Path 53"
          d="M1317.92,419V519.42s3.55,18.62-36.68,18.62H1114.4"
          transform="translate(-358 -101)"
          fill="none"
          stroke="#ccc"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="5"
          strokeDasharray="12 16"
        />
        <g
          transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
          filter="url(#circle-lg)"
        >
          <circle
            id="circle-lg-2"
            data-name="circle-lg"
            cx="76.41"
            cy="76.41"
            r="76.41"
            transform="translate(1012.82 372.48)"
            fill="#f15a24"
          />
        </g>
        <StyledCloud id="clouds" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <rect
            id="Rectangle_101"
            data-name="Rectangle 101"
            width="363"
            height="221"
            rx="20"
            transform="translate(787 97)"
            fill="#fff"
          />
          <path
            id="Path_54"
            data-name="Path 54"
            d="M1415.22,371.76c20.77,0,37.61-16.46,37.61-36.77s-16.84-36.76-37.61-36.76c-1.14,0-2.27.06-3.38.15a15.732,15.732,0,0,0,1.34-6.37,16.28,16.28,0,0,0-16.46-16.09,16.62,16.62,0,0,0-8.13,2.11,48.17,48.17,0,0,0-44.6-29.34c-26.58,0-48.13,21.07-48.13,47.06v.78h-1.55c-21.52,0-39,17.06-39,38.1s17.45,38.25,39,38.09Zm-37.09-42.85"
            transform="translate(-358 -101)"
            fill="#252939"
          />
          <path
            id="Path_55"
            data-name="Path 55"
            d="M1354.62,373.76c20.77,0,37.61-16.46,37.61-36.77s-16.84-36.76-37.61-36.76c-1.14,0-2.27.06-3.38.15a15.732,15.732,0,0,0,1.34-6.37,16.28,16.28,0,0,0-16.46-16.09A16.619,16.619,0,0,0,1328,280a48.17,48.17,0,0,0-44.6-29.34c-26.58,0-48.13,21.07-48.13,47.06v.78h-1.55c-21.52,0-39,17.06-39,38.1s17.45,38.25,39,38.09Zm-37.09-42.85"
            transform="translate(-358 -101)"
            fill="#eaf1f8"
          />
        </StyledCloud>
        <StyledLaptop id="card" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Rectangle_104)"
          >
            <rect
              id="Rectangle_104-2"
              data-name="Rectangle 104"
              width="318.3"
              height="238.95"
              rx="20"
              transform="translate(412.74 325.47)"
              fill="#fff"
            />
          </g>
          <g id="Group_15" data-name="Group 15">
            <path
              id="Path_56"
              data-name="Path 56"
              d="M1077,470.71V597.49a10.33,10.33,0,0,1-10.33,10.32H851.37a10.33,10.33,0,0,1-10.32-10.33V470.7a10.32,10.32,0,0,1,10.32-10.32h215.3A10.33,10.33,0,0,1,1077,470.71Z"
              transform="translate(-358 -101)"
              fill="#252939"
            />
            <rect
              id="Rectangle_106"
              data-name="Rectangle 106"
              width="235.95"
              height="28.1"
              transform="translate(483.05 385.45)"
              fill="#e6e6e6"
            />
            <rect
              id="Rectangle_107"
              data-name="Rectangle 107"
              width="235.95"
              height="5.39"
              transform="translate(483.05 370.56)"
              fill="#e6e6e6"
            />
            <g id="Group_14" data-name="Group 14">
              <rect
                id="Rectangle_108"
                data-name="Rectangle 108"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(497 473)"
                fill="#e6e6e6"
              />
              <rect
                id="Rectangle_109"
                data-name="Rectangle 109"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(497 473)"
                fill="none"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
            <g id="Group_13" data-name="Group 13">
              <rect
                id="Rectangle_110"
                data-name="Rectangle 110"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(513.24 473)"
                fill="#e6e6e6"
              />
              <rect
                id="Rectangle_111"
                data-name="Rectangle 111"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(513.24 473)"
                fill="none"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
            <g id="Group_12" data-name="Group 12">
              <rect
                id="Rectangle_112"
                data-name="Rectangle 112"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(529.49 473)"
                fill="#e6e6e6"
              />
              <rect
                id="Rectangle_113"
                data-name="Rectangle 113"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(529.49 473)"
                fill="none"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
            <g id="Group_11" data-name="Group 11">
              <rect
                id="Rectangle_114"
                data-name="Rectangle 114"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(545.73 473)"
                fill="#e6e6e6"
              />
              <rect
                id="Rectangle_115"
                data-name="Rectangle 115"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(545.73 473)"
                fill="none"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
            <g id="Group_10" data-name="Group 10">
              <rect
                id="Rectangle_116"
                data-name="Rectangle 116"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(561.98 473)"
                fill="#e6e6e6"
              />
              <rect
                id="Rectangle_117"
                data-name="Rectangle 117"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(561.98 473)"
                fill="none"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
            <g id="Group_9" data-name="Group 9">
              <rect
                id="Rectangle_118"
                data-name="Rectangle 118"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(578.22 473)"
                fill="#e6e6e6"
              />
              <rect
                id="Rectangle_119"
                data-name="Rectangle 119"
                width="9.48"
                height="18.5"
                rx="2"
                transform="translate(578.22 473)"
                fill="none"
                stroke="#e6e6e6"
                strokeMiterlimit="10"
                strokeWidth="1"
              />
            </g>
          </g>
        </StyledLaptop>
        <StyledDatabase id="arrow-box" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <rect
            id="Rectangle_96"
            data-name="Rectangle 96"
            width="335.24"
            height="248.79"
            rx="20"
            transform="translate(79.46 505.02)"
            fill="#fff"
          />
          <rect
            id="Rectangle_105"
            data-name="Rectangle 105"
            width="195.56"
            height="160"
            rx="8"
            transform="translate(165 540)"
            fill="none"
            stroke="#252939"
            strokeLinecap="round"
            strokeMiterlimit="10"
            strokeWidth="6"
            strokeDasharray="8 18"
          />
          <rect
            id="Rectangle_120"
            data-name="Rectangle 120"
            width="134"
            height="111"
            rx="8"
            transform="translate(133 610)"
            fill="#f15a24"
          />
          <g id="Group_16" data-name="Group 16">
            <line
              id="Line_69"
              data-name="Line 69"
              y1="22.45"
              x2="26.42"
              transform="translate(263.93 591.39)"
              fill="none"
              stroke="#f15a24"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="6"
            />
            <line
              id="Line_70"
              data-name="Line 70"
              x1="1.09"
              y2="13.42"
              transform="translate(291.9 589.15)"
              fill="none"
              stroke="#f15a24"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
            <line
              id="Line_71"
              data-name="Line 71"
              x2="14.17"
              y2="1.15"
              transform="translate(278.82 588)"
              fill="none"
              stroke="#f15a24"
              strokeLinecap="round"
              strokeMiterlimit="10"
              strokeWidth="5"
            />
          </g>
        </StyledDatabase>
        <StyledProfile id="profiles" offset={scrollOffset} distanceY={distanceY} isSafari={isSafari}>
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Rectangle_98)"
          >
            <rect
              id="Rectangle_98-2"
              data-name="Rectangle 98"
              width="271.93"
              height="239.61"
              rx="20"
              transform="translate(125.04 73.5)"
              fill="#fff"
            />
          </g>
          <path
            id="Path_57"
            data-name="Path 57"
            d="M656.81,325.62c0-38.25,18.48-69.26,41.28-69.26s41.29,31,41.29,69.26"
            transform="translate(-358 -101)"
            fill="#252939"
          />
          <circle
            id="Ellipse_60"
            data-name="Ellipse 60"
            cx="22.23"
            cy="22.23"
            r="22.23"
            transform="translate(317.86 106.57)"
            fill="#252939"
          />
          <path
            id="Path_58"
            data-name="Path 58"
            d="M560.13,318c0-32.55,15.73-58.93,35.12-58.93s35.12,26.38,35.12,58.93"
            transform="translate(-358 -101)"
            fill="#252939"
          />
          <circle
            id="Ellipse_61"
            data-name="Ellipse 61"
            cx="18.91"
            cy="18.91"
            r="18.91"
            transform="translate(218.34 116.35)"
            fill="#252939"
          />
          <path
            id="Path_59"
            data-name="Path 59"
            d="M602,348.46C602,309,621.07,277,644.6,277s42.59,32,42.59,71.46"
            transform="translate(-358 -101)"
            fill="#252939"
            stroke="#fff"
            strokeMiterlimit="10"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_62"
            data-name="Ellipse 62"
            cx="22.93"
            cy="22.93"
            r="22.93"
            transform="translate(263.67 123.44)"
            fill="#252939"
          />
        </StyledProfile>
        <StyledLock offset={scrollOffset} distanceY={distanceY} isSafari={isSafari} id="gears">
          <g
            transform="matrix(1, 0, 0, 1, 28.96, -13.42)"
            filter="url(#Rectangle_122)"
          >
            <rect
              id="Rectangle_122-2"
              data-name="Rectangle 122"
              width="276.06"
              height="243.25"
              rx="20"
              transform="translate(773.03 533.52)"
              fill="#fff"
            />
          </g>
          <circle
            id="Ellipse_63"
            data-name="Ellipse 63"
            cx="53.14"
            cy="53.14"
            r="53.14"
            transform="translate(850.31 610.8)"
            fill="#252939"
            stroke="#252939"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <rect
            id="Rectangle_123"
            data-name="Rectangle 123"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(945.79 655.84)"
            fill="#252939"
          />
          <rect
            id="Rectangle_124"
            data-name="Rectangle 124"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(945.79 655.84)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_125"
            data-name="Rectangle 125"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(895.34 599.99)"
            fill="#252939"
          />
          <rect
            id="Rectangle_126"
            data-name="Rectangle 126"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(895.34 599.99)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_127"
            data-name="Rectangle 127"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(897.15 703.73)"
            fill="#252939"
          />
          <rect
            id="Rectangle_128"
            data-name="Rectangle 128"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(897.15 703.73)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_129"
            data-name="Rectangle 129"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(841.3 655.84)"
            fill="#252939"
          />
          <rect
            id="Rectangle_130"
            data-name="Rectangle 130"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(841.3 655.84)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_131"
            data-name="Rectangle 131"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(927.652 627.766) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_132"
            data-name="Rectangle 132"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(927.652 627.766) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_133"
            data-name="Rectangle 133"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(852.131 701.825) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_134"
            data-name="Rectangle 134"
            width="21.62"
            height="14.41"
            rx="2"
            transform="translate(852.131 701.825) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_135"
            data-name="Rectangle 135"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(852.133 624.663) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_136"
            data-name="Rectangle 136"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(852.133 624.663) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_137"
            data-name="Rectangle 137"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(925.997 698.532) rotate(-45)"
            fill="#252939"
          />
          <rect
            id="Rectangle_138"
            data-name="Rectangle 138"
            width="14.41"
            height="21.62"
            rx="2"
            transform="translate(925.997 698.532) rotate(-45)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_64"
            data-name="Ellipse 64"
            cx="26.12"
            cy="26.12"
            r="26.12"
            transform="translate(877.69 638.35)"
            fill="#fff"
          />
          <circle
            id="Ellipse_65"
            data-name="Ellipse 65"
            cx="36.67"
            cy="36.67"
            r="36.67"
            transform="translate(956.92 571.38)"
            fill="#252939"
            stroke="#252939"
            strokeMiterlimit="10"
            strokeWidth="1"
          />
          <rect
            id="Rectangle_139"
            data-name="Rectangle 139"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(1022.504 614.4) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_140"
            data-name="Rectangle 140"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(1022.504 614.4) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_141"
            data-name="Rectangle 141"
            width="14.92"
            height="9.94"
            rx="1"
            transform="translate(990.045 578.558) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_142"
            data-name="Rectangle 142"
            width="14.92"
            height="9.94"
            rx="1"
            transform="translate(990.045 578.558) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_143"
            data-name="Rectangle 143"
            width="14.957"
            height="9.964"
            rx="1.002"
            transform="translate(991.311 649.04) rotate(-85.996)"
            fill="#252939"
          />
          <rect
            id="Rectangle_144"
            data-name="Rectangle 144"
            width="14.957"
            height="9.964"
            rx="1.002"
            transform="translate(991.311 649.04) rotate(-85.996)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2.005"
          />
          <rect
            id="Rectangle_145"
            data-name="Rectangle 145"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(950.566 609.525) rotate(-86.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_146"
            data-name="Rectangle 146"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(950.566 609.525) rotate(-86.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_147"
            data-name="Rectangle 147"
            width="14.92"
            height="9.94"
            rx="1"
            transform="translate(1011.947 584.311) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_148"
            data-name="Rectangle 148"
            width="14.92"
            height="9.94"
            rx="1"
            transform="translate(1011.947 584.311) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_149"
            data-name="Rectangle 149"
            width="14.92"
            height="9.94"
            rx="1"
            transform="translate(956.493 631.788) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_150"
            data-name="Rectangle 150"
            width="14.92"
            height="9.94"
            rx="1"
            transform="translate(956.493 631.788) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_151"
            data-name="Rectangle 151"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(960.09 578.669) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_152"
            data-name="Rectangle 152"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(960.09 578.669) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <rect
            id="Rectangle_153"
            data-name="Rectangle 153"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(1007.505 632.966) rotate(-41.12)"
            fill="#252939"
          />
          <rect
            id="Rectangle_154"
            data-name="Rectangle 154"
            width="9.94"
            height="14.92"
            rx="1"
            transform="translate(1007.505 632.966) rotate(-41.12)"
            fill="none"
            stroke="#252939"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <circle
            id="Ellipse_66"
            data-name="Ellipse 66"
            cx="18.02"
            cy="18.02"
            r="18.02"
            transform="translate(975.46 590.6)"
            fill="#fff"
          />
        </StyledLock>
      </g>
    </svg>
  );
};

export { SecureSVG, StreamlinedSVG, EfficientSVG, CostEffectiveSVG };
