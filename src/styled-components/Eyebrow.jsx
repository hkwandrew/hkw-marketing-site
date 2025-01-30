import styled from '@emotion/styled'

const Eyebrow = styled.p`
    font-size: var(--font-size-eyebrow);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-eyebrow);
    letter-spacing: var(--letter-spacing-eyebrow);
    text-transform: uppercase;
`

const StyledEyebrow = ({ children, className }) => {
    return <Eyebrow className={className}>{children}</Eyebrow>
}

export default StyledEyebrow
