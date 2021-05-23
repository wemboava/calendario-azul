import { CSSProperties, FC, memo } from 'react'
import { useDrag } from 'react-dnd'

const style: CSSProperties = {
  color: "#000",
  textShadow: '0px 0px 1px #000',
  padding: ".4rem",
  textAlign: "center",
  fontSize: "3.8rem",
  fontWeight: 'bold',
  cursor: 'move',
}

export interface BoxProps {
  name: string
  type: string
  isDropped: boolean
}

export const Box: FC<BoxProps> = memo(function Box({ name, type, isDropped }) {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type,
      item: { name },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [name, type],
  )

  return (
    <div ref={drag} role="Box" style={{ ...style, opacity }}>
      {isDropped ? <span style={{ color: '#fff', textShadow: 'none' }}>{name}</span> : name}
    </div>
  )
})
