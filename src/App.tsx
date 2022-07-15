import React from 'react'
import { CanvasFcProps } from 'canvas-fc'

import Canvas from './Canvas'
import GlobalStyle from './Global'

type TheaterProps = CanvasFcProps & {
  width: number
  height: number
}

export default function CanvasFcTheater (props: TheaterProps): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Canvas {...props} />
    </>
  )
}
