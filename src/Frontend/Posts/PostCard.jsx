import React from 'react';
import PropTypes from 'prop-types';
import './PostCard.css';
import DOMPurify from 'dompurify';

//Navigation component
export const PostCard = ({title, description}) => {

    const createMarkup = (html) => {
      return {
        __html: DOMPurify.sanitize(html)
      }
    }

    // TODO: Remove the quotation marks around description
    return (
      <div>
          <div className="card">
              <div id="title">{title}</div>
              <div id="description" dangerouslySetInnerHTML={createMarkup(description)}></div>
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
