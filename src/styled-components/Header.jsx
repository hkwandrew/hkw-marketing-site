import styled from '@emotion/styled'
import HkwMainLogo from '../assets/images/hkw-main-logo.svg?react'
import StyledButton from './Button'
import StyledWidthContainer from './WidthContainer'

const HeaderWrapper = styled.header`
    padding-block: var(--space-4);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const Header = () => {
    return (
        <StyledWidthContainer>
            <HeaderWrapper>
                <HkwMainLogo />
                <StyledButton
                    href='./#contact'
                    size='small'
                    variant='secondary'
                    className='header-btn'
                >
                    Let's Talk.
                </StyledButton>
            </HeaderWrapper>
        </StyledWidthContainer>
    )
}

export default Header
