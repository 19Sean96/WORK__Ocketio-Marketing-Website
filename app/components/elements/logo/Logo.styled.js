import styled from "styled-components";
import Logo from "/public/ocketio-logo.svg";

export default styled(Logo)`
	path {
		fill: ${({ $fill }) => $fill};
	}
`;
