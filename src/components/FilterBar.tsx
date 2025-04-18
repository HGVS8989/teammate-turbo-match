
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Search, Filter, X } from 'lucide-react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Badge } from '@/components/ui/badge';
import { skillsData, hackathonsData } from '@/utils/data';

interface FilterBarProps {
  onFilterChange: (filters: {
    searchTerm: string;
    skills: string[];
    hackathons: string[];
    locations: string[];
    remoteOnly: boolean;
  }) => void;
}

const FilterBar: React.FC<FilterBarProps> = ({ onFilterChange }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedHackathons, setSelectedHackathons] = useState<string[]>([]);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [remoteOnly, setRemoteOnly] = useState(false);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleSearch = () => {
    onFilterChange({
      searchTerm,
      skills: selectedSkills,
      hackathons: selectedHackathons,
      locations: selectedLocations,
      remoteOnly,
    });
  };

  const handleSkillSelect = (skillId: string) => {
    if (selectedSkills.includes(skillId)) {
      setSelectedSkills(selectedSkills.filter(id => id !== skillId));
    } else {
      setSelectedSkills([...selectedSkills, skillId]);
    }
  };

  const handleHackathonSelect = (hackathonId: string) => {
    if (selectedHackathons.includes(hackathonId)) {
      setSelectedHackathons(selectedHackathons.filter(id => id !== hackathonId));
    } else {
      setSelectedHackathons([...selectedHackathons, hackathonId]);
    }
  };

  const handleLocationSelect = (location: string) => {
    if (selectedLocations.includes(location)) {
      setSelectedLocations(selectedLocations.filter(loc => loc !== location));
    } else {
      setSelectedLocations([...selectedLocations, location]);
    }
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedHackathons([]);
    setSelectedLocations([]);
    setRemoteOnly(false);
    onFilterChange({
      searchTerm: '',
      skills: [],
      hackathons: [],
      locations: [],
      remoteOnly: false,
    });
  };

  const getSelectedSkillNames = () => {
    return selectedSkills.map(id => 
      skillsData.find(skill => skill.id === id)?.name || ''
    );
  };

  const getSelectedHackathonNames = () => {
    return selectedHackathons.map(id => 
      hackathonsData.find(hackathon => hackathon.id === id)?.name || ''
    );
  };

  // Extract unique locations from hackathons data
  const locations = Array.from(new Set(hackathonsData.map(h => h.location)));

  return (
    <div className="w-full bg-white p-4 rounded-lg shadow-sm border border-gray-100 mb-6">
      <div className="flex flex-col md:flex-row gap-4">
        <div className="flex-grow relative">
          <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
          <Input
            placeholder="Search by name, skills, or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        
        <Popover open={isFilterOpen} onOpenChange={setIsFilterOpen}>
          <PopoverTrigger asChild>
            <Button variant="outline" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filters</span>
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80 md:w-96">
            <div className="space-y-4">
              <div>
                <Label htmlFor="skills">Skills</Label>
                <Select>
                  <SelectTrigger id="skills">
                    <SelectValue placeholder="Select skills" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Frontend</SelectLabel>
                      {skillsData.filter(s => s.category === 'frontend').map(skill => (
                        <SelectItem
                          key={skill.id}
                          value={skill.id}
                          onClick={() => handleSkillSelect(skill.id)}
                        >
                          {skill.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Backend</SelectLabel>
                      {skillsData.filter(s => s.category === 'backend').map(skill => (
                        <SelectItem
                          key={skill.id}
                          value={skill.id}
                          onClick={() => handleSkillSelect(skill.id)}
                        >
                          {skill.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Design</SelectLabel>
                      {skillsData.filter(s => s.category === 'design').map(skill => (
                        <SelectItem
                          key={skill.id}
                          value={skill.id}
                          onClick={() => handleSkillSelect(skill.id)}
                        >
                          {skill.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                    <SelectGroup>
                      <SelectLabel>Other</SelectLabel>
                      {skillsData.filter(s => 
                        !['frontend', 'backend', 'design'].includes(s.category)
                      ).map(skill => (
                        <SelectItem
                          key={skill.id}
                          value={skill.id}
                          onClick={() => handleSkillSelect(skill.id)}
                        >
                          {skill.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="hackathons">Hackathons</Label>
                <Select>
                  <SelectTrigger id="hackathons">
                    <SelectValue placeholder="Select hackathons" />
                  </SelectTrigger>
                  <SelectContent>
                    {hackathonsData.map(hackathon => (
                      <SelectItem
                        key={hackathon.id}
                        value={hackathon.id}
                        onClick={() => handleHackathonSelect(hackathon.id)}
                      >
                        {hackathon.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <Label htmlFor="locations">Locations</Label>
                <Select>
                  <SelectTrigger id="locations">
                    <SelectValue placeholder="Select locations" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map(location => (
                      <SelectItem
                        key={location}
                        value={location}
                        onClick={() => handleLocationSelect(location)}
                      >
                        {location}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  id="remoteOnly"
                  checked={remoteOnly}
                  onChange={() => setRemoteOnly(!remoteOnly)}
                  className="rounded border-gray-300 text-hackathon-purple focus:ring-hackathon-purple"
                />
                <Label htmlFor="remoteOnly">Remote Only</Label>
              </div>
              
              <div className="flex justify-between">
                <Button variant="outline" onClick={clearFilters} className="flex items-center">
                  <X className="h-4 w-4 mr-1" />
                  Clear Filters
                </Button>
                <Button 
                  onClick={() => {
                    handleSearch();
                    setIsFilterOpen(false);
                  }}
                  className="bg-hackathon-purple hover:bg-hackathon-purple/90 text-white"
                >
                  Apply Filters
                </Button>
              </div>
            </div>
          </PopoverContent>
        </Popover>
        
        <Button 
          onClick={handleSearch}
          className="bg-hackathon-purple hover:bg-hackathon-purple/90 text-white"
        >
          Search
        </Button>
      </div>
      
      {/* Active Filters */}
      {(selectedSkills.length > 0 || selectedHackathons.length > 0 || selectedLocations.length > 0 || remoteOnly) && (
        <div className="mt-4 flex flex-wrap gap-2 items-center">
          <span className="text-sm text-gray-500">Active Filters:</span>
          
          {getSelectedSkillNames().map((skill, index) => (
            <Badge key={`skill-${index}`} variant="outline" className="skill-badge">
              {skill}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleSkillSelect(selectedSkills[index])}
              />
            </Badge>
          ))}
          
          {getSelectedHackathonNames().map((hackathon, index) => (
            <Badge key={`hackathon-${index}`} variant="outline" className="hackathon-badge">
              {hackathon}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleHackathonSelect(selectedHackathons[index])}
              />
            </Badge>
          ))}
          
          {selectedLocations.map((location, index) => (
            <Badge key={`location-${index}`} variant="outline" className="location-badge">
              {location}
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => handleLocationSelect(location)}
              />
            </Badge>
          ))}
          
          {remoteOnly && (
            <Badge variant="outline" className="location-badge">
              Remote Only
              <X 
                className="h-3 w-3 ml-1 cursor-pointer" 
                onClick={() => setRemoteOnly(false)}
              />
            </Badge>
          )}
          
          <Button 
            variant="ghost" 
            className="text-xs h-auto py-1 px-2" 
            onClick={clearFilters}
          >
            Clear All
          </Button>
        </div>
      )}
    </div>
  );
};

export default FilterBar;
