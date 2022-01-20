import React from 'react';
import PropTypes from 'prop-types';
import Rating from '@mui/material/Rating';
import ThumbUpAltRounded from '@mui/icons-material/ThumbUpAltRounded';
import ThumbDownAltRounded from '@mui/icons-material/ThumbDownAltRounded';

const customIcons = {
  1: {
    icon: <ThumbUpAltRounded />,
    label: 'Good',
  },
  2: {
    icon: <ThumbDownAltRounded />,
    label: 'Bad',
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function RadioGroupRating() {
  return (
    <Rating
      name="highlight-selected-only"
      defaultValue={1}
      IconContainerComponent={IconContainer}
      highlightSelectedOnly
    />
  );
}
