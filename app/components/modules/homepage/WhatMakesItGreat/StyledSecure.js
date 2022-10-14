import SecureImg from "@images/homepage/body/graphic-secure.svg";
import styled from "styled-components";

export default styled(SecureImg)`
overflow: visible;

#lock-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / 68}px))`
                : `translate(0,0)`};
}
#profile-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / -34}px))`
                : `translate(0,0)`};
}
#server-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / -75}px))`
                : `translate(0,0)`};
}
#cloud-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / -48}px))`
                : `translate(0,0)`};
}
#laptop-card {
    transform: scale(1)
        ${(props) =>
            props.offset > 0
                ? `translate(0, calc(${(props.offset - props.distanceY) / 75}px))`
                : `translate(0,0)`};
}
`;