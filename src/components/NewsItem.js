import React, { Component } from 'react';

export default class NewsItem extends Component {
    render() {
        let {title, description, imageUrl, newsUrl, date} = this.props;
        return (
            <div className='my-3'>
                <div className="card">
                    <img src={imageUrl?imageUrl:"https://resize.indiatvnews.com/en/resize/newbucket/730_-/2022/05/breaking-news-jpeg-1651538030.jpg"} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small class="text-body-secondary">published at {new Date(date).toGMTString()}</small></p>
                        <a href={newsUrl} target='_blank' rel="noreferrer" className="btn btn-primary">Read more</a>
                    </div>
                </div>
            </div>
        );
    }
}
