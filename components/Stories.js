import { useEffect, useState } from "react"
import { faker } from '@faker-js/faker';

import Story from './Story'

function Stories() {
    const [suggestion, setSuggestions] = useState([])
    useEffect(() => {
        const suggestion = [...Array(20)].map((_, i) => ({
            address: faker.address.ordinalDirection(),
            name: faker.name.firstName(),
            company: faker.company.companyName(),
            dob: faker.date.past(),
            email: faker.internet.email(),
            avatar: faker.image.image(),
            phone: faker.phone.phoneNumber(),
            username: faker.hacker.noun(),
            website: faker.internet.domainName(),
            id: i
        })) ;
        setSuggestions(suggestion);
    },[])

  return (
    <div className=" overflow-x-scroll  flex  space-x-2 p-6  shadow
    bg-white mt-8 border-gray-200 rounded-sm scrollbar-thin scrollbar-thumb-black">
        {suggestion.map((profile) => (
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