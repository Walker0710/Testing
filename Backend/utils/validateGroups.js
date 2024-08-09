const Category = require('../models/Category');
const Word = require('../models/Word');

const validateGroups = async (groupedWords) => {
  try {
    // Fetch all categories and their associated words from the database
    const categories = await Category.find({}).populate('words');

    // Create a dictionary for quick lookup
    const categoryMap = {};
    categories.forEach(category => {
      categoryMap[category.name] = category.words.map(word => word.word);
    });

    // Check if each group matches any category
    for (const group of groupedWords) {
      let isValidGroup = false;

      for (const category in categoryMap) {
        const categoryWords = categoryMap[category];

        // Check if all words in the group are in the category
        if (group.every(word => categoryWords.includes(word))) {
          isValidGroup = true;
          break;
        }
      }

      if (!isValidGroup) {
        return false; // Return false if any group is invalid
      }
    }

    return true; // All groups are valid
  } catch (error) {
    console.error('Error validating groups:', error);
    return false;
  }
};

module.exports = validateGroups;
