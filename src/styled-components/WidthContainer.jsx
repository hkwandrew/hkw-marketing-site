import styled from '@emotion/styled'

const WidthContainer = styled.div`
    width: 100%;
    max-width: 90rem;
    margin-inline: auto;
    padding-inline: var(--space-9);
`

const StyledWidthContainer = ({ className, children }) => {
    return <WidthContainer className={className}>{children}</WidthContainer>
}

export default StyledWidthContainer
