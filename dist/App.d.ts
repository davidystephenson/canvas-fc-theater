import { CanvasFcProps } from 'canvas-fc';

declare type TheaterProps = CanvasFcProps & {
    width: number;
    height: number;
};
declare function CanvasFcTheater(props: TheaterProps): JSX.Element;

export { CanvasFcTheater as default };
