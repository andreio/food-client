import gql from 'graphql-tag';
import * as React from 'react';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactComponents from '@apollo/react-components';
import * as ApolloReactHoc from '@apollo/react-hoc';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string,
  String: string,
  Boolean: boolean,
  Int: number,
  Float: number,
};

export type Food = {
   __typename?: 'Food',
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['Int']>,
  image?: Maybe<Scalars['String']>,
};

export type Query = {
   __typename?: 'Query',
  restaurants: Array<Restaurant>,
};

export type Restaurant = {
   __typename?: 'Restaurant',
  name: Scalars['String'],
  address: Scalars['String'],
  food?: Maybe<Array<Maybe<Food>>>,
  image: Scalars['String'],
};

export type RestaurantsQueryVariables = {};


export type RestaurantsQuery = (
  { __typename?: 'Query' }
  & { restaurants: Array<(
    { __typename?: 'Restaurant' }
    & Pick<Restaurant, 'name' | 'address' | 'image'>
  )> }
);


export const RestaurantsDocument = gql`
    query restaurants {
  restaurants {
    name
    address
    image
  }
}
    `;
export type RestaurantsComponentProps = Omit<ApolloReactComponents.QueryComponentOptions<RestaurantsQuery, RestaurantsQueryVariables>, 'query'>;

    export const RestaurantsComponent = (props: RestaurantsComponentProps) => (
      <ApolloReactComponents.Query<RestaurantsQuery, RestaurantsQueryVariables> query={RestaurantsDocument} {...props} />
    );
    
export type RestaurantsProps<TChildProps = {}> = ApolloReactHoc.DataProps<RestaurantsQuery, RestaurantsQueryVariables> & TChildProps;
export function withRestaurants<TProps, TChildProps = {}>(operationOptions?: ApolloReactHoc.OperationOption<
  TProps,
  RestaurantsQuery,
  RestaurantsQueryVariables,
  RestaurantsProps<TChildProps>>) {
    return ApolloReactHoc.withQuery<TProps, RestaurantsQuery, RestaurantsQueryVariables, RestaurantsProps<TChildProps>>(RestaurantsDocument, {
      alias: 'restaurants',
      ...operationOptions
    });
};
export type RestaurantsQueryResult = ApolloReactCommon.QueryResult<RestaurantsQuery, RestaurantsQueryVariables>;