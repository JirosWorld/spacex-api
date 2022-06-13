import React, {useState} from 'react';
import { ReactComponent as Hand } from "../../assets/icons/like-icon.svg";
import "./LikeButton.css";


// example of logic class: const error = this.state.valid ? '' : 'error'
// const classes = `form-control round-lg ${error}`
// <input className={`form-control round-lg ${this.state.valid ? '' : 'error'}`} />

function LikeButton() {
    const [liked, setLiked] = useState(null);
    const [clicked, setClicked] = useState(false);

    return (
        <div className="like-button__position">
            <button
                onClick={() => {
                    setLiked(!liked);
                    setClicked(true);
                }}
                onAnimationEnd={() => setClicked(false)}
                className={`like-button-wrapper ${liked ? 'like-button-wrapper-liked' : ' '}
                ${clicked ? 'like-button-wrapper-clicked' : ' '}`}
            >
                <div className="like-button">
                    <Hand />
                    <span>Like</span>
                    <span className={`suffix ${liked ? 'suffix-liked' : 'hide'}`}>d</span>
                </div>
            </button>
        </div>
    );
}

export default LikeButton;