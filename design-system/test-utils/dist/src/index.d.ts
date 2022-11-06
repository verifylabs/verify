import { RenderOptions, render as render$1 } from '@testing-library/react';
export { RenderResult, act, fireEvent, screen, waitFor } from '@testing-library/react';
import { JestAxeConfigureOptions } from 'jest-axe';
import * as _testing_library_react_hooks from '@testing-library/react-hooks';
import * as _testing_library_user_event_dist_types_setup_directApi from '@testing-library/user-event/dist/types/setup/directApi';
import $userEvent from '@testing-library/user-event';

declare function testA11y(ui: React.ReactElement | HTMLElement, options?: RenderOptions & {
    axeOptions?: JestAxeConfigureOptions;
}): Promise<void>;

declare function focus(el: HTMLElement): void;
declare function blur(el?: HTMLElement | null): void;

declare const hooks: {
    render: <TProps, TResult>(callback: (props: TProps) => TResult, options?: _testing_library_react_hooks.RenderHookOptions<TProps> | undefined) => _testing_library_react_hooks.RenderHookResult<TProps, TResult, _testing_library_react_hooks.Renderer<TProps>>;
    act: _testing_library_react_hooks.Act;
};

declare function mockCookieStorage(key: string, value: string | null): void;

declare type Status = 'loaded' | 'error';
declare function mockImage(): {
    simulate(value: Status): void;
    restore(): void;
};
declare namespace mockImage {
    var restore: () => void;
    var DELAY: number;
}

declare function mockLocalStorage(value: string): void;

declare function mockMatchMedia(media: string, matches: boolean): void;

declare const mocks: {
    image: typeof mockImage;
    cookie: typeof mockCookieStorage;
    localStorage: typeof mockLocalStorage;
    matchMedia: typeof mockMatchMedia;
};

declare function press(key: string, element?: Element | null, options?: KeyboardEventInit): Promise<void>;
declare namespace press {
    var Escape: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var Backspace: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var Delete: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var Tab: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var ShiftTab: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var Enter: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var Space: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var ArrowUp: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var ArrowRight: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var ArrowDown: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var ArrowLeft: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var End: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var Home: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var PageUp: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
    var PageDown: (element?: Element | null | undefined, options?: KeyboardEventInit) => Promise<void>;
}

declare type Writeable<T> = {
    -readonly [P in keyof T]: T[P];
};
declare type PatchResult = Omit<Writeable<typeof $userEvent>, 'setup'> & {
    press: typeof press;
    setup: (...args: any[]) => PatchResult;
};
declare const userEvent: {
    press: typeof press;
    type: typeof _testing_library_user_event_dist_types_setup_directApi.type;
    copy: typeof _testing_library_user_event_dist_types_setup_directApi.copy;
    cut: typeof _testing_library_user_event_dist_types_setup_directApi.cut;
    paste: typeof _testing_library_user_event_dist_types_setup_directApi.paste;
    click: typeof _testing_library_user_event_dist_types_setup_directApi.click;
    dblClick: typeof _testing_library_user_event_dist_types_setup_directApi.dblClick;
    clear: typeof _testing_library_user_event_dist_types_setup_directApi.clear;
    deselectOptions: typeof _testing_library_user_event_dist_types_setup_directApi.deselectOptions;
    hover: typeof _testing_library_user_event_dist_types_setup_directApi.hover;
    keyboard: typeof _testing_library_user_event_dist_types_setup_directApi.keyboard;
    pointer: typeof _testing_library_user_event_dist_types_setup_directApi.pointer;
    selectOptions: typeof _testing_library_user_event_dist_types_setup_directApi.selectOptions;
    tripleClick: typeof _testing_library_user_event_dist_types_setup_directApi.tripleClick;
    unhover: typeof _testing_library_user_event_dist_types_setup_directApi.unhover;
    upload: typeof _testing_library_user_event_dist_types_setup_directApi.upload;
    tab: typeof _testing_library_user_event_dist_types_setup_directApi.tab;
    setup: (...args: any[]) => PatchResult;
};

declare function render(ui: React.ReactElement, options?: RenderOptions): ReturnType<typeof render$1> & {
    user: ReturnType<typeof userEvent.setup>;
};

export { blur, focus, hooks, mocks, press, render, testA11y };
