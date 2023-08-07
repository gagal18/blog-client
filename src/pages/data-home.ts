import {IPost} from "../interfaces/IPost";
import {ICategory} from "../interfaces/ICategory";

export const posts:IPost[] = [
  {
    id: 1,
    title: "Delicious Apple",
    desc: "The apple is a crisp and sweet fruit, widely known for its health benefits. It is rich in fiber, vitamins, and minerals, making it a perfect snack option for everyone.",
    img: "https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 2,
    title: "Juicy Mango",
    desc: "The mango is a tropical fruit that delights taste buds with its juicy and sweet flavor. Packed with vitamin C and antioxidants, it is not only delicious but also boosts immunity.",
    img: "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 3,
    title: "Refreshing Watermelon",
    desc: "Watermelon is a refreshing summer fruit known for its high water content, helping to keep you hydrated. Its sweet and juicy taste makes it a favorite choice during hot days.",
    img: "https://images.pexels.com/photos/4230630/pexels-photo-4230630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    id: 4,
    title: "Tangy Orange",
    desc: "Oranges are packed with vitamin C and have a tangy-sweet flavor that appeals to many. They are not only great for snacking but also essential for maintaining a healthy immune system.",
    img: "https://images.pexels.com/photos/6157049/pexels-photo-6157049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }
];
export const categories: ICategory[] = [
      {
        "id": 1,
        "name": "Technology",
        "slug": "technology",
        "description": "Explore the latest trends and innovations in the world of technology."
      },
      {
        "id": 2,
        "name": "Health & Wellness",
        "slug": "health-wellness",
        "description": "Discover tips and advice for maintaining a healthy lifestyle."
      },
      {
        "id": 3,
        "name": "Travel",
        "slug": "travel",
        "description": "Embark on virtual journeys to exotic destinations and learn about travel experiences."
      },
      {
        "id": 4,
        "name": "Food & Cooking",
        "slug": "food-cooking",
        "description": "Indulge in culinary delights, recipes, and cooking techniques."
      },
      {
        "id": 5,
        "name": "Personal Development",
        "slug": "personal-development",
        "description": "Enhance your skills, mindset, and personal growth with insightful articles."
      },
      {
        "id": 6,
        "name": "Science & Nature",
        "slug": "science-nature",
        "description": "Dive into the mysteries of the natural world and scientific breakthroughs."
      }
]
