import type { ThemeUtilsCSS } from "@fuel-ui/css";
import { cssObj, darkColors, lightColors } from "@fuel-ui/css";
import type { InputProps } from "@fuel-ui/react";
import { Box, Input } from "@fuel-ui/react";
import type { ReactNode } from "react";
import { useAccount } from "wagmi";
import { ClientSideOnly } from "~/systems/Core";

import { Button } from "./Button";

type LinkInputProps = InputProps & {
  css?: ThemeUtilsCSS;
  children: ReactNode;
  value: string;
  onChange: (val: string) => void;
};

export function LinkInput({
  css,
  children,
  value,
  onChange,
  ...props
}: LinkInputProps) {
  const { isConnected } = useAccount();

  return (
    <Box css={{ ...styles.root, ...css }}>
      <Input {...props} size="lg">
        <Input.Field
          type="text"
          autoFocus={true}
          placeholder="Paste url to create your link"
          value={value}
          onChange={(e) => onChange(e.target.value)}
        />
        <ClientSideOnly>
          <Input.ElementRight>
            {isConnected ? (
              <>{children}</>
            ) : (
              <Button color="black" leftIcon="Wallet" css={{ mr: "-8px" }}>
                Connect Wallet
              </Button>
            )}
          </Input.ElementRight>
        </ClientSideOnly>
      </Input>
    </Box>
  );
}

const styles = {
  root: cssObj({
    position: "relative",

    ".fuel_input": {
      position: "relative",
      zIndex: "$10",
      width: "100%",
      border: "transparent",
    },

    input: {
      color: "$gray11",
      fontSize: "$sm",
      fontWeight: "bold",
    },
    "input::placeholder": {
      color: darkColors.gray11,
    },

    "&:before": {
      position: "absolute",
      top: 0,
      left: 0,
      display: "block",
      content: '""',
      width: "calc(100% + 3px)",
      height: "calc(100% + 3px)",
      borderRadius: "$lg",
      background: `linear-gradient(160deg, #0299EE 10%, rgba(2, 153, 238, 0) 30%, rgba(2, 153, 238, 0.182323) 70%, #0299EE 90%, rgba(2, 153, 238, 0.176151) 150%, rgba(2, 153, 238, 0) 200%, #0299EE 200%), ${lightColors.gray4}`,
      transform: "translate(-1.5px, -1.5px)",
    },
  }),
};
