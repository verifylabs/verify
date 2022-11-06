import * as _fuel_ui_css from '@fuel-ui/css';
import { ThemeUtilsCSS, Colors, ColorKeys, utils, lightTheme } from '@fuel-ui/css';
import * as react from 'react';
import { ReactNode, MutableRefObject, Key, FC } from 'react';
import * as AC from '@radix-ui/react-accordion';
import * as _stitches_react_types_util from '@stitches/react/types/util';
import * as _stitches_react_types_theme from '@stitches/react/types/theme';
import * as _stitches_react_types_css from '@stitches/react/types/css';
import * as react_aria from 'react-aria';
import { AriaButtonProps, OverlayTriggerProps, AriaOverlayProps, AriaMenuOptions, FocusScope } from 'react-aria';
import * as PhosphorIcons from 'phosphor-react';
import * as _stitches_react_types_styled_component from '@stitches/react/types/styled-component';
import * as _stitches_react_types_css_util from '@stitches/react/types/css-util';
import * as _fuel_ui_css_src_utils from '@fuel-ui/css/src/utils';
import * as _stitches_react_types_config from '@stitches/react/types/config';
import * as RAlertDialog from '@radix-ui/react-alert-dialog';
import * as AspectRatioPrimitive from '@radix-ui/react-aspect-ratio';
import * as RAvatar from '@radix-ui/react-avatar';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import * as RDialog from '@radix-ui/react-dialog';
import { DOMAttributes, FocusableElement, Node } from '@react-types/shared';
import * as react_stately from 'react-stately';
import { OverlayTriggerState, TreeState, TreeProps, ItemProps, MenuTriggerState, MenuTriggerProps } from 'react-stately';
import { AnimationProps } from 'framer-motion';
import * as RPopover from '@radix-ui/react-popover';
import * as Label from '@radix-ui/react-label';
import { NumericFormatProps } from 'react-number-format';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import * as SwitchPrimitive from '@radix-ui/react-switch';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { ToasterProps } from 'react-hot-toast';
export { default as toast } from 'react-hot-toast';
import * as RTooltip from '@radix-ui/react-tooltip';

declare type Children = ReactNode;
declare type BaseProps$1<O> = {
    as?: string | Element;
    css?: ThemeUtilsCSS;
    className?: string;
    children?: Children;
    [index: `data-${string}`]: unknown;
} & O;
/**
 * TODO: add annotations
 */
declare type HTMLProps = {
    a: React.AnchorHTMLAttributes<HTMLAnchorElement>;
    abbr: React.HTMLAttributes<HTMLElement>;
    address: React.HTMLAttributes<HTMLElement>;
    area: React.AreaHTMLAttributes<HTMLAreaElement>;
    article: React.HTMLAttributes<HTMLElement>;
    aside: React.HTMLAttributes<HTMLElement>;
    audio: React.AudioHTMLAttributes<HTMLAudioElement>;
    b: React.HTMLAttributes<HTMLElement>;
    base: React.BaseHTMLAttributes<HTMLBaseElement>;
    bdi: React.HTMLAttributes<HTMLElement>;
    bdo: React.HTMLAttributes<HTMLElement>;
    big: React.HTMLAttributes<HTMLElement>;
    blockquote: React.BlockquoteHTMLAttributes<HTMLQuoteElement>;
    body: React.HTMLAttributes<HTMLBodyElement>;
    br: React.HTMLAttributes<HTMLBRElement>;
    button: React.ButtonHTMLAttributes<HTMLButtonElement>;
    canvas: React.CanvasHTMLAttributes<HTMLCanvasElement>;
    caption: React.HTMLAttributes<HTMLElement>;
    cite: React.HTMLAttributes<HTMLElement>;
    code: React.HTMLAttributes<HTMLElement>;
    col: React.ColHTMLAttributes<HTMLTableColElement>;
    colgroup: React.ColgroupHTMLAttributes<HTMLTableColElement>;
    data: React.DataHTMLAttributes<HTMLDataElement>;
    datalist: React.HTMLAttributes<HTMLDataListElement>;
    dd: React.HTMLAttributes<HTMLElement>;
    del: React.DelHTMLAttributes<HTMLModElement>;
    details: React.DetailsHTMLAttributes<HTMLDetailsElement>;
    dfn: React.HTMLAttributes<HTMLElement>;
    dialog: React.DialogHTMLAttributes<HTMLDialogElement>;
    div: React.HTMLAttributes<HTMLDivElement>;
    dl: React.HTMLAttributes<HTMLDListElement>;
    dt: React.HTMLAttributes<HTMLElement>;
    em: React.HTMLAttributes<HTMLElement>;
    embed: React.EmbedHTMLAttributes<HTMLEmbedElement>;
    fieldset: React.FieldsetHTMLAttributes<HTMLFieldSetElement>;
    figcaption: React.HTMLAttributes<HTMLElement>;
    figure: React.HTMLAttributes<HTMLElement>;
    footer: React.HTMLAttributes<HTMLElement>;
    form: React.FormHTMLAttributes<HTMLFormElement>;
    h1: React.HTMLAttributes<HTMLHeadingElement>;
    h2: React.HTMLAttributes<HTMLHeadingElement>;
    h3: React.HTMLAttributes<HTMLHeadingElement>;
    h4: React.HTMLAttributes<HTMLHeadingElement>;
    h5: React.HTMLAttributes<HTMLHeadingElement>;
    h6: React.HTMLAttributes<HTMLHeadingElement>;
    head: React.HTMLAttributes<HTMLHeadElement>;
    header: React.HTMLAttributes<HTMLElement>;
    hgroup: React.HTMLAttributes<HTMLElement>;
    hr: React.HTMLAttributes<HTMLHRElement>;
    html: React.HtmlHTMLAttributes<HTMLHtmlElement>;
    i: React.HTMLAttributes<HTMLElement>;
    iframe: React.IframeHTMLAttributes<HTMLIFrameElement>;
    img: React.ImgHTMLAttributes<HTMLImageElement>;
    input: React.InputHTMLAttributes<HTMLInputElement>;
    ins: React.InsHTMLAttributes<HTMLModElement>;
    kbd: React.HTMLAttributes<HTMLElement>;
    keygen: React.KeygenHTMLAttributes<HTMLElement>;
    label: React.LabelHTMLAttributes<HTMLLabelElement>;
    legend: React.HTMLAttributes<HTMLLegendElement>;
    li: React.LiHTMLAttributes<HTMLLIElement>;
    link: React.LinkHTMLAttributes<HTMLLinkElement>;
    main: React.HTMLAttributes<HTMLElement>;
    map: React.MapHTMLAttributes<HTMLMapElement>;
    mark: React.HTMLAttributes<HTMLElement>;
    menu: React.MenuHTMLAttributes<HTMLElement>;
    menuitem: React.HTMLAttributes<HTMLElement>;
    meta: React.MetaHTMLAttributes<HTMLMetaElement>;
    meter: React.MeterHTMLAttributes<HTMLMeterElement>;
    nav: React.HTMLAttributes<HTMLElement>;
    noindex: React.HTMLAttributes<HTMLElement>;
    noscript: React.HTMLAttributes<HTMLElement>;
    object: React.ObjectHTMLAttributes<HTMLObjectElement>;
    ol: React.OlHTMLAttributes<HTMLOListElement>;
    optgroup: React.OptgroupHTMLAttributes<HTMLOptGroupElement>;
    option: React.OptionHTMLAttributes<HTMLOptionElement>;
    output: React.OutputHTMLAttributes<HTMLOutputElement>;
    p: React.HTMLAttributes<HTMLParagraphElement>;
    param: React.ParamHTMLAttributes<HTMLParamElement>;
    picture: React.HTMLAttributes<HTMLElement>;
    pre: React.HTMLAttributes<HTMLPreElement>;
    progress: React.ProgressHTMLAttributes<HTMLProgressElement>;
    q: React.QuoteHTMLAttributes<HTMLQuoteElement>;
    rp: React.HTMLAttributes<HTMLElement>;
    rt: React.HTMLAttributes<HTMLElement>;
    ruby: React.HTMLAttributes<HTMLElement>;
    s: React.HTMLAttributes<HTMLElement>;
    samp: React.HTMLAttributes<HTMLElement>;
    slot: React.SlotHTMLAttributes<HTMLSlotElement>;
    script: React.ScriptHTMLAttributes<HTMLScriptElement>;
    section: React.HTMLAttributes<HTMLElement>;
    select: React.SelectHTMLAttributes<HTMLSelectElement>;
    small: React.HTMLAttributes<HTMLElement>;
    source: React.SourceHTMLAttributes<HTMLSourceElement>;
    span: React.HTMLAttributes<HTMLSpanElement>;
    strong: React.HTMLAttributes<HTMLElement>;
    style: React.StyleHTMLAttributes<HTMLStyleElement>;
    sub: React.HTMLAttributes<HTMLElement>;
    summary: React.HTMLAttributes<HTMLElement>;
    sup: React.HTMLAttributes<HTMLElement>;
    table: React.TableHTMLAttributes<HTMLTableElement>;
    template: React.HTMLAttributes<HTMLTemplateElement>;
    tbody: React.HTMLAttributes<HTMLTableSectionElement>;
    td: React.TdHTMLAttributes<HTMLTableDataCellElement>;
    textarea: React.TextareaHTMLAttributes<HTMLTextAreaElement>;
    tfoot: React.HTMLAttributes<HTMLTableSectionElement>;
    th: React.ThHTMLAttributes<HTMLTableHeaderCellElement>;
    thead: React.HTMLAttributes<HTMLTableSectionElement>;
    time: React.TimeHTMLAttributes<HTMLTimeElement>;
    title: React.HTMLAttributes<HTMLTitleElement>;
    tr: React.HTMLAttributes<HTMLTableRowElement>;
    track: React.TrackHTMLAttributes<HTMLTrackElement>;
    u: React.HTMLAttributes<HTMLElement>;
    ul: React.HTMLAttributes<HTMLUListElement>;
    video: React.VideoHTMLAttributes<HTMLVideoElement>;
    wbr: React.HTMLAttributes<HTMLElement>;
    webview: React.WebViewHTMLAttributes<HTMLWebViewElement>;
};

