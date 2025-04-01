// TODO: Define a City class with name and id properties
import fs from 'node:fs/promises'

import dotenv from 'dotenv';
dotenv.config();

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
private async read (){
  return await fs.readFile(`../data/searchHistory.json`,{
    flag: 'a+',
    encoding: 'utf8',
})}
  // TODO: Define a write method that writes the updated cities array to the searchHistory.json file
   private async write(cities: City[]) {
    return await fs.writeFile(
      `../data/searchHistory.json`,
      JSON.stringify(cities, null, '\t')
    )

   }
  // TODO: Define a getCities method that reads the cities from the searchHistory.json file and returns them as an array of City objects
   async getCities() {

   }
  // TODO Define an addCity method that adds a city to the searchHistory.json file
  
  // * BONUS TODO: Define a removeCity method that removes a city from the searchHistory.json file
   async removeCity(id: string) {

   }
  }

export default new HistoryService();
