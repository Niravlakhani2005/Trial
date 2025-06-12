export interface BookCombo {
  id: number;
  name: string;
  books: string[];
  price: number;
  originalPrice: number;
}

export interface SingleBook {
  id: number;
  title: string;
  author: string;
  category: string;
  price: number;
  bestseller?: boolean;
}

export const bookCombos: BookCombo[] = [
  {
    id: 1,
    name: "MBA Starter Pack",
    books: [
      "Good to Great by Jim Collins",
      "The Lean Startup by Eric Ries",
      "Zero to One by Peter Thiel"
    ],
    price: 1299,
    originalPrice: 1599
  },
  {
    id: 2,
    name: "Self-Help Toolkit",
    books: [
      "Atomic Habits by James Clear",
      "The 7 Habits by Stephen Covey",
      "Mindset by Carol Dweck"
    ],
    price: 1199,
    originalPrice: 1499
  },
  {
    id: 3,
    name: "Productivity Booster",
    books: [
      "Deep Work by Cal Newport",
      "Getting Things Done by David Allen",
      "The Power of Now by Eckhart Tolle"
    ],
    price: 1099,
    originalPrice: 1399
  },
  {
    id: 4,
    name: "Finance Mastery",
    books: [
      "Rich Dad Poor Dad by Robert Kiyosaki",
      "The Psychology of Money by Morgan Housel",
      "Think and Grow Rich by Napoleon Hill"
    ],
    price: 999,
    originalPrice: 1299
  },
  {
    id: 5,
    name: "Mental Wellness Pack",
    books: [
      "The Subtle Art of Not Giving a F*ck by Mark Manson",
      "Untamed by Glennon Doyle",
      "The Four Agreements by Don Miguel Ruiz"
    ],
    price: 899,
    originalPrice: 1199
  },
  {
    id: 6,
    name: "Fiction Escape Bundle",
    books: [
      "The Seven Husbands of Evelyn Hugo",
      "Where the Crawdads Sing",
      "The Midnight Library by Matt Haig"
    ],
    price: 799,
    originalPrice: 1099
  }
];

export const singleBooks: SingleBook[] = [
  // Self-Help
  { id: 1, title: "Atomic Habits", author: "James Clear", category: "Self-Help", price: 499, bestseller: true },
  { id: 2, title: "The 7 Habits of Highly Effective People", author: "Stephen Covey", category: "Self-Help", price: 449 },
  { id: 3, title: "Mindset", author: "Carol Dweck", category: "Self-Help", price: 399 },
  { id: 4, title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", category: "Self-Help", price: 349, bestseller: true },
  
  // Business
  { id: 5, title: "Good to Great", author: "Jim Collins", category: "Business", price: 549, bestseller: true },
  { id: 6, title: "The Lean Startup", author: "Eric Ries", category: "Business", price: 479 },
  { id: 7, title: "Zero to One", author: "Peter Thiel", category: "Business", price: 429 },
  { id: 8, title: "The Hard Thing About Hard Things", author: "Ben Horowitz", category: "Business", price: 499 },
  
  // Finance
  { id: 9, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", category: "Finance", price: 399, bestseller: true },
  { id: 10, title: "The Psychology of Money", author: "Morgan Housel", category: "Finance", price: 449 },
  { id: 11, title: "Think and Grow Rich", author: "Napoleon Hill", category: "Finance", price: 349 },
  { id: 12, title: "The Intelligent Investor", author: "Benjamin Graham", category: "Finance", price: 599 },
  
  // Fiction
  { id: 13, title: "The Seven Husbands of Evelyn Hugo", author: "Taylor Jenkins Reid", category: "Fiction", price: 449, bestseller: true },
  { id: 14, title: "Where the Crawdads Sing", author: "Delia Owens", category: "Fiction", price: 399 },
  { id: 15, title: "The Midnight Library", author: "Matt Haig", category: "Fiction", price: 379 },
  { id: 16, title: "Klara and the Sun", author: "Kazuo Ishiguro", category: "Fiction", price: 499 },
  
  // Health
  { id: 17, title: "The Power of Now", author: "Eckhart Tolle", category: "Health", price: 429 },
  { id: 18, title: "Untamed", author: "Glennon Doyle", category: "Health", price: 399, bestseller: true },
  { id: 19, title: "The Four Agreements", author: "Don Miguel Ruiz", category: "Health", price: 299 },
  { id: 20, title: "Breath", author: "James Nestor", category: "Health", price: 449 },
  
  // Study
  { id: 21, title: "Deep Work", author: "Cal Newport", category: "Study", price: 479, bestseller: true },
  { id: 22, title: "Getting Things Done", author: "David Allen", category: "Study", price: 399 },
  { id: 23, title: "The Feynman Technique", author: "Richard Feynman", category: "Study", price: 349 },
  { id: 24, title: "Peak Performance", author: "Brad Stulberg", category: "Study", price: 429 },
];

export const categories = [
  "All",
  "Self-Help",
  "Business", 
  "Finance",
  "Fiction",
  "Health",
  "Study"
];