declare const AccordionContent: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & AC.AccordionContentProps & {
    className?: string | undefined;
} & react.RefAttributes<any>>;

declare const AccordionItem: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & AC.AccordionItemProps & {
    className?: string | undefined;
} & react.RefAttributes<any>>;

declare const AccordionTrigger: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & AC.AccordionTriggerProps & {
    className?: string | undefined;
} & react.RefAttributes<any>>;

declare type AccordionBaseProps = AC.AccordionSingleProps | AC.AccordionMultipleProps;
declare type AccordionProps = Omit<AccordionBaseProps, 'value'> & {
    value?: string;
    className?: string;
};
declare type ObjProps$q = {
    Item: typeof AccordionItem;
    Trigger: typeof AccordionTrigger;
    Content: typeof AccordionContent;
};
declare const Accordion: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & Omit<AccordionBaseProps, "value"> & {
    value?: string | undefined;
    className?: string | undefined;
} & react.RefAttributes<any>> & ObjProps$q;
declare type AccordionContentProps = AC.AccordionContentProps & {
    className?: string;
};

declare type BoxProps = HTMLProps['div'];
declare const Box: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<any>>;

declare type FlexProps = HTMLProps['div'] & {
    /**
     * Shorthand for `alignItems` style prop
     * @type SystemProps["alignItems"]
     */
    align?: ThemeUtilsCSS['alignItems'];
    /**
     * Shorthand for `flexBasis` style prop
     * @type SystemProps["flexBasis"]
     */
    basis?: ThemeUtilsCSS['flexBasis'];
    /**
     * Shorthand for `flexDirection` style prop
     * @type SystemProps["flexDirection"]
     */
    direction?: ThemeUtilsCSS['flexDirection'];
    /**
     * Shorthand for `gap` style prop
     * @type SystemProps["gap"]
     */
    gap?: ThemeUtilsCSS['gap'];
    /**
     * Shorthand for `flexGrow` style prop
     * @type SystemProps["flexGrow"]
     */
    grow?: ThemeUtilsCSS['flexGrow'];
    /**
     * Shorthand for `justifyContent` style prop
     * @type SystemProps["justifyContent"]
     */
    justify?: ThemeUtilsCSS['justifyContent'];
    /**
     * Shorthand for `flexShrink` style prop
     * @type SystemProps["flexShrink"]
     */
    shrink?: ThemeUtilsCSS['flexShrink'];
    /**
     * Shorthand for `flexWrap` style prop
     * @type SystemProps["flexWrap"]
     */
    wrap?: ThemeUtilsCSS['flexWrap'];
};
declare const Flex: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    /**
     * Shorthand for `alignItems` style prop
     * @type SystemProps["alignItems"]
     */
    align?: ThemeUtilsCSS['alignItems'];
    /**
     * Shorthand for `flexBasis` style prop
     * @type SystemProps["flexBasis"]
     */
    basis?: ThemeUtilsCSS['flexBasis'];
    /**
     * Shorthand for `flexDirection` style prop
     * @type SystemProps["flexDirection"]
     */
    direction?: ThemeUtilsCSS['flexDirection'];
    /**
     * Shorthand for `gap` style prop
     * @type SystemProps["gap"]
     */
    gap?: ThemeUtilsCSS['gap'];
    /**
     * Shorthand for `flexGrow` style prop
     * @type SystemProps["flexGrow"]
     */
    grow?: ThemeUtilsCSS['flexGrow'];
    /**
     * Shorthand for `justifyContent` style prop
     * @type SystemProps["justifyContent"]
     */
    justify?: ThemeUtilsCSS['justifyContent'];
    /**
     * Shorthand for `flexShrink` style prop
     * @type SystemProps["flexShrink"]
     */
    shrink?: ThemeUtilsCSS['flexShrink'];
    /**
     * Shorthand for `flexWrap` style prop
     * @type SystemProps["flexWrap"]
     */
    wrap?: ThemeUtilsCSS['flexWrap'];
} & react.RefAttributes<any>>;

declare type ObjProps$p = {
    id: string;
};
declare const AlertActions: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & react.RefAttributes<any>> & ObjProps$p;

declare type ToOmit = 'Icon' | 'IconProps' | 'IconWeight' | 'IconContext';
declare type Icons = keyof Omit<typeof PhosphorIcons, ToOmit>;
declare type IconProps = FlexProps & PhosphorIcons.IconProps & {
    icon: Icons | ReactNode;
    wrapperClassName?: string;
    color?: Colors;
    inline?: boolean;
    label?: string;
};
declare type ObjProps$o = {
    is: (icon: Icons) => Icons;
    iconList: Icons[];
    id: string;
};
declare const Icon: react.ForwardRefExoticComponent<Omit<BaseProps$1<IconProps>, "children"> & react.RefAttributes<any>> & ObjProps$o;

declare function createIcon(icon: string | ReactNode, iconAriaLabel?: string, iconSize?: number, color?: Colors): false | 0 | JSX.Element | null | undefined;
declare function getIconSize(size: ButtonSizes, iconSize?: number): number;
declare type ButtonVariants = 'solid' | 'outlined' | 'ghost' | 'link';
declare type ButtonSizes = 'xs' | 'sm' | 'md' | 'lg';
declare type ButtonBaseProps = {
    size?: ButtonSizes;
    color?: ColorKeys;
    variant?: ButtonVariants;
    iconSize?: number;
    leftIcon?: IconProps['icon'];
    leftIconAriaLabel?: string;
    rightIcon?: IconProps['icon'];
    rightIconAriaLabel?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
};
declare type ButtonProps = Omit<HTMLProps['button'], 'onClick'> & AriaButtonProps<'button'> & ButtonBaseProps & {
    justIcon?: boolean;
    isLink?: boolean;
    /**
     * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
     * You're able to use just one or another, don't use onClick and onPress together
     */
    onClick?: HTMLProps['button']['onClick'];
};
declare type ObjProps$n = {
    id: string;
};
declare const SPINNER_SIZE: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
};
declare const Button: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & Omit<react.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & AriaButtonProps<"button"> & ButtonBaseProps & {
    justIcon?: boolean | undefined;
    isLink?: boolean | undefined;
    /**
     * @deprecated Use onPress instead. onPress support Enter and Space keyboard.
     * You're able to use just one or another, don't use onClick and onPress together
     */
    onClick?: HTMLProps['button']['onClick'];
} & react.RefAttributes<any>> & ObjProps$n;

declare type ObjProps$m = {
    id: string;
};
declare const AlertButton: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & Omit<react.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & react_aria.AriaButtonProps<"button"> & ButtonBaseProps & {
    justIcon?: boolean | undefined;
    isLink?: boolean | undefined;
    onClick?: react.MouseEventHandler<HTMLButtonElement> | undefined;
} & react.RefAttributes<any>> & ObjProps$m;

declare const AlertDescription: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<any>>;

declare const AlertTitle: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & react.RefAttributes<any>>;

declare type AlertStatus = 'info' | 'warning' | 'success' | 'error';
declare type ContextProps = {
    status?: AlertStatus;
};
declare function useAlertProps(): ContextProps;
declare type AlertProps = BoxProps & {
    direction?: 'row' | 'column';
    status?: AlertStatus;
};
declare type ObjProps$l = {
    id: string;
    Title: typeof AlertTitle;
    Description: typeof AlertDescription;
    Actions: typeof AlertActions;
    Button: typeof AlertButton;
};
declare const Alert: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    direction?: "column" | "row" | undefined;
    status?: AlertStatus | undefined;
} & react.RefAttributes<any>> & ObjProps$l;

