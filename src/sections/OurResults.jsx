import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import StyledEyebrow from '../styled-components/Eyebrow'
import StyledHeading from '../styled-components/Heading'
import StyledParagraph from '../styled-components/Paragraph'
import Cards from '../styled-components/Cards'

const ourResults = [
    {
        image: '/higher-search-visibility.svg',
        title: 'Higher search visibility',
        description: 'Boost your website’s visibility on search engines.',
        className: 'our-results-card',
    },
    {
        image: '/increased-website-traffic.svg',
        title: 'Increased website traffic',
        description: 'Attract more local customers through organic search.',
        className: 'our-results-card',
    },
    {
        image: 'enhanced-brand-authority.svg',
        title: 'Enhanced brand authority',
        description: 'Establish your business as a trusted leader in Spokane.',
        className: 'our-results-card',
    },
    {
        image: '/sales-and-revenue-growth.svg',
        title: 'Sales and revenue growth',
        description: 'Reach a broader audience and drive more sales.',
        className: 'our-results-card',
    },
]

const OurResultsWrapper = styled.section`
    text-align: center;
    background-color: var(--color-white);

    .our-results-container {
        margin-inline: auto;
        color: var(--color-primary);
        display: flex;
        flex-direction: column;
        gap: var(--space-6);
        padding-block: var(--space-10) 0;
    }

    .our-results-eyebrow,
    .our-results-heading,
    .our-results-paragraph {
        width: 100%;
        max-width: 40.625rem;
        margin-inline: auto;
    }
`

const CardsWrapper = styled.div`
    margin-block: 2.25rem 4.25rem;
    ul {
        display: flex;
        gap: 24px;

        .our-results-card {
            flex-direction: column;
            border-radius: 16px;
            border: 1px solid #f1f2f5;
            padding: 2rem;
            gap: 1.5rem;
            width: 312px;
            background: #fff;
            margin-inline: auto;

            span:has(img) {
                width: 15.5rem;
                height: auto;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            h3 {
                margin-block-end: 1.5rem;
                font-size: 1.5rem;
                line-height: 1.2;
                letter-spacing: -0.48px;
                font-weight: 600;
            }

            p {
                font-size: 1.25rem;
                line-height: 1.2;
                letter-spacing: -0.4px;
                font-weight: 400;
                color: #2b3746;
            }
        }
    }
`

const OurResults = () => {
    return (
        <OurResultsWrapper>
            <StyledWidthContainer className='our-results-container'>
                <StyledEyebrow className='our-results-eyebrow'>
                    Our Results
                </StyledEyebrow>
                <StyledHeading className='our-results-heading'>
                    Transform your business with tangible outcomes.
                </StyledHeading>
                <StyledParagraph className='our-results-paragraph'>
                    Investing in our digital marketing services yields:
                </StyledParagraph>
                <CardsWrapper>
                    <Cards cards={ourResults} className='our-results-cards' />
                </CardsWrapper>
            </StyledWidthContainer>
        </OurResultsWrapper>
    )
}

export default OurResults
