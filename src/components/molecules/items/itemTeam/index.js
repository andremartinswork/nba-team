import React from 'react';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';

import {
  Content,
  Label,
  Icon,
  Item,
} from '../styles';

function ItemTeam({
  id,
  full_name,
}) {
  return (
    <Item>
      <Link href={`/teams/${id}`}>
        <a>
          <Content>
            <Label>
              {full_name}
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

export default ItemTeam;