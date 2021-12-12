import { Enum_EstadoInscripcion } from '../enums/enums.js';
import { ProjectModel } from '../project/project.js';
import { InscriptionModel } from './inscripcion.js';

const fechaIngreso = Date.now();
const resolverInscripciones = {
  Inscripcion: {
    proyecto: async (parent, args, context) => {
      return await ProjectModel.findOne({ _id: parent.proyecto });
    },
  },
  Query: {
    Inscripciones: async (parent, args) => {
      const inscripciones = await InscriptionModel.find();
      return inscripciones;
    },

    // inscripcionesNoAprobadas: async () => {
    //   const ina = await InscriptionModel.find({ estado: 'PENDIENTE' }).populate('estudiante');
    // },
  },
  Mutation: {
    crearInscripcion: async (parent, args) => {
      const inscripcionCreada = await InscriptionModel.create({
        estado: args.estado,
        proyecto: args.proyecto,
        estudiante: args.estudiante,
      });
      return inscripcionCreada;
    },
    aprobarInscripcion: async (parent, args) => {
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: fechaIngreso,
        },
        { new: true }
      );
      return inscripcionAprobada;
    },
  },
};

export { resolverInscripciones };