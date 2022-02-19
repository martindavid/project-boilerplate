import { faCircleDot } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface DropdownMenuItemProps {
  label: string
  href: string
  selected?: boolean
}

export const DropdownMenuItem = ({ label, href, selected = false }: DropdownMenuItemProps) => {
  return (
    <li className="mb-1 last:mb-0">
      <Link href={href}>
        <a className="block text-slate-800 hover:text-blue-500 transition duration-150 truncate">
          <span className="text-sm font-medium lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
            {label}
            {selected && (
              <div className="ml-2 text-[10px] inline-block">
                <FontAwesomeIcon icon={faCircleDot} />
              </div>
            )}
          </span>
        </a>
      </Link>
    </li>
  )
}
