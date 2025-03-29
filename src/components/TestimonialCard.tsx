
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
}

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  avatar,
  rating,
  date,
  text
}) => {
  return (
    <Card className="h-full card-hover">
      <CardContent className="p-6">
        {/* Rating */}
        <div className="flex mb-4">
          {Array(5).fill(0).map((_, i) => (
            <Star 
              key={i}
              className={`h-5 w-5 ${i < rating 
                ? 'text-yellow-500 fill-yellow-500' 
                : 'text-gray-300'}`}
            />
          ))}
        </div>
        
        {/* Testimonial text */}
        <p className="text-gray-700 mb-6 line-clamp-4">{text}</p>
        
        {/* User info */}
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium text-gray-900">{name}</h4>
            <p className="text-sm text-gray-500">{date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
