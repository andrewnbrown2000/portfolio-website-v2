import { useRouter } from 'next/router';

interface NavButtonProps {
  selector?: string;
  href?: string;
  text: string;
  className?: string;
  target?: string;
  rel?: string;
}

export const NavButton: React.FC<NavButtonProps> = ({ selector, href, text, className, target, rel }) => {
  const router = useRouter();

  const handleClick = () => {
    if (href) {
      if (href.startsWith('http')) {
        window.open(href, target, rel);
      } else {
        router.push(href);
      }
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