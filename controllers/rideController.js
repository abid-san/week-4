// In-memory database
const rides = [];

exports.bookRide = (req, res) => {
  const { pickup, destination } = req.body;
  const userId = req.user.id;

  if (!pickup || !destination) {
    return res.status(400).json({ error: 'Pickup and destination required' });
  }

  const newRide = {
    id: Date.now().toString(),
    userId,
    pickup,
    destination,
    status: 'requested',
    createdAt: new Date()
  };

  rides.push(newRide);
  res.status(201).json(newRide);
};

exports.cancelRide = (req, res) => {
  const rideId = req.params.id;
  const rideIndex = rides.findIndex(r => r.id === rideId);
  
  if (rideIndex === -1) {
    return res.status(404).json({ error: 'Ride not found' });
  }
  
  rides.splice(rideIndex, 1);
  res.status(204).send();
};
