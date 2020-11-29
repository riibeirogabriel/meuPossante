import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
`;

export const Card = styled.View`
    ${({ theme }) => css`
        margin: ${theme.spacing.normal};
        justify-content: space-between;
        background-color: ${theme.colors.white};
        border-radius: ${theme.borderRadius};
        overflow: hidden;
    `}
`;

export const CardImage = styled.Image`
    width: 100%;
    max-height: 170px;
`;

export const Content = styled.View`
    ${({ theme }) => css`
        padding: ${theme.spacing.normal};
        padding-top: ${theme.spacing.small};
    `}
`;

export const ContentWrapper = styled.View`
    ${({ theme }) => css`
        margin-top: ${theme.spacing.small};
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    `}
`;

export const Title = styled.Text`
    ${({ theme }) => css`
        text-transform: uppercase;
        color: ${theme.colors.black};
        font-family: ${theme.fontWeight.bold};
        font-size: ${theme.fontSize.xlarge};
    `}
`;

export const SubTitle = styled.Text`
    ${({ theme }) => css`
        text-transform: uppercase;
        color: ${theme.colors.black};
        font-family: ${theme.fontWeight.light};
        font-size: ${theme.fontSize.normal};
    `}
`;

export const Value = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-family: ${theme.fontWeight.semiBold};
        font-size: ${theme.fontSize.xlarge};
    `}
`;

export const Year = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.black};
        font-family: ${theme.fontWeight.light};
        font-size: ${theme.fontSize.large};
    `}
`;

export const CardButton = styled.TouchableOpacity`
    ${({ theme }) => css`
        height: 32px;
        justify-content: center;
        align-items: center;
        background-color: ${theme.colors.primary};
    `}
`;

export const ButtonText = styled.Text`
    ${({ theme }) => css`
        color: ${theme.colors.white};
        font-family: ${theme.fontWeight.normal};
        font-size: ${theme.fontSize.medium};
    `}
`;
