import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    ${({ theme }) => css`
        height: 100%;
        width: 100%;
        align-items: center;
        justify-content: space-between;
        background-color: ${theme.colors.background};
    `}
`;

export const FormContainer = styled.View`
    align-items: center;
    width: 100%;
`;

export const HasWhatsappContainer = styled.View`
    align-items: center;
    flex-direction: row;
`;

export const HasWhatsappText = styled.Text`
    ${({ theme }) => css`
        font-family: ${theme.fontWeight.light};
        font-size: ${theme.fontSize.normal};
        padding-top: ${theme.spacing.xsmall};
    `}
`;
