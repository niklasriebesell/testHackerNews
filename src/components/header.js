import Logo from "../images/hackernewsLogo.webp";
import "./Header.css";

function Header() {
  return (
    <div>
      <header>
        <nav className="navHeader">
          <img src={Logo} alt="Logo from HackerNews" />
          <ul>
            <a href="{#}">
              <li className="hackerNews">Hacker News</li>
            </a>
            <a href="{#}">
              <li>
                new <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                past <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                comments <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                ask <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                show <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>
                jobs <span className="span">|</span>
              </li>
            </a>
            <a href="{#}">
              <li>submit</li>
            </a>
            <a className="lastElement" href="{#}">
              <li>login</li>
            </a>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default Header;
