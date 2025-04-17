
import dotenv from 'dotenv';

dotenv.config();

// TODO: Define an interface for the Coordinates object

interface Coordinates {
  lat: number; // Latitude
  lon: number; // Longitude
}


// TODO: Define a class for the Weather object
class Weather {
  temperature: number;
  humidity: number;
  windSpeed: number;

  constructor(temperature: number, humidity: number, windSpeed: number) {
    this.temperature = temperature;
    this.humidity = humidity;
    this.windSpeed = windSpeed;
  }
}

// TODO: Complete the WeatherService class
class WeatherService {
  // TODO: Define the baseURL, API key, and city name properties
  baseURL: string;
  apiKey: string;
  cityName: string;

  constructor() {
    this.apiKey = process.env.API_KEY || "";
    this.baseURL = process.env.API_BASE_URL || "";
    this.cityName = "";
  }

  // TODO: Create fetchLocationData method
  private async fetchLocationData(query: string) {
    fetch(query)
  }
  // TODO: Create destructureLocationData method
  private destructureLocationData(locationData: Coordinates): Coordinates { }
  // TODO: Create buildGeocodeQuery method
  private buildGeocodeQuery(): string {
    return `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit=1&appid=${this.apiKey}`;
  }

  // TODO: Create buildWeatherQuery method
  private buildWeatherQuery(coordinates: Coordinates): string {
    return `${this.baseURL}/geo/1.0/direct?q=${this.cityName}&limit={limit}&appid=${this.apiKey}`

  }
  // TODO: Create fetchAndDestructureLocationData method
  private async fetchAndDestructureLocationData() { }
  // TODO: Create fetchWeatherData method
  private async fetchWeatherData(coordinates: Coordinates) {
    try{
      const response = await fetch(this.buildWeatherQuery(coordinates));
    
  }
  // TODO: Build parseCurrentWeather method
  private parseCurrentWeather(response: any) { }
  // TODO: Complete buildForecastArray method
  private buildForecastArray(currentWeather: Weather, weatherData: any[]) {

  }
  // TODO: Complete getWeatherForCity method
  async getWeatherForCity(city: string) { }
}

export default new WeatherService();
