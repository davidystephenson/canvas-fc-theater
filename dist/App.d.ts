import { CanvasFcProps } from 'canvas-fc';

declare type TheaterProps = CanvasFcProps & {
    width: number;
    height: number;
};
declare function App(props: TheaterProps): JSX.Element;

export { App as default };
