import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Blogs() {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('isLoggedIn') === 'true');
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  };

  const [blogs, setBlogs] = useState([
    {
      id: 1,
      date: 'FEBRUARY 27, 2026',
      title: 'I SPENT A WEEKEND TEACHING MY BROWSER WHAT HAND GESTURES MEAN',
      description: 'a completely normal story about building a mouse-gesture chrome extension because the back button was, apparently, too far away.',
      author: 'other'
    },
    {
      id: 2,
      date: 'FEBRUARY 26, 2026',
      title: 'FROM SCREENSHOT TO SOLUTION: THE POWER OF MULTIMODAL AI IN DEBUGGING',
      description: 'learn how ai feedbacks leverages google gemini to turn visual bug reports into actionable prompts for coding agents.',
      author: 'other'
    },
    {
      id: 3,
      date: 'FEBRUARY 25, 2026',
      title: 'GUARDING YOUR CODE: THE RISE OF MAMORU-WAF',
      description: 'discover how mamoru-kun, a lightweight go-based guardian, brings enterprise-grade security and a stunning tui to your hobby projects.',
      author: 'other'
    }
  ]);

  const [newBlog, setNewBlog] = useState({ title: '', description: '' });
  const [editingId, setEditingId] = useState(null);
  const [editForm, setEditForm] = useState({ title: '', description: '' });

  const handlePostBlog = (e) => {
    e.preventDefault();
    if (!newBlog.title || !newBlog.description) return;
    
    const dateObj = new Date();
    const formattedDate = dateObj.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }).toUpperCase();
    
    setBlogs([
      {
        id: Date.now(),
        date: formattedDate,
        title: newBlog.title.toUpperCase(),
        description: newBlog.description.toLowerCase(),
        author: 'me'
      },
      ...blogs
    ]);
    
    setNewBlog({ title: '', description: '' });
  };

  const startEdit = (blog) => {
    setEditingId(blog.id);
    setEditForm({ title: blog.title, description: blog.description });
  };

  const handleEditSubmit = (e, id) => {
    e.preventDefault();
    if (!editForm.title || !editForm.description) return;

    setBlogs(blogs.map(b => b.id === id ? {
      ...b,
      title: editForm.title.toUpperCase(),
      description: editForm.description.toLowerCase()
    } : b));
    setEditingId(null);
  };

  const handleDelete = (id) => {
    if(window.confirm('are you sure you want to delete this post?')) {
      setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  const cancelEdit = () => setEditingId(null);

  // Fallback to prevent blank screen if blogs are missing
  if (!blogs) return <div className="lowercase m-8">loading...</div>;

  return (
    <div className="blogs-page lowercase mt-8">
      <div className="flex-between mb-8">
        <div>
          <h2 className="section-header mb-0">blogs feed</h2>
          <p className="text-secondary mt-2">read the latest essays and experiments. post your own.</p>
        </div>
        {isLoggedIn && (
          <button onClick={handleLogout} className="text-secondary hover-accent underline lowercase bg-transparent border-none cursor-pointer p-0" style={{ border: 'none', background: 'transparent', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.9rem' }}>
            logout
          </button>
        )}
      </div>

      {isLoggedIn ? (
        <div className="new-blog-form mb-12 p-4" style={{ border: '1px dashed var(--border-color)', borderRadius: '4px' }}>
          <h3 className="text-accent italic mb-4">compose new post</h3>
          <form onSubmit={handlePostBlog}>
            <div className="form-group mb-4">
              <label className="form-label">title</label>
              <input 
                type="text" 
                className="form-input" 
                placeholder="an interesting title..." 
                value={newBlog.title}
                onChange={(e) => setNewBlog({ ...newBlog, title: e.target.value })}
              />
            </div>
            <div className="form-group mb-4">
              <label className="form-label">content</label>
              <textarea 
                className="form-input" 
                rows="4" 
                placeholder="write your thoughts here..."
                value={newBlog.description}
                onChange={(e) => setNewBlog({ ...newBlog, description: e.target.value })}
                style={{ resize: 'vertical' }}
              />
            </div>
            <button type="submit" className="btn-primary" style={{ width: 'auto' }}>
              post blog -&gt;
            </button>
          </form>
        </div>
      ) : (
        <div className="mb-12 p-4 text-center" style={{ border: '1px dashed var(--border-color)', borderRadius: '4px' }}>
          <p className="text-secondary mb-2">want to share your thoughts?</p>
          <Link to="/login" className="btn-primary" style={{ width: 'auto', display: 'inline-block' }}>log in to post -&gt;</Link>
        </div>
      )}

      <div className="blog-list" style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
        {blogs.length === 0 && <p className="text-secondary">no blogs have been posted yet. be the first!</p>}
        {blogs.map(blog => (
          <article key={blog.id} className="blog-item">
            {editingId === blog.id ? (
               <div className="edit-form p-4" style={{ border: '1px solid var(--border-color)', borderRadius: '4px' }}>
                 <h4 className="text-accent italic mb-4">editing post</h4>
                 <form onSubmit={(e) => handleEditSubmit(e, blog.id)}>
                    <div className="form-group mb-4">
                      <label className="form-label">title</label>
                      <input type="text" className="form-input" value={editForm.title} onChange={(e) => setEditForm({...editForm, title: e.target.value})} />
                    </div>
                    <div className="form-group mb-4">
                      <label className="form-label">content</label>
                      <textarea className="form-input" rows="4" value={editForm.description} onChange={(e) => setEditForm({...editForm, description: e.target.value})} />
                    </div>
                    <div className="flex" style={{ gap: '1rem' }}>
                      <button type="submit" className="btn-primary" style={{ width: 'auto', padding: '0.5rem 1rem' }}>save changes</button>
                      <button type="button" onClick={cancelEdit} className="btn-primary" style={{ width: 'auto', padding: '0.5rem 1rem', borderColor: 'var(--text-secondary)', color: 'var(--text-secondary)' }}>cancel</button>
                    </div>
                 </form>
               </div>
            ) : (
              <>
                <div className="blog-meta flex-between" style={{ borderBottom: '1px solid var(--border-color)', paddingBottom: '0.25rem', marginBottom: '0.5rem' }}>
                  <span className="text-secondary" style={{ fontSize: '0.8rem', letterSpacing: '0.05em' }}>
                    {blog.date} {blog.author === 'me' && <span className="text-accent ml-2">(by you)</span>}
                  </span>
                  
                  {isLoggedIn && blog.author === 'me' && (
                    <div className="blog-actions" style={{ display: 'flex', gap: '0.75rem' }}>
                      <button onClick={() => startEdit(blog)} className="text-secondary hover-accent underline lowercase bg-transparent border-none cursor-pointer" style={{ fontSize: '0.8rem', padding: 0 }}>edit</button>
                      <button onClick={() => handleDelete(blog.id)} className="text-secondary hover-accent underline lowercase bg-transparent border-none cursor-pointer" style={{ fontSize: '0.8rem', padding: 0 }}>delete</button>
                    </div>
                  )}
                </div>
                <h3 className="blog-title mt-2 mb-1">
                  <Link to="#" className="text-accent hover-underline" style={{ fontSize: '1.2rem', letterSpacing: '0.05em', lineHeight: '1.4', textDecoration: 'none' }}>
                    {blog.title}
                  </Link>
                </h3>
                <p className="blog-desc text-primary" style={{ lineHeight: '1.6', marginTop: '0.5rem' }}>
                  {blog.description}
                </p>
              </>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
