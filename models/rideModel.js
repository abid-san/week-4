// Sample MongoDB schema (using Mongoose)
const mongoose = require('mongoose');

const rideSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  driverId: { type: mongoose.Schema.Types.ObjectId, ref: 'Driver' },
  pickup: { type: String, required: true },
  destination: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['requested', 'accepted', 'in_progress', 'completed', 'canceled'],
    default: 'requested'
  },
  price: Number,
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Ride', rideSchema);
