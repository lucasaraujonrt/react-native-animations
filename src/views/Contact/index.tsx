import React from 'react';
import { Linking } from 'react-native';

import Github from '@mobile/assets/svg/components/contact/ic_github.svg';
import Linkedin from '@mobile/assets/svg/components/contact/ic_linkedin.svg';
import Mail from '@mobile/assets/svg/components/contact/ic_mail.svg';
import Npm from '@mobile/assets/svg/components/contact/ic_npm.svg';
import Site from '@mobile/assets/svg/components/contact/ic_site.svg';
import Twitter from '@mobile/assets/svg/components/contact/ic_twitter.svg';
import { Header, HyperComponent } from '@mobile/components';
import { links } from '@mobile/config';
import theme from '@mobile/theme';

import {
  Container,
  Row,
  Circle,
  Me,
  Float,
  TextFloat,
  MyLove,
  Pressable,
  WrapperIcons,
  Top,
  Bottom,
} from './styles';

const Contact = () => (
  <HyperComponent backgroundColor={theme.colors.background}>
    <Header title="Contact" />
    <Container>
      <Row style={{ marginBottom: 32 }}>
        <Top>
          <WrapperIcons>
            <Linkedin />
          </WrapperIcons>
        </Top>
        <WrapperIcons>
          <Github />
        </WrapperIcons>
        <Top>
          <WrapperIcons>
            <Mail />
          </WrapperIcons>
        </Top>
      </Row>
      <Circle>
        <Me />
      </Circle>
      <Row style={{ marginTop: 32 }}>
        <Bottom>
          <WrapperIcons>
            <Npm />
          </WrapperIcons>
        </Bottom>
        <WrapperIcons>
          <Twitter />
        </WrapperIcons>
        <Bottom>
          <WrapperIcons>
            <Site />
          </WrapperIcons>
        </Bottom>
      </Row>
    </Container>
    <Float>
      <TextFloat>Designed by</TextFloat>
      <Pressable onPress={() => Linking.openURL(links.myLove)}>
        <MyLove>Júlia Peixoto</MyLove>
      </Pressable>
    </Float>
  </HyperComponent>
);

export default Contact;
