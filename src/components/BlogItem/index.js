// Write your JS code here

import './index.css'

const BlogItem = props => {
  const {eachBlog} = props
  const {title, description, publishedDate} = eachBlog

  return (
    <li className="blog-item-container">
      <div className="blog-item-title-date">
        <h1 className="blog-item-title">{title}</h1>
        <p className="blog-item-published-date">{publishedDate}</p>
      </div>
      <p className="blog-item-description">{description}</p>
    </li>
  )
}

export default BlogItem
