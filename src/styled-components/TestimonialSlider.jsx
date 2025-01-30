import React, { useRef, useEffect } from 'react'
import styled from 'styled-components'

const SliderContainer = styled.div`
    overflow: hidden;
    width: 100%;
    position: relative;
    background: #fff;
    padding: 0 60px;
`

const SliderTrack = styled.div`
    display: flex;
    width: max-content;
    gap: 1.5rem;
    position: relative;
    animation: slide ${(props) => props.$duration}s linear infinite;

    @keyframes slide {
        0% {
            transform: translateX(0);
        }
        100% {
            transform: translateX(-50%);
        }
    }
`

const TestimonialCard = styled.div`
    background-color: #fff2f3;
    padding: 2rem;
    border-radius: 1rem;
    width: 395px;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 2.5rem;

    img {
        width: 36.5px;
    }
`

const Attribution = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
`

const Quote = styled.p`
    font-size: 2rem;
    font-weight: 700;
    line-height: 1;
    color: #2b3746;
    letter-spacing: -0.96px;
    display: grid;
    justify-content: start;
    align-items: start;
`

const Author = styled.p`
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.32;
    color: #2b3746;
`

const Designation = styled.p`
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 1.32;
    color: #2b3746;
`

const testimonials = [
    {
        id: 1,
        name: 'Eben Cole',
        quote: 'HKW has done wonders for my business."',
        designation: 'Cole Music Co.',
    },
    {
        id: 2,
        name: 'Jonathan Birnhaum',
        quote: 'The whole HKW team was fantastic to work with!"',
        designation: 'Executive Director at ISL',
    },
    {
        id: 3,
        name: 'Nancy Janzen',
        quote: 'We are grateful we selected HKW..."',
        designation: 'CEO at Maplewood',
    },
    {
        id: 4,
        name: 'Melissa D.',
        quote: 'They exceeded our expectations in every way."',
        designation: 'Executive',
    },
    {
        id: 5,
        name: 'Melissa Huggins',
        quote: 'We can’t recommend HKW highly enough."',
        designation: 'Executive Director at Spokane Arts',
    },
    {
        id: 6,
        name: 'Blaise Yen',
        quote: 'HKW was a real pleasure to work with."',
        designation: 'Digital Marketing Manager at Thermo Fisher',
    },
    {
        id: 7,
        name: 'Paul Sebastin',
        quote: 'We are thrilled with the results."',
        designation: 'CEO AT SQORD',
    },
    {
        id: 8,
        name: 'Julia Cohen Sebastien',
        quote: 'HKW has been an incredibly thoughtful partner."',
        designation: 'Co-Founder and CEO at Grayce',
    },
    {
        id: 9,
        name: 'Ryan Kerrigan',
        quote: 'They were extremely quick and put out an incredible product."',
        designation: 'FOUNDER & EXECUTIVE DIRECTOR AT PEAK7',
    },
]

const TestimonialSlider = () => {
    const sliderRef = useRef(null)

    useEffect(() => {
        const slider = sliderRef.current
        if (!slider) return

        const totalWidth = slider.scrollWidth / 2
        const duration = testimonials.length * 6

        slider.style.animationDuration = `${duration}s`
    }, [testimonials])

    const handleMouseEnter = () => {
        if (sliderRef.current) {
            sliderRef.current.style.animationPlayState = 'paused'
        }
    }

    const handleMouseLeave = () => {
        if (sliderRef.current) {
            sliderRef.current.style.animationPlayState = 'running'
        }
    }

    return (
        <SliderContainer>
            <SliderTrack
                ref={sliderRef}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                $duration={testimonials.length * 6}
            >
                {[...testimonials, ...testimonials].map(
                    (testimonial, index) => (
                        <TestimonialCard key={index}>
                            <img src='/quote.svg' alt='quote' />
                            <Quote>{testimonial.quote}</Quote>
                            <Attribution>
                                <Author>{testimonial.name}</Author>
                                <Designation>
                                    {testimonial.designation}
                                </Designation>
                            </Attribution>
                        </TestimonialCard>
                    )
                )}
            </SliderTrack>
        </SliderContainer>
    )
}

export default TestimonialSlider
