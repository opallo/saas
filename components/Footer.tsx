const Footer: React.FC = () => {
  return (
    <footer className="border-t border-gray-800 py-6 text-center text-sm text-gray-400">
      © {new Date().getFullYear()} SaaS Starter Template
    </footer>
  );
};

export default Footer;

