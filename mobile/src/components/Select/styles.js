import styled, { css } from 'styled-components/native';
import { Picker } from '@react-native-picker/picker';

export const Container = styled.View`
    width: 100%;
`;

export const Wrapper = styled.View`
    ${({ theme }) => css`
        border-width: 1px;
        border-color: ${theme.colors.gray};;
        border-radius: ${theme.borderRadius};
        margin: ${theme.spacing.normal};
    `}
`;

export const Select = styled(Picker)`
    ${({ theme }) => css`
        height: 56px;
        margin: 0 ${theme.spacing.small};
    `}
`;