declare const AlertDialogAction: _stitches_react_types_styled_component.StyledComponent<react.ForwardRefExoticComponent<RAlertDialog.AlertDialogActionProps & react.RefAttributes<HTMLButtonElement>>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;

declare const AlertDialogCancel: _stitches_react_types_styled_component.StyledComponent<react.ForwardRefExoticComponent<RAlertDialog.AlertDialogCancelProps & react.RefAttributes<HTMLButtonElement>>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;

declare const AlertDialogContent: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RAlertDialog.AlertDialogContentProps & {
    overlayClassName?: string | undefined;
} & react.RefAttributes<any>>;

declare const AlertDialogDescription: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RAlertDialog.AlertDialogDescriptionProps & react.RefAttributes<any>>;

declare const AlertDialogFooter: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLElement> & {
    align?: "end" | "start" | undefined;
} & react.RefAttributes<any>>;

declare const AlertDialogHeading: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RAlertDialog.AlertDialogTitleProps & react.RefAttributes<any>>;

declare const AlertDialogTrigger: _stitches_react_types_styled_component.StyledComponent<react.ForwardRefExoticComponent<RAlertDialog.AlertDialogTriggerProps & react.RefAttributes<HTMLButtonElement>>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;

declare const AlertDialogRoot: _stitches_react_types_styled_component.StyledComponent<react.FC<RAlertDialog.AlertDialogProps>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;
declare type AlertDialogComponent = typeof AlertDialogRoot & {
    Content: typeof AlertDialogContent;
    Trigger: typeof AlertDialogTrigger;
    Heading: typeof AlertDialogHeading;
    Description: typeof AlertDialogDescription;
    Footer: typeof AlertDialogFooter;
    Cancel: typeof AlertDialogCancel;
    Action: typeof AlertDialogAction;
};
declare const AlertDialog: AlertDialogComponent;

declare type AspectRatioProps = AspectRatioPrimitive.AspectRatioProps;
declare const AspectRatio: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & AspectRatioPrimitive.AspectRatioProps & react.RefAttributes<any>>;

declare type AvatarGeneratedProps = BoxProps & {
    hash: string;
    fallback?: string;
    size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
    background?: 'fuel' | 'random' | string;
};
declare const AvatarGenerated: react.ForwardRefExoticComponent<Omit<BaseProps$1<AvatarGeneratedProps>, "children"> & react.RefAttributes<any>>;

declare type AvatarProps = RAvatar.AvatarImageProps & {
    name: string;
    fallback?: string;
    size?: 'xsm' | 'sm' | 'md' | 'lg' | 'xl' | '2xl';
};
declare type ObjProps$k = {
    Generated: typeof AvatarGenerated;
};
declare const Avatar: react.ForwardRefExoticComponent<Omit<BaseProps$1<AvatarProps>, "children"> & react.RefAttributes<any>> & ObjProps$k;

declare type BadgeVariants = 'solid' | 'outlined' | 'ghost';
declare type BadgeProps = HTMLProps['span'] & {
    color?: ColorKeys;
    variant?: BadgeVariants;
};
declare const Badge: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLSpanElement> & {
    color?: ColorKeys | undefined;
    variant?: BadgeVariants | undefined;
} & react.RefAttributes<any>>;

declare type BoxCenteredProps = FlexProps & {
    /**
     * max-width: '100vh
     */
    minWS?: boolean;
    /**
     * max-height: '100vh
     */
    minHS?: boolean;
};
declare const BoxCentered: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & {
    /**
     * max-width: '100vh
     */
    minWS?: boolean | undefined;
    /**
     * max-height: '100vh
     */
    minHS?: boolean | undefined;
} & react.RefAttributes<any>>;

declare type ButtonGroupProps = Omit<ButtonProps, 'className'>;
declare const ButtonGroup: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & ButtonGroupProps & react.RefAttributes<any>>;

declare type ButtonLinkProps = ButtonProps & HTMLProps['a'] & {
    isExternal?: boolean;
};
declare const ButtonLink: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & Omit<react.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & react_aria.AriaButtonProps<"button"> & ButtonBaseProps & {
    justIcon?: boolean | undefined;
    isLink?: boolean | undefined;
    onClick?: react.MouseEventHandler<HTMLButtonElement> | undefined;
} & react.AnchorHTMLAttributes<HTMLAnchorElement> & {
    isExternal?: boolean | undefined;
} & react.RefAttributes<any>>;

declare const CardBody: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<any>>;

declare const CardFooter: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & react.RefAttributes<any>>;

declare const CardHeader: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & react.RefAttributes<any>>;

declare type CardProps = FlexProps;
declare type ObjProps$j = {
    id: string;
    Header: typeof CardHeader;
    Body: typeof CardBody;
    Footer: typeof CardFooter;
};
declare const Card: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & react.RefAttributes<any>> & ObjProps$j;

declare const CardListItem: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & {
    isActive?: boolean | undefined;
    rightEl?: ReactNode;
} & react.RefAttributes<any>>;

declare type Context = {
    isClickable?: boolean;
    autoFocus?: boolean;
    isFocused?: boolean;
};
declare function useCardListContext(): Context;
declare type CardListProps = StackProps & Omit<Context, 'isFocused'>;
declare type ObjProps$i = {
    id: string;
    Item: typeof CardListItem;
};
declare const CardList: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & Omit<Context, "isFocused"> & react.RefAttributes<any>> & ObjProps$i;

declare type CheckboxProps = CheckboxPrimitive.CheckboxProps & {
    isDisabled?: boolean;
    isReadOnly?: boolean;
};
declare type ObjProps$h = {
    id: string;
};
declare const Checkbox: react.ForwardRefExoticComponent<(Omit<BaseProps$1<CheckboxProps>, "as"> | Omit<BaseProps$1<CheckboxProps>, "children">) & react.RefAttributes<any>> & ObjProps$h;

declare type ContainerSizes = 'sm' | 'md' | 'lg' | 'xl';
declare type ContainerProps = HTMLProps['div'] & {
    size?: ContainerSizes;
};
declare const Container: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    size?: ContainerSizes | undefined;
} & react.RefAttributes<any>>;

declare type CopyableProps = Omit<FlexProps, 'children'> & {
    value: string;
    children: ReactNode;
    tooltipMessage?: string;
};
declare const Copyable: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & Omit<FlexProps, "children"> & {
    value: string;
    children: ReactNode;
    tooltipMessage?: string | undefined;
} & react.RefAttributes<any>>;

declare const DialogClose: _stitches_react_types_styled_component.StyledComponent<react.ForwardRefExoticComponent<RDialog.DialogCloseProps & react.RefAttributes<HTMLButtonElement>>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;

declare const DialogContent: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RDialog.DialogContentProps & {
    overlayClassName?: string | undefined;
    closeClassName?: string | undefined;
    hideCloseButton?: boolean | undefined;
} & react.RefAttributes<any>>;

declare const DialogDescription: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RDialog.DialogTitleProps & react.RefAttributes<any>>;

declare const DialogFooter: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLElement> & {
    align?: "end" | "start" | undefined;
} & react.RefAttributes<any>>;

declare const DialogHeading: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RDialog.DialogTitleProps & react.RefAttributes<any>>;

declare const DialogTrigger: _stitches_react_types_styled_component.StyledComponent<react.ForwardRefExoticComponent<RDialog.DialogTriggerProps & react.RefAttributes<HTMLButtonElement>>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;

