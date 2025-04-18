
import React, { useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from '@/components/ui/badge';
import { X } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Skill, Hackathon, skillsData, hackathonsData } from '@/utils/data';

interface CreateProfileFormProps {
  isOpen: boolean;
  onClose: () => void;
}

const CreateProfileForm: React.FC<CreateProfileFormProps> = ({ isOpen, onClose }) => {
  const { toast } = useToast();
  
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [isRemote, setIsRemote] = useState(false);
  const [bio, setBio] = useState('');
  const [email, setEmail] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<Skill[]>([]);
  const [selectedHackathons, setSelectedHackathons] = useState<Hackathon[]>([]);

  const handleAddSkill = (skillId: string) => {
    const skill = skillsData.find(s => s.id === skillId);
    if (skill && !selectedSkills.some(s => s.id === skillId)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleRemoveSkill = (skillId: string) => {
    setSelectedSkills(selectedSkills.filter(skill => skill.id !== skillId));
  };

  const handleAddHackathon = (hackathonId: string) => {
    const hackathon = hackathonsData.find(h => h.id === hackathonId);
    if (hackathon && !selectedHackathons.some(h => h.id === hackathonId)) {
      setSelectedHackathons([...selectedHackathons, hackathon]);
    }
  };

  const handleRemoveHackathon = (hackathonId: string) => {
    setSelectedHackathons(selectedHackathons.filter(hackathon => hackathon.id !== hackathonId));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !title || !location || !bio || !email) {
      toast({
        title: "Incomplete Form",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }
    
    if (selectedSkills.length === 0) {
      toast({
        title: "Skills Required",
        description: "Please select at least one skill.",
        variant: "destructive",
      });
      return;
    }
    
    // In a real app, this would send the data to a server
    toast({
      title: "Profile Created!",
      description: "Your profile has been created successfully.",
    });
    
    // Reset form
    setName('');
    setTitle('');
    setLocation('');
    setIsRemote(false);
    setBio('');
    setEmail('');
    setSelectedSkills([]);
    setSelectedHackathons([]);
    
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Create Your Profile</DialogTitle>
          <DialogDescription>
            Fill in your details to start finding hackathon teammates.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 py-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name">Full Name</Label>
              <Input 
                id="name" 
                value={name} 
                onChange={(e) => setName(e.target.value)} 
                placeholder="John Doe" 
                required 
              />
            </div>
            
            <div>
              <Label htmlFor="title">Professional Title</Label>
              <Input 
                id="title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Frontend Developer" 
                required 
              />
            </div>
            
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input 
                id="email" 
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="john@example.com" 
                required 
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="location">Location</Label>
                <Input 
                  id="location" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                  placeholder="City, Country" 
                  required 
                />
              </div>
              
              <div className="flex items-center space-x-2 h-full pt-6">
                <input
                  type="checkbox"
                  id="isRemote"
                  checked={isRemote}
                  onChange={() => setIsRemote(!isRemote)}
                  className="rounded border-gray-300 text-hackathon-purple focus:ring-hackathon-purple"
                />
                <Label htmlFor="isRemote">Available for Remote Hackathons</Label>
              </div>
            </div>
            
            <div>
              <Label htmlFor="bio">Bio</Label>
              <Textarea 
                id="bio" 
                value={bio} 
                onChange={(e) => setBio(e.target.value)} 
                placeholder="Tell potential teammates about yourself, your experience, and what kind of projects you're interested in..." 
                className="min-h-[100px]" 
                required 
              />
            </div>
            
            <div>
              <Label htmlFor="skills">Skills</Label>
              <Select onValueChange={handleAddSkill}>
                <SelectTrigger id="skills">
                  <SelectValue placeholder="Select skills" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Frontend</SelectLabel>
                    {skillsData.filter(s => s.category === 'frontend').map(skill => (
                      <SelectItem key={skill.id} value={skill.id}>
                        {skill.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Backend</SelectLabel>
                    {skillsData.filter(s => s.category === 'backend').map(skill => (
                      <SelectItem key={skill.id} value={skill.id}>
                        {skill.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Design</SelectLabel>
                    {skillsData.filter(s => s.category === 'design').map(skill => (
                      <SelectItem key={skill.id} value={skill.id}>
                        {skill.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                  <SelectGroup>
                    <SelectLabel>Other</SelectLabel>
                    {skillsData.filter(s => 
                      !['frontend', 'backend', 'design'].includes(s.category)
                    ).map(skill => (
                      <SelectItem key={skill.id} value={skill.id}>
                        {skill.name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
              
              {selectedSkills.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedSkills.map(skill => (
                    <Badge key={skill.id} variant="outline" className="skill-badge">
                      {skill.name}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => handleRemoveSkill(skill.id)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
            
            <div>
              <Label htmlFor="hackathons">Interested in Hackathons</Label>
              <Select onValueChange={handleAddHackathon}>
                <SelectTrigger id="hackathons">
                  <SelectValue placeholder="Select hackathons" />
                </SelectTrigger>
                <SelectContent>
                  {hackathonsData.map(hackathon => (
                    <SelectItem key={hackathon.id} value={hackathon.id}>
                      {hackathon.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              
              {selectedHackathons.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {selectedHackathons.map(hackathon => (
                    <Badge key={hackathon.id} variant="outline" className="hackathon-badge">
                      {hackathon.name}
                      <X 
                        className="h-3 w-3 ml-1 cursor-pointer" 
                        onClick={() => handleRemoveHackathon(hackathon.id)}
                      />
                    </Badge>
                  ))}
                </div>
              )}
            </div>
          </div>
          
          <div className="flex justify-end space-x-2">
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              type="submit"
              className="bg-hackathon-purple hover:bg-hackathon-purple/90 text-white"
            >
              Create Profile
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProfileForm;
