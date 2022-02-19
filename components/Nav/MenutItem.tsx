import { faSquareMinus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'

interface MenuItemProps {
  label: string
  href: string
  icon?: React.ReactNode
  selected?: boolean
}

export const MenuItem = ({
  label,
  href,
  icon = <FontAwesomeIcon icon={faSquareMinus} />,
  selected = false,
}: MenuItemProps) => {
  return (
    <li className={`px-3 py-2 rounded-sm mb-0.5 last:mb-0 ${selected && 'bg-slate-100'}`}>
      <Link href={href} passHref>
        <a
          className={`block ${
            selected ? 'text-blue-500 hover:text-blue-700' : 'text-slate-900 hover:text-blue-700'
          } truncate transition duration-150`}>
          <div className="flex items-center">
            {icon}
            <span className="text-sm font-medium ml-3 lg:opacity-0 lg:sidebar-expanded:opacity-100 2xl:opacity-100 duration-200">
              {label}
            </span>
          </div>
        </a>
      </Link>
    </li>
  )
}
