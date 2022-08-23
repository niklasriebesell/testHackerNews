import "./Footer.css";

function Footer() {
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
          <form action="#">
            <label htmlFor="">Search: </label>
            <input type="search" name="" id="" />
          </form>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
