import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';

export const GraphQLConfig = GraphQLModule.forRoot<ApolloDriverConfig>({
  driver: ApolloDriver,
  autoSchemaFile: join(
    process.cwd(),
    '../../packages/graphql-client/src/schema/schema.gql',
  ),
  playground: true,
  introspection: true,
  context: ({ req, res }) => ({ req, res }),
});
