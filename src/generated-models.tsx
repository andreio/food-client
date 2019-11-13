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
  timestamptz: any,
  uuid: any,
  money: any,
  point: any,
  timetz: any,
  float8: any,
};


/** expression to compare columns of type float8. All fields are combined with logical 'AND'. */
export type Float8_Comparison_Exp = {
  _eq?: Maybe<Scalars['float8']>,
  _gt?: Maybe<Scalars['float8']>,
  _gte?: Maybe<Scalars['float8']>,
  _in?: Maybe<Array<Scalars['float8']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['float8']>,
  _lte?: Maybe<Scalars['float8']>,
  _neq?: Maybe<Scalars['float8']>,
  _nin?: Maybe<Array<Scalars['float8']>>,
};

/** columns and relationships of "food" */
export type Food = {
   __typename?: 'food',
  created_at: Scalars['timestamptz'],
  description: Scalars['String'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  price: Scalars['money'],
  restaurant: Scalars['uuid'],
  type: Scalars['uuid'],
  url: Scalars['String'],
};

/** aggregated selection of "food" */
export type Food_Aggregate = {
   __typename?: 'food_aggregate',
  aggregate?: Maybe<Food_Aggregate_Fields>,
  nodes: Array<Food>,
};

/** aggregate fields of "food" */
export type Food_Aggregate_Fields = {
   __typename?: 'food_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Food_Max_Fields>,
  min?: Maybe<Food_Min_Fields>,
};


/** aggregate fields of "food" */
export type Food_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "food" */
export type Food_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Food_Max_Order_By>,
  min?: Maybe<Food_Min_Order_By>,
};

/** input type for inserting array relation for remote table "food" */
export type Food_Arr_Rel_Insert_Input = {
  data: Array<Food_Insert_Input>,
  on_conflict?: Maybe<Food_On_Conflict>,
};

/** Boolean expression to filter rows from the table "food". All fields are combined with a logical 'AND'. */
export type Food_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Food_Bool_Exp>>>,
  _not?: Maybe<Food_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Food_Bool_Exp>>>,
  created_at?: Maybe<Timestamptz_Comparison_Exp>,
  description?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  price?: Maybe<Money_Comparison_Exp>,
  restaurant?: Maybe<Uuid_Comparison_Exp>,
  type?: Maybe<Uuid_Comparison_Exp>,
  url?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "food" */
export enum Food_Constraint {
  /** unique or primary key constraint */
  FoodPkey = 'food_pkey'
}

