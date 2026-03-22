export default function Footer() {
  return (
    <footer className="footer mt-12 pt-8 text-secondary lowercase flex-between">
      <div className="social-links">
        <a href="https://github.com/archan2021" target="_blank" rel="noreferrer">github</a>
        {' | '}
        <a href="https://linkedin.com/in/bose-archan" target="_blank" rel="noreferrer">linkedin</a>
        {' | '}
        <a href="mailto:archanbosemail@gmail.com">email</a>
      </div>
      <div>
        &copy; {new Date().getFullYear()} archan bose 
      </div>
    </footer>
  );
}
