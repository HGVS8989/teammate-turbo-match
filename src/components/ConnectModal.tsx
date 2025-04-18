
import React, { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { UserProfile } from '@/utils/data';
import { useToast } from "@/hooks/use-toast";

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: UserProfile | null;
}

const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose, profile }) => {
  const [message, setMessage] = useState('');
  const { toast } = useToast();
  
  const handleSend = () => {
    if (!message.trim()) {
      toast({
        title: "Message Required",
        description: "Please write a message to connect with this person.",
        variant: "destructive",
      });
      return;
    }
    
    toast({
      title: "Message Sent!",
      description: `Your connection request has been sent to ${profile?.name}.`,
    });
    
    setMessage('');
    onClose();
  };
  
  if (!profile) return null;
  
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Connect with {profile.name}</DialogTitle>
          <DialogDescription>
            Send a message to introduce yourself and explain why you'd like to team up.
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex items-center space-x-4 py-4">
          <Avatar>
            <AvatarImage src={profile.avatar} alt={profile.name} />
            <AvatarFallback>{profile.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div>
            <h4 className="font-medium">{profile.name}</h4>
            <p className="text-sm text-muted-foreground">{profile.title}</p>
          </div>
        </div>
        
        <Textarea
          placeholder="Hi! I'd like to connect for the upcoming hackathon..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="min-h-[100px]"
        />
        
        <DialogFooter className="sm:justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button 
            onClick={handleSend}
            className="bg-hackathon-purple hover:bg-hackathon-purple/90 text-white"
          >
            Send Message
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ConnectModal;
