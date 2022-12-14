import React from 'react';

const linkStyle = {
  color: '#66ccff'
}

const titleStyle = {
  backgroundColor: '#66ccff',
  padding: '20px'
}
const userStyle = {
  padding: "20px",
  backgroundColor: '#212429',
  justifyContent: 'Center'
};

const postList = ({
  posts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!posts.length) {
    return <h3>No posts Yet</h3>;
  }

  return (
    <section className="posts">
      <h1 style={titleStyle}>Let's talk Food!</h1>
      {posts.map((post) => (
        <div key={post._id} className="row bg-dark" style={userStyle}>
          <div className="col-sm-8">
            <div className="card text-center">
              <div className="card-header" style={titleStyle}>{post.createdAt}</div>
              <div className="card-body">
                <h5 className="card-title">{post.postBody}</h5>
                <p className="card-text">
                  -Posted by {post.username}

                </p>
                <a href={`/posts/${post._id}`} className="btn btn-dark" style={linkStyle}>
                  Comment on this Post!
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
};

export default postList;
