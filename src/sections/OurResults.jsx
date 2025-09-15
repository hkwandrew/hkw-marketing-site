import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import StyledEyebrow from '../styled-components/Eyebrow'
import StyledHeading from '../styled-components/Heading'
import StyledParagraph from '../styled-components/Paragraph'
import Cards from '../styled-components/Cards'

const ourResults = [
  {
    image: 'higher-search-visibility.svg',
    title: 'Higher search visibility',
    description: 'Boost your website’s visibility on search engines.',
    className: 'our-results-card'
  },
  {
    image: 'increased-website-traffic.svg',
    title: 'Increased website traffic',
    description: 'Attract more local customers through organic search.',
    className: 'our-results-card'
  },
  {
    image: 'enhanced-brand-authority.svg',
    title: 'Enhanced brand authority',
    description: 'Establish your business as a trusted leader in Spokane.',
    className: 'our-results-card'
  },
  {
    image: 'sales-and-revenue-growth.svg',
    title: 'Sales and revenue growth',
    description: 'Reach a broader audience and drive more sales.',
    className: 'our-results-card'
  }
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
    ul {
        width: 100%;
        padding: 0;
        list-style: none;
        margin-block: var(--space-7) var(--space-9);
        display: grid;
        gap: 1.5rem;
        grid-template-columns: 1fr;
        justify-content: center;
        justify-items: center;

        @media (min-width: 768px) {
            grid-template-columns: repeat(2, 19.5rem);
        }

        @media (min-width: 1200px) {
            grid-template-columns: repeat(4, 19.5rem);
        }

        .our-results-card {
            position: relative

            display: flex;
            flex-direction: column;
            align-items: flex-start;
            gap: var(--space-5);
            padding: var(--space-6);
            width: 100%;
            max-width: 19.5rem;
            height: 20.75rem;
            border-radius: 1rem;
            border: 1px solid #eceff5;
            background-color: var(--color-white);
            text-align: left;

            > span:first-of-type {
                display: flex;
                justify-content: center;
                width: 100%;
            }

            > span:last-of-type {
                display: flex;
                flex-direction: column;
                gap: var(--space-5);
                width: 100%;
            }

            img {
                display: block;
                width: min(100%, 15.5rem);
                height: auto;
            }

            h3 {
                margin: 0;
                font-size: var(--font-size-heading2);
                font-weight: var(--font-weight-semi-bold);
                line-height: var(--line-height-heading1);
                letter-spacing: var(--letter-spacing-heading2);
                color: var(--color-primary);
                text-box-trim: trim-both;
                text-box-edge: cap alphabetic;
            }

            p {
                margin: 0;
                font-size: var(--font-size-body);
                line-height: 1.2;
                letter-spacing: var(--letter-spacing-body);
                color: var(--color-secondary);
                text-box-trim: trim-both;
                text-box-edge: cap alphabetic;

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
          Transform your business with tangible outcomes
        </StyledHeading>
        <StyledParagraph className='our-results-paragraph'>
          Investing in our digital marketing services yields:
        </StyledParagraph>
        <CardsWrapper>
          <Cards cards={ourResults} />
        </CardsWrapper>
      </StyledWidthContainer>
    </OurResultsWrapper>
  )
}

export default OurResults
