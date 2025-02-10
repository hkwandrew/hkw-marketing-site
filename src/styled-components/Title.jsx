import styled from '@emotion/styled'

const Title = styled.h1`
    font-size: var(--font-size-title);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-title);
    letter-spacing: var(--letter-spacing-title);
    text-align: center;
    color: var(--color-white);

    @media screen and (max-width: 767px) {
        font-size: var(--font-size-heading1);
    }
`

const StyledTitle = ({ children, className }) => {
    return <Title className={className}>{children}</Title>
}

export default StyledTitle
