import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useForm } from 'react-hook-form'
import emailjs from '@emailjs/browser'
import Button from './Button'

const ContactContainer = styled.section`
    display: grid;
    border-radius: 80px 80px 0px 0px;
    background: #e81831;
    grid-template-columns: 1fr 1fr;
    padding: 80px 60px;
`

const Header = styled.section`
    margin-inline-end: 140px;

    h3 {
        color: #fff;
        font-size: 64px;
        font-weight: 700;
        line-height: 1.2;
        letter-spacing: -1.28px;
        text-transform: capitalize;
    }
`

const Form = styled.form`
    display: flex;
    background-color: #fff;
    border-radius: 1rem;
    padding: 40px;
    flex-direction: column;
    gap: 0;
    max-height: ${({ isFormSubmitted }) =>
        isFormSubmitted ? '150px' : '100rem'};
    opacity: ${({ isFormSubmitted }) => (isFormSubmitted ? '0' : '1')};
    transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
`

const FormInputContainer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: transparent;
    position: relative;
    margin-bottom: 2.5rem;
    label {
        position: absolute;
        left: 0;
        top: 1rem;
        font-size: 1.389vw;
        @media (max-width: 1439px) {
            font-size: 20px;
        }
        @media (max-width: 600px) {
            font-size: 18px;
        }
        color: #9e9e9e;
        transition: all 0.3s ease;
        pointer-events: none;
        &.shrink {
            color: #fff;
            font-size: 1rem;
            top: -1.5rem;
        }
        &.textarea {
            top: 1.75rem;
            &.shrink {
                top: -0.75rem;
            }
            @media (max-width: 1080px) {
                top: 1.75rem;
                &.shrink {
                    top: -0.75rem;
                }
            }
            @media (max-width: 600px) {
                top: 1.75rem;
                &.shrink {
                    top: -0.5rem;
                }
            }
        }
    }
    .error-message {
        margin-top: 0.5rem;
    }
`

const Label = styled.label`
    width: 100%;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
    color: #9e9e9e;
    transition: color 0.4s ease, font-size 0.4s ease;
    @media (max-width: 600px) {
        font-size: 18px;
        font-weight: 450;
    }
`

const SubmitButton = styled(Button)`
    background-color: ${({ isSubmitting }) =>
        isSubmitting ? '#381831 !important' : 'transparent !important'};
    background-image: ${({ isSubmitting }) =>
        isSubmitting
            ? 'linear-gradient(transparent) !important'
            : 'linear-gradient(transparent 50%, #e81831 50%)'};
    background-repeat: repeat;
    background-size: 100% 200%;
    transition: all 0.3s linear;
    color: ${({ isSubmitting }) => (isSubmitting ? '#fff' : '#e81831')};
    border-radius: 999px;
    border: 1px solid #e81831 !important;
    font-weight: 700 !important;
    font-size: 1rem;
    cursor: ${({ isSubmitting }) => (isSubmitting ? 'not-allowed' : 'pointer')};
    width: fit-content;
    padding-inline: 4rem;
    &:hover {
        color: #fff;
        background-color: unset;
        background-position: 0 100%;
    }
`

const ErrorMessage = styled.span`
    font-size: 0.75rem;
    color: #ff354d;
    font-weight: 450;
    margin-top: 0.5rem;
`

const TextInput = styled.input`
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1.25rem;
    font-weight: 450;
    border-bottom: 1px solid ${(props) => (props.$error ? 'red' : '#000')};
    height: 3rem;
    padding: 0;
    :hover {
        border-bottom: 1px solid ${(props) => (props.$error ? 'red' : '#000')};
    }
    transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out;
    color: #000;
    &:focus {
        outline: none;
    }
`

const TextArea = styled.textarea`
    background-color: transparent;
    border: 1px solid transparent;
    font-size: 1.25rem;
    border-bottom: 1px solid ${(props) => (props.$error ? 'red' : '#9E9E9E')};
    line-height: 1.5;
    padding: 0;
    :hover {
        border-bottom: 1px solid ${(props) => (props.$error ? 'red' : '#000')};
    }
    transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out,
        margin-top 0.4s ease-in-out;
    color: #000;
    resize: none;
    overflow: hidden;
    font-weight: 450;
    &.has-text,
    &:focus {
        margin-top: 1rem;
    }

    &:focus {
        outline: none;
    }
