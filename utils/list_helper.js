const lodash = require("lodash");

const dummy = (blogs) => {
  blogs = 1;
  return blogs;
};

const totalLikes = (blogs) => {
  const reducer = (prev, curr) => {
    return prev + curr.likes;
  };
  return blogs.reduce(reducer, 0);
};

const favoriteBlog = (blogs) => {
  const reducer = (prev, curr) => {
    return prev.likes > curr.likes ? prev : curr;
  };
  const mostLiked = blogs.reduce(reducer, 0);
  console.log(mostLiked)

  return {
    title: mostLiked.title,
    author: mostLiked.author,
    likes: mostLiked.likes,
  };
};
// lodash.countBy(blogs.author,Math.floor) 
const mostBlogs = (blogs) => {

    // const authors = lodash(blogs)
    // .groupBy("author")
    // .





}

var arr = [
  {"question":"Q1","answer":"my answer 2"},
  {"question":"Q1","answer":"my answer"},
  {"question":"Q1","answer":"my answer"},
  {"question":"Q2","answer":"answer 2"}
  ];
  
  var result = lodash(arr)
    .groupBy('question')
    .map(function(item, itemId) {
      var obj = {};
      obj[itemId] = lodash.countBy(item, 'answer')
      return obj
    });
  
  console.log(JSON.stringify(result, null, 2));
















module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
};
