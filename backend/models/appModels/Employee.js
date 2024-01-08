const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const employeeSchema = new mongoose.Schema({
  photo: {
    type: String,
    trim: true,
  },
  cedula: {
    type: String,
    required: true
  },
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  fechaNacimiento: {
    type: Date,
    required: true
  },
  edad: Number,
  grupoSanguineo: String,
  hcl: String,
  genero: {
    type: String,
    required: true
  },
  photo: {
    type: String,
    trim: true,
  },
  instruccion: String,
  fechaCaducidad: {
    type: Date,
    required: true
  },
  estadoCivil: String,
  firmaHuella: String,
  hcl_053: String,
  tipoDeSeguro: String,
  fechaIngreso: {
    type: Date,
    required: true
  },
  ano: Number,
  telefono: String,
  residencia: String,
  comprobantePagoSV: String,
  codigoValidacion: String,
  fechaCodigoValidacion: {
    type: Date,
    required: true
  },
  vigenciaCodigoValidacion: {
    type: Date,
    required: true
  },
  tipoCodigoValidacion: String,
  tpsns053: String,
  tpsn1: String,
  tpsn2: String,
  accesoVascularIngreso: String,
  acvActual: String,
  fistulas: String,
  cate: String,
  derivados: String,
  estadoDelPaciente: String
}, { timestamps: true });

employeeSchema.plugin(require('mongoose-autopopulate'));

// Index for efficient lookup by cedula
//employeeSchema.index({ cedula: 1 });

// Text index for searching by names and surnames
//employeeSchema.index({ nombres: 'text', apellidos: 'text' });

module.exports = mongoose.model('Employee', employeeSchema);
