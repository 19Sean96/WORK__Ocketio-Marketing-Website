import styled from "styled-components";
export default styled.div`
	position: ${(props) => (props.mobileAndMenuOpen ? "fixed" : "relative")};
	background-color: ${(props) =>
		props.headerDarkMode ? "#101010" : "transparent"};
`;
