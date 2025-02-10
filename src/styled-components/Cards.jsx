import styled from '@emotion/styled'

const CardListWrapper = styled.ul`
    display: flex;
    margin-inline: auto;

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

const Card = styled.li`
    border-radius: var(--radius-medium);
    display: flex;
    text-align: left;
    position: relative;
    background-color: ${(props) =>
        props.$backgroundColor || 'var(--color-white)'};
`

const ImgWrapper = styled.span`
    img {
        width: 100%;
        height: auto;
        // object-fit: contain;
    }
`

const Number = styled.span`
    position: absolute;
    bottom: -113.43px;
    left: -33.5px;
    font-size: 12rem;
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-heading1);
    letter-spacing: -3.84px;
    color: var(--color-hkw-red);
    z-index: 0;
`

const ContentWrapper = styled.span`
    position: relative;
    z-index: 1;
`

const Title = styled.h3`
    line-height: var(--line-height-eyebrow);
    font-weight: var(--font-weight-semi-bold);
`

const Description = styled.p``
const Cards = ({ cards }) => {
    return (
        <CardListWrapper>
            {cards.map((card, index) => (
                <Card
                    key={index}
                    className={card.className}
                    $backgroundColor={card.backgroundColor}
                >
                    {card.image && (
                        <ImgWrapper>
                            {typeof card.image === 'string' ? (
                                <img src={card.image} alt={card.title} />
                            ) : (
                                card.image
                            )}
                        </ImgWrapper>
                    )}
                    <ContentWrapper>
                        <Title>{card.title}</Title>
                        <Description>{card.description}</Description>
                    </ContentWrapper>
                    {!card.image && card.number && (
                        <Number>{card.number}</Number>
                    )}
                </Card>
            ))}
        </CardListWrapper>
    )
}

export default Cards
