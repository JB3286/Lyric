export interface Poem {
    id?: string,
    date?: Date,
    category: string,
    title: string,
    subtitle?: string;
    content: string[],
    comments?: string[],
}

