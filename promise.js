
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


async function main() {

  try {
    await createPost('first post');
    await createPost('second post');
    await createPost('third post');
    await updateLastUserActivityTime();

    for (let i = 0; i < blog.length; i++) {
      const element = blog[i].title;
      console.log(element);
    }
    console.log(lastActivityTime)

    await deletePost();

    for (let i = 0; i < blog.length; i++) {
      const element = blog[i].title;
      console.log(element);
    }
    console.log(lastActivityTime)

  } catch (error) {
    console.log(error.message)
  }

}

main()


