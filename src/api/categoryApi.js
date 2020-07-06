const CategoryData = [
  {
    category_title: "On Track",
    category_id: 1,
    tasks: [
      {
        task_id: 11,
        task_title: "CBSE grade 4 Math",
        participant: ["JohnCena", "PeterSnow"],
        date: new Date(),
        progress: 78
      }
    ]
  },
  {
    category_title: "Delayed",
    category_id: 2,
    tasks: [
      {
        task_id: 12,
        task_title: "CBSE grade 5 Math",
        participant: ["JohnCena"],
        date: new Date(),
        progress: 88
      }
    ]
  }
];

class CategoryApi {
  static getAllCategory() {
    return new Promise((resolve, reject) => {
      return resolve(CategoryData);
    });
  }
}

export default CategoryApi;
