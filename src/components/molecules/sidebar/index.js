import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'

import {
  Aside,
  Logo,
  Nav,
  NavLink,
  Icon,
  Text,
} from './styles';

import { GiBabyfootPlayers } from 'react-icons/gi';
import { FaBasketballBall } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';

function Sidebar() {
  const router = useRouter()

  function LinkActive(href) {
    if (router.asPath === href) {
      return true
    }
    return false
  }
  
  return (
    <Aside>
      <Logo>
        NBA TEAM
      </Logo>
      <Nav>
        {/* GAMES */}
        <NavLink active={LinkActive(`/games`)}>
          <Link href="/games" as={`/games`}>
            <a>
              <Icon>
                <FaBasketballBall />
              </Icon>
              <Text>Games</Text>
            </a>
          </Link>
        </NavLink>

        {/* TEAMS */}
        <NavLink active={LinkActive(`/teams`)}>
          <Link href="/teams" as={`/teams`}>
            <a>
              <Icon>
                <GiBabyfootPlayers />
              </Icon>
              <Text>Teams</Text>
            </a>
          </Link>
        </NavLink>

        {/* PLAYERS */}
        <NavLink active={LinkActive(`/players`)}>
          <Link href="/players" as={`/players`}>
            <a>
              <Icon>
                <AiOutlineTeam />
              </Icon>
              <Text>Players</Text>
            </a>
          </Link>
        </NavLink>
      </Nav>
    </Aside>
  )
}

export default Sidebar;