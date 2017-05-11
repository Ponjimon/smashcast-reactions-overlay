import React, { PropTypes } from 'react';
import styled from 'styled-components';
import AnimatedNumber from 'react-animated-number';

const ReactionImage = styled.img`
    width: 34px;
    display: inline-block;
    margin-right: 20px;
`;

const Reaction = ({ type, amount }) => (
    <div>
        <ReactionImage
            src={`/img/${type}.png`}
        />
        <span>
            <AnimatedNumber
                value={amount}
                stepPrecision={0}
            />
        </span>
    </div>
);

Reaction.propTypes = {
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
};

export default Reaction;
