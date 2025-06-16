import styled from '@emotion/styled'

const Heading = styled.h2`
    font-size: var(--font-size-heading1);
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-heading1);
    letter-spacing: var(--letter-spacing-heading1);
    text-transform: capitalize;

    @media (max-width: 767px) {
        font-size: 2.25rem;
        letter-spacing: var(--letter-spacing-heading3);
    }
`
const StyledHeading = ({ children, className }) => {
    return <Heading className={className}>{children}</Heading>
}

export default StyledHeading
