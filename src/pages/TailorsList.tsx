
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import TailorCard from '@/components/TailorCard';
import { mockTailors } from '@/data/mockData';
import { 
  Search, 
  MapPin, 
  CheckCircle, 
  Filter,
  X,
  Star
} from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";

const TailorsList = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [location, setLocation] = useState('');
  const [sortBy, setSortBy] = useState('rating');
  const [showFilters, setShowFilters] = useState(false);
  const [ratingFilter, setRatingFilter] = useState<number>(0);
  const [selectedSpecialties, setSelectedSpecialties] = useState<string[]>([]);
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  
  // All unique specialties from the mock data
  const allSpecialties = Array.from(
    new Set(
      mockTailors.flatMap(tailor => tailor.specialties)
    )
  ).sort();
  
  // Filter tailors based on all filters
  const filteredTailors = mockTailors
    .filter(tailor => 
      (searchQuery === '' || 
        tailor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        tailor.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
      ) &&
      (location === '' || tailor.location.includes(location)) &&
      (ratingFilter === 0 || tailor.rating >= ratingFilter) &&
      (selectedSpecialties.length === 0 || 
        selectedSpecialties.some(s => tailor.specialties.includes(s))) &&
      (!verifiedOnly || tailor.isVerified)
    )
    .sort((a, b) => {
      if (sortBy === 'rating') {
        return b.rating - a.rating;
      } else if (sortBy === 'reviews') {
        return b.reviewCount - a.reviewCount;
      } else if (sortBy === 'completed') {
        return b.completedOrders - a.completedOrders;
      }
      return 0;
    });
  
  const toggleSpecialty = (specialty: string) => {
    if (selectedSpecialties.includes(specialty)) {
      setSelectedSpecialties(selectedSpecialties.filter(s => s !== specialty));
    } else {
      setSelectedSpecialties([...selectedSpecialties, specialty]);
    }
  };
  
  const clearFilters = () => {
    setSearchQuery('');
    setLocation('');
    setSortBy('rating');
    setRatingFilter(0);
    setSelectedSpecialties([]);
    setVerifiedOnly(false);
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow bg-gray-50 py-12">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Find Your Perfect Tailor</h1>
              <p className="text-gray-600">Browse our network of trusted tailors and find the right match for your needs</p>
            </div>
            
            {/* Mobile Filter Toggle */}
            <Button 
              variant="outline"
              className="mt-4 md:hidden w-full flex items-center justify-center gap-2 border-brand-purple text-brand-purple"
              onClick={() => setShowFilters(!showFilters)}
            >
              {showFilters ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </div>
          
          {/* Top search bar */}
          <div className="bg-white p-4 rounded-lg shadow-sm mb-8">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="relative flex-grow">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name or specialty..."
                  className="pl-10"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="relative md:w-1/4">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Location..."
                  className="pl-10"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div className="md:w-1/5">
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger>
                    <SelectValue placeholder="Sort by..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="rating">Highest Rating</SelectItem>
                    <SelectItem value="reviews">Most Reviews</SelectItem>
                    <SelectItem value="completed">Most Orders Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Filters - Desktop (always visible) and Mobile (toggleable) */}
            <div className={`md:w-1/4 lg:w-1/5 ${showFilters ? 'block' : 'hidden md:block'}`}>
              <div className="bg-white rounded-lg shadow-sm p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-semibold text-lg">Filters</h3>
                  <Button 
                    variant="ghost" 
                    className="text-gray-500 h-auto p-1"
                    onClick={clearFilters}
                  >
                    Clear all
                  </Button>
                </div>
                
                {/* Verified Filter */}
                <div className="mb-5">
                  <div className="flex items-center space-x-2 mb-5">
                    <Checkbox 
                      id="verified" 
                      checked={verifiedOnly}
                      onCheckedChange={(checked) => setVerifiedOnly(checked as boolean)}
                    />
                    <label
                      htmlFor="verified"
                      className="flex items-center text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Verified Tailors Only
                      <CheckCircle className="w-4 h-4 ml-1 text-brand-purple" />
                    </label>
                  </div>
                </div>
                
                {/* Rating Filter */}
                <div className="mb-5">
                  <label className="block text-sm font-medium mb-2">
                    Minimum Rating: {ratingFilter === 0 ? 'Any' : ratingFilter.toFixed(1)}
                  </label>
                  <div className="px-1">
                    <Slider
                      value={[ratingFilter]}
                      min={0}
                      max={5}
                      step={0.5}
                      onValueChange={(value) => setRatingFilter(value[0])}
                      className="mt-2"
                    />
                    <div className="flex justify-between text-xs text-gray-500 mt-1">
                      <span>Any</span>
                      <div className="flex items-center">
                        5.0 <Star className="h-3 w-3 ml-0.5 fill-yellow-500 text-yellow-500" />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Specialties Filter */}
                <div>
                  <Accordion type="single" collapsible defaultValue="specialties">
                    <AccordionItem value="specialties" className="border-none">
                      <AccordionTrigger className="py-2 font-medium text-base">
                        Specialties
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {allSpecialties.map((specialty) => (
                            <div className="flex items-center space-x-2" key={specialty}>
                              <Checkbox 
                                id={`specialty-${specialty}`}
                                checked={selectedSpecialties.includes(specialty)}
                                onCheckedChange={() => toggleSpecialty(specialty)}
                              />
                              <label
                                htmlFor={`specialty-${specialty}`}
                                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                {specialty}
                              </label>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
              </div>
            </div>
            
            {/* Tailors Grid */}
            <div className="flex-grow">
              <div className="mb-4 flex justify-between items-center">
                <p className="text-gray-600">
                  {filteredTailors.length} {filteredTailors.length === 1 ? 'tailor' : 'tailors'} found
                </p>
              </div>
              
              {filteredTailors.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredTailors.map(tailor => (
                    <TailorCard key={tailor.id} tailor={tailor} />
                  ))}
                </div>
              ) : (
                <div className="bg-white rounded-lg p-8 text-center">
                  <h3 className="text-xl font-semibold mb-2">No tailors found</h3>
                  <p className="text-gray-600 mb-4">
                    Try adjusting your filters or search criteria to see more results.
                  </p>
                  <Button 
                    variant="outline" 
                    className="border-brand-purple text-brand-purple"
                    onClick={clearFilters}
                  >
                    Clear All Filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default TailorsList;
