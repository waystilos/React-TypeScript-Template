import * as React from 'react';
import { ISearchFormProps, ISearchFormState } from './SearchFormTypes';

export class SearchForm extends React.Component<{ children(props: ISearchFormProps): React.ReactNode }, ISearchFormState> {
         public state: ISearchFormState = { searchQuery: 'hi', };

         public render() {
             return this.props.children({
               searchQuery: this.state.searchQuery,
                 setQuery: this.setQuery,
             });
         }

         private setQuery = (searchQuery: string) => {
             this.setState({ searchQuery });
         }
       }


       