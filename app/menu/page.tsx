import { menu } from "@/data"
import Link from "next/link"

const MenuPage = () => {
  return (
    // Menu Container
    <div className="lg:px-20 xl:px-40 p-4 h-[calc(100vh-6rem) md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center">
      {
        menu.map((category) =>  (
          <Link key={category.id} href={`/menu/${category.slug}`}
          style={{backgroundImage:`url(${category.img})`}}
          className="w-full h-1/3 bg-cover p-8 md:h-1/2"
          >
            {/* Text Container */}
            <div className={`text-${category.color} w-1/2`}>
              <h1 className="uppercase font-bold text-3xl">{category.title}</h1>
              <p className="text-sm my-8">{category.desc}</p>
              <button className={`hidden 2xl:block bg-${category.color} text-${category.color === "black" ? "white" : "red-500"} py-2 px-4 rounded-md`}>Explore</button>
            </div>
          </Link>
         ) )
      }
    </div>
  )
}

export default MenuPage
