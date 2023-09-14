import { pizzas } from "@/data"
import Image from "next/image"
import Link from "next/link"

const CategoryPage = () => {
  return (
    <div className="flex flex-wrap text-red-500">
      {
        pizzas.map((item) => (
          // Individual Item
          <Link href={`/product/${item.id}`} key={item.id} className="w-full sm:w-1/2 lg:w-1/3 h-[60vh] border-r-2 border-b-2 border-red-500 p-4">
            {/* Image Container */}
            { item.img && <div className="relative h-[80%]">
              <Image alt="" src={item.img} fill className="object-contain"/>
            </div>}
             {/* Text Container */}
             <div className="flex flex-col items-center justify-between">
              <h1>{item.title}</h1>
              <h2>${item.price}</h2>
              <button className="p-2 bg-red-500 rounded-md text-white uppercase">Add To Cart</button>
             </div>
          </Link> 
        )) 
      }
    </div>
  )
}

export default CategoryPage