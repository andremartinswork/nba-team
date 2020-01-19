import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

import {
  Content,
  Label,
  Icon,
  Item,
} from '../styles';

function ItemPlayer({
  id,
  first_name,
  last_name,
  locale
}) {
  return (
    <Item>
      <Link href={`/[lang]/players/[id]`} as={`/${locale}/players/${id}`}>
        <a>
          <Content>
            <Label>
              {first_name} {last_name}
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

export default ItemPlayer;