'use client';

interface ViewUserButtonProps {
  userId: number;
}

const ViewUserButton: React.FC<ViewUserButtonProps> = ({ userId }) => {
  const handleClick = () => {
    if (userId > 001) {
      alert('USE YOUR SKINCARE!');
    } else {
      alert('DONT SKIP YOUR SKINCARE');
    }
  };
  
  return (
    <>
      <button onClick={handleClick}>MOTIVATION!!</button>
    </>
  );
};

export default ViewUserButton;
