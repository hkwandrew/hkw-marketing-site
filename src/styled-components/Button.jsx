import styled, { css } from 'styled-components'

const sizes = {
    small: css`
        padding: var(--space-3) var(--space-4);
    `,
    medium: css`
        padding: var(--space-4);
    `,
    full: css`
        padding: var(--space-4);
        width: 100%;
    `,
}

const variants = {
    primary: css`
        background-color: var(--color-hkw-red);
        color: var(--color-white);
        border: transparent;

        &:hover {
            background-color: rgb(234, 86, 104);
        }
    `,
    secondary: css`
        background-color: transparent;
        color: var(--color-white);
        border: 1px solid var(--color-white);
        overflow: hidden;
        background-image: linear-gradient(transparent);
        background-repeat: repeat;
        background-size: 100% 200%;

        &:hover {
            background-image: linear-gradient(
                transparent 50%,
                var(--color-hkw-red) 50%
            );
            background-position: 0 100%;
        }
    `,
}

const Button = styled.a`
    display: inline-block;

    ${(props) => sizes[props.$size]}
    ${(props) => variants[props.$variant]}

    border-radius: var(--radius-button);
    font-size: var(--font-size-body2);
    font-family: var(--font-primary);
    font-weight: var(--font-weight-bold);
    line-height: 1;
    text-transform: uppercase;
    transition: var(--transition-all);
    text-align: center;

    &:hover {
        cursor: pointer;
        transition: var(--transition-hover);
    }
`

const StyledButton = ({
    children,
    size = 'medium',
    variant = 'primary',
    href,
    className,
}) => {
    return (
        <Button
            $size={size}
            $variant={variant}
            href={href}
            className={className}
        >
            {children}
        </Button>
    )
}

export default StyledButton
