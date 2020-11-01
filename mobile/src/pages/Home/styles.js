import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    ${({ theme }) => css`
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: center;
        background-color: ${theme.colors.background};
    `}
`;

export const Text = styled.Text`
    ${({ theme }) => css`
        width: 100%;
        font-family: ${theme.fontWeight.normal};
        margin-top: ${theme.spacing.large};
        margin-bottom: ${theme.spacing.normal};
        padding: 0 ${theme.spacing.normal};
        font-size: ${theme.fontSize.medium};
        color:  ${theme.colors.darkGray};
    `}
`;

export const ScrollHorizontal = styled.ScrollView`
    ${({ theme }) => css`
        max-height: ${theme.spacing.cards.home.height};
    `}
`;

export const CardsContainer = styled.View`
    ${({ theme }) => css`
        flex-direction: row;
        padding-left: ${theme.spacing.normal};
    `}
`;

export const Card = styled.TouchableOpacity`
    ${({ theme }) => css`
        width: ${theme.spacing.cards.home.width};
        height: ${theme.spacing.cards.home.height};
        justify-content: center;
        margin-right: ${theme.spacing.normal};
        padding: ${theme.spacing.normal};
        border-radius: ${theme.borderRadius};
        background-color: ${theme.colors.white};
    `}
`;

export const CardText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fontWeight.normal};
        color: ${theme.colors.black};
        font-size: ${theme.fontSize.large};
        margin-top: ${theme.spacing.small};
    `}
`;
