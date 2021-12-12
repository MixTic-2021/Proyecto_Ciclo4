import { resolversProyecto } from '../models/proyecto/resolvers.js';
import { resolverInscripciones } from '../models/inscripcion/resolvers.js';
//import { resolversAutenticacion } from './auth/resolvers.js';

export const resolvers = [
  resolversProyecto, 
  resolverInscripciones,
  //resolversAutenticacion,
];
