import React, {useEffect, useState} from 'react';
import {ReactComponent as Hand} from "../../assets/icons/like-icon.svg";
import "./LikeButton.css";


function LikeButton({person}) {
    const [liked, setLiked] = useState(null);
    const [clicked, setClicked] = useState(false);

    // keep like-button state on refresh
    const [storeLikedName, setStoreLikedName] = useState(localStorage.getItem('LIKE_BUTTON'));

    useEffect(() => {
        window.localStorage.setItem('LIKE_BUTTON', JSON.stringify(storeLikedName))
    }, [storeLikedName]);


    return (
        <div className="like-button__position">
            <button
                onClick={() => {
                    setLiked(!liked);
                    setClicked(true);
                    setStoreLikedName({
                        name: person.name
                    });
                }}
                onAnimationEnd={() => setClicked(false)}
                className={`like-button-wrapper ${liked ? 'like-button-wrapper-liked' : ' '}
                ${clicked ? 'like-button-wrapper-clicked' : ' '}`}
            >
                <div className="like-button">
                    <Hand/>
                    <span>{liked ? <>LIKED</> : <>LIKE</>}</span>
                    <span className={`suffix ${clicked ? 'suffix-liked' : 'hide'}`}>!</span>
                </div>
            </button>

        </div>
    );
}

export default LikeButton;