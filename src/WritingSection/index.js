import React from "react";
import './index.css'
const WritingSection=()=>{
return(
   <div className="body">
       <div className="blogHeading" >
         <h1 className="topHeading">Born a Crime and its relevance to current social, political, and economic issues</h1>
         <p className="blogIntro">
         In the landscape of impactful memoirs, Trevor Noah's "Born a Crime" stands out as a compelling narrative that transcends borders and resonates deeply with readers worldwide. Published in 2016, this memoir not only recounts Noah's upbringing during apartheid in South Africa but also delves into broader themes of identity, injustice, and resilience that remain incredibly relevant today.
         </p>
         <button id="readOnBtn">Read On</button>
       </div>
     <div className="blogContent">
   
     <div className="cards">
     <div className="cardOne">
      <h2 id="cardHeading">Exploring Identity Amidst Adversity</h2>
      <p className="cardContent">At its heart, "Born a Crime" chronicles Noah's childhood as a biracial child in a society where interracial relationships were illegal.
      <a href="#firstCard" >Read more..</a>
      </p>
      </div>
     <div className="cardTwo">
     <h2 id="cardHeading">Relevance in Today's Sociopolitical Context</h2>
     <p className="cardContent">Noah's memoir serves as a poignant reflection on contemporary social, political, and economic issues.
     <a href="#secondCard">Read more..</a>
     </p>
     </div>
     <div className="cardOne">
     <h2 id="cardHeading">The Power of Humor and Hope</h2>
     <p className="cardContent" >In today's diverse and interconnected world, Noah's memoir advocates for embracing diversity and fostering inclusion across cultural and racial boundaries.
     <a href="#thirdCard">Read more..</a>
     </p>
     </div>
     <div className="cardTwo">
     <h2 id="cardHeading">Embracing Diversity and Inclusion</h2>
     <p className="cardContent">In today's diverse and interconnected world, Noah's memoir advocates for embracing diversity and fostering inclusion across cultural and racial boundaries.
     <a href="#fourthCard">Read more..</a>
     </p>
     </div>
     </div>
        <h2>Exploring Identity Amidst Adversity</h2>
        <p id="firstCard" className="paragraph">
        At its heart, "Born a Crime" chronicles Noah's childhood as a biracial child in a society where interracial relationships were illegal. Born to a black Xhosa mother and a white Swiss father, Noah's existence was literally a crime under apartheid law, highlighting the absurdity and cruelty of racial segregation. His experiences navigating a world that classified him as neither fully black nor white offer profound insights into the complexities of identity formation in a divided society.
        </p>
        <h2>Relevance in Today's Sociopolitical Context</h2>
        <p   id="secondCard" className="paragraph">
        Noah's memoir serves as a poignant reflection on contemporary social, political, and economic issues. It prompts readers to confront the ongoing legacies of racism and colonialism, urging a deeper understanding of how historical injustices continue to shape our present realities. By sharing his personal journey with humor and introspection, Noah encourages dialogue about privilege, discrimination, and the pursuit of social justice in a globalized world.
        </p>
        <h2>The Power of Humor and Hope</h2>
        <p   id="thirdCard" className="paragraph">One of the most compelling aspects of "Born a Crime" is Noah's ability to infuse humor into his narrative, even when recounting the darkest moments of his upbringing. Through humor, Noah not only entertains but also disarms readers, inviting them to engage with difficult topics with empathy and openness. His resilience in the face of adversity serves as a powerful testament to the human spirit's capacity for hope and transformation.</p>
        <h2>Embracing Diversity and Inclusion</h2>
        <p   id="fourthCard" className="paragraph">In today's diverse and interconnected world, Noah's memoir advocates for embracing diversity and fostering inclusion across cultural and racial boundaries. His story challenges readers to rethink conventional notions of identity and to celebrate the richness that comes from embracing different perspectives and experiences. "Born a Crime" encourages us all to strive for a society where every individual's voice is heard and valued, regardless of their background or circumstances.</p>
        <h2>Conclusion</h2>
        <p>
           "Born a Crime" by Trevor Noah is more than just a memoir; it is a call to action for readers to confront injustice, embrace diversity, and strive for a more equitable world. Noah's storytelling not only entertains and educates but also inspires empathy and understanding across cultural divides. As we engage with his narrative, let us be inspired to challenge prejudice, advocate for social change, and foster a global community built on mutual respect and compassion.
        </p>
        <h2>References</h2>
        <p>
        Noah, Trevor. Born a Crime: Stories from a South African Childhood. Spiegel & Grau, 2016.
        </p>
     </div>
   </div>
)
}
export default WritingSection;