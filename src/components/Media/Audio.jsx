import { useRef } from "react";

function Audio({ src, controls }) {
  const audioEl = useRef(null);

  return <audio ref={audioEl} src={src} controls={controls} autoPlay />;
}

export default Audio;
