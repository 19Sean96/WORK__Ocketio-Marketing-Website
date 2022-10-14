import EfficientImg from "@images/homepage/body/graphic-efficient.svg";
import styled from "styled-components";

export default styled(EfficientImg)`
overflow: visible;

#server-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
                : `translate(0,0)`};
}
#lock-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
                : `translate(0,0)`};
}
#cloud-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
                : `translate(0,0)`};
}
#battery-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
                : `translate(0,0)`};
}
#gear-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
                : `translate(0,0)`};
}
`;