declare const DialogRoot: _stitches_react_types_styled_component.StyledComponent<react.FC<RDialog.DialogProps>, {}, {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, _stitches_react_types_css_util.CSS<{
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
}, {
    colors: {
        gray1: string;
        gray2: string;
        gray3: string;
        gray4: string;
        gray5: string;
        gray6: string;
        gray7: string;
        gray8: string;
        gray9: string;
        gray10: string;
        gray11: string;
        gray12: string;
        accent1: string;
        accent2: string;
        accent3: string;
        accent4: string;
        accent5: string;
        accent6: string;
        accent7: string;
        accent8: string;
        accent9: string;
        accent10: string;
        accent11: string;
        accent12: string;
        bodyColor: string;
        textColor: string;
        borderColor: string;
        borderHover: string;
        inputBg: string;
        inputColor: string;
        inputBorder: string;
        inputPlaceholderColor: string;
        bronze1: string;
        bronze2: string;
        bronze3: string;
        bronze4: string;
        bronze5: string;
        bronze6: string;
        bronze7: string;
        bronze8: string;
        bronze9: string;
        bronze10: string;
        bronze11: string;
        bronze12: string;
        gold1: string;
        gold2: string;
        gold3: string;
        gold4: string;
        gold5: string;
        gold6: string;
        gold7: string;
        gold8: string;
        gold9: string;
        gold10: string;
        gold11: string;
        gold12: string;
        amber1: string;
        amber2: string;
        amber3: string;
        amber4: string;
        amber5: string;
        amber6: string;
        amber7: string;
        amber8: string;
        amber9: string;
        amber10: string;
        amber11: string;
        amber12: string;
        yellow1: string;
        yellow2: string;
        yellow3: string;
        yellow4: string;
        yellow5: string;
        yellow6: string;
        yellow7: string;
        yellow8: string;
        yellow9: string;
        yellow10: string;
        yellow11: string;
        yellow12: string;
        lime1: string;
        lime2: string;
        lime3: string;
        lime4: string;
        lime5: string;
        lime6: string;
        lime7: string;
        lime8: string;
        lime9: string;
        lime10: string;
        lime11: string;
        lime12: string;
        mint1: string;
        mint2: string;
        mint3: string;
        mint4: string;
        mint5: string;
        mint6: string;
        mint7: string;
        mint8: string;
        mint9: string;
        mint10: string;
        mint11: string;
        mint12: string;
        sky1: string;
        sky2: string;
        sky3: string;
        sky4: string;
        sky5: string;
        sky6: string;
        sky7: string;
        sky8: string;
        sky9: string;
        sky10: string;
        sky11: string;
        sky12: string;
        brown1: string;
        brown2: string;
        brown3: string;
        brown4: string;
        brown5: string;
        brown6: string;
        brown7: string;
        brown8: string;
        brown9: string;
        brown10: string;
        brown11: string;
        brown12: string;
        orange1: string;
        orange2: string;
        orange3: string;
        orange4: string;
        orange5: string;
        orange6: string;
        orange7: string;
        orange8: string;
        orange9: string;
        orange10: string;
        orange11: string;
        orange12: string;
        grass1: string;
        grass2: string;
        grass3: string;
        grass4: string;
        grass5: string;
        grass6: string;
        grass7: string;
        grass8: string;
        grass9: string;
        grass10: string;
        grass11: string;
        grass12: string;
        green1: string;
        green2: string;
        green3: string;
        green4: string;
        green5: string;
        green6: string;
        green7: string;
        green8: string;
        green9: string;
        green10: string;
        green11: string;
        green12: string;
        teal1: string;
        teal2: string;
        teal3: string;
        teal4: string;
        teal5: string;
        teal6: string;
        teal7: string;
        teal8: string;
        teal9: string;
        teal10: string;
        teal11: string;
        teal12: string;
        cyan1: string;
        cyan2: string;
        cyan3: string;
        cyan4: string;
        cyan5: string;
        cyan6: string;
        cyan7: string;
        cyan8: string;
        cyan9: string;
        cyan10: string;
        cyan11: string;
        cyan12: string;
        blue1: string;
        blue2: string;
        blue3: string;
        blue4: string;
        blue5: string;
        blue6: string;
        blue7: string;
        blue8: string;
        blue9: string;
        blue10: string;
        blue11: string;
        blue12: string;
        indigo1: string;
        indigo2: string;
        indigo3: string;
        indigo4: string;
        indigo5: string;
        indigo6: string;
        indigo7: string;
        indigo8: string;
        indigo9: string;
        indigo10: string;
        indigo11: string;
        indigo12: string;
        violet1: string;
        violet2: string;
        violet3: string;
        violet4: string;
        violet5: string;
        violet6: string;
        violet7: string;
        violet8: string;
        violet9: string;
        violet10: string;
        violet11: string;
        violet12: string;
        purple1: string;
        purple2: string;
        purple3: string;
        purple4: string;
        purple5: string;
        purple6: string;
        purple7: string;
        purple8: string;
        purple9: string;
        purple10: string;
        purple11: string;
        purple12: string;
        plum1: string;
        plum2: string;
        plum3: string;
        plum4: string;
        plum5: string;
        plum6: string;
        plum7: string;
        plum8: string;
        plum9: string;
        plum10: string;
        plum11: string;
        plum12: string;
        pink1: string;
        pink2: string;
        pink3: string;
        pink4: string;
        pink5: string;
        pink6: string;
        pink7: string;
        pink8: string;
        pink9: string;
        pink10: string;
        pink11: string;
        pink12: string;
        crimson1: string;
        crimson2: string;
        crimson3: string;
        crimson4: string;
        crimson5: string;
        crimson6: string;
        crimson7: string;
        crimson8: string;
        crimson9: string;
        crimson10: string;
        crimson11: string;
        crimson12: string;
        red1: string;
        red2: string;
        red3: string;
        red4: string;
        red5: string;
        red6: string;
        red7: string;
        red8: string;
        red9: string;
        red10: string;
        red11: string;
        red12: string;
        tomato1: string;
        tomato2: string;
        tomato3: string;
        tomato4: string;
        tomato5: string;
        tomato6: string;
        tomato7: string;
        tomato8: string;
        tomato9: string;
        tomato10: string;
        tomato11: string;
        tomato12: string;
        whiteA1: string;
        whiteA2: string;
        whiteA3: string;
        whiteA4: string;
        whiteA5: string;
        whiteA6: string;
        whiteA7: string;
        whiteA8: string;
        whiteA9: string;
        whiteA10: string;
        whiteA11: string;
        whiteA12: string;
        blackA1: string;
        blackA2: string;
        blackA3: string;
        blackA4: string;
        blackA5: string;
        blackA6: string;
        blackA7: string;
        blackA8: string;
        blackA9: string;
        blackA10: string;
        blackA11: string;
        blackA12: string;
        inherit: string;
        current: string;
        transparent: string;
        brand: string;
    };
    space: {
        0: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    sizes: {
        auto: string;
        none: string;
        0: string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        full: string;
        min: string;
        max: string;
        fit: string;
        screenW: string;
        screenH: string;
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
        11: string;
        12: string;
        14: string;
        16: string;
        20: string;
        24: string;
        28: string;
        32: string;
        36: string;
        40: string;
        44: string;
        48: string;
        52: string;
        56: string;
        60: string;
        64: string;
        72: string;
        80: string;
        96: string;
    };
    fonts: {
        sans: string;
        display: string;
        heading: string;
    };
    fontSizes: {
        xs: string;
        sm: string;
        base: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
    };
    fontWeights: {
        thin: string;
        extralight: string;
        light: string;
        normal: string;
        medium: string;
        semibold: string;
        bold: string;
        extrabold: string;
        black: string;
    };
    letterSpacings: {
        tighter: string;
        tight: string;
        normal: string;
        wide: string;
        wider: string;
        widest: string;
    };
    lineHeights: {
        none: string;
        tight: string;
        snug: string;
        normal: string;
        relaxed: string;
        loose: string;
        3: string;
        4: string;
        5: string;
        6: string;
        7: string;
        8: string;
        9: string;
        10: string;
    };
    radii: {
        none: string;
        sm: string;
        DEFAULT: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        full: string;
    };
    shadows: {
        sm: string;
        base: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        inner: string;
        none: string;
    };
    zIndices: {
        auto: string;
        0: string;
        10: string;
        20: string;
        30: string;
        40: string;
        50: string;
    };
}, _stitches_react_types_config.DefaultThemeMap, {
    readonly bg: (value: string) => {};
    readonly linearGradient: (value: string) => {
        backgroundImage: string;
    };
    readonly br: (value: string) => {};
    readonly btlr: (value: string) => {};
    readonly btrr: (value: string) => {};
    readonly bbrr: (value: string) => {};
    readonly bblr: (value: string) => {};
    readonly is: (list: ("centered" | "noAppearance" | "truncate")[]) => {};
    readonly w: (value: string) => {};
    readonly minW: (value: string) => {};
    readonly maxW: (value: string) => {};
    readonly h: (value: string) => {};
    readonly minH: (value: string) => {};
    readonly maxH: (value: string) => {};
    readonly boxSize: (value: string) => {};
    readonly spaceX: (value: string) => {
        '& > * + *': {
            marginLeft: string;
        };
    };
    readonly spaceY: (value: string) => {
        '& > * + *': {
            marginTop: string;
        };
    };
    readonly m: (value: string) => {};
    readonly mt: (value: string) => {};
    readonly mr: (value: string) => {};
    readonly mb: (value: string) => {};
    readonly ml: (value: string) => {};
    readonly mx: (value: string) => {};
    readonly my: (value: string) => {};
    readonly p: (value: string) => {};
    readonly pt: (value: string) => {};
    readonly pr: (value: string) => {};
    readonly pb: (value: string) => {};
    readonly pl: (value: string) => {};
    readonly px: (value: string) => {};
    readonly py: (value: string) => {};
    readonly textSize: {
        (value: _fuel_ui_css_src_utils.TextSizes): {
            fontSize: string;
            lineHeight: string;
        };
        __keys: _fuel_ui_css_src_utils.TextSizes[];
    };
}>>;
declare type DialogComponent = typeof DialogRoot & {
    Content: typeof DialogContent;
    Trigger: typeof DialogTrigger;
    Heading: typeof DialogHeading;
    Description: typeof DialogDescription;
    Footer: typeof DialogFooter;
    Close: typeof DialogClose;
};
declare const Dialog: DialogComponent;

declare const DrawerBody: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & react.RefAttributes<any>>;

declare type DrawerCloseProps = Omit<IconButtonProps, 'aria-label' | 'icon'> & {
    icon?: IconButtonProps['icon'];
    ['aria-label']?: IconButtonProps['aria-label'];
};
declare const DrawerClose: react.ForwardRefExoticComponent<Omit<BaseProps$1<DrawerCloseProps>, "children"> & react.RefAttributes<"button">>;

declare type DrawerContentProps = BoxProps & {
    transition?: AnimationProps['transition'];
};
declare type ObjProps$g = {
    id: string;
};
declare const DrawerContent: react.ForwardRefExoticComponent<Omit<BaseProps$1<DrawerContentProps>, "as"> & react.RefAttributes<"div">> & ObjProps$g;

declare const DrawerTrigger: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & Omit<react.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & react_aria.AriaButtonProps<"button"> & ButtonBaseProps & {
    justIcon?: boolean | undefined;
    isLink?: boolean | undefined;
    onClick?: react.MouseEventHandler<HTMLButtonElement> | undefined;
} & {
    asChild?: boolean | undefined;
} & react.RefAttributes<"button">>;

declare type DrawerSide = 'right' | 'left';
declare type DrawerSize = 'sm' | 'md' | 'lg';
declare type DrawerContext = {
    ref: React.MutableRefObject<HTMLDivElement | null>;
    state?: OverlayTriggerState;
    overlayProps: DOMAttributes<FocusableElement>;
    underlayProps: DOMAttributes<FocusableElement>;
    side: DrawerSide;
    size: DrawerSize | string | number;
    shouldCloseOnClickAway?: boolean;
};
declare function useDrawer(): DrawerContext;
declare type DrawerProps = OverlayTriggerProps & Omit<AriaOverlayProps, 'shouldCloseOnInteractOutside'> & {
    containerRef?: MutableRefObject<any>;
    side?: DrawerSide;
    size: DrawerSize | string | number;
    shouldCloseOnClickAway?: boolean;
};
declare type ObjProps$f = {
    Body: typeof DrawerBody;
    CloseButton: typeof DrawerClose;
    Content: typeof DrawerContent;
    Trigger: typeof DrawerTrigger;
};
declare const Drawer: react.ForwardRefExoticComponent<(Omit<BaseProps$1<DrawerProps>, "css"> | Omit<BaseProps$1<DrawerProps>, "as"> | Omit<BaseProps$1<DrawerProps>, "className">) & react.RefAttributes<"div">> & ObjProps$f;

declare type PopoverProps = RPopover.PopoverProps & {
    content: ReactNode;
    side?: RPopover.PopperContentProps['side'];
    sideOffset?: RPopover.PopoverContentProps['sideOffset'];
    align?: RPopover.PopperContentProps['align'];
    alignOffset?: RPopover.PopoverContentProps['sideOffset'];
    showCloseButton?: boolean;
    className?: string;
    arrowProps?: RPopover.PopoverArrowProps;
    arrowClassName?: string;
    closeButtonClassName?: string;
    contentProps?: Omit<RPopover.PopoverContentProps, 'sideOffset' | 'alignOffset'>;
};
declare const Popover: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & RPopover.PopoverProps & {
    content: ReactNode;
    side?: RPopover.PopperContentProps['side'];
    sideOffset?: RPopover.PopoverContentProps['sideOffset'];
    align?: RPopover.PopperContentProps['align'];
    alignOffset?: RPopover.PopoverContentProps['sideOffset'];
    showCloseButton?: boolean | undefined;
    className?: string | undefined;
    arrowProps?: RPopover.PopoverArrowProps | undefined;
    arrowClassName?: string | undefined;
    closeButtonClassName?: string | undefined;
    contentProps?: Omit<RPopover.PopoverContentProps, "sideOffset" | "alignOffset"> | undefined;
} & react.RefAttributes<any>>;

declare type MenuItemProps$1 = HTMLProps['li'] & {
    item: Node<ReactNode>;
    state: TreeState<ReactNode>;
    onAction?: (key: Key) => void;
    onPress?: ButtonProps['onPress'];
    css?: ThemeUtilsCSS;
    className?: string;
    autoFocus?: boolean;
};

declare type MenuProps = HTMLProps['ul'] & TreeProps<any> & AriaMenuOptions<unknown> & {
    onAction?: (key: Key) => void;
    autoFocus?: boolean;
};
declare type MenuItemProps = ItemProps<MenuItemProps$1>;
declare type ObjProps$e = {
    Item: FC<MenuItemProps>;
};
declare const Menu: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLUListElement> & TreeProps<any> & AriaMenuOptions<unknown> & {
    onAction?: ((key: Key) => void) | undefined;
    autoFocus?: boolean | undefined;
} & react.RefAttributes<any>> & ObjProps$e;

declare type ObjProps$d = {
    id: string;
};
declare const DropdownMenu: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLUListElement> & react_stately.TreeProps<any> & react_aria.AriaMenuOptions<unknown> & {
    onAction?: ((key: react.Key) => void) | undefined;
    autoFocus?: boolean | undefined;
} & react.RefAttributes<any>> & ObjProps$d;

declare const DropdownMenuItem: typeof Menu.Item;

declare type ObjProps$c = {
    id: string;
};
declare const DropdownTrigger: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & Omit<react.ButtonHTMLAttributes<HTMLButtonElement>, "onClick"> & react_aria.AriaButtonProps<"button"> & ButtonBaseProps & {
    justIcon?: boolean | undefined;
    isLink?: boolean | undefined;
    onClick?: react.MouseEventHandler<HTMLButtonElement> | undefined;
} & {
    asChild?: boolean | undefined;
} & react.RefAttributes<"button">> & ObjProps$c;

declare type DropdownContext = {
    triggerRef: React.MutableRefObject<HTMLButtonElement | null>;
    state: MenuTriggerState;
    menuTriggerProps: AriaButtonProps<'button'>;
    menuProps: AriaMenuOptions<unknown>;
};
declare function useDropdown(): DropdownContext;
declare type ObjProps$b = {
    Trigger: typeof DropdownTrigger;
    Menu: typeof DropdownMenu;
    MenuItem: typeof DropdownMenuItem;
};
declare type DropdownProps = Omit<MenuTriggerProps, 'direction'> & {
    popoverProps?: {
        side?: PopoverProps['side'];
        sideOffset?: PopoverProps['sideOffset'];
        align?: PopoverProps['align'];
        alignOffset?: PopoverProps['sideOffset'];
    };
};
declare const Dropdown: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & Omit<MenuTriggerProps, "direction"> & {
    popoverProps?: {
        side?: PopoverProps['side'];
        sideOffset?: PopoverProps['sideOffset'];
        align?: PopoverProps['align'];
        alignOffset?: PopoverProps['sideOffset'];
    } | undefined;
} & react.RefAttributes<any>> & ObjProps$b;

declare type FocusScopeProps = {
    children: ReactNode;
    /**
     * Whether to contain focus inside the scope, so users cannot
     * move focus outside, for example in a modal dialog.
     */
    contain?: boolean;
    /**
     * Whether to restore focus back to the element that was focused
     * when the focus scope mounted, after the focus scope unmounts.
     */
    restoreFocus?: boolean;
    /** Whether to auto focus the first focusable element in the focus scope on mount. */
    autoFocus?: boolean;
};

declare const Focus: {
    Scope: typeof FocusScope;
    ArrowNavigator: react.ForwardRefExoticComponent<{
        [index: `data-${string}`]: unknown;
        as?: string | Element | undefined;
        css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
        className?: string | undefined;
        children?: react.ReactNode;
    } & FocusScopeProps & {
        children: react.ReactNode;
    } & react.RefAttributes<any>>;
};

declare type FormControlProps = {
    isRequired?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
};

declare type TextProps = HTMLProps['p'] & {
    fontSize?: utils.TextSizes;
    color?: Colors;
    iconSize?: number;
    iconColor?: Colors;
    leftIcon?: IconProps['icon'];
    rightIcon?: IconProps['icon'];
    leftIconAriaLabel?: string;
    rightIconAriaLabel?: string;
};
declare const Text: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLParagraphElement> & {
    fontSize?: utils.TextSizes | undefined;
    color?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
    iconSize?: number | undefined;
    iconColor?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
    leftIcon?: IconProps['icon'];
    rightIcon?: IconProps['icon'];
    leftIconAriaLabel?: string | undefined;
    rightIconAriaLabel?: string | undefined;
} & react.RefAttributes<any>>;

declare type FormErrorMessageProps = TextProps;

declare type FormHelperTextProps = TextProps;

declare type FormLabelProps = Label.LabelProps;

declare const Form: {
    Control: react.ForwardRefExoticComponent<{
        [index: `data-${string}`]: unknown;
        as?: string | Element | undefined;
        css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
        className?: string | undefined;
        children?: react.ReactNode;
    } & FormControlProps & react.RefAttributes<any>>;
    Label: react.ForwardRefExoticComponent<{
        [index: `data-${string}`]: unknown;
        as?: string | Element | undefined;
        css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
        className?: string | undefined;
        children?: react.ReactNode;
    } & Label.LabelProps & react.RefAttributes<any>> & {
        id: string;
    };
    HelperText: react.ForwardRefExoticComponent<{
        [index: `data-${string}`]: unknown;
        as?: string | Element | undefined;
        css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
        className?: string | undefined;
        children?: react.ReactNode;
    } & react.HTMLAttributes<HTMLParagraphElement> & {
        fontSize?: _fuel_ui_css_src_utils.TextSizes | undefined;
        color?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
        iconSize?: number | undefined;
        iconColor?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
        leftIcon?: react.ReactNode;
        rightIcon?: react.ReactNode;
        leftIconAriaLabel?: string | undefined;
        rightIconAriaLabel?: string | undefined;
    } & react.RefAttributes<any>> & {
        id: string;
    };
    ErrorMessage: react.ForwardRefExoticComponent<{
        [index: `data-${string}`]: unknown;
        as?: string | Element | undefined;
        css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
        className?: string | undefined;
        children?: react.ReactNode;
    } & react.HTMLAttributes<HTMLParagraphElement> & {
        fontSize?: _fuel_ui_css_src_utils.TextSizes | undefined;
        color?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
        iconSize?: number | undefined;
        iconColor?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
        leftIcon?: react.ReactNode;
        rightIcon?: react.ReactNode;
        leftIconAriaLabel?: string | undefined;
        rightIconAriaLabel?: string | undefined;
    } & react.RefAttributes<any>> & {
        id: string;
    };
};

declare type FuelLogoProps = {
    size?: number;
};
declare const FuelLogo: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & FuelLogoProps & react.RefAttributes<any>>;

declare const GridItem: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    /**
     * Shorthand prop for `gridArea`
     * @type ThemeUtilsCSS["gridArea"];
     */
    area?: ThemeUtilsCSS['gridArea'];
    /**
     * The number of columns the grid item should `span`.
     * @type number | "auto
     */
    colSpan?: number | "auto" | undefined;
    /**
     * The column number the grid item should start.
     * @type number | "auto
     */
    colStart?: number | "auto" | undefined;
    /**
     * @type number | "auto
     */
    colEnd?: number | "auto" | undefined;
    /**
     * @type number | "auto
     */
    rowStart?: number | "auto" | undefined;
    /**
     * @type number | "auto
     */
    rowEnd?: number | "auto" | undefined;
    /**
     * @type number | "auto
     */
    rowSpan?: number | "auto" | undefined;
} & react.RefAttributes<any>>;

declare type GridProps = HTMLProps['div'] & {
    /**
     * Shorthand prop for `gridAutoColumns`
     * @type ThemeUtilsCSS["gridAutoColumns"];
     */
    autoColumns?: ThemeUtilsCSS['gridAutoColumns'];
    /**
     * Shorthand prop for `gridAutoRows`
     * @type ThemeUtilsCSS["gridAutoRows"];
     */
    autoRows?: ThemeUtilsCSS['gridAutoRows'];
    /**
     * Shorthand prop for `gridColumn`
     * @type ThemeUtilsCSS["gridColumn"];
     */
    column?: ThemeUtilsCSS['gridColumn'];
    /**
     * Shorthand prop for `gridAutoFlow`
     * @type ThemeUtilsCSS["gridAutoFlow"];
     */
    direction?: ThemeUtilsCSS['gridAutoFlow'];
    /**
     * Shorthand prop for `gap`
     * @type ThemeUtilsCSS["gap"];
     */
    gap?: ThemeUtilsCSS['gap'];
    /**
     * Shorthand prop for `gridRow`
     * @type ThemeUtilsCSS["gridRow"];
     */
    row?: ThemeUtilsCSS['gridRow'];
    /**
     * Shorthand prop for `gridTemplateAreas`
     * @type ThemeUtilsCSS["gridTemplateAreas"];
     */
    templateAreas?: ThemeUtilsCSS['gridTemplateAreas'];
    /**
     * Shorthand prop for `gridTemplateColumns`
     * @type ThemeUtilsCSS["gridTemplateColumns"];
     */
    templateColumns?: ThemeUtilsCSS['gridTemplateColumns'];
    /**
     * Shorthand prop for `gridTemplateRows`
     * @type ThemeUtilsCSS["gridTemplateRows"];
     */
    templateRows?: ThemeUtilsCSS['gridTemplateRows'];
};
declare type ObjProps$a = {
    Item: typeof GridItem;
};
declare const Grid: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    /**
     * Shorthand prop for `gridAutoColumns`
     * @type ThemeUtilsCSS["gridAutoColumns"];
     */
    autoColumns?: ThemeUtilsCSS['gridAutoColumns'];
    /**
     * Shorthand prop for `gridAutoRows`
     * @type ThemeUtilsCSS["gridAutoRows"];
     */
    autoRows?: ThemeUtilsCSS['gridAutoRows'];
    /**
     * Shorthand prop for `gridColumn`
     * @type ThemeUtilsCSS["gridColumn"];
     */
    column?: ThemeUtilsCSS['gridColumn'];
    /**
     * Shorthand prop for `gridAutoFlow`
     * @type ThemeUtilsCSS["gridAutoFlow"];
     */
    direction?: ThemeUtilsCSS['gridAutoFlow'];
    /**
     * Shorthand prop for `gap`
     * @type ThemeUtilsCSS["gap"];
     */
    gap?: ThemeUtilsCSS['gap'];
    /**
     * Shorthand prop for `gridRow`
     * @type ThemeUtilsCSS["gridRow"];
     */
    row?: ThemeUtilsCSS['gridRow'];
    /**
     * Shorthand prop for `gridTemplateAreas`
     * @type ThemeUtilsCSS["gridTemplateAreas"];
     */
    templateAreas?: ThemeUtilsCSS['gridTemplateAreas'];
    /**
     * Shorthand prop for `gridTemplateColumns`
     * @type ThemeUtilsCSS["gridTemplateColumns"];
     */
    templateColumns?: ThemeUtilsCSS['gridTemplateColumns'];
    /**
     * Shorthand prop for `gridTemplateRows`
     * @type ThemeUtilsCSS["gridTemplateRows"];
     */
    templateRows?: ThemeUtilsCSS['gridTemplateRows'];
} & react.RefAttributes<any>> & ObjProps$a;

