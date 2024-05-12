declare module '$/assets/*' {
    const meta: string;
    export default meta;
}

declare module '*.png?*' {
    const meta: string;
    export default meta;
}

declare module '*.jsonc' {
    const json: any;
    export default json;
}