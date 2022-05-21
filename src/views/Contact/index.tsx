import { MotiView } from 'moti';
import React from 'react';
import { Linking } from 'react-native';
import { useDispatch } from 'react-redux';

import Github from '@mobile/assets/svg/components/contact/ic_github.svg';
import Linkedin from '@mobile/assets/svg/components/contact/ic_linkedin.svg';
import Mail from '@mobile/assets/svg/components/contact/ic_mail.svg';
import Npm from '@mobile/assets/svg/components/contact/ic_npm.svg';
import Site from '@mobile/assets/svg/components/contact/ic_site.svg';
import Twitter from '@mobile/assets/svg/components/contact/ic_twitter.svg';
import { Header, HyperComponent } from '@mobile/components';
import { contact, links } from '@mobile/config';
import { navigateToWebView } from '@mobile/store/Web/action';
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

const Contact = () => {
  const dispatch = useDispatch();
  const navigateToWeb = (payload: reducers.WebState) => {
    dispatch(navigateToWebView(payload));
  };

  return (
    <HyperComponent backgroundColor={theme.colors.background}>
      <Header title="Contact" />

      <Container>
        <Row style={{ marginBottom: 32 }}>
          <MotiView
            delay={500}
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <Top>
              <WrapperIcons onPress={() => navigateToWeb(contact.linkedin)}>
                <Linkedin />
              </WrapperIcons>
            </Top>
          </MotiView>
          <MotiView
            delay={600}
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <WrapperIcons onPress={() => navigateToWeb(contact.github)}>
              <Github />
            </WrapperIcons>
          </MotiView>
          <MotiView
            delay={700}
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <Top>
              <WrapperIcons onPress={() => navigateToWeb(contact.mail)}>
                <Mail />
              </WrapperIcons>
            </Top>
          </MotiView>
        </Row>
        <MotiView
          delay={400}
          from={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
        >
          <Circle>
            <Me />
          </Circle>
        </MotiView>
        <Row style={{ marginTop: 32 }}>
          <MotiView
            delay={1000}
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <Bottom>
              <WrapperIcons onPress={() => navigateToWeb(contact.npm)}>
                <Npm />
              </WrapperIcons>
            </Bottom>
          </MotiView>
          <MotiView
            delay={900}
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <WrapperIcons onPress={() => navigateToWeb(contact.twitter)}>
              <Twitter />
            </WrapperIcons>
          </MotiView>
          <MotiView
            delay={800}
            from={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
          >
            <Bottom>
              <WrapperIcons onPress={() => navigateToWeb(contact.site)}>
                <Site />
              </WrapperIcons>
            </Bottom>
          </MotiView>
        </Row>
      </Container>

      <Float>
        <MotiView
          delay={1200}
          from={{
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          style={{
            flexDirection: 'row',
          }}
        >
          <TextFloat>Designed by</TextFloat>
          <Pressable onPress={() => Linking.openURL(links.myLove)}>
            <MyLove>Júlia Peixoto</MyLove>
          </Pressable>
        </MotiView>
      </Float>
    </HyperComponent>
  );
};

export default Contact;
