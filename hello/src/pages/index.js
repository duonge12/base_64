import dynamic from 'next/dynamic';

// Sử dụng dynamic để đánh dấu component là một Client Component
const MultiplePages = dynamic(() => import('../../Components/MultiplePages'), {
  ssr: false, // Thiết lập ssr: false để đảm bảo component là Client Component
});

const HomePage = () => {
  return (
    
     
      <MultiplePages  title="Multiple Pages" description="Decode 64 base - Simplifying Data Encoding and Decoding">
        
      </MultiplePages>
    
  );
};

export default HomePage;
