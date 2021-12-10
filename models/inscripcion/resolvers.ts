import { Enum_EstadoInscripcion } from '../enums/enums';
import { InscriptionModel } from './inscripcion';


const resolverInscripciones = {
  Query:{
    Inscripciones: async (parent, args) => {
      const inscripciones = InscriptionModel.find();
      return inscripciones;
    }
  },
  Mutation: {
    aprobarInscripcion: async (parent, args) => {
        const fe = Date.now();
      const inscripcionAprobada = await InscriptionModel.findByIdAndUpdate(
        args.id,
        {
          estado: Enum_EstadoInscripcion.ACEPTADA,
          fechaIngreso: fe,
        },
        { new: true }
      );
      return inscripcionAprobada;
    }
     
  }

};

export { resolverInscripciones };
