export const theme = {
	palette: {
		normal: {
			normal: 'rgba(236, 241, 240, 1)',
			active: 'rgba(223, 223, 223, 1)',
			hover: 'rgba(249, 249, 249, 1)',
		},
		active: {
			normal: 'rgba(15, 174, 150, 1)',
			active: 'rgba(2, 116, 99, 1)',
			hover: 'rgba(5, 143, 123, 1)',
		},
		mainBg: {
			color: 'rgba(5, 7, 10, 1)',
			filter: 'blur(100px)',
		},
		white: {
			extraLight: 'rgba(255,255,255, 0.03)',
			light: 'rgba(255,255,255, 0.05)',
			normal: 'rgba(255,255,255, 0.10)',
			dark: 'rgba(255,255,255, 0.15)',
		},
		borderBg:
			'linear-gradient(109.41deg, #0FAE96 0%, rgba(18, 14, 39, 0) 48.96%, #7DCFE9 100%)',
	},
	typography: {
		h1: {
			fontFamily: 'Inter',
			fontSize: '2.5rem',
			lineHeight: '3rem',
		},
		h2: {
			fontFamily: 'Inter',
			fontSize: '2rem',
			lineHeight: '2.5rem',
		},
		h3: {
			fontFamily: 'Inter',
			fontSize: '1.5rem',
			lineHeight: '2rem',
		},
		h4: {
			fontFamily: 'Inter',
			fontSize: '1rem',
			lineHeight: '1.25rem',
		},
		h5: {
			fontFamily: 'Inter',
			fontSize: '0.75rem',
			lineHeight: '1rem',
		},
		button: {
			fontFamily: 'Inter',
			fontSize: {
				normal: '1rem',
				small: '0.75rem',
			},
			lineHeight: { normal: '1.25rem', small: '1rem' },
			textTransform: 'uppercase',
		},
		error: {
			fontFamily: 'Inter',
			fontSize: { small: '0.75rem', normal: '1rem' },
			lineHeight: { small: '1rem', normal: '1.25rem' },
			textTransform: 'uppercase',
			color: 'red',
		},
	},
	spacing: {
		headerHeight: {
			xs: '2rem',
			sm: '3rem',
			xl: '4rem',
		},
	},
	zIndex: {
		mobileStepper: 1000,
		speedDial: 1050,
		appBar: 1100,
		dropdown: 1200,
		overlay: 1250,
		modal: 1300,
		snackbar: 1400,
		tooltip: 1500,
	},
};
