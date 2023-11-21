
// console.log('Going to work on js projects');

let blog = [];
let lastActivityTime;

function createPost(title) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = { title, timeStamp: new Date() };
      blog.push(post);
      resolve(post);
    }, 2000)
  })
}

//delete post

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (blog.length > 0) {
        var poppedItem = blog.pop();
        resolve(poppedItem);
      }
      else {
        reject(new Error('No post to delete'));
      }
    }, 1000)
  })
}

//updateLastUserActivityTime

function updateLastUserActivityTime() {
  return new Promise((resolve, reject) => {
    lastActivityTime = new Date();
    resolve(lastActivityTime);
  })
}


createPost('First Post')
  .then(() => createPost('Second Post'))
  .then(() => createPost('Third Post'))
  .then(updateLastUserActivityTime)
  .then(() => {
    for (let i = 0; i < blog.length; i++) {
      const element = blog[i].title;
      console.log(element);
    }
    console.log(lastActivityTime);
  })
  .then(() => deletePost()
  )
  .then(() => {
    for (let i = 0; i < blog.length; i++) {
      const element = blog[i].title;
      console.log(element);
    }
    console.log(lastActivityTime);
  })
  .catch((error) => {
    console.error(error.message);
  });



