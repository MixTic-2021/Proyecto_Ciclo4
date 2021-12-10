import { gql } from 'apollo-server-express';

const projectTypes = gql`
  scalar Date

  type Objetivo {
    _id: ID!
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Proyecto {
    _id: ID!
    nombre: String!
    presupuesto: Float!
    fechaInicio: Date!
    fechaFin: Date!
    estado: Enum_EstadoProyecto!
    fase: Enum_FaseProyecto!
    lider: Usuario!
    objetivos: [Objetivo]
  }

  input crearObjetivo {
    descripcion: String!
    tipo: Enum_TipoObjetivo!
  }

  type Query {
    Proyectos: [Proyecto]
    ProyectoNombre(nombre: String!): Proyecto
    ProyectosLiderados(lider: ID): [Proyecto]
  }

  type Mutation {
    crearProyecto(
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objetivos: [crearObjetivo!]
    ): Proyecto
    actializarEstado(
      id: ID!
      estado: Enum_EstadoProyecto!
    ): Proyecto
    actializarFase(
      id: ID!
      fase: Enum_FaseProyecto!
    ): Proyecto
    actualizar(
      _id: ID!
      nombre: String!
      presupuesto: Float!
      fechaInicio: Date!
      fechaFin: Date!
      estado: Enum_EstadoProyecto!
      fase: Enum_FaseProyecto!
      lider: String!
      objetivos: [crearObjetivo!]
    ): Proyecto
  }
`;

export { projectTypes };
