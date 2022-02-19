import React, { useState } from 'react'

interface Props {
  children: (openFunc: () => void, open: boolean) => React.ReactNode | React.ReactChildren
  activecondition?: boolean
}

export const SidebarLinkGroup = ({ children, activecondition = true }: Props) => {
  const [open, setOpen] = useState<boolean>(activecondition)

  const handleClick = () => {
    setOpen(!open)
  }

  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${activecondition && 'bg-slate-100'}`}>
      {children(handleClick, open)}
    </li>
  )
}
