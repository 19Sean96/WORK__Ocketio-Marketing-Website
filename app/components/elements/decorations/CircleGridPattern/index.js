import StyledCircleGrid from './styled'

export default ({ styles, uniqueClass }) => {
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
