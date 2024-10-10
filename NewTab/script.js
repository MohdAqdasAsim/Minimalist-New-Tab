const quotesArray = [
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "quote": "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "author": "Nelson Mandela"
    },
    {
      "quote": "In three words I can sum up everything I've learned about life: it goes on.",
      "author": "Robert Frost"
    },
    {
      "quote": "The only impossible journey is the one you never begin.",
      "author": "Tony Robbins"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "The way to get started is to quit talking and begin doing.",
      "author": "Walt Disney"
    },
    {
      "quote": "Your time is limited, don't waste it living someone else's life.",
      "author": "Steve Jobs"
    },
    {
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    },
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "You miss 100% of the shots you don't take.",
      "author": "Wayne Gretzky"
    },
    {
      "quote": "The only thing we have to fear is fear itself.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "It does not matter how slowly you go as long as you do not stop.",
      "author": "Confucius"
    },
    {
      "quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.",
      "author": "Winston Churchill"
    },
    {
      "quote": "The best way to predict the future is to invent it.",
      "author": "Alan Kay"
    },
    {
      "quote": "The only limit to our realization of tomorrow will be our doubts of today.",
      "author": "Franklin D. Roosevelt"
    },
    {
      "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
      "author": "Abraham Lincoln"
    },
    {
      "quote": "Life is what happens when you're busy making other plans.",
      "author": "John Lennon"
    },
    {
      "quote": "You must be the change you wish to see in the world.",
      "author": "Mahatma Gandhi"
    },
    {
      "quote": "Strive not to be a success, but rather to be of value.",
      "author": "Albert Einstein"
    },
    {
      "quote": "If you want to lift yourself up, lift up someone else.",
      "author": "Booker T. Washington"
    },
    {
      "quote": "The only way to do great work is to love what you do.",
      "author": "Steve Jobs"
    },
    {
      "quote": "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment.",
      "author": "Buddha"
    },
    {
      "quote": "Life is 10% what happens to us and 90% how we react to it.",
      "author": "Charles R. Swindoll"
    },
    {
      "quote": "It is during our darkest moments that we must focus to see the light.",
      "author": "Aristotle"
    },
    {
      "quote": "The only impossible journey is the one you never begin.",
      "author": "Tony Robbins"
    },
    {
      "quote": "Believe you can and you're halfway there.",
      "author": "Theodore Roosevelt"
    },
    {
      "quote": "The future belongs"
    }
  ]

const quoteBox = document.getElementById("quote");
const authorBox = document.getElementById("author");
const randomNumber = Math.floor(Math.random() * (quotesArray.length + 1));

quoteBox.textContent = '"'+quotesArray[randomNumber].quote+'"';
authorBox.textContent = '- '+quotesArray[randomNumber].author;