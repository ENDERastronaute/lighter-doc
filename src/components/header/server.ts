'use server'

export async function fetchLatestRelease(): Promise<string|undefined> {
    const response = await fetch('https://api.github.com/repos/enderastronaute/lighter/releases/latest');

    const data = await response.json();

    return data.name;
}