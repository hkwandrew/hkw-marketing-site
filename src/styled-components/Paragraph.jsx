import styled from '@emotion/styled'

const Paragraph = styled.p`
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-body);
    letter-spacing: var(--letter-spacing-body);

    @media (max-width: 767px) {
        font-size: var(--font-size-body-sm);
    }
`

const StyledParagraph = ({ children, className }) => {
    return <Paragraph className={className}>{children}</Paragraph>
}

export default StyledParagraph
