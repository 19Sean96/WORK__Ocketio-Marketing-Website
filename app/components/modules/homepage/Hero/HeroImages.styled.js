import styled from "styled-components";

export default styled.div`

  #heroImageMain {
    transform-origin: bottom left;
    transform: scale(1)
      ${(props) => ` translate3d(0, calc(0px - ${props.offset / -20 + -0.4}px), 0)`};
  }

  #heroImageSub {
    top: 40%;
    left: 20%;
    transform-origin: top;
    width: 46vw;
    max-width: 666px;
    transform: scale(1)
      ${(props) => ` translate3d(0, calc(0px - ${props.offset / -15 + -0.4}px), 0)`};
  }

  @media screen and (max-width: 1200px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -25 + -31}px), 0)`};
    }

    #heroImageSub {
      top: 50%;
      left: 18%;
      transform: scale(.95)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -20 + -22}px), 0)`};
    }
  }

  @media screen and (max-width: 1100px) {
    #heroImageMain {
      transform: scale(1)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -30 + -31}px), 0)`};
    }
    #heroImageSub {
      top: 72%;
      left: 33%;
      transform: scale(1.45)
        ${(props) => ` translate3d(0, calc(0px - ${props.offset / -25 + -22}px), 0)`};
    }
  }

  @media screen and (max-width: 850px) {
    #heroImageMain {
      transform: scale(1.2)
        ${(props) => ` translate3d(-10%, calc(50px - ${props.offset / -35 - 35}px), 0)`};
    }

    #heroImageSub {
      top: 58%;
      left: 32%;
      transform: scale(1.65)
        ${(props) => ` translate3d(0, calc(-12% - ${props.offset / -30 - 46}px), 0)`};
    }
  }

  @media screen and (max-width: 575px) {
    #heroImageMain {
      transform: scale(1.1)
        ${(props) => ` translate3d(-7%, calc(50px - ${props.offset / -40 - 35}px), 0)`};
    }

    #heroImageSub {
      top: 65%;
      left: 35%;
      transform: scale(1.75)
        ${(props) => ` translate3d(0, calc(-12% - ${props.offset / -35 - 46}px), 0)`};
    }
  }
`;