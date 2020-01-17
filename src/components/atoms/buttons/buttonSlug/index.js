import React from 'react';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

import {
  Button,
  Content,
  Text,
  Icon,
} from './styles';

function ButtonSlug(props) {
  const {
    text,
    slug,
  } = props;

  return (
    <Link href={slug}>
      <Button>
        <Content>
          <Text>
            {text}
          </Text>
          <Icon>
            <IoIosArrowRoundForward />
          </Icon>
        </Content>
      </Button>
    </Link>
  )
}

export default ButtonSlug;