import fetch, { RequestInit } from "node-fetch"

test.fetchJson = async (
    url: string,
    initConfig: RequestInit = {},
    fn: (...args: unknown[]) => void,
    timeout?: number,
) => {
    return test.each([fetch(url, initConfig).then(res => res.json())])(url, fn, timeout);
}

test.fetchText = async (
    url: string,
    initConfig: RequestInit = {},
    fn: (...args: unknown[]) => void,
    timeout?: number,
) => {
    return test.each([fetch(url, initConfig).then(res => res.text())])(url, fn, timeout);
}