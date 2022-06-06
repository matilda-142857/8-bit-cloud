import Navigation from "../Navigation";
import "./about.css";

export default function AboutMe({ isLoaded }) {
  return (
    <div class="container">
      <div class="content">
        <h1>
          {" "}
          My name's Matilda, and I enjoy tinkering with JS (on the occasion
          that I know what I'm doing). Nice to meet you!{" "}
        </h1>
        <h3></h3>
      </div>
      <div class="flap"></div>
    </div>
  );
}
