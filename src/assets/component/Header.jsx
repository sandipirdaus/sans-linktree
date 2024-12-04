import profile from "./image/sandi11.jpeg";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import './header.css'

export default function Header() {
  const [text] = useTypewriter({
    words: ["Student, Web Developer, Freelancer"],
    loop: Infinity,
    typeSpeed: 110,
    deleteSpeed: 80,
  });
  return (
    <div className="profile">
      <img src={profile} />
      <h1>Sandi Pirdaus</h1>
      <p>
        {text}
        <Cursor cursorStyle="|" />
      </p>
    </div>
  );
}
