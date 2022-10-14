import styled from "styled-components";
import Logo from "/public/ocketio-logo.svg";

export default styled(Logo)`
	path {
		fill: ${({ darkMode, menuOpenOnMobile }) =>
			darkMode || menuOpenOnMobile ? "#f5f5f5" : "#101010"};
	}
`;