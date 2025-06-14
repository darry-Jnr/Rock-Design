import bgImage from '../../assets/images/team-img.webp?lqip';

const team = [
    {
        name: 'Akira Tanaka',
        role: 'Founder & Lead Architect',
        bio: 'Passionate about merging anime aesthetics with modern architecture. 15+ years of experience in innovative design.',
        specialty: 'Cyberpunk & Futuristic Design',
        image: 'https://images.unsplash.com/photo-1603415526960-f8f0b4f0f63e?auto=format&fit=crop&w=400&q=80',
    },
    {
        name: 'Yuki Sato',
        role: 'Senior Interior Designer',
        bio: 'Expert in creating immersive interior experiences inspired by Studio Ghibli and slice-of-life anime.',
        specialty: 'Natural & Whimsical Interiors',
        image: 'https://images.pexels.com/photos/3777946/pexels-photo-3777946.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
        name: 'Hiroshi Nakamura',
        role: 'Project Manager',
        bio: 'Ensures every project runs smoothly from concept to completion with precision and care.',
        specialty: 'Project Coordination',
        image: 'https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&h=350',
    },
    {
        name: 'Sakura Yamamoto',
        role: '3D Visualization Artist',
        bio: 'Brings architectural dreams to life through stunning 3D renders and virtual walkthroughs.',
        specialty: '3D Renders & Visual Effects',
        image: 'https://images.unsplash.com/photo-1594824476967-48c8b9642731?auto=format&fit=crop&w=400&q=80',
    },
];

const TeamSection = () => {
    return (
        <section
            className="relative bg-cover bg-center bg-no-repeat font-barlow py-20 px-6 text-white"
            style={{ backgroundImage: `url(${bgImage})` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
                        Meet Our Creative Team
                    </h2>
                    <p className="max-w-2xl mx-auto text-gray-300 text-md md:text-lg">
                        Our passionate team of architects, designers, and visionaries who bring anime worlds to life.
                    </p>
                </div>

                {/* Unified White Card with Vertical Dividers */}
                <div className="bg-white/90 backdrop-blur shadow-lg overflow-hidden">
                    <div className="flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-gray-300">
                        {team.map((member, index) => (
                            <div key={index} className="p-6 flex-1 text-center text-[#003152]">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-24 h-24 object-cover rounded-full mx-auto mb-4 ring-2 ring-[#003152]"
                                />
                                <h3 className="text-lg font-semibold">{member.name}</h3>
                                <p className="text-sm text-gray-600 mb-2">{member.role}</p>
                                <p className="text-sm text-gray-700 mb-4">{member.bio}</p>
                                <span className="inline-block text-xs font-medium px-3 py-1 bg-[#003152] text-white rounded-full">
                                    {member.specialty}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
