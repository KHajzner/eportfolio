import React from 'react';
import PropTypes from 'prop-types';
import './PostCard.css';


//Navigation component
export const PostCard = ({title, description}) => {
    return (
      <div>
          <div className="card">
              <div id="title">{title}</div>
              <div id="description">{description}</div>
          </div>
  
      </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,

};

PostCard.defaultProps = {
  title: "uwu",
  description: "this is the title",
};
