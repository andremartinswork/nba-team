import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import {
  List,
  Header,
  Items,
} from './styles';

import {
  H4
} from '../../../atoms';

import {
  ItemGame,
} from '../../../molecules';

import data from './data.json';

function ListGames(props) {
  const games = data.data;

  const {
    columns,
    item,
  } = props;

  function RenderHeaderColumns() {
    if (columns && columns.length > 0) {
      return (
        <Header>
          {
            columns.map((column, index) => (
              <Column width={column.size} key={String(index)}>
                <H4>
                  {column.label}
                </H4>
              </Column>
            ))
          }
        </Header>
      )
    }
    return null;
  }

  return (
    <List>
      {RenderHeaderColumns()}
      <Items>
        {
          games.map(game => (
            <item 
              key={String(game.id)}
              {...game}
            />
          ))
        }
      </Items>
    </List>
  )
}

export default ListGames;

const Column = styled.div`
  width: ${({ width }) => width};
`;

