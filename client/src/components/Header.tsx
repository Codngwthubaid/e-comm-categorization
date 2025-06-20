import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export default function Header ()  {
  
  return (
    <header className="w-full border-b sticky top-0 bg-white z-50">
      <div className="flex items-center justify-between px-6 py-4 text-sm">
        <div className="font-bold text-xl">ECOMMERCE</div>

        <nav className="hidden md:flex space-x-6">
          <a href="#" className="hover:underline">Categories</a>
          <a href="#" className="hover:underline">Sale</a>
          <a href="#" className="hover:underline">Clearance</a>
          <a href="#" className="hover:underline">New stock</a>
          <a href="#" className="hover:underline">Trending</a>
        </nav>

        <div className="md:hidden">
          <Sheet defaultOpen={false}>
            <SheetTrigger>
              <Menu className="w-6 h-6" />
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col space-y-4 mt-8">
                <a href="#" className="hover:underline">Categories</a>
                <a href="#" className="hover:underline">Sale</a>
                <a href="#" className="hover:underline">Clearance</a>
                <a href="#" className="hover:underline">New stock</a>
                <a href="#" className="hover:underline">Trending</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <div className="hidden md:flex space-x-4">
          <span className="text-gray-600">Help</span>
          <span className="text-gray-600">Orders & Returns</span>
          <span className="text-gray-600">Hi, Ubaid</span>
        </div>
      </div>

      <div className="bg-gray-100 text-center py-2 text-sm">
        <span className="text-gray-700">Get 10% off on business sign up</span>
      </div>
    </header>
  );
};
