import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import StyledParagraph from '../styled-components/Paragraph'
import StyledHeading from '../styled-components/Heading'
import StyledEyebrow from '../styled-components/Eyebrow'
import Cards from '../styled-components/Cards'

const howWeHelpCards = [
    {
        title: 'Expand your customer base',
        image: '/expand-your-customer-base.svg',
        className: 'our-team-card',
    },
    {
        title: 'Optimize and maintain your website',
        image: '/optimize-and-maintain.svg',
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
        title: 'Make sure your customers can find you online',
        image: 'find-you-online.svg',
        className: 'our-team-card',
    },
    {
        title: 'Build and grow your marketing assets',
        image: 'build-assets.svg',
        className: 'our-team-card',
    },
    {
        title: 'Gain valuable insights from your data for continued growth',
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
        flex-direction: row;
        flex-wrap: wrap;
        gap: var(--space-6) var(--space-5);
        justify-content: center;

        li {
            display: flex;
            max-width: 16.875rem;
            padding: var(--space-4);
            align-items: center;
            align-self: stretch;
            gap: var(--space-4);
            background-color: var(--color-white);

            &:nth-of-type(5),
            &:nth-of-type(6),
            &:nth-of-type(7) {
                margin-inline: var(--space-2);
                padding: var(--space-3);
            }

            span:has(img) {
                display: flex;
                min-width: var(--space-8)
                height: var(--space-8);
                justify-content: center;
                align-items: center;
                border-radius: var(--radius-small);
                background: var(--color-bg-salmon);

                img {
                    display: block;
                    width: var(--space-5);
                }
            }

            span:has(h3) {
                h3 {
                    color: var(--color-primary);
                    font-size: var(--font-size-heading3);
                    font-weight: var(--font-weight-semi-bold);
                    line-height: var(--line-height-heading3);
                    letter-spacing: var(--letter-spacing-heading3);
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
                    Tackle local business challenges with ease.
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
