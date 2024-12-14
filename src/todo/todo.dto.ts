export interface CreateTodo{
    title: string;
    isCompleted: boolean;
    isDeleted: boolean;
}

export interface UpdateTodo{
    title?: string;
    isCompleted?: boolean;
    isDeleted?: boolean;
}
