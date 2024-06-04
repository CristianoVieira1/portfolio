import { useCallback, useEffect, useRef } from 'react'
import * as S from './styles'

const CustomCursor = () => {
  const cursorSm = useRef<HTMLDivElement | null>(null)
  const cursorLg = useRef<HTMLDivElement | null>(null)
  const positionRef = useRef({
    mouseX: 0,
    mouseY: 0,
    destinationX: 0,
    destinationY: 0,
    distanceX: 0,
    distanceY: 0,
    key: -1
  })

  const handleMouseMove = useCallback((event: MouseEvent) => {
    const { clientX, clientY } = event

    const mouseX = clientX
    const mouseY = clientY

    if (cursorSm.current && cursorLg.current) {
      positionRef.current.mouseX = mouseX - cursorSm.current.clientWidth / 2
      positionRef.current.mouseY = mouseY - cursorSm.current.clientHeight / 2
      positionRef.current.destinationX = mouseX - cursorLg.current.clientWidth / 2
      positionRef.current.destinationY = mouseY - cursorLg.current.clientHeight / 2
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
    }
  }, [handleMouseMove])

  useEffect(() => {
    const followMouse = () => {
      positionRef.current.key = requestAnimationFrame(followMouse)
      const { mouseX, mouseY, destinationX, destinationY, distanceX, distanceY } = positionRef.current
      if (!destinationX || !destinationY) {
        positionRef.current.destinationX = mouseX
        positionRef.current.destinationY = mouseY
      } else {
        positionRef.current.distanceX = (mouseX - destinationX) * 0.1
        positionRef.current.distanceY = (mouseY - destinationY) * 0.1
        if (Math.abs(positionRef.current.distanceX) + Math.abs(positionRef.current.distanceY) < 0.1) {
          positionRef.current.destinationX = mouseX
          positionRef.current.destinationY = mouseY
        } else {
          positionRef.current.destinationX += distanceX
          positionRef.current.destinationY += distanceY
        }
      }
      if (cursorSm.current && cursorLg.current) {
        cursorSm.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`
        cursorLg.current.style.transform = `translate3d(${positionRef.current.destinationX}px, ${positionRef.current.destinationY}px, 0)`
      }
    }
    followMouse()

    return () => {
      cancelAnimationFrame(positionRef.current.key)
    }
  }, [])

  return (
    <>
      <S.CursorLarge ref={cursorLg} />
      <S.CursorSmall ref={cursorSm} />
    </>
  )
}

export default CustomCursor
