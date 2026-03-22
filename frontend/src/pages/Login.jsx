import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('isLoggedIn', 'true');
    navigate('/blogs');
  };

  return (
    <div className="login-page lowercase mt-12">
      <h2 className="section-header">login</h2>
      <p className="text-secondary mb-6">welcome back. authenticate to access your dashboard.</p>
      
      <div className="form-container" style={{ margin: '0' }}>
        <form onSubmit={handleLogin}>
          <div className="form-group">
            <label className="form-label">email</label>
            <input type="email" className="form-input" placeholder="archan@example.com" />
          </div>
          <div className="form-group">
            <label className="form-label flex-between">
              <span>password</span>
              <Link to="#" className="text-accent underline">forgot?</Link>
            </label>
            <input type="password" className="form-input" placeholder="••••••••" />
          </div>
          <button type="submit" className="btn-primary mt-4">secure login -&gt;</button>
        </form>
        
        <p className="mt-6 text-secondary text-sm">
          don't have an account? <Link to="/signup" className="underline text-accent">signup here</Link>.
        </p>
      </div>
    </div>
  );
}
