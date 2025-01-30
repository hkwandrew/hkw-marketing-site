import Hero from './sections/Hero'
import HowWeHelp from './sections/HowWeHelp'
import Theme from './Theme'
// import styled from '@emotion/styled'
import WhatWeOffer from './sections/WhatWeOffer'
import GlobalStyles from './GlobalStyles'
import OurProcess from './sections/OurProcess'
import OurResults from './sections/OurResults'
import TestimonialSlider from './styled-components/TestimonialSlider'
import MeetYourTeam from './sections/MeetYourTeam'
import ContactForm from './styled-components/ContactForm'

const App = () => {
    return (
        <Theme>
            <GlobalStyles />
            <Hero />
            <HowWeHelp />
            <WhatWeOffer />
            <OurProcess />
            <OurResults />
            <TestimonialSlider />
            <MeetYourTeam />
            <ContactForm />
        </Theme>
    )
}

export default App
