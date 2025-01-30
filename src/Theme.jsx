import { ThemeProvider } from 'styled-components'

const theme = {
    colors: {
        // color: ${({ theme }) => theme.colors.primary};
        primary: '#19202A',
        secondary: '#2B3746',
        tertiary: '#7E8793',
        white: '#FFFFFF',
        black: '#000000',
        hkwRed: '#E81831',
        bgSalmon: '#FFF2F3',
        bgGrey: '#F6F8FB',
    },
    fontSizes: {
        // font-size: ${({ theme }) => theme.fontSizes.title};
        title: '6rem',
        heading1: '4rem',
        heading2: '1.5rem',
        heading3: '1.125rem',
        body: '1.25rem',
        body2: '1rem',
        eyebrow: '0.875rem',
    },
    fontWeights: {
        // font-weight: ${({ theme }) => theme.fontWeights.regular};
        regular: 400,
        semiBold: 600,
        bold: 700,
    },
    lineHeights: {
        // line-height: ${({ theme }) => theme.lineHeights.title};
        title: 0.9,
        heading1: 1.2,
        heading2: 1,
        heading3: 1,
        body: 1.5,
        body2: 1.5,
        eyebrow: 1,
    },
    letterSpacings: {
        // letter-spacing: ${({ theme }) => theme.letterSpacings.title};
        title: '-1.92px',
        heading1: '-1.28px',
        heading2: '-0.48px',
        heading3: '-0.36px',
        body: '-0.4px',
        body2: '-0.32px',
        eyebrow: '1.4px',
    },
    breakpoints: {
        // @media (min-width: ${theme.breakpoints.mobile}) { ... }
        mobile: '375px',
        tablet: '768px',
        desktop: '1024px',
    },
    shadows: {
        // filter: drop-shadow(${({ theme }) => theme.shadows.small});
        small: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        medium: '0px 8px 8px rgba(0, 0, 0, 0.25)',
        large: '0px 16px 16px rgba(0, 0, 0, 0.25)',
    },
    transitions: {
        // transition: all 0.3s ease-in-out;
        all: 'all 0.15s ease-in-out',
        hover: 'all 0.45s ease-in-out',
    },
    radii: {
        // border-radius: ${({ theme }) => theme.radii.small};
        small: '6px',
        medium: '8px',
        large: '16px',
        button: '999px',
    },
    zIndices: {
        // z-index: ${({ theme }) => theme.zIndices.modal};
        modal: 1000,
    },
    space: {
        // margin: ${({ theme }) => theme.space[4]};
        0: '0.25rem',
        1: '0.5rem',
        2: '0.75rem',
        3: '1rem',
        4: '1.25rem',
        5: '1.5rem',
        6: '2rem',
        7: '2.5rem',
        8: '3rem',
        9: '3.75rem',
        10: '5rem',
    },
}

const Theme = ({ children }) => (
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default Theme
