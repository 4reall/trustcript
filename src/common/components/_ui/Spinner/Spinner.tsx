import {
	SpinnerContainer,
	SpinnerSvg,
	SpinnerSvgProps,
} from 'src/common/components/_ui/Spinner/Spinner.styles';

const Spinner = ({ small }: SpinnerSvgProps) => {
	return (
		<SpinnerContainer>
			<SpinnerSvg small={small}>
				<circle
					cx={small ? '25' : '50'}
					cy={small ? '25' : '50'}
					r={small ? '20' : '35'}
					fill="none"
				/>
			</SpinnerSvg>
		</SpinnerContainer>
	);
};

export default Spinner;
