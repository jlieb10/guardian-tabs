import React, { Component } from "react";
import "whatwg-fetch";
import ArticleCard from "./ArticleCard";

class TabComponent extends Component {
  constructor() {
    super();
    // Set initial state to load uk-news articles
    this.state = {
      activeSection: "uk-news"
    };

    // Storing current articles as a prop rather than state
    this.currentArticles = [];

    // Base API endpoint
    this.baseAPIEndpoint =
      "//content.guardianapis.com/search?api-key=9wur7sdh84azzazdt3ye54k4&page-size=5";

    // Scoped component method
    this.fetchData = this.fetchData.bind(this);
  }

  componentDidMount() {
    // Fetch articles on initial load
    this.fetchData(this.state.activeSection);
  }

  fetchData(sectionQuery) {
    // Fallback in case this is called without a section query
    const section = sectionQuery || "uk-news";

    // using window.fetch api with polyfill to hit the endpoint,
    // process the json, update the articles property, and update the state
    // The state update will cause the component to re-render with new articles
    fetch(`${this.baseAPIEndpoint}&section=${section}`)
      .then(response => response.json())
      .then(data => (this.currentArticles = data.response.results))
      .then(() =>
        this.setState({
          activeSection: section
        })
      );
  }

  // Render component including headers with active/inactive state
  // and map the populated article prop to article cards
  render() {
    return (
      <div className="tab-component">
        <div className="tab-component__header-container">
          <h2
            className={`tab-component__header tab-component__header--uk-news ${
              this.state.activeSection === "uk-news"
                ? "tab-component__header--active"
                : ""
            }`}
            onClick={() => this.fetchData("uk-news")}
          >
            UK News
          </h2>
          <h2
            className={`tab-component__header tab-component__header--travel ${
              this.state.activeSection === "travel"
                ? "tab-component__header--active"
                : ""
            }`}
            onClick={() => this.fetchData("travel")}
          >
            Travel
          </h2>
          <h2
            className={`tab-component__header tab-component__header--football ${
              this.state.activeSection === "football"
                ? "tab-component__header--active"
                : ""
            }`}
            onClick={() => this.fetchData("football")}
          >
            Football
          </h2>
        </div>
        <ul className="tab-component__articles">
          {this.currentArticles.map((article, idx) => (
            <ArticleCard {...article} key={article.id} index={idx} />
          ))}
        </ul>
      </div>
    );
  }
}

export default TabComponent;
