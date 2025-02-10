import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
	@font-face {
		font-family: Figtree;
		src: url(/fonts/Figtree-VariableFont_wght.ttf) format('truetype-variations');
		font-weight: 300 900;
		font-style: normal;
		font-display: swap;
	}

	@font-face {
		font-family: "Figtree-fallback";
		size-adjust: 100%;
		src: local("Arial");
	}

	html {
		/* Colors */
		--color-primary: #19202A;
		--color-secondary: #2B3746;
		--color-tertiary: #7E8793;
		--color-white: #FFFFFF;
		--color-black: #000000;
		--color-hkw-red: #E81831;
		--color-bg-salmon: #FFF2F3;
		--color-bg-grey: #F6F8FB;

		/* Fonts */
		--font-primary: 'Figtree', 'Figtree-fallback', sans-serif;

		/* Font Sizes */
		--font-size-title: 6rem;
		--font-size-heading1: 4rem;
		--font-size-heading2: 1.5rem;
		--font-size-heading3: 1.125rem;
		--font-size-body: 1.25rem;
		--font-size-body2: 1rem;
		--font-size-eyebrow: 0.875rem;

		/* Font Weights */
		--font-weight-regular: 400;
		--font-weight-semi-bold: 600;
		--font-weight-bold: 700;

		/* Line Heights */
		--line-height-title: 0.9;
		--line-height-heading1: 1.2;
		--line-height-heading2: 1;
		--line-height-heading3: 1;
		--line-height-body: 1.5;
		--line-height-body2: 1.5;
		--line-height-eyebrow: 1;

		/* Letter Spacings */
		--letter-spacing-title: -1.92px;
		--letter-spacing-heading1: -1.28px;
		--letter-spacing-heading2: -0.48px;
		--letter-spacing-heading3: -0.36px;
		--letter-spacing-body: -0.4px;
		--letter-spacing-body2: -0.32px;
		--letter-spacing-eyebrow: 1.4px;

		/* Shadows */
		--shadow-small: 0px 4px 4px rgba(0, 0, 0, 0.25);
		--shadow-medium: 0px 8px 8px rgba(0, 0, 0, 0.25);
		--shadow-large: 0px 16px 16px rgba(0, 0, 0, 0.25);

		/* Transitions */
		--transition-all: all 0.15s ease-in-out;
		--transition-hover: all 0.45s ease-in-out;

		/* Border Radii */
		--radius-small: 6px;
		--radius-medium: 8px;
		--radius-large: 16px;
		--radius-button: 999px;

		/* Z-Indices */
		--z-index-modal: 1000;

		/* Spacing */
		--space-0: 0.25rem;
		--space-1: 0.5rem;
		--space-2: 0.75rem;
		--space-3: 1rem;
		--space-4: 1.25rem;
		--space-5: 1.5rem;
		--space-6: 2rem;
		--space-7: 2.5rem;
		--space-8: 3rem;
		--space-9: 3.75rem;
		--space-10: 5rem;

		font-family: var(--font-primary);
		font-size: 100%;
		font-smoothing: antialiased;
		scroll-behavior: smooth;

		overflow-x: hidden;
	}

	.hover-underline-animation {
		display: inline-block;
		position: relative;

		&::after {
			content: '';
			position: absolute;
			width: 100%;
			transform: scaleX(0);
			height: 1px;
			bottom: 0;
			left: 0;
			background-color: var(--color-hkw-red);
			transform-origin: bottom center;
			transition: transform 0.45s ease-out;
		}

		&:hover::after {
			transform: scaleX(1);
			transform-origin: bottom center;
			transition: transform 0.15s ease-out;
		}
	}

	button,
	a {
		&:hover {
			cursor: pointer;
		}
	}

`

export default GlobalStyles
