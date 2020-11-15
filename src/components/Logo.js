import logo from "../logo.png";

export default function Logo() {
  return (
    <img
      src={logo}
      width="100px"
      alt="Spots Logo"
      style={{ margin: "1em", borderRadius: "10px", position: "absolute" }}
    />
  );
}
