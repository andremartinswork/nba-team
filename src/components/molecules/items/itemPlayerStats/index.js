import React from 'react';
import moment from 'moment';
import { GiTrophyCup } from 'react-icons/gi';

import {
  RowPlayerStats,
  Row,
  Title,
  Flex,
  Column,
  Label,
  Text,
  Icon
} from './styles';

function ItemPlayerStats(props) {
  const {
    ast,
    blk,
    dreb,
    fg3_pct,
    fg3a,
    fg3m,
    fg_pct,
    fga,
    fgm,
    ft_pct,
    fta,
    ftm,
    game,
    min,
    oreb,
    pf,
    pts,
    reb,
    stl,
    turnover,
    player,
    team
  } = props;

  function RenderColumn(label, value, orange, blue) {
    if (value) {
      return (
        <Column>
          <Label orange={orange} blue={blue}>
            {label}
          </Label>
          <Text>
            {value}
          </Text>
        </Column>
      )
    }
    return null
  }

  function CheckIfWinTheGame(teamId, visitorTeamId, visitorTeamScore, homeTeamId, homeTeamScore) {
    if (teamId === visitorTeamId) {
      if (visitorTeamScore > homeTeamScore) {
        <Icon><GiTrophyCup /></Icon>
      }
    }
    else if (teamId === homeTeamId) {
      if (homeTeamScore > visitorTeamScore) {
        <Icon><GiTrophyCup /></Icon>
      }
    }
    return null
  }

  return (
    <RowPlayerStats>
      <Row>
        <Title orange>
          PLAYER STATS on game: {game.id}
        </Title>
        <Flex>
          {RenderColumn('ast', ast)}
          {RenderColumn('blk', blk)}
          {RenderColumn('dreb', dreb)}
          {RenderColumn('fg3 pct', fg3_pct)}
          {RenderColumn('fg pct', fg_pct)}
          {RenderColumn('fg3a', fg3a)}
          {RenderColumn('fg3m', fg3m)}
          {RenderColumn('fga', fga)}
          {RenderColumn('fgm', fgm)}
          {RenderColumn('fta', fta)}
          {RenderColumn('ft pct', ft_pct)}
          {RenderColumn('ftm', ftm)}
          {RenderColumn('min', min)}
          {RenderColumn('oreb', oreb)}
          {RenderColumn('pf', pf)}
          {RenderColumn('pts', pts)}
          {RenderColumn('reb', reb)}
          {RenderColumn('stl', stl)}
          {RenderColumn('turnover', turnover)}
        </Flex>
      </Row>
      <Row>
        <Title blue>
          GAME STATS
        </Title>
        <Flex>
          {RenderColumn('ID', team.id)}
          {RenderColumn('date', moment(game.date).format('DD/MM/YYYY'))}
          {RenderColumn('period', game.period)}
          {RenderColumn('season', game.season)}
          {RenderColumn('HOME TEAM SCORE', game.home_team_score)}
          {RenderColumn('VISITOR TEAM SCORE', team.visitor_team_score)}
        </Flex>
        {CheckIfWinTheGame(player.team_id, game.visitor_team_id, game.visitor_team_score, game.home_team_id, game.home_team_score)}
      </Row>
    </RowPlayerStats>
  )
}

export default ItemPlayerStats;