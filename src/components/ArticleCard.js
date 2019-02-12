import React from "react";

const ArticleCard = props => {
  return (
    <li className="article-card">
      <a className="article-card__link" href={props.webUrl}>
        <span className="article-card__number">{props.index + 1}.</span>
        <h3 className="article-card__title">{props.webTitle}</h3>
      </a>
    </li>
  );
};

export default ArticleCard;
