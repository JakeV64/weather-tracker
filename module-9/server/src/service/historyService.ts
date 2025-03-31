// TODO: Define a City class with name and id properties

class City {
  id: string;
  name: string;

  constructor(id: string, name: string) {
    this.id = id;
    this.name = name;
  }
}

// TODO: Complete the HistoryService class
class HistoryService {
  // TODO: Define a read method that reads from the searchHistory.json file
   private async read() {
  
    try {
      const data = await import('../data/searchHistory.json');
      return data.cities as City[];
    } catch (error) {
      console.error('Error reading search history:', error);
      return []; 
    }
   }
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
   private async write(cities: City[]) {

    try {
      const fs = require('fs');
      const path = require('path');
      const filePath = path.join(__dirname, '../data/searchHistory.json');
      fs.writeFileSync(filePath, JSON.stringify({ cities }, null, 2));
      console.log('Search history updated successfully.');
    } catch (error) {
      console.error('Error writing search history:', error);
    }

   }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
   async getCities() {

    const cities = await this.read();
    return cities; 
  
   }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
   async addCity(city: string) {
    // Generate a unique ID for the new city
    const id = Math.random().toString(36).substring(2, 9); // Simple random ID for demonstration

    // Create a new City object
    const newCity = new City(id, city);

    // Read the existing cities
    const cities = await this.read();

    // Add the new city to the array
    cities.push(newCity);

    // Write the updated array back to the file
    await this.write(cities);
    console.log(`City ${city} added to search history with ID: ${id}`);
   }
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
   async removeCity(id: string) {

   }
  }

export default new HistoryService();
