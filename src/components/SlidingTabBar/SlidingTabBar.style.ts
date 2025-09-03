import styled from '@emotion/native';
import { MotiView } from 'moti';
import { Theme } from '../../themes/types';

// Styled Components
export const TabBarContainer = styled.View<{ theme: Theme }>`
  flex-direction: row;
  background-color: ${({ theme }) => theme.colors.background};
  height: 90px;
  padding-bottom: 20px;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
`;

export const TabIndicator = styled(MotiView)<{ theme: Theme }>`
  position: absolute;
  top: 18px;
  width: 50px;
  height: 50px;
  border-radius: 25px;
  background-color: ${({ theme }) => theme.colors.tabBarActiveBackground};
`;

export const TabItemContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding-top: 15px;
`;
