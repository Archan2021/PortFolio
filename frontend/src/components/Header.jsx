import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="header pb-8">
      <div className="header-flex">
        <div>
          <Link to="/">
            <h1 className="name-title" style={{ fontStyle: 'italic', fontWeight: 600 }}>
              archan bose <span className="text-secondary" style={{fontWeight: 400, marginLeft: '0.5rem', fontSize: '1.2rem'}}>~ अर्चन बोस</span>
            </h1>
          </Link>
          <div className="tags-box mt-2">
            asp.net core, react, azure cloud, microservices, jwt, rbac, sql
          </div>
          <p className="mt-6 lowercase" style={{ fontSize: '1rem' }}>
            i build <span className="italic" style={{ textDecoration: 'underline', textDecorationColor: 'var(--accent)', textUnderlineOffset: '4px' }}>secure, scalable backend systems.</span>
          </p>
        </div>
        <div className="location align-right">
          <div className="text-accent" style={{ letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem' }}>
            k o l k a t a , i n d i a
          </div>
          <div className="text-secondary italic" style={{ fontSize: '0.9rem', marginTop: '0.2rem' }}>
            कोलकाता, भारत
          </div>
        </div>
      </div>
    </header>
  );
}
