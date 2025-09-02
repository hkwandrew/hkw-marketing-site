import React, { useState, useRef, useEffect, useCallback } from 'react'
import styled from '@emotion/styled'
import emailjs from '@emailjs/browser'
import { useForm } from 'react-hook-form'

const ContactContainer = styled.section`
    display: grid;
    border-radius: 80px 80px 0px 0px;
    background: var(--color-hkw-red);
    grid-template-columns: 1fr 1fr;
    gap: 8.75rem;
    padding: var(--space-10) var(--space-9);

    @media (max-width: 768px) {
        gap: unset;
        grid-template-columns: 1fr !important;
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

        @media (max-width: 1080px) {
            font-size: 2rem;
            letter-spacing: var(--letter-spacing-heading2);
        }
    }

    @media (max-width: 768px) {
        text-align: center;
        margin-inline-end: 0px;
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
    gap: 8px;

    @media (max-width: 768px) {
        padding: var(--space-7) var(--space-5);
    }
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
        font-size: 1.125rem;
        font-size: ${(props) => (props.shrink ? '.875rem' : '1.125rem')};

        top: ${(props) => (props.shrink ? '-1.5rem' : '-10px')};
        color: rgb(117,117,117);
        transition: all 0.3s ease;
        pointer-events: none;

        @media (max-width: 768px) {
            top: ${(props) => (props.shrink ? '-1.5rem' : '-1.5rem')};
            font-size: 1rem;

            &[for='organization'] {
                font-size: 0.9rem;
            }
        }
    }

    label:has(+ textarea) {
        top: ${(props) => (props.shrink ? '-1.5rem' : '.75rem')};

        @media (max-width: 768px) {
            top: ${(props) => (props.shrink ? '-1.5rem' : '-1.5rem')};
        }
    }
`

const TextInput = styled.input`
    background: transparent;
    border: 1px solid transparent;
    font-size: var(--font-size-body);
    padding: 0;
    border-bottom: 1px solid
        ${(props) => (props.$error ? 'var(--color-hkw-red)' : '#9e9e9e')};
    transition: border-color 0.4s ease-in-out;
    color: var(--color-black);

    @media (max-width: 768px) {
        font-size: 1rem;
        height: var(--space-6);
    }

    &:hover {
        border-bottom: 1px solid
            ${(props) =>
                props.$error ? 'var(--color-hkw-red)' : 'var(--color-black)'};
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
    text-wrap: wrap;

    @media (max-width: 768px) {
        height: unset;
        font-size: var(--font-size-body2);
    }

    &.has-text,
    &:focus {
        margin-top: var(--space-3);

        @media (max-width: 768px) {
            margin-top: revert;
        }
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

    @media (max-width: 768px) {
        margin-inline: auto;
        width: 100%;
        padding: var(--space-4) 0;
        text-align: center;
    }

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

    &.project-error {
        top: 50px;
    }

    @media (max-width: 768px) {
        top: 32px;

        &.project-error {
            translate: 0 8px;
        }
    }
`
const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

const ModalContent = styled.div`
    background: var(--color-white);
    padding: var(--space-6);
    border-radius: var(--radius-large);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    max-width: 400px;
    position: relative;
`

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 15px;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--color-hkw-red);

    &:hover {
        color: var(--color-black);
    }
`

const ContactForm = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [focusedInput, setFocusedInput] = useState(null)
    const [showModal, setShowModal] = useState(false)
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
        watch,
        reset,
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
                import.meta.env.VITE_EMAILJS_PK,
            )
            console.log('Email sent successfully')

            setShowModal(true)
            reset()

            setTimeout(() => setShowModal(false), 5000)
        } catch (error) {
            console.error('Failed to send email', error)
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleInputChange = (e, name) => {
        setValue(name, e.target.value, { shouldValidate: true })

        if (name === 'project') {
            const textarea = e.target

            textarea.style.height = 'auto'
            textarea.style.height = textarea.scrollHeight + 'px'
        }
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
                            <ErrorMessage
                                className={`error-msg ${
                                    field === 'project' && 'project-error'
                                }`}
                            >
                                {errors[field].message}
                            </ErrorMessage>
                        )}
                    </FormInputContainer>
                ))}
                <SubmitButton type='submit' isSubmitting={isSubmitting}>
                    {isSubmitting ? 'Sending...' : "Let's Chat"}
                </SubmitButton>
            </Form>
            {showModal && (
                <ModalOverlay onClick={() => setShowModal(false)}>
                    <ModalContent onClick={(e) => e.stopPropagation()}>
                        <p>Thank you!</p>
                        <br />
                        <p>Your message has been submitted successfully.</p>
                        <CloseButton onClick={() => setShowModal(false)}>
                            ×
                        </CloseButton>
                    </ModalContent>
                </ModalOverlay>
            )}
        </ContactContainer>
    )
}

export default ContactForm
