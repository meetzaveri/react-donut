import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
position: absolute;
left: ${props => props.leftpos};
`

export default Button;