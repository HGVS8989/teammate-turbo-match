
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import FilterBar from '@/components/FilterBar';
import ProfileCard from '@/components/ProfileCard';
import HackathonList from '@/components/HackathonList';
import ConnectModal from '@/components/ConnectModal';
import CreateProfileForm from '@/components/CreateProfileForm';
import { UserProfile, usersData } from '@/utils/data';
import { Button } from '@/components/ui/button';
import { UserPlus } from 'lucide-react';

const Index = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>(usersData);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile | null>(null);
  const [isConnectModalOpen, setIsConnectModalOpen] = useState(false);
  const [isCreateProfileOpen, setIsCreateProfileOpen] = useState(false);

  const handleConnect = (profile: UserProfile) => {
    setSelectedProfile(profile);
    setIsConnectModalOpen(true);
  };

  const handleFilter = (filters: {
    searchTerm: string;
    skills: string[];
    hackathons: string[];
    locations: string[];
    remoteOnly: boolean;
  }) => {
    let filteredProfiles = [...usersData];
    
    // Filter by search term (name, title, bio)
    if (filters.searchTerm) {
      const searchTerm = filters.searchTerm.toLowerCase();
      filteredProfiles = filteredProfiles.filter(
        profile => 
          profile.name.toLowerCase().includes(searchTerm) ||
          profile.title.toLowerCase().includes(searchTerm) ||
          profile.bio.toLowerCase().includes(searchTerm) ||
          profile.location.toLowerCase().includes(searchTerm) ||
          profile.skills.some(skill => skill.name.toLowerCase().includes(searchTerm))
      );
    }
    
    // Filter by skills
    if (filters.skills.length > 0) {
      filteredProfiles = filteredProfiles.filter(
        profile => profile.skills.some(skill => filters.skills.includes(skill.id))
      );
    }
    
    // Filter by hackathons
    if (filters.hackathons.length > 0) {
      filteredProfiles = filteredProfiles.filter(
        profile => profile.hackathonsInterested.some(
          hackathon => filters.hackathons.includes(hackathon.id)
        )
      );
    }
    
    // Filter by locations
    if (filters.locations.length > 0) {
      filteredProfiles = filteredProfiles.filter(
        profile => filters.locations.includes(profile.location)
      );
    }
    
    // Filter by remote only
    if (filters.remoteOnly) {
      filteredProfiles = filteredProfiles.filter(profile => profile.isRemote);
    }
    
    setProfiles(filteredProfiles);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-r from-hackathon-purple to-hackathon-blue text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Find Your Perfect Hackathon Team
            </h1>
            <p className="text-lg md:text-xl mb-8 text-white/90">
              Connect with talented developers, designers, and innovators for your next hackathon success.
            </p>
            <Button 
              onClick={() => setIsCreateProfileOpen(true)} 
              className="bg-white text-hackathon-purple hover:bg-white/90 text-lg px-8 py-6"
              size="lg"
            >
              <UserPlus className="h-5 w-5 mr-2" />
              Create Your Profile
            </Button>
          </div>
        </div>
      </section>
      
      <div className="container mx-auto px-4 py-12">
        <FilterBar onFilterChange={handleFilter} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-xl font-bold mb-6">Find Teammates ({profiles.length})</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {profiles.length > 0 ? (
                profiles.map(profile => (
                  <ProfileCard 
                    key={profile.id} 
                    profile={profile} 
                    onConnect={handleConnect} 
                  />
                ))
              ) : (
                <div className="col-span-2 py-16 text-center">
                  <p className="text-gray-500 text-lg">No matching profiles found. Try adjusting your filters.</p>
                </div>
              )}
            </div>
          </div>
          
          <div className="md:col-span-1">
            <HackathonList />
          </div>
        </div>
      </div>
      
      {/* Connect Modal */}
      <ConnectModal 
        isOpen={isConnectModalOpen}
        onClose={() => setIsConnectModalOpen(false)}
        profile={selectedProfile}
      />
      
      {/* Create Profile Form */}
      <CreateProfileForm 
        isOpen={isCreateProfileOpen}
        onClose={() => setIsCreateProfileOpen(false)}
      />
    </div>
  );
};

export default Index;
