const express = require("express");
const router = express.Router();
const db = require("../components/db");

router.post("/addVehicle", (req, res) => {
  const selectedCarType = req.body.selectedCarType;
  const selectedCarMark = req.body.selectedCarMark;
  const selectedCarModel = req.body.selectedCarModel;
  const selectedFuelType = req.body.selectedFuelType;
  const selectedTransmission = req.body.selectedTransmission;
  const selectedColor = req.body.selectedColor;
  const selectedLightType = req.body.selectedLightType;
  const selectedProduceYear = req.body.selectedProduceYear;
  const vinNumber = req.body.vinNumber;
  const kilometerNumber = req.body.kilometerNumber;
  const selectedParkingCameraType = req.body.selectedParkingCameraType;
  const selectedParkingSensorType = req.body.selectedParkingSensorType;
  const selectedACType = req.body.selectedACType;
  const selectedWheelDrive = req.body.selectedWheelDrive;
  const selectedDoorNumber = req.body.selectedDoorNumber;
  db.query(
    "INSERT INTO vehicle ( type, mark, model, fuel_type, transmission, color, light_type, produce_year, vin_number, kilometer_number, parking_camera, parking_sensor, ac, wheel_drive, door_number) values (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
    [
      selectedCarType,
      selectedCarMark,
      selectedCarModel,
      selectedFuelType,
      selectedTransmission,
      selectedColor,
      selectedLightType,
      selectedProduceYear,
      vinNumber,
      kilometerNumber,
      selectedParkingCameraType,
      selectedParkingSensorType,
      selectedACType,
      selectedWheelDrive,
      selectedDoorNumber,
    ],
    (err, result) => {
      console.log(err);
    }
  );
});

router.get("/vehicle/list", (req, res) => {
  db.query("SELECT * FROM vehicle", (error, results) => {
    if (error) {
      console.log(err);
    } else {
      res.send(results);
    }
  });
});

module.exports = router;
