import { Card as BpCard } from '@blueprintjs/core'
import { ReactElement } from 'react'

interface Props {
  children: ReactElement
}

export const Card = ({ children }: Props) => <BpCard>{children}</BpCard>