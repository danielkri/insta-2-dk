import React from 'react'
import {
  BookmarkIcon,
  ChatIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  HeartIcon,
  PaperAirplaneIcon,
} from '@heroicons/react/outline'
import { HeartIcon as HeartIconFilled } from '@heroicons/react/solid'

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className="my-7 rounded-sm border bg-white">
      <div className="flex items-center p-5">
        <img
          className="h-12 rounded-full border object-contain p-1"
          src={userImg}
          alt="post user pic"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      <img className=" w-full object-cover" src={img} alt="post image" />
      <div className="flex px-4 pt-4">
        <div className="flex flex-1 space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>
      {/* {likes} */}

      <p className="truncate p-5">
        <span className=" mr-1 font-bold">{username} </span>
        {caption}
      </p>
      {/* {comments} */}

      <form className="flex items-center p-4">
        <EmojiHappyIcon className="h-7" />
        <input
          className="flex-1 border-none outline-none focus:ring-0"
          type="text"
          placeholder="Add comment..."
        />
        <button className=" font-semibold text-blue-400">Post</button>
      </form>
    </div>
  )
}

export default Post
