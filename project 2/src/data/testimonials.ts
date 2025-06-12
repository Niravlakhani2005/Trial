export interface Testimonial {
  id: number;
  name: string;
  age: string;
  role: string;
  text: string;
  books: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arya Sharma",
    age: "22",
    role: "MBA Student",
    text: "The MBA Starter Pack literally changed my perspective on business. I went from confused first-year to landing my dream internship. These books gave me the framework I needed to think like an entrepreneur.",
    books: "MBA Starter Pack + 3 Singles"
  },
  {
    id: 2,
    name: "Priya Patel",
    age: "19",
    role: "College Student", 
    text: "I used to struggle with procrastination until I got the Productivity Booster combo. Now my friends ask me how I manage to get so much done. Deep Work especially was a game-changer for my study sessions.",
    books: "Productivity Booster"
  },
  {
    id: 3,
    name: "Rohan Gupta",
    age: "25",
    role: "Software Engineer",
    text: "Started my side hustle after reading the Finance Mastery pack. The Psychology of Money helped me understand my relationship with money, and now I'm actually saving and investing smartly for the first time.",
    books: "Finance Mastery + Self-Help Toolkit"
  },
  {
    id: 4,
    name: "Kavya Nair",
    age: "21",
    role: "Psychology Major",
    text: "The Mental Wellness Pack came at the perfect time during my quarter-life crisis. Untamed especially helped me understand that it's okay to not have everything figured out. These books became my therapy.",
    books: "Mental Wellness Pack"
  },
  {
    id: 5,
    name: "Aadhya Singh",
    age: "20",
    role: "Content Creator",
    text: "As someone building their personal brand, the Self-Help Toolkit was exactly what I needed. Atomic Habits helped me create consistent content routines, and now my Instagram is actually growing organically!",
    books: "Self-Help Toolkit + Fiction Bundle"
  }
];