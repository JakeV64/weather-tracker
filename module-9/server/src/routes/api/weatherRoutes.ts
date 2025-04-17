import { Router } from 'express';
const router = Router();
import dotenv from 'dotenv';
dotenv.config();

 import HistoryService from '../../service/historyService.js';
 import WeatherService from '../../service/weatherService.js';

// TODO: POST Request with city name to retrieve weather data
router.post('/', (req, res) => {
  try {
    const cityName = req.body.cityName;
    const weatherData = await WeatherService.getWeatherForCity(cityName);

    await HistoryService.addCity(cityName);
    res.status(200).json(weatherData);
    } catch (error) {
      console.error('Error getting weather data:', error);
      res.status(500).json({ message: 'Error getting weather data' });
    }
  
  // TODO: save city to search history
});

// TODO: GET search history
router.get('/history', async (req, res) => {
  try {
    const history = await HistoryService.getCities();
    res.status(200).json(history);
  } catch (error) {
    console.error('Error getting search history:', error);
    res.status(500).json({ message: 'Error getting search history' });
  } 
 
});

// * BONUS TODO: DELETE city from search history
router.delete('/history/:id', async (req, res) => {
  try {
    const cityId = parseInt(req.params.id);
    await HistoryService.removeCity(cityId);
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error deleting city from search history' });
  }

});

export default router;
