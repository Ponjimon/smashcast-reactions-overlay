import styled from 'styled-components';

export default styled.article`
    background-color: ${props => props.transparent ? '0' : '#fff'};
    border: ${props => props.transparent ? '0' : '1px solid #e4e4e4'};
    box-shadow: ${props => props.transparent ? 'none' : '1px 1px rgba(0, 0, 0, .05)'};
    border-radius: 5px;
    font-size: 3rem;
    width: 30%;
    font-weight: 600;
    color: ${props => props.color ? `#${props.color}` : '#333'};
    margin-bottom: 30px;
    text-align: center;
`;