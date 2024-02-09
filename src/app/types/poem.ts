export interface Poem {
    id?: string,
    date?: string,
    category: string,
    title: string,
    subtitle?: string;
    content: string[],
    comments?: string[],
}

