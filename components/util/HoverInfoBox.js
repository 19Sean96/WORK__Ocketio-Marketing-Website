import styled from 'styled-components'

import { useAppContext } from '../../Context'
const HoverInfoBox = ({ title, message, visible }) => {

    const { mousePositionPixels } = useAppContext()

    return (
        <StyledHoverInfoBox className="info-box" mousePos={mousePositionPixels} visible={visible}>
            <h6 className="h6 capitalize">{title}</h6>
            <p className="p-small">{message}</p>
        </StyledHoverInfoBox>
    )
}

const StyledHoverInfoBox = styled.aside`
    transform: translate(calc(${props => props.mousePos[0]}px - 50%), calc(${props => props.mousePos[1]}px - 100% - 60px));
    opacity: ${props => props.visible ? 1 : 0};
    // max-height: ${props => props.visible ? '500px' : '0px'};
    // transition: .15s opacity ease-in, .5s max-height ease-out;
`

export default HoverInfoBox