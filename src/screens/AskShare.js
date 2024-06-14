import React from "react";

// styles
import "./AskShare.css";

function AskShare() {
  return (
    <div className="ask-share-container">
      {/* left container  */}
      <div className="menu-container">
        <p>Rajeev Mishra</p>
        <div>
          <div className="menu-container-options">
            <img src="" alt="" />
            <p>Ask</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Share</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Buy</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Sell</p>
          </div>
        </div>
      </div>

      {/* middle container  */}
      <div className="ask-share-content-container">
        <input name="middle-main-question" id="middle-main-question" placeholder="Ask your question"></input>
        <br />
        <button name="middle-buttton" id="middle-button">Send</button>
      </div>

      {/* right container  */}
      <div className="menu-container">
        <p>Rajeev Mishra</p>
        <div>
          <div className="menu-container-options">
            <img src="" alt="" />
            <p>Ask</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Share</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Buy</p>
          </div>
          <div>
            <img src="" alt="" />
            <p>Sell</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AskShare;