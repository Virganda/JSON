'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 100) {
      alert('USE YOUR SKINCARE!');
    } else {
      alert('DONT SKIP YOUR SKINCARE');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>Apakah Anda Butuh Motivasi? click me!!</button>
    </>
  );
};

export default ViewUserButton;