declare type HeadingProps = HTMLProps['h1'] & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
    fontSize?: utils.TextSizes;
    fontColor?: Colors;
    iconSize?: number;
    leftIcon?: IconProps['icon'];
    rightIcon?: IconProps['icon'];
    leftIconAriaLabel?: string;
    rightIconAriaLabel?: string;
};
declare const Heading: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLHeadingElement> & {
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | undefined;
    fontSize?: utils.TextSizes | undefined;
    fontColor?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
    iconSize?: number | undefined;
    leftIcon?: IconProps['icon'];
    rightIcon?: IconProps['icon'];
    leftIconAriaLabel?: string | undefined;
    rightIconAriaLabel?: string | undefined;
} & react.RefAttributes<any>>;

declare type HelperIconProps = FlexProps & {
    message: ReactNode;
};
declare const HelperIcon: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & {
    message: ReactNode;
} & react.RefAttributes<any>>;

declare type OmitProps = 'leftIcon' | 'rightIcon' | 'justIcon';
declare type IconButtonProps = Omit<ButtonProps, OmitProps> & {
    'aria-label': string;
    size?: 'xs' | 'sm' | 'md';
    icon: IconProps['icon'];
    tooltip?: ReactNode;
};
declare const IconButton: react.ForwardRefExoticComponent<(Omit<BaseProps$1<IconButtonProps>, "justIcon"> | Omit<BaseProps$1<IconButtonProps>, "leftIcon"> | Omit<BaseProps$1<IconButtonProps>, "rightIcon">) & react.RefAttributes<any>>;

