import React from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { MotiView } from 'moti';
import { useTheme } from '../../hooks/useTheme';
import Styled from './NavigationButton.style';

interface NavigationButtonProps extends BottomTabBarButtonProps {
  icon: React.JSX.Element;
}

const NavigationButton = ({ icon, ...props }: NavigationButtonProps) => {
  const { theme } = useTheme();
  const focused = props.accessibilityState?.selected || false;

  return (
    <Styled.PressableContainer onPress={props.onPress}>
      {/* 아이콘만 애니메이션 (배경은 슬라이딩 탭바에서 처리) */}
      <MotiView
        animate={{
          scale: focused ? 1.1 : 1,
          translateY: focused ? 0 : 0,
        }}
        transition={{
          type: 'spring',
          damping: 15,
          stiffness: 150,
        }}
      >
        {React.cloneElement(icon, {
          color: focused ? '#FFFFFF' : theme.colors.text || '#666666',
          size: focused ? 26 : 24,
        })}
      </MotiView>
    </Styled.PressableContainer>
  );
};

export default NavigationButton;
