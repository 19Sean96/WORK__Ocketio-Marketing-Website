import styled from "styled-components";

export default styled.div`

  #heroImageMain {
    transform-origin: bottom left;
    transform: scale(1)
      ${(props) => ` translate3d(0, ${.4 + props.offset / 20}px, 0)`};
  }

  #heroImageSub {
    top: 40%;
    left: 20%;
    transform-origin: top;
    width: 46vw;
    max-width: 666px;
    transform: scale(1)
      ${(props) => ` translate3d(0, ${.4 + props.offset / 15}px, 0)`};
  }

  @media screen and (max-width: 1200px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate3d(0, ${31 + props.offset / 25}px, 0)`};
    }

    #heroImageSub {
      top: 50%;
      left: 18%;
      transform: scale(.95)
        ${(props) => ` translate3d(0, ${22 + props.offset / 20}px, 0)`};
    }
  }

  @media screen and (max-width: 1100px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate3d(0, ${31 + props.offset / 30}px, 0)`};
    }
    #heroImageSub {
      top: 72%;
      left: 33%;
      transform: scale(1.45)
        ${(props) => ` translate3d(0, ${22 + props.offset / 25}px, 0)`};
    }
  }

  @media screen and (max-width: 850px) {
    #heroImageMain {
      transform: scale(1.2)
        ${(props) => ` translate3d(-10%, ${85 + props.offset / 35}px, 0)`};
    }

    #heroImageSub {
      top: 58%;
      left: 32%;
      transform: scale(1.65)
        ${(props) => ` translate3d(0, calc(${46 + props.offset / 30}px - 12%), 0)`};
    }
  }

  @media screen and (max-width: 575px) {
    #heroImageMain {
      transform: scale(1.35)
        ${(props) => ` translate3d(-15%, ${85 + props.offset / 40}px, 0)`};
    }

    #heroImageSub {
      top: 65%;
      left: 35%;
      transform: scale(1.85)
        ${(props) => ` translate3d(0, calc(${props.offset / 35 + 28}px - 15%), 0)`};
    }
  }
`;