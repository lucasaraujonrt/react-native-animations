import I18n from 'react-native-i18n';
import ptBR from './ptbr';

I18n.defaultLocale = 'pt-br';
I18n.fallbacks = true;

I18n.translations = {
  'pt-br': ptBR,
};

export default I18n;
