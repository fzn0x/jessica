declare namespace jest {
    interface It {
        fetchJson: (
            url: string,
            initConfig: fetch.RequestInit = {},
            fn: (...args: unknown[]) => void,
            timeout?: number,
        ) => void;
        fetchText: (
            url: string,
            initConfig: fetch.RequestInit = {},
            fn: (...args: unknown[]) => void,
            timeout?: number,
        ) => void;
    }
}