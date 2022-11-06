"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  Accordion: () => Accordion,
  Alert: () => Alert,
  AlertDialog: () => AlertDialog,
  AspectRatio: () => AspectRatio,
  Avatar: () => Avatar,
  Badge: () => Badge,
  Box: () => Box,
  BoxCentered: () => BoxCentered,
  Button: () => Button,
  ButtonGroup: () => ButtonGroup,
  ButtonLink: () => ButtonLink,
  Card: () => Card,
  CardList: () => CardList,
  Checkbox: () => Checkbox,
  Container: () => Container,
  Copyable: () => Copyable,
  Dialog: () => Dialog,
  Drawer: () => Drawer,
  Dropdown: () => Dropdown,
  Flex: () => Flex,
  Focus: () => Focus,
  Form: () => Form,
  FuelLogo: () => FuelLogo,
  Grid: () => Grid,
  Heading: () => Heading,
  HelperIcon: () => HelperIcon,
  Icon: () => Icon,
  IconButton: () => IconButton,
  Image: () => Image,
  Input: () => Input,
  InputPassword: () => InputPassword,
  Link: () => Link,
  List: () => List,
  Menu: () => Menu,
  Popover: () => Popover,
  RadioGroup: () => RadioGroup,
  SPINNER_SIZE: () => SPINNER_SIZE,
  Spinner: () => Spinner,
  Stack: () => Stack,
  Switch: () => Switch,
  Tabs: () => Tabs,
  Tag: () => Tag,
  Text: () => Text,
  ThemeProvider: () => ThemeProvider,
  ToastProvider: () => ToastProvider,
  Tooltip: () => Tooltip,
  createIcon: () => createIcon,
  getIconSize: () => getIconSize,
  toast: () => import_react_hot_toast.default,
  useAlertProps: () => useAlertProps,
  useCardListContext: () => useCardListContext,
  useDrawer: () => useDrawer,
  useDropdown: () => useDropdown,
  useFuelTheme: () => useFuelTheme,
  useInputProps: () => useInputProps,
  useListContext: () => useListContext
});
module.exports = __toCommonJS(src_exports);

// ../../common/config/react-imports.js
var React = __toESM(require("react"));

// src/components/Accordion/Accordion.tsx
var import_css9 = require("@fuel-ui/css");
var AC4 = __toESM(require("@radix-ui/react-accordion"));

// src/utils/system.tsx
var import_css = require("@fuel-ui/css");
var import_react = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
function createComponent(render) {
  const Component = (0, import_react.forwardRef)(
    (props, ref) => render({ ref, ...props })
  );
  return Component;
}
function createStyledElement(type, style2, styleProps, props, children) {
  const Component = (0, import_react.useMemo)(() => (0, import_css.styled)(type, style2), []);
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {
    ...styleProps,
    ...props,
    children
  });
}

// src/components/Accordion/AccordionContent.tsx
var import_css4 = require("@fuel-ui/css");
var AC = __toESM(require("@radix-ui/react-accordion"));

// src/components/Box/Box.tsx
var import_css2 = require("@fuel-ui/css");
var Box = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css2.cx)("fuel_box", className);
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
  root: (0, import_css2.css)({
    fontFamily: "$sans"
  })
};

