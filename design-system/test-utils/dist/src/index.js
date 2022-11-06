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

// src/index.ts
var src_exports = {};
__export(src_exports, {
  RenderResult: () => import_react7.RenderResult,
  act: () => import_react7.act,
  blur: () => blur,
  fireEvent: () => import_react7.fireEvent,
  focus: () => focus,
  hooks: () => hooks,
  mocks: () => mocks,
  press: () => press,
  render: () => render,
  screen: () => import_react7.screen,
  testA11y: () => testA11y,
  waitFor: () => import_react7.waitFor
});
module.exports = __toCommonJS(src_exports);
var import_react7 = require("@testing-library/react");

// src/accessibility.ts
var import_jest_axe = require("jest-axe");
var import_react6 = require("react");

// src/render.tsx
var import_jest_dom = require("@testing-library/jest-dom");
var import_react5 = require("@testing-library/react");

// src/user-event.ts
var import_react4 = require("@testing-library/react");
var import_user_event = __toESM(require("@testing-library/user-event"));

// src/press.ts
var import_react3 = require("@testing-library/react");

// src/focus.ts
var import_react = require("@testing-library/react");

// src/utils/dom.ts
function isElement(el) {
  return el != null && typeof el === "object" && "nodeType" in el && el.nodeType === Node.ELEMENT_NODE;
}
function isHTMLElement(el) {
  if (!isElement(el)) {
    return false;
  }
  const win = el.ownerDocument.defaultView ?? window;
  return el instanceof win.HTMLElement;
}
function getOwnerDocument(node) {
  return isElement(node) ? node.ownerDocument ?? document : document;
}
function canUseDOM() {
  return !!(typeof window !== "undefined" && window.document && window.document.createElement);
}
var isBrowser = canUseDOM();
function getActiveElement(node) {
  const doc = getOwnerDocument(node);
  return doc?.activeElement;
}

// src/utils/tabbable.ts
var hasTabIndex = (element) => element.hasAttribute("tabindex");
var hasNegativeTabIndex = (element) => hasTabIndex(element) && element.tabIndex === -1;
function isDisabled(element) {
  return Boolean(element.getAttribute("disabled")) === true || Boolean(element.getAttribute("aria-disabled")) === true;
}
function isHidden(element) {
  if (element.parentElement && isHidden(element.parentElement))
    return true;
  return element.hidden;
}
function isContentEditable(element) {
  const value = element.getAttribute("contenteditable");
  return value !== "false" && value != null;
}
function isFocusable(element) {
  if (!isHTMLElement(element) || isHidden(element) || isDisabled(element)) {
    return false;
  }
  const { localName } = element;
  const focusableTags = ["input", "select", "textarea", "button"];
  if (focusableTags.indexOf(localName) >= 0)
    return true;
  const others = {
    a: () => element.hasAttribute("href"),
    audio: () => element.hasAttribute("controls"),
    video: () => element.hasAttribute("controls")
  };
  if (localName in others) {
    return others[localName]();
  }
  if (isContentEditable(element))
    return true;
  return hasTabIndex(element);
}
function isTabbable(element) {
  if (!element)
    return false;
  return isHTMLElement(element) && isFocusable(element) && !hasNegativeTabIndex(element);
}

// src/focus.ts
function focus(el) {
  if (getActiveElement(el) === el)
    return;
  if (!isFocusable(el))
    return;
  (0, import_react.act)(() => {
    el.focus();
  });
}
function blur(el) {
  if (el == null)
    el = document.activeElement;
  if (el.tagName === "BODY")
    return;
  if (getActiveElement(el) !== el)
    return;
  (0, import_react.act)(() => {
    if (el && "blur" in el)
      el.blur();
  });
}

// src/utils/act.ts
var import_react2 = require("@testing-library/react");
function queue() {
  return (0, import_react2.act)(() => Promise.resolve());
}
function nextTick() {
  return (0, import_react2.act)(
    () => new Promise((resolve) => requestAnimationFrame(() => resolve()))
  );
}
async function sleep(ms = 16) {
  await (0, import_react2.act)(() => new Promise((resolve) => setTimeout(resolve, ms)));
  await nextTick();
}

// src/utils/dom-query.ts
var focusableElList = [
  "input:not([disabled])",
  "select:not([disabled])",
  "textarea:not([disabled])",
  "embed",
  "iframe",
  "object",
  "a[href]",
  "area[href]",
  "button:not([disabled])",
  "[tabindex]",
  "audio[controls]",
  "video[controls]",
  "*[tabindex]:not([aria-disabled])",
  "*[contenteditable]"
];
var focusableElSelector = focusableElList.join();
var isVisible = (el) => el.offsetWidth > 0 && el.offsetHeight > 0;
function getAllFocusable(container) {
  const focusableEls = Array.from(
    container.querySelectorAll(focusableElSelector)
  );
  focusableEls.unshift(container);
  return focusableEls.filter((el) => isFocusable(el) && isVisible(el));
}
function getNextTabbable(container, fallbackToFocusable) {
  const allFocusable = getAllFocusable(container);
  const index = allFocusable.indexOf(document.activeElement);
  const slice = allFocusable.slice(index + 1);
  return slice.find(isTabbable) || allFocusable.find(isTabbable) || (fallbackToFocusable ? slice[0] : null);
}
function getPreviousTabbable(container, fallbackToFocusable) {
  const allFocusable = getAllFocusable(container).reverse();
  const index = allFocusable.indexOf(document.activeElement);
  const slice = allFocusable.slice(index + 1);
  return slice.find(isTabbable) || allFocusable.find(isTabbable) || (fallbackToFocusable ? slice[0] : null);
}

