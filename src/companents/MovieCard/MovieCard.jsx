import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({title,reyting, data,img,key, id}) => {
  return (
      <Link to={`/single-movie/${id}`}>
      <div className=' relative top-32 m-4 h-[28rem] w-60 overflow-hidden rounded-lg bg-blue-200 p-5' key={key}>
        <img className='cdd rounded-lg shadow-lg'
          src={img}
          alt="img"
        />
        <h2 className=' mt-4 text-2xl font-bold text-purple-500'>{title}</h2>
        <span className=' absolute right-0 top-0 rounded-tl-lg bg-green-500 p-2 text-white'>{reyting}</span>
        <span className=' text-lg text-gray-600'>{data}</span>
      </div>
      </Link>
  )
}

export default MovieCard 