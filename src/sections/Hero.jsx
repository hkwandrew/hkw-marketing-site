import { useEffect, useRef } from 'react'
import StyledWidthContainer from '../styled-components/WidthContainer'
import styled from '@emotion/styled'
import Header from '../styled-components/Header'
import StyledEyebrow from '../styled-components/Eyebrow'
import StyledTitle from '../styled-components/Title'
import StyledParagraph from '../styled-components/Paragraph'
import StyledButton from '../styled-components/Button'

import PlumbersNearMe from '../assets/images/plumbers-near-me.svg?react'
import PestControlServices from '../assets/images/pest-control-services.svg?react'
import BuySpokaneGifts from '../assets/images/buy-spokane-gifts.svg?react'
import LocalCharityWork from '../assets/images/local-charity-work.svg?react'
import FunAttractions from '../assets/images/fun-attractions.svg?react'

const HeroWrapper = styled.div`
    background: radial-gradient(
            166.73% 82.41% at 50% 25.03%,
            rgba(0, 0, 0, 0.57) 0%,
            rgba(132, 15, 83, 0.19) 88.32%,
            rgba(156, 17, 98, 0) 100%
        ),
        url('hero-bg.png') lightgray -69.472px 0px / 109.649% 100% no-repeat;
    background-attachment: fixed;
    text-align: center;
    height: 887px;

    @media (max-width: 767px) {
        background-position: center center;
        background-size: cover;
        height: 100vh;
    }

    .header-eyebrow {
        color: var(--color-white);
    }

    .hero-cta {
        z-index: 10;
        padding-inline: 44px;
    }

    .hero-container {
        display: flex;
        flex-direction: column;
        gap: var(--space-5);
        justify-content: center;
        align-items: center;
        padding-block-start: 5.5rem;
    }
`

const Subtitle = styled(StyledParagraph)`
    font-size: 1.75rem;
    color: var(--color-white);
    letter-spacing: -0.56px;

    @media (max-width: 767px) {
        font-size: 1.25rem;
        letter-spacing: -0.44px;
    }
`
const ReviewCards = styled.div`
    position: absolute;
    display: grid;
    grid-template-areas:
        'plumbers . . . attractions'
        '. pests . charity .'
        '. . gifts . .';
    grid-template-columns: 1fr 2fr 1fr 2fr 1fr;
    grid-template-rows: 1fr 2fr 1fr;
    width: 100%;
    padding-inline: 3.75rem;
    justify-content: space-between;
    align-items: center;
    translate: 0 18.75rem;
    margin-inline: auto;
    margin-block-end: auto;
    max-width: 90rem;
    left: 0;
    right: 0;

    svg {
        width: 12.0625rem;

        @media (max-width: 640px) {
            display: none;
        }

        @media (max-width: 1200px) {
            margin-inline: -8px;
        }

        @media (max-width: 1023px) {
            margin-block: -100px;
        }
    }

    svg:nth-of-type(2),
    svg:nth-of-type(4) {
        margin-block-start: 15%;
    }

    svg:nth-of-type(3) {
        translate: 0 -1.25rem;
    }

    svg:nth-of-type(4) {
        margin-inline-start: auto;
    }

    @media (max-width: 768px) {
        translate: 0 20rem;
    }

    @media (max-width: 1023px) {
        display: flex;
    }
`
const Hero = () => {
    const reviewCardsRef = useRef(null)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const svgs = reviewCardsRef.current.querySelectorAll('svg')

            let num

            window.innerWidth > 640 ? (num = 0.0005) : (num = -0.05)

            svgs.forEach((svg, index) => {
                const speedFactor = 0.2 + index * num
                const offsetY = scrollY * speedFactor
                svg.style.transform = `translateY(-${offsetY}px)`
            })
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <HeroWrapper>
            <Header />
            <StyledWidthContainer className='hero-container'>
                <StyledEyebrow className='header-eyebrow'>
                    Spokane Web Marketing
                </StyledEyebrow>
                <StyledTitle className='header-title'>
                    Get Found Online.
                </StyledTitle>
                <Subtitle className='header-subtitle'>
                    Connect with your Spokane community
                </Subtitle>
                <StyledButton
                    href='./#contact'
                    size='medium'
                    variant='primary'
                    className='hero-cta'
                >
                    Get Started
                </StyledButton>
                <ReviewCards ref={reviewCardsRef}>
                    <PlumbersNearMe style={{ gridArea: 'plumbers' }} />
                    <PestControlServices style={{ gridArea: 'pests' }} />
                    <BuySpokaneGifts style={{ gridArea: 'gifts' }} />
                    <LocalCharityWork style={{ gridArea: 'charity' }} />
                    <FunAttractions style={{ gridArea: 'attractions' }} />
                </ReviewCards>
            </StyledWidthContainer>
        </HeroWrapper>
    )
}

export default Hero
