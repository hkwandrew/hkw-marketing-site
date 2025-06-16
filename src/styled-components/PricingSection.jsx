import React from 'react'
import PriceCard from './PriceCard'
import styled from 'styled-components'

const PricingContainer = styled.div`
    display: grid;
    gap: 3rem;
    max-width: 90rem;
    margin-inline: auto;
    grid-template-columns: 1fr;

    div:last-child {
        margin-block-start: 3rem;
    }

    @media (min-width: 1200px) {
        grid-template-columns: repeat(3, 1fr);

        div:last-child {
            margin-block-start: 0;
    }
`

const PricingSection = () => {
    return (
        <PricingContainer>
            <PriceCard
                title='One-month starter package'
                description='Initial SEO & PPC research and strategy'
                details='(good for businesses with DIY resources)'
                price={2500}
                frequency='One-time'
            />
            <PriceCard
                title='Ongoing monthly retainer'
                description='SEO or PPC services'
                details='(whichever has highest opportunity)'
                price={2000}
                frequency='Per Month'
                perMonth
            />
            <PriceCard
                title='Ongoing monthly retainer'
                description='Ongoing SEO & PPC services'
                details='(good for businesses that want to partner with HKW long-term)'
                price={3000}
                frequency='Per Month SEO + PPC'
                highlight
                perMonth
            />
        </PricingContainer>
    )
}

export default PricingSection
