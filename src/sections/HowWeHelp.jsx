import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import StyledParagraph from '../styled-components/Paragraph'
import StyledHeading from '../styled-components/Heading'
import StyledEyebrow from '../styled-components/Eyebrow'
import Cards from '../styled-components/Cards'

const howWeHelpCards = [
    {
        title: 'Expand your customer base',
        image: 'expand-your-customer-base.svg',
        className: 'our-team-card',
    },
    {
        title: 'Optimize and maintain your website',
        image: 'optimize-and-maintain.svg',
        className: 'our-team-card',
    },
    {
        title: 'Resolve critical website issues',
        image: 'resolve-critical.svg',
        className: 'our-team-card',
    },
    {
        title: 'Deliver a mobile-friendly, responsive experience',
        image: 'deliver-mobile.svg',
        className: 'our-team-card',
    },
    {
        title: 'Ensure your customers can find you online',
        image: 'find-you-online.svg',
        className: 'our-team-card',
    },
    {
        title: 'Build and grow your marketing assets',
        image: 'build-assets.svg',
        className: 'our-team-card',
    },
    {
        title: 'Gain valuable data for continued growth',
        image: 'gain-insights.svg',
        className: 'our-team-card',
    },
]

const HowWeHelpWrapper = styled.section`
    padding-block: var(--space-10);
    background-color: var(--color-bg-grey);

    .how-we-help-container {
        text-align: center;
        display: flex;
        flex-direction: column;
        gap: var(--space-6);

        .how-we-help-eyebrow,
        .how-we-help-title,
        .how-we-help-paragraph {
            width: 100%;
            max-width: 40.625rem;
            margin-inline: auto;
        }
    }
`

const CardsWrapper = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
    max-width: 90rem;
    margin-inline: auto;
    padding-block-start: var(--space-6);

    ul {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 2rem 1.5rem;

        li {
            display: flex;
            align-items: center;
            gap: var(--space-4);
            width: min(100%, 16.75rem);
            padding: var(--space-4);
            border-radius: var(--radius-medium);
            border: 1px solid var(--color-hkw-red);
            background: #f6f8fb;

            &:nth-of-type(n + 5) {
                padding: var(--space-3);
            }

            span:first-of-type {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 2.5rem;
                height: 2.5rem;
                flex-shrink: 0;

                img {
                    display: block;
                    width: 2.5rem;
                    height: 2.5rem;
                }
            }

            span:last-of-type {
                display: flex;
                align-items: center;
                text-align: left;

                h3 {
                    color: var(--color-primary);
                    font-size: 1.125rem;
                    font-weight: var(--font-weight-semi-bold);
                    line-height: 1;
                    letter-spacing: var(--letter-spacing-body2);
                    margin: 0;
                }
            }
        }
    }

    @media (max-width: 767px) {
        ul {
            gap: var(--space-3);

            li {
                width: 100%;
                max-width: none;
                padding: var(--space-4);

                &:nth-of-type(n + 5) {
                    padding: var(--space-4);
                }
            }
        }
    }
`

const HowWeHelp = () => {
    return (
        <HowWeHelpWrapper>
            <StyledWidthContainer className='how-we-help-container'>
                <StyledEyebrow className='how-we-help-eyebrow'>
                    How We Help
                </StyledEyebrow>
                <StyledHeading className='how-we-help-title'>
                    Tackle local business challenges with ease
                </StyledHeading>
                <StyledParagraph className='how-we-help-paragraph'>
                    Build a strong reputation through strategic online marketing
                    and brand representation. We ensure your message reaches the
                    right people at the right time, amplifying your impact.
                </StyledParagraph>
                <StyledParagraph className='how-we-help-paragraph'>
                    Partner with HKW to elevate, promote, and empower your small
                    or local business with a stronger online presence. Our
                    approach is not just professional but also personalized to
                    meet your unique needs.
                </StyledParagraph>
                <CardsWrapper>
                    <StyledEyebrow className='how-we-help-eyebrow'>
                        Out Team of Experts Will
                    </StyledEyebrow>
                    <Cards
                        cards={howWeHelpCards}
                        className='how-we-help-cards'
                    />
                </CardsWrapper>
            </StyledWidthContainer>
        </HowWeHelpWrapper>
    )
}

export default HowWeHelp
