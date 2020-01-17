import React from 'react';
import Link from 'next/link';

import {
  Aside,
  Logo,
  Nav,
  NavLink,
  Icon,
  Text,
} from './styles';

import { MdDashboard } from 'react-icons/md';
import { GiBabyfootPlayers } from 'react-icons/gi';
import { FaBasketballBall } from 'react-icons/fa';
import { AiOutlineTeam } from 'react-icons/ai';
import { IoMdStats } from 'react-icons/io';

function Sidebar() {
  return (
    <Aside>
      <Logo>
        NBA TEAM
      </Logo>
      <Nav>

        {/* DASHBOARD */}
        {/* <NavLink active={true}>
          <Link href="/">
            <a>
              <Icon>
                <MdDashboard />
              </Icon>
              <Text>Dashboard</Text>
            </a>
          </Link>
        </NavLink> */}

        {/* GAMES */}
        <NavLink>
          <Link href="/games">
            <a>
              <Icon>
                <FaBasketballBall />
              </Icon>
              <Text>Games</Text>
            </a>
          </Link>
        </NavLink>

        {/* TEAMS */}
        <NavLink>
          <Link href="/teams">
            <a>
              <Icon>
                <GiBabyfootPlayers />
              </Icon>
              <Text>Teams</Text>
            </a>
          </Link>
        </NavLink>

        {/* PLAYERS */}
        <NavLink>
          <Link href="/players">
            <a>
              <Icon>
                <AiOutlineTeam />
              </Icon>
              <Text>Players</Text>
            </a>
          </Link>
        </NavLink>

        {/* STATS */}
        {/* <NavLink>
          <Link href="/stats">
            <a>
              <Icon>
                <IoMdStats />
              </Icon>
              <Text>Stats</Text>
            </a>
          </Link>
        </NavLink> */}
      </Nav>
    </Aside>
  )
}

export default Sidebar;