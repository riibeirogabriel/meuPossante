import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    margin: 16px;
`;

export const Button = styled.TouchableOpacity`
    ${({ theme, type, disabled }) => css`
        height: 56px;
        justify-content: center;
        align-items: center;
        background-color: ${disabled ? theme.colors.gray : type === 'solid' ? theme.colors.primary : theme.colors.transparent};
        border-radius: ${theme.borderRadius};
        margin: 0 ${theme.spacing.normal};
    `}
`;

export const ButtonText = styled.Text`
    ${({ theme, type }) => css`
        color: ${type === 'solid' ? theme.colors.white : theme.colors.primary};
        font-size: ${theme.fontSize.large};
        font-family: ${theme.fontWeight.bold};
    `}
`;
