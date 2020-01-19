import React from 'react';

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
} from '../styles';

function Player(props) {
  const {
    id,
    first_name,
    height_feet,
    height_inches,
    last_name,
    position,
    team,
    weight_pounds,
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

  return (
    <Block withMargin bottom>
      <Row>
        <Title orange>
          {first_name} {last_name}
        </Title>
        <Flex>
          {RenderColumn('ID', id)}
          {RenderColumn('HEIGHT FEET', height_feet)}
          {RenderColumn('HEIGHT INCHES', height_inches)}
          {RenderColumn('POSITION', position)}
          {RenderColumn('WEIGHT POUNDS', weight_pounds)}
        </Flex>
      </Row>
      <Row>
        <Title blue>
          Team
        </Title>
        <Flex>
          {RenderColumn('ID', team.id)}
          {RenderColumn('FULL NAME', team.full_name)}
          {RenderColumn('ABBREVIATION', team.abbreviation)}
          {RenderColumn('CITY', team.city)}
          {RenderColumn('CONFERENCE', team.conference)}
          {RenderColumn('DIVISION', team.division)}
        </Flex>
      </Row>
    </Block>
  )
}

export default Player;