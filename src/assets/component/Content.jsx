import { AiOutlineYoutube, AiOutlineInstagram, AiOutlineGithub } from "react-icons/ai";
export default function Content() {
  return (
    <div className="content">
      <div className="button">
        <span>
          <AiOutlineYoutube />
        </span>
        <a href="https://www.youtube.com/@sandipirdauspd" target="_blank" rel="noreferrer noopener">
          Youtube
        </a>
      </div>
      <div className="button">
        <span>
          <AiOutlineInstagram />
        </span>
        <a href="https://www.instagram.com/sandy.p_d/" target="_blank" rel="noreferrer noopener">
          Instagram
        </a>
      </div>
      <div className="button">
        <span>
          <AiOutlineGithub />
        </span>
        <a href="https://github.com/sandipirdaus" target="_blank" rel="noreferrer noopener">
          Github
        </a>
      </div>
    </div>
  );
}
