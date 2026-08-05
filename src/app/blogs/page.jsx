import Link from 'next/link';
import Image from 'next/image';
import { Heart, Droplets, ArrowRight, Clock } from 'lucide-react';

export const metadata = {
  title: 'Cardiology Blog | PulseCare Cardiology',
  description: 'Expert cardiovascular health insights, research updates, and patient guidance from the cardiologists at PulseCare Cardiology Clinic.',
};

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Your Heart: A Patient\'s Guide to CAD Prevention',
    excerpt: 'Coronary artery disease is the leading cause of death worldwide — but up to 80% of cases are preventable with the right lifestyle choices. Our cardiologists break down the top evidence-based strategies.',
    category: 'Heart Disease',
    readTime: '7 min read',
    date: 'July 28, 2026',
    tag: 'Prevention',
    tagColor: 'bg-brand-50 text-brand-700',
    icon: Heart,
  },
  {
    id: 2,
    title: 'When Palpitations Are Normal (And When to Worry)',
    excerpt: 'Heart flutters, racing pulses, and skipped beats are incredibly common — but knowing the difference between benign palpitations and dangerous arrhythmias could save your life.',
    category: 'Arrhythmias',
    readTime: '5 min read',
    date: 'July 15, 2026',
    tag: 'Symptoms',
    tagColor: 'bg-yellow-50 text-yellow-700',
    icon: Heart,
  },
  {
    id: 3,
    title: 'The DASH Diet Explained: Eating Your Way to Lower Blood Pressure',
    excerpt: 'Clinical trials demonstrate that the DASH diet can reduce systolic blood pressure by 8–14 mmHg — equivalent to the effect of one antihypertensive medication. Here\'s how to start.',
    category: 'Hypertension',
    readTime: '6 min read',
    date: 'July 3, 2026',
    tag: 'Nutrition',
    tagColor: 'bg-emerald-50 text-emerald-700',
    icon: Droplets,
  },
  {
    id: 4,
    title: 'TAVR vs. Open-Heart Surgery: How We Choose the Right Approach',
    excerpt: 'Transcatheter aortic valve replacement has revolutionized care for elderly and high-risk patients. Our structural heart team explains how they individualize the decision for each patient.',
    category: 'Procedures',
    readTime: '8 min read',
    date: 'June 20, 2026',
    tag: 'Treatment',
    tagColor: 'bg-violet-50 text-violet-700',
    icon: Heart,
  },
  {
    id: 5,
    title: 'Hidden Threat: The Warning Signs of an Aortic Aneurysm',
    excerpt: 'Most aortic aneurysms show no symptoms until they rupture. Learn who should be screened, what the risk factors are, and how regular monitoring can save your life.',
    category: 'Vascular',
    readTime: '6 min read',
    date: 'June 5, 2026',
    tag: 'Screening',
    tagColor: 'bg-amber-50 text-amber-700',
    icon: Droplets,
  },
];

export default function BlogsPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-sky-950 text-white pt-36 sm:pt-44 lg:pt-48 pb-16 sm:pb-20 relative overflow-hidden">
        {/* Background Image & Overlay */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <Image
            src="https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=2000&q=80"
            alt="Blogs Background"
            fill
            className="object-cover object-center opacity-65"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-blue-950/60 to-slate-900/40" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">Cardiology Insights</h1>
          <p className="mt-4 text-slate-300 text-base sm:text-lg max-w-2xl mx-auto">Expert articles, research updates, and practical cardiovascular health guidance from our clinical team.</p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogPosts.map((post) => {
            const Icon = post.icon;
            return (
              <article key={post.id} className="bg-white border border-slate-200/80 rounded-2xl overflow-hidden card-hover-effect flex flex-col">
                <div className="bg-gradient-to-br from-slate-100 to-brand-50/50 h-40 flex items-center justify-center relative">
                  <div className="bg-white/60 p-4 rounded-2xl border border-white/80 backdrop-blur-sm">
                    <Icon className="h-10 w-10 text-brand-600" fill="currentColor" />
                  </div>
                  <span className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${post.tagColor}`}>
                    {post.tag}
                  </span>
                </div>
                <div className="p-5 flex flex-col flex-grow space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span>{post.category}</span>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  <h2 className="font-bold text-slate-800 text-base leading-snug">{post.title}</h2>
                  <p className="text-slate-500 text-xs sm:text-sm leading-relaxed flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                    <span className="text-xs text-slate-400">{post.date}</span>
                    <button className="text-xs font-semibold text-brand-600 hover:text-brand-700 flex items-center space-x-0.5 group">
                      <span>Read More</span>
                      <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
