import Header from '@/components/header'
import Footer from '@/components/footer'
import Link from 'next/link'
import { Star, Users, Clock } from 'lucide-react'

export default function CoursesPage() {
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      description: 'Master HTML, CSS, JavaScript, React, and full-stack development. Build responsive websites and modern web applications.',
      image: 'bg-gradient-to-br from-blue-400 to-blue-600',
      students: 2400,
      rating: 4.9,
      price: '$499',
      level: 'Beginner to Intermediate',
      duration: '12 weeks',
      instructor: 'Alex Thompson',
    },
    {
      id: 2,
      title: 'Python for Data Science',
      description: 'Learn Python, pandas, NumPy, scikit-learn, and machine learning fundamentals. Analyze real-world datasets.',
      image: 'bg-gradient-to-br from-emerald-400 to-emerald-600',
      students: 1800,
      rating: 4.8,
      price: '$449',
      level: 'Intermediate',
      duration: '10 weeks',
      instructor: 'Dr. Sarah Williams',
    },
    {
      id: 3,
      title: 'Cloud Architecture with AWS',
      description: 'Deploy, scale, and manage applications on AWS. Earn AWS Solutions Architect certification.',
      image: 'bg-gradient-to-br from-orange-400 to-orange-600',
      students: 950,
      rating: 4.7,
      price: '$549',
      level: 'Advanced',
      duration: '8 weeks',
      instructor: 'Mike Chen',
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps with React Native. Create cross-platform mobile applications from scratch.',
      image: 'bg-gradient-to-br from-pink-400 to-pink-600',
      students: 1600,
      rating: 4.8,
      price: '$499',
      level: 'Intermediate',
      duration: '10 weeks',
      instructor: 'Jessica Lee',
    },
    {
      id: 5,
      title: 'DevOps & CI/CD',
      description: 'Master Docker, Kubernetes, and continuous integration. Streamline deployment and infrastructure management.',
      image: 'bg-gradient-to-br from-purple-400 to-purple-600',
      students: 780,
      rating: 4.7,
      price: '$529',
      level: 'Advanced',
      duration: '9 weeks',
      instructor: 'David Kumar',
    },
    {
      id: 6,
      title: 'UI/UX Design Fundamentals',
      description: 'Design beautiful user interfaces and experiences. Learn Figma, design thinking, and user research.',
      image: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
      students: 1200,
      rating: 4.9,
      price: '$399',
      level: 'Beginner',
      duration: '6 weeks',
      instructor: 'Emma Rodriguez',
    },
  ]

  return (
    <>
      <Header />

      <main>
        {/* Page Header */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-12 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">All Courses</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Explore our comprehensive catalog of tech courses designed to help you succeed in your career journey.
            </p>
          </div>
        </section>

        {/* Filter & Sorting */}
        <section className="border-b border-border py-6 bg-muted/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
                <option>All Levels</option>
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
                <option>All Categories</option>
                <option>Web Development</option>
                <option>Data Science</option>
                <option>Cloud Computing</option>
                <option>Mobile Development</option>
              </select>
            </div>
            <select className="px-4 py-2 border border-border rounded-lg bg-background text-foreground text-sm">
              <option>Newest</option>
              <option>Most Popular</option>
              <option>Highest Rated</option>
              <option>Price: Low to High</option>
              <option>Price: High to Low</option>
            </select>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 md:py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {courses.map((course) => (
                <Link
                  key={course.id}
                  href={`/courses/${course.id}`}
                  className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all hover:border-primary/50"
                >
                  <div className={`${course.image} h-48 relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="inline-block px-2 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded">
                        {course.level}
                      </span>
                      <div className="flex items-center gap-1">
                        <Star size={16} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                    </div>

                    <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {course.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                      {course.description}
                    </p>

                    <p className="text-xs text-muted-foreground mb-4 font-medium">
                      By {course.instructor}
                    </p>

                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4 pt-4 border-t border-border">
                      <div className="flex items-center gap-1">
                        <Users size={16} />
                        {course.students.toLocaleString()}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock size={16} />
                        {course.duration}
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-lg font-bold text-primary">{course.price}</span>
                      <span className="text-sm font-semibold text-primary group-hover:translate-x-1 transition-transform">
                        Enroll →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-primary-foreground">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Still undecided?</h2>
            <p className="text-lg opacity-95 mb-8">
              Schedule a free consultation with our education advisors to find the perfect course for your career goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary-foreground text-primary font-semibold rounded-lg hover:opacity-90 transition-opacity"
            >
              Schedule Free Consultation
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
