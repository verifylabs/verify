// ../../common/config/react-imports.js
import * as React from "react";

// src/components/Accordion/Accordion.tsx
import { cx as cx7 } from "@fuel-ui/css";
import * as AC4 from "@radix-ui/react-accordion";

// src/utils/system.tsx
import { styled } from "@fuel-ui/css";
import { useMemo, forwardRef } from "react";
import { jsx } from "react/jsx-runtime";
function createComponent(render) {
  const Component = forwardRef(
    (props, ref) => render({ ref, ...props })
  );
  return Component;
}
function createStyledElement(type, style2, styleProps, props, children) {
  const Component = useMemo(() => styled(type, style2), []);
  return /* @__PURE__ */ jsx(Component, {
    ...styleProps,
    ...props,
    children
  });
}

// src/components/Accordion/AccordionContent.tsx
import { cx as cx2 } from "@fuel-ui/css";
import * as AC from "@radix-ui/react-accordion";

// src/components/Box/Box.tsx
import { css, cx } from "@fuel-ui/css";
var Box = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx("fuel_box", className);
    return createStyledElement(
      "div",
      styles.root,
      null,
      { ...props, className: classes },
      children
    );
  }
);
var styles = {
  root: css({
    fontFamily: "$sans"
  })
};

// src/components/Accordion/styles.ts
import {
  lightColors,
  css as css2,
  darkColors,
  darkTheme,
  keyframes,
  lightTheme
} from "@fuel-ui/css";
var slideDown = keyframes({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" }
});
var slideUp = keyframes({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 }
});
var root = css2({
  borderRadius: "$md",
  maxW: "$full"
});
var item = css2({
  overflow: "hidden",
  borderTop: "1px solid $bodyColor",
  "&:first-child": {
    marginTop: 0,
    borderTopLeftRadius: "$md",
    borderTopRightRadius: "$md"
  },
  "&:last-child": {
    borderBottomLeftRadius: "$md",
    borderBottomRightRadius: "$md"
  },
  "&:focus-within": {
    position: "relative",
    zIndex: 1
  },
  [`.${darkTheme} &`]: {
    backgroundColor: "$gray1"
  },
  [`.${darkTheme} &:focus-within`]: {
    outline: `2px solid ${darkColors.gray4}`
  },
  [`.${lightTheme} &`]: {
    backgroundColor: "white"
  },
  [`.${lightTheme} &:focus-within`]: {
    outline: `2px solid ${lightColors.gray7}`
  }
});
var header = css2({
  all: "unset",
  display: "flex"
});
var trigger = css2({
  all: "unset",
  fontFamily: "$sans",
  fontWeight: "$semibold",
  px: "$4",
  height: 45,
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  borderBottom: "1px solid $bodyColor",
  textSize: "base",
  transition: "color .2s",
  '&[data-state="closed"]': {
    color: "$gray12"
  },
  '&[data-state="open"]': {
    color: "$accent11"
  },
  "&:hover": {
    color: "$accent11"
  }
});
var content = css2({
  overflow: "hidden",
  background: "transparent",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  }
});
var chevron = css2({
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  '[data-state="open"] &': {
    transform: "rotate(180deg)"
  }
});

// src/components/Accordion/AccordionContent.tsx
import { jsx as jsx2 } from "react/jsx-runtime";
var AccordionContent2 = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx2("fuel_accordion-content", className);
    return createStyledElement(
      AC.AccordionContent,
      content,
      null,
      { ...props, className: classes },
      /* @__PURE__ */ jsx2(Box, {
        css: { p: "$4" },
        children
      })
    );
  }
);

// src/components/Accordion/AccordionItem.tsx
import { cx as cx3 } from "@fuel-ui/css";
import * as AC2 from "@radix-ui/react-accordion";
var AccordionItem2 = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx3("fuel_accordion-item", className);
    return createStyledElement(
      AC2.AccordionItem,
      item,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Accordion/AccordionTrigger.tsx
import { cx as cx6, styled as styled3 } from "@fuel-ui/css";
import * as AC3 from "@radix-ui/react-accordion";

// src/components/Icon/Icon.tsx
import { cx as cx5, styled as styled2 } from "@fuel-ui/css";
import * as VisuallyHidden from "@radix-ui/react-visually-hidden";
import * as PhosphorIcons from "phosphor-react";
import { useMemo as useMemo2, cloneElement } from "react";

// src/utils/helpers.ts
function omit(list2, props) {
  return Object.entries(props).reduce((obj, [key, value]) => {
    if (list2.some((k) => k === key))
      return obj;
    return { ...obj, [key]: value };
  }, {});
}
function pick(list2, props) {
  return Object.entries(props).reduce((obj, [key, value]) => {
    if (list2.some((k) => k === key))
      return { ...obj, [key]: value };
    return obj;
  }, {});
}

// src/components/Flex/Flex.tsx
import { cx as cx4 } from "@fuel-ui/css";
import { jsx as jsx3 } from "react/jsx-runtime";
var Flex = createComponent(
  ({
    gap,
    direction = "row",
    align,
    justify,
    wrap,
    basis,
    grow,
    shrink,
    css: css32,
    className,
    ...props
  }) => {
    const classes = cx4("fuel_box--flex", className);
    return /* @__PURE__ */ jsx3(Box, {
      ...props,
      className: classes,
      css: {
        gap,
        flexDirection: direction,
        alignItems: align,
        justifyContent: justify,
        flexWrap: wrap,
        flexBasis: basis,
        flexGrow: grow,
        flexShrink: shrink,
        display: "flex",
        ...css32
      }
    });
  }
);

// src/components/Icon/Icon.tsx
import { jsx as jsx4, jsxs } from "react/jsx-runtime";
var Icon = createComponent(
  ({
    label: initialLabel,
    inline,
    icon,
    color,
    className,
    wrapperClassName,
    css: css32,
    alt,
    size: size3,
    weight,
    mirrored,
    ...props
  }) => {
    const iconElement = useMemo2(
      () => {
        if (typeof icon === "string") {
          const Component = styled2(PhosphorIcons[icon]);
          return /* @__PURE__ */ jsx4(Component, {});
        }
        return icon;
      },
      [icon]
    );
    const label2 = initialLabel || props["aria-label"];
    const iconProps = {
      className: cx5(`fuel_icon--${icon}`, className),
      focusable: false,
      "aria-hidden": true,
      alt,
      size: size3,
      weight,
      mirrored
    };
    return /* @__PURE__ */ jsxs(Flex, {
      as: "span",
      ...omit(["aria-label"], props),
      className: cx5("fuel_icon", wrapperClassName),
      align: "center",
      justify: "center",
      css: {
        display: inline ? "inline-flex" : "flex",
        ...color && { color: `$${color}` },
        ...css32
      },
      children: [
        cloneElement(iconElement, iconProps),
        /* @__PURE__ */ jsx4(VisuallyHidden.Root, {
          children: label2 || icon
        })
      ]
    });
  }
);
var iconList = Object.keys(
  omit(["Icon", "IconProps", "IconWeight", "IconContext"], PhosphorIcons)
);
Icon.id = "Icon";
Icon.iconList = iconList;
Icon.is = (icon) => icon;

// src/components/Accordion/AccordionTrigger.tsx
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
var Trigger = styled3(AC3.AccordionTrigger, trigger);
var AccordionTrigger2 = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx6("fuel_accordion-header", className);
    const iconClass = cx6("fuel_accordion-icon", chevron());
    const triggerClass = cx6("fuel_accordion-trigger", className);
    return createStyledElement(
      AC3.AccordionHeader,
      header,
      null,
      { className: classes },
      /* @__PURE__ */ jsxs2(Trigger, {
        ...props,
        className: triggerClass,
        children: [
          children,
          /* @__PURE__ */ jsx5(Icon, {
            icon: "CaretDown",
            "aria-hidden": true,
            className: iconClass
          })
        ]
      })
    );
  }
);

// src/components/Accordion/Accordion.tsx
import { jsx as jsx6 } from "react/jsx-runtime";
var Accordion = createComponent(
  ({ className, ...props }) => /* @__PURE__ */ jsx6(AC4.Root, {
    ...props,
    className: cx7("fuel_accordion-root", className, root())
  })
);
Accordion.Item = AccordionItem2;
Accordion.Trigger = AccordionTrigger2;
Accordion.Content = AccordionContent2;

// src/components/Alert/Alert.tsx
import { cx as cx15 } from "@fuel-ui/css";
import { Children as Children2, cloneElement as cloneElement4, createContext, useContext } from "react";

// src/components/Alert/AlertActions.tsx
import { cx as cx8 } from "@fuel-ui/css";
import { Children, cloneElement as cloneElement2 } from "react";

// src/components/Alert/styles.ts
import { css as css3 } from "@fuel-ui/css";
var root2 = css3({
  padding: "$4",
  position: "relative",
  borderRadius: "$md",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  gap: "$4",
  background: "$gray1",
  ".fuel_alert--content": {
    flex: 1,
    gap: "$3"
  },
  "& .fuel_heading": {
    fontWeight: "$bold",
    textSize: "lg",
    margin: 0
  },
  "&:after": {
    display: "block",
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    width: "3px",
    height: "100%",
    borderTopLeftRadius: "$md",
    borderBottomLeftRadius: "$md"
  },
  variants: {
    status: {
      info: {
        "& .fuel_heading, & .fuel_icon": {
          color: "$blue11"
        },
        "& .fuel_button": {
          p: 0,
          color: "$blue10",
          fontWeight: "$semibold"
        },
        "&:after": {
          background: "$blue11"
        }
      },
      warning: {
        "& .fuel_heading, & .fuel_icon": {
          color: "$amber11"
        },
        "& .fuel_button": {
          p: 0,
          color: "$amber10",
          fontWeight: "$semibold"
        },
        "&:after": {
          background: "$amber11"
        }
      },
      success: {
        "& .fuel_heading, & .fuel_icon": {
          color: "$green11"
        },
        "& .fuel_button": {
          p: 0,
          color: "$green10",
          fontWeight: "$semibold"
        },
        "&:after": {
          background: "$green11"
        }
      },
      error: {
        "& .fuel_heading, & .fuel_icon": {
          color: "$red11"
        },
        "& .fuel_button": {
          p: 0,
          color: "$red10",
          fontWeight: "$semibold"
        },
        "&:after": {
          background: "$red11"
        }
      }
    },
    direction: {
      column: {
        ".fuel_alert--content": {
          flexDirection: "column"
        },
        ".fuel_alert--icon": {
          pt: "5px",
          alignSelf: "stretch"
        }
      },
      row: {
        ".fuel_alert--content": {
          flexDirection: "row"
        },
        ".fuel_alert--icon": {
          display: "flex",
          alignSelf: "stretch",
          alignItems: "center"
        }
      }
    }
  },
  defaultVariants: {
    status: "info",
    direction: "column"
  }
});
var title = css3({
  "& h3": {
    m: 0,
    fontSize: "$base"
  }
});
var description = css3({
  flex: 1
});
var actions = css3({
  gap: "$4"
});

// src/components/Alert/AlertActions.tsx
import { jsx as jsx7 } from "react/jsx-runtime";
var BUTTON_COLORS = {
  info: "blue",
  warning: "amber",
  success: "green",
  error: "red"
};
var AlertActions = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx8("fuel_alert--actions", className, actions());
    const customProps = { ...props, className: classes };
    const parentProps = useAlertProps();
    const defaultStatus = parentProps?.status || "info";
    const customChildren = Children.toArray(children).map((child) => {
      if (child?.type?.id === "AlertButton") {
        return cloneElement2(child, { color: BUTTON_COLORS[defaultStatus] });
      }
      return child;
    });
    return /* @__PURE__ */ jsx7(Flex, {
      as: "footer",
      ...customProps,
      children: customChildren
    });
  }
);
AlertActions.id = "AlertActions";

// src/components/Alert/AlertButton.tsx
import { cx as cx11 } from "@fuel-ui/css";

// src/components/Button/Button.tsx
import { cx as cx10 } from "@fuel-ui/css";
import { mergeRefs } from "@react-aria/utils";
import { useRef, cloneElement as cloneElement3 } from "react";
import { mergeProps, useButton } from "react-aria";

// src/components/Spinner/Spinner.tsx
import { styled as styled4, css as css4, darkColors as darkColors2, keyframes as keyframes2, cx as cx9 } from "@fuel-ui/css";
import { useMemo as useMemo3 } from "react";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var Root3 = styled4("svg");
var Spinner = createComponent(
  ({ size: size3 = 24, color = "accent9", className, ...props }) => {
    const styles13 = useMemo3(() => getStyles(size3, color), [size3]);
    const classes = cx9("fuel_spinner", className, styles13());
    return /* @__PURE__ */ jsxs3(Root3, {
      className: classes,
      viewBox: `0 0 ${size3} ${size3}`,
      ...props,
      children: [
        /* @__PURE__ */ jsx8("circle", {
          cx: size3 / 2,
          cy: size3 / 2,
          r: size3 * 0.4,
          className: "bg"
        }),
        /* @__PURE__ */ jsx8("circle", {
          cx: size3 / 2,
          cy: size3 / 2,
          r: size3 * 0.4,
          className: "animated"
        })
      ]
    });
  }
);
function getStyles(size3, color) {
  const strokeColor = darkColors2[color] || darkColors2[`${color}`] || color;
  const animation = keyframes2({
    "0%": {
      strokeDashoffset: 0.66 * size3,
      transform: "rotate(0deg)"
    },
    "50%": {
      strokeDashoffset: 3.14 * size3,
      transform: "rotate(720deg)"
    },
    "100%": {
      strokeDashoffset: 0.66 * size3,
      transform: "rotate(1080deg)"
    }
  });
  return css4({
    x: 0,
    y: 0,
    width: `${size3}px`,
    height: `${size3}px`,
    viewBox: `0 0 ${size3} ${size3}`,
    "circle.animated": {
      zIndex: 0,
      fill: "transparent",
      stroke: strokeColor,
      strokeWidth: size3 * 0.1,
      strokeLinecap: "round",
      strokeDasharray: 3.14 * size3,
      transformOrigin: `calc(0.5px * ${size3}) calc(0.5px * ${size3}) 0`,
      animation: `${animation} 2.2s linear infinite`
    },
    "circle.bg": {
      fill: "transparent",
      stroke: "$blackA7",
      strokeWidth: size3 * 0.1,
      strokeLinecap: "round",
      strokeDasharray: 3.14 * size3
    }
  });
}

// src/components/Button/styles.ts
import { css as css5 } from "@fuel-ui/css";

