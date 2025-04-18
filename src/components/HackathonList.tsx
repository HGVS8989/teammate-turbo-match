
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { hackathonsData } from '@/utils/data';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const HackathonList: React.FC = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Upcoming Hackathons</h2>
      
      {hackathonsData.map((hackathon) => (
        <Card key={hackathon.id} className="card-hover">
          <CardHeader className="pb-2">
            <div className="flex justify-between items-start">
              <CardTitle className="text-lg font-semibold">{hackathon.name}</CardTitle>
              {hackathon.isOnline ? (
                <Badge variant="outline" className="location-badge">Online</Badge>
              ) : (
                <Badge variant="outline" className="skill-badge">In-Person</Badge>
              )}
            </div>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center text-gray-600">
                <Calendar className="h-4 w-4 mr-2" />
                <span className="text-sm">{formatDate(hackathon.date)}</span>
              </div>
              
              <div className="flex items-center text-gray-600">
                <MapPin className="h-4 w-4 mr-2" />
                <span className="text-sm">{hackathon.location}</span>
              </div>
              
              {hackathon.url && (
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="mt-2 w-full"
                  onClick={() => window.open(hackathon.url, '_blank')}
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  Visit Website
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default HackathonList;
