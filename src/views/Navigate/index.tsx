import { FC } from 'react'
import { NavLink } from 'react-router-dom'
import { Box } from '@chakra-ui/react'
import style from './style/index.module.scss'
import { ROUTER_PATHS } from '@/utils/const'

const Links = [
  {
    title: 'Студенты',
    rout: ROUTER_PATHS.MAIN
  },
  {
    title: 'Группы',
    rout: ROUTER_PATHS.GROUP
  },
  {
    title: 'Преподаватели',
    rout: ROUTER_PATHS.COLLEAGUE
  },
  {
    title: 'Учебные планы',
    rout: ROUTER_PATHS.PREPARATION_PLAN_LIST
  },
  {
    title: 'Специальности',
    rout: ROUTER_PATHS.SPECIALITY_LIST
  }
]

const Navigate: FC = () => {
  return (
    <Box display='flex' flexDirection='column'>
      {Links.map(({ title, rout }, i) => (
        <NavLink
          style={{
            padding: '10px 0 10px 10px',
            fontSize: '18px'
          }}
          className={({ isActive }) =>
            isActive ? style['link--active'] : style.link}
          key={i}
          to={rout}
        >
          {title}
        </NavLink>
      ))}
    </Box>
  )
}

export default Navigate
