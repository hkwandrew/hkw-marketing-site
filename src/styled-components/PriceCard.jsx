import styled from 'styled-components'
import Button from './Button'

const Card = styled.div`
    padding: var(--space-4);
    position: relative;
    border-radius: ${(props) =>
        props.$highlight ? '0px 0px 16px 16px' : '16px'};
    border: 1px solid #e4dcdc;
    border-block-start: ${(props) =>
        props.$highlight ? 'none' : '1px solid #e4dcdc'};
    background: ${(props) => (props.$perMonth ? '#FFF2F3' : '#fff')};
    text-align: left;
    // transition: var(--transition-hover);

    // &:hover {
    //     filter: drop-shadow(var(--shadow-small));
    //     transition: var(--transition-all);
    // }
`

const Header = styled.div`
    border-radius: var(--radius-large);
    padding: var(--space-4);
    background: ${(props) => (props.$perMonth ? '#fff' : '#f6f8fb')};
    height: 14rem;
    display: flex;
    flex-direction: column;

    h3 {
        font-size: var(--font-size-body2);
        padding-block-end: var(--space-7);
    }

    p {
        font-size: var(--font-size-body);
        font-weight: var(--font-weight-regular);
        line-height: var(--line-height-body);
        letter-spacing: var(--letter-spacing-body);
        color: var(--color-secondary);

        &:last-of-type {
            font-size: 1rem;
            letter-spacing: var(--letter-spacing-body2);
            padding-block-start: var(--space-5);
        }
    }

    font-weight: bold;
`

const Price = styled.p`
    color: var(--color-primary);
    margin-block-start: var(--space-7);
    font-size: 4.5rem;
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-heading2);
    letter-spacing: -2.88px;
    padding-inline: var(--space-5);
`

const Frequency = styled.p`
    color: #e81831;
    margin-block: 1.5rem 2.5rem;
    padding-inline: 1.5rem;
    font-size: 0.875rem;
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-eyebrow);
    letter-spacing: 1.4px;
    text-transform: uppercase;
`

const BestValueTag = styled.div`
    top: -2.8rem;
    left 0;
    right: -1px;
    width: calc(100% + 2px);
    padding:var(--space-3);
    justify-content: center;
    border-radius: 16px 16px 0px 0px;
    background: linear-gradient(90deg, #FF4141 0%, #FFB623 100%);
    position: absolute;
    font-weight: var(--font-weight-bold);
    text-transform: uppercase;
    text-align: center;
    color: var(--color-white);
    font-size: 14px;
    font-style: normal;
    font-weight: var(--font-weight-bold);
    line-height: var(--line-height-eyebrow);
    letter-spacing: 1.4px;
    text-transform: uppercase;
`

const PriceCard = ({
    title,
    description,
    details,
    price,
    frequency,
    highlight,
    perMonth,
}) => {
    return (
        <Card $highlight={highlight} $perMonth={perMonth}>
            {highlight && <BestValueTag>Best Value</BestValueTag>}
            <Header $perMonth={perMonth}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p>{details}</p>
            </Header>
            <Price>${price}</Price>
            <Frequency>{frequency}</Frequency>
            <Button variant='primary' size='full'>
                Get Started
            </Button>
        </Card>
    )
}

export default PriceCard
