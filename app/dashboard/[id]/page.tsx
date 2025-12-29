import EditForm from "@/components/dashboard/EditForm"









export default async function EditPage( { params }: {params: { id: string }}) {
const {id} = await params


  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/products/${id}`
 , {
     cache: "no-store"
   })

  if (!res.ok) {
    console.log("Failed to fetch product")
    return null
  }

  const product = await res.json()
 

  return (
    <div className="h-screen w-full items-center justify-center mt-24 p-5 md:p-10">
        <h2 className="font-semibold text-2xl text-gray-600">
           Edit 
           <span className="text-black ml-2">

           {product.title} 
           </span>
            </h2> 

            <div className="w-full lg:w-[50%] ">

            <EditForm product={product}/> 
            </div>
    </div>
  )
}
