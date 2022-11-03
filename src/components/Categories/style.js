import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    align-items: center;
`

export const Circle = styled.div`
    color: ${props => props.color};
    border-radius: 50%;
    width: 30px;
    height: 30px;
    background-color: ${props => props.color};
    margin: 10px;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    align-items: center;
`

export const Column = styled.div`
    flex-direction: column;
    text-align: left;
    margin: 10px;
    space-around: 10px;
`
export const Category = styled.p`
    font-weight: bold;
`