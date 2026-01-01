    import Inputs from '@/components/dashboard/Inputs'
import Products from '@/components/dashboard/Products'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

    export default function page() {

       

    return (
        <div className=" h-max w-full flex flex-col mt-24 p-5 justify-center items-center md:items-start">
            <h1 className='font-semibold text-black text-3xl'>
            Dashboard 
        </h1> 
<Dialog >
  <DialogTrigger className='m-5 h-[15rem] bg-gray-100 font-bold text-7xl w-[15rem] border-0 '>+</DialogTrigger>
  <DialogContent className='w-[100%] md:w-[50%] z-[100] py-2 '>
    <DialogHeader >
      <DialogTitle className='text-left'>Add a product</DialogTitle>
    </DialogHeader>
      <div className='w-full'>
       
      <Inputs />
    
      </div>
  </DialogContent>
</Dialog> 
<Products />


        </div>
    )
    }
