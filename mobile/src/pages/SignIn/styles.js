import styled, { css } from 'styled-components/native';

export const Container = styled.View`
    ${({ theme }) => css`
        height: 100%;
        width: 100%;
        align-items: center;
        background-color: ${theme.colors.background};
    `}
`;

export const Logo = styled.View`
    width: 100%;
    align-items: center;
    margin: 32px;
`;
