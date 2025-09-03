import styled from '@emotion/native';
import { Theme } from '../../themes/types';

export const Container = styled.View<{ theme: Theme }>`
  flex: 1;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.background};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text<{ theme: Theme }>`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 16px;
`;

export const Welcome = styled.Text<{ theme: Theme }>`
  font-size: 18px;
  color: ${({ theme }) => theme.colors.textSecondary};
  text-align: center;
`;
