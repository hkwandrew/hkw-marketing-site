import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import StyledParagraph from '../styled-components/Paragraph'
import StyledHeading from '../styled-components/Heading'
import StyledEyebrow from '../styled-components/Eyebrow'
import Cards from '../styled-components/Cards'
import StyledButton from '../styled-components/Button'
// import PricingSection from '../styled-components/PricingSection'

const whatWeOfferCards = [
  {
    title: 'Goals & \nResearch',
    description:
      'Pinpoint the best opportunities to reach your audience and ensure you show up when they’re ready to act.',
    number: '01',
    backgroundColor: '#FFF2F3;'
  },
  {
    title: 'Strategy & Development',
    description:
      'Analyze competitors to outpace them with data-driven strategies.',
    number: '02',
    backgroundColor: '#FFF2FE'
  },
  {
    title: 'Implementation & Analysis',
    description:
      'Create an effortless experience to entice customers and boost search engine performance.',
    number: '03',
    backgroundColor: '#F2F7FF'
  },
  {
    title: 'Growth & \nPerformance',
    description:
      'Set up robust analytics tracking to give you clear insights into performance.',
    number: '04',
    backgroundColor: '#FFF8F2'
  }
]


const OurProcessWrapper = styled.section`
  text-align: center;
  background-color: var(--color-white);
  padding-block: 5rem;

  .our-process-wrapper {
    margin-inline: auto;
    color: var(--color-primary);
    display: flex;
    flex-direction: column;
    gap: var(--space-6);
  }

  .our-process-eyebrow,
  .our-process-heading,
  .our-process-paragraph {
    width: 100%;
    max-width: 40.625rem;
    margin-inline: auto;
  }

  .our-process-paragraph {
    margin-block-end: 44px;
    color: var(--color-secondary);
    font-size: var(--font-size-body);
    font-weight: var(--font-weight-regular);
    line-height: var(--line-height-body);
    letter-spacing: var(--letter-spacing-body);

    &:last-of-type {
      // margin-block-end: unset;
      text-align: center;
      // padding-block-start: var(--space-7);
      a {
        color: #e81831;
      }
    }
  }

  a {
    color: black;
    width: 100%;
    max-width: 332px;
    margin-inline: auto;
  }
`
const Divider = styled.div`
  background-color: #f6f8fb;
  max-width: 1320px;
  width: 100%;
  margin-inline: auto;
  height: 1px;
  margin-block: 24px;
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

const OurProcess = () => {
  return (
    <>
      <OurProcessWrapper>
        <StyledWidthContainer className='our-process-wrapper'>
          <StyledEyebrow className='our-process-eyebrow'>
            Our Process
          </StyledEyebrow>
          <StyledHeading className='our-process-heading'>
            Catered Marketing Strategy Through Collaboration
          </StyledHeading>
          <StyledParagraph className='our-process-paragraph'>
            Get a custom marketing plan built for your goals and budget. We’ll
            define your strategy, create a roadmap, and help execute it for
            lasting growth.
          </StyledParagraph>

          <CardsWrapper>
            <StyledEyebrow className='what-we-offer-eyebrow'>
              What's Included:
            </StyledEyebrow>
            <Cards cards={whatWeOfferCards} className='what-we-offer-cards' />
          </CardsWrapper>

          <StyledButton href='./#contact' size='medium' variant="primary">
            Get Started
          </StyledButton>
          {/* <PricingSection /> */}
        </StyledWidthContainer>
      </OurProcessWrapper>
      <Divider className='divider'></Divider>
    </>
  )
}

export default OurProcess
