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

function Team(props) {
  const {
    id,
    abbreviation,
    city,
    conference,
    division,
    full_name,
    name,
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
          {full_name}
        </Title>
        <Flex>
          {RenderColumn('ID', id)}
          {RenderColumn('NAME', name)}
          {RenderColumn('ABBREVIATION', abbreviation)}
          {RenderColumn('CITY', city)}
          {RenderColumn('CONFERENCE', conference)}
          {RenderColumn('DIVISION', division)}
        </Flex>
      </Row>
    </Block>
  )
}

export default Team;