/** input type for inserting data into table "food" */
export type Food_Insert_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['money']>,
  restaurant?: Maybe<Scalars['uuid']>,
  type?: Maybe<Scalars['uuid']>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Food_Max_Fields = {
   __typename?: 'food_max_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "food" */
export type Food_Max_Order_By = {
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  url?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Food_Min_Fields = {
   __typename?: 'food_min_fields',
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  name?: Maybe<Scalars['String']>,
  url?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "food" */
export type Food_Min_Order_By = {
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  url?: Maybe<Order_By>,
};

/** response of any mutation on the table "food" */
export type Food_Mutation_Response = {
   __typename?: 'food_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Food>,
};

/** input type for inserting object relation for remote table "food" */
export type Food_Obj_Rel_Insert_Input = {
  data: Food_Insert_Input,
  on_conflict?: Maybe<Food_On_Conflict>,
};

/** on conflict condition type for table "food" */
export type Food_On_Conflict = {
  constraint: Food_Constraint,
  update_columns: Array<Food_Update_Column>,
  where?: Maybe<Food_Bool_Exp>,
};

/** ordering options when selecting data from "food" */
export type Food_Order_By = {
  created_at?: Maybe<Order_By>,
  description?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  price?: Maybe<Order_By>,
  restaurant?: Maybe<Order_By>,
  type?: Maybe<Order_By>,
  url?: Maybe<Order_By>,
};

/** select columns of table "food" */
export enum Food_Select_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Restaurant = 'restaurant',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "food" */
export type Food_Set_Input = {
  created_at?: Maybe<Scalars['timestamptz']>,
  description?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  price?: Maybe<Scalars['money']>,
  restaurant?: Maybe<Scalars['uuid']>,
  type?: Maybe<Scalars['uuid']>,
  url?: Maybe<Scalars['String']>,
};

/** columns and relationships of "food_type" */
export type Food_Type = {
   __typename?: 'food_type',
  id: Scalars['uuid'],
  name: Scalars['String'],
};

/** aggregated selection of "food_type" */
export type Food_Type_Aggregate = {
   __typename?: 'food_type_aggregate',
  aggregate?: Maybe<Food_Type_Aggregate_Fields>,
  nodes: Array<Food_Type>,
};

/** aggregate fields of "food_type" */
export type Food_Type_Aggregate_Fields = {
   __typename?: 'food_type_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Food_Type_Max_Fields>,
  min?: Maybe<Food_Type_Min_Fields>,
};


/** aggregate fields of "food_type" */
export type Food_Type_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Food_Type_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "food_type" */
export type Food_Type_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<Food_Type_Max_Order_By>,
  min?: Maybe<Food_Type_Min_Order_By>,
};

/** input type for inserting array relation for remote table "food_type" */
export type Food_Type_Arr_Rel_Insert_Input = {
  data: Array<Food_Type_Insert_Input>,
  on_conflict?: Maybe<Food_Type_On_Conflict>,
};

/** Boolean expression to filter rows from the table "food_type". All fields are combined with a logical 'AND'. */
export type Food_Type_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Food_Type_Bool_Exp>>>,
  _not?: Maybe<Food_Type_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Food_Type_Bool_Exp>>>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "food_type" */
export enum Food_Type_Constraint {
  /** unique or primary key constraint */
  FoodTypePkey = 'food_type_pkey'
}

/** input type for inserting data into table "food_type" */
export type Food_Type_Insert_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Food_Type_Max_Fields = {
   __typename?: 'food_type_max_fields',
  name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "food_type" */
export type Food_Type_Max_Order_By = {
  name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Food_Type_Min_Fields = {
   __typename?: 'food_type_min_fields',
  name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "food_type" */
export type Food_Type_Min_Order_By = {
  name?: Maybe<Order_By>,
};

/** response of any mutation on the table "food_type" */
export type Food_Type_Mutation_Response = {
   __typename?: 'food_type_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Food_Type>,
};

/** input type for inserting object relation for remote table "food_type" */
export type Food_Type_Obj_Rel_Insert_Input = {
  data: Food_Type_Insert_Input,
  on_conflict?: Maybe<Food_Type_On_Conflict>,
};

/** on conflict condition type for table "food_type" */
export type Food_Type_On_Conflict = {
  constraint: Food_Type_Constraint,
  update_columns: Array<Food_Type_Update_Column>,
  where?: Maybe<Food_Type_Bool_Exp>,
};

/** ordering options when selecting data from "food_type" */
export type Food_Type_Order_By = {
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
};

/** select columns of table "food_type" */
export enum Food_Type_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** input type for updating data in table "food_type" */
export type Food_Type_Set_Input = {
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
};

/** update columns of table "food_type" */
export enum Food_Type_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name'
}

/** update columns of table "food" */
export enum Food_Update_Column {
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Description = 'description',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Price = 'price',
  /** column name */
  Restaurant = 'restaurant',
  /** column name */
  Type = 'type',
  /** column name */
  Url = 'url'
}

/** expression to compare columns of type Int. All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: Maybe<Scalars['Int']>,
  _gt?: Maybe<Scalars['Int']>,
  _gte?: Maybe<Scalars['Int']>,
  _in?: Maybe<Array<Scalars['Int']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['Int']>,
  _lte?: Maybe<Scalars['Int']>,
  _neq?: Maybe<Scalars['Int']>,
  _nin?: Maybe<Array<Scalars['Int']>>,
};


/** expression to compare columns of type money. All fields are combined with logical 'AND'. */
export type Money_Comparison_Exp = {
  _eq?: Maybe<Scalars['money']>,
  _gt?: Maybe<Scalars['money']>,
  _gte?: Maybe<Scalars['money']>,
  _in?: Maybe<Array<Scalars['money']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['money']>,
  _lte?: Maybe<Scalars['money']>,
  _neq?: Maybe<Scalars['money']>,
  _nin?: Maybe<Array<Scalars['money']>>,
};

/** mutation root */
export type Mutation_Root = {
   __typename?: 'mutation_root',
  /** delete data from the table: "food" */
  delete_food?: Maybe<Food_Mutation_Response>,
  /** delete data from the table: "food_type" */
  delete_food_type?: Maybe<Food_Type_Mutation_Response>,
  /** delete data from the table: "restaurant" */
  delete_restaurant?: Maybe<Restaurant_Mutation_Response>,
  /** delete data from the table: "user" */
  delete_user?: Maybe<User_Mutation_Response>,
  /** insert data into the table: "food" */
  insert_food?: Maybe<Food_Mutation_Response>,
  /** insert data into the table: "food_type" */
  insert_food_type?: Maybe<Food_Type_Mutation_Response>,
  /** insert data into the table: "restaurant" */
  insert_restaurant?: Maybe<Restaurant_Mutation_Response>,
  /** insert data into the table: "user" */
  insert_user?: Maybe<User_Mutation_Response>,
  /** update data of the table: "food" */
  update_food?: Maybe<Food_Mutation_Response>,
  /** update data of the table: "food_type" */
  update_food_type?: Maybe<Food_Type_Mutation_Response>,
  /** update data of the table: "restaurant" */
  update_restaurant?: Maybe<Restaurant_Mutation_Response>,
  /** update data of the table: "user" */
  update_user?: Maybe<User_Mutation_Response>,
};


/** mutation root */
export type Mutation_RootDelete_FoodArgs = {
  where: Food_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_Food_TypeArgs = {
  where: Food_Type_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_RestaurantArgs = {
  where: Restaurant_Bool_Exp
};


/** mutation root */
export type Mutation_RootDelete_UserArgs = {
  where: User_Bool_Exp
};


/** mutation root */
export type Mutation_RootInsert_FoodArgs = {
  objects: Array<Food_Insert_Input>,
  on_conflict?: Maybe<Food_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_Food_TypeArgs = {
  objects: Array<Food_Type_Insert_Input>,
  on_conflict?: Maybe<Food_Type_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_RestaurantArgs = {
  objects: Array<Restaurant_Insert_Input>,
  on_conflict?: Maybe<Restaurant_On_Conflict>
};


/** mutation root */
export type Mutation_RootInsert_UserArgs = {
  objects: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>
};


/** mutation root */
export type Mutation_RootUpdate_FoodArgs = {
  _set?: Maybe<Food_Set_Input>,
  where: Food_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_Food_TypeArgs = {
  _set?: Maybe<Food_Type_Set_Input>,
  where: Food_Type_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_RestaurantArgs = {
  _inc?: Maybe<Restaurant_Inc_Input>,
  _set?: Maybe<Restaurant_Set_Input>,
  where: Restaurant_Bool_Exp
};


/** mutation root */
export type Mutation_RootUpdate_UserArgs = {
  _set?: Maybe<User_Set_Input>,
  where: User_Bool_Exp
};

/** column ordering options */
export enum Order_By {
  /** in the ascending order, nulls last */
  Asc = 'asc',
  /** in the ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in the ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in the descending order, nulls first */
  Desc = 'desc',
  /** in the descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in the descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}


/** expression to compare columns of type point. All fields are combined with logical 'AND'. */
export type Point_Comparison_Exp = {
  _eq?: Maybe<Scalars['point']>,
  _gt?: Maybe<Scalars['point']>,
  _gte?: Maybe<Scalars['point']>,
  _in?: Maybe<Array<Scalars['point']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['point']>,
  _lte?: Maybe<Scalars['point']>,
  _neq?: Maybe<Scalars['point']>,
  _nin?: Maybe<Array<Scalars['point']>>,
};

/** query root */
export type Query_Root = {
   __typename?: 'query_root',
  /** fetch data from the table: "food" */
  food: Array<Food>,
  /** fetch aggregated fields from the table: "food" */
  food_aggregate: Food_Aggregate,
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>,
  /** fetch data from the table: "food_type" */
  food_type: Array<Food_Type>,
  /** fetch aggregated fields from the table: "food_type" */
  food_type_aggregate: Food_Type_Aggregate,
  /** fetch data from the table: "food_type" using primary key columns */
  food_type_by_pk?: Maybe<Food_Type>,
  /** fetch data from the table: "restaurant" */
  restaurant: Array<Restaurant>,
  /** fetch aggregated fields from the table: "restaurant" */
  restaurant_aggregate: Restaurant_Aggregate,
  /** fetch data from the table: "restaurant" using primary key columns */
  restaurant_by_pk?: Maybe<Restaurant>,
  /** fetch data from the table: "user" */
  user: Array<User>,
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate,
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>,
};


/** query root */
export type Query_RootFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Order_By>>,
  where?: Maybe<Food_Bool_Exp>
};


/** query root */
export type Query_RootFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Order_By>>,
  where?: Maybe<Food_Bool_Exp>
};


/** query root */
export type Query_RootFood_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootFood_TypeArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Type_Order_By>>,
  where?: Maybe<Food_Type_Bool_Exp>
};


/** query root */
export type Query_RootFood_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Type_Order_By>>,
  where?: Maybe<Food_Type_Bool_Exp>
};


/** query root */
export type Query_RootFood_Type_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootRestaurantArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Restaurant_Order_By>>,
  where?: Maybe<Restaurant_Bool_Exp>
};


/** query root */
export type Query_RootRestaurant_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Restaurant_Order_By>>,
  where?: Maybe<Restaurant_Bool_Exp>
};


/** query root */
export type Query_RootRestaurant_By_PkArgs = {
  id: Scalars['uuid']
};


/** query root */
export type Query_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** query root */
export type Query_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** query root */
export type Query_RootUser_By_PkArgs = {
  id: Scalars['uuid']
};

/** columns and relationships of "restaurant" */
export type Restaurant = {
   __typename?: 'restaurant',
  address: Scalars['point'],
  closing_hours: Scalars['timetz'],
  id: Scalars['uuid'],
  name: Scalars['String'],
  rating: Scalars['float8'],
  rating_count: Scalars['Int'],
  starting_hours: Scalars['timetz'],
  url?: Maybe<Scalars['String']>,
};

/** aggregated selection of "restaurant" */
export type Restaurant_Aggregate = {
   __typename?: 'restaurant_aggregate',
  aggregate?: Maybe<Restaurant_Aggregate_Fields>,
  nodes: Array<Restaurant>,
};

/** aggregate fields of "restaurant" */
export type Restaurant_Aggregate_Fields = {
   __typename?: 'restaurant_aggregate_fields',
  avg?: Maybe<Restaurant_Avg_Fields>,
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<Restaurant_Max_Fields>,
  min?: Maybe<Restaurant_Min_Fields>,
  stddev?: Maybe<Restaurant_Stddev_Fields>,
  stddev_pop?: Maybe<Restaurant_Stddev_Pop_Fields>,
  stddev_samp?: Maybe<Restaurant_Stddev_Samp_Fields>,
  sum?: Maybe<Restaurant_Sum_Fields>,
  var_pop?: Maybe<Restaurant_Var_Pop_Fields>,
  var_samp?: Maybe<Restaurant_Var_Samp_Fields>,
  variance?: Maybe<Restaurant_Variance_Fields>,
};


/** aggregate fields of "restaurant" */
export type Restaurant_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<Restaurant_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "restaurant" */
export type Restaurant_Aggregate_Order_By = {
  avg?: Maybe<Restaurant_Avg_Order_By>,
  count?: Maybe<Order_By>,
  max?: Maybe<Restaurant_Max_Order_By>,
  min?: Maybe<Restaurant_Min_Order_By>,
  stddev?: Maybe<Restaurant_Stddev_Order_By>,
  stddev_pop?: Maybe<Restaurant_Stddev_Pop_Order_By>,
  stddev_samp?: Maybe<Restaurant_Stddev_Samp_Order_By>,
  sum?: Maybe<Restaurant_Sum_Order_By>,
  var_pop?: Maybe<Restaurant_Var_Pop_Order_By>,
  var_samp?: Maybe<Restaurant_Var_Samp_Order_By>,
  variance?: Maybe<Restaurant_Variance_Order_By>,
};

/** input type for inserting array relation for remote table "restaurant" */
export type Restaurant_Arr_Rel_Insert_Input = {
  data: Array<Restaurant_Insert_Input>,
  on_conflict?: Maybe<Restaurant_On_Conflict>,
};

/** aggregate avg on columns */
export type Restaurant_Avg_Fields = {
   __typename?: 'restaurant_avg_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by avg() on columns of table "restaurant" */
export type Restaurant_Avg_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** Boolean expression to filter rows from the table "restaurant". All fields are combined with a logical 'AND'. */
export type Restaurant_Bool_Exp = {
  _and?: Maybe<Array<Maybe<Restaurant_Bool_Exp>>>,
  _not?: Maybe<Restaurant_Bool_Exp>,
  _or?: Maybe<Array<Maybe<Restaurant_Bool_Exp>>>,
  address?: Maybe<Point_Comparison_Exp>,
  closing_hours?: Maybe<Timetz_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  name?: Maybe<String_Comparison_Exp>,
  rating?: Maybe<Float8_Comparison_Exp>,
  rating_count?: Maybe<Int_Comparison_Exp>,
  starting_hours?: Maybe<Timetz_Comparison_Exp>,
  url?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "restaurant" */
export enum Restaurant_Constraint {
  /** unique or primary key constraint */
  RestaurantNameKey = 'restaurant_name_key',
  /** unique or primary key constraint */
  RestaurantPkey = 'restaurant_pkey'
}

/** input type for incrementing integer columne in table "restaurant" */
export type Restaurant_Inc_Input = {
  rating_count?: Maybe<Scalars['Int']>,
};

/** input type for inserting data into table "restaurant" */
export type Restaurant_Insert_Input = {
  address?: Maybe<Scalars['point']>,
  closing_hours?: Maybe<Scalars['timetz']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['float8']>,
  rating_count?: Maybe<Scalars['Int']>,
  starting_hours?: Maybe<Scalars['timetz']>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type Restaurant_Max_Fields = {
   __typename?: 'restaurant_max_fields',
  closing_hours?: Maybe<Scalars['timetz']>,
  name?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['float8']>,
  rating_count?: Maybe<Scalars['Int']>,
  starting_hours?: Maybe<Scalars['timetz']>,
  url?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "restaurant" */
export type Restaurant_Max_Order_By = {
  closing_hours?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
  starting_hours?: Maybe<Order_By>,
  url?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type Restaurant_Min_Fields = {
   __typename?: 'restaurant_min_fields',
  closing_hours?: Maybe<Scalars['timetz']>,
  name?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['float8']>,
  rating_count?: Maybe<Scalars['Int']>,
  starting_hours?: Maybe<Scalars['timetz']>,
  url?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "restaurant" */
export type Restaurant_Min_Order_By = {
  closing_hours?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
  starting_hours?: Maybe<Order_By>,
  url?: Maybe<Order_By>,
};

/** response of any mutation on the table "restaurant" */
export type Restaurant_Mutation_Response = {
   __typename?: 'restaurant_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<Restaurant>,
};

/** input type for inserting object relation for remote table "restaurant" */
export type Restaurant_Obj_Rel_Insert_Input = {
  data: Restaurant_Insert_Input,
  on_conflict?: Maybe<Restaurant_On_Conflict>,
};

/** on conflict condition type for table "restaurant" */
export type Restaurant_On_Conflict = {
  constraint: Restaurant_Constraint,
  update_columns: Array<Restaurant_Update_Column>,
  where?: Maybe<Restaurant_Bool_Exp>,
};

/** ordering options when selecting data from "restaurant" */
export type Restaurant_Order_By = {
  address?: Maybe<Order_By>,
  closing_hours?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  name?: Maybe<Order_By>,
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
  starting_hours?: Maybe<Order_By>,
  url?: Maybe<Order_By>,
};

/** select columns of table "restaurant" */
export enum Restaurant_Select_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ClosingHours = 'closing_hours',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rating = 'rating',
  /** column name */
  RatingCount = 'rating_count',
  /** column name */
  StartingHours = 'starting_hours',
  /** column name */
  Url = 'url'
}

/** input type for updating data in table "restaurant" */
export type Restaurant_Set_Input = {
  address?: Maybe<Scalars['point']>,
  closing_hours?: Maybe<Scalars['timetz']>,
  id?: Maybe<Scalars['uuid']>,
  name?: Maybe<Scalars['String']>,
  rating?: Maybe<Scalars['float8']>,
  rating_count?: Maybe<Scalars['Int']>,
  starting_hours?: Maybe<Scalars['timetz']>,
  url?: Maybe<Scalars['String']>,
};

/** aggregate stddev on columns */
export type Restaurant_Stddev_Fields = {
   __typename?: 'restaurant_stddev_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by stddev() on columns of table "restaurant" */
export type Restaurant_Stddev_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** aggregate stddev_pop on columns */
export type Restaurant_Stddev_Pop_Fields = {
   __typename?: 'restaurant_stddev_pop_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by stddev_pop() on columns of table "restaurant" */
export type Restaurant_Stddev_Pop_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** aggregate stddev_samp on columns */
export type Restaurant_Stddev_Samp_Fields = {
   __typename?: 'restaurant_stddev_samp_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by stddev_samp() on columns of table "restaurant" */
export type Restaurant_Stddev_Samp_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** aggregate sum on columns */
export type Restaurant_Sum_Fields = {
   __typename?: 'restaurant_sum_fields',
  rating?: Maybe<Scalars['float8']>,
  rating_count?: Maybe<Scalars['Int']>,
};

/** order by sum() on columns of table "restaurant" */
export type Restaurant_Sum_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** update columns of table "restaurant" */
export enum Restaurant_Update_Column {
  /** column name */
  Address = 'address',
  /** column name */
  ClosingHours = 'closing_hours',
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  Rating = 'rating',
  /** column name */
  RatingCount = 'rating_count',
  /** column name */
  StartingHours = 'starting_hours',
  /** column name */
  Url = 'url'
}

/** aggregate var_pop on columns */
export type Restaurant_Var_Pop_Fields = {
   __typename?: 'restaurant_var_pop_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by var_pop() on columns of table "restaurant" */
export type Restaurant_Var_Pop_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** aggregate var_samp on columns */
export type Restaurant_Var_Samp_Fields = {
   __typename?: 'restaurant_var_samp_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by var_samp() on columns of table "restaurant" */
export type Restaurant_Var_Samp_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** aggregate variance on columns */
export type Restaurant_Variance_Fields = {
   __typename?: 'restaurant_variance_fields',
  rating?: Maybe<Scalars['Float']>,
  rating_count?: Maybe<Scalars['Float']>,
};

/** order by variance() on columns of table "restaurant" */
export type Restaurant_Variance_Order_By = {
  rating?: Maybe<Order_By>,
  rating_count?: Maybe<Order_By>,
};

/** expression to compare columns of type String. All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: Maybe<Scalars['String']>,
  _gt?: Maybe<Scalars['String']>,
  _gte?: Maybe<Scalars['String']>,
  _ilike?: Maybe<Scalars['String']>,
  _in?: Maybe<Array<Scalars['String']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _like?: Maybe<Scalars['String']>,
  _lt?: Maybe<Scalars['String']>,
  _lte?: Maybe<Scalars['String']>,
  _neq?: Maybe<Scalars['String']>,
  _nilike?: Maybe<Scalars['String']>,
  _nin?: Maybe<Array<Scalars['String']>>,
  _nlike?: Maybe<Scalars['String']>,
  _nsimilar?: Maybe<Scalars['String']>,
  _similar?: Maybe<Scalars['String']>,
};

/** subscription root */
export type Subscription_Root = {
   __typename?: 'subscription_root',
  /** fetch data from the table: "food" */
  food: Array<Food>,
  /** fetch aggregated fields from the table: "food" */
  food_aggregate: Food_Aggregate,
  /** fetch data from the table: "food" using primary key columns */
  food_by_pk?: Maybe<Food>,
  /** fetch data from the table: "food_type" */
  food_type: Array<Food_Type>,
  /** fetch aggregated fields from the table: "food_type" */
  food_type_aggregate: Food_Type_Aggregate,
  /** fetch data from the table: "food_type" using primary key columns */
  food_type_by_pk?: Maybe<Food_Type>,
  /** fetch data from the table: "restaurant" */
  restaurant: Array<Restaurant>,
  /** fetch aggregated fields from the table: "restaurant" */
  restaurant_aggregate: Restaurant_Aggregate,
  /** fetch data from the table: "restaurant" using primary key columns */
  restaurant_by_pk?: Maybe<Restaurant>,
  /** fetch data from the table: "user" */
  user: Array<User>,
  /** fetch aggregated fields from the table: "user" */
  user_aggregate: User_Aggregate,
  /** fetch data from the table: "user" using primary key columns */
  user_by_pk?: Maybe<User>,
};


/** subscription root */
export type Subscription_RootFoodArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Order_By>>,
  where?: Maybe<Food_Bool_Exp>
};


/** subscription root */
export type Subscription_RootFood_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Order_By>>,
  where?: Maybe<Food_Bool_Exp>
};


/** subscription root */
export type Subscription_RootFood_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootFood_TypeArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Type_Order_By>>,
  where?: Maybe<Food_Type_Bool_Exp>
};


/** subscription root */
export type Subscription_RootFood_Type_AggregateArgs = {
  distinct_on?: Maybe<Array<Food_Type_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Food_Type_Order_By>>,
  where?: Maybe<Food_Type_Bool_Exp>
};


/** subscription root */
export type Subscription_RootFood_Type_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootRestaurantArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Restaurant_Order_By>>,
  where?: Maybe<Restaurant_Bool_Exp>
};


/** subscription root */
export type Subscription_RootRestaurant_AggregateArgs = {
  distinct_on?: Maybe<Array<Restaurant_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<Restaurant_Order_By>>,
  where?: Maybe<Restaurant_Bool_Exp>
};


/** subscription root */
export type Subscription_RootRestaurant_By_PkArgs = {
  id: Scalars['uuid']
};


/** subscription root */
export type Subscription_RootUserArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUser_AggregateArgs = {
  distinct_on?: Maybe<Array<User_Select_Column>>,
  limit?: Maybe<Scalars['Int']>,
  offset?: Maybe<Scalars['Int']>,
  order_by?: Maybe<Array<User_Order_By>>,
  where?: Maybe<User_Bool_Exp>
};


/** subscription root */
export type Subscription_RootUser_By_PkArgs = {
  id: Scalars['uuid']
};


/** expression to compare columns of type timestamptz. All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timestamptz']>,
  _gt?: Maybe<Scalars['timestamptz']>,
  _gte?: Maybe<Scalars['timestamptz']>,
  _in?: Maybe<Array<Scalars['timestamptz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timestamptz']>,
  _lte?: Maybe<Scalars['timestamptz']>,
  _neq?: Maybe<Scalars['timestamptz']>,
  _nin?: Maybe<Array<Scalars['timestamptz']>>,
};


/** expression to compare columns of type timetz. All fields are combined with logical 'AND'. */
export type Timetz_Comparison_Exp = {
  _eq?: Maybe<Scalars['timetz']>,
  _gt?: Maybe<Scalars['timetz']>,
  _gte?: Maybe<Scalars['timetz']>,
  _in?: Maybe<Array<Scalars['timetz']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['timetz']>,
  _lte?: Maybe<Scalars['timetz']>,
  _neq?: Maybe<Scalars['timetz']>,
  _nin?: Maybe<Array<Scalars['timetz']>>,
};

/** columns and relationships of "user" */
export type User = {
   __typename?: 'user',
  first_name: Scalars['String'],
  id: Scalars['uuid'],
  second_name: Scalars['String'],
};

/** aggregated selection of "user" */
export type User_Aggregate = {
   __typename?: 'user_aggregate',
  aggregate?: Maybe<User_Aggregate_Fields>,
  nodes: Array<User>,
};

/** aggregate fields of "user" */
export type User_Aggregate_Fields = {
   __typename?: 'user_aggregate_fields',
  count?: Maybe<Scalars['Int']>,
  max?: Maybe<User_Max_Fields>,
  min?: Maybe<User_Min_Fields>,
};


/** aggregate fields of "user" */
export type User_Aggregate_FieldsCountArgs = {
  columns?: Maybe<Array<User_Select_Column>>,
  distinct?: Maybe<Scalars['Boolean']>
};

/** order by aggregate values of table "user" */
export type User_Aggregate_Order_By = {
  count?: Maybe<Order_By>,
  max?: Maybe<User_Max_Order_By>,
  min?: Maybe<User_Min_Order_By>,
};

/** input type for inserting array relation for remote table "user" */
export type User_Arr_Rel_Insert_Input = {
  data: Array<User_Insert_Input>,
  on_conflict?: Maybe<User_On_Conflict>,
};

/** Boolean expression to filter rows from the table "user". All fields are combined with a logical 'AND'. */
export type User_Bool_Exp = {
  _and?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  _not?: Maybe<User_Bool_Exp>,
  _or?: Maybe<Array<Maybe<User_Bool_Exp>>>,
  first_name?: Maybe<String_Comparison_Exp>,
  id?: Maybe<Uuid_Comparison_Exp>,
  second_name?: Maybe<String_Comparison_Exp>,
};

/** unique or primary key constraints on table "user" */
export enum User_Constraint {
  /** unique or primary key constraint */
  UserPkey = 'user_pkey'
}

/** input type for inserting data into table "user" */
export type User_Insert_Input = {
  first_name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  second_name?: Maybe<Scalars['String']>,
};

/** aggregate max on columns */
export type User_Max_Fields = {
   __typename?: 'user_max_fields',
  first_name?: Maybe<Scalars['String']>,
  second_name?: Maybe<Scalars['String']>,
};

/** order by max() on columns of table "user" */
export type User_Max_Order_By = {
  first_name?: Maybe<Order_By>,
  second_name?: Maybe<Order_By>,
};

/** aggregate min on columns */
export type User_Min_Fields = {
   __typename?: 'user_min_fields',
  first_name?: Maybe<Scalars['String']>,
  second_name?: Maybe<Scalars['String']>,
};

/** order by min() on columns of table "user" */
export type User_Min_Order_By = {
  first_name?: Maybe<Order_By>,
  second_name?: Maybe<Order_By>,
};

/** response of any mutation on the table "user" */
export type User_Mutation_Response = {
   __typename?: 'user_mutation_response',
  /** number of affected rows by the mutation */
  affected_rows: Scalars['Int'],
  /** data of the affected rows by the mutation */
  returning: Array<User>,
};

/** input type for inserting object relation for remote table "user" */
export type User_Obj_Rel_Insert_Input = {
  data: User_Insert_Input,
  on_conflict?: Maybe<User_On_Conflict>,
};

/** on conflict condition type for table "user" */
export type User_On_Conflict = {
  constraint: User_Constraint,
  update_columns: Array<User_Update_Column>,
  where?: Maybe<User_Bool_Exp>,
};

/** ordering options when selecting data from "user" */
export type User_Order_By = {
  first_name?: Maybe<Order_By>,
  id?: Maybe<Order_By>,
  second_name?: Maybe<Order_By>,
};

/** select columns of table "user" */
export enum User_Select_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  SecondName = 'second_name'
}

/** input type for updating data in table "user" */
export type User_Set_Input = {
  first_name?: Maybe<Scalars['String']>,
  id?: Maybe<Scalars['uuid']>,
  second_name?: Maybe<Scalars['String']>,
};

/** update columns of table "user" */
export enum User_Update_Column {
  /** column name */
  FirstName = 'first_name',
  /** column name */
  Id = 'id',
  /** column name */
  SecondName = 'second_name'
}


/** expression to compare columns of type uuid. All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: Maybe<Scalars['uuid']>,
  _gt?: Maybe<Scalars['uuid']>,
  _gte?: Maybe<Scalars['uuid']>,
  _in?: Maybe<Array<Scalars['uuid']>>,
  _is_null?: Maybe<Scalars['Boolean']>,
  _lt?: Maybe<Scalars['uuid']>,
  _lte?: Maybe<Scalars['uuid']>,
  _neq?: Maybe<Scalars['uuid']>,
  _nin?: Maybe<Array<Scalars['uuid']>>,
};

export type RestaurantsQueryVariables = {};


export type RestaurantsQuery = (
  { __typename?: 'query_root' }
  & { restaurant_aggregate: (
    { __typename?: 'restaurant_aggregate' }
    & { nodes: Array<(
      { __typename?: 'restaurant' }
      & Pick<Restaurant, 'address' | 'closing_hours' | 'name' | 'rating' | 'id' | 'rating_count' | 'starting_hours' | 'url'>
    )> }
  ) }
);


export const RestaurantsDocument = gql`
    query Restaurants {
  restaurant_aggregate {
    nodes {
      address
      closing_hours
      name
      rating
      id
      rating_count
      starting_hours
      url
    }
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