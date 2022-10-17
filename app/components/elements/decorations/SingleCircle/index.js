import StyledSingleCircle from './styled'

export default ({ styles, withRing, uniqueClass }) => (
	<StyledSingleCircle
		className={"decor decor--single-circle " + uniqueClass ? uniqueClass : ''}
		styles={styles}
		withRing={withRing}></StyledSingleCircle>
);