// src/components/Button/variants.ts
import { darkColors as darkColors3, colorKeys, isBright } from "@fuel-ui/css";
function createSolidVariant(keyColor, hasHover = true) {
  const color = String(keyColor);
  const outlineColor = `$${color}5`;
  const background = isBright(color) ? `$${color}11` : `$${color}9`;
  const textColor = isBright(color) ? `$${color}3` : `$${color}1`;
  return {
    background,
    borderColor: "transparent",
    color: textColor,
    ...hasHover && {
      "&:not([aria-disabled=true]):hover": {
        borderColor: "$whiteA7",
        boxShadow: `inset 0 0 1000px ${darkColors3.whiteA7}`
      }
    },
    "&:not([aria-disabled=true]):focus": {
      outline: `3px solid ${outlineColor}`
    }
  };
}
function createOutlinedVariant(keyColor, hasHover = true) {
  const color = String(keyColor);
  const textColor = `$${color}11`;
  const borderColor = `$${color}7`;
  const hoverBg = `$${color}4`;
  return {
    borderColor,
    background: "transparent",
    color: textColor,
    ...hasHover && {
      "&:not([aria-disabled=true]):hover": {
        borderColor,
        boxShadow: "none",
        background: hoverBg
      }
    }
  };
}
function createGhostVariant(keyColor, hasHover = true) {
  const color = String(keyColor);
  const background = `$${color}3`;
  const hover = `$${color}5`;
  const textColor = `$${color}11`;
  return {
    background,
    color: textColor,
    borderColor: "transparent",
    ...hasHover && {
      "&:not([aria-disabled=true]):hover": {
        borderColor: "transparent",
        boxShadow: "none",
        background: hover
      }
    },
    "&:not([aria-disabled=true]):focus": {
      outline: `3px solid $${color}2`,
      outlineOffset: "1px"
    }
  };
}
function createLinkVariant(keyColor, hasHover = true) {
  const color = String(keyColor);
  const textColor = `$${color}11`;
  return {
    py: "$1",
    px: "$1",
    height: "auto",
    minW: "auto",
    background: "transparent",
    borderColor: "transparent",
    color: textColor,
    ...hasHover && {
      "&:not([aria-disabled=true]):hover": {
        borderColor: "transparent",
        boxShadow: "none",
        backgroundColor: "transparent",
        textDecoration: "underline"
      }
    },
    "&:not([aria-disabled=true]):focus": {
      outline: `2px solid $${color}2`,
      outlineOffset: "1px"
    }
  };
}
var size = {
  xs: {
    gap: "5px",
    px: "$2",
    fontSize: "$xs",
    fontWeight: "$semibold",
    height: "$7"
  },
  sm: {
    gap: "$2",
    px: "$3",
    fontSize: "$sm",
    fontWeight: "$medium",
    height: "$8"
  },
  md: {
    gap: "$2",
    px: "$4",
    fontSize: "$base",
    fontWeight: "$medium",
    height: "$10"
  },
  lg: {
    gap: "$3",
    px: "$5",
    fontSize: "$lg",
    fontWeight: "$medium",
    height: "$12"
  }
};
function getSolidVariants(hasHover) {
  return colorKeys.reduce(
    (obj, key) => ({
      ...obj,
      [key]: createSolidVariant(key, hasHover)
    }),
    {}
  );
}
function getOutlinedVariants(hasHover) {
  return colorKeys.map((key) => ({
    color: key,
    variant: "outlined",
    css: createOutlinedVariant(key, hasHover)
  }));
}
function getGhostVariants(hasHover) {
  return colorKeys.map((key) => ({
    color: key,
    variant: "ghost",
    css: createGhostVariant(key, hasHover)
  }));
}
function getLinkVariants(hasHover) {
  return colorKeys.map((key) => ({
    color: key,
    variant: "link",
    css: createLinkVariant(key, hasHover)
  }));
}
var colors = {
  solid: getSolidVariants(),
  outlined: getOutlinedVariants(),
  ghost: getGhostVariants(),
  link: getLinkVariants()
};

// src/components/Button/styles.ts
var button = css5({
  appearance: "none",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid transparent",
  borderRadius: "$lg",
  transition: "all",
  textDecoration: "none",
  fontFamily: "$sans",
  "&:not([aria-disabled=true]):active, &:not([aria-disabled=true])[aria-pressed=true]": {
    transform: "scale(0.96)"
  },
  variants: {
    size,
    color: colors.solid,
    variant: {
      solid: {},
      outlined: {},
      ghost: {},
      link: {}
    },
    disabled: {
      true: {
        opacity: "0.6",
        cursor: "default"
      }
    },
    justIcon: {
      true: {
        minW: "auto"
      }
    },
    isLink: {
      true: {
        textDecoration: "none",
        background: "red"
      }
    }
  },
  compoundVariants: [
    ...colors.outlined,
    ...colors.ghost,
    ...colors.link,
    {
      size: "xs",
      justIcon: true,
      css: { px: "$1" }
    },
    {
      size: "sm",
      justIcon: true,
      css: { px: "$2" }
    },
    {
      size: "md",
      justIcon: true,
      css: { px: "$3" }
    },
    {
      size: "lg",
      justIcon: true,
      css: { px: "$4" }
    }
  ],
  defaultVariants: {
    size: "md",
    color: "accent",
    variant: "solid",
    isLink: false
  }
});

// src/components/Button/Button.tsx
import { Fragment, jsx as jsx9, jsxs as jsxs4 } from "react/jsx-runtime";
function createIcon(icon, iconAriaLabel, iconSize, color) {
  if (typeof icon === "string") {
    return /* @__PURE__ */ jsx9(Icon, {
      icon,
      label: iconAriaLabel,
      size: iconSize,
      color
    });
  }
  return icon && cloneElement3(icon, {
    label: iconAriaLabel,
    size: iconSize,
    ...color && { color }
  });
}
function getIconSize(size3, iconSize) {
  if (iconSize)
    return iconSize;
  if (size3 === "lg")
    return 20;
  if (size3 === "md")
    return 18;
  return 16;
}
function getChildren({
  isLoading,
  size: size3 = "md",
  children,
  iconLeft,
  iconRight
}) {
  if (isLoading) {
    return /* @__PURE__ */ jsxs4(Fragment, {
      children: [
        /* @__PURE__ */ jsx9(Spinner, {
          color: "current",
          size: SPINNER_SIZE[size3]
        }),
        " Loading..."
      ]
    });
  }
  return /* @__PURE__ */ jsxs4(Fragment, {
    children: [
      iconLeft,
      children,
      iconRight
    ]
  });
}
var SPINNER_SIZE = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 20
};
var Button = createComponent(
  ({
    as = "button",
    size: size3 = "md",
    color = "accent",
    variant = "solid",
    iconSize: initialIconSize,
    leftIcon,
    leftIconAriaLabel,
    rightIcon,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    className,
    justIcon,
    isLink,
    children,
    ref,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconSize = getIconSize(size3, initialIconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const classes = cx10("fuel_button", className);
    const innerRef = useRef(null);
    const { buttonProps, isPressed } = useButton(
      {
        ...omit(["onClick"], props),
        isDisabled,
        ...isLink && { elementType: "a" },
        ...typeof props.onClick !== "undefined" && typeof props.onPress === "undefined" && {
          onPress: props.onClick
        }
      },
      innerRef
    );
    const customProps = {
      ...omit(["onPress", "onClick"], props),
      as,
      disabled,
      ref: mergeRefs(ref, innerRef),
      className: classes,
      "aria-disabled": isDisabled,
      "aria-busy": isLoading,
      ...!isLink && { "aria-pressed": !isDisabled && isPressed }
    };
    const styleProps = {
      size: size3,
      variant,
      disabled,
      justIcon,
      color,
      isLink
    };
    return createStyledElement(
      "button",
      button,
      styleProps,
      mergeProps(buttonProps, customProps),
      getChildren({
        size: size3,
        isLoading,
        children,
        iconLeft,
        iconRight
      })
    );
  }
);
Button.id = "Button";

// src/components/Alert/AlertButton.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var AlertButton = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx11("fuel_alert--button", className);
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ jsx10(Button, {
      ...customProps,
      variant: "link",
      children
    });
  }
);
AlertButton.id = "AlertButton";

// src/components/Alert/AlertDescription.tsx
import { cx as cx12 } from "@fuel-ui/css";
import { jsx as jsx11 } from "react/jsx-runtime";
var AlertDescription = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx12(
      "fuel_alert--description",
      className,
      description()
    );
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ jsx11(Box, {
      ...customProps,
      children
    });
  }
);

// src/components/Alert/AlertTitle.tsx
import { cx as cx14 } from "@fuel-ui/css";

// src/components/Heading/Heading.tsx
import { css as css6, allColors, cx as cx13, utils } from "@fuel-ui/css";
import { jsxs as jsxs5 } from "react/jsx-runtime";
function getIconSize2(as, iconSize) {
  if (iconSize)
    return iconSize;
  if (as === "h1" || as === "h2")
    return 22;
  if (as === "h5" || as === "h6")
    return 16;
  return 18;
}
var Heading = createComponent(
  ({
    as = "h2",
    fontSize,
    fontColor,
    className,
    iconSize: initialIconSize,
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    children,
    ...props
  }) => {
    const iconSize = getIconSize2(as, initialIconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const withIcon = Boolean(leftIcon || rightIcon);
    const classes = cx13(
      "fuel_heading",
      className,
      styles2({ fontSize, fontColor, as, withIcon })
    );
    return /* @__PURE__ */ jsxs5(Box, {
      ...props,
      as,
      className: classes,
      role: "heading",
      children: [
        iconLeft,
        " ",
        children,
        " ",
        iconRight
      ]
    });
  }
);
var styles2 = css6({
  mt: "0.5rem",
  mb: "1.25rem",
  letterSpacing: "-0.02em",
  color: "$gray12",
  fontFamily: "$heading",
  fontWeight: "$semibold",
  "& .fuel_icon": {
    color: "$gray8"
  },
  variants: {
    fontSize: utils.textSize.__keys.reduce(
      (obj, key) => ({ ...obj, [key]: { textSize: key } }),
      {}
    ),
    fontColor: allColors.reduce(
      (obj, key) => ({ ...obj, [key]: { color: `$${key}` } }),
      {}
    ),
    as: {
      h1: {
        textSize: "4xl"
      },
      h2: {
        textSize: "3xl"
      },
      h3: {
        textSize: "2xl"
      },
      h4: {
        textSize: "xl"
      },
      h5: {
        textSize: "lg"
      },
      h6: {
        textSize: "base"
      }
    },
    withIcon: {
      true: {
        display: "inline-flex",
        gap: "$2"
      }
    }
  },
  defaultVariants: {
    fontSize: "md",
    fontColor: "fontColor"
  }
});

// src/components/Alert/AlertTitle.tsx
import { jsx as jsx12 } from "react/jsx-runtime";
var AlertTitle = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx14("fuel_alert--title", className, title());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ jsx12(Flex, {
      as: "header",
      ...customProps,
      children: /* @__PURE__ */ jsx12(Heading, {
        as: "h2",
        children
      })
    });
  }
);

// src/components/Alert/Alert.tsx
import { jsx as jsx13, jsxs as jsxs6 } from "react/jsx-runtime";
var ctx = createContext({});
function useAlertProps() {
  return useContext(ctx);
}
var STATUS_ICONS = {
  info: { icon: "WarningCircle" },
  warning: { icon: "Warning" },
  success: { icon: "CheckCircle" },
  error: { icon: "XCircle" }
};
var Alert = createComponent(
  ({
    direction = "column",
    status = "info",
    children,
    className,
    ...props
  }) => {
    const classes = cx15(
      "fuel_alert",
      className,
      root2({ status, direction })
    );
    const customProps = {
      ...props,
      direction,
      className: classes
    };
    const items = Children2.toArray(children).map((child) => {
      if (child?.type?.id === "AlertActions") {
        return cloneElement4(child);
      }
      return child;
    });
    return /* @__PURE__ */ jsx13(ctx.Provider, {
      value: { status },
      children: /* @__PURE__ */ jsxs6(Box, {
        ...customProps,
        children: [
          /* @__PURE__ */ jsx13(Box, {
            className: "fuel_alert--icon",
            children: /* @__PURE__ */ jsx13(Icon, {
              ...STATUS_ICONS[status]
            })
          }),
          /* @__PURE__ */ jsx13(Flex, {
            className: "fuel_alert--content",
            children: items
          })
        ]
      })
    });
  }
);
Alert.id = "Alert";
Alert.Title = AlertTitle;
Alert.Description = AlertDescription;
Alert.Actions = AlertActions;
Alert.Button = AlertButton;

// src/components/AlertDialog/AlertDialog.tsx
import { styled as styled9 } from "@fuel-ui/css";
import * as RAlertDialog7 from "@radix-ui/react-alert-dialog";

// src/components/AlertDialog/AlertDialogAction.tsx
import { styled as styled5 } from "@fuel-ui/css";
import * as RAlertDialog from "@radix-ui/react-alert-dialog";
var AlertDialogAction = styled5(RAlertDialog.Action);
AlertDialogAction.defaultProps = {
  asChild: true
};

// src/components/AlertDialog/AlertDialogCancel.tsx
import { styled as styled6 } from "@fuel-ui/css";
import * as RAlertDialog2 from "@radix-ui/react-alert-dialog";
var AlertDialogCancel = styled6(RAlertDialog2.Cancel);
AlertDialogCancel.defaultProps = {
  asChild: true
};

// src/components/AlertDialog/AlertDialogContent.tsx
import { cx as cx16, styled as styled7 } from "@fuel-ui/css";
import * as RAlertDialog3 from "@radix-ui/react-alert-dialog";

