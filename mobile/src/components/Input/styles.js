import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    ${({ theme }) => css`
        width: 100%;
        margin: ${theme.spacing.normal};
    `}
`;

export const Wrapper = styled.View`
    ${({ theme }) => css`
        position: relative;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        border-width: 1px;
        border-color: ${theme.colors.gray};;
        border-radius: ${theme.borderRadius};
        margin: 0 ${theme.spacing.normal};
    `}
`;

export const Input = styled.TextInput`
    ${({ theme }) => css`
        flex: 1;
        height: 56px;
        font-family: ${theme.fontWeight.normal};
        font-size: ${theme.fontSize.medium};
        margin-left: ${theme.spacing.normal};
    `}
`;

export const WrapperIcon = styled.TouchableOpacity`
    ${({ theme }) => css`
        height: 56px;
        justify-content: center;
        align-items: center;
        padding: 0 ${theme.spacing.normal};
    `}
`;
