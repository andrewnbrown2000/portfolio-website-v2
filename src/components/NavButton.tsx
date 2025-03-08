import { useRouter } from 'next/router';

interface NavButtonProps {
  selector?: string;
  href?: string;
  text: string;
  className?: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ selector, href, text, className }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      router.push(href);
    } else if (selector) {
      const element = document.querySelector(selector);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <button onClick={handleClick} className={className}>
      {text}
    </button>
  );
};

export default NavButton;