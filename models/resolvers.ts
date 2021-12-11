import { userResolvers } from '../models/user/resolvers';
import { projectResolvers } from '../models/project/resolvers';
import { resolverInscripciones } from '../models/inscripcion/resolvers';
export const resolvers = [userResolvers, projectResolvers, resolverInscripciones];
