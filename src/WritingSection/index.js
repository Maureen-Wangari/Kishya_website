import React, { useState } from 'react';
import './index.css';

const WritingSection = () => {
  const [showFullContent, setShowFullContent] = useState(false);

  const coachingData = [
    {
      title: "Trevor Noah: Born A Crime",
      image: "/Images/BornACrime.jpg"
    },
    {
      title: "Adam Grant: Originals",
      image: "/Images/GrantOriginals.webp"
    }
  ];

  const cardData = [
    {
      title: "Exploring Identity Amidst Adversity",
      content: "At its heart, \"Born a Crime\" chronicles Noah's childhood as a biracial child in a society where interracial relationships were illegal. Read more..",
      fullContent: "At its heart, \"Born a Crime\" chronicles Noah's childhood as a biracial child in a society where interracial relationships were illegal. Born to a black Xhosa mother and a white Swiss father, Noah's existence was literally a crime under apartheid law, highlighting the absurdity and cruelty of racial segregation. His experiences navigating a world that classified him as neither fully black nor white offer profound insights into the complexities of identity formation in a divided society."
    },
    {
      title: "Relevance in Today's Sociopolitical Context",
      content: "Noah's memoir serves as a poignant reflection on contemporary social, political, and economic issues. Read more..",
      fullContent: "Noah's memoir serves as a poignant reflection on contemporary social, political, and economic issues. It prompts readers to confront the ongoing legacies of racism and colonialism, urging a deeper understanding of how historical injustices continue to shape our present realities. By sharing his personal journey with humor and introspection, Noah encourages dialogue about privilege, discrimination, and the pursuit of social justice in a globalized world."
    },
    {
      title: "The Power of Humor and Hope",
      content: "In today's diverse and interconnected world, Noah's memoir advocates for embracing diversity and fostering inclusion across cultural and racial boundaries. Read more..",
      fullContent: "One of the most compelling aspects of \"Born a Crime\" is Noah's ability to infuse humor into his narrative, even when recounting the darkest moments of his upbringing. Through humor, Noah not only entertains but also disarms readers, inviting them to engage with difficult topics with empathy and openness. His resilience in the face of adversity serves as a powerful testament to the human spirit's capacity for hope and transformation."
    },
    {
      title: "Embracing Diversity and Inclusion",
      content: "In today's diverse and interconnected world, Noah's memoir advocates for embracing diversity and fostering inclusion across cultural and racial boundaries. Read more..",
      fullContent: "In today's diverse and interconnected world, Noah's memoir advocates for embracing diversity and fostering inclusion across cultural and racial boundaries. His story challenges readers to rethink conventional notions of identity and to celebrate the richness that comes from embracing different perspectives and experiences. \"Born a Crime\" encourages us all to strive for a society where every individual's voice is heard and valued, regardless of their background or circumstances."
    }
  ];

  return (
    <div className="writing-section">
      <h2 className="section-title">Blogs: We've got you covered</h2>
      <div className="coaching-grid">
        {coachingData.map((item, index) => (
          <div key={index} className="coaching-card">
            <img src={item.image} alt={item.title} className="coaching-card-image" />
            <div className="coaching-card-content">
              <h3 className="coaching-card-title">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>

      {!showFullContent && (
        <button
          onClick={() => setShowFullContent(true)}
          className="explore-more-btn"
        >
          EXPLORE MORE <span className="chevron-right">›</span>
        </button>
      )}

      {showFullContent && (
        <>
          <header className="book-header">
            <h1 className="book-title">Trevor Noah: Born A Crime</h1>
            <p className="book-subtitle">The journey of an innocent young boy through apartheid trying to figure out his identity</p>
          </header>

          <div className="book-intro">
            <h1 className="book-intro-title">Born a Crime and its relevance to current social, political, and economic issues</h1>
            <p className="book-intro-content">
              In the landscape of impactful memoirs, Trevor Noah's "Born a Crime" stands out as a compelling narrative that transcends borders and resonates deeply with readers worldwide. Published in 2016, this memoir not only recounts Noah's upbringing during apartheid in South Africa but also delves into broader themes of identity, injustice, and resilience that remain incredibly relevant today.
            </p>
          </div>

          <div className="card-grid">
            {cardData.map((card, index) => (
              <div key={index} className="gradient-card">
                <h2 className="gradient-card-title">{card.title}</h2>
                <p className="gradient-card-content">{card.content}</p>
              </div>
            ))}
          </div>

          {cardData.map((card, index) => (
            <div key={index} className="content-section">
              <h2 className="content-section-title">{card.title}</h2>
              <p className="content-section-text">{card.fullContent}</p>
            </div>
          ))}

          <div className="conclusion-section">
            <h2 className="conclusion-title">Conclusion</h2>
            <p className="conclusion-text">
              "Born a Crime" by Trevor Noah is more than just a memoir; it is a call to action for readers to confront injustice, embrace diversity, and strive for a more equitable world. Noah's storytelling not only entertains and educates but also inspires empathy and understanding across cultural divides. As we engage with his narrative, let us be inspired to challenge prejudice, advocate for social change, and foster a global community built on mutual respect and compassion.
            </p>
          </div>

          <div className="references-section">
            <h2 className="references-title">References</h2>
            <p className="references-text">
              <a href="https://pursuitofdiversity.files.wordpress.com/2018/06/born-a-crime-trevor-noah.pdf" className="reference-link">Noah, Trevor. Born a Crime: Stories from a South African Childhood. Spiegel & Grau, 2016.</a>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default WritingSection;