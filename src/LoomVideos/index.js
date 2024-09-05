import React from 'react';
import './index.css';

const VideoCard = ({ type, image, title, author, duration, link }) => {
  return (
    <div className='myVideos'>
    <div className={`video-card video-card--${type}`}>
      <div className="video-card__image">
        <img src={image} alt={title} />
      </div>
      <div className="video-card__content">
        <h3 className="video-card__title">{title}</h3>
        <p className="video-card__author">{author}</p>
        <p className="video-card__duration">{duration}</p>
        <a className="video-card__link" href={link}>
          Watch
        </a>
      </div>
    </div>
    </div>
  );
};

const LoomVideos = () => {
  const videos = [
    {
      type: 'live',
      image: '/imgNavbarLoom/loom1.jpg',
      title: 'Part 1: History and Development of Jira',
      author: 'Maureen Njeri',
      duration: '5 min',
      link: 'https://www.loom.com/share/0f96d050c1ab437ea196757e46d90e0a?sid=aade91a4-cdaf-4d7b-9d74-0f89d1f59d10',
    },
    {
      type: 'pending',
      image: '/imgNavbarLoom/loom3.jpg',
      title: 'Part 2: Use cases Of Jira',
      author: 'Aber Rachael',
      duration: '5 min',
      link: 'https://www.loom.com/share/855149235faa437e8bd4e8609c99e982?sid=1a25636b-fe6c-49ec-92e9-7214ae6bfeea',
    },
    {
      type: 'art',
      image: '/imgNavbarLoom/loom2.jpg',
      title: 'Part 3: Features Of Jira',
      author: 'Faith Wachira',
      duration: '32 min',
      link: 'https://www.loom.com/share/4388088abe9c49408861a1752fcc4964?sid=3abf3650-bd50-4fe4-aeeb-a1e93dba2e22',
    },
    {
      type: 'archived',
      image: '/imgNavbarLoom/loom4.jpg',
      title: 'Part 4: Revenue Models and Pros&Cons of Jira',
      author: 'Yvonne Martin',
      duration: '5 min',
      link: 'https://www.loom.com/share/9c182b50b84e416189536cdcac720405?sid=47a38bdd-f3a5-4bb9-b5fa-465214901581',
    },
    {
      type: 'political',
      image: '/imgNavbarLoom/loom1.jpg',
      title: 'Part 5: Architecture Structure',
      author: 'Mary Vivian',
      duration: '5 min',
      link: 'https://www.loom.com/share/19ce6c588238414a84758111e2ecdc17?sid=36c16f28-5532-4e24-8dce-27d8ab30de7c',
    },
  ];

  return (
    <div className="loom-videos">
       <h1 className='h1'>
        <b>The Journey of Jira Workspace</b>
      </h1>
      <div className="loom-videos__grid">
        {videos.map((video, index) => (
          <VideoCard
            key={index}
            type={video.type}
            image={video.image}
            title={video.title}
            author={video.author}
            duration={video.duration}
            link={video.link}
          />
        ))}
      </div>
    </div>
    
  );
};

export default LoomVideos;