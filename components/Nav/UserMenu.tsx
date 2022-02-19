import { Transition } from '@utils/helpers/Transition'
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'

export function UserMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const trigger = useRef<null | HTMLButtonElement>(null)
  const dropdown = useRef<null | HTMLDivElement>(null)

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!dropdownOpen || dropdown?.current?.contains(target as Node) || trigger?.current?.contains(target as Node))
        return
      setDropdownOpen(false)
    }
    document.addEventListener('click', clickHandler)
    return () => document.removeEventListener('click', clickHandler)
  })

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!dropdownOpen || key !== 'Escape') return
      setDropdownOpen(false)
    }
    document.addEventListener('keydown', keyHandler)
    return () => document.removeEventListener('keydown', keyHandler)
  })

  return (
    <div className="relative inline-flex">
      <button
        ref={trigger}
        className="inline-flex justify-center items-center group"
        aria-haspopup="true"
        onClick={() => setDropdownOpen(!dropdownOpen)}
        aria-expanded={dropdownOpen}>
        <img className="w-8 h-8 rounded-full" src="/images/logo.png" width="32" height="32" alt="User" />
        <div className="flex items-center truncate">
          <span className="truncate ml-2 text-sm font-medium group-hover:text-slate-800">Acme Inc.</span>
          <svg className="w-3 h-3 shrink-0 ml-1 fill-current text-slate-400" viewBox="0 0 12 12">
            <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z" />
          </svg>
        </div>
      </button>

      <Transition
        className="origin-top-right z-10 absolute top-full right-0 min-w-44 bg-white border border-slate-200 py-1.5 rounded shadow-lg overflow-hidden mt-1"
        show={dropdownOpen}
        enter="transition ease-out duration-200 transform"
        enterStart="opacity-0 -translate-y-2"
        enterEnd="opacity-100 translate-y-0"
        leave="transition ease-out duration-200"
        leaveStart="opacity-100"
        leaveEnd="opacity-0">
        <div ref={dropdown} onFocus={() => setDropdownOpen(true)} onBlur={() => setDropdownOpen(false)}>
          <div className="pt-0.5 pb-2 px-3 mb-1 border-b border-slate-200">
            <div className="font-medium text-slate-800">Acme Inc.</div>
            <div className="text-xs text-slate-500 italic">Administrator</div>
          </div>
          <ul>
            <li>
              <Link href="/" passHref>
                <a
                  role="button"
                  tabIndex={0}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3">
                  Settings
                </a>
              </Link>
            </li>
            <li>
              <Link href="/signin" passHref>
                <a
                  tabIndex={0}
                  role="button"
                  className="font-medium text-sm text-indigo-500 hover:text-indigo-600 flex items-center py-1 px-3"
                  onClick={() => setDropdownOpen(!dropdownOpen)}>
                  Sign Out
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  )
}
