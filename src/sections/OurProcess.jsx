import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import StyledParagraph from '../styled-components/Paragraph'
import StyledHeading from '../styled-components/Heading'
import StyledEyebrow from '../styled-components/Eyebrow'
import PricingSection from '../styled-components/PricingSection'

const OurProcessWrapper = styled.section`
    text-align: center;
    background-color: var(--color-bg-grey);
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
        margin-block-end: 4.4375rem;
        color: var(--color-secondary);
        font-size: var(--font-size-body);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-body);
        letter-spacing: var(--letter-spacing-body);

        &:last-of-type {
            margin-block-end: unset;
            text-align: center;
            padding-block-start: var(--space-7);
            a {
                color: #e81831;
            }
        }
    }
`

const OurProcess = () => {
    return (
        <OurProcessWrapper>
            <StyledWidthContainer className='our-process-wrapper'>
                <StyledEyebrow className='our-process-eyebrow'>
                    Our Process
                </StyledEyebrow>
                <StyledHeading className='our-process-heading'>
                    Catered strategy through collaboration.
                </StyledHeading>
                <StyledParagraph className='our-process-paragraph'>
                    Collaborate with us to build a marketing plan that suits
                    your needs. We will start with a client questionnaire to
                    guide initial research, then host a kickoff call to
                    establish focused goals. Over the first month, we gather
                    insights and data to build your marketing roadmap.
                    Afterward, we meet for a detailed review and, if you choose,
                    partner with you to execute the plan for long-term success.
                </StyledParagraph>

                <PricingSection />
                <StyledParagraph className='our-process-paragraph'>
                    Too steep for your budget?{' '}
                    <a
                        className='hover-underline-animation'
                        href='tel:1+509-990-6857'
                    >
                        Give us a call
                    </a>
                </StyledParagraph>
            </StyledWidthContainer>
        </OurProcessWrapper>
    )
}

export default OurProcess
