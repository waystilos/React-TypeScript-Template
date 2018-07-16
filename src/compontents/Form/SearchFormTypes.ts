export interface ISearchFormState {
    searchQuery: string;
}

export interface ISearchFormProps extends ISearchFormState {
    setQuery(searchQuery: string): void;
}

