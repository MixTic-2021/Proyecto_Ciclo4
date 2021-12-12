// import conectarBD from './db/db.js';
// import { UserModel } from './models/usuario/usuario';
// import { Enum_EstadoUsuario, Enum_Rol, Enum_TipoObjetivo } from './models/enums/enums';
// import { ProjectModel } from './models/project/project';
// import { ObjectId } from 'mongoose';
// import { ObjectiveModel } from './models/objective';

// const crearProyectoConObjetivos1 = async () => {
//   const usuarioInicial = await UserModel.create({
//     nombre: 'Miguel',
//     apellido: 'Fabra',
//     correo: 'migangfabmon@gmail.com',
//     identificacion: '1234',
//     rol: Enum_Rol.ADMINISTRADOR,
//     estado: Enum_EstadoUsuario.AUTORIZADO,
//   });

//   const proyectoCreado = await ProjectModel.create({
//     nombre: 'Proyecto Mision TIC',
//     fechaInicio: new Date('2021/12/24'),
//     fechaFin: new Date('2022/12/24'),
//     presupuesto: 120000,
//     lider: usuarioInicial._id,
//   });

//   const objetivoGeneral = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo general',
//     tipo: Enum_TipoObjetivo.general,
//     proyecto: proyectoCreado._id,
//   });

//   const objetivoEspecifico1 = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo especifico 1',
//     tipo: Enum_TipoObjetivo.especifico,
//     proyecto: proyectoCreado._id,
//   });

//   const objetivoEspecifico2 = await ObjectiveModel.create({
//     descripcion: 'este es el objetivo especifico 2',
//     tipo: Enum_TipoObjetivo.especifico,
//     proyecto: proyectoCreado._id,
//   });
// };
// const consultaProyectoConObjetivos1 = async () => {
//   const proyecto = await ProjectModel.findOne({ _id: '618d52f71098bc9a121e95d5' });

//   console.log('el proyecto que encontré fue', proyecto);

//   const objetivos = await ObjectiveModel.find({ project: '618d52f71098bc9a121e95d5' });

//   console.log('los objetivos del proyecto son: ', objetivos);

//   const proyectoConObjetivos = { ...proyecto, objetivos };

//   console.log('el proyecto con objetivos es: ', proyectoConObjetivos);
// };

