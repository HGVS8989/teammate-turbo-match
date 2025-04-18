
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { UserProfile } from '@/utils/data';
import { MapPin, MessageSquare, Calendar } from 'lucide-react';

interface ProfileCardProps {
  profile: UserProfile;
  onConnect: (profile: UserProfile) => void;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile, onConnect }) => {
  return (
    <Card className="rounded-lg overflow-hidden card-hover">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <Avatar className="h-16 w-16">
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h3 className="font-semibold text-lg">{profile.name}</h3>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{profile.location}</span>
              {profile.isRemote && (
                <Badge variant="outline" className="ml-2 location-badge">
                  Remote
                </Badge>
              )}
            </div>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-sm text-gray-600 line-clamp-2">{profile.bio}</p>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {profile.skills.map((skill) => (
              <Badge key={skill.id} variant="outline" className="skill-badge">
                {skill.name}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="mt-4">
          <h4 className="text-sm font-medium mb-2">Interested in</h4>
          <div className="flex flex-wrap gap-2">
            {profile.hackathonsInterested.map((hackathon) => (
              <Badge key={hackathon.id} variant="outline" className="hackathon-badge">
                <Calendar className="h-3 w-3 mr-1" />
                {hackathon.name}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="bg-gray-50 px-6 py-4">
        <Button 
          onClick={() => onConnect(profile)} 
          className="w-full bg-hackathon-purple hover:bg-hackathon-purple/90 text-white"
        >
          <MessageSquare className="h-4 w-4 mr-2" />
          Connect
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProfileCard;
