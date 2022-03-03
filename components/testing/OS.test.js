import { useEffect, useState } from "react";
import platform from "platform-detect";
const OSTest = (props) => {
  const [OS, setOS] = useState(null);
  const [primaryInput, setPrimaryInput] = useState(null);
  console.log("platform: ", platform);

  const {
    android,
    linux,
    ios,
    macos,
    windows, // FOR TESTING OPERATING SYSTEM (bool)
    touch,
    mouse, // FOR TESTING PRIMARY INPUT TYPE (bool)
  } = platform;
  useEffect(() => {
    if (touch) {
      if (mouse) {
        setPrimaryInput("mouse with touchscreen");
      } else setPrimaryInput("mobile/tablet without mouse");
    } else {
      if (mouse) {
        setPrimaryInput("mouse without touchscreen");
      } else setPrimaryInput("neither mouse nor touchscreen");
    }

    setOS(
      android
        ? "android"
        : linux
        ? "linux"
        : ios
        ? "ios"
        : macos
        ? "macos"
        : windows
        ? "windows"
        : "unknown"
    );
  }, []);

  return (
    <div
      className="os-test"
      style={{
        position: "fixed",
        top: "25px",
        left: "25px",
        background: "white",
        boxShadow: "0 2px 20px rgba(0,0,0,.2)",
        padding: "15px",
        zIndex: 10000000,
      }}
    >
      <p className="p-small">Current OS: {OS}</p>
      <p className="p-small">Primary Input: {primaryInput}</p>
    </div>
  );
};

export default OSTest;
