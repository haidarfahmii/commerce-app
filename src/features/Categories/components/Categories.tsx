import { ArrowRight } from "lucide-react";

export default function Categories() {
  return (
    <section className="py-16 px-4 md:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-gray-100 p-8 rounded-lg h-96 flex flex-col justify-end">
        <h3 className="text-2xl font-bold">Living Room</h3>
        <a href="#" className="font-medium hover:underline flex items-center">
          Shop Now <ArrowRight size={16} className="ml-1" />
        </a>
      </div>
      <div className="grid grid-rows-2 gap-8">
        <div className="bg-gray-100 p-8 rounded-lg h-full flex flex-col justify-end">
          <h3 className="text-2xl font-bold">Bedroom</h3>
          <a href="#" className="font-medium hover:underline flex items-center">
            Shop Now <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
        <div className="bg-gray-100 p-8 rounded-lg h-full flex flex-col justify-end">
          <h3 className="text-2xl font-bold">Kitchen</h3>
          <a href="#" className="font-medium hover:underline flex items-center">
            Shop Now <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
