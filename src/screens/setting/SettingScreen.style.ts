import styled from '@emotion/native';
import { Theme } from '../../themes/types';

export const Container = styled.View<{ theme: Theme }>`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text<{ theme: Theme }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 30px;
  text-align: center;
`;

export const Section = styled.View`
  margin-bottom: 30px;
`;

export const SectionTitle = styled.Text<{ theme: Theme }>`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 15px;
`;

export const OptionButton = styled.TouchableOpacity<{
  theme: Theme;
  isActive?: boolean;
}>`
  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.surface};
  padding: 15px;
  border-radius: 8px;
  margin-bottom: 10px;
  border-width: 2px;
  border-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.primary : theme.colors.border};
`;

export const ButtonText = styled.Text<{
  theme: Theme;
  isActive?: boolean;
}>`
  font-size: 16px;
  text-align: center;
  color: ${({ theme, isActive }) =>
    isActive ? theme.colors.background : theme.colors.text};
  font-weight: ${({ isActive }) => (isActive ? '600' : 'normal')};
`;
