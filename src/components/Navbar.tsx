
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search, MessageSquare, User, Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar: React.FC = () => {
  return (
    <nav className="w-full py-4 border-b border-gray-200 bg-white shadow-sm fixed top-0 left-0 right-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="text-2xl font-bold bg-gradient-to-r from-hackathon-purple to-hackathon-blue bg-clip-text text-transparent">
            HackMatch
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Button variant="ghost" className="text-gray-600 hover:text-hackathon-purple">
            <Search className="h-5 w-5 mr-2" />
            Find Teammates
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-hackathon-purple">
            <MessageSquare className="h-5 w-5 mr-2" />
            Messages
          </Button>
          <Button variant="ghost" className="text-gray-600 hover:text-hackathon-purple">
            <User className="h-5 w-5 mr-2" />
            Profile
          </Button>
          <Button className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:opacity-90 text-white">
            Create Profile
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>HackMatch</SheetTitle>
                <SheetDescription>
                  Find your perfect hackathon teammates.
                </SheetDescription>
              </SheetHeader>
              <div className="flex flex-col space-y-4 mt-6">
                <Button variant="ghost" className="justify-start">
                  <Search className="h-5 w-5 mr-2" />
                  Find Teammates
                </Button>
                <Button variant="ghost" className="justify-start">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Messages
                </Button>
                <Button variant="ghost" className="justify-start">
                  <User className="h-5 w-5 mr-2" />
                  Profile
                </Button>
                <Button className="bg-gradient-to-r from-hackathon-purple to-hackathon-blue hover:opacity-90 text-white">
                  Create Profile
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
