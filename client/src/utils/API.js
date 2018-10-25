import axios from "axios";

export default {
  // Gets all books
  getClothes: function() {
    return axios.get("/api/clothes");
  },
  // Gets the book with the given id
  getSpecificClothes: function(id) {
    return axios.get("/api/clothes/" + id);
  },
  // Deletes the book with the given id
  deleteClothes: function(id) {
    return axios.delete("/api/clothes/" + id);
  },
  // Saves a book to the database
  saveClothes: function(clothesData) {
    return axios.post("/api/clothes", clothesData);
  }
};
