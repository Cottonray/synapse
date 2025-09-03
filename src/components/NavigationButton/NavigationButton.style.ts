import styled from '@emotion/native';
import { Pressable } from 'react-native';
import { MotiView } from 'moti';

const PressableContainer = styled(Pressable)`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 12px;
  padding-bottom: 12px;
  position: relative;
  min-height: 80px;
`;

const GlowContainer = styled(MotiView)`
  position: absolute;
  width: 70px;
  height: 70px;
  border-radius: 35px;
`;

const ButtonContainer = styled(MotiView)`
  align-items: center;
  justify-content: center;
`;

const TabButton = styled(MotiView)`
  width: 56px;
  height: 56px;
  border-radius: 28px;
  justify-content: center;
  align-items: center;
`;

const IconContainer = styled(MotiView)`
  justify-content: center;
  align-items: center;
`;

const ActiveIndicator = styled(MotiView)`
  position: absolute;
  bottom: 6px;
  width: 6px;
  height: 6px;
  border-radius: 3px;
  background-color: #8e97fd;
`;

export default {
  PressableContainer,
  GlowContainer,
  ButtonContainer,
  TabButton,
  IconContainer,
  ActiveIndicator,
};
