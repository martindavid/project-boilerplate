import { DropdownMenu, DropdownMenuItem,MenuItem } from '@components/Nav'
import { faCog,faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useRouter } from 'next/router'

export const Menu = () => {
  const router = useRouter()
  const pathName = router.asPath

  return (
    <ul className="mt-3">
      <MenuItem label="Home" href="/" icon={<FontAwesomeIcon icon={faHome} />} selected={pathName === '/'} />
      <DropdownMenu label="Settings" icon={<FontAwesomeIcon icon={faCog} />} selected={pathName.includes('settings')}>
        <DropdownMenuItem label="Account" href="/settings/account" selected={pathName === '/settings/account'} />
        <DropdownMenuItem label="System" href="/settings/system" selected={pathName === '/settings/system'} />
      </DropdownMenu>
    </ul>
  )
}
