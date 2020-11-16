import logo from "../logo.png";
import SpotsList from "./SpotsList";

export default function Logo() {
  return (
    <button type="button" onClick={() => <SpotsList proximity={true} />}>
      <img
        src={logo}
        width="100px"
        alt="Spots Logo"
        style={{
          margin: "1em",
          borderRadius: "10px",
          position: "absolute",
          cursor: "pointer",
        }}
      />
    </button>
  );
}
