import styled from '@emotion/styled'
import StyledWidthContainer from '../styled-components/WidthContainer'
import Cards from '../styled-components/Cards'
import StyledHeading from '../styled-components/Heading'

const MeetYourTeamWrapper = styled.div`
    background-color: var(--color-white);
    padding-block: var(--space-10);

    .meet-your-team-heading {
        text-align: center;
        margin-block-end: 4.25rem;
    }
`

const CardsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    ul {
        display: flex;
        flex-direction: row;
        gap: 24px;

        li {
            display: flex;
            flex-direction: column;

            &:hover {
                filter: unset;
            }
        }

        h3 {
            color: #292929;
            font-size: var(--space-5);
            padding-block: var(--space-5) var(--space-1);
            line-height: 1.32;
            font-weight: var(--font-weight-semi-bold);
        }

        p {
            color: var(--color-secondary);
            font-size: var(--font-size-body2);
            font-weight: var(--font-weight-regular);
            line-height: 1.32;
        }

        img {
            border-radius: var(--radius-large);
            // transition: var(--transition-hover);

            // &:hover {
            //     filter: drop-shadow(var(--shadow-small));
            //     transition: var(--transition-all);
            // }
        }
    }
`

const teamMembers = [
    {
        title: 'Travis Irwin',
        description: 'Chief Marketing Officer',
        image: 'travis.png',
        className: 'meet-team-card',
    },
    {
        title: 'Jennifer Chang',
        description: 'SEO Strategist',
        image: 'jenn.png',
        className: 'meet-team-card',
    },
    {
        title: 'Alondra Abdur-Rahman',
        description: 'PPC Strategist',
        image: 'alondra.png',
        className: 'meet-team-card',
    },
    {
        title: 'Gabi Castillo',
        description: 'Project Manager',
        image: 'gabi.png',
        className: 'meet-team-card',
    },
]

const MeetYourTeam = () => {
    return (
        <MeetYourTeamWrapper>
            <StyledWidthContainer className='meet-your-team-container'>
                <StyledHeading className='meet-your-team-heading'>
                    Meet Your Team
                </StyledHeading>
                <CardsWrapper>
                    <Cards
                        cards={teamMembers}
                        className='meet-your-team-cards'
                    />
                </CardsWrapper>
            </StyledWidthContainer>
        </MeetYourTeamWrapper>
    )
}

export default MeetYourTeam
