import React from 'react';
import { connect } from "react-redux";
import { getTweets } from "../../actions/TweetActions";

class Twitter extends React.Component {
    componentWillMount() {
        this.props.dispatch(getTweets());
    }


    render() {
        const { tweets, fetched}=this.props.tweets;
        console.log(tweets);
        return (
            <div>
                <h2>Twitter Feed</h2>
                <div className="tweets">
                    {tweets.map(function(tweet, i){
                        <p> {tweet.text} </p>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        tweets: state.tweets
    }
}

export default connect(mapStateToProps)(Twitter);