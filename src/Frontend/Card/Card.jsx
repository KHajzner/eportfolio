import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';
import DOMPurify from 'dompurify';
import { format } from 'date-fns';

//Navigation component
export const Card = ({date, title, description}) => {

    const createMarkup = (html) => {
      return {
        __html: DOMPurify.sanitize(html)
      }
    }

    return (
      <div class="grid-item" id="card">
            {date && <div id="date">{format(date, 'dd.MM.yyyy')}</div>}
            <div className="content">
                <div id="title">{title}</div>
                <div id="break" />
                <div id="description" dangerouslySetInnerHTML={createMarkup(description)}></div>
            </div>
      </div>
  );
};

Card.propTypes = {
    date: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,

};

Card.defaultProps = {
  title: "uwu",
  description: "this is the title",
};
