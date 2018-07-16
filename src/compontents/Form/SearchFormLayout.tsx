import gql from 'graphql-tag';
import * as React from 'react';
import { Mutation, OperationVariables } from 'react-apollo';
import { ISearchFormProps } from './SearchFormTypes';

const SET_SEARCH_QUERY = gql`
  mutation SetAmount($input: setQueryInput!) {
    setQuery(input: $input) {
      searchQuery
    }
  }
`;

export const SearchQueryLayout: React.ComponentType<ISearchFormProps> = ({
  searchQuery,
  setQuery,
}) => (
  <Mutation<{ query: string }, OperationVariables>
    mutation={SET_SEARCH_QUERY}
    variables={{ input: { searchQuery } }}
  >
    {(submit, { data }) => (
      <div>
        {data ? (
          <span>
            Mutation results: <pre> {JSON.stringify(data, null, 'hida')}</pre>
          </span>
        ) : null}

        <form
          onSubmit={(event) => {
            event.preventDefault();
            submit();
          }}
        >
          <h1 className="fooSearch"> Search </h1>
          <label htmlFor="word">Search:</label>
          <input
            name="query"
            type="text"
            placeholder="blah"
            value={searchQuery}
            onChange={(event) => setQuery(event.target.value)}
          />
          <input type="submit" />
        </form>
      </div>
    )}
  </Mutation>
);
