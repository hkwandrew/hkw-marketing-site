import { useEffect, useState } from 'react'
import styled from '@emotion/styled'

const Cursor = styled.div`
    position: fixed;
    width: var(--space-7)
    height: var(--space-7);
    margin-left: -(var(--space-4));
    margin-top: -(var(--space-4));
    border-radius: 50%;
	border: 2px solid #16a085;
	transition: transform 0.3s ease;
	transform-origin: center center;
	pointer-events: none;
	z-index: var(--z-index-modal);

	&.grow {
		transform: scale(10);
		background: var(--white);
		mix-blend-mode: difference;
		border: none;
	}

	&.grow-small {
		transform: scale(2.5);
		background: var(--white);
		mix-blend-mode: difference;
		border: none;
	}
`

const StyledCursor = ({ className }) => {
    const [mouseX, setMouseX] = useState(0)
    const [mouseY, setMouseY] = useState(0)
    const [isHovered, setIsHovered] = useState(false)
    const [isSmall, setIsSmall] = useState(false)

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setMouseX(e.clientX)
            setMouseY(e.clientY)
        }

        window.addEventListener('mousemove', updateCursorPosition)

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition)
        }
    }, [])

    const handleMouseEnter = (isSmall) => {
        setIsHovered(true)
        setIsSmall(isSmall)
    }

    const handleMouseLeave = () => {
        setIsHovered(false)
        setIsSmall(false)
    }

    return (
        <Cursor
            style={{ left: mouseX, top: mouseY }}
            className={`${isHovered ? (isSmall ? 'grow-small' : 'grow') : ''}`}
        />
    )
}

export default StyledCursor
