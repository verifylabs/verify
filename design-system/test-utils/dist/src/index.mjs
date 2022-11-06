// src/index.ts
import {
  act as act5,
  fireEvent as fireEvent2,
  screen,
  waitFor,
  RenderResult
} from "@testing-library/react";

// src/accessibility.ts
import { axe, toHaveNoViolations } from "jest-axe";
import { isValidElement } from "react";

// src/render.tsx
import "@testing-library/jest-dom";
import { render as rtlRender } from "@testing-library/react";

// src/user-event.ts
import { act as act3 } from "@testing-library/react";
import $userEvent from "@testing-library/user-event";

// src/press.ts
import { fireEvent } from "@testing-library/react";

// src/focus.ts
import { act } from "@testing-library/react";

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
  act(() => {
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
  act(() => {
    if (el && "blur" in el)
      el.blur();
  });
}

// src/utils/act.ts
import { act as act2 } from "@testing-library/react";
function queue() {
  return act2(() => Promise.resolve());
}
function nextTick() {
  return act2(
    () => new Promise((resolve) => requestAnimationFrame(() => resolve()))
  );
}
async function sleep(ms = 16) {
  await act2(() => new Promise((resolve) => setTimeout(resolve, ms)));
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
    fireEvent.focus(element);
  }
  const downFired = fireEvent.keyDown(element, { key, ...options });
  await queue();
  if (downFired && key in keydownMap && !options.metaKey) {
    keydownMap[key]?.(element, options);
  }
  await sleep();
  const upFired = fireEvent.keyUp(element, { key, ...options });
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
        act3(() => {
          value(...args);
        });
        await sleep();
      };
    }
    return acc;
  }, {});
  return result;
}
var userEvent = { ...patch($userEvent), press };

// src/render.tsx
function render(ui, options = {}) {
  const user = userEvent.setup();
  const result = rtlRender(ui, options);
  return { user, ...result };
}

// src/accessibility.ts
async function testA11y(ui, options = {}) {
  const { axeOptions, ...rest } = options;
  const container = isValidElement(ui) ? render(ui, rest).container : ui;
  const results = await axe(container, axeOptions);
  expect(results).toHaveNoViolations();
}
expect.extend(toHaveNoViolations);

// src/hooks.ts
import { renderHook, act as act4 } from "@testing-library/react-hooks";
var hooks = {
  render: renderHook,
  act: act4
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
export {
  RenderResult,
  act5 as act,
  blur,
  fireEvent2 as fireEvent,
  focus,
  hooks,
  mocks,
  press,
  render,
  screen,
  testA11y,
  waitFor
};
//# sourceMappingURL=index.mjs.map