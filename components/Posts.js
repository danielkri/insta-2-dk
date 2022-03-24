import React from 'react'
import Post from './Post'

const posts = [
  {
    id: 123,
    username: 'daniel',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C5603AQETq7-WpTCd5A/profile-displayphoto-shrink_100_100/0/1516999750846?e=1653523200&v=beta&t=ZHbfAHRpCddScUeYk1G3MGFDeT1meNRLM6mo9FAqCBM',
    img: 'https://links.papareact.com/3ke',
    caption: 'Hello world',
  },
  {
    id: 124,
    username: 'daniel',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C5603AQETq7-WpTCd5A/profile-displayphoto-shrink_100_100/0/1516999750846?e=1653523200&v=beta&t=ZHbfAHRpCddScUeYk1G3MGFDeT1meNRLM6mo9FAqCBM',
    img: 'https://links.papareact.com/3ke',
    caption: 'Hello world',
  },
  {
    id: 125,
    username: 'daniel',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C5603AQETq7-WpTCd5A/profile-displayphoto-shrink_100_100/0/1516999750846?e=1653523200&v=beta&t=ZHbfAHRpCddScUeYk1G3MGFDeT1meNRLM6mo9FAqCBM',
    img: 'https://links.papareact.com/3ke',
    caption: 'Hello world',
  },
  {
    id: 126,
    username: 'daniel',
    userImg:
      'https://media-exp1.licdn.com/dms/image/C5603AQETq7-WpTCd5A/profile-displayphoto-shrink_100_100/0/1516999750846?e=1653523200&v=beta&t=ZHbfAHRpCddScUeYk1G3MGFDeT1meNRLM6mo9FAqCBM',
    img: 'https://links.papareact.com/3ke',
    caption: 'Hello world',
  },
]

function Posts() {
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  )
}

export default Posts
