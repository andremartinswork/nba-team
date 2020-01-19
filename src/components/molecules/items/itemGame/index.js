import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

import {
  Content,
  Label,
  Icon,
  Item,
} from '../styles';

function ItemGame({
  id,
  locale,
}) {
  return (
    <Item>
      <Link href={`/[lang]/games/[id]`} as={`/${locale}/games/${id}`}>
        <a>
          <Content>
            <Label>
              {id}
            </Label>
            <Icon>
              <IoIosArrowForward />
            </Icon>
          </Content>
          </a>
      </Link>
    </Item> 
  )
}

export default ItemGame;