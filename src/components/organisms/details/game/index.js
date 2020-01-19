import React from 'react';
import moment from 'moment';
import { GiTrophyCup } from 'react-icons/gi';

import {
  Block,
} from '../../../atoms';

import {
  Row,
  Title,
  Flex,
  Column,
  Label,
  Text,
  Result,
  Icon
} from '../styles';

function Game(props) {
  const {
    date,
    home_team,
    home_team_score,
    season,
    visitor_team,
    visitor_team_score,
  } = props;

  function RenderColumn(label, value, orange, blue) {
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

  return (
    <Block>
      <Row>
        <Title orange>
          HOME TEAM
        </Title>
        <Flex>
          {RenderColumn('ID', home_team.id)}
          {RenderColumn('NAME', home_team.name)}
          {RenderColumn('CITY', home_team.city)}
          {RenderColumn('CONFERENCE', home_team.conference)}
          {RenderColumn('DIVISION', home_team.division)}
          {RenderColumn('CONFERENCE', home_team.conference)}
        </Flex>
        {home_team_score > visitor_team_score && <Icon><GiTrophyCup /></Icon>}
      </Row>
      <Result>
        <Flex>
          {RenderColumn('SEASON', season)}
          {RenderColumn('DATE', moment(date).format('DD/MM/YYYY'))}
          {RenderColumn('HOME TEAM SCORE', home_team_score, true, false)}
          {RenderColumn('VISITOR TEAM SCORE', home_team.id, false, true)}
        </Flex>
      </Result>
      <Row>
        <Title blue>
          VISITOR TEAM
        </Title>
        <Flex>
          {RenderColumn('ID', visitor_team.id)}
          {RenderColumn('NAME', visitor_team.name)}
          {RenderColumn('CITY', visitor_team.city)}
          {RenderColumn('CONFERENCE', visitor_team.conference)}
          {RenderColumn('DIVISION', visitor_team.division)}
          {RenderColumn('CONFERENCE', visitor_team.conference)}
        </Flex>
        {home_team_score < visitor_team_score && <Icon><GiTrophyCup /></Icon>}
      </Row>
    </Block>
  )
}

export default Game;

