import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

const ContactContainer = styled.section`
    display: grid;
    border-radius: 80px 80px 0px 0px;
    background: var(--color-hkw-red);
    grid-template-columns: 1fr 1fr;
    padding: var(--space-10) var(--space-9);

    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: var(--space-7) var(--space-5);
    }
`

const Header = styled.section`
    margin-inline-end: 140px;

    h3 {
        color: var(--color-white);
        font-size: var(--font-size-heading1);
        font-weight: var(--font-weight-bold);
        line-height: var(--line-height-heading1);
        letter-spacing: var(--letter-spacing-heading1);
        text-transform: capitalize;
    }

    @media (max-width: 768px) {
        margin-inline-end: 0;
        margin-bottom: var(--space-7);
    }
`

const Form = styled.form`
    width: 100%;
    display: flex;
    background-color: var(--color-white);
    border-radius: var(--radius-large);
    padding: var(--space-7);
    flex-direction: column;
    transition: opacity 0.5s ease-in-out;
`

const FormInputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    background: transparent;
    margin-bottom: var(--space-7);

    label {
        position: absolute;
        left: 0;
        top: -10px;
        font-size: 1.389vw;
        font-size: ${(props) => (props.shrink ? '1rem' : '1.389vw')};

        top: ${(props) => (props.shrink ? '-1.5rem' : '-10px')};
        color: #9e9e9e;
        transition: all 0.3s ease;
        pointer-events: none;
    }

    label:has(+ textarea) {
        top: ${(props) => (props.shrink ? '-.75rem' : '.75rem')};

        @media (max-width: 1080px) {
            top: ${(props) => (props.shrink ? '-.75rem' : '.75rem')};
        }
        @media (max-width: 600px) {
            top: ${(props) => (props.shrink ? '-.5rem' : '.75rem')};
        }
    }
`

const TextInput = styled.input`
    background: transparent;
    border: 1px solid transparent;
    font-size: var(--font-size-body);
    // height: var(--space-8);
    padding: 0;
    border-bottom: 1px solid
        ${(props) => (props.$error ? 'var(--color-hkw-red)' : '#9e9e9e')};
    transition: border-color 0.4s ease-in-out;
    color: var(--color-black);

    &:hover {
        border-bottom: 1px solid
            ${(props) =>
                props.$error ? 'var(--color-hkw-red)' : 'var(--color-black)'};
    }

    &:focus {
        outline: none;
    }
`

const TextArea = styled.textarea`
    background-color: transparent;
    border: 1px solid transparent;
    border-bottom: 1px solid
        ${(props) => (props.$error ? 'var(--color-hkw-red)' : '#9e9e9e')};
    font-size: var(--font-size-body);
    padding: 0;
    transition: border-color 0.4s ease-in-out, padding 0.4s ease-in-out,
        margin-top 0.4s ease-in-out;
    resize: none;
    height: var(--space-8);
    overflow: hidden;

    &.has-text,
    &:focus {
        margin-top: var(--space-3);
    }

    &:focus {
        outline: none;
    }
`

const SubmitButton = styled.button`
    background-color: transparent;
    background: linear-gradient(transparent 50%, var(--color-hkw-red) 50%);
    background-repeat: repeat;
    background-size: 100% 200%;
    color: var(--color-black);
    text-transform: uppercase;
    border: 1px solid var(--color-hkw-red);
    border-radius: var(--radius-button);
    font-weight: var(--font-weight-bold);
    font-size: var(--font-size-body2);
    width: fit-content;
    padding: var(--space-4) var(--space-10);
    transition: all 0.45s linear;
    cursor: pointer;
    line-height: var(--line-height-eyebrow);

    &:hover {
        color: var(--color-white);
        background-color: transparent;
        background-position: 0 100%;
    }

    ${({ isSubmitting }) =>
        isSubmitting &&
        `
            background-color: var(--color-hkw-red);
            background: linear-gradient(transparent);
            color: var(--color-white);
            cursor: not-allowed;
            &:hover {
                background-position: unset;
            }
        `}
`
const ErrorMessage = styled.span`
    font-size: 0.75rem;
    color: var(--color-hkw-red);
    font-weight: 450;
    position: absolute;
    top: 28px;
`

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedInput, setFocusedInput] = useState(null)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
    } = useForm()
    const formRef = useRef()

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        const templateParams = {
            from_name: data.name,
            from_email: data.email,
            organization: data.organization,
            phone: data.phone,
            website: data.website,
            project: data.project,
        }

        try {
            await emailjs.send(
                'HKW_contact_form',
                'HKW_marketing_form',
                templateParams,
                import.meta.env.VITE_EMAILJS_PK
            )
            console.log('Email sent successfully')
        } catch (error) {
            console.error('Failed to send email', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (e, name) => {
        setValue(name, e.target.value, { shouldValidate: true })
    }

    return (
        <ContactContainer id='contact'>
            <Header>
                <h3>Reach More Of Your Spokane Customers!</h3>
            </Header>
            <Form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
                {[
                    'name',
                    'organization',
                    'email',
                    'phone',
                    'website',
                    'project',
                ].map((field) => (
                    <FormInputContainer
                        key={field}
                        shrink={!!watch(field) || focusedInput === field}
                    >
                        <label htmlFor={field}>
                            {field === 'name'
                                ? "What's your name?"
                                : field === 'organization'
                                ? 'What organization do you work with?'
                                : field === 'website'
                                ? 'Do you have a website?'
                                : field === 'project'
                                ? 'Tell us about your project'
                                : field.charAt(0).toUpperCase() +
                                  field.slice(1)}
                        </label>
                        {field !== 'project' ? (
                            <TextInput
                                id={field}
                                type={
                                    field === 'email'
                                        ? 'email'
                                        : field === 'phone'
                                        ? 'tel'
                                        : 'text'
                                }
                                $error={!!errors[field]}
                                {...register(field, {
                                    required: `${
                                        field.charAt(0).toUpperCase() +
                                        field.slice(1)
                                    } is required`,
                                })}
                                onChange={(e) => handleInputChange(e, field)}
                                onFocus={() => setFocusedInput(field)}
                                onBlur={() => setFocusedInput(null)}
                            />
                        ) : (
                            <TextArea
                                id={field}
                                type='textarea'
                                $error={!!errors[field]}
                                {...register(field, {
                                    required: 'Project is required',
                                })}
                                onChange={(e) => handleInputChange(e, field)}
                                onFocus={() => setFocusedInput(field)}
                                onBlur={() => setFocusedInput(null)}
                            />
                        )}
                        {errors[field] && (
                            <ErrorMessage className='error-msg'>
                                {errors[field].message}
                            </ErrorMessage>
                        )}
                    </FormInputContainer>
                ))}
                <SubmitButton type='submit' isSubmitting={isSubmitting}>
                    {isSubmitting ? 'Sending...' : "Let's Chat"}
                </SubmitButton>
            </Form>
        </ContactContainer>
    )
}

export default ContactForm
