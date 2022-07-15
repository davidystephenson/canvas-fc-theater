import styled, { css } from 'styled-components'
import CanvasFc from 'canvas-fc'

interface CanvasStyleProps {
  width: number
  height: number
}

const CanvasStyle = styled(CanvasFc)<CanvasStyleProps>`
  background: white;
  margin: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  ${(props) => {
    const widthOverHeight = (props.width / props.height) * 100
    const heightOverWidth = (props.height / props.width) * 100

    if (props.width > props.height) {
      return css`
        height: ${heightOverWidth}vw;
        max-height: ${100}vh;
        max-width: ${widthOverHeight}vh;
        width: ${100}vw;
      `
    } else {
      return css`
        height: ${100}vw;
        max-height: ${heightOverWidth}vh;
        max-width: ${100}vh;
        width: ${widthOverHeight}vw;
      `
    }
  }}
`

export default CanvasStyle
