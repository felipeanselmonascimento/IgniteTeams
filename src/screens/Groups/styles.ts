import styled from "styled-components/native"

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.GRAY_600 };
    padding: 24px;
`

export const Title = styled.Text`
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 32px;
`