// src/press.ts
var keydownMap = {
  Tab: (_, { shiftKey }) => {
    const body = document.body;
    const nextElement = shiftKey ? getPreviousTabbable(body) : getNextTabbable(body);
    if (nextElement) {
      focus(nextElement);
    }
  }
};
var keyupMap = {};
async function press(key, element, options = {}) {
  if (element == null) {
    element = document.activeElement || document.body;
  }
  if (!element)
    return;
  if (document.activeElement !== element) {
    import_react3.fireEvent.focus(element);
  }
  const downFired = import_react3.fireEvent.keyDown(element, { key, ...options });
  await queue();
  if (downFired && key in keydownMap && !options.metaKey) {
    keydownMap[key]?.(element, options);
  }
  await sleep();
  const upFired = import_react3.fireEvent.keyUp(element, { key, ...options });
  await queue();
  if (upFired && key in keyupMap && !options.metaKey) {
    keyupMap[key]?.(element, options);
  }
  await sleep();
}
function createPress(key, defaultOptions = {}) {
  return (element, options = {}) => press(key, element, { ...defaultOptions, ...options });
}
press.Escape = createPress("Escape");
press.Backspace = createPress("Backspace");
press.Delete = createPress("Delete");
press.Tab = createPress("Tab");
press.ShiftTab = createPress("Tab", { shiftKey: true });
press.Enter = createPress("Enter");
press.Space = createPress(" ");
press.ArrowUp = createPress("ArrowUp");
press.ArrowRight = createPress("ArrowRight");
press.ArrowDown = createPress("ArrowDown");
press.ArrowLeft = createPress("ArrowLeft");
press.End = createPress("End");
press.Home = createPress("Home");
press.PageUp = createPress("PageUp");
press.PageDown = createPress("PageDown");

// src/user-event.ts
function patch($value) {
  const result = Object.entries($value).reduce((acc, [key, value]) => {
    if (key === "setup") {
      acc[key] = (...args) => ({ ...patch(value(...args)), press });
    } else {
      acc[key] = async (...args) => {
        (0, import_react4.act)(() => {
          value(...args);
        });
        await sleep();
      };
    }
    return acc;
  }, {});
  return result;
}
var userEvent = { ...patch(import_user_event.default), press };

// src/render.tsx
function render(ui, options = {}) {
  const user = userEvent.setup();
  const result = (0, import_react5.render)(ui, options);
  return { user, ...result };
}

// src/accessibility.ts
async function testA11y(ui, options = {}) {
  const { axeOptions, ...rest } = options;
  const container = (0, import_react6.isValidElement)(ui) ? render(ui, rest).container : ui;
  const results = await (0, import_jest_axe.axe)(container, axeOptions);
  expect(results).toHaveNoViolations();
}
expect.extend(import_jest_axe.toHaveNoViolations);

// src/hooks.ts
var import_react_hooks = require("@testing-library/react-hooks");
var hooks = {
  render: import_react_hooks.renderHook,
  act: import_react_hooks.act
};

// src/mocks/cookie.ts
function mockCookieStorage(key, value) {
  Object.defineProperty(document, "cookie", {
    writable: true,
    value: value ? `${key}=${value}` : ""
  });
}

// src/mocks/image.ts
var originalImage = window.Image;
function mockImage() {
  let status;
  window.Image = class Image {
    constructor() {
      this.onload = () => {
        console.log("called");
      };
      this.onerror = () => {
      };
      this.src = "";
      this.alt = "";
      setTimeout(() => {
        if (status === "error") {
          this.onerror();
        } else {
          this.onload();
        }
      }, mockImage.DELAY);
      return this;
    }
    hasAttribute(name) {
      return name in this;
    }
    getAttribute(name) {
      return name in this ? this[name] : null;
    }
  };
  return {
    simulate(value) {
      status = value;
    },
    restore() {
      window.Image = originalImage;
    }
  };
}
mockImage.restore = () => {
  window.Image = originalImage;
};
mockImage.DELAY = 100;

// src/mocks/localstorage.ts
function mockLocalStorage(value) {
  Object.defineProperty(window, "localStorage", {
    writable: true,
    value: {
      getItem: () => value,
      setItem: jest.fn()
    }
  });
}

// src/mocks/match-media.ts
function mockMatchMedia(media, matches) {
  const desc = {
    writable: true,
    configurable: true,
    enumerable: true,
    value: () => ({
      matches,
      media,
      addEventListener: jest.fn(),
      addListener: jest.fn(),
      removeEventListener: jest.fn(),
      removeListener: jest.fn(),
      dispatchEvent: jest.fn()
    })
  };
  Object.defineProperty(window, "matchMedia", desc);
}

// src/mocks/index.ts
var mocks = {
  image: mockImage,
  cookie: mockCookieStorage,
  localStorage: mockLocalStorage,
  matchMedia: mockMatchMedia
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  RenderResult,
  act,
  blur,
  fireEvent,
  focus,
  hooks,
  mocks,
  press,
  render,
  screen,
  testA11y,
  waitFor
});
//# sourceMappingURL=index.js.map