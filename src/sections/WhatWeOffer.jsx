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
        backgroundColor: '#FFF2F3',
    },
    {
        title: 'Strategy & Development',
        description:
            'Analyze competitors to outpace them with data-driven strategies.',
        number: '02',
        backgroundColor: '#FFF2FE',
    },
    {
        title: 'Implementation & Analysis',
        description:
            'Create an effortless experience to entice customers and boost search engine performance.',
        number: '03',
        backgroundColor: '#F2F7FF',
    },
    {
        title: 'Growth & \nPerformance',
        description:
            'Set up robust analytics tracking to give you clear insights into performance.',
        number: '04',
        backgroundColor: '#FFF8F2',
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
    --card-number-left: -24px;
    --card-number-top: 276px;
    --card-number-bottom: auto;
    --card-number-size: 8.75rem; /* 140px */
    --card-number-spacing: -2.8px;

    /* Target the specific UL rendered by Cards component in this section */
    ul.what-we-offer-cards {
        padding: 0;
        display: grid;
        gap: 1rem;
        grid-template-columns: 1fr;

        @media (min-width: 768px) {
            grid-template-columns: 1fr 1fr;
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 1fr);
        }

        li {
            overflow: hidden;
            padding: var(--space-7) var(--space-6);
            border-radius: var(--radius-large);
            height: 21.3125rem; /* 341px */

            h3 {
                font-size: 1.5rem; /* 24px */
                letter-spacing: -0.48px;
                white-space: pre-line;
                line-height: var(--line-height-eyebrow); /* 1 */
                font-weight: var(--font-weight-semi-bold);
                text-align: left;
                margin-block-end: var(--space-5); /* 24px gap to paragraph */
            }

            p {
                font-size: var(--font-size-body); /* 20px */
                letter-spacing: var(--letter-spacing-body);
                color: var(--color-secondary);
                line-height: 1.2; /* Figma */
                text-align: left;
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
