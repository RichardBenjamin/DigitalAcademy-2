import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { ArrowRight, Code, Zap, Users, Award } from 'lucide-react'

export default function Home() {
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, React, and full-stack development in 12 weeks.',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      students: 2400,
      price: '$499',
      level: 'Beginner to Intermediate',
    },
    {
      id: 2,
      title: 'Python for Data Science',
      description: 'Learn Python, pandas, NumPy, and machine learning fundamentals with real projects.',
      image: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      students: 1800,
      price: '$449',
      level: 'Intermediate',
    },
    {
      id: 3,
      title: 'Cloud Architecture with AWS',
      description: 'Deploy, scale, and manage applications on AWS. Get certified in cloud technologies.',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      students: 950,
      price: '$549',
      level: 'Advanced',
    },
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      role: 'Software Engineer at Tech Corp',
      quote: 'The Web Development Bootcamp transformed my career. I went from struggling with CSS to building full-stack applications in just 3 months.',
      image: 'SC',
    },
    {
      name: 'Marcus Johnson',
      role: 'Data Analyst at Fortune 500',
      quote: 'Outstanding course structure and real-world projects. The instructors genuinely care about student success.',
      image: 'MJ',
    },
    {
      name: 'Elena Rodriguez',
      role: 'Cloud Engineer at StartUp',
      quote: 'The AWS certification path was incredibly clear and practical. I landed my dream job two months after finishing.',
      image: 'ER',
    },
  ]

  return (
    <>
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground py-20 md:py-32 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 left-20 w-72 h-72 bg-secondary rounded-full blur-3xl"></div>
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
                Transform Your Career with Tech Skills
              </h1>
              <p className="text-lg md:text-xl mb-8 opacity-95 text-balance">
                Learn from industry experts. Build real projects. Get hired. Join thousands of students who've already transformed their careers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/courses"
                  className="px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  Explore Courses <ArrowRight size={20} />
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors"
                >
                  Schedule Demo
                </Link>
              </div>
              
              <div className="mt-12 grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-primary-foreground/30">
                <div>
                  <div className="text-3xl md:text-4xl font-bold">50K+</div>
                  <p className="text-sm opacity-90">Active Students</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">95%</div>
                  <p className="text-sm opacity-90">Success Rate</p>
                </div>
                <div>
                  <div className="text-3xl md:text-4xl font-bold">12+</div>
                  <p className="text-sm opacity-90">Expert Courses</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Digital Academy?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We provide comprehensive learning experiences designed to help you succeed in your tech career journey.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Code,
                  title: 'Hands-On Projects',
                  description: 'Build real-world applications from day one with expert guidance and peer collaboration.',
                },
                {
                  icon: Award,
                  title: 'Industry Certifications',
                  description: 'Earn recognized certifications that boost your resume and market value.',
                },
                {
                  icon: Zap,
                  title: 'Expert Instructors',
                  description: 'Learn from software engineers working at top tech companies.',
                },
                {
                  icon: Users,
                  title: 'Supportive Community',
                  description: 'Connect with peers, mentors, and get career guidance throughout your journey.',
                },
              ].map((feature, index) => (
                <div key={index} className="flex flex-col items-start p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-colors">
                  <feature.icon className="w-12 h-12 mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Courses Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-2">Featured Courses</h2>
                <p className="text-muted-foreground">Start your learning journey with these popular courses.</p>
              </div>
              <Link href="/courses" className="text-primary hover:text-primary/80 font-semibold flex items-center gap-2">
                View All Courses <ArrowRight size={20} />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all hover:border-primary/50"
                >
                  <div className={`${course.image} h-40`}></div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{course.title}</h3>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{course.description}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-sm font-semibold text-primary">{course.price}</span>
                      <span className="text-xs bg-secondary/20 text-secondary px-2 py-1 rounded">{course.level}</span>
                    </div>
                    <p className="text-xs text-muted-foreground mt-3">{course.students.toLocaleString()} students</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Student Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear from students who've transformed their careers with our courses.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card border border-border rounded-lg p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {testimonial.image}
                    </div>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-foreground italic">"{testimonial.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Learning?</h2>
            <p className="text-lg opacity-95 mb-8">
              Join thousands of students transforming their careers. Enroll today and get access to exclusive resources.
            </p>
            <Link
              href="/courses"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Browse All Courses
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
