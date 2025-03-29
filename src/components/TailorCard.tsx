
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, MapPin, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface TailorType {
  id: string;
  name: string;
  avatar: string;
  location: string;
  rating: number;
  reviewCount: number;
  specialties: string[];
  isVerified: boolean;
  completedOrders: number;
}

interface TailorCardProps {
  tailor: TailorType;
}

const TailorCard: React.FC<TailorCardProps> = ({ tailor }) => {
  return (
    <Card className="overflow-hidden card-hover">
      <CardContent className="p-0">
        <div className="flex flex-col h-full">
          {/* Tailor Image + Verification Badge */}
          <div className="relative">
            <img 
              src={tailor.avatar}
              alt={`${tailor.name} - Tailor`}
              className="w-full h-48 object-cover"
            />
            {tailor.isVerified && (
              <div className="absolute top-2 right-2">
                <Badge className="bg-brand-purple text-white flex items-center gap-1">
                  <Check className="h-3 w-3" />
                  Verified
                </Badge>
              </div>
            )}
          </div>
          
          {/* Tailor Info */}
          <div className="p-4 flex flex-col flex-grow">
            <h3 className="font-semibold text-lg">{tailor.name}</h3>
            
            <div className="flex items-center text-sm text-gray-500 mt-1">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{tailor.location}</span>
            </div>
            
            {/* Rating */}
            <div className="flex items-center mt-2">
              <div className="flex">
                {Array(5).fill(0).map((_, i) => (
                  <Star 
                    key={i}
                    className={`h-4 w-4 ${i < Math.floor(tailor.rating) 
                      ? 'text-yellow-500 fill-yellow-500' 
                      : 'text-gray-300'}`}
                  />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">
                {tailor.rating.toFixed(1)} ({tailor.reviewCount} reviews)
              </span>
            </div>
            
            {/* Specialties */}
            <div className="flex flex-wrap gap-1 mt-3">
              {tailor.specialties.map((specialty, index) => (
                <Badge key={index} variant="secondary" className="bg-brand-light text-brand-purple">
                  {specialty}
                </Badge>
              ))}
            </div>
            
            <div className="text-sm text-gray-500 mt-3">
              {tailor.completedOrders} orders completed
            </div>
            
            {/* View Profile Button */}
            <div className="mt-4 pt-2 border-t border-gray-100">
              <Link to={`/tailors/${tailor.id}`}>
                <Button variant="outline" className="w-full border-brand-purple text-brand-purple hover:bg-brand-light">
                  View Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TailorCard;