declare type ImageProps = HTMLProps['img'];
declare const Image: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.ImgHTMLAttributes<HTMLImageElement> & react.RefAttributes<any>>;

declare type ObjProps$9 = {
    id?: string;
};
declare const InputAddonLeft: react.ForwardRefExoticComponent<(Omit<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
}, "left"> | Omit<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
}, "right">) & react.RefAttributes<any>> & ObjProps$9;
declare const InputAddonRight: react.ForwardRefExoticComponent<(Omit<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
}, "left"> | Omit<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
}, "right">) & react.RefAttributes<any>> & ObjProps$9;

declare type InputElementProps = {
    element?: ReactNode;
};
declare type InputElementObjProps = {
    id?: string;
};
declare const InputElementLeft: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & InputElementProps & react.RefAttributes<any>> & InputElementObjProps;
declare const InputElementRight: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & InputElementProps & react.RefAttributes<any>> & InputElementObjProps;

declare type HTMLInputProps$1 = HTMLProps['input'];
declare type InputFieldProps = Omit<HTMLInputProps$1, 'size'> & {
    htmlSize?: HTMLInputProps$1['size'];
};
declare type ObjProps$8 = {
    id: string;
};
declare const InputField: react.ForwardRefExoticComponent<(Omit<BaseProps$1<InputFieldProps>, "as"> | Omit<BaseProps$1<InputFieldProps>, "children">) & react.RefAttributes<any>> & ObjProps$8;

