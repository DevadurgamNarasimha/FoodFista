import React, { useState, useCallback, useMemo } from 'react';


const Post = React.memo(({ 
  id, 
  title, 
  body, 
  verifyPost, 
  onToggleVerify, 
  backgroundColor 
}) => {
  return (
    <div 
      className="border p-4 mb-4 rounded" 
      style={{ backgroundColor }}
    >
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <p className="mb-4">{body}</p>
      <button 
        onClick={() => onToggleVerify(id)}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        {verifyPost ? 'Verified' : 'Verify'}
      </button>
    </div>
  );
});

const AddPost = () => {
  const [timer, setTimer] = useState(0);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  React.useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const generateBackgroundColor = useMemo(() => {
    return () => {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);
      return `rgba(${r}, ${g}, ${b}, 0.2)`;
    };
  }, []);

  const addPost = useCallback(() => {
    if (!title.trim() || !body.trim()) return;
    
    const newPost = {
      id: Date.now(),
      title,
      body,
      verifyPost: false,
      backgroundColor: generateBackgroundColor()
    };
    
    setPosts(prevPosts => [...prevPosts, newPost]);
    setTitle('');
    setBody('');
  }, [title, body, generateBackgroundColor]);

  const toggleVerify = useCallback((postId) => {
    setPosts(prevPosts => 
      prevPosts.map(post => 
        post.id === postId 
          ? { ...post, verifyPost: !post.verifyPost } 
          : post
      )
    );
  }, []);

  return (
    <div className="max-w-md mx-auto p-4">
      <h1 className="text-2xl mb-4">Timer: {timer} seconds</h1>
      
      <div className="mb-4">
        <input 
          type="text"
          placeholder="Post Title" 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <textarea 
          placeholder="Post Body" 
          value={body}
          onChange={(e) => setBody(e.target.value)}
          className="w-full p-2 border rounded mb-2"
        />
        <button 
          onClick={addPost}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Post
        </button>
      </div>

      {posts.map(post => (
        <Post 
          key={post.id}
          {...post}
          onToggleVerify={toggleVerify}
        />
      ))}
    </div>
  );
};

export default AddPost;