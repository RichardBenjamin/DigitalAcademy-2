import Header from '@/components/header'
import Footer from '@/components/footer'
import { Users, Award, Target, Lightbulb } from 'lucide-react'

export default function AboutPage() {
  const team = [
    {
      name: 'John Smith',
      role: 'Founder & CEO',
      image: 'JS',
      bio: 'Former Director of Engineering at Tech Corp with 15+ years in tech education.',
    },
    {
      name: 'Emily Davis',
      role: 'Head of Curriculum',
      image: 'ED',
      bio: 'Educator and curriculum designer specializing in tech skills development.',
    },
    {
      name: 'Rajesh Patel',
      role: 'Lead Instructor',
      image: 'RP',
      bio: 'Full-stack developer and mentor helping thousands of students succeed.',
    },
    {
      name: 'Lisa Anderson',
      role: 'Community Manager',
      image: 'LA',
      bio: 'Dedicated to building supportive learning communities for all students.',
    },
  ]

  const stats = [
    { number: '50K+', label: 'Active Students' },
    { number: '95%', label: 'Success Rate' },
    { number: '12+', label: 'Expert Courses' },
    { number: '4.8★', label: 'Average Rating' },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Digital Academy</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We're on a mission to make quality tech education accessible to everyone, everywhere. Since our founding, we've helped tens of thousands of students transform their careers.
            </p>
          </div>
        </section>

        {/* Mission, Vision, Values */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-8 bg-card border border-border rounded-lg">
                <Target className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Mission</h3>
                <p className="text-muted-foreground">
                  To democratize tech education and empower individuals with the skills needed to build the future.
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg">
                <Lightbulb className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Vision</h3>
                <p className="text-muted-foreground">
                  A world where anyone can learn cutting-edge tech skills and achieve their career dreams.
                </p>
              </div>

              <div className="p-8 bg-card border border-border rounded-lg">
                <Award className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-bold mb-3">Our Values</h3>
                <p className="text-muted-foreground">
                  Excellence, inclusivity, student success, and continuous innovation in everything we do.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">By The Numbers</h2>
              <p className="text-lg opacity-95 mt-2">See the impact we're making in tech education.</p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="opacity-90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Our Story</h2>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Digital Academy was founded in 2019 by a group of passionate software engineers who believed that quality tech education should be accessible to everyone. We started with a simple mission: help people learn the skills they need to succeed in tech careers.
              </p>

              <p>
                What began as a small online course has grown into a comprehensive learning platform serving students across the globe. We've partnered with industry experts, built a supportive community, and developed courses that reflect real-world tech skills.
              </p>

              <p>
                Today, we're proud to have helped over 50,000 students transition into tech careers. Our students work at companies like Google, Amazon, Microsoft, and countless startups. But more importantly, they've found fulfilling careers doing what they love.
              </p>

              <p>
                We continue to evolve our platform, courses, and teaching methods to stay at the forefront of tech education. We believe that investing in education is investing in the future, and we're committed to helping every student succeed.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground">
                Experienced educators and industry professionals dedicated to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-card border border-border rounded-lg overflow-hidden">
                  <div className="w-full h-48 bg-gradient-to-br from-primary to-secondary"></div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-1">{member.name}</h3>
                    <p className="text-sm text-primary font-semibold mb-3">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Digital Academy?</h2>

            <div className="space-y-6">
              {[
                {
                  title: 'Industry Experts',
                  description: 'Learn from software engineers working at top tech companies like Google, Amazon, and Microsoft.',
                },
                {
                  title: 'Practical Learning',
                  description: 'Build real-world projects that you can add to your portfolio and show to employers.',
                },
                {
                  title: 'Supportive Community',
                  description: 'Join a community of thousands of learners, mentors, and industry professionals.',
                },
                {
                  title: 'Career Support',
                  description: 'Get resume reviews, interview preparation, and job placement assistance.',
                },
                {
                  title: 'Flexible Learning',
                  description: 'Learn at your own pace with lifetime access to course materials and updates.',
                },
                {
                  title: 'Proven Results',
                  description: '95% of our graduates successfully transition into tech careers within 6 months.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex-shrink-0 flex items-center justify-center">
                    <Users className="text-primary" size={18} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Join Our Learning Community</h2>
            <p className="text-lg opacity-95 mb-8">
              Start your journey to a successful tech career today.
            </p>
            <a
              href="/courses"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Explore Courses
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
