import { CSSProperties, FC, memo } from "react";
import { useDrop } from "react-dnd";

const style: CSSProperties = {
  color: "#fff",
  textShadow: '0px 0px 1px #000',
  padding: ".4rem",
  textAlign: "center",
  fontSize: "3.8rem",
  fontWeight: 'bold',
};

export interface DustbinProps {
  accept: string[];
  lastDroppedItem?: any;
  onDrop: (item: any) => void;
}

export const Dustbin: FC<DustbinProps> = memo(function Dustbin({
  accept,
  lastDroppedItem,
  onDrop
}) {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: onDrop,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const isActive = isOver && canDrop;
  let backgroundColor = "#fff";
  let color = lastDroppedItem ? '#000' : '#fff'
  if (isActive) {
    backgroundColor = "#2196f32e";
  } else if (canDrop) {
    backgroundColor = "#2196f32e";
  }

  return (
    <div ref={drop} role="Dustbin" style={{ ...style, backgroundColor, color }}>
      {accept}

      {/* {lastDroppedItem && (
        <p>Last dropped: {JSON.stringify(lastDroppedItem)}</p>
      )} */}
    </div>
  );
});