// src/components/Accordion/styles.ts
var import_css3 = require("@fuel-ui/css");
var slideDown = (0, import_css3.keyframes)({
  from: { height: 0 },
  to: { height: "var(--radix-accordion-content-height)" }
});
var slideUp = (0, import_css3.keyframes)({
  from: { height: "var(--radix-accordion-content-height)" },
  to: { height: 0 }
});
var root = (0, import_css3.css)({
  borderRadius: "$md",
  maxW: "$full"
});
var item = (0, import_css3.css)({
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
  [`.${import_css3.darkTheme} &`]: {
    backgroundColor: "$gray1"
  },
  [`.${import_css3.darkTheme} &:focus-within`]: {
    outline: `2px solid ${import_css3.darkColors.gray4}`
  },
  [`.${import_css3.lightTheme} &`]: {
    backgroundColor: "white"
  },
  [`.${import_css3.lightTheme} &:focus-within`]: {
    outline: `2px solid ${import_css3.lightColors.gray7}`
  }
});
var header = (0, import_css3.css)({
  all: "unset",
  display: "flex"
});
var trigger = (0, import_css3.css)({
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
var content = (0, import_css3.css)({
  overflow: "hidden",
  background: "transparent",
  '&[data-state="open"]': {
    animation: `${slideDown} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  },
  '&[data-state="closed"]': {
    animation: `${slideUp} 300ms cubic-bezier(0.87, 0, 0.13, 1) forwards`
  }
});
var chevron = (0, import_css3.css)({
  transition: "transform 300ms cubic-bezier(0.87, 0, 0.13, 1)",
  '[data-state="open"] &': {
    transform: "rotate(180deg)"
  }
});

// src/components/Accordion/AccordionContent.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var AccordionContent2 = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css4.cx)("fuel_accordion-content", className);
    return createStyledElement(
      AC.AccordionContent,
      content,
      null,
      { ...props, className: classes },
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
        css: { p: "$4" },
        children
      })
    );
  }
);

// src/components/Accordion/AccordionItem.tsx
var import_css5 = require("@fuel-ui/css");
var AC2 = __toESM(require("@radix-ui/react-accordion"));
var AccordionItem2 = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css5.cx)("fuel_accordion-item", className);
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
var import_css8 = require("@fuel-ui/css");
var AC3 = __toESM(require("@radix-ui/react-accordion"));

// src/components/Icon/Icon.tsx
var import_css7 = require("@fuel-ui/css");
var VisuallyHidden = __toESM(require("@radix-ui/react-visually-hidden"));
var PhosphorIcons = __toESM(require("phosphor-react"));
var import_react2 = require("react");

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
var import_css6 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
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
    const classes = (0, import_css6.cx)("fuel_box--flex", className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
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
var import_jsx_runtime = require("react/jsx-runtime");
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
    const iconElement = (0, import_react2.useMemo)(
      () => {
        if (typeof icon === "string") {
          const Component = (0, import_css7.styled)(PhosphorIcons[icon]);
          return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Component, {});
        }
        return icon;
      },
      [icon]
    );
    const label2 = initialLabel || props["aria-label"];
    const iconProps = {
      className: (0, import_css7.cx)(`fuel_icon--${icon}`, className),
      focusable: false,
      "aria-hidden": true,
      alt,
      size: size3,
      weight,
      mirrored
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      as: "span",
      ...omit(["aria-label"], props),
      className: (0, import_css7.cx)("fuel_icon", wrapperClassName),
      align: "center",
      justify: "center",
      css: {
        display: inline ? "inline-flex" : "flex",
        ...color && { color: `$${color}` },
        ...css32
      },
      children: [
        (0, import_react2.cloneElement)(iconElement, iconProps),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(VisuallyHidden.Root, {
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
var import_jsx_runtime = require("react/jsx-runtime");
var Trigger = (0, import_css8.styled)(AC3.AccordionTrigger, trigger);
var AccordionTrigger2 = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css8.cx)("fuel_accordion-header", className);
    const iconClass = (0, import_css8.cx)("fuel_accordion-icon", chevron());
    const triggerClass = (0, import_css8.cx)("fuel_accordion-trigger", className);
    return createStyledElement(
      AC3.AccordionHeader,
      header,
      null,
      { className: classes },
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Trigger, {
        ...props,
        className: triggerClass,
        children: [
          children,
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
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
var import_jsx_runtime = require("react/jsx-runtime");
var Accordion = createComponent(
  ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AC4.Root, {
    ...props,
    className: (0, import_css9.cx)("fuel_accordion-root", className, root())
  })
);
Accordion.Item = AccordionItem2;
Accordion.Trigger = AccordionTrigger2;
Accordion.Content = AccordionContent2;

// src/components/Alert/Alert.tsx
var import_css20 = require("@fuel-ui/css");
var import_react6 = require("react");

// src/components/Alert/AlertActions.tsx
var import_css11 = require("@fuel-ui/css");
var import_react3 = require("react");

// src/components/Alert/styles.ts
var import_css10 = require("@fuel-ui/css");
var root2 = (0, import_css10.css)({
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
var title = (0, import_css10.css)({
  "& h3": {
    m: 0,
    fontSize: "$base"
  }
});
var description = (0, import_css10.css)({
  flex: 1
});
var actions = (0, import_css10.css)({
  gap: "$4"
});

// src/components/Alert/AlertActions.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var BUTTON_COLORS = {
  info: "blue",
  warning: "amber",
  success: "green",
  error: "red"
};
var AlertActions = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css11.cx)("fuel_alert--actions", className, actions());
    const customProps = { ...props, className: classes };
    const parentProps = useAlertProps();
    const defaultStatus = parentProps?.status || "info";
    const customChildren = import_react3.Children.toArray(children).map((child) => {
      if (child?.type?.id === "AlertButton") {
        return (0, import_react3.cloneElement)(child, { color: BUTTON_COLORS[defaultStatus] });
      }
      return child;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      as: "footer",
      ...customProps,
      children: customChildren
    });
  }
);
AlertActions.id = "AlertActions";

// src/components/Alert/AlertButton.tsx
var import_css16 = require("@fuel-ui/css");

// src/components/Button/Button.tsx
var import_css15 = require("@fuel-ui/css");
var import_utils10 = require("@react-aria/utils");
var import_react5 = require("react");
var import_react_aria = require("react-aria");

// src/components/Spinner/Spinner.tsx
var import_css12 = require("@fuel-ui/css");
var import_react4 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var Root3 = (0, import_css12.styled)("svg");
var Spinner = createComponent(
  ({ size: size3 = 24, color = "accent9", className, ...props }) => {
    const styles13 = (0, import_react4.useMemo)(() => getStyles(size3, color), [size3]);
    const classes = (0, import_css12.cx)("fuel_spinner", className, styles13());
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root3, {
      className: classes,
      viewBox: `0 0 ${size3} ${size3}`,
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
          cx: size3 / 2,
          cy: size3 / 2,
          r: size3 * 0.4,
          className: "bg"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
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
  const strokeColor = import_css12.darkColors[color] || import_css12.darkColors[`${color}`] || color;
  const animation = (0, import_css12.keyframes)({
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
  return (0, import_css12.css)({
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
var import_css14 = require("@fuel-ui/css");

// src/components/Button/variants.ts
var import_css13 = require("@fuel-ui/css");
function createSolidVariant(keyColor, hasHover = true) {
  const color = String(keyColor);
  const outlineColor = `$${color}5`;
  const background = (0, import_css13.isBright)(color) ? `$${color}11` : `$${color}9`;
  const textColor = (0, import_css13.isBright)(color) ? `$${color}3` : `$${color}1`;
  return {
    background,
    borderColor: "transparent",
    color: textColor,
    ...hasHover && {
      "&:not([aria-disabled=true]):hover": {
        borderColor: "$whiteA7",
        boxShadow: `inset 0 0 1000px ${import_css13.darkColors.whiteA7}`
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
  return import_css13.colorKeys.reduce(
    (obj, key) => ({
      ...obj,
      [key]: createSolidVariant(key, hasHover)
    }),
    {}
  );
}
function getOutlinedVariants(hasHover) {
  return import_css13.colorKeys.map((key) => ({
    color: key,
    variant: "outlined",
    css: createOutlinedVariant(key, hasHover)
  }));
}
function getGhostVariants(hasHover) {
  return import_css13.colorKeys.map((key) => ({
    color: key,
    variant: "ghost",
    css: createGhostVariant(key, hasHover)
  }));
}
function getLinkVariants(hasHover) {
  return import_css13.colorKeys.map((key) => ({
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
var button = (0, import_css14.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
function createIcon(icon, iconAriaLabel, iconSize, color) {
  if (typeof icon === "string") {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
      icon,
      label: iconAriaLabel,
      size: iconSize,
      color
    });
  }
  return icon && (0, import_react5.cloneElement)(icon, {
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          color: "current",
          size: SPINNER_SIZE[size3]
        }),
        " Loading..."
      ]
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
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
    const classes = (0, import_css15.cx)("fuel_button", className);
    const innerRef = (0, import_react5.useRef)(null);
    const { buttonProps, isPressed } = (0, import_react_aria.useButton)(
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
      ref: (0, import_utils10.mergeRefs)(ref, innerRef),
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
      (0, import_react_aria.mergeProps)(buttonProps, customProps),
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
var import_jsx_runtime = require("react/jsx-runtime");
var AlertButton = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css16.cx)("fuel_alert--button", className);
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      ...customProps,
      variant: "link",
      children
    });
  }
);
AlertButton.id = "AlertButton";

// src/components/Alert/AlertDescription.tsx
var import_css17 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var AlertDescription = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css17.cx)(
      "fuel_alert--description",
      className,
      description()
    );
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      ...customProps,
      children
    });
  }
);

// src/components/Alert/AlertTitle.tsx
var import_css19 = require("@fuel-ui/css");

// src/components/Heading/Heading.tsx
var import_css18 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
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
    const classes = (0, import_css18.cx)(
      "fuel_heading",
      className,
      styles2({ fontSize, fontColor, as, withIcon })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
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
var styles2 = (0, import_css18.css)({
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
    fontSize: import_css18.utils.textSize.__keys.reduce(
      (obj, key) => ({ ...obj, [key]: { textSize: key } }),
      {}
    ),
    fontColor: import_css18.allColors.reduce(
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
var import_jsx_runtime = require("react/jsx-runtime");
var AlertTitle = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css19.cx)("fuel_alert--title", className, title());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      as: "header",
      ...customProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Heading, {
        as: "h2",
        children
      })
    });
  }
);

// src/components/Alert/Alert.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ctx = (0, import_react6.createContext)({});
function useAlertProps() {
  return (0, import_react6.useContext)(ctx);
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
    const classes = (0, import_css20.cx)(
      "fuel_alert",
      className,
      root2({ status, direction })
    );
    const customProps = {
      ...props,
      direction,
      className: classes
    };
    const items = import_react6.Children.toArray(children).map((child) => {
      if (child?.type?.id === "AlertActions") {
        return (0, import_react6.cloneElement)(child);
      }
      return child;
    });
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx.Provider, {
      value: { status },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Box, {
        ...customProps,
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
            className: "fuel_alert--icon",
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
              ...STATUS_ICONS[status]
            })
          }),
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
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
var import_css29 = require("@fuel-ui/css");
var RAlertDialog7 = __toESM(require("@radix-ui/react-alert-dialog"));

// src/components/AlertDialog/AlertDialogAction.tsx
var import_css21 = require("@fuel-ui/css");
var RAlertDialog = __toESM(require("@radix-ui/react-alert-dialog"));
var AlertDialogAction = (0, import_css21.styled)(RAlertDialog.Action);
AlertDialogAction.defaultProps = {
  asChild: true
};

// src/components/AlertDialog/AlertDialogCancel.tsx
var import_css22 = require("@fuel-ui/css");
var RAlertDialog2 = __toESM(require("@radix-ui/react-alert-dialog"));
var AlertDialogCancel = (0, import_css22.styled)(RAlertDialog2.Cancel);
AlertDialogCancel.defaultProps = {
  asChild: true
};

// src/components/AlertDialog/AlertDialogContent.tsx
var import_css24 = require("@fuel-ui/css");
var RAlertDialog3 = __toESM(require("@radix-ui/react-alert-dialog"));

// src/components/Dialog/styles.ts
var import_css23 = require("@fuel-ui/css");
var overlayShow = (0, import_css23.keyframes)({
  "0%": {
    opacity: 0
  },
  "100%": {
    opacity: 1
  }
});
var contentShow = (0, import_css23.keyframes)({
  "0%": {
    opacity: 0,
    transform: "translate(-50%, -48%) scale(.96)"
  },
  "100%": {
    opacity: 1,
    transform: "translate(-50%, -50%) scale(1)"
  }
});
var overlay = (0, import_css23.css)({
  inset: 0,
  position: "fixed",
  backgroundColor: "rgba(0,0,0,.5)",
  "@media (prefers-reduced-motion: no-preference)": {
    animation: `${overlayShow} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
  }
});
var content2 = (0, import_css23.css)({
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
var heading = (0, import_css23.css)({
  p: "$4",
  m: "$0",
  color: "$gray12",
  fontFamily: "$heading",
  fontSize: "$xl",
  borderBottom: "1px solid $borderColor"
});
var description2 = (0, import_css23.css)({
  p: "$4",
  my: "$0",
  color: "$gray10",
  textSize: "base"
});
var footer = (0, import_css23.css)({
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
var closeButton = (0, import_css23.css)({
  position: "absolute",
  top: "$2",
  right: "$2"
});

// src/components/AlertDialog/AlertDialogContent.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Root4 = (0, import_css24.styled)(RAlertDialog3.Content);
var AlertDialogContent = createComponent(
  ({ children, className, overlayClassName, css: css32, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RAlertDialog3.Portal, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RAlertDialog3.Overlay, {
        className: (0, import_css24.cx)(overlayClassName, CLASSES.Overlay)
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root4, {
        ...props,
        css: css32,
        className: (0, import_css24.cx)(className, CLASSES.Content),
        children
      })
    ]
  })
);
var CLASSES = {
  Overlay: (0, import_css24.cx)("fuel_alert-dialog--overlay", overlay()),
  Content: (0, import_css24.cx)("fuel_alert-dialog--content", content2())
};

// src/components/AlertDialog/AlertDialogDescription.tsx
var import_css25 = require("@fuel-ui/css");
var RAlertDialog4 = __toESM(require("@radix-ui/react-alert-dialog"));
var AlertDialogDescription = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css25.cx)("fuel_alert-dialog--description", className);
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
var import_css26 = require("@fuel-ui/css");
var AlertDialogFooter = createComponent(
  ({ align, className, children, ...props }) => {
    const classes = (0, import_css26.cx)("fuel_alert-dialog--footer", className);
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
var import_css27 = require("@fuel-ui/css");
var RAlertDialog5 = __toESM(require("@radix-ui/react-alert-dialog"));
var AlertDialogHeading = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css27.cx)("fuel_alert-dialog--heading", className);
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
var import_css28 = require("@fuel-ui/css");
var RAlertDialog6 = __toESM(require("@radix-ui/react-alert-dialog"));
var AlertDialogTrigger2 = (0, import_css28.styled)(RAlertDialog6.AlertDialogTrigger);
AlertDialogTrigger2.defaultProps = {
  asChild: true
};

// src/components/AlertDialog/AlertDialog.tsx
var AlertDialogRoot = (0, import_css29.styled)(RAlertDialog7.Root);
var AlertDialog = AlertDialogRoot;
AlertDialog.Content = AlertDialogContent;
AlertDialog.Trigger = AlertDialogTrigger2;
AlertDialog.Heading = AlertDialogHeading;
AlertDialog.Description = AlertDialogDescription;
AlertDialog.Footer = AlertDialogFooter;
AlertDialog.Cancel = AlertDialogCancel;
AlertDialog.Action = AlertDialogAction;

// src/components/AspectRatio/AspectRatio.tsx
var import_css30 = require("@fuel-ui/css");
var AspectRatioPrimitive = __toESM(require("@radix-ui/react-aspect-ratio"));
var AspectRatio = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css30.cx)("fuel_aspect-ratio", className);
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
var import_css34 = require("@fuel-ui/css");
var RAvatar = __toESM(require("@radix-ui/react-avatar"));

// src/components/Avatar/AvatarGenerated.tsx
var import_css32 = require("@fuel-ui/css");

// src/components/Avatar/hooks/useAvatarGenerated.tsx
var import_css31 = require("@fuel-ui/css");
var import_jdenticon = require("jdenticon");
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
    return import_css31.lightColors.brand;
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
    svgString: (0, import_jdenticon.toSvg)(hash, totalSize, {
      backColor,
      padding: 0.15
    }),
    totalSize
  };
}

// src/components/Avatar/AvatarGenerated.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var AvatarGenerated = createComponent(({ hash, size: size3 = "md", className, css: css32, as, background, ...props }) => {
  const { svgString, totalSize } = useAvatarGenerated({
    background,
    hash,
    size: size3
  });
  const classes = (0, import_css32.cx)(className, "fuel_avatar-generated");
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
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
var import_css33 = require("@fuel-ui/css");
var avatar = (0, import_css33.css)({
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
var image = (0, import_css33.css)({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "inherit"
});
var fallback = (0, import_css33.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
var Avatar = createComponent(
  ({ name, size: size3, className, css: css32, as, ...props }) => {
    const classes = (0, import_css34.cx)("fuel_avatar", className);
    const wrapperProps = { as, css: css32, className: classes };
    const children = /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RAvatar.AvatarImage, {
          ...props,
          alt: props.alt || name,
          className: image()
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RAvatar.AvatarFallback, {
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
var import_css37 = require("@fuel-ui/css");

// src/components/Badge/styles.ts
var import_css36 = require("@fuel-ui/css");

// src/components/Badge/variants.ts
var import_css35 = require("@fuel-ui/css");
function createSolidVariant2(keyColor) {
  const color = String(keyColor);
  const background = (0, import_css35.isBright)(color) ? `$${color}11` : `$${color}9`;
  const textColor = (0, import_css35.isBright)(color) ? `$${color}3` : `$${color}1`;
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
  solid: import_css35.colorKeys.reduce(
    (obj, key) => ({ ...obj, [key]: createSolidVariant2(key) }),
    {}
  ),
  outlined: import_css35.colorKeys.map((key) => ({
    color: key,
    variant: "outlined",
    css: createOutlinedVariant2(key)
  })),
  ghost: import_css35.colorKeys.map((key) => ({
    color: key,
    variant: "ghost",
    css: createGhostVariant2(key)
  }))
};

// src/components/Badge/styles.ts
var badge = (0, import_css36.css)({
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
    const classes = (0, import_css37.cx)("fuel_badge", className);
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
var import_css38 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var BoxCentered = createComponent(
  ({ minWS, minHS, className, ...props }) => {
    const classes = (0, import_css38.cx)(
      "fuel_box-centered",
      className,
      styles3({ minWS, minHS })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      ...props,
      className: classes
    });
  }
);
var styles3 = (0, import_css38.css)({
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
var import_css40 = require("@fuel-ui/css");
var import_react8 = require("react");
var import_react_aria4 = require("react-aria");

// src/components/Focus/FocusArrowNavigator.tsx
var import_react7 = require("react");
var import_react_aria2 = require("react-aria");
var import_jsx_runtime = require("react/jsx-runtime");
var GroupChildren = createComponent(({ children }) => {
  const { onKeyDown } = useFocusNavigator();
  if (isRightChildrenType(children)) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: import_react7.Children.map(
        children,
        (child, idx) => (0, import_react7.cloneElement)(
          child,
          (0, import_react_aria2.mergeProps)(child?.props || {}, {
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
  ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria2.FocusScope, {
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupChildren, {
      children
    })
  })
);
function useFocusNavigator() {
  const focusManager = (0, import_react_aria2.useFocusManager)();
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
var import_react_aria3 = require("react-aria");

// src/components/Focus/Focus.tsx
var Focus = {
  Scope: import_react_aria3.FocusScope,
  ArrowNavigator: FocusArrowNavigator
};

// src/components/ButtonGroup/styles.ts
var import_css39 = require("@fuel-ui/css");
var root3 = (0, import_css39.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
function GroupChildren2({ children, childrenProps }) {
  return createStyledElement(
    "div",
    root3,
    null,
    { className: (0, import_css40.cx)("fuel_button-group") },
    import_react8.Children.toArray(children).map(
      (child) => (0, import_react8.cloneElement)(child, (0, import_react_aria4.mergeProps)(child.props, childrenProps))
    )
  );
}
var BUTTON_BASE_PROPS = ["size", "color", "variant", "isDisabled"];
var ButtonGroup = createComponent(
  ({ children, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GroupChildren2, {
    childrenProps: pick(BUTTON_BASE_PROPS, props),
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus.ArrowNavigator, {
      children
    })
  })
);

// src/components/ButtonLink/ButtonLink.tsx
var import_css41 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var ButtonLink = createComponent(
  ({ as = "a", role = "link", isExternal, className, ...props }) => {
    const customProps = {
      ...props,
      className: (0, import_css41.cx)("fuel_button-link", className),
      ...isExternal && {
        target: "_blank",
        rel: "noopener noreferrer",
        rightIcon: "LinkSimple"
      }
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      as,
      ...customProps,
      variant: "link",
      role,
      isLink: true
    });
  }
);

// src/components/Card/Card.tsx
var import_css46 = require("@fuel-ui/css");

// src/components/Card/CardBody.tsx
var import_css43 = require("@fuel-ui/css");

// src/components/Card/styles.ts
var import_css42 = require("@fuel-ui/css");
var card = (0, import_css42.css)({
  background: "$gray1",
  borderRadius: "$md",
  border: "1px solid transparent",
  boxShadow: "$sm"
});
var header2 = (0, import_css42.css)({
  p: "$5",
  borderBottom: "1px solid $borderColor",
  "& .fuel_heading": {
    margin: 0
  }
});
var body = (0, import_css42.css)({
  display: "block",
  px: "$5",
  py: "$5"
});
var footer2 = (0, import_css42.css)({
  p: "$5",
  borderTop: "1px solid $borderColor"
});

// src/components/Card/CardBody.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var CardBody = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css43.cx)("fuel_card--body", className, body());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      ...customProps,
      children
    });
  }
);

// src/components/Card/CardFooter.tsx
var import_css44 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var CardFooter = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css44.cx)("fuel_card--footer", className, footer2());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      as: "footer",
      ...customProps,
      children
    });
  }
);

// src/components/Card/CardHeader.tsx
var import_css45 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var CardHeader = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css45.cx)("fuel_card--header", className, header2());
    const customProps = { ...props, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      as: "header",
      ...customProps,
      children
    });
  }
);

// src/components/Card/Card.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Card = createComponent(
  ({ direction = "column", children, className, ...props }) => {
    const classes = (0, import_css46.cx)("fuel_card", className, card());
    const customProps = { ...props, direction, className: classes };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
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
var import_css48 = require("@fuel-ui/css");
var import_react9 = require("react");

// src/components/CardList/CardListItem.tsx
var import_css47 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var CardListItem = createComponent(
  ({ children, className, rightEl, isActive, ...props }) => {
    const { isClickable } = useCardListContext();
    const classes = (0, import_css47.cx)(
      "fuel_card-list--item",
      className,
      styles4.root({ isActive, isClickable })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
      direction: "row",
      ...props,
      className: classes,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
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
  root: (0, import_css47.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
var ctx2 = (0, import_react9.createContext)({});
function useCardListContext() {
  return (0, import_react9.useContext)(ctx2);
}
var CardList = createComponent(
  ({ children, className, isClickable, autoFocus, ...props }) => {
    const classes = (0, import_css48.cx)("fuel_card-list", className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx2.Provider, {
      value: { isClickable, autoFocus },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stack, {
        ...props,
        className: classes,
        children: isClickable ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Focus.ArrowNavigator, {
          autoFocus,
          children
        }) : children
      })
    });
  }
);
CardList.Item = CardListItem;

// src/components/Checkbox/Checkbox.tsx
var import_css52 = require("@fuel-ui/css");
var CheckboxPrimitive = __toESM(require("@radix-ui/react-checkbox"));

// src/components/Form/FormControl.tsx
var import_css50 = require("@fuel-ui/css");
var import_react10 = require("react");

// src/components/Form/styles.ts
var import_css49 = require("@fuel-ui/css");
var control = (0, import_css49.css)({
  display: "flex",
  flexDirection: "column",
  gap: "$2"
});
var label = (0, import_css49.css)({
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
var helperText = (0, import_css49.css)({
  px: "$1",
  textSize: "sm",
  "&[aria-hidden=true]": {
    display: "none"
  }
});
var errorMessage = (0, import_css49.css)({
  px: "$1",
  textSize: "sm",
  "&[aria-hidden=true]": {
    display: "none"
  }
});

// src/components/Form/FormControl.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function getRightDescribedBy(ids, id, isInvalid) {
  if (isInvalid && ids.some((i) => i?.includes("FormErrorMessage"))) {
    return `feedback${id}`;
  }
  if (ids.some((i) => i?.includes("FormHelperText"))) {
    return `helperText${id}`;
  }
  return `label${id}`;
}
var ctx3 = (0, import_react10.createContext)({ id: "" });
function useFormControlProps() {
  return (0, import_react10.useContext)(ctx3);
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
    const id = (0, import_react10.useId)();
    const classes = (0, import_css50.cx)("fuel_form--control", className);
    const childArr = import_react10.Children.toArray(children);
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx3.Provider, {
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
var import_css51 = require("@fuel-ui/css");
var root4 = (0, import_css51.css)({
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
  [`.${import_css51.darkTheme} &`]: {
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
var indicator = (0, import_css51.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
var Checkbox = createComponent(
  ({ isDisabled, isReadOnly, className, ...props }) => {
    const formControlProps = useFormControlProps();
    const disabled = isDisabled || isReadOnly || formControlProps.isDisabled || formControlProps.isReadOnly;
    const readonly = isReadOnly || formControlProps.isReadOnly;
    const classes = (0, import_css52.cx)("fuel_checkbox", className);
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckboxPrimitive.CheckboxIndicator, {
        className: indicatorClass,
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
          icon: "Check"
        })
      })
    );
  }
);
Checkbox.id = "Checkbox";

// src/components/Container/Container.tsx
var import_css53 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var Container = createComponent(
  ({ className, size: size3, ...props }) => {
    const classes = (0, import_css53.cx)("fuel_container", className, styles5({ size: size3 }));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      ...props,
      className: classes
    });
  }
);
var styles5 = (0, import_css53.css)({
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
var import_css57 = require("@fuel-ui/css");

// src/components/IconButton/IconButton.tsx
var import_css56 = require("@fuel-ui/css");

// src/components/Tooltip/Tooltip.tsx
var import_css55 = require("@fuel-ui/css");
var RTooltip = __toESM(require("@radix-ui/react-tooltip"));

// src/components/Tooltip/styles.ts
var import_css54 = require("@fuel-ui/css");
var slideUpAndFade = (0, import_css54.keyframes)({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade = (0, import_css54.keyframes)({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideDownAndFade = (0, import_css54.keyframes)({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade = (0, import_css54.keyframes)({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var arrow = (0, import_css54.css)({
  fill: "$gray2"
});
var content3 = (0, import_css54.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
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
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RTooltip.Provider, {
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RTooltip.Root, {
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RTooltip.Trigger, {
          asChild: true,
          children
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RTooltip.Content, {
          className: (0, import_css55.cx)(className, CLASSES2.Content),
          side,
          align,
          sideOffset,
          alignOffset,
          children: [
            /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RTooltip.Arrow, {
              offset: 5,
              width: 11,
              height: 5,
              className: (0, import_css55.cx)(arrowClassName, CLASSES2.Arrow)
            }),
            content7
          ]
        })
      ]
    })
  })
);
var CLASSES2 = {
  Content: (0, import_css55.cx)("fuel_tooltip--content", content3()),
  Arrow: (0, import_css55.cx)("fuel_tooltip--arrow", arrow())
};

// src/components/IconButton/IconButton.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var IconButton = createComponent(
  ({ icon, tooltip, className, ...props }) => {
    const classes = (0, import_css56.cx)("fuel_icon-buton", className);
    const content7 = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
      ...props,
      justIcon: true,
      className: classes,
      leftIcon: icon
    });
    return tooltip ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
      content: tooltip,
      children: content7
    }) : content7;
  }
);

// src/components/Copyable/Copyable.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Copyable = createComponent(
  ({
    css: css32,
    children,
    className,
    value,
    tooltipMessage = "Click here to copy to clipboard",
    ...props
  }) => {
    const classes = (0, import_css57.cx)("fuel_copyable", className);
    const iconClass = (0, import_css57.cx)("fuel_copyable-icon");
    async function handleCopy() {
      await navigator.clipboard.writeText(value);
    }
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      gap: "$2",
      ...props,
      className: classes,
      css: { ...styles6.root, ...css32 },
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
          color: "gray",
          tooltip: tooltipMessage,
          onPress: handleCopy,
          variant: "link",
          icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
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
  root: (0, import_css57.cssObj)({
    display: "inline-flex"
  }),
  icon: (0, import_css57.cssObj)({
    px: "$0",
    height: "$4",
    color: "$gray8"
  })
};

// src/components/Dialog/Dialog.tsx
var import_css64 = require("@fuel-ui/css");
var RDialog6 = __toESM(require("@radix-ui/react-dialog"));

// src/components/Dialog/DialogClose.tsx
var import_css58 = require("@fuel-ui/css");
var RDialog = __toESM(require("@radix-ui/react-dialog"));
var DialogClose = (0, import_css58.styled)(RDialog.Close);
DialogClose.defaultProps = {
  asChild: true
};

// src/components/Dialog/DialogContent.tsx
var import_css59 = require("@fuel-ui/css");
var RDialog2 = __toESM(require("@radix-ui/react-dialog"));
var import_jsx_runtime = require("react/jsx-runtime");
var Root10 = (0, import_css59.styled)(RDialog2.Content);
var DialogContent = createComponent(
  ({
    children,
    className,
    overlayClassName,
    closeClassName,
    hideCloseButton,
    css: css32,
    ...props
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RDialog2.Portal, {
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RDialog2.Overlay, {
        className: (0, import_css59.cx)(overlayClassName, CLASSES3.Overlay)
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Root10, {
        ...props,
        css: css32,
        className: (0, import_css59.cx)(className, CLASSES3.Content),
        children: [
          children,
          !hideCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RDialog2.Close, {
            className: (0, import_css59.cx)(closeClassName, closeButton()),
            asChild: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
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
  Overlay: (0, import_css59.cx)("fuel_dialog--overlay", overlay()),
  Content: (0, import_css59.cx)("fuel_dialog--content", content2())
};

// src/components/Dialog/DialogDescription.tsx
var import_css60 = require("@fuel-ui/css");
var RDialog3 = __toESM(require("@radix-ui/react-dialog"));
var DialogDescription = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css60.cx)(
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
var import_css61 = require("@fuel-ui/css");
var DialogFooter = createComponent(
  ({ align, className, children, ...props }) => {
    const classes = (0, import_css61.cx)("fuel_dialog--footer", className);
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
var import_css62 = require("@fuel-ui/css");
var RDialog4 = __toESM(require("@radix-ui/react-dialog"));
var DialogHeading = createComponent(
  ({ className, children, ...props }) => {
    const classes = (0, import_css62.cx)("fuel_dialog--heading", className);
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
var import_css63 = require("@fuel-ui/css");
var RDialog5 = __toESM(require("@radix-ui/react-dialog"));
var DialogTrigger2 = (0, import_css63.styled)(RDialog5.DialogTrigger);
DialogTrigger2.defaultProps = {
  asChild: true
};

// src/components/Dialog/Dialog.tsx
var DialogRoot = (0, import_css64.styled)(RDialog6.Root);
var Dialog = DialogRoot;
Dialog.Content = DialogContent;
Dialog.Trigger = DialogTrigger2;
Dialog.Heading = DialogHeading;
Dialog.Description = DialogDescription;
Dialog.Footer = DialogFooter;
Dialog.Close = DialogClose;

// src/components/Drawer/Drawer.tsx
var import_framer_motion2 = require("framer-motion");
var import_react12 = require("react");
var import_react_aria6 = require("react-aria");
var import_react_stately = require("react-stately");

// src/components/Drawer/DrawerBody.tsx
var import_css65 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var DrawerBody = createComponent(
  ({ className, ...props }) => {
    const classes = (0, import_css65.cx)("fuel_drawer-body", className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      ...props,
      className: classes
    });
  }
);

// src/components/Drawer/DrawerClose.tsx
var import_css67 = require("@fuel-ui/css");

// src/components/Drawer/styles.ts
var import_css66 = require("@fuel-ui/css");
var overlay2 = (0, import_css66.css)({
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
var content4 = (0, import_css66.css)({
  overflowX: "auto",
  position: "relative",
  minHeight: "100%",
  maxHeight: "100%",
  background: "$gray1",
  boxShadow: "$lg"
});
var close = (0, import_css66.cssObj)({
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
var import_jsx_runtime = require("react/jsx-runtime");
var DrawerClose = createComponent(({ css: css32, className, ...props }) => {
  const classes = (0, import_css67.cx)("fuel_drawer-close", className);
  const { state } = useDrawer();
  function handleClose() {
    state?.setOpen(false);
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
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
var import_css68 = require("@fuel-ui/css");
var import_utils47 = require("@react-aria/utils");
var import_framer_motion = require("framer-motion");
var import_react_aria5 = require("react-aria");
var import_react_use = require("react-use");
var import_jsx_runtime = require("react/jsx-runtime");
var MotionBox = (0, import_framer_motion.motion)(Box);
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
  const { dialogProps } = (0, import_react_aria5.useDialog)({ role: "dialog" }, ref);
  const { modalProps } = (0, import_react_aria5.useModal)();
  const finalProps = (0, import_utils47.mergeProps)(props, overlayProps, dialogProps, modalProps);
  const contentClasses = (0, import_css68.cx)("fuel_drawer-content", className, content4());
  const overlayClasses = (0, import_css68.cx)(
    "fuel_drawer-overlay",
    className,
    overlay2({ side })
  );
  (0, import_react_aria5.usePreventScroll)();
  (0, import_react_use.useClickAway)(ref, () => {
    if (shouldCloseOnClickAway) {
      state?.toggle();
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
    ...underlayProps,
    className: overlayClasses,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria5.FocusScope, {
      contain: true,
      restoreFocus: true,
      autoFocus: true,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MotionBox, {
        ...finalProps,
        ref: (0, import_utils47.mergeRefs)(innerRef, ref),
        className: contentClasses,
        animate: { x: 0 },
        initial: { x: side === "right" ? "100%" : "-100%" },
        exit: { x: side === "right" ? "100%" : "-100%" },
        transition,
        css: { ...props.css, ...getSize(size3) },
        children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
          children
        })
      })
    })
  });
});
DrawerContent.id = "DrawerContent";

// src/components/Drawer/DrawerTrigger.tsx
var import_css69 = require("@fuel-ui/css");
var import_react11 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var DrawerTrigger = createComponent(({ className, asChild = true, children, ...props }) => {
  const classes = (0, import_css69.cx)("fuel_drawer-trigger", className);
  const { state } = useDrawer();
  function handleToggle() {
    state?.toggle();
  }
  if (asChild) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: import_react11.Children.toArray(import_react11.Children.only(children)).map((child) => {
        return (0, import_react11.cloneElement)(child, {
          onPress: handleToggle,
          className: classes
        });
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
    ...props,
    onPress: handleToggle,
    children
  });
});

// src/components/Drawer/Drawer.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ctx4 = (0, import_react12.createContext)({});
function useDrawer() {
  return (0, import_react12.useContext)(ctx4);
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
    const ref = (0, import_react12.useRef)(null);
    const [container, setContainer] = (0, import_react12.useState)(null);
    const state = (0, import_react_stately.useOverlayTriggerState)(opts);
    const { overlayProps, underlayProps } = (0, import_react_aria6.useOverlay)(
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
    const customChildren = import_react12.Children.toArray(children).map((child) => {
      if (child?.type.id === "DrawerContent") {
        return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_aria6.OverlayContainer, {
          ...container && { portalContainer: container },
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_framer_motion2.AnimatePresence, {
            children: state.isOpen && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
              children: child
            })
          }, child.type.id)
        }, child?.type.id);
      }
      return child;
    });
    (0, import_react12.useEffect)(() => {
      if (containerRef?.current) {
        setContainer(containerRef.current);
      }
    }, [containerRef?.current]);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx4.Provider, {
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
var import_css76 = require("@fuel-ui/css");
var import_react16 = require("react");
var import_react_aria9 = require("react-aria");
var import_react_stately3 = require("react-stately");
var import_react_use2 = require("react-use");

// src/components/Popover/Popover.tsx
var import_css71 = require("@fuel-ui/css");
var RPopover = __toESM(require("@radix-ui/react-popover"));

// src/components/Popover/styles.ts
var import_css70 = require("@fuel-ui/css");
var slideUpAndFade2 = (0, import_css70.keyframes)({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideRightAndFade2 = (0, import_css70.keyframes)({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var slideDownAndFade2 = (0, import_css70.keyframes)({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" }
});
var slideLeftAndFade2 = (0, import_css70.keyframes)({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" }
});
var arrow2 = (0, import_css70.css)({
  fill: "$gray2"
});
var content5 = (0, import_css70.css)({
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
var closeButton2 = (0, import_css70.css)({
  position: "absolute",
  top: "$2",
  right: "$2"
});

// src/components/Popover/Popover.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var Content5 = (0, import_css71.styled)(RPopover.Content);
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
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(RPopover.Root, {
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RPopover.Trigger, {
        asChild: true,
        children
      }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Content5, {
        css: css32,
        className: (0, import_css71.cx)(className, CLASSES4.Content),
        side,
        align,
        ...{ ...contentProps, sideOffset, alignOffset },
        children: [
          /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RPopover.Arrow, {
            offset: 0,
            width: 15,
            height: 5,
            ...arrowProps,
            className: (0, import_css71.cx)(arrowClassName, CLASSES4.Arrow)
          }),
          showCloseButton && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RPopover.Close, {
            "aria-label": "Close",
            className: (0, import_css71.cx)(closeButtonClassName, CLASSES4.CloseButton),
            asChild: true,
            children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
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
  Content: (0, import_css71.cx)("fuel_popover--content", content5()),
  Arrow: (0, import_css71.cx)("fuel_popover--arrow", arrow2()),
  CloseButton: (0, import_css71.cx)("fuel_popover--closeBtn", closeButton2())
};

// src/components/Menu/Menu.tsx
var import_css74 = require("@fuel-ui/css");
var import_utils54 = require("@react-aria/utils");
var import_react14 = require("react");
var import_react_aria8 = require("react-aria");
var import_react_stately2 = require("react-stately");

// src/components/Menu/MenuItem.tsx
var import_css73 = require("@fuel-ui/css");
var import_utils52 = require("@react-aria/utils");
var import_react13 = require("react");
var import_react_aria7 = require("react-aria");

// src/components/Menu/styles.ts
var import_css72 = require("@fuel-ui/css");
var menu = (0, import_css72.css)({
  p: "$0",
  py: "$2",
  m: "$0",
  borderRadius: "$md",
  "&:focus": {
    outline: "2px solid $gray5"
  }
});
var item2 = (0, import_css72.css)({
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
    const ref = (0, import_react13.useRef)(null);
    const isDisabled = state.disabledKeys.has(item4.key);
    const isFocused = state.selectionManager.focusedKey === item4.key;
    const { buttonProps } = (0, import_react_aria7.useButton)(
      { isDisabled, onPress: item4.props.onPress, autoFocus },
      ref
    );
    const { menuItemProps } = (0, import_react_aria7.useMenuItem)(
      { isDisabled, onAction, key: item4.key, closeOnSelect: true },
      state,
      ref
    );
    const classes = (0, import_css73.cx)("fuel_menu-list-item", className);
    const customProps = {
      ...props,
      ref: (0, import_utils52.mergeRefs)(ref, props.ref),
      className: classes,
      "data-focused": isFocused,
      "aria-label": item4.props["aria-label"]
    };
    return createStyledElement(
      "li",
      item2,
      null,
      (0, import_react_aria7.mergeProps)(customProps, buttonProps, menuItemProps),
      item4.rendered
    );
  }
);

// src/components/Menu/Menu.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = require("react");
var Menu = createComponent(
  ({
    ref,
    autoFocus,
    className,
    onAction,
    selectionMode = "none",
    ...props
  }) => {
    const innerRef = (0, import_react14.useRef)(null);
    const state = (0, import_react_stately2.useTreeState)({ ...props, selectionMode });
    const { menuProps } = (0, import_react_aria8.useMenu)(props, state, innerRef);
    const classes = (0, import_css74.cx)("fuel_menu", className, menu());
    const customProps = {
      ...omit(["disabledKeys"], props),
      ref: (0, import_utils54.mergeRefs)(innerRef, ref),
      className: classes
    };
    const children = [...state.collection].map((item4, idx) => /* @__PURE__ */ (0, import_react.createElement)(MenuItem, {
      ...autoFocus && idx === 0 && { autoFocus: true },
      className: item4.props.className,
      key: item4.key,
      item: item4,
      state,
      onAction
    }));
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      as: "ul",
      ...(0, import_react_aria8.mergeProps)(menuProps, customProps),
      children
    });
  }
);
Menu.Item = import_react_stately2.Item;

// src/components/Dropdown/DropdownMenu.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var DropdownMenu = createComponent(
  (props) => {
    const { menuProps } = useDropdown();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
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
var import_css75 = require("@fuel-ui/css");
var import_utils57 = require("@react-aria/utils");
var import_react15 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var DropdownTrigger = createComponent(({ ref, className, asChild = true, children, ...props }) => {
  const classes = (0, import_css75.cx)("fuel_dropdown-trigger", className);
  const { state, triggerRef } = useDropdown();
  function handleToggle() {
    state?.toggle();
  }
  if (asChild) {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, {
      children: import_react15.Children.toArray(import_react15.Children.only(children)).map((child) => {
        return (0, import_react15.cloneElement)(child, {
          ref: (0, import_utils57.mergeRefs)(ref, triggerRef),
          onPress: handleToggle,
          className: classes
        });
      })
    });
  }
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
    ...props,
    ref: (0, import_utils57.mergeRefs)(ref, triggerRef),
    onPress: handleToggle,
    rightIcon: state?.isOpen ? Icon.is("CaretUp") : Icon.is("CaretDown"),
    children
  });
});
DropdownTrigger.id = "DropdownTrigger";

// src/components/Dropdown/Dropdown.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ctx5 = (0, import_react16.createContext)({});
function useDropdown() {
  return (0, import_react16.useContext)(ctx5);
}
var Dropdown = createComponent(
  ({ children, className, css: css32, popoverProps, ...props }) => {
    const ref = (0, import_react16.useRef)(null);
    const state = (0, import_react_stately3.useMenuTriggerState)(props);
    const { menuTriggerProps, menuProps } = (0, import_react_aria9.useMenuTrigger)({}, state, ref);
    const classes = (0, import_css76.cx)("fuel_dropdown", className);
    const ctxProps = {
      state,
      menuTriggerProps,
      menuProps,
      triggerRef: ref
    };
    const trigger3 = import_react16.Children.toArray(children).find(
      (child) => child?.type.id === "DropdownTrigger"
    );
    const menu2 = import_react16.Children.toArray(children).find(
      (child) => child?.type.id === "DropdownMenu"
    );
    const customChildren = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx5.Provider, {
      value: ctxProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Popover, {
        ...popoverProps,
        css: { padding: "$0", ...css32 },
        content: menu2,
        open: state.isOpen,
        onOpenChange: state.setOpen,
        showCloseButton: false,
        children: trigger3
      })
    });
    (0, import_react_use2.useKeyPressEvent)("Esc", () => {
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
var import_css78 = require("@fuel-ui/css");

// src/components/Text/Text.tsx
var import_css77 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
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
    const classes = (0, import_css77.cx)("fuel_text", className);
    return createStyledElement(
      "p",
      styles7,
      { fontSize, color, withIcon },
      { ...props, className: classes },
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
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
var styles7 = (0, import_css77.css)({
  margin: 0,
  variants: {
    fontSize: import_css77.utils.textSize.__keys.reduce(
      (obj, key) => ({ ...obj, [key]: { textSize: key } }),
      {}
    ),
    color: import_css77.allColors.reduce(
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
var import_jsx_runtime = require("react/jsx-runtime");
var FormErrorMessage = createComponent(({ as = "div", color, children, className, ...props }) => {
  const { id, ...parentProps } = useFormControlProps();
  const classes = (0, import_css78.cx)(
    "fuel_form--error-message",
    className,
    errorMessage({})
  );
  const customProps = {
    ...props,
    id: `feedback${id}`,
    className: classes
  };
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
    as,
    ...customProps,
    color: color || "red9",
    "aria-hidden": !parentProps?.isInvalid,
    children
  });
});
FormErrorMessage.id = "FormErrorMessage";

// src/components/Form/FormHelperText.tsx
var import_css79 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var FormHelperText = createComponent(
  ({ as = "div", color, children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = (0, import_css79.cx)(
      "fuel_form--helper-text",
      className,
      helperText({})
    );
    const customProps = {
      ...props,
      id: `helperText${id}`,
      className: classes
    };
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
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
var import_css80 = require("@fuel-ui/css");
var Label = __toESM(require("@radix-ui/react-label"));
var FormLabel = createComponent(
  ({ as = "label", children, className, ...props }) => {
    const { id, ...parentProps } = useFormControlProps();
    const classes = (0, import_css80.cx)("fuel_form--label", className);
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
var import_css81 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var Svg = (0, import_css81.styled)("svg");
var FuelLogo = createComponent(
  ({ size: size3 = 60, className, ...props }) => {
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Svg, {
      ...props,
      viewBox: "0 0 852 852",
      css: { ...props.css, width: size3, height: size3 },
      className: (0, import_css81.cx)("fuel_logo", className),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
          fill: "#58c09b",
          d: "M638.737 321.745a16.735 16.735 0 0115.33 9.607 17.281 17.281 0 01-1.737 18.127L360.261 715.008a19.368 19.368 0 01-6.229 4.684 16.628 16.628 0 01-15.113-.151 17.057 17.057 0 01-9.192-19.623l52.567-201.191-216.294.664a16.735 16.735 0 01-15.33-9.607c-2.758-5.887-2.056-13.38 1.737-18.127L444.708 106.62a16.178 16.178 0 0120.618-4.793c7.47 3.1 11.376 11.442 9.686 19.394l-52.567 201.19z"
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
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
var import_css82 = require("@fuel-ui/css");

// src/components/Grid/GridItem.tsx
var import_jsx_runtime = require("react/jsx-runtime");
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
  }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
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
var import_jsx_runtime = require("react/jsx-runtime");
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
    const classes = (0, import_css82.cx)("fuel_box--grid", className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
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
var import_css83 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var HelperIcon = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css83.cx)("fuel_helper-icon", className, styles8());
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      align: "center",
      gap: "$2",
      ...props,
      className: classes,
      children: [
        children,
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tooltip, {
          content: props.message,
          children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
            icon: "Question",
            "aria-label": "Helper Icon"
          })
        })
      ]
    });
  }
);
var styles8 = (0, import_css83.css)({
  display: "inline-flex",
  "& .fuel_icon": {
    color: "$gray8"
  }
});

// src/components/Image/Image.tsx
var import_css84 = require("@fuel-ui/css");
var Image = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css84.cx)("fuel_image", className);
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
var import_css90 = require("@fuel-ui/css");
var import_react20 = require("react");

// src/components/Input/InputAddon.tsx
var import_css86 = require("@fuel-ui/css");

// src/components/Input/styles.ts
var import_css85 = require("@fuel-ui/css");
var BG_COLOR = "$inputBg";
var INPUT_COLOR = "$inputColor";
var BORDER_COLOR = "$inputBorder";
var PLACEHOLDER_COLOR = "$inputPlaceholderColor";
var ADDON_COLOR = "$gray7";
var input = (0, import_css85.css)({
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
var field = (0, import_css85.css)({
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
var element = (0, import_css85.css)({
  ...elementDefinitions,
  '&[class*="left"]': {
    pr: 0
  },
  '&[class*="right"]': {
    pl: 0
  }
});
var addon = (0, import_css85.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
var InputAddon = createComponent(({ className, children, ...props }) => {
  const { size: size3 } = useInputProps();
  const classes = (0, import_css86.cx)("fuel_input--addon", className);
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
  ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputAddon, {
    ...props,
    className: (0, import_css86.cx)("fuel_input-addon--left", className)
  })
);
var InputAddonRight = createComponent(
  ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputAddon, {
    ...props,
    className: (0, import_css86.cx)("fuel_input-addon--right", className)
  })
);
InputAddonLeft.id = "InputAddon";
InputAddonRight.id = "InputAddon";

// src/components/Input/InputElement.tsx
var import_css87 = require("@fuel-ui/css");
var import_react17 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
var ICON_SIZES = {
  sm: 16,
  md: 18,
  lg: 22
};
var InputElement = createComponent(
  ({ element: element2, className, children, ...props }) => {
    const { size: size3, ...parentProps } = useInputProps();
    const disabled = parentProps?.isDisabled || parentProps?.isReadOnly;
    const classes = (0, import_css87.cx)("fuel_input--element", className);
    const customChildren = import_react17.Children.toArray(element2 || children).map(
      (child) => {
        const isButton = child?.type?.id === "Button" || child?.type?.displayName?.toString().includes("button");
        if (isButton) {
          const childProps = child?.props;
          const defaultSize = size3 === "sm" ? "xs" : "sm";
          return (0, import_react17.cloneElement)(child, {
            ...childProps,
            disabled,
            isDisabled: disabled,
            size: childProps.size || defaultSize
          });
        }
        if (child?.type?.id === "Icon") {
          const childProps = child?.props;
          const defaultSize = ICON_SIZES[size3 || "md"];
          return (0, import_react17.cloneElement)(child, {
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
var InputElementLeft = createComponent(({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputElement, {
  ...props,
  className: (0, import_css87.cx)("fuel_input-element--left", className)
}));
var InputElementRight = createComponent(({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(InputElement, {
  ...props,
  className: (0, import_css87.cx)("fuel_input-element--right", className)
}));
InputElementLeft.id = "InputElement";
InputElementRight.id = "InputElement";

// src/components/Input/InputField.tsx
var import_css88 = require("@fuel-ui/css");
var import_utils71 = require("@react-aria/utils");
var import_react18 = require("react");
var import_react_aria10 = require("react-aria");
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
    const classes = (0, import_css88.cx)("fuel_input--field", className);
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
    const ref = (0, import_react18.useRef)(null);
    const { focusableProps } = (0, import_react_aria10.useFocusable)(props, ref);
    const customProps = (0, import_react_aria10.mergeProps)(inputProps, focusableProps);
    return createStyledElement("input", field, null, {
      ...customProps,
      className: classes,
      ref: (0, import_utils71.mergeRefs)(ref, props.ref)
    });
  }
);
InputField.id = "InputField";

// src/components/Input/InputNumber.tsx
var import_css89 = require("@fuel-ui/css");
var import_react19 = require("react");
var import_react_aria11 = require("react-aria");
var import_react_number_format = require("react-number-format");
var import_jsx_runtime = require("react/jsx-runtime");
var Root14 = (0, import_css89.styled)(import_react_number_format.NumericFormat, {});
var InputNumber = createComponent(({ name: nameProp, htmlSize, role = "textbox", className, ...props }) => {
  const parentProps = useInputProps();
  const isRequired = parentProps?.isRequired;
  const isDisabled = parentProps?.isDisabled;
  const isReadOnly = parentProps?.isReadOnly;
  const isInvalid = parentProps?.isInvalid;
  const describedBy = parentProps?.describedBy;
  const name = `${nameProp}`;
  const disabled = isDisabled || isReadOnly;
  const classes = (0, import_css89.cx)(
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
  const ref = (0, import_react19.useRef)(null);
  const { focusableProps } = (0, import_react_aria11.useFocusable)(props, ref);
  const customProps = (0, import_react_aria11.mergeProps)(inputProps, focusableProps);
  const Comp = Root14;
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Comp, {
    ...customProps,
    className: classes,
    getInputRef: ref,
    customInput: InputField,
    onBlur: customProps.onBlur || void 0
  });
});
InputNumber.id = "InputNumber";

// src/components/Input/Input.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ctx6 = (0, import_react20.createContext)({});
function useInputProps() {
  return (0, import_react20.useContext)(ctx6);
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
    const classes = (0, import_css90.cx)("fuel_input", className);
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx6.Provider, {
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
var import_css91 = require("@fuel-ui/css");
var import_react21 = require("react");
var import_jsx_runtime = require("react/jsx-runtime");
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
    const classes = (0, import_css91.cx)("fuel_input-password", className);
    const [showing, setShowing] = (0, import_react21.useState)(() => false);
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Input, {
      ...inputProps,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input.ElementLeft, {
          element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
            icon: "Lock"
          })
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input.Field, {
          ...props,
          type: !showing ? "password" : "text",
          className: classes
        }),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input.ElementRight, {
          element: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
            color: "gray",
            variant: "link",
            icon: showing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
              icon: "Eye",
              color: "accent11"
            }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
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
var import_css92 = require("@fuel-ui/css");
var import_react22 = require("react");
var import_react_aria12 = require("react-aria");
var import_jsx_runtime = require("react/jsx-runtime");
var Link = createComponent(
  ({ isExternal, className, children, color, ...props }) => {
    const ref = (0, import_react22.useRef)(null);
    const { linkProps } = (0, import_react_aria12.useLink)(props, ref);
    const customProps = {
      role: "link",
      className: (0, import_css92.cx)("fuel_link", className),
      ...isExternal && { target: "_blank", rel: "noopener noreferrer" }
    };
    return createStyledElement(
      "a",
      styles9.link,
      { color },
      (0, import_react_aria12.mergeProps)(props, customProps, linkProps),
      /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
        children: [
          children,
          " ",
          isExternal && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
            icon: "LinkSimple",
            color: "gray8"
          })
        ]
      })
    );
  }
);
var styles9 = {
  link: (0, import_css92.css)({
    display: "inline-flex",
    alignItems: "center",
    gap: "$1",
    textDecoration: "none",
    fontWeight: "$medium",
    "&:hover": {
      textDecoration: "underline"
    },
    variants: {
      color: import_css92.allColors.reduce(
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
var import_css94 = require("@fuel-ui/css");
var import_react23 = require("react");

// src/components/List/ListItem.tsx
var import_css93 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
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
    const classes = (0, import_css93.cx)("fuel_list-item", className, style());
    const ctx8 = useListContext();
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Text, {
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
var style = (0, import_css93.css)({
  "&::marker": {
    color: "$gray6"
  }
});

// src/components/List/List.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var ctx7 = (0, import_react23.createContext)({});
function useListContext() {
  return (0, import_react23.useContext)(ctx7);
}
var Root15 = (0, import_css94.styled)("ul");
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
    const classes = (0, import_css94.cx)(
      "fuel_list",
      className,
      styles10({
        ...type ? { type } : { type: false }
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ctx7.Provider, {
      value: { icon, iconSize, iconColor, iconAriaLabel },
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Root15, {
        ...props,
        as: type === "ordered" ? "ol" : "ul",
        className: classes,
        children
      })
    });
  }
);
List.Item = ListItem;
var styles10 = (0, import_css94.css)({
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
var import_css97 = require("@fuel-ui/css");
var RadioGroupPrimitive2 = __toESM(require("@radix-ui/react-radio-group"));
var import_react25 = require("react");

// src/components/RadioGroup/RadioGroupItem.tsx
var import_css96 = require("@fuel-ui/css");
var RadioGroupPrimitive = __toESM(require("@radix-ui/react-radio-group"));
var import_react24 = require("react");

// src/components/RadioGroup/styles.ts
var import_css95 = require("@fuel-ui/css");
var root5 = (0, import_css95.css)({
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
var item3 = (0, import_css95.css)({
  all: "unset",
  position: "relative",
  cursor: "pointer",
  backgroundColor: "$inputBg",
  width: "$6",
  height: "$6",
  borderRadius: "100%",
  boxShadow: "$sm",
  [`.${import_css95.darkTheme} &`]: {
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
var indicator2 = (0, import_css95.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
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
    const labelId = label2 ? `label-${(0, import_react24.useId)()}` : void 0;
    const classes = (0, import_css96.cx)("fuel_radio-group--item", className);
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RadioGroupPrimitive.Indicator, {
        className: indicator2({ disabled })
      })
    );
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Flex, {
      gap: "$1",
      children: [
        element2,
        " ",
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Form.Label, {
          id: labelId,
          htmlFor: props.id,
          css: { textSize: "sm", ...labelCSS },
          className: (0, import_css96.cx)(labelClassName),
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
    const classes = (0, import_css97.cx)("fuel_radio_group", className);
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
    const customChildren = import_react25.Children.toArray(children).map((child) => {
      if (child?.type?.id === "RadioGroupItem") {
        return (0, import_react25.cloneElement)(child, {
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
var import_css98 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var Stack = createComponent(
  ({ gap = "$2", direction = "column", className, ...props }) => {
    const classes = (0, import_css98.cx)("fuel_box--stack", className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Flex, {
      ...props,
      gap,
      direction,
      className: classes
    });
  }
);

// src/components/Switch/Switch.tsx
var import_css100 = require("@fuel-ui/css");
var SwitchPrimitive = __toESM(require("@radix-ui/react-switch"));

// src/components/Switch/styles.ts
var import_css99 = require("@fuel-ui/css");
var root6 = (0, import_css99.css)({
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
var thumb = (0, import_css99.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
var Switch = createComponent(
  ({ size: size3 = "md", className, ...props }) => {
    const classes = (0, import_css100.cx)("fuel_switch", className);
    return createStyledElement(
      SwitchPrimitive.Root,
      root6,
      { size: size3 },
      { ...props, className: classes },
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SwitchPrimitive.SwitchThumb, {
        className: thumb({ size: size3 })
      })
    );
  }
);

// src/components/Tabs/Tabs.tsx
var import_css105 = require("@fuel-ui/css");
var TabsPrimitive4 = __toESM(require("@radix-ui/react-tabs"));

// src/components/Tabs/TabsContent.tsx
var import_css102 = require("@fuel-ui/css");
var TabsPrimitive = __toESM(require("@radix-ui/react-tabs"));

// src/components/Tabs/styles.ts
var import_css101 = require("@fuel-ui/css");
var OUTLINE_COLOR = "$gray4";
var BORDER_RADIUS = "$md";
var HIGHLIGHT_COLOR = "$accent11";
var root7 = (0, import_css101.css)({
  display: "flex",
  flexDirection: "column",
  boxShadow: "$sm",
  borderRadius: BORDER_RADIUS,
  background: "$gray1"
});
var list = (0, import_css101.css)({
  flexShrink: 0,
  display: "flex",
  borderBottom: `1px solid $borderColor`
});
var trigger2 = (0, import_css101.css)({
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
var content6 = (0, import_css101.css)({
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
    const classes = (0, import_css102.cx)("fuel_tabs--content", className);
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
var import_css103 = require("@fuel-ui/css");
var TabsPrimitive2 = __toESM(require("@radix-ui/react-tabs"));
var TabsList = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css103.cx)("fuel_tabs--list", className);
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
var import_css104 = require("@fuel-ui/css");
var TabsPrimitive3 = __toESM(require("@radix-ui/react-tabs"));
var TabsTrigger = createComponent(
  ({ children, className, ...props }) => {
    const classes = (0, import_css104.cx)("fuel_tabs--trigger", className);
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
    const classes = (0, import_css105.cx)("fuel_tabs", className);
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
var import_css108 = require("@fuel-ui/css");
var import_react26 = require("react");

// src/components/Tag/TagCloseButton.tsx
var import_css106 = require("@fuel-ui/css");
var import_jsx_runtime = require("react/jsx-runtime");
var TagCloseButton = createComponent(
  ({ className, ...props }) => {
    const classes = (0, import_css106.cx)("fuel_tag--close-btn", className);
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
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
var import_css107 = require("@fuel-ui/css");

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
var tag = (0, import_css107.css)({
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
var import_jsx_runtime = require("react/jsx-runtime");
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Spinner, {
          color: "current",
          size: SPINNER_SIZE[size3 || "md"]
        }),
        children
      ]
    });
  }
  const hasCloseBtn = import_react26.Children.toArray(children).some(
    (child) => child.type?.id?.includes("TagCloseButton")
  );
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, {
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
    const classes = (0, import_css108.cx)(
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
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Box, {
      as,
      ...props,
      className: classes,
      children: customChildren
    });
  }
);
Tag.CloseButton = TagCloseButton;

// src/components/ThemeProvider/ThemeProvider.tsx
var import_react27 = require("@xstate/react");
var import_phosphor_react = require("phosphor-react");
var import_react28 = require("react");

// src/styles/GlobalStyles.tsx
var import_css109 = require("@fuel-ui/css");

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
  (0, import_css109.globalCss)(opinionated)();
  (0, import_css109.globalCss)(customStyles)();
}
function fonts() {
  (0, import_css109.globalCss)(fontStyles)();
}
var GlobalStyles = ({ withFonts }) => {
  withFonts && fonts();
  styles11();
  return null;
};

// src/components/Toast/Toast.tsx
var import_css110 = require("@fuel-ui/css");
var import_react_hot_toast = __toESM(require("react-hot-toast"));
var import_jsx_runtime = require("react/jsx-runtime");
var ToastProvider = createComponent(
  ({ className, position = "bottom-right", ...props }) => {
    const classes = (0, import_css110.cx)("fuel_toast", className, styles12.root());
    return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hot_toast.Toaster, {
      ...props,
      position,
      children: (t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react_hot_toast.ToastBar, {
        toast: t,
        style: { ...DEFAULT_STYLE, ...t.style },
        children: ({ icon, message }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
          className: classes,
          "data-state": t.visible ? "opened" : "closed",
          children: [
            icon,
            message,
            t.type !== "loading" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
              autoFocus: true,
              size: "xs",
              "aria-label": "Close",
              icon: "X",
              color: "gray",
              variant: "link",
              className: styles12.closeButton(),
              onPress: () => import_react_hot_toast.default.dismiss(t.id)
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
  root: (0, import_css110.css)({
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
  closeButton: (0, import_css110.css)({
    alignSelf: "flex-start"
  })
};

// src/components/ThemeProvider/machine.tsx
var import_css111 = require("@fuel-ui/css");
var import_xstate = require("xstate");
var LOCALSTORAGE_KEY = "fuel-theme";
var DEFAULT_THEME = "dark";
function getDefaultSystemTheme() {
  return DEFAULT_THEME;
}
var machine = (0, import_xstate.createMachine)({
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
    setDefaultTheme: (0, import_xstate.assign)({
      theme: (ctx8) => {
        if (typeof window === "undefined")
          return DEFAULT_THEME;
        const theme = localStorage.getItem(LOCALSTORAGE_KEY);
        return ctx8.theme || theme || getDefaultSystemTheme();
      }
    }),
    setTheme: (0, import_xstate.assign)({
      theme: (_, ev) => ev.value
    }),
    toggleTheme: (0, import_xstate.assign)({
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
        theme === "light" ? import_css111.darkTheme.className : import_css111.lightTheme.className
      );
      html.classList.add(
        theme === "dark" ? import_css111.darkTheme.className : import_css111.lightTheme.className
      );
    }
  }
});

// src/components/ThemeProvider/ThemeProvider.tsx
var import_jsx_runtime = require("react/jsx-runtime");
var context = (0, import_react28.createContext)({
  theme: getDefaultSystemTheme(),
  setTheme: () => null,
  toggleTheme: () => null
});
var ThemeProvider = ({
  children,
  withFonts = true,
  theme: defaultTheme
}) => {
  const [state, send] = (0, import_react27.useMachine)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_phosphor_react.IconContext.Provider, {
    value: { size: 16 },
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(context.Provider, {
      value: contextValue,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastProvider, {}),
        /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalStyles, {
          withFonts
        }),
        children
      ]
    })
  });
};
function useFuelTheme() {
  return (0, import_react28.useContext)(context);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
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
});
//# sourceMappingURL=index.js.map