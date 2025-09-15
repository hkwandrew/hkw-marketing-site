import styled from '@emotion/styled'
import WidthContainer from '../styled-components/WidthContainer'
import Paragraph from '../styled-components/Paragraph'
import Heading from '../styled-components/Heading'
import Eyebrow from '../styled-components/Eyebrow'
import Cards from '../styled-components/Cards'

const whatWeOfferCards = [
    {
        title: 'Goals & \nResearch',
        description:
            'Pinpoint the best opportunities to reach your audience and ensure you show up when they’re ready to act.',
        number: '01',
        className: 'what-we-offer-card goals-and-research-card',
    },
    {
        title: 'Strategy & Development',
        description:
            'Analyze competitors to outpace them with data-driven strategies.',
        number: '02',
        className: 'what-we-offer-card strategy-development-card',
    },
    {
        title: 'Implementation & Analysis',
        description:
            'Create an effortless experience to entice customers and boost search engine performance.',
        number: '03',
        className: 'what-we-offer-card implementation-analysis-card',
    },
    {
        title: 'Growth & \nPerformance',
        description:
            'Set up robust analytics tracking to give you clear insights into performance.',
        number: '04',
        className: 'what-we-offer-card growth-performance-card',
    },
]

const WhatWeOfferWrapper = styled.section`
    background-color: var(--color-white);
    padding-block: var(--space-10);

    .what-we-offer-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--space-6);

        .what-we-offer-eyebrow,
        .what-we-offer-title,
        .what-we-offer-paragraph {
            width: 100%;
            max-width: 40.625rem;
            margin-inline: auto;
        }

        .what-we-offer-paragraph {
            margin-block-end: var(--space-6);
        }
    }
`

const CardsWrapper = styled.div`
    color: var(--color-primary);
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    margin-inline: auto;
    max-width: 90rem;

    /* Overrides for card number in this section to match Figma */
    --card-number-left: -1.5rem; /* 24px outside the wrapper */
    --card-number-top: auto;
    --card-number-bottom: -4.29rem; /* 68.64px shows just the top curve */
    --card-number-size: 8.75rem; /* 140px */
    --card-number-spacing: -2.8px;

    /* Target the specific UL rendered by Cards component in this section */
    ul.what-we-offer-cards {
        padding: 0;
        display: grid;
        gap: clamp(1rem, 1.5vw, 1.5rem);
        grid-template-columns: 1fr;
        grid-auto-rows: 341px;
        align-items: stretch;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }

        li.what-we-offer-card {
            overflow: hidden;
            position: relative;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: 1.5rem; /* 24px */
            padding: 40px 32px;
            border-radius: 1rem; /* 16px */
            height: 100%;
            box-shadow: 0px 20px 60px rgba(24, 37, 56, 0.08);
            text-align: left;
            transition:
                box-shadow 180ms ease,
                transform 180ms ease;

            > span:first-of-type {
                display: flex;
                flex-direction: column;
                gap: 1.5rem; /* 24px between title and paragraph */
            }

            &:hover {
                transform: translateY(-0.25rem);
                box-shadow: 0px 24px 72px rgba(24, 37, 56, 0.12);
            }

            h3 {
                color: #19202a;
                text-box-trim: trim-both;
                text-box-edge: cap alphabetic;
                font-family: 'Figtree', var(--font-family-heading, sans-serif);
                font-size: 1.5rem; /* 24px */
                font-style: normal;
                font-weight: 600;
                line-height: 1; /* 24px */
                letter-spacing: -0.48px;
                white-space: pre-line;
                margin: 0;
            }

            p {
                color: #2b3746;
                text-box-trim: trim-both;
                text-box-edge: cap alphabetic;
                font-family: 'Figtree', var(--font-family-body, sans-serif);
                font-size: 1.25rem; /* 20px */
                font-style: normal;
                font-weight: 400;
                line-height: 1.2; /* 24px */
                letter-spacing: -0.4px;
                margin: 0;
            }

            &.goals-and-research-card {
                background: linear-gradient(180deg, #fff7f8 0%, #ffe6ed 100%);
            }

            &.strategy-development-card {
                background: linear-gradient(180deg, #fff2fe 0%, #f9e6ff 100%);
            }

            &.implementation-analysis-card {
                background: linear-gradient(180deg, #f4f9ff 0%, #e6f1ff 100%);
            }

            &.growth-performance-card {
                background: linear-gradient(180deg, #fff7f2 0%, #ffece0 100%);
            }
        }
    }
`

const WhatWeOffer = () => {
    return (
        <WhatWeOfferWrapper>
            <WidthContainer className='what-we-offer-container'>
                <Eyebrow className='what-we-offer-eyebrow'>
                    What We Offer
                </Eyebrow>
                <Heading className='what-we-offer-title'>
                    Comprehensive Marketing Services
                </Heading>
                <Paragraph className='what-we-offer-paragraph'>
                    Increase your visibility and boost conversions with our
                    tailored marketing insights package.
                </Paragraph>
                <CardsWrapper>
                    <Eyebrow className='what-we-offer-eyebrow'>
                        What’s Included:
                    </Eyebrow>
                    <Cards
                        cards={whatWeOfferCards}
                        className='what-we-offer-cards'
                    />
                </CardsWrapper>
            </WidthContainer>
        </WhatWeOfferWrapper>
    )
}

export default WhatWeOffer
