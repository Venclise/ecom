"use client";
import React, {  useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/spinner";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { SelectCat } from "@/constants"
import {  Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Inputs() {
  const [productInfo, setProductInfo] = useState<{
    title: string;
    price: string;
    description: string;
    img: File | null;
    category: string;
  }>({
    title: "",
    price: "",
    description: "",
    img: null,
    category: "",
  });

  const [preview,setPreview] = useState(null)

  const [loading, setIsLoading] = useState(false);
  
const router = useRouter()
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!productInfo.title || !productInfo.price || !productInfo.description || !productInfo.category) {
      toast.error("Please fill in all required fields");
      return;
    }

    setIsLoading(true);

    const formData = new FormData();
    formData.append("title", productInfo.title);
    formData.append("price", productInfo.price);
    formData.append("description", productInfo.description);
    formData.append("category", productInfo.category);

    if (productInfo.img) {
      formData.append("img", productInfo.img);
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        toast.error("Something went wrong");
        setIsLoading(false);
        return;
      }
      
      
      toast.success("Product has been added successfully!");
   

    
      setProductInfo({
        title: "",
        price: "",
        description: "",
        img: null,
        category: "",
      });

      setPreview(null); 
      router.refresh()
  
      const fileInput = document.getElementById("picture") as HTMLInputElement;
      if (fileInput) fileInput.value = "";

    } catch (error) {
      toast.error("Failed to submit the product");
    } finally {
      setIsLoading(false);
      

    }
  };

  return (
    <form
      className="h-[90vh] flex items-center justify-center flex-col gap-4 w-full z-[100] overflow-y-scroll "
      onSubmit={handleSubmit}
    >
    
         <div className="h-[70%] w-full flex items-center justify-center bg-gray-50 relative overflow-hidden">
          {preview &&
          <Button variant="ghost" className="cursor-pointer absolute top-0 right-0 m-3 text-red-500 hover:text-red-500" onClick={() => setPreview(null)} >

          <Trash   className="text-red-500 w-5 h-5  "/> 
          Remove
          </Button> 
          }
  {preview ? (
    <img
      src={preview}
      alt="Preview"
      className="w-full h-full object-contain"
    />
  ) : (
    <label
      htmlFor="picture"
      className="font-bold text-black cursor-pointer w-full h-full flex items-center justify-center"
    >
      + Select a file
    </label>
  )}
</div>

 <Input
  id="picture"
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files?.[0] || null;

    setProductInfo({ ...productInfo, img: file });

    if (file) {

      setPreview(URL.createObjectURL(file));
    }
  }}
  required
  className="hidden"
/>

      
      <div className="w-full flex items-center gap-2">
        <Input
          placeholder="Enter product name"
          value={productInfo.title}
          onChange={(e) =>
            setProductInfo({ ...productInfo, title: e.target.value })
          }
          required
        />
        <Input
          placeholder="Enter price"
          value={productInfo.price}
          type="number"
          onChange={(e) =>
            setProductInfo({ ...productInfo, price: e.target.value })
          }
          required
        />
      </div>

        <Input 
        className="w-full text-wrap h-[7rem]"
          placeholder="Enter description"
          value={productInfo.description}
          onChange={(e) =>
            setProductInfo({ ...productInfo, description: e.target.value })
          }
          required
        />
      
         
  <div>

<p className="text-left text-sm p-2 text-gray-700">Select Category:</p>

<ToggleGroup type="single" className="w-full flex items-center flex-wrap gap-2  justify-center " aria-required variant="default">
       {SelectCat.map((cat) => (
         <ToggleGroupItem className="hover:rounded-full border  " key={cat} value={cat} onClick={(e) => setProductInfo({...productInfo,category:cat})}>
                   {cat.toUpperCase()}
                 </ToggleGroupItem>
               ))}  

</ToggleGroup>
               </div>

   
 

      <Button
        type="submit"
        className="mt-4 rounded-md  w-[80%] mx-auto flex items-center gap-2"
        disabled={loading}
      >
        {loading && <Spinner className="mr-2" />}
        {loading ? "Please wait": "  Add "}
      
      </Button>
    </form>
  );
}
