import React from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Shield } from 'lucide-react';
import { supabase } from '../lib/supabase';
import SuccessModal from '../components/SuccessModal';
import ScrollAnimation from '../components/ScrollAnimation';

interface FormData {
  email: string;
}

const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [userPosition, setUserPosition] = React.useState(0);
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      // Get next position
      const { data: positionData, error: positionError } = await supabase
        .rpc('get_next_waitlist_position');
      
      if (positionError) throw positionError;
      
      const position = positionData;
      
      // Insert new waitlist entry
      const { error: insertError } = await supabase
        .from('waitlist')
        .insert([
          { 
            email: data.email,
            position: position
          }
        ]);
      
      if (insertError) {
        if (insertError.code === '23505') { // Unique constraint violation
          alert('This email is already on the waitlist!');
          return;
        }
        throw insertError;
      }
      
      setUserPosition(position);
      setIsModalOpen(true);
      reset();
      
    } catch (error) {
      console.error('Error submitting email:', error);
      alert('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen">
      {/* Spline 3D Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <iframe
          src="https://my.spline.design/abstractnirvana-DjAIpVg8TaTHxStr7XA0GP4x/"
          width="100%"
          height="100%"
          className="border-0 pointer-events-auto"
          style={{ 
            pointerEvents: 'auto',
            overflow: 'hidden'
          }}
          onWheel={(e) => e.preventDefault()}
          title="ES71 ESPORTS 3D Background"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 min-h-screen flex items-center pointer-events-none">
        <div className="max-w-7xl mx-auto px-4 py-20 text-center pointer-events-auto">
          <ScrollAnimation>
          <div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8 mt-20 md:mt-8"
          >
            <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 bg-purple-500/20 backdrop-blur-sm rounded-full border border-purple-500/30 mb-6 text-xs md:text-sm">
              <img src="/logo-built-on-monad.svg" alt="Built on Monad" className="w-4 h-4 mr-2" />
              <span className="text-purple-200 font-play font-medium hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.4)] transition-all duration-300">Built on Monad</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-play font-bold mb-6 leading-tight hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.6)] transition-all duration-500">
              <span className="bg-gradient-to-r from-white via-purple-200 to-purple-400 bg-clip-text text-transparent">
                Compete Onchain,
              </span>
              <br />
              <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 bg-clip-text text-transparent">
                Earn Onchain
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-purple-100 mb-4 max-w-3xl mx-auto font-play font-medium subtitle hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] transition-all duration-300">
              The Future is Here on Web3 - Only on ES71 ESPORTS
            </p>
            
            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto font-play font-normal hover:drop-shadow-[0_0_8px_rgba(168,85,247,0.3)] transition-all duration-300">
              Join the revolution of Web3 esports gaming. Compete in tournaments, earn MON tokens and many more! Experience the next generation of onchain competitive gaming built on Monad blockchain.
            </p>
          </div>
          </ScrollAnimation>

          {/* Email Signup Form */}
          <ScrollAnimation delay={0.2} className="max-w-md mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Invalid email address'
                    }
                  })}
                  placeholder="Enter your E-mail to get Waitlisted."
                  className="w-full px-6 py-4 bg-black/50 backdrop-blur-sm border border-purple-500/30 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20 hover:border-purple-400/50 hover:shadow-[0_0_15px_rgba(168,85,247,0.2)] hover:scale-105 transition-all duration-300 font-play hover-this"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-2 text-left font-play">{errors.email.message}</p>
                )}
              </div>
              
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white font-play font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-purple-500/25 hover-this"
              >
                {isSubmitting ? 'Joining...' : 'Join the Waitlist'}
              </motion.button>
            </form>
            
            <p className="text-gray-400 text-sm mt-4 font-play hover:drop-shadow-[0_0_6px_rgba(168,85,247,0.3)] transition-all duration-300">
              Be the first to experience the future of onchain esports
            </p>
          </ScrollAnimation>
        </div>
      </div>
      
      <SuccessModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        position={userPosition}
      />
    </div>
  );
};

export default HomePage;