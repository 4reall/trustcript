export interface RippleContainerProps {
    duration: number
    color: string
}

export interface UseDebouncedRippleCleanUpProps extends RippleContainerProps {
    cleanUpFunction: () => void
}

export interface RippleProps {
    duration: number
    color: string
}

export interface RippleItemProps {
    x: number
    y: number
    size: number
}