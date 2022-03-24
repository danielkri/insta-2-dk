import React, { useEffect, useState } from 'react'
import faker from '@faker-js/faker'
import Story from './Story'

function Stories() {
  const [suggestions, setSuggestion] = useState([])

  useEffect(() => {
    const suggestions = [...Array(20)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }))

    setSuggestion(suggestions)
  }, [])

  return (
    <div className="scrolbar mt-8 flex space-x-2 overflow-scroll rounded-sm border border-gray-200 bg-white p-6 scrollbar-thin scrollbar-thumb-black">
      {suggestions.map((profile) => (
        <Story
          key={profile.id}
          img={profile.avatar}
          username={profile.username}
        />
      ))}
    </div>
  )
}

export default Stories
