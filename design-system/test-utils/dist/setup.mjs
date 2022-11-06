var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// setup.ts
import failOnConsole from "jest-fail-on-console";
var { getComputedStyle } = window;
window.getComputedStyle = (elt) => getComputedStyle(elt);
global.ResizeObserver = __require("resize-observer-polyfill");
if (typeof window.matchMedia !== "function") {
  Object.defineProperty(window, "matchMedia", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: jest.fn(),
      removeListener: jest.fn(),
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
      dispatchEvent: jest.fn()
    }))
  });
}
failOnConsole({
  shouldFailOnWarn: false,
  silenceMessage: (errorMessage) => {
    if (/Warning: ReactDOM.render is no longer supported in React 18/i.test(
      errorMessage
    )) {
      return true;
    }
    return false;
  }
});
//# sourceMappingURL=setup.mjs.map