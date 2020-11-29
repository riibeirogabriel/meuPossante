import styled, { css } from 'styled-components/native';

export const Container = styled.TouchableOpacity`
    width: 100%;
`;

export const Wrapper = styled.View`
    ${({ theme }) => css`
        justify-content: center;
        align-items: center;
        height: 196px;
        border-width: 1px;
        border-color: ${theme.colors.gray};;
        border-radius: ${theme.borderRadius};
        margin: ${theme.spacing.normal};
    `}
`;
