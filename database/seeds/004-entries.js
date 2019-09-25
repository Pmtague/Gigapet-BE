exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("entries")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("entries").insert([
        {
          kids_id: 1,
          date: "09-25-2019",
          meal: "breakfast",
          food: "oatmeal",
          category: "grains/beans",
          servings: 1
        },
        {
          kids_id: 1,
          date: "09-25-2019",
          meal: "breakfast",
          food: "banana",
          category: "fruits",
          servings: 1
        },
        {
          kids_id: 1,
          date: "09-25-2019",
          meal: "snack",
          food: "grapes",
          category: "fruits",
          servings: 1
        },
        {
          kids_id: 2,
          date: "09-25-2019",
          meal: "breakfast",
          food: "eggs",
          category: "meat/poultry/seafood",
          servings: 2
        },
        {
          kids_id: 2,
          date: "09-25-2019",
          meal: "lunch",
          food: "rice",
          category: "grains/beans",
          servings: 1
        },
        {
          kids_id: 3,
          date: "09-25-2019",
          meal: "breakfast",
          food: "oatmeal",
          category: "grains/beans",
          servings: 1
        },
        {
          kids_id: 3,
          date: "09-25-2019",
          meal: "lunch",
          food: "potatoes",
          category: "vegetables",
          servings: 1
        },
        {
          kids_id: 4,
          date: "09-25-2019",
          meal: "breakfast",
          food: "oranges",
          category: "fruits",
          servings: 1
        },
        {
          kids_id: 4,
          date: "09-25-2019",
          meal: "lunch",
          food: "lentils",
          category: "grains/beans",
          servings: 2
        },
        {
          kids_id: 5,
          date: "09-25-2019",
          meal: "lunch",
          food: "noodles",
          category: "grains/beans",
          servings: 1
        }
      ]);
    });
};