declare type HTMLInputProps = HTMLProps['input'];
declare type InputNumberProps = Omit<HTMLInputProps, 'size'> & NumericFormatProps<Omit<InputFieldProps, 'onBlur'>> & {
    htmlSize?: HTMLInputProps['size'];
};
declare type ObjProps$7 = {
    id: string;
};
declare const InputNumber: react.ForwardRefExoticComponent<(Omit<BaseProps$1<InputNumberProps>, "as"> | Omit<BaseProps$1<InputNumberProps>, "children">) & react.RefAttributes<any>> & ObjProps$7;

declare type InputSizes = 'sm' | 'md' | 'lg';
declare type InputProps = {
    size?: InputSizes;
    isRequired?: boolean;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    isFullWidth?: boolean;
    describedBy?: string;
};
declare type ObjProps$6 = {
    id: string;
    AddonLeft: typeof InputAddonLeft;
    AddonRight: typeof InputAddonRight;
    ElementLeft: typeof InputElementLeft;
    ElementRight: typeof InputElementRight;
    Field: typeof InputField;
    Number: typeof InputNumber;
};
declare function useInputProps(): InputProps;
declare const Input: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & InputProps & react.RefAttributes<any>> & ObjProps$6;

declare type InputPasswordProps = InputProps & InputFieldProps;
declare const InputPassword: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & InputProps & Omit<react.InputHTMLAttributes<HTMLInputElement>, "size"> & {
    htmlSize?: number | undefined;
} & react.RefAttributes<any>>;

declare type LinkProps = HTMLProps['a'] & {
    isExternal?: boolean;
    color?: Colors;
};
declare const Link: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.AnchorHTMLAttributes<HTMLAnchorElement> & {
    isExternal?: boolean | undefined;
    color?: "inherit" | "transparent" | "gray1" | "gray2" | "gray3" | "gray4" | "gray5" | "gray6" | "gray7" | "gray8" | "gray9" | "gray10" | "gray11" | "gray12" | "accent1" | "accent2" | "accent3" | "accent4" | "accent5" | "accent6" | "accent7" | "accent8" | "accent9" | "accent10" | "accent11" | "accent12" | "bodyColor" | "textColor" | "borderColor" | "borderHover" | "inputBg" | "inputColor" | "inputBorder" | "inputPlaceholderColor" | "bronze1" | "bronze2" | "bronze3" | "bronze4" | "bronze5" | "bronze6" | "bronze7" | "bronze8" | "bronze9" | "bronze10" | "bronze11" | "bronze12" | "gold1" | "gold2" | "gold3" | "gold4" | "gold5" | "gold6" | "gold7" | "gold8" | "gold9" | "gold10" | "gold11" | "gold12" | "amber1" | "amber2" | "amber3" | "amber4" | "amber5" | "amber6" | "amber7" | "amber8" | "amber9" | "amber10" | "amber11" | "amber12" | "yellow1" | "yellow2" | "yellow3" | "yellow4" | "yellow5" | "yellow6" | "yellow7" | "yellow8" | "yellow9" | "yellow10" | "yellow11" | "yellow12" | "lime1" | "lime2" | "lime3" | "lime4" | "lime5" | "lime6" | "lime7" | "lime8" | "lime9" | "lime10" | "lime11" | "lime12" | "mint1" | "mint2" | "mint3" | "mint4" | "mint5" | "mint6" | "mint7" | "mint8" | "mint9" | "mint10" | "mint11" | "mint12" | "sky1" | "sky2" | "sky3" | "sky4" | "sky5" | "sky6" | "sky7" | "sky8" | "sky9" | "sky10" | "sky11" | "sky12" | "brown1" | "brown2" | "brown3" | "brown4" | "brown5" | "brown6" | "brown7" | "brown8" | "brown9" | "brown10" | "brown11" | "brown12" | "orange1" | "orange2" | "orange3" | "orange4" | "orange5" | "orange6" | "orange7" | "orange8" | "orange9" | "orange10" | "orange11" | "orange12" | "grass1" | "grass2" | "grass3" | "grass4" | "grass5" | "grass6" | "grass7" | "grass8" | "grass9" | "grass10" | "grass11" | "grass12" | "green1" | "green2" | "green3" | "green4" | "green5" | "green6" | "green7" | "green8" | "green9" | "green10" | "green11" | "green12" | "teal1" | "teal2" | "teal3" | "teal4" | "teal5" | "teal6" | "teal7" | "teal8" | "teal9" | "teal10" | "teal11" | "teal12" | "cyan1" | "cyan2" | "cyan3" | "cyan4" | "cyan5" | "cyan6" | "cyan7" | "cyan8" | "cyan9" | "cyan10" | "cyan11" | "cyan12" | "blue1" | "blue2" | "blue3" | "blue4" | "blue5" | "blue6" | "blue7" | "blue8" | "blue9" | "blue10" | "blue11" | "blue12" | "indigo1" | "indigo2" | "indigo3" | "indigo4" | "indigo5" | "indigo6" | "indigo7" | "indigo8" | "indigo9" | "indigo10" | "indigo11" | "indigo12" | "violet1" | "violet2" | "violet3" | "violet4" | "violet5" | "violet6" | "violet7" | "violet8" | "violet9" | "violet10" | "violet11" | "violet12" | "purple1" | "purple2" | "purple3" | "purple4" | "purple5" | "purple6" | "purple7" | "purple8" | "purple9" | "purple10" | "purple11" | "purple12" | "plum1" | "plum2" | "plum3" | "plum4" | "plum5" | "plum6" | "plum7" | "plum8" | "plum9" | "plum10" | "plum11" | "plum12" | "pink1" | "pink2" | "pink3" | "pink4" | "pink5" | "pink6" | "pink7" | "pink8" | "pink9" | "pink10" | "pink11" | "pink12" | "crimson1" | "crimson2" | "crimson3" | "crimson4" | "crimson5" | "crimson6" | "crimson7" | "crimson8" | "crimson9" | "crimson10" | "crimson11" | "crimson12" | "red1" | "red2" | "red3" | "red4" | "red5" | "red6" | "red7" | "red8" | "red9" | "red10" | "red11" | "red12" | "tomato1" | "tomato2" | "tomato3" | "tomato4" | "tomato5" | "tomato6" | "tomato7" | "tomato8" | "tomato9" | "tomato10" | "tomato11" | "tomato12" | "whiteA1" | "whiteA2" | "whiteA3" | "whiteA4" | "whiteA5" | "whiteA6" | "whiteA7" | "whiteA8" | "whiteA9" | "whiteA10" | "whiteA11" | "whiteA12" | "blackA1" | "blackA2" | "blackA3" | "blackA4" | "blackA5" | "blackA6" | "blackA7" | "blackA8" | "blackA9" | "blackA10" | "blackA11" | "blackA12" | "current" | "brand" | undefined;
} & react.RefAttributes<any>>;

declare const ListItem: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.LiHTMLAttributes<HTMLLIElement> & ListContext & react.RefAttributes<any>>;

