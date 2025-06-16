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
            'Pinpoint the best opportunities to reach your audience and ensure you show up when they’re ready to buy.',
        number: '01',
        backgroundColor: '#FFF2F3;',
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
            'Apply technical enhancements to meet Google’s best practices and boost your rankings.',
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

    ul {
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
            height: 20.25rem;

            span {
                display: flex;
                flex-direction: column;
                gap: var(--space-4);
            }

            h3 {
                font-size: 1.5rem;
                letter-spacing: -0.6px;
                white-space: pre-line;
            }

            p {
                font-size: var(--font-size-body);
                letter-spacing: var(--letter-spacing-body);
                color: var(--color-secondary);
                line-height: var(--line-height-heading1);
            }
        }
    }
`

const WhatWeOffer = () => {
    return (
        <WhatWeOfferWrapper>
            <WidthContainer className='what-we-offer-container'>
                <Eyebrow class='what-we-offer-eyebrow'>What We Offer</Eyebrow>
                <Heading className='what-we-offer-title'>
                    Comprehensive Marketing Services
                </Heading>
                <Paragraph className='what-we-offer-paragraph'>
                    Increase your visibility and boost conversions with our
                    tailored marketing insights package.
                </Paragraph>
                <CardsWrapper>
                    <Eyebrow className='what-we-offer-eyebrow'>
                        What's Included:
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
