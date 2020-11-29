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

export const SelectContainer = styled.View`
    width: 100%;
`;