`

const ContactForm = ({ onFormSubmit, isFormSubmitted }) => {
    const [isSent, setIsSent] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        setIsSubmitting(true)
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            organization: data.organization,
            phone: data.phone,
            website: data.website,
            project: data.project,
        }

        emailjs
            .send('HKW_contact_form', 'contact_form', templateParams, {
                publicKey: 'SU5SXRijMIg8MP5Kx',
            })
            .then(() => {
                setIsSent(true)
                setIsSubmitting(false)
                onFormSubmit()
                console.log('email sent')
            })
            .catch((error) => {
                setIsSubmitting(false)
                console.error('error', error)
            })
    }

    const inputValues = watch()

    useEffect(() => {
        const inputContainers = document.querySelectorAll(
            '.form-input-container'
        )
        inputContainers.forEach((container) => {
            const input = container.querySelector('input, textarea')
            const label = container.querySelector('label')
            if (input && label) {
                const addShrinkClass = () => label.classList.add('shrink')
                const removeShrinkClass = () => {
                    if (!input.value && !input.matches(':focus')) {
                        label.classList.remove('shrink')
                    }
                }

                input.addEventListener('focus', addShrinkClass)
                input.addEventListener('blur', removeShrinkClass)

                if (input.value || input.matches(':focus')) {
                    label.classList.add('shrink')
                } else {
                    label.classList.remove('shrink')
                }

                return () => {
                    input.removeEventListener('focus', addShrinkClass)
                    input.removeEventListener('blur', removeShrinkClass)
                }
            }
        })
    }, [inputValues])

    return (
        <ContactContainer id='contact'>
            <Header>
                <h3>Reach More of Your Spokane Customers!</h3>
            </Header>
            <Form
                isFormSubmitted={isFormSubmitted}
                onSubmit={handleSubmit(onSubmit)}
            >
                {errors.productType && (
                    <ErrorMessage>This is required</ErrorMessage>
                )}
                <FormInputContainer className='form-input-container'>
                    <Label>What's your name?</Label>
                    <TextInput
                        defaultValue=''
                        $error={!!errors.name}
                        {...register('name', { required: true })}
                    />
                    {errors.name && (
                        <ErrorMessage className='error-message'>
                            This is required
                        </ErrorMessage>
                    )}
                </FormInputContainer>
                <FormInputContainer className='form-input-container'>
                    <Label>What organization do you work with?</Label>
                    <TextInput
                        defaultValue=''
                        $error={!!errors.organization}
                        {...register('organization')}
                    />
                </FormInputContainer>
                <FormInputContainer className='form-input-container'>
                    <Label>Email</Label>
                    <TextInput
                        defaultValue=''
                        $error={!!errors.email}
                        {...register('email', {
                            required: 'Email is required',
                            pattern: {
                                value: /\S+@\S+\.\S+/,
                                message:
                                    'Entered value does not match email format',
                            },
                        })}
                        aria-invalid={errors.email ? 'true' : 'false'}
                    />
                    {errors.email && (
                        <ErrorMessage className='error-message'>
                            Entered value does not match email format
                        </ErrorMessage>
                    )}
                </FormInputContainer>
                <FormInputContainer className='form-input-container'>
                    <Label>Phone</Label>
                    <TextInput
                        defaultValue=''
                        $error={!!errors.phone}
                        {...register('phone')}
                    />
                </FormInputContainer>
                <FormInputContainer className='form-input-container'>
                    <Label>Do you have a website?</Label>
                    <TextInput
                        defaultValue=''
                        $error={!!errors.website}
                        {...register('website')}
                    />
                </FormInputContainer>
                <FormInputContainer className='form-input-container'>
                    <Label className='textarea'>
                        Tell us about your project
                    </Label>
                    <TextArea
                        defaultValue=''
                        $error={!!errors.project}
                        {...register('project', { required: true })}
                    />
                    {errors.project && (
                        <ErrorMessage className='error-message'>
                            This is required
                        </ErrorMessage>
                    )}
                </FormInputContainer>
                <SubmitButton
                    paddingInline='60px'
                    className='action'
                    type='submit'
                    isSubmitting={isSubmitting}
                >
                    {isSubmitting ? 'Sending...' : "Let's Chat"}
                </SubmitButton>
            </Form>
        </ContactContainer>
    )
}

export default ContactForm
