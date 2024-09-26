import { nextCosmosPage, nextCosmosStaticParams } from 'react-cosmos-next';
import * as cosmosImports from '@/src/cosmos.imports';
 
export const generateStaticParams = nextCosmosStaticParams(cosmosImports);
 
export default nextCosmosPage(cosmosImports);
