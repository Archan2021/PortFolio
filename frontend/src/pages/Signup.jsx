import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/blogs');
  };

  return (
    <div className="signup-page lowercase mt-12">
      <h2 className="section-header">signup</h2>
      <p className="text-secondary mb-6">create a new account to join the network.</p>
      
      <div className="form-container" style={{ margin: '0' }}>
        <form onSubmit={handleSignup}>
          <div className="form-group">
            <label className="form-label">full name</label>
            <input type="text" className="form-input" placeholder="archan bose" />
          </div>
          <div className="form-group">
            <label className="form-label">email address</label>
            <input type="email" className="form-input" placeholder="archan@example.com" />
          </div>
          <div className="form-group">
            <label className="form-label">password</label>
            <input type="password" className="form-input" placeholder="choose a strong password" />
          </div>
          <div className="form-group">
            <label className="form-label">confirm password</label>
            <input type="password" className="form-input" placeholder="repeat your password" />
          </div>
          <button type="submit" className="btn-primary mt-4">create account -&gt;</button>
        </form>
        
        <p className="mt-6 text-secondary text-sm">
          already have an account? <Link to="/login" className="underline text-accent">login here</Link>.
        </p>
      </div>
    </div>
  );
}
