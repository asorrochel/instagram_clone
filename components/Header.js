import Image from "next/image"
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon
} from '@heroicons/react/outline'
import {
  HomeIcon
} from '@heroicons/react/solid'


function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
    <div className="flex items-center justify-between bg-white max-w-6xl cursor-pointer mx-5 lg:mx-auto">
      {/*Left */}
        <div className=" hidden relative lg:inline-flex h-24 w-24">
          <Image
            className=""
            src='https://links.papareact.com/ocw'
            objectFit="contain"
            layout="fill"
            alt=''
          />
        </div>
        <div className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer">
          <Image
             src='https://links.papareact.com/jjm'
             objectFit="contain"
             layout="fill"
             alt=''
          />
        </div>
      {/* Middle - Search Input Field */}
      <div className="max-w-xs">
        <div className="mt-1 relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <SearchIcon className="h-5 w-5 text-gray-500"/>
          </div>
          <input 
            className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md 
            focus:ring-black focus:border-black" 
            type="text" 
            placeholder="Search"
          />
      </div>
      </div>
      {/*Right */}
      <div className="flex items-center justify-end space-x-4">
        <HomeIcon className="navBtn"/>
        <MenuIcon className="h-6 md:hidden cursor-pointer"/>
        <div className="relative navBtn">
          <PaperAirplaneIcon className="navBtn rotate-45"/>
          <div className="absolute -top-2 -right-1 text-sm w-5 h-5 bg-red-500 rounded-full flex items-center justify-center 
          animate-pulse">3</div>
        </div>
        <PlusCircleIcon className="navBtn"/>
        <UserGroupIcon className="navBtn"/>
        <HeartIcon className="navBtn"/>

        <img  
          className="h-10 rounded-full cursor-pointer  " 
          src='https://links.papareact.com/3ke' 
          alt="" 
        />
      </div>
    </div>
    </div>
  )
}

export default Header