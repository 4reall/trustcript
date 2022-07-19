import React, { useState, useLayoutEffect, MouseEvent } from 'react';
import { RippleContainer } from './Ripple.styled';
import { useDebouncedRippleCleanUp } from './useDebouncedRippleCleanUp';

export interface RippleProps {
	duration: number;
	color: string;
}

export interface RippleItemProps {
	x: number;
	y: number;
	size: number;
}

const Ripple = ({ duration, color }: RippleProps) => {
	const [rippleArray, setRippleArray] = useState<RippleItemProps[]>([]);

	useDebouncedRippleCleanUp(rippleArray.length, duration, () => {
		setRippleArray([]);
	});

	const addRipple = (event: MouseEvent) => {
		const rippleContainer = event.currentTarget.getBoundingClientRect();
		const size =
			rippleContainer.width > rippleContainer.height
				? rippleContainer.width
				: rippleContainer.height;
		const x = event.pageX - rippleContainer.x - size / 2;
		const y = event.pageY - rippleContainer.y - size / 2;
		const newRipple = {
			x,
			y,
			size,
		};

		setRippleArray([...rippleArray, newRipple]);
	};

	return (
		<RippleContainer
			duration={duration}
			color={color}
			onMouseDown={addRipple}
		>
			{rippleArray.length > 0 &&
				rippleArray.map((ripple, index) => {
					return (
						<span
							key={'span' + index}
							style={{
								top: ripple.y,
								left: ripple.x,
								width: ripple.size,
								height: ripple.size,
							}}
						/>
					);
				})}
		</RippleContainer>
	);
};

export default Ripple;
