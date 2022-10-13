import styled from "styled-components";

const StyledCircleGrid = styled.div`
	height: 350px;
	width: 350px;
	position: absolute;
	left: ${({ styles }) => styles?.left || 'unset'};
	top: ${({ styles }) => styles?.top || 'unset'};
	z-index: ${({ styles }) => styles?.zIndex || 1};
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	grid-template-rows: repeat(8, 1fr);
    transform: ${({ styles }) => styles?.transform || 'translate(0,0)'};
	gap: 18px;
	.circle {
		width: 28px;
		height: 28px;
		background-color: ${({ styles }) => styles?.backgroundColor || '#f5f5f5'};
		border-radius: 50%;
	}
`;

const CircleGridPattern = ({ styles, uniqueClass }) => {
	console.log(styles);
	const arr = Array.from(Array(64).keys());
	return (
		<StyledCircleGrid className={`decor decor--circle-grid ${uniqueClass}`} styles={styles}>
			{arr.map((_, j) => {
				return <div className={`circle`}></div>;
			})}
		</StyledCircleGrid>
	);
};

export default CircleGridPattern;
