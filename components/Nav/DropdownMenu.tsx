import { SidebarLinkGroup } from '@components/Layout'
import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'

interface DropdownMenuProps {
  label: string
  icon?: React.ReactNode
  selected?: boolean
  children: React.ReactNode
}

export const DropdownMenu = ({
  label,
  icon = <FontAwesomeIcon icon={faSquareMinus} />,
  selected,
  children,
}: DropdownMenuProps) => {
  return (
    <SidebarLinkGroup activecondition={selected}>
      {(handleClick, open) => {
        return (
          <React.Fragment>
            <a
              href="#0"
              className={`block truncate transition duration-150 ${
                selected ? 'text-blue-500 hover:text-blue-700' : 'text-slate-900 hover:text-blue-700'
              }`}
              onClick={e => {
                e.preventDefault()
                handleClick()
              }}>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  {icon}
                  <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
                    {label}
                  </span>
                </div>
                {/* Icon */}
                <div className="flex shrink-0 ml-2">
                  <svg
                    className={`w-3 h-3 shrink-0 ml-1 fill-current text-slate-400 ${open && 'transform rotate-180'}`}
                    viewBox="0 0 12 12">
                    <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
                  </svg>
                </div>
              </div>
            </a>
            <div className="lg:hidden lg:sidebar-expanded:block 2xl:block">
              <ul className={`pl-9 mt-2 ${!open && 'hidden'}`}>{children}</ul>
            </div>
          </React.Fragment>
        )
      }}
    </SidebarLinkGroup>
  )
}