declare type ListContext = {
    icon?: IconProps['icon'];
    iconColor?: Colors;
    iconSize?: number;
    iconAriaLabel?: string;
};
declare function useListContext(): ListContext;
declare type BaseProps = HTMLProps['ul'] | HTMLProps['ol'];
declare type ListProps = BaseProps & ListContext & {
    type?: 'ordered' | 'unordered';
};
declare type ObjProps$5 = {
    Item: typeof ListItem;
};
declare const List: react.ForwardRefExoticComponent<BaseProps$1<ListProps> & react.RefAttributes<any>> & ObjProps$5;

declare type RadioGroupItemProps = RadioGroupPrimitive.RadioGroupItemProps & {
    label: string;
    isDisabled?: boolean;
    isReadOnly?: boolean;
    labelClassName?: string;
    labelCSS?: ThemeUtilsCSS;
};
declare type ObjProps$4 = {
    id: string;
};
declare const RadioGroupItem: react.ForwardRefExoticComponent<(Omit<BaseProps$1<RadioGroupItemProps>, "as"> | Omit<BaseProps$1<RadioGroupItemProps>, "children">) & react.RefAttributes<any>> & ObjProps$4;

declare type RadioGroupProps = RadioGroupPrimitive.RadioGroupProps & {
    gap?: ThemeUtilsCSS['gap'];
    direction?: 'row' | 'column';
    isDisabled?: boolean;
    isReadOnly?: boolean;
};
declare type ObjProps$3 = {
    id: string;
    Item: typeof RadioGroupItem;
};
declare const RadioGroup: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & RadioGroupPrimitive.RadioGroupProps & {
    gap?: ThemeUtilsCSS['gap'];
    direction?: "column" | "row" | undefined;
    isDisabled?: boolean | undefined;
    isReadOnly?: boolean | undefined;
} & react.RefAttributes<any>> & ObjProps$3;

declare type SpinnerProps = {
    size?: number;
    color?: Colors | ColorKeys | string;
};
declare const Spinner: react.ForwardRefExoticComponent<(Omit<BaseProps$1<SpinnerProps>, "as"> | Omit<BaseProps$1<SpinnerProps>, "children">) & react.RefAttributes<any>>;

declare type StackProps = FlexProps;
declare const Stack: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & {
    align?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.AlignItems | undefined;
    basis?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$auto" | "$none" | "$40" | "$xs" | "$sm" | "$lg" | "$xl" | "$2xl" | "$3xl" | "$4xl" | "$5xl" | "$6xl" | "$7xl" | "$md" | "$full" | "$min" | "$max" | "$fit" | "$screenW" | "$screenH" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.FlexBasis | undefined;
    direction?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexDirection | undefined;
    gap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | "$0" | "$1" | "$2" | "$3" | "$4" | "$5" | "$6" | "$7" | "$8" | "$9" | "$10" | "$11" | "$12" | "$14" | "$16" | "$20" | "$40" | "$24" | "$28" | "$32" | "$36" | "$44" | "$48" | "$52" | "$56" | "$60" | "$64" | "$72" | "$80" | "$96" | _stitches_react_types_css.Property.Gap | undefined;
    grow?: _stitches_react_types_css.OnlyStringNumeric | _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | undefined;
    justify?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.JustifyContent | undefined;
    shrink?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.OnlyNumber | undefined;
    wrap?: _stitches_react_types_css.Globals | _stitches_react_types_theme.ScaleValue | _stitches_react_types_util.Index | _stitches_react_types_css.Property.FlexWrap | undefined;
} & react.RefAttributes<any>>;

declare type SwitchProps = SwitchPrimitive.SwitchProps & {
    size?: 'sm' | 'md';
};
declare const Switch: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & SwitchPrimitive.SwitchProps & {
    size?: "sm" | "md" | undefined;
} & react.RefAttributes<any>>;

declare const TabsContent: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & TabsPrimitive.TabsContentProps & react.RefAttributes<any>>;

declare const TabsList: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & TabsPrimitive.TabsListProps & react.RefAttributes<any>>;

declare const TabsTrigger: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & TabsPrimitive.TabsTriggerProps & react.RefAttributes<any>>;

declare type TabsProps = TabsPrimitive.TabsProps;
declare type ObjProps$2 = {
    id: string;
    List: typeof TabsList;
    Trigger: typeof TabsTrigger;
    Content: typeof TabsContent;
};
declare const Tabs: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & TabsPrimitive.TabsProps & react.RefAttributes<any>> & ObjProps$2;

declare type TagCloseButtonsProp = Omit<IconButtonProps, 'icon' | 'aria-label'>;
declare type ObjProps$1 = {
    id: string;
};
declare const TagCloseButton: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & TagCloseButtonsProp & react.RefAttributes<any>> & ObjProps$1;

declare type TagVariants = 'solid' | 'outlined' | 'ghost';
declare type TagSizes = 'xs' | 'sm' | 'md';
declare type TagProps = HTMLProps['div'] & Omit<ButtonBaseProps, 'iconAriaLabel'> & {
    size?: TagSizes;
    variant?: TagVariants;
};
declare type ObjProps = {
    CloseButton: typeof TagCloseButton;
};
declare const Tag: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & react.HTMLAttributes<HTMLDivElement> & Omit<ButtonBaseProps, "iconAriaLabel"> & {
    size?: TagSizes | undefined;
    variant?: TagVariants | undefined;
} & react.RefAttributes<any>> & ObjProps;

declare type FuelTheme = 'light' | 'dark' | typeof lightTheme;

declare type ThemeProviderContext = {
    theme: FuelTheme;
    setTheme: (theme: FuelTheme) => void;
    toggleTheme: () => void;
};
declare type ThemeProps = {
    theme?: 'dark' | 'light';
    withFonts?: boolean;
    children: ReactNode;
};
declare const ThemeProvider: FC<ThemeProps>;
declare function useFuelTheme(): ThemeProviderContext;

declare type ToastProps = ToasterProps;
declare const ToastProvider: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: react.ReactNode;
} & ToasterProps & react.RefAttributes<any>>;

declare type TooltipProps = RTooltip.TooltipProps & {
    content: ReactNode;
    side?: RTooltip.PopperContentProps['side'];
    align?: RTooltip.PopperContentProps['align'];
    className?: string;
    arrowClassName?: string;
    sideOffset?: RTooltip.TooltipContentProps['sideOffset'];
    alignOffset?: RTooltip.TooltipContentProps['alignOffset'];
};
declare const Tooltip: react.ForwardRefExoticComponent<{
    [index: `data-${string}`]: unknown;
    as?: string | Element | undefined;
    css?: _fuel_ui_css.ThemeUtilsCSS | undefined;
    className?: string | undefined;
    children?: ReactNode;
} & RTooltip.TooltipProps & {
    content: ReactNode;
    side?: RTooltip.PopperContentProps['side'];
    align?: RTooltip.PopperContentProps['align'];
    className?: string | undefined;
    arrowClassName?: string | undefined;
    sideOffset?: RTooltip.TooltipContentProps['sideOffset'];
    alignOffset?: RTooltip.TooltipContentProps['alignOffset'];
} & react.RefAttributes<any>>;

export { Accordion, AccordionContentProps, AccordionProps, Alert, AlertDialog, AlertProps, AlertStatus, AspectRatio, AspectRatioProps, Avatar, AvatarProps, Badge, BadgeProps, BadgeVariants, BaseProps$1 as BaseProps, Box, BoxCentered, BoxCenteredProps, BoxProps, Button, ButtonBaseProps, ButtonGroup, ButtonGroupProps, ButtonLink, ButtonLinkProps, ButtonProps, ButtonSizes, ButtonVariants, Card, CardList, CardListProps, CardProps, Checkbox, CheckboxProps, Container, ContainerProps, ContainerSizes, Copyable, CopyableProps, Dialog, Drawer, DrawerContext, DrawerProps, Dropdown, DropdownContext, DropdownProps, Flex, FlexProps, Focus, Form, FormControlProps, FormErrorMessageProps, FormHelperTextProps, FormLabelProps, FuelLogo, FuelLogoProps, Grid, GridProps, HTMLProps, Heading, HeadingProps, HelperIcon, HelperIconProps, Icon, IconButton, IconButtonProps, IconProps, Icons, Image, ImageProps, Input, InputPassword, InputPasswordProps, InputProps, InputSizes, Link, LinkProps, List, ListContext, ListProps, Menu, MenuItemProps, MenuProps, Popover, PopoverProps, RadioGroup, RadioGroupProps, SPINNER_SIZE, Spinner, SpinnerProps, Stack, StackProps, Switch, SwitchProps, Tabs, TabsProps, Tag, TagProps, TagSizes, TagVariants, Text, TextProps, ThemeProps, ThemeProvider, ToastProps, ToastProvider, Tooltip, TooltipProps, createIcon, getIconSize, useAlertProps, useCardListContext, useDrawer, useDropdown, useFuelTheme, useInputProps, useListContext };