// src/components/Dialog/styles.ts
import { css as css7, keyframes as keyframes3 } from "@fuel-ui/css";
var overlayShow = keyframes3({
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var contentShow = keyframes3({
  "0%": {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(.96)"
  },
  "100%": {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
});
var overlay = css7({
  inset: 0,
  position: "fixed",
  backgroundColor: "rgba(0,0,0,.5)",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
  }
});
var content2 = css7({
  display: "flex",
  flexDirection: "column",
  position: "fixed",
  top: "50%",
  left: "50%",
  width: "90vw",
  maxWidth: "450px",
  maxHeight: "85vh",
  br: "$md",
  backgroundColor: "$gray1",
  boxShadow: "$sm",
  transform: "translate(-50%, -50%)",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${contentShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
  },
  "&:focus": {
    outline: "none"
  }
});
var heading = css7({
  p: "$4",
  m: "$0",
  color: "$gray12",
  fontFamily: "$heading",
  fontSize: "$xl",
  borderBottom: "1px solid $borderColor"
});
var description2 = css7({
  p: "$4",
  my: "$0",
  color: "$gray10",
  textSize: "base"
});
var footer = css7({
  is: ["centered"],
  gap: "$3",
  mt: "$2",
  p: "$4",
  borderTop: "1px solid $borderColor",
  variants: {
    align: {
      start: {
        justifyContent: "flex-start"
      },
      end: {
        justifyContent: "flex-end"
      }
    }
  },
  defaultVariants: {
    align: "end"
  }
});
var closeButton = css7({
  position: "absolute",
  top: "$2",
  right: "$2"
});

// src/components/AlertDialog/AlertDialogContent.tsx
import { jsx as jsx14, jsxs as jsxs7 } from "react/jsx-runtime";
var Root4 = styled7(RAlertDialog3.Content);
var AlertDialogContent = createComponent(
  ({ children, className, overlayClassName, css: css32, ...props }) => /* @__PURE__ */ jsxs7(RAlertDialog3.Portal, {
    children: [
      /* @__PURE__ */ jsx14(RAlertDialog3.Overlay, {
        className: cx16(overlayClassName, CLASSES.Overlay)
      }),
      /* @__PURE__ */ jsx14(Root4, {
        ...props,
        css: css32,
        className: cx16(className, CLASSES.Content),
        children
      })
    ]
  })
);
var CLASSES = {
  Overlay: cx16("fuel_alert-dialog--overlay", overlay()),
  Content: cx16("fuel_alert-dialog--content", content2())
};

// src/components/AlertDialog/AlertDialogDescription.tsx
import { cx as cx17 } from "@fuel-ui/css";
import * as RAlertDialog4 from "@radix-ui/react-alert-dialog";
var AlertDialogDescription = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx17("fuel_alert-dialog--description", className);
    return createStyledElement(
      RAlertDialog4.Description,
      description2,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/AlertDialog/AlertDialogFooter.tsx
import { cx as cx18 } from "@fuel-ui/css";
var AlertDialogFooter = createComponent(
  ({ align, className, children, ...props }) => {
    const classes = cx18("fuel_alert-dialog--footer", className);
    return createStyledElement(
      "footer",
      footer,
      { align },
      { ...props, className: classes },
      children
    );
  }
);

// src/components/AlertDialog/AlertDialogHeading.tsx
import { cx as cx19 } from "@fuel-ui/css";
import * as RAlertDialog5 from "@radix-ui/react-alert-dialog";
var AlertDialogHeading = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx19("fuel_alert-dialog--heading", className);
    return createStyledElement(
      RAlertDialog5.Title,
      heading,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/AlertDialog/AlertDialogTrigger.tsx
import { styled as styled8 } from "@fuel-ui/css";
import * as RAlertDialog6 from "@radix-ui/react-alert-dialog";
var AlertDialogTrigger2 = styled8(RAlertDialog6.AlertDialogTrigger);
AlertDialogTrigger2.defaultProps = {
  asChild: true
};

// src/components/AlertDialog/AlertDialog.tsx
var AlertDialogRoot = styled9(RAlertDialog7.Root);
var AlertDialog = AlertDialogRoot;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger2;
AlertDialog.Heading = AlertDialogHeading;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

// src/components/AspectRatio/AspectRatio.tsx
import { cx as cx20 } from "@fuel-ui/css";
import * as AspectRatioPrimitive from "@radix-ui/react-aspect-ratio";
var AspectRatio = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx20("fuel_aspect-ratio", className);
    return createStyledElement(
      AspectRatioPrimitive.Root,
      null,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Avatar/Avatar.tsx
import { cx as cx22 } from "@fuel-ui/css";
import * as RAvatar from "@radix-ui/react-avatar";

// src/components/Avatar/AvatarGenerated.tsx
import { cx as cx21 } from "@fuel-ui/css";

// src/components/Avatar/hooks/useAvatarGenerated.tsx
import { lightColors as lightColors2 } from "@fuel-ui/css";
import { toSvg } from "jdenticon";
var SIZES = {
  xsm: 24,
  sm: 32,
  md: 40,
  lg: 52,
  xl: 80,
  "2xl": 100
};
function getBackgroundColor(backgroundColor, hash) {
  if (backgroundColor === "fuel")
    return lightColors2.brand;
  if (backgroundColor !== "random")
    return backgroundColor;
  if (!hash)
    return hash;
  const numberHash = [...hash].reduce(
    (prev, _cur, i) => hash.charCodeAt(i) + ((prev << 5) - prev),
    0
  );
  return [0, 0, 0].reduce(
    (prev, _v, i) => `${prev}${`00${(numberHash >> i * 8 & 255).toString(16)}`.slice(
      -2
    )}`,
    "#"
  );
}
function useAvatarGenerated({
  background,
  hash,
  size: size3
}) {
  const totalSize = SIZES[size3];
  const backColor = getBackgroundColor(background, hash);
  return {
    svgString: toSvg(hash, totalSize, {
      backColor,
      padding: 0.15
    }),
    totalSize
  };
}

// src/components/Avatar/AvatarGenerated.tsx
import { jsx as jsx15 } from "react/jsx-runtime";
var AvatarGenerated = createComponent(({ hash, size: size3 = "md", className, css: css32, as, background, ...props }) => {
  const { svgString, totalSize } = useAvatarGenerated({
    background,
    hash,
    size: size3
  });
  const classes = cx21(className, "fuel_avatar-generated");
  return /* @__PURE__ */ jsx15(Box, {
    ...props,
    className: classes,
    as,
    css: {
      ...css32,
      width: totalSize,
      height: totalSize,
      borderRadius: "100%",
      overflow: "hidden"
    },
    dangerouslySetInnerHTML: {
      __html: svgString
    }
  });
});

// src/components/Avatar/styles.ts
import { css as css8 } from "@fuel-ui/css";
var avatar = css8({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  verticalAlign: "middle",
  overflow: "hidden",
  userSelect: "none",
  borderRadius: "100%",
  background: "$gray6",
  variants: {
    size: {
      xsm: {
        boxSize: "24px"
      },
      sm: {
        boxSize: "32px"
      },
      md: {
        boxSize: "40px"
      },
      lg: {
        boxSize: "52px"
      },
      xl: {
        boxSize: "80px"
      },
      "2xl": {
        boxSize: "100px"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var image = css8({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var fallback = css8({
  width: "$full%",
  height: "$full",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "$slate12",
  textSize: "base",
  fontWeight: "$semibold"
});

// src/components/Avatar/Avatar.tsx
import { Fragment as Fragment2, jsx as jsx16, jsxs as jsxs8 } from "react/jsx-runtime";
var Avatar = createComponent(
  ({ name, size: size3, className, css: css32, as, ...props }) => {
    const classes = cx22("fuel_avatar", className);
    const wrapperProps = { as, css: css32, className: classes };
    const children = /* @__PURE__ */ jsxs8(Fragment2, {
      children: [
        /* @__PURE__ */ jsx16(RAvatar.AvatarImage, {
          ...props,
          alt: props.alt || name,
          className: image()
        }),
        /* @__PURE__ */ jsx16(RAvatar.AvatarFallback, {
          className: fallback(),
          children: name.split(" ").map((w) => w.slice(0, 1)).join("")
        })
      ]
    });
    return createStyledElement(
      RAvatar.Root,
      avatar,
      { size: size3 },
      wrapperProps,
      children
    );
  }
);
Avatar.Generated = AvatarGenerated;

// src/components/Badge/Badge.tsx
import { cx as cx23 } from "@fuel-ui/css";

// src/components/Badge/styles.ts
import { css as css9 } from "@fuel-ui/css";

// src/components/Badge/variants.ts
import { colorKeys as colorKeys2, isBright as isBright2 } from "@fuel-ui/css";
function createSolidVariant2(keyColor) {
  const color = String(keyColor);
  const background = isBright2(color) ? `$${color}11` : `$${color}9`;
  const textColor = isBright2(color) ? `$${color}3` : `$${color}1`;
  return {
    background,
    color: textColor
  };
}
function createOutlinedVariant2(keyColor) {
  const color = String(keyColor);
  const textColor = `$${color}11`;
  const borderColor = `$${color}7`;
  return {
    borderColor,
    background: "transparent",
    color: textColor
  };
}
function createGhostVariant2(keyColor) {
  const color = String(keyColor);
  const background = `$${color}3`;
  const textColor = `$${color}11`;
  return {
    background,
    color: textColor,
    borderColor: "transparent"
  };
}
var colors2 = {
  solid: colorKeys2.reduce(
    (obj, key) => ({ ...obj, [key]: createSolidVariant2(key) }),
    {}
  ),
  outlined: colorKeys2.map((key) => ({
    color: key,
    variant: "outlined",
    css: createOutlinedVariant2(key)
  })),
  ghost: colorKeys2.map((key) => ({
    color: key,
    variant: "ghost",
    css: createGhostVariant2(key)
  }))
};

// src/components/Badge/styles.ts
var badge = css9({
  border: "none",
  transition: "all",
  textDecoration: "none",
  py: "2px",
  px: "$2",
  borderRadius: "$md",
  textTransform: "uppercase",
  fontFamily: "$sans",
  fontWeight: "$extrabold",
  variants: {
    color: colors2.solid,
    variant: {
      solid: {},
      outlined: {},
      ghost: {}
    }
  },
  compoundVariants: [
    ...colors2.outlined,
    ...colors2.ghost
  ],
  defaultVariants: {
    color: "accent",
    variant: "ghost"
  }
});

// src/components/Badge/Badge.tsx
var Badge = createComponent(
  ({ color, variant, className, children, ...props }) => {
    const classes = cx23("fuel_badge", className);
    return createStyledElement(
      "span",
      badge,
      { variant, color },
      { ...props, className: classes },
      children
    );
  }
);

// src/components/BoxCentered/BoxCentered.tsx
import { css as css10, cx as cx24 } from "@fuel-ui/css";
import { jsx as jsx17 } from "react/jsx-runtime";
var BoxCentered = createComponent(
  ({ minWS, minHS, className, ...props }) => {
    const classes = cx24(
      "fuel_box-centered",
      className,
      styles3({ minWS, minHS })
    );
    return /* @__PURE__ */ jsx17(Flex, {
      ...props,
      className: classes
    });
  }
);
var styles3 = css10({
  is: ["centered"],
  variants: {
    minWS: {
      true: {
        minW: "$screenW"
      }
    },
    minHS: {
      true: {
        minH: "$screenH"
      }
    }
  }
});

// src/components/ButtonGroup/ButtonGroup.tsx
import { cx as cx25 } from "@fuel-ui/css";
import { Children as Children4, cloneElement as cloneElement6 } from "react";
import { mergeProps as mergeProps3 } from "react-aria";

// src/components/Focus/FocusArrowNavigator.tsx
import { Children as Children3, cloneElement as cloneElement5 } from "react";
import { FocusScope, mergeProps as mergeProps2, useFocusManager } from "react-aria";
import { Fragment as Fragment3, jsx as jsx18 } from "react/jsx-runtime";
var GroupChildren = createComponent(({ children }) => {
  const { onKeyDown } = useFocusNavigator();
  if (isRightChildrenType(children)) {
    return /* @__PURE__ */ jsx18(Fragment3, {
      children: Children3.map(
        children,
        (child, idx) => cloneElement5(
          child,
          mergeProps2(child?.props || {}, {
            onKeyDown,
            tabIndex: idx === 0 ? 0 : -1
          })
        )
      )
    });
  }
  throw new Error("Children type not accepted");
});
var FocusArrowNavigator = createComponent(
  ({ children, ...props }) => /* @__PURE__ */ jsx18(FocusScope, {
    ...props,
    children: /* @__PURE__ */ jsx18(GroupChildren, {
      children
    })
  })
);
function useFocusNavigator() {
  const focusManager = useFocusManager();
  const onKeyDown = (e) => {
    switch (e.key) {
      case "ArrowRight":
        focusManager.focusPrevious({ wrap: true });
        break;
      case "ArrowUp":
        focusManager.focusPrevious({ wrap: true });
        break;
      case "ArrowLeft":
        focusManager.focusNext({ wrap: true });
        break;
      case "ArrowDown":
        focusManager.focusNext({ wrap: true });
        break;
    }
  };
  return {
    onKeyDown
  };
}
function isRightChildrenType(children) {
  return typeof children !== "boolean" && typeof children !== "string" && typeof children !== "undefined" && typeof children !== "number";
}

// src/components/Focus/FocusScope.tsx
import { FocusScope as FocusScope2 } from "react-aria";

// src/components/Focus/Focus.tsx
var Focus = {
  Scope: FocusScope2,
  ArrowNavigator: FocusArrowNavigator
};

// src/components/ButtonGroup/styles.ts
import { css as css11 } from "@fuel-ui/css";
var root3 = css11({
  display: "flex",
  alignItems: "center",
  "& > .fuel_button ~ .fuel_button": {
    marginLeft: 1
  },
  "& > .fuel_button:first-of-type": {
    borderTopRightRadius: "$0",
    borderBottomRightRadius: "$0"
  },
  "& > .fuel_button:last-of-type": {
    borderTopLeftRadius: "$0",
    borderBottomLeftRadius: "$0"
  },
  "& > .fuel_button:not(:first-of-type,:last-of-type)": {
    borderRadius: "$0"
  },
  "& > .fuel_button:focus-within": {
    zIndex: 1,
    position: "relative"
  }
});

// src/components/ButtonGroup/ButtonGroup.tsx
import { jsx as jsx19 } from "react/jsx-runtime";
function GroupChildren2({ children, childrenProps }) {
  return createStyledElement(
    "div",
    root3,
    null,
    { className: cx25("fuel_button-group") },
    Children4.toArray(children).map(
      (child) => cloneElement6(child, mergeProps3(child.props, childrenProps))
    )
  );
}
var BUTTON_BASE_PROPS = ["size", "color", "variant", "isDisabled"];
var ButtonGroup = createComponent(
  ({ children, ...props }) => /* @__PURE__ */ jsx19(GroupChildren2, {
    childrenProps: pick(BUTTON_BASE_PROPS, props),
    children: /* @__PURE__ */ jsx19(Focus.ArrowNavigator, {
      children
    })
  })
);

// src/components/ButtonLink/ButtonLink.tsx
import { cx as cx26 } from "@fuel-ui/css";
import { jsx as jsx20 } from "react/jsx-runtime";
var ButtonLink = createComponent(
  ({ as = "a", role = "link", isExternal, className, ...props }) => {
    const customProps = {
      ...props,
      className: cx26("fuel_button-link", className),
      ...isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
        rightIcon: "LinkSimple"
      }
    };
    return /* @__PURE__ */ jsx20(Button, {
      as,
      ...customProps,
      variant: "link",
      role,
      isLink: true
    });
  }
);

// src/components/Card/Card.tsx
import { cx as cx30 } from "@fuel-ui/css";

// src/components/Card/CardBody.tsx
import { cx as cx27 } from "@fuel-ui/css";

// src/components/Card/styles.ts
import { css as css12 } from "@fuel-ui/css";
var card = css12({
  background: "$gray1",
  borderRadius: "$md",
  border: "1px solid transparent",
  boxShadow: "$sm"
});
var header2 = css12({
  p: "$5",
  borderBottom: "1px solid $borderColor",
  "& .fuel_heading": {
    margin: 0
  }
});
var body = css12({
  display: "block",
  px: "$5",
  py: "$5"
});
var footer2 = css12({
  p: "$5",
  borderTop: "1px solid $borderColor"
});

// src/components/Card/CardBody.tsx
import { jsx as jsx21 } from "react/jsx-runtime";
var CardBody = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx27("fuel_card--body", className, body());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ jsx21(Box, {
      ...customProps,
      children
    });
  }
);

// src/components/Card/CardFooter.tsx
import { cx as cx28 } from "@fuel-ui/css";
import { jsx as jsx22 } from "react/jsx-runtime";
var CardFooter = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx28("fuel_card--footer", className, footer2());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ jsx22(Flex, {
      as: "footer",
      ...customProps,
      children
    });
  }
);

// src/components/Card/CardHeader.tsx
import { cx as cx29 } from "@fuel-ui/css";
import { jsx as jsx23 } from "react/jsx-runtime";
var CardHeader = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx29("fuel_card--header", className, header2());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ jsx23(Flex, {
      as: "header",
      ...customProps,
      children
    });
  }
);

// src/components/Card/Card.tsx
import { jsx as jsx24 } from "react/jsx-runtime";
var Card = createComponent(
  ({ direction = "column", children, className, ...props }) => {
    const classes = cx30("fuel_card", className, card());
    const customProps = { ...props, direction, className: classes };
    return /* @__PURE__ */ jsx24(Flex, {
      as: "article",
      ...customProps,
      children
    });
  }
);
Card.id = "Card";
Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

// src/components/CardList/CardList.tsx
import { cx as cx32 } from "@fuel-ui/css";
import { createContext as createContext2, useContext as useContext2 } from "react";

// src/components/CardList/CardListItem.tsx
import { css as css13, cx as cx31 } from "@fuel-ui/css";
import { jsx as jsx25, jsxs as jsxs9 } from "react/jsx-runtime";
var CardListItem = createComponent(
  ({ children, className, rightEl, isActive, ...props }) => {
    const { isClickable } = useCardListContext();
    const classes = cx31(
      "fuel_card-list--item",
      className,
      styles4.root({ isActive, isClickable })
    );
    return /* @__PURE__ */ jsxs9(Card, {
      direction: "row",
      ...props,
      className: classes,
      children: [
        /* @__PURE__ */ jsx25(Flex, {
          align: "center",
          gap: "$3",
          css: { flex: 1 },
          children
        }),
        rightEl
      ]
    });
  }
);
var styles4 = {
  root: css13({
    position: "relative",
    overflow: "hidden",
    py: "$3",
    px: "$4",
    gap: "$3",
    borderColor: "transparent",
    variants: {
      isActive: {
        true: {
          "&::after": {
            position: "absolute",
            display: "block",
            content: '""',
            top: 0,
            left: 0,
            width: "3px",
            height: "100%",
            background: "$accent11"
          }
        }
      },
      isClickable: {
        true: {
          "&:hover, &:focus-within": {
            outline: "none",
            borderColor: "$borderHover"
          }
        }
      }
    },
    defaultVariants: {
      isActive: false,
      isClickable: false
    }
  })
};

// src/components/CardList/CardList.tsx
import { jsx as jsx26 } from "react/jsx-runtime";
var ctx2 = createContext2({});
function useCardListContext() {
  return useContext2(ctx2);
}
var CardList = createComponent(
  ({ children, className, isClickable, autoFocus, ...props }) => {
    const classes = cx32("fuel_card-list", className);
    return /* @__PURE__ */ jsx26(ctx2.Provider, {
      value: { isClickable, autoFocus },
      children: /* @__PURE__ */ jsx26(Stack, {
        ...props,
        className: classes,
        children: isClickable ? /* @__PURE__ */ jsx26(Focus.ArrowNavigator, {
          autoFocus,
          children
        }) : children
      })
    });
  }
);
CardList.Item = CardListItem;

// src/components/Checkbox/Checkbox.tsx
import { cx as cx34 } from "@fuel-ui/css";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";

// src/components/Form/FormControl.tsx
import { cx as cx33 } from "@fuel-ui/css";
import { Children as Children5, createContext as createContext3, useContext as useContext3, useId } from "react";

// src/components/Form/styles.ts
import { css as css14 } from "@fuel-ui/css";
var control = css14({
  display: "flex",
  flexDirection: "column",
  gap: "$2"
});
var label = css14({
  px: "$1",
  display: "inline-flex",
  alignItems: "center",
  gap: "$2",
  color: "$gray11",
  fontWeight: "$medium",
  fontSize: "$base",
  variants: {
    required: {
      true: {
        "&:after": {
          display: "block",
          content: "*",
          color: "$accent11"
        }
      }
    }
  }
});
var helperText = css14({
  px: "$1",
  textSize: "sm",
  "&[aria-hidden=true]": {
    display: "none"
  }
});
var errorMessage = css14({
  px: "$1",
  textSize: "sm",
  "&[aria-hidden=true]": {
    display: "none"
  }
});

// src/components/Form/FormControl.tsx
import { jsx as jsx27 } from "react/jsx-runtime";
function getRightDescribedBy(ids, id, isInvalid) {
  if (isInvalid && ids.some((i) => i?.includes("FormErrorMessage"))) {
    return `feedback${id}`;
  }
  if (ids.some((i) => i?.includes("FormHelperText"))) {
    return `helperText${id}`;
  }
  return `label${id}`;
}
var ctx3 = createContext3({ id: "" });
function useFormControlProps() {
  return useContext3(ctx3);
}
var FormControl = createComponent(
  ({
    children,
    className,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    ...props
  }) => {
    const id = useId();
    const classes = cx33("fuel_form--control", className);
    const childArr = Children5.toArray(children);
    const childIds = childArr.map((child) => child?.type?.id);
    const describedBy = getRightDescribedBy(childIds, id, isInvalid);
    const inputProps = {
      id,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      describedBy
    };
    const customProps = {
      ...props,
      role: "group",
      className: classes
    };
    return /* @__PURE__ */ jsx27(ctx3.Provider, {
      value: inputProps,
      children: createStyledElement(
        "div",
        control,
        null,
        customProps,
        children
      )
    });
  }
);

// src/components/Checkbox/styles.ts
import { css as css15, darkTheme as darkTheme2 } from "@fuel-ui/css";
var root4 = css15({
  all: "unset",
  cursor: "pointer",
  position: "relative",
  backgroundColor: "$inputBg",
  width: "$6",
  height: "$6",
  borderRadius: "$md",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  boxShadow: "$sm",
  fontSize: "$base",
  [`.${darkTheme2} &`]: {
    background: "$gray2"
  },
  "&:after": {
    position: "absolute",
    display: "block",
    content: '""',
    top: 0,
    left: 0,
    w: "calc(100%)",
    height: "calc(100%)",
    background: "transparent",
    borderRadius: "calc($md + 4px)",
    transform: "translate(-2px, -2px)"
  },
  "&:focus-within": {
    borderColor: "$gray5",
    "&:after": {
      border: "2px solid $accent5"
    }
  },
  "&[aria-disabled=true]": {
    opacity: "0.5",
    cursor: "default"
  }
});
var indicator = css15({
  is: ["centered"],
  color: "$accent11",
  variants: {
    disabled: {
      true: {
        color: "$gray10"
      }
    }
  }
});

// src/components/Checkbox/Checkbox.tsx
import { jsx as jsx28 } from "react/jsx-runtime";
var Checkbox = createComponent(
  ({ isDisabled, isReadOnly, className, ...props }) => {
    const formControlProps = useFormControlProps();
    const disabled = isDisabled || isReadOnly || formControlProps.isDisabled || formControlProps.isReadOnly;
    const readonly = isReadOnly || formControlProps.isReadOnly;
    const classes = cx34("fuel_checkbox", className);
    const indicatorClass = indicator({ disabled });
    const customProps = {
      ...props,
      disabled,
      "aria-disabled": disabled,
      "aria-readonly": readonly,
      className: classes,
      required: props.required || formControlProps.isRequired
    };
    return createStyledElement(
      CheckboxPrimitive.Root,
      root4,
      { disabled },
      customProps,
      /* @__PURE__ */ jsx28(CheckboxPrimitive.CheckboxIndicator, {
        className: indicatorClass,
        children: /* @__PURE__ */ jsx28(Icon, {
          icon: "Check"
        })
      })
    );
  }
);
Checkbox.id = "Checkbox";

// src/components/Container/Container.tsx
import { css as css16, cx as cx35 } from "@fuel-ui/css";
import { jsx as jsx29 } from "react/jsx-runtime";
var Container = createComponent(
  ({ className, size: size3, ...props }) => {
    const classes = cx35("fuel_container", className, styles5({ size: size3 }));
    return /* @__PURE__ */ jsx29(Box, {
      ...props,
      className: classes
    });
  }
);
var styles5 = css16({
  margin: "0 auto",
  variants: {
    size: {
      sm: {
        px: "$10",
        w: "$xl"
      },
      md: {
        px: "$14",
        w: "$2xl"
      },
      lg: {
        px: "$14",
        w: "$4xl"
      },
      xl: {
        px: "$14",
        w: "$6xl"
      }
    }
  },
  defaultVariants: {
    size: "lg"
  }
});

// src/components/Copyable/Copyable.tsx
import { cssObj, cx as cx38 } from "@fuel-ui/css";

// src/components/IconButton/IconButton.tsx
import { cx as cx37 } from "@fuel-ui/css";

// src/components/Tooltip/Tooltip.tsx
import { cx as cx36 } from "@fuel-ui/css";
import * as RTooltip from "@radix-ui/react-tooltip";

// src/components/Tooltip/styles.ts
import { keyframes as keyframes4, css as css17 } from "@fuel-ui/css";
var slideUpAndFade = keyframes4({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade = keyframes4({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideDownAndFade = keyframes4({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade = keyframes4({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var arrow = css17({
  fill: "$gray2"
});
var content3 = css17({
  borderRadius: "$md",
  py: "$2",
  px: "$4",
  fontSize: "$sm",
  lineHeight: 1,
  color: "$gray10",
  backgroundColor: "$gray2",
  boxShadow: "$sm",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade }
    }
  }
});

// src/components/Tooltip/Tooltip.tsx
import { jsx as jsx30, jsxs as jsxs10 } from "react/jsx-runtime";
var Tooltip = createComponent(
  ({
    children,
    content: content7,
    side = "top",
    align,
    className,
    arrowClassName,
    sideOffset = 5,
    alignOffset,
    ...props
  }) => /* @__PURE__ */ jsx30(RTooltip.Provider, {
    children: /* @__PURE__ */ jsxs10(RTooltip.Root, {
      ...props,
      children: [
        /* @__PURE__ */ jsx30(RTooltip.Trigger, {
          asChild: true,
          children
        }),
        /* @__PURE__ */ jsxs10(RTooltip.Content, {
          className: cx36(className, CLASSES2.Content),
          side,
          align,
          sideOffset,
          alignOffset,
          children: [
            /* @__PURE__ */ jsx30(RTooltip.Arrow, {
              offset: 5,
              width: 11,
              height: 5,
              className: cx36(arrowClassName, CLASSES2.Arrow)
            }),
            content7
          ]
        })
      ]
    })
  })
);
var CLASSES2 = {
  Content: cx36("fuel_tooltip--content", content3()),
  Arrow: cx36("fuel_tooltip--arrow", arrow())
};

// src/components/IconButton/IconButton.tsx
import { jsx as jsx31 } from "react/jsx-runtime";
var IconButton = createComponent(
  ({ icon, tooltip, className, ...props }) => {
    const classes = cx37("fuel_icon-buton", className);
    const content7 = /* @__PURE__ */ jsx31(Button, {
      ...props,
      justIcon: true,
      className: classes,
      leftIcon: icon
    });
    return tooltip ? /* @__PURE__ */ jsx31(Tooltip, {
      content: tooltip,
      children: content7
    }) : content7;
  }
);

// src/components/Copyable/Copyable.tsx
import { jsx as jsx32, jsxs as jsxs11 } from "react/jsx-runtime";
var Copyable = createComponent(
  ({
    css: css32,
    children,
    className,
    value,
    tooltipMessage = "Click here to copy to clipboard",
    ...props
  }) => {
    const classes = cx38("fuel_copyable", className);
    const iconClass = cx38("fuel_copyable-icon");
    async function handleCopy() {
      await navigator.clipboard.writeText(value);
    }
    return /* @__PURE__ */ jsxs11(Flex, {
      align: "center",
      gap: "$2",
      ...props,
      className: classes,
      css: { ...styles6.root, ...css32 },
      children: [
        children,
        /* @__PURE__ */ jsx32(IconButton, {
          color: "gray",
          tooltip: tooltipMessage,
          onPress: handleCopy,
          variant: "link",
          icon: /* @__PURE__ */ jsx32(Icon, {
            icon: "CopySimple",
            size: 16
          }),
          "aria-label": "Copy to clipboard",
          className: iconClass,
          css: styles6.icon
        })
      ]
    });
  }
);
var styles6 = {
  root: cssObj({
    display: "inline-flex"
  }),
  icon: cssObj({
    px: "$0",
    height: "$4",
    color: "$gray8"
  })
};

// src/components/Dialog/Dialog.tsx
import { styled as styled13 } from "@fuel-ui/css";
import * as RDialog6 from "@radix-ui/react-dialog";

// src/components/Dialog/DialogClose.tsx
import { styled as styled10 } from "@fuel-ui/css";
import * as RDialog from "@radix-ui/react-dialog";
var DialogClose = styled10(RDialog.Close);
DialogClose.defaultProps = {
  asChild: true
};

// src/components/Dialog/DialogContent.tsx
import { cx as cx39, styled as styled11 } from "@fuel-ui/css";
import * as RDialog2 from "@radix-ui/react-dialog";
import { jsx as jsx33, jsxs as jsxs12 } from "react/jsx-runtime";
var Root10 = styled11(RDialog2.Content);
var DialogContent = createComponent(
  ({
    children,
    className,
    overlayClassName,
    closeClassName,
    hideCloseButton,
    css: css32,
    ...props
  }) => /* @__PURE__ */ jsxs12(RDialog2.Portal, {
    children: [
      /* @__PURE__ */ jsx33(RDialog2.Overlay, {
        className: cx39(overlayClassName, CLASSES3.Overlay)
      }),
      /* @__PURE__ */ jsxs12(Root10, {
        ...props,
        css: css32,
        className: cx39(className, CLASSES3.Content),
        children: [
          children,
          !hideCloseButton && /* @__PURE__ */ jsx33(RDialog2.Close, {
            className: cx39(closeClassName, closeButton()),
            asChild: true,
            children: /* @__PURE__ */ jsx33(IconButton, {
              size: "xs",
              "aria-label": "Close",
              icon: "X",
              color: "gray",
              variant: "link"
            })
          })
        ]
      })
    ]
  })
);
var CLASSES3 = {
  Overlay: cx39("fuel_dialog--overlay", overlay()),
  Content: cx39("fuel_dialog--content", content2())
};

// src/components/Dialog/DialogDescription.tsx
import { cx as cx40 } from "@fuel-ui/css";
import * as RDialog3 from "@radix-ui/react-dialog";
var DialogDescription = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx40(
      "fuel_dialog--description",
      className,
      description2()
    );
    return createStyledElement(
      RDialog3.Description,
      description2,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Dialog/DialogFooter.tsx
import { cx as cx41 } from "@fuel-ui/css";
var DialogFooter = createComponent(
  ({ align, className, children, ...props }) => {
    const classes = cx41("fuel_dialog--footer", className);
    return createStyledElement(
      "footer",
      footer,
      { align },
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Dialog/DialogHeading.tsx
import { cx as cx42 } from "@fuel-ui/css";
import * as RDialog4 from "@radix-ui/react-dialog";
var DialogHeading = createComponent(
  ({ className, children, ...props }) => {
    const classes = cx42("fuel_dialog--heading", className);
    return createStyledElement(
      RDialog4.Title,
      heading,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Dialog/DialogTrigger.tsx
import { styled as styled12 } from "@fuel-ui/css";
import * as RDialog5 from "@radix-ui/react-dialog";
var DialogTrigger2 = styled12(RDialog5.DialogTrigger);
DialogTrigger2.defaultProps = {
  asChild: true
};

// src/components/Dialog/Dialog.tsx
var DialogRoot = styled13(RDialog6.Root);
var Dialog = DialogRoot;
Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger2;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;

// src/components/Drawer/Drawer.tsx
import { AnimatePresence } from "framer-motion";
import {
  useState,
  useEffect,
  useRef as useRef2,
  Children as Children7,
  createContext as createContext4,
  useContext as useContext4
} from "react";
import { OverlayContainer, useOverlay } from "react-aria";
import { useOverlayTriggerState } from "react-stately";

// src/components/Drawer/DrawerBody.tsx
import { cx as cx43 } from "@fuel-ui/css";
import { jsx as jsx34 } from "react/jsx-runtime";
var DrawerBody = createComponent(
  ({ className, ...props }) => {
    const classes = cx43("fuel_drawer-body", className);
    return /* @__PURE__ */ jsx34(Box, {
      ...props,
      className: classes
    });
  }
);

// src/components/Drawer/DrawerClose.tsx
import { cx as cx44 } from "@fuel-ui/css";

// src/components/Drawer/styles.ts
import { css as css18, cssObj as cssObj2 } from "@fuel-ui/css";
var overlay2 = css18({
  position: "absolute",
  zIndex: "$50",
  inset: 0,
  background: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  variants: {
    side: {
      left: {
        justifyContent: "flex-start"
      },
      right: {
        justifyContent: "flex-end"
      }
    }
  },
  defaultVariants: {
    side: "right"
  }
});
var content4 = css18({
  overflowX: "auto",
  position: "relative",
  minHeight: "100%",
  maxHeight: "100%",
  background: "$gray1",
  boxShadow: "$lg"
});
var close = cssObj2({
  position: "absolute",
  top: "$2",
  right: "$2",
  padding: "$0"
});
var SIZES2 = {
  sm: "300px",
  md: "500px",
  lg: "768px"
};
function getSize(size3) {
  const width = SIZES2[size3] || size3;
  return { maxWidth: width, width };
}

// src/components/Drawer/DrawerClose.tsx
import { jsx as jsx35 } from "react/jsx-runtime";
var DrawerClose = createComponent(({ css: css32, className, ...props }) => {
  const classes = cx44("fuel_drawer-close", className);
  const { state } = useDrawer();
  function handleClose() {
    state?.setOpen(false);
  }
  return /* @__PURE__ */ jsx35(IconButton, {
    ...props,
    css: { ...close, ...css32 },
    icon: props.icon || Icon.is("X"),
    "aria-label": props["aria-label"] || "Close",
    variant: props.variant || "link",
    color: props.color || "gray",
    className: classes,
    onPress: handleClose
  });
});

// src/components/Drawer/DrawerContent.tsx
import { cx as cx45 } from "@fuel-ui/css";
import { mergeProps as mergeProps4, mergeRefs as mergeRefs2 } from "@react-aria/utils";
import { motion } from "framer-motion";
import { FocusScope as FocusScope3, usePreventScroll, useDialog, useModal } from "react-aria";
import { useClickAway } from "react-use";
import { jsx as jsx36 } from "react/jsx-runtime";
var MotionBox = motion(Box);
var SPRING = {
  ease: "linear",
  duration: "0.1"
};
var DrawerContent = createComponent(({ ref: innerRef, transition = SPRING, children, className, ...props }) => {
  const {
    ref,
    state,
    side,
    size: size3,
    underlayProps,
    overlayProps,
    shouldCloseOnClickAway
  } = useDrawer();
  const { dialogProps } = useDialog({ role: "dialog" }, ref);
  const { modalProps } = useModal();
  const finalProps = mergeProps4(props, overlayProps, dialogProps, modalProps);
  const contentClasses = cx45("fuel_drawer-content", className, content4());
  const overlayClasses = cx45(
    "fuel_drawer-overlay",
    className,
    overlay2({ side })
  );
  usePreventScroll();
  useClickAway(ref, () => {
    if (shouldCloseOnClickAway) {
      state?.toggle();
    }
  });
  return /* @__PURE__ */ jsx36(Box, {
    ...underlayProps,
    className: overlayClasses,
    children: /* @__PURE__ */ jsx36(FocusScope3, {
      contain: true,
      restoreFocus: true,
      autoFocus: true,
      children: /* @__PURE__ */ jsx36(MotionBox, {
        ...finalProps,
        ref: mergeRefs2(innerRef, ref),
        className: contentClasses,
        animate: { x: 0 },
        initial: { x: side === "right" ? "100%" : "-100%" },
        exit: { x: side === "right" ? "100%" : "-100%" },
        transition,
        css: { ...props.css, ...getSize(size3) },
        children: /* @__PURE__ */ jsx36(Box, {
          children
        })
      })
    })
  });
});
DrawerContent.id = "DrawerContent";

// src/components/Drawer/DrawerTrigger.tsx
import { cx as cx46 } from "@fuel-ui/css";
import { Children as Children6, cloneElement as cloneElement7 } from "react";
import { Fragment as Fragment4, jsx as jsx37 } from "react/jsx-runtime";
var DrawerTrigger = createComponent(({ className, asChild = true, children, ...props }) => {
  const classes = cx46("fuel_drawer-trigger", className);
  const { state } = useDrawer();
  function handleToggle() {
    state?.toggle();
  }
  if (asChild) {
    return /* @__PURE__ */ jsx37(Fragment4, {
      children: Children6.toArray(Children6.only(children)).map((child) => {
        return cloneElement7(child, {
          onPress: handleToggle,
          className: classes
        });
      })
    });
  }
  return /* @__PURE__ */ jsx37(Button, {
    ...props,
    onPress: handleToggle,
    children
  });
});

// src/components/Drawer/Drawer.tsx
import { Fragment as Fragment5, jsx as jsx38 } from "react/jsx-runtime";
var ctx4 = createContext4({});
function useDrawer() {
  return useContext4(ctx4);
}
var Drawer = createComponent(
  ({
    side = "right",
    size: size3 = "sm",
    shouldCloseOnClickAway = true,
    containerRef,
    children,
    ...opts
  }) => {
    const ref = useRef2(null);
    const [container, setContainer] = useState(null);
    const state = useOverlayTriggerState(opts);
    const { overlayProps, underlayProps } = useOverlay(
      { ...opts, isOpen: state.isOpen, onClose: state.close },
      ref
    );
    const ctxProps = {
      ref,
      side,
      size: size3,
      state,
      overlayProps,
      underlayProps,
      shouldCloseOnClickAway
    };
    const customChildren = Children7.toArray(children).map((child) => {
      if (child?.type.id === "DrawerContent") {
        return /* @__PURE__ */ jsx38(OverlayContainer, {
          ...container && { portalContainer: container },
          children: /* @__PURE__ */ jsx38(AnimatePresence, {
            children: state.isOpen && /* @__PURE__ */ jsx38(Fragment5, {
              children: child
            })
          }, child.type.id)
        }, child?.type.id);
      }
      return child;
    });
    useEffect(() => {
      if (containerRef?.current) {
        setContainer(containerRef.current);
      }
    }, [containerRef?.current]);
    return /* @__PURE__ */ jsx38(ctx4.Provider, {
      value: ctxProps,
      children: customChildren
    });
  }
);
Drawer.Body = DrawerBody;
Drawer.CloseButton = DrawerClose;
Drawer.Content = DrawerContent;
Drawer.Trigger = DrawerTrigger;

// src/components/Dropdown/Dropdown.tsx
import { cx as cx51 } from "@fuel-ui/css";
import { Children as Children9, createContext as createContext5, useContext as useContext5, useRef as useRef5 } from "react";
import { useMenuTrigger } from "react-aria";
import { useMenuTriggerState } from "react-stately";
import { useKeyPressEvent } from "react-use";

// src/components/Popover/Popover.tsx
import { cx as cx47, styled as styled14 } from "@fuel-ui/css";
import * as RPopover from "@radix-ui/react-popover";

// src/components/Popover/styles.ts
import { keyframes as keyframes5, css as css19 } from "@fuel-ui/css";
var slideUpAndFade2 = keyframes5({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade2 = keyframes5({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideDownAndFade2 = keyframes5({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade2 = keyframes5({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var arrow2 = css19({
  fill: "$gray2"
});
var content5 = css19({
  borderRadius: "$md",
  py: "$4",
  px: "$5",
  pr: "$7",
  fontSize: "$sm",
  lineHeight: 1,
  color: "$gray10",
  backgroundColor: "$gray2",
  boxShadow: "$sm",
  "@media (prefers-reduced-motion: no-preference)": {
    animationDuration: "400ms",
    animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
    animationFillMode: "forwards",
    willChange: "transform, opacity",
    '&[data-state="delayed-open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade2 },
      '&[data-side="right"]': { animationName: slideLeftAndFade2 },
      '&[data-side="bottom"]': { animationName: slideUpAndFade2 },
      '&[data-side="left"]': { animationName: slideRightAndFade2 }
    }
  },
  "&:not([aria-disabled=true]):focus": {
    outline: `2px solid $gray10`,
    outlineOffset: "1px"
  }
});
var closeButton2 = css19({
  position: "absolute",
  top: "$2",
  right: "$2"
});

// src/components/Popover/Popover.tsx
import { jsx as jsx39, jsxs as jsxs13 } from "react/jsx-runtime";
var Content5 = styled14(RPopover.Content);
var Popover = createComponent(
  ({
    children,
    content: content7,
    side = "bottom",
    sideOffset = 5,
    align = "center",
    alignOffset = 0,
    showCloseButton,
    className,
    arrowClassName,
    closeButtonClassName,
    arrowProps,
    contentProps,
    css: css32,
    ...props
  }) => /* @__PURE__ */ jsxs13(RPopover.Root, {
    ...props,
    children: [
      /* @__PURE__ */ jsx39(RPopover.Trigger, {
        asChild: true,
        children
      }),
      /* @__PURE__ */ jsxs13(Content5, {
        css: css32,
        className: cx47(className, CLASSES4.Content),
        side,
        align,
        ...{ ...contentProps, sideOffset, alignOffset },
        children: [
          /* @__PURE__ */ jsx39(RPopover.Arrow, {
            offset: 0,
            width: 15,
            height: 5,
            ...arrowProps,
            className: cx47(arrowClassName, CLASSES4.Arrow)
          }),
          showCloseButton && /* @__PURE__ */ jsx39(RPopover.Close, {
            "aria-label": "Close",
            className: cx47(closeButtonClassName, CLASSES4.CloseButton),
            asChild: true,
            children: /* @__PURE__ */ jsx39(IconButton, {
              size: "xs",
              "aria-label": "Close",
              icon: "X",
              color: "gray",
              variant: "link"
            })
          }),
          content7
        ]
      })
    ]
  })
);
var CLASSES4 = {
  Content: cx47("fuel_popover--content", content5()),
  Arrow: cx47("fuel_popover--arrow", arrow2()),
  CloseButton: cx47("fuel_popover--closeBtn", closeButton2())
};

// src/components/Menu/Menu.tsx
import { cx as cx49 } from "@fuel-ui/css";
import { mergeRefs as mergeRefs4 } from "@react-aria/utils";
import { useRef as useRef4 } from "react";
import { mergeProps as mergeProps6, useMenu } from "react-aria";
import { Item, useTreeState } from "react-stately";

// src/components/Menu/MenuItem.tsx
import { cx as cx48 } from "@fuel-ui/css";
import { mergeRefs as mergeRefs3 } from "@react-aria/utils";
import { useRef as useRef3 } from "react";
import { mergeProps as mergeProps5, useMenuItem, useButton as useButton2 } from "react-aria";

// src/components/Menu/styles.ts
import { css as css20 } from "@fuel-ui/css";
var menu = css20({
  p: "$0",
  py: "$2",
  m: "$0",
  borderRadius: "$md",
  "&:focus": {
    outline: "2px solid $gray5"
  }
});
var item2 = css20({
  display: "flex",
  alignItems: "center",
  gap: "$2",
  height: "$9",
  px: "$4",
  opacity: 0.4,
  borderRadius: "$md",
  color: "$gray10",
  fontWeight: "$medium",
  '&:not([aria-disabled="true"])': {
    cursor: "pointer",
    opacity: 1
  },
  "&:focus": {
    color: "$gray12",
    background: "$gray1",
    outline: "none"
  },
  [`&:focus .fuel_icon`]: {
    color: "$accent11"
  }
});

// src/components/Menu/MenuItem.tsx
var MenuItem = createComponent(
  ({ item: item4, state, onAction, className, autoFocus, ...props }) => {
    const ref = useRef3(null);
    const isDisabled = state.disabledKeys.has(item4.key);
    const isFocused = state.selectionManager.focusedKey === item4.key;
    const { buttonProps } = useButton2(
      { isDisabled, onPress: item4.props.onPress, autoFocus },
      ref
    );
    const { menuItemProps } = useMenuItem(
      { isDisabled, onAction, key: item4.key, closeOnSelect: true },
      state,
      ref
    );
    const classes = cx48("fuel_menu-list-item", className);
    const customProps = {
      ...props,
      ref: mergeRefs3(ref, props.ref),
      className: classes,
      "data-focused": isFocused,
      "aria-label": item4.props["aria-label"]
    };
    return createStyledElement(
      "li",
      item2,
      null,
      mergeProps5(customProps, buttonProps, menuItemProps),
      item4.rendered
    );
  }
);

// src/components/Menu/Menu.tsx
import { jsx as jsx40 } from "react/jsx-runtime";
import { createElement } from "react";
var Menu = createComponent(
  ({
    ref,
    autoFocus,
    className,
    onAction,
    selectionMode = "none",
    ...props
  }) => {
    const innerRef = useRef4(null);
    const state = useTreeState({ ...props, selectionMode });
    const { menuProps } = useMenu(props, state, innerRef);
    const classes = cx49("fuel_menu", className, menu());
    const customProps = {
      ...omit(["disabledKeys"], props),
      ref: mergeRefs4(innerRef, ref),
      className: classes
    };
    const children = [...state.collection].map((item4, idx) => /* @__PURE__ */ createElement(MenuItem, {
      ...autoFocus && idx === 0 && { autoFocus: true },
      className: item4.props.className,
      key: item4.key,
      item: item4,
      state,
      onAction
    }));
    return /* @__PURE__ */ jsx40(Box, {
      as: "ul",
      ...mergeProps6(menuProps, customProps),
      children
    });
  }
);
Menu.Item = Item;

// src/components/Dropdown/DropdownMenu.tsx
import { jsx as jsx41 } from "react/jsx-runtime";
var DropdownMenu = createComponent(
  (props) => {
    const { menuProps } = useDropdown();
    return /* @__PURE__ */ jsx41(Menu, {
      ...props,
      ...menuProps,
      css: {
        py: "$2",
        px: "$2",
        boxSizing: "border-box",
        ...props.css
      }
    });
  }
);
DropdownMenu.id = "DropdownMenu";

// src/components/Dropdown/DropdownMenuItem.tsx
var DropdownMenuItem = Menu.Item;

// src/components/Dropdown/DropdownTrigger.tsx
import { cx as cx50 } from "@fuel-ui/css";
import { mergeRefs as mergeRefs5 } from "@react-aria/utils";
import { Children as Children8, cloneElement as cloneElement8 } from "react";
import { Fragment as Fragment6, jsx as jsx42 } from "react/jsx-runtime";
var DropdownTrigger = createComponent(({ ref, className, asChild = true, children, ...props }) => {
  const classes = cx50("fuel_dropdown-trigger", className);
  const { state, triggerRef } = useDropdown();
  function handleToggle() {
    state?.toggle();
  }
  if (asChild) {
    return /* @__PURE__ */ jsx42(Fragment6, {
      children: Children8.toArray(Children8.only(children)).map((child) => {
        return cloneElement8(child, {
          ref: mergeRefs5(ref, triggerRef),
          onPress: handleToggle,
          className: classes
        });
      })
    });
  }
  return /* @__PURE__ */ jsx42(Button, {
    ...props,
    ref: mergeRefs5(ref, triggerRef),
    onPress: handleToggle,
    rightIcon: state?.isOpen ? Icon.is("CaretUp") : Icon.is("CaretDown"),
    children
  });
});
DropdownTrigger.id = "DropdownTrigger";

// src/components/Dropdown/Dropdown.tsx
import { jsx as jsx43 } from "react/jsx-runtime";
var ctx5 = createContext5({});
function useDropdown() {
  return useContext5(ctx5);
}
var Dropdown = createComponent(
  ({ children, className, css: css32, popoverProps, ...props }) => {
    const ref = useRef5(null);
    const state = useMenuTriggerState(props);
    const { menuTriggerProps, menuProps } = useMenuTrigger({}, state, ref);
    const classes = cx51("fuel_dropdown", className);
    const ctxProps = {
      state,
      menuTriggerProps,
      menuProps,
      triggerRef: ref
    };
    const trigger3 = Children9.toArray(children).find(
      (child) => child?.type.id === "DropdownTrigger"
    );
    const menu2 = Children9.toArray(children).find(
      (child) => child?.type.id === "DropdownMenu"
    );
    const customChildren = /* @__PURE__ */ jsx43(ctx5.Provider, {
      value: ctxProps,
      children: /* @__PURE__ */ jsx43(Popover, {
        ...popoverProps,
        css: { padding: "$0", ...css32 },
        content: menu2,
        open: state.isOpen,
        onOpenChange: state.setOpen,
        showCloseButton: false,
        children: trigger3
      })
    });
    useKeyPressEvent("Esc", () => {
      if (state.isOpen) {
        state.setOpen(false);
      }
    });
    return createStyledElement(
      "div",
      null,
      null,
      { className: classes },
      customChildren
    );
  }
);
Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

// src/components/Form/FormErrorMessage.tsx
import { cx as cx53 } from "@fuel-ui/css";

// src/components/Text/Text.tsx
import { css as css21, allColors as allColors2, cx as cx52, utils as utils2 } from "@fuel-ui/css";
import { Fragment as Fragment7, jsxs as jsxs14 } from "react/jsx-runtime";
var Text = createComponent(
  ({
    fontSize,
    color,
    children,
    className,
    iconSize = 16,
    iconColor = "gray8",
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    ...props
  }) => {
    const iconLeft = createIcon(
      leftIcon,
      leftIconAriaLabel,
      iconSize,
      iconColor
    );
    const iconRight = createIcon(
      rightIcon,
      rightIconAriaLabel,
      iconSize,
      iconColor
    );
    const withIcon = Boolean(leftIcon || rightIcon);
    const classes = cx52("fuel_text", className);
    return createStyledElement(
      "p",
      styles7,
      { fontSize, color, withIcon },
      { ...props, className: classes },
      /* @__PURE__ */ jsxs14(Fragment7, {
        children: [
          iconLeft,
          " ",
          children,
          " ",
          iconRight
        ]
      })
    );
  }
);
var styles7 = css21({
  margin: 0,
  variants: {
    fontSize: utils2.textSize.__keys.reduce(
      (obj, key) => ({ ...obj, [key]: { textSize: key } }),
      {}
    ),
    color: allColors2.reduce(
      (obj, key) => ({ ...obj, [key]: { color: `$${key}` } }),
      {}
    ),
    withIcon: {
      true: {
        display: "inline-flex",
        gap: "$2"
      }
    }
  },
  defaultVariants: {
    fontSize: "base",
    color: "textColor"
  }
});

// src/components/Form/FormErrorMessage.tsx
import { jsx as jsx44 } from "react/jsx-runtime";
var FormErrorMessage = createComponent(({ as = "div", color, children, className, ...props }) => {
  const { id, ...parentProps } = useFormControlProps();
  const classes = cx53(
    "fuel_form--error-message",
    className,
    errorMessage({})
  );
  const customProps = {
    ...props,
    id: `feedback${id}`,
    className: classes
  };
  return /* @__PURE__ */ jsx44(Text, {
    as,
    ...customProps,
    color: color || "red9",
    "aria-hidden": !parentProps?.isInvalid,
    children
  });
});
FormErrorMessage.id = "FormErrorMessage";

// src/components/Form/FormHelperText.tsx
import { cx as cx54 } from "@fuel-ui/css";
import { jsx as jsx45 } from "react/jsx-runtime";
var FormHelperText = createComponent(
  ({ as = "div", color, children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = cx54(
      "fuel_form--helper-text",
      className,
      helperText({})
    );
    const customProps = {
      ...props,
      id: `helperText${id}`,
      className: classes
    };
    return /* @__PURE__ */ jsx45(Text, {
      as,
      ...customProps,
      color: color || "gray9",
      "aria-hidden": parentProps?.isInvalid,
      children
    });
  }
);
FormHelperText.id = "FormHelperText";

// src/components/Form/FormLabel.tsx
import { cx as cx55 } from "@fuel-ui/css";
import * as Label from "@radix-ui/react-label";
var FormLabel = createComponent(
  ({ as = "label", children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = cx55("fuel_form--label", className);
    const customProps = {
      ...props,
      as,
      id: id ? `label${id}` : props.id,
      className: classes
    };
    return createStyledElement(
      Label.Root,
      label,
      { required: parentProps?.isRequired },
      customProps,
      children
    );
  }
);
FormLabel.id = "FormLabel";

// src/components/Form/Form.tsx
var Form = {
  Control: FormControl,
  Label: FormLabel,
  HelperText: FormHelperText,
  ErrorMessage: FormErrorMessage
};

// src/components/FuelLogo/FuelLogo.tsx
import { cx as cx56, styled as styled15 } from "@fuel-ui/css";
import { jsx as jsx46, jsxs as jsxs15 } from "react/jsx-runtime";
var Svg = styled15("svg");
var FuelLogo = createComponent(
  ({ size: size3 = 60, className, ...props }) => {
    return /* @__PURE__ */ jsxs15(Svg, {
      ...props,
      viewBox: "0 0 852 852",
      css: { ...props.css, width: size3, height: size3 },
      className: cx56("fuel_logo", className),
      children: [
        /* @__PURE__ */ jsx46("path", {
          fill: "#58c09b",
          d: "M638.737 321.745a16.735 16.735 0 0115.33 9.607 17.281 17.281 0 01-1.737 18.127L360.261 715.008a19.368 19.368 0 01-6.229 4.684 16.628 16.628 0 01-15.113-.151 17.057 17.057 0 01-9.192-19.623l52.567-201.191-216.294.664a16.735 16.735 0 01-15.33-9.607c-2.758-5.887-2.056-13.38 1.737-18.127L444.708 106.62a16.178 16.178 0 0120.618-4.793c7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"
        }),
        /* @__PURE__ */ jsx46("path", {
          fill: "none",
          stroke: "#58c09b",
          strokeWidth: "9",
          d: "M639.536 328.815c6.585-.071 58.279 27.655 61.04 33.541a17.291 17.291 0 01-1.741 18.129L406.767 746.012a19.366 19.366 0 01-6.23 4.684 16.628 16.628 0 01-15.113-.151c-6.976-3.332-50.131-38.57-47.946-46.751l94.077-152.613H226.679c-6.585.071-71.974-62.843-68.181-67.59q205.349-262.69 293.209-372.414c9.573-11.955 52.922 17.831 60.122 21.654 7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"
        })
      ]
    });
  }
);

// src/components/Grid/Grid.tsx
import { cx as cx57 } from "@fuel-ui/css";

// src/components/Grid/GridItem.tsx
import { jsx as jsx47 } from "react/jsx-runtime";
function spanFn(span) {
  return span === "auto" ? "auto" : `span ${span}/span ${span}`;
}
var GridItem = createComponent(
  ({
    area,
    colSpan,
    colStart,
    colEnd,
    rowEnd,
    rowSpan,
    rowStart,
    css: css32,
    ...props
  }) => /* @__PURE__ */ jsx47(Box, {
    ...props,
    css: {
      gridArea: area,
      gridColumn: spanFn(colSpan),
      gridRow: spanFn(rowSpan),
      gridColumnStart: colStart,
      gridColumnEnd: colEnd,
      gridRowStart: rowStart,
      gridRowEnd: rowEnd,
      ...css32
    }
  })
);

// src/components/Grid/Grid.tsx
import { jsx as jsx48 } from "react/jsx-runtime";
var Grid = createComponent(
  ({
    autoColumns,
    autoRows,
    column,
    direction = "row",
    gap,
    row,
    templateAreas,
    templateColumns,
    templateRows,
    css: css32,
    className,
    ...props
  }) => {
    const classes = cx57("fuel_box--grid", className);
    return /* @__PURE__ */ jsx48(Box, {
      ...props,
      className: classes,
      css: {
        gap,
        gridAutoFlow: direction,
        gridAutoColumns: autoColumns,
        gridAutoRows: autoRows,
        gridColumn: column,
        gridRow: row,
        gridTemplateAreas: templateAreas,
        gridTemplateColumns: templateColumns,
        gridTemplateRows: templateRows,
        ...css32,
        display: "grid"
      }
    });
  }
);
Grid.Item = GridItem;

// src/components/HelperIcon/HelperIcon.tsx
import { css as css22, cx as cx58 } from "@fuel-ui/css";
import { jsx as jsx49, jsxs as jsxs16 } from "react/jsx-runtime";
var HelperIcon = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx58("fuel_helper-icon", className, styles8());
    return /* @__PURE__ */ jsxs16(Flex, {
      align: "center",
      gap: "$2",
      ...props,
      className: classes,
      children: [
        children,
        /* @__PURE__ */ jsx49(Tooltip, {
          content: props.message,
          children: /* @__PURE__ */ jsx49(Icon, {
            icon: "Question",
            "aria-label": "Helper Icon"
          })
        })
      ]
    });
  }
);
var styles8 = css22({
  display: "inline-flex",
  "& .fuel_icon": {
    color: "$gray8"
  }
});

// src/components/Image/Image.tsx
import { cx as cx59 } from "@fuel-ui/css";
var Image = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx59("fuel_image", className);
    return createStyledElement(
      "img",
      null,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Input/Input.tsx
import { cx as cx64 } from "@fuel-ui/css";
import { createContext as createContext6, useContext as useContext6 } from "react";

// src/components/Input/InputAddon.tsx
import { cx as cx60 } from "@fuel-ui/css";

// src/components/Input/styles.ts
import { css as css23 } from "@fuel-ui/css";
var BG_COLOR = "$inputBg";
var INPUT_COLOR = "$inputColor";
var BORDER_COLOR = "$inputBorder";
var PLACEHOLDER_COLOR = "$inputPlaceholderColor";
var ADDON_COLOR = "$gray7";
var input = css23({
  display: "inline-flex",
  background: BG_COLOR,
  border: `1px solid ${BORDER_COLOR}`,
  fontFamily: "$sans",
  color: ADDON_COLOR,
  boxSizing: "content-box",
  borderRadius: "$md",
  overflow: "hidden",
  [`&:focus-within`]: {
    borderColor: "$gray6"
  },
  "&[aria-disabled=true]:focus-within": {
    outline: "none"
  },
  "& > input": {
    border: "none"
  },
  variants: {
    size: {
      sm: {
        textSize: "sm",
        height: "$9",
        "& > input": {
          px: "$2",
          textSize: "sm",
          height: "100%"
        }
      },
      md: {
        textSize: "base",
        height: "$11",
        "& > input": {
          px: "$3",
          textSize: "base",
          height: "100%"
        }
      },
      lg: {
        textSize: "lg",
        height: "$12",
        "& > input": {
          px: "$3",
          textSize: "lg",
          height: "100%"
        }
      }
    },
    full: {
      true: {
        width: "$full"
      }
    },
    disabled: {
      true: {
        opacity: "0.5",
        cursor: "default"
      }
    },
    invalid: {
      true: {
        color: "$red8",
        borderColor: "$red5"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var field = css23({
  is: ["noAppearance"],
  outline: "none",
  p: "$0",
  flex: 1,
  color: INPUT_COLOR,
  "&::placeholder": {
    color: PLACEHOLDER_COLOR
  },
  "&::-ms-input-placeholder": {
    color: PLACEHOLDER_COLOR
  }
});
var elementDefinitions = {
  display: "inline-flex",
  alignItems: "center",
  "& > button": {
    height: "calc(100% - 30%)"
  },
  variants: {
    size: {
      sm: {
        px: "$2"
      },
      md: {
        px: "$3"
      },
      lg: {
        px: "$3"
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
};
var element = css23({
  ...elementDefinitions,
  '&[class*="left"]': {
    pr: 0
  },
  '&[class*="right"]': {
    pl: 0
  }
});
var addon = css23({
  ...elementDefinitions,
  color: ADDON_COLOR,
  fontWeight: "$semibold",
  '&[class*="left"]': {
    borderRight: `1px solid ${BORDER_COLOR}`,
    pr: "$0"
  },
  '&[class*="right"]': {
    borderLeft: `1px solid ${BORDER_COLOR}`,
    pl: "$0"
  }
});

// src/components/Input/InputAddon.tsx
import { jsx as jsx50 } from "react/jsx-runtime";
var InputAddon = createComponent(({ className, children, ...props }) => {
  const { size: size3 } = useInputProps();
  const classes = cx60("fuel_input--addon", className);
  const customProps = { ...props, className: classes };
  return createStyledElement(
    "div",
    addon,
    { size: size3 },
    customProps,
    children
  );
});
var InputAddonLeft = createComponent(
  ({ className, ...props }) => /* @__PURE__ */ jsx50(InputAddon, {
    ...props,
    className: cx60("fuel_input-addon--left", className)
  })
);
var InputAddonRight = createComponent(
  ({ className, ...props }) => /* @__PURE__ */ jsx50(InputAddon, {
    ...props,
    className: cx60("fuel_input-addon--right", className)
  })
);
InputAddonLeft.id = "InputAddon";
InputAddonRight.id = "InputAddon";

// src/components/Input/InputElement.tsx
import { cx as cx61 } from "@fuel-ui/css";
import { Children as Children10, cloneElement as cloneElement9 } from "react";
import { jsx as jsx51 } from "react/jsx-runtime";
var ICON_SIZES = {
  sm: 16,
  md: 18,
  lg: 22
};
var InputElement = createComponent(
  ({ element: element2, className, children, ...props }) => {
    const { size: size3, ...parentProps } = useInputProps();
    const disabled = parentProps?.isDisabled || parentProps?.isReadOnly;
    const classes = cx61("fuel_input--element", className);
    const customChildren = Children10.toArray(element2 || children).map(
      (child) => {
        const isButton = child?.type?.id === "Button" || child?.type?.displayName?.toString().includes("button");
        if (isButton) {
          const childProps = child?.props;
          const defaultSize = size3 === "sm" ? "xs" : "sm";
          return cloneElement9(child, {
            ...childProps,
            disabled,
            isDisabled: disabled,
            size: childProps.size || defaultSize
          });
        }
        if (child?.type?.id === "Icon") {
          const childProps = child?.props;
          const defaultSize = ICON_SIZES[size3 || "md"];
          return cloneElement9(child, {
            ...childProps,
            size: childProps.size || defaultSize
          });
        }
        return child;
      }
    );
    return createStyledElement(
      "div",
      element,
      { size: size3 },
      { ...props, className: classes },
      customChildren
    );
  }
);
var InputElementLeft = createComponent(({ className, ...props }) => /* @__PURE__ */ jsx51(InputElement, {
  ...props,
  className: cx61("fuel_input-element--left", className)
}));
var InputElementRight = createComponent(({ className, ...props }) => /* @__PURE__ */ jsx51(InputElement, {
  ...props,
  className: cx61("fuel_input-element--right", className)
}));
InputElementLeft.id = "InputElement";
InputElementRight.id = "InputElement";

// src/components/Input/InputField.tsx
import { cx as cx62 } from "@fuel-ui/css";
import { mergeRefs as mergeRefs6 } from "@react-aria/utils";
import { useRef as useRef6 } from "react";
import { mergeProps as mergeProps7, useFocusable } from "react-aria";
var InputField = createComponent(
  ({ name: nameProp, htmlSize, role = "textbox", className, ...props }) => {
    const parentProps = useInputProps();
    const isRequired = parentProps?.isRequired;
    const isDisabled = parentProps?.isDisabled;
    const isReadOnly = parentProps?.isReadOnly;
    const isInvalid = parentProps?.isInvalid;
    const describedBy = parentProps?.describedBy;
    const name = `${nameProp}`;
    const disabled = isDisabled || isReadOnly;
    const classes = cx62("fuel_input--field", className);
    const inputProps = {
      ...props,
      children: null,
      name,
      disabled,
      role,
      size: htmlSize,
      required: isRequired,
      "aria-describedby": describedBy,
      "aria-required": isRequired,
      "aria-invalid": isInvalid,
      "aria-disabled": isDisabled,
      "aria-readonly": isReadOnly,
      "aria-placeholder": props.placeholder
    };
    const ref = useRef6(null);
    const { focusableProps } = useFocusable(props, ref);
    const customProps = mergeProps7(inputProps, focusableProps);
    return createStyledElement("input", field, null, {
      ...customProps,
      className: classes,
      ref: mergeRefs6(ref, props.ref)
    });
  }
);
InputField.id = "InputField";

// src/components/Input/InputNumber.tsx
import { cx as cx63, styled as styled16 } from "@fuel-ui/css";
import { useRef as useRef7 } from "react";
import { mergeProps as mergeProps8, useFocusable as useFocusable2 } from "react-aria";
import { NumericFormat } from "react-number-format";
import { jsx as jsx52 } from "react/jsx-runtime";
var Root14 = styled16(NumericFormat, {});
var InputNumber = createComponent(({ name: nameProp, htmlSize, role = "textbox", className, ...props }) => {
  const parentProps = useInputProps();
  const isRequired = parentProps?.isRequired;
  const isDisabled = parentProps?.isDisabled;
  const isReadOnly = parentProps?.isReadOnly;
  const isInvalid = parentProps?.isInvalid;
  const describedBy = parentProps?.describedBy;
  const name = `${nameProp}`;
  const disabled = isDisabled || isReadOnly;
  const classes = cx63(
    "fuel_input--amount",
    className,
    field({
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly
    })
  );
  const inputProps = {
    ...props,
    children: null,
    role,
    name,
    disabled,
    size: htmlSize,
    required: isRequired,
    "aria-describedby": describedBy,
    "aria-required": isRequired,
    "aria-invalid": isInvalid,
    "aria-disabled": isDisabled,
    "aria-readonly": isReadOnly,
    "aria-placeholder": props.placeholder
  };
  const ref = useRef7(null);
  const { focusableProps } = useFocusable2(props, ref);
  const customProps = mergeProps8(inputProps, focusableProps);
  const Comp = Root14;
  return /* @__PURE__ */ jsx52(Comp, {
    ...customProps,
    className: classes,
    getInputRef: ref,
    customInput: InputField,
    onBlur: customProps.onBlur || void 0
  });
});
InputNumber.id = "InputNumber";

// src/components/Input/Input.tsx
import { jsx as jsx53 } from "react/jsx-runtime";
var ctx6 = createContext6({});
function useInputProps() {
  return useContext6(ctx6);
}
var Input = createComponent(
  ({
    size: size3 = "md",
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isFullWidth,
    describedBy,
    className,
    children,
    ...props
  }) => {
    const formControlProps = useFormControlProps();
    const disabled = isDisabled || isReadOnly || formControlProps.isDisabled || formControlProps.isReadOnly;
    const classes = cx64("fuel_input", className);
    const providerProps = {
      size: size3,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      describedBy,
      ...formControlProps
    };
    const inputProps = {
      ...props,
      className: classes
    };
    const styleProps = {
      size: size3,
      disabled,
      required: isRequired || formControlProps.isRequired,
      invalid: isInvalid || formControlProps.isInvalid,
      full: isFullWidth
    };
    return /* @__PURE__ */ jsx53(ctx6.Provider, {
      value: providerProps,
      children: createStyledElement(
        "div",
        input,
        styleProps,
        inputProps,
        children
      )
    });
  }
);
Input.id = "Input";
Input.AddonLeft = InputAddonLeft;
Input.AddonRight = InputAddonRight;
Input.ElementLeft = InputElementLeft;
Input.ElementRight = InputElementRight;
Input.Field = InputField;
Input.Number = InputNumber;

// src/components/InputPassword/InputPassword.tsx
import { cx as cx65 } from "@fuel-ui/css";
import { useState as useState2 } from "react";
import { jsx as jsx54, jsxs as jsxs17 } from "react/jsx-runtime";
var InputPassword = createComponent(
  ({
    className,
    size: size3,
    isRequired,
    isInvalid,
    isDisabled,
    isReadOnly,
    isFullWidth,
    describedBy,
    ...props
  }) => {
    const classes = cx65("fuel_input-password", className);
    const [showing, setShowing] = useState2(() => false);
    const inputProps = {
      size: size3,
      isRequired,
      isInvalid,
      isDisabled,
      isReadOnly,
      isFullWidth,
      describedBy
    };
    function handleToggle() {
      setShowing((s) => !s);
    }
    return /* @__PURE__ */ jsxs17(Input, {
      ...inputProps,
      children: [
        /* @__PURE__ */ jsx54(Input.ElementLeft, {
          element: /* @__PURE__ */ jsx54(Icon, {
            icon: "Lock"
          })
        }),
        /* @__PURE__ */ jsx54(Input.Field, {
          ...props,
          type: !showing ? "password" : "text",
          className: classes
        }),
        /* @__PURE__ */ jsx54(Input.ElementRight, {
          element: /* @__PURE__ */ jsx54(IconButton, {
            color: "gray",
            variant: "link",
            icon: showing ? /* @__PURE__ */ jsx54(Icon, {
              icon: "Eye",
              color: "accent11"
            }) : /* @__PURE__ */ jsx54(Icon, {
              icon: "EyeClosed",
              color: "gray8"
            }),
            "aria-label": "Toggle Password",
            css: { px: "0" },
            onPress: handleToggle
          })
        })
      ]
    });
  }
);

// src/components/Link/Link.tsx
import { allColors as allColors3, css as css24, cx as cx66 } from "@fuel-ui/css";
import { useRef as useRef8 } from "react";
import { mergeProps as mergeProps9, useLink } from "react-aria";
import { Fragment as Fragment8, jsx as jsx55, jsxs as jsxs18 } from "react/jsx-runtime";
var Link = createComponent(
  ({ isExternal, className, children, color, ...props }) => {
    const ref = useRef8(null);
    const { linkProps } = useLink(props, ref);
    const customProps = {
      role: "link",
      className: cx66("fuel_link", className),
      ...isExternal && { target: "_blank", rel: "noopener noreferrer" }
    };
    return createStyledElement(
      "a",
      styles9.link,
      { color },
      mergeProps9(props, customProps, linkProps),
      /* @__PURE__ */ jsxs18(Fragment8, {
        children: [
          children,
          " ",
          isExternal && /* @__PURE__ */ jsx55(Icon, {
            icon: "LinkSimple",
            color: "gray8"
          })
        ]
      })
    );
  }
);
var styles9 = {
  link: css24({
    display: "inline-flex",
    alignItems: "center",
    gap: "$1",
    textDecoration: "none",
    fontWeight: "$medium",
    "&:hover": {
      textDecoration: "underline"
    },
    variants: {
      color: allColors3.reduce(
        (obj, key) => ({
          ...obj,
          [key]: {
            color: `$${key}`,
            "&:visited": {
              color: `$${key}`
            }
          }
        }),
        {}
      )
    },
    defaultVariants: {
      color: "accent11"
    }
  })
};

// src/components/List/List.tsx
import { css as css26, cx as cx68, styled as styled17 } from "@fuel-ui/css";
import { createContext as createContext7, useContext as useContext7 } from "react";

// src/components/List/ListItem.tsx
import { css as css25, cx as cx67 } from "@fuel-ui/css";
import { jsx as jsx56 } from "react/jsx-runtime";
var ListItem = createComponent(
  ({
    icon,
    iconSize,
    iconColor,
    iconAriaLabel,
    children,
    className,
    ...props
  }) => {
    const classes = cx67("fuel_list-item", className, style());
    const ctx8 = useListContext();
    return /* @__PURE__ */ jsx56(Text, {
      as: "li",
      className: classes,
      ...props,
      ...(icon || ctx8.icon) && {
        iconSize: iconSize || ctx8.iconSize,
        iconColor: iconColor || ctx8.iconColor,
        leftIcon: icon || ctx8.icon,
        leftIconAriaLabel: iconAriaLabel || ctx8.iconAriaLabel,
        css: {
          display: "flex",
          ...props.css
        }
      },
      children
    });
  }
);
var style = css25({
  "&::marker": {
    color: "$gray6"
  }
});

// src/components/List/List.tsx
import { jsx as jsx57 } from "react/jsx-runtime";
var ctx7 = createContext7({});
function useListContext() {
  return useContext7(ctx7);
}
var Root15 = styled17("ul");
var List = createComponent(
  ({
    type,
    icon,
    iconSize,
    iconColor,
    iconAriaLabel,
    children,
    className,
    ...props
  }) => {
    const classes = cx68(
      "fuel_list",
      className,
      styles10({
        ...type ? { type } : { type: false }
      })
    );
    return /* @__PURE__ */ jsx57(ctx7.Provider, {
      value: { icon, iconSize, iconColor, iconAriaLabel },
      children: /* @__PURE__ */ jsx57(Root15, {
        ...props,
        as: type === "ordered" ? "ol" : "ul",
        className: classes,
        children
      })
    });
  }
);
List.Item = ListItem;
var styles10 = css26({
  px: "$0",
  py: "$0",
  mx: "$0",
  my: "$0",
  variants: {
    type: {
      unordered: {
        listStyle: "inside"
      },
      ordered: {
        pl: "$6"
      },
      false: {
        listStyle: "none"
      }
    }
  }
});

// src/components/RadioGroup/RadioGroup.tsx
import { cx as cx70 } from "@fuel-ui/css";
import * as RadioGroupPrimitive2 from "@radix-ui/react-radio-group";
import { Children as Children11, cloneElement as cloneElement10 } from "react";

// src/components/RadioGroup/RadioGroupItem.tsx
import { cx as cx69 } from "@fuel-ui/css";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { useId as useId2 } from "react";

// src/components/RadioGroup/styles.ts
import { css as css27, darkTheme as darkTheme3 } from "@fuel-ui/css";
var root5 = css27({
  display: "flex",
  "& label": {
    fontSize: "$base"
  },
  variants: {
    disabled: {
      true: {
        opacity: "0.5"
      }
    }
  }
});
var item3 = css27({
  all: "unset",
  position: "relative",
  cursor: "pointer",
  backgroundColor: "$inputBg",
  width: "$6",
  height: "$6",
  borderRadius: "100%",
  boxShadow: "$sm",
  [`.${darkTheme3} &`]: {
    background: "$gray2"
  },
  "&:after": {
    position: "absolute",
    display: "block",
    content: '""',
    top: 0,
    left: 0,
    w: "calc(100%)",
    height: "calc(100%)",
    background: "transparent",
    borderRadius: "100%",
    transform: "translate(-2px, -2px)"
  },
  "&:focus-within": {
    borderColor: "$gray5",
    "&:after": {
      border: "2px solid $accent5"
    }
  },
  "&[aria-disabled=true]": {
    cursor: "default",
    opacity: "0.5"
  }
});
var indicator2 = css27({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  position: "relative",
  "&::after": {
    content: '""',
    display: "block",
    width: "9px",
    height: "9px",
    borderRadius: "50%",
    backgroundColor: "$accent11"
  },
  variants: {
    disabled: {
      true: {
        "&:after": {
          background: "$gray10"
        }
      }
    }
  }
});

// src/components/RadioGroup/RadioGroupItem.tsx
import { jsx as jsx58, jsxs as jsxs19 } from "react/jsx-runtime";
var RadioGroupItem = createComponent(
  ({
    isDisabled,
    isReadOnly,
    className,
    label: label2,
    labelClassName,
    labelCSS,
    ...props
  }) => {
    const disabled = isDisabled || isReadOnly;
    const labelId = label2 ? `label-${useId2()}` : void 0;
    const classes = cx69("fuel_radio-group--item", className);
    const customProps = {
      ...props,
      className: classes,
      disabled,
      "aria-label": label2,
      "aria-disabled": disabled,
      "aria-readonly": isReadOnly,
      ...label2 && { "aria-describedby": labelId }
    };
    const element2 = createStyledElement(
      RadioGroupPrimitive.Item,
      item3,
      null,
      customProps,
      /* @__PURE__ */ jsx58(RadioGroupPrimitive.Indicator, {
        className: indicator2({ disabled })
      })
    );
    return /* @__PURE__ */ jsxs19(Flex, {
      gap: "$1",
      children: [
        element2,
        " ",
        /* @__PURE__ */ jsx58(Form.Label, {
          id: labelId,
          htmlFor: props.id,
          css: { textSize: "sm", ...labelCSS },
          className: cx69(labelClassName),
          children: label2
        })
      ]
    });
  }
);
RadioGroupItem.id = "RadioGroupItem";

// src/components/RadioGroup/RadioGroup.tsx
var RadioGroup = createComponent(
  ({
    gap = "$2",
    direction = "column",
    css: css32,
    isDisabled,
    isReadOnly,
    children,
    className,
    ...props
  }) => {
    const formControlProps = useFormControlProps();
    const disabled = isDisabled || isReadOnly || formControlProps.isDisabled || formControlProps.isReadOnly;
    const readonly = isReadOnly || formControlProps.isReadOnly;
    const classes = cx70("fuel_radio_group", className);
    const customProps = {
      ...props,
      disabled,
      className: classes,
      css: {
        gap,
        flexDirection: direction,
        ...css32
      }
    };
    const customChildren = Children11.toArray(children).map((child) => {
      if (child?.type?.id === "RadioGroupItem") {
        return cloneElement10(child, {
          isDisabled: disabled,
          isReadOnly: readonly,
          required: props.required || formControlProps.isRequired
        });
      }
      return child;
    });
    return createStyledElement(
      RadioGroupPrimitive2.Root,
      root5,
      { disabled },
      customProps,
      customChildren
    );
  }
);
RadioGroup.id = "RadioGroup";
RadioGroup.Item = RadioGroupItem;

// src/components/Stack/Stack.tsx
import { cx as cx71 } from "@fuel-ui/css";
import { jsx as jsx59 } from "react/jsx-runtime";
var Stack = createComponent(
  ({ gap = "$2", direction = "column", className, ...props }) => {
    const classes = cx71("fuel_box--stack", className);
    return /* @__PURE__ */ jsx59(Flex, {
      ...props,
      gap,
      direction,
      className: classes
    });
  }
);

// src/components/Switch/Switch.tsx
import { cx as cx72 } from "@fuel-ui/css";
import * as SwitchPrimitive from "@radix-ui/react-switch";

// src/components/Switch/styles.ts
import { css as css28 } from "@fuel-ui/css";
var root6 = css28({
  all: "unset",
  position: "relative",
  width: 42,
  height: 25,
  backgroundColor: "$gray2",
  borderRadius: "$full",
  boxShadow: "$sm",
  WebkitTapHighlightColor: "rgba(0, 0, 0, 0)",
  "&:focus": {
    outline: "2px solid $gray5"
  },
  '&[data-state="checked"]': {
    backgroundColor: "$gray2"
  },
  variants: {
    size: {
      sm: {
        width: 35,
        height: 18
      },
      md: {
        width: 42,
        height: 25
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
var thumb = css28({
  display: "block",
  backgroundColor: "$gray7",
  borderRadius: "$full",
  boxShadow: `$md`,
  transition: "all 100ms",
  transform: "translateX(2px)",
  willChange: "transform",
  '&[data-state="checked"]': {
    transform: "translateX(19px)",
    backgroundColor: "$accent11"
  },
  variants: {
    size: {
      sm: {
        width: 13,
        height: 13
      },
      md: {
        width: 20,
        height: 20
      }
    }
  },
  defaultVariants: {
    size: "md"
  }
});

// src/components/Switch/Switch.tsx
import { jsx as jsx60 } from "react/jsx-runtime";
var Switch = createComponent(
  ({ size: size3 = "md", className, ...props }) => {
    const classes = cx72("fuel_switch", className);
    return createStyledElement(
      SwitchPrimitive.Root,
      root6,
      { size: size3 },
      { ...props, className: classes },
      /* @__PURE__ */ jsx60(SwitchPrimitive.SwitchThumb, {
        className: thumb({ size: size3 })
      })
    );
  }
);

// src/components/Tabs/Tabs.tsx
import { cx as cx76 } from "@fuel-ui/css";
import * as TabsPrimitive4 from "@radix-ui/react-tabs";

// src/components/Tabs/TabsContent.tsx
import { cx as cx73 } from "@fuel-ui/css";
import * as TabsPrimitive from "@radix-ui/react-tabs";

// src/components/Tabs/styles.ts
import { css as css29 } from "@fuel-ui/css";
var OUTLINE_COLOR = "$gray4";
var BORDER_RADIUS = "$md";
var HIGHLIGHT_COLOR = "$accent11";
var root7 = css29({
  display: "flex",
  flexDirection: "column",
  boxShadow: "$sm",
  borderRadius: BORDER_RADIUS,
  background: "$gray1"
});
var list = css29({
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid $borderColor`
});
var trigger2 = css29({
  all: "unset",
  position: "relative",
  fontFamily: "$sans",
  fontWeight: "$bold",
  px: "$5",
  height: "$12",
  flex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textSize: "base",
  color: "$textColor",
  userSelect: "none",
  border: "2px solid transparent",
  "&:after": {
    position: "absolute",
    display: "none",
    content: '""',
    bottom: "-3px",
    left: 0,
    w: "calc($full + 4px)",
    height: "3px",
    background: "transparent",
    transform: "translateX(-2px)"
  },
  "&:first-child": {
    borderTopLeftRadius: BORDER_RADIUS
  },
  "&:last-child": {
    borderTopRightRadius: BORDER_RADIUS
  },
  "&:hover": {
    color: HIGHLIGHT_COLOR
  },
  '&[data-state="active"]': {
    color: HIGHLIGHT_COLOR,
    borderBottomColor: HIGHLIGHT_COLOR,
    "&:after": {
      display: "block",
      background: HIGHLIGHT_COLOR
    }
  },
  "&:focus": {
    borderColor: OUTLINE_COLOR
  }
});
var content6 = css29({
  flexGrow: 1,
  borderBottomLeftRadius: BORDER_RADIUS,
  borderBottomRightRadius: BORDER_RADIUS,
  outline: "none",
  border: "2px solid transparent",
  "&:focus": {
    borderColor: OUTLINE_COLOR
  }
});

// src/components/Tabs/TabsContent.tsx
var TabsContent = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx73("fuel_tabs--content", className);
    return createStyledElement(
      TabsPrimitive.Content,
      content6,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Tabs/TabsList.tsx
import { cx as cx74 } from "@fuel-ui/css";
import * as TabsPrimitive2 from "@radix-ui/react-tabs";
var TabsList = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx74("fuel_tabs--list", className);
    return createStyledElement(
      TabsPrimitive2.List,
      list,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Tabs/TabsTrigger.tsx
import { cx as cx75 } from "@fuel-ui/css";
import * as TabsPrimitive3 from "@radix-ui/react-tabs";
var TabsTrigger = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx75("fuel_tabs--trigger", className);
    return createStyledElement(
      TabsPrimitive3.Trigger,
      trigger2,
      null,
      { ...props, className: classes },
      children
    );
  }
);

// src/components/Tabs/Tabs.tsx
var Tabs = createComponent(
  ({ children, className, ...props }) => {
    const classes = cx76("fuel_tabs", className);
    return createStyledElement(
      TabsPrimitive4.Root,
      root7,
      null,
      { ...props, className: classes },
      children
    );
  }
);
Tabs.id = "Tabs";
Tabs.List = TabsList;
Tabs.Trigger = TabsTrigger;
Tabs.Content = TabsContent;

// src/components/Tag/Tag.tsx
import { cx as cx78 } from "@fuel-ui/css";
import { Children as Children12 } from "react";

// src/components/Tag/TagCloseButton.tsx
import { cx as cx77 } from "@fuel-ui/css";
import { jsx as jsx61 } from "react/jsx-runtime";
var TagCloseButton = createComponent(
  ({ className, ...props }) => {
    const classes = cx77("fuel_tag--close-btn", className);
    return /* @__PURE__ */ jsx61(IconButton, {
      ...props,
      "aria-label": "close",
      icon: "X",
      variant: "link",
      className: classes,
      iconSize: 14
    });
  }
);
TagCloseButton.id = "TagCloseButton";

// src/components/Tag/styles.ts
import { css as css30 } from "@fuel-ui/css";

// src/components/Tag/variants.ts
var size2 = {
  xs: {
    gap: "$1",
    px: "$2",
    fontSize: "$xs",
    fontWeight: "$bold",
    height: "$5",
    borderRadius: "$full"
  },
  sm: {
    gap: "$2",
    px: "$3",
    fontSize: "$sm",
    fontWeight: "$medium",
    height: "$6",
    borderRadius: "$full"
  },
  md: {
    gap: "$2",
    px: "$3",
    fontSize: "$base",
    fontWeight: "$medium",
    height: "$8",
    borderRadius: "$full"
  }
};
var colors3 = {
  solid: getSolidVariants(false),
  outlined: getOutlinedVariants(false),
  ghost: getGhostVariants(false)
};

// src/components/Tag/styles.ts
var tag = css30({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid transparent",
  transition: "all",
  textDecoration: "none",
  fontFamily: "$sans",
  "& button": {
    px: "$0",
    color: "inherit",
    opacity: ".6",
    "&:hover": {
      opacity: 1
    }
  },
  variants: {
    size: size2,
    color: colors3.solid,
    variant: {
      solid: {},
      outlined: {},
      ghost: {}
    },
    disabled: {
      true: {
        opacity: "0.6",
        cursor: "default"
      }
    }
  },
  compoundVariants: [
    ...colors3.outlined,
    ...colors3.ghost
  ],
  defaultVariants: {
    size: "sm",
    color: "accent",
    variant: "solid"
  }
});

// src/components/Tag/Tag.tsx
import { Fragment as Fragment9, jsx as jsx62, jsxs as jsxs20 } from "react/jsx-runtime";
function getIconSize3(size3, iconSize) {
  if (iconSize)
    return iconSize;
  if (size3 === "xs")
    return 14;
  return 16;
}
function getChildren2({
  isLoading,
  size: size3,
  children,
  iconLeft,
  iconRight
}) {
  if (isLoading) {
    return /* @__PURE__ */ jsxs20(Fragment9, {
      children: [
        /* @__PURE__ */ jsx62(Spinner, {
          color: "current",
          size: SPINNER_SIZE[size3 || "md"]
        }),
        children
      ]
    });
  }
  const hasCloseBtn = Children12.toArray(children).some(
    (child) => child.type?.id?.includes("TagCloseButton")
  );
  return /* @__PURE__ */ jsxs20(Fragment9, {
    children: [
      iconLeft,
      children,
      !hasCloseBtn && iconRight
    ]
  });
}
var Tag = createComponent(
  ({
    as = "span",
    size: size3 = "sm",
    color = "accent",
    variant = "solid",
    iconSize: initialIconSize,
    leftIcon,
    rightIcon,
    leftIconAriaLabel,
    rightIconAriaLabel,
    isLoading,
    isDisabled,
    children,
    className,
    ...props
  }) => {
    const disabled = isLoading || isDisabled;
    const iconSize = getIconSize3(size3, initialIconSize);
    const iconLeft = createIcon(leftIcon, leftIconAriaLabel, iconSize);
    const iconRight = createIcon(rightIcon, rightIconAriaLabel, iconSize);
    const classes = cx78(
      "fuel_tag",
      className,
      tag({
        size: size3,
        variant,
        disabled,
        color
      })
    );
    const customChildren = getChildren2({
      isLoading,
      size: size3,
      iconLeft,
      iconRight,
      children
    });
    return /* @__PURE__ */ jsx62(Box, {
      as,
      ...props,
      className: classes,
      children: customChildren
    });
  }
);
Tag.CloseButton = TagCloseButton;

// src/components/ThemeProvider/ThemeProvider.tsx
import { useMachine } from "@xstate/react";
import { IconContext } from "phosphor-react";
import { useContext as useContext8, createContext as createContext8 } from "react";

// src/styles/GlobalStyles.tsx
import { globalCss } from "@fuel-ui/css";

// src/styles/normalize.ts
var normalize = [
  {
    html: {
      boxSizing: "content-box",
      lineHeight: 1.15
    },
    h1: {
      fontSize: "2em",
      marginBlockEnd: "0.67em",
      marginBlockStart: "0.67em"
    },
    "dl, ol, ul) dl, ol, ul": {
      marginBlockEnd: "0",
      marginBlockStart: "0"
    },
    hr: {
      boxSizing: "content-box",
      color: "inherit",
      height: "0"
    },
    pre: {
      fontFamily: "monospace, monospace",
      fontSize: "1em"
    },
    "abbr[title]": {
      textDecoration: "underline"
    },
    "b, strong": {
      fontWeight: "bolder"
    },
    "code, kbd, samp": {
      fontFamily: "monospace, monospace",
      fontSize: "1em"
    },
    small: {
      fontSize: "80%"
    },
    table: {
      borderColor: "currentColor",
      textIndent: "0"
    },
    "button, input, select": {
      margin: "0"
    },
    button: {
      textTransform: "none"
    },
    'button, input:is([type="button" i], [type="reset" i], [type="submit" i])': {
      WebkitAppearance: "button"
    },
    progress: {
      verticalAlign: "baseline"
    },
    select: {
      textTransform: "none"
    },
    textarea: {
      margin: "0"
    },
    'input[type="search" i]': {
      WebkitAppearance: "textfield",
      outlineOffset: "-2px"
    },
    "::-webkit-inner-spin-button, ::-webkit-outer-spin-button": {
      height: "auto"
    },
    "::-webkit-input-placeholder": {
      color: "inherit",
      opacity: 0.54
    },
    "::-webkit-search-decoration": {
      WebkitAppearance: "none"
    },
    "::-webkit-file-upload-button": {
      WebkitAppearance: "button",
      font: "inherit"
    },
    'button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focus-inner': {
      borderStyle: "none",
      padding: "0"
    },
    'button, input:is([type="button" i], [type="color" i], [type="reset" i], [type="submit" i]))::-moz-focusring': {
      outline: "1px dotted $accent11"
    },
    ":-moz-ui-invalid": {
      boxShadow: "none"
    },
    dialog: {
      backgroundColor: "white",
      border: "solid",
      color: "black",
      height: "fit-content",
      left: "0",
      margin: "auto",
      padding: "1em",
      position: "absolute",
      right: "0",
      width: "fit-content"
    },
    "dialog:not([open])": {
      display: "none"
    },
    summary: {
      display: "list-item"
    }
  },
  {
    "abbr[title]": {
      textDecoration: "underline dotted"
    },
    dialog: {
      height: "-moz-fit-content",
      width: "-moz-fit-content"
    }
  }
];
var opinionated = [{}, ...normalize];

// src/styles/GlobalStyles.tsx
var customStyles = {
  body: {
    "-webkit-font-smoothing": "antialiased",
    "-moz-osx-font-smoothing": "grayscale",
    margin: "0",
    letterSpacing: "0.01em",
    textSize: "base",
    color: "$textColor",
    background: "$bodyColor"
  }
};
var fontStyles = {
  body: {
    fontFamily: "$sans"
  },
  "@font-face": [
    {
      fontFamily: "Satoshi",
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-Variable.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-Variable.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-Variable.ttf') format('truetype')",
      fontWeight: "300 900",
      fontStyle: "normal"
    },
    {
      fontFamily: "Satoshi",
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-VariableItalic.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-VariableItalic.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/Satoshi-VariableItalic.ttf') format('truetype')",
      fontWeight: "300 900",
      fontStyle: "italic"
    },
    {
      fontFamily: "GeneralSans",
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-Variable.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-Variable.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-Variable.ttf') format('truetype')",
      fontWeight: "300 900",
      fontStyle: "normal"
    },
    {
      fontFamily: "GeneralSans",
      src: "url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-VariableItalic.woff2') format('woff2'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-VariableItalic.woff') format('woff'), url('https://pedronauck-strapi.sfo3.digitaloceanspaces.com/fonts/GeneralSans-VariableItalic.ttf') format('truetype')",
      fontWeight: "300 900",
      fontStyle: "italic"
    }
  ]
};
function styles11() {
  globalCss(opinionated)();
  globalCss(customStyles)();
}
function fonts() {
  globalCss(fontStyles)();
}
var GlobalStyles = ({ withFonts }) => {
  withFonts && fonts();
  styles11();
  return null;
};

// src/components/Toast/Toast.tsx
import { css as css31, cx as cx79 } from "@fuel-ui/css";
import toast, { ToastBar, Toaster as Root19 } from "react-hot-toast";
import { jsx as jsx63, jsxs as jsxs21 } from "react/jsx-runtime";
var ToastProvider = createComponent(
  ({ className, position = "bottom-right", ...props }) => {
    const classes = cx79("fuel_toast", className, styles12.root());
    return /* @__PURE__ */ jsx63(Root19, {
      ...props,
      position,
      children: (t) => /* @__PURE__ */ jsx63(ToastBar, {
        toast: t,
        style: { ...DEFAULT_STYLE, ...t.style },
        children: ({ icon, message }) => /* @__PURE__ */ jsxs21("div", {
          className: classes,
          "data-state": t.visible ? "opened" : "closed",
          children: [
            icon,
            message,
            t.type !== "loading" && /* @__PURE__ */ jsx63(IconButton, {
              autoFocus: true,
              size: "xs",
              "aria-label": "Close",
              icon: "X",
              color: "gray",
              variant: "link",
              className: styles12.closeButton(),
              onPress: () => toast.dismiss(t.id)
            })
          ]
        })
      })
    });
  }
);
var DEFAULT_STYLE = {
  padding: 0,
  boxShadow: "none",
  borderRadius: "0",
  background: "transparent"
};
var styles12 = {
  root: css31({
    px: "$4",
    py: "$3",
    display: "flex",
    alignItems: "center",
    gap: "$4",
    backgroundColor: "$gray1",
    borderRadius: "$xl",
    color: "$gray10",
    boxShadow: "$none",
    '& div[role="status"]': {
      m: "0",
      display: "-webkit-box",
      maxWidth: 200,
      lineClamp: 6,
      WebkitLineClamp: 6,
      WebkitBoxOrient: "vertical",
      overflow: "hidden"
    }
  }),
  closeButton: css31({
    alignSelf: "flex-start"
  })
};

// src/components/ThemeProvider/machine.tsx
import { lightTheme as lightTheme2, darkTheme as darkTheme4 } from "@fuel-ui/css";
import { assign, createMachine } from "xstate";
var LOCALSTORAGE_KEY = "fuel-theme";
var DEFAULT_THEME = "dark";
function getDefaultSystemTheme() {
  return DEFAULT_THEME;
}
var machine = createMachine({
  predictableActionArguments: true,
  schema: {
    context: {},
    events: {}
  },
  id: "themeProvider",
  initial: "idle",
  states: {
    idle: {
      entry: ["setDefaultTheme", "addDocumentClass"],
      on: {
        SET_THEME: {
          actions: ["setTheme", "addDocumentClass"]
        },
        TOGGLE_THEME: {
          actions: ["toggleTheme", "addDocumentClass"]
        }
      }
    }
  }
});
var themeProviderMachine = machine.withConfig({
  actions: {
    setDefaultTheme: assign({
      theme: (ctx8) => {
        if (typeof window === "undefined")
          return DEFAULT_THEME;
        const theme = localStorage.getItem(LOCALSTORAGE_KEY);
        return ctx8.theme || theme || getDefaultSystemTheme();
      }
    }),
    setTheme: assign({
      theme: (_, ev) => ev.value
    }),
    toggleTheme: assign({
      theme: (ctx8) => {
        if (ctx8.theme !== "dark" && ctx8.theme !== "light")
          return ctx8.theme;
        return ctx8.theme === "dark" ? "light" : "dark";
      }
    }),
    addDocumentClass: ({ theme }) => {
      const html = document.documentElement;
      if (theme !== "dark" && theme !== "light") {
        html.classList.add(theme.className);
        return;
      }
      html.classList.remove(
        theme === "light" ? darkTheme4.className : lightTheme2.className
      );
      html.classList.add(
        theme === "dark" ? darkTheme4.className : lightTheme2.className
      );
    }
  }
});

// src/components/ThemeProvider/ThemeProvider.tsx
import { jsx as jsx64, jsxs as jsxs22 } from "react/jsx-runtime";
var context = createContext8({
  theme: getDefaultSystemTheme(),
  setTheme: () => null,
  toggleTheme: () => null
});
var ThemeProvider = ({
  children,
  withFonts = true,
  theme: defaultTheme
}) => {
  const [state, send] = useMachine(
    () => defaultTheme ? themeProviderMachine.withContext({ theme: defaultTheme }) : themeProviderMachine
  );
  function setTheme(value) {
    send("SET_THEME", { value });
  }
  function toggleTheme() {
    send("TOGGLE_THEME");
  }
  const contextValue = {
    setTheme,
    toggleTheme,
    theme: state.context.theme
  };
  return /* @__PURE__ */ jsx64(IconContext.Provider, {
    value: { size: 16 },
    children: /* @__PURE__ */ jsxs22(context.Provider, {
      value: contextValue,
      children: [
        /* @__PURE__ */ jsx64(ToastProvider, {}),
        /* @__PURE__ */ jsx64(GlobalStyles, {
          withFonts
        }),
        children
      ]
    })
  });
};
function useFuelTheme() {
  return useContext8(context);
}
export {
  Accordion,
  Alert,
  AlertDialog,
  AspectRatio,
  Avatar,
  Badge,
  Box,
  BoxCentered,
  Button,
  ButtonGroup,
  ButtonLink,
  Card,
  CardList,
  Checkbox,
  Container,
  Copyable,
  Dialog,
  Drawer,
  Dropdown,
  Flex,
  Focus,
  Form,
  FuelLogo,
  Grid,
  Heading,
  HelperIcon,
  Icon,
  IconButton,
  Image,
  Input,
  InputPassword,
  Link,
  List,
  Menu,
  Popover,
  RadioGroup,
  SPINNER_SIZE,
  Spinner,
  Stack,
  Switch,
  Tabs,
  Tag,
  Text,
  ThemeProvider,
  ToastProvider,
  Tooltip,
  createIcon,
  getIconSize,
  toast,
  useAlertProps,
  useCardListContext,
  useDrawer,
  useDropdown,
  useFuelTheme,
  useInputProps,
  useListContext
};
//# sourceMappingURL=index.mjs.map