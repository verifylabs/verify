/* eslint-disable @typescript-eslint/no-explicit-any */
import * as jdenticon from "jdenticon";
import { useEffect, useRef } from "react";

export const GeneratedImage = ({ value = "test", size = "100%" }) => {
  const icon = useRef<any>(null);
  useEffect(() => {
    if (icon.current) {
      jdenticon.update(icon.current, value, {
        padding: 0,
      });
    }
  }, [value]);

  return (
    <svg data-jdenticon-value={value} height={size} ref={icon} width={size} />
  );
};
