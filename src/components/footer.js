import "./Footer.css";
import { useState } from "react";

function Footer({ handleInput }) {
  function checkUserInput(e) {
    e.preventDefault();
    if (e.target.input.value) {
      handleInput(e.target.input.value);
    }
    // keyCode für Enter is 13
    // console.log(e.target.value);
    // console.log(handleInput);
  }

  return (
    <div>
      <footer className="Footer">
        <div className="footerNavTop">
          <a href="{#}">
            <p>Applications are open for YC Winter 2023</p>
          </a>
        </div>
        <div className="footerNavMiddle">
          <ul>
            <a href="{#}">
              <li>
                Guidlines <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                FAQ <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                Lists <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                API <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                Security <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                Legal <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                Apply to YC <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>Contact</li>
            </a>
          </ul>
        </div>
        <div className="footerNavBottom">
          <form onSubmit={checkUserInput} method="Post">
            <label htmlFor="">Search: </label>
            <input
              type="search"
              name="input"
              id="input"
              //onChange={checkUserInput}
            />
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
