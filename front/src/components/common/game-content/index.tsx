import { FC, useState, useCallback, memo } from 'react'
import { Dustbin } from './dustbin'
import { Box } from './box'
import update from 'immutability-helper'

interface DustbinState {
  accepts: string[]
  lastDroppedItem: any
}

interface BoxState {
  name: string
  type: string
}

export interface DustbinSpec {
  accepts: string[]
  lastDroppedItem: any
}
export interface BoxSpec {
  name: string
  type: string
}
export interface ContainerState {
  droppedBoxNames: string[]
  dustbins: DustbinSpec[]
  boxes: BoxSpec[]
}

const ItemTypes = {
  FOOD: 'food',
  GLASS: 'glass',
  PAPER: 'paper',
}

export const Container: FC = memo(function Container() {
  const [dustbins, setDustbins] = useState<DustbinState[]>([
    { accepts: ['P'], lastDroppedItem: null },
    { accepts: ['R'], lastDroppedItem: null },
    { accepts: ['A'], lastDroppedItem: null },
    { accepts: ['I'], lastDroppedItem: null },
    { accepts: ['A'], lastDroppedItem: null },
  ])

  const [boxes] = useState<BoxState[]>([
    { name: 'A', type: 'A' },
    { name: 'P', type: 'P' },
    { name: 'I', type: 'I' },
    { name: 'A', type: 'A' },
    { name: 'R', type: 'R' },
  ])

  const [droppedBoxNames, setDroppedBoxNames] = useState<string[]>([])

  function isDropped(boxName: string) {
    return droppedBoxNames.indexOf(boxName) > -1
  }

  const handleDrop = useCallback(
    (index: number, item: { name: string }) => {
      const { name } = item
      setDroppedBoxNames(
        update(droppedBoxNames, name ? { $push: [name] } : { $push: [] }),
      )
      setDustbins(
        update(dustbins, {
          [index]: {
            lastDroppedItem: {
              $set: item,
            },
          },
        }),
      )
    },
    [droppedBoxNames, dustbins],
  )

  return (
    <div>
      <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'space-between' }}>
        {dustbins.map(({ accepts, lastDroppedItem }, index) => (
          <Dustbin
            accept={accepts}
            lastDroppedItem={lastDroppedItem}
            onDrop={(item) => handleDrop(index, item)}
            key={index}
          />
        ))}
      </div>

      <div style={{ overflow: 'hidden', display: 'flex', justifyContent: 'space-between' }}>
        {boxes.map(({ name, type }, index) => (
          <Box
            name={name}
            type={type}
            isDropped={isDropped(name)}
            key={index}
          />
        ))}
      </div>
    </div>
  )
})

export default Container