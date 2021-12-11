import { AdvancementModel } from "./avances";


const resolversAvance = {
    Query:{
        Avances: async(parent,args)=>{
            const avances = await AdvancementModel.find()
            return avances;
        },
        filtrarAvance: async (parents, args) => {
            const avanceFiltrado = await AdvancementModel.find({ proyecto: args._id })
              .populate('proyecto')
              .populate('creadoPor');
            return avanceFiltrado;
          
        },
       
    },
    
    Mutation: {
        crearAvance: async (parents,args)=>{
            const avanceCreado = AdvancementModel.create({
                fecha: args.fecha,
                descripcion: args.descripcion,
                proyecto: args.proyecto,
                creadoPor: args.creadoPor
            }

            );
            return avanceCreado;
        },
        editarAvance: async (parent, args) => {
            const avanceEditado = await AdvancementModel.findByIdAndUpdate(args._id, {
                descripcion: args.descripcion,
                observaciones:args.observacion,
            });
            return avanceEditado;
            }
    },
};

export{resolversAvance};