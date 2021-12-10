import { ProjectModel } from './project';

const projectResolvers = {
  Query: {
    Proyectos: async (parent, args) => {
      const proyectos = await ProjectModel.find().populate('lider');
      return proyectos;
    },
    ProyectoNombre: async(parent, args) => {
      const findProyecto = await ProjectModel.findOne({
        nombre : args.nombre
      })
      if(!findProyecto) {
        return null
      }else{
        return findProyecto
      }
      
    },
    ProyectosLiderados: async(parent, args) =>{

      const Proyectos = await ProjectModel.find({ lider: {$in : [args.lider]}});
      return Proyectos;
      
      
    }


 
  },
//fin query

  Mutation: {
    crearProyecto: async (parent, args) => {
      
      const proyectoCreado = await ProjectModel.create({
        nombre: args.nombre,
        estado: args.estado,
        fase: args.fase,
        fechaInicio: args.fechaInicio,
        fechaFin: args.fechaFin,
        presupuesto: args.presupuesto,
        lider: args.lider,
        objetivos: args.objetivos,
      });
      return proyectoCreado;
    },
    actializarEstado: async(parent , args) => {
      const findProyecto = await (await ProjectModel.findById(args.id))
      
      if(!findProyecto) {
        return {error: "no se encontro proyecto"+findProyecto}
      }else{
        const updateEstado = await ProjectModel.findByIdAndUpdate(args.id,{estado: args.estado},{
          new: true
        })
        return updateEstado
      }
    
    },
    actializarFase: async(parent , args) => {
      const findProyecto = await ProjectModel.findById(args.id)
      if(!findProyecto) {
        return {error: "no se encontro proyecto"}
      }else{
        const updateFase = await ProjectModel.findByIdAndUpdate(args.id,{fase: args.fase},{
          new: true
        })
        return updateFase
      }
    
    },
    actualizar: async(parent , args) => {
      const findProyecto = await ProjectModel.findOne({
        _id : args._id
      })
      if(!findProyecto) {
        return {error: "no se encontro proyecto"}
      }else{
        const update = await ProjectModel.findOneAndUpdate({_id : args._id},{
          nombre: args.nombre,
          estado: args.estado,
          fase: args.fase,
          fechaInicio: args.fechaInicio,
          fechaFin: args.fechaFin,
          presupuesto: args.presupuesto,
          lider: args.lider,
          objetivos: args.objetivos
        },{
          new: true
        })
        return update
      }
    
    
     
  }
}
};

export { projectResolvers };
