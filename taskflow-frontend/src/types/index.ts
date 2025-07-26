export type Route = {
    path: string;
    element: JSX.Element;
};

export type User = {
    id: number;
    name: string;
    email: string;
};

export type Post = {
    id: number;
    title: string;
    content: string;
    authorId: number;
};