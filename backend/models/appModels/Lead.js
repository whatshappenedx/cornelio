const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const leadSchema = new mongoose.Schema({
  paciente: { type: mongoose.Schema.ObjectId, ref: 'Employee', required: true },
  fechaAsistencia: {
    type: Date,
    required: true
  },
  asistio: {
    type: Boolean,
    default: false // false means the patient did not attend, true means they did attend
  },
  created: {
    type: Date,
    default: Date.now,
  },
}, { timestamps: true });

// Assuming you're using mongoose-autopopulate plugin to automatically populate patient details
leadSchema.plugin(require('mongoose-autopopulate'));

module.exports = mongoose.model('Lead', leadSchema);
