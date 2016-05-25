import React, { PropTypes } from 'react';
import withStyles from 'withStyles';
import s from './home.scss';

const propTypes = {
};

function Home() {

  return (
    <div>
    <p>
      Brand Genius is our power tool for entrepreneurs who are launching a new business. You're the expert, and it Brand Genius asks you questions to help guide us towards the perfect brand. Using the information it collects, Brand Genius uses proprietary algorithms to generate great, unique names. Then it scours the Web and social networks to find out which names are available. Finally, it will generate a sample logo and Web site for you to see what each option looks and feels like. It's fun to use, gives great results, and will save you a ton of time.
    </p>

    <div class="row mainForm">
   <div class="small-12 medium-8 columns">

     <div class="text-center">
       <a href="brandgenius_step1.html" class="button">Get Started</a>
     </div>

     <div class="row">
       <div class="small-1 columns">&nbsp;</div>
       <div class="small-10 columns infographic">

         <div class="row infographicheader">
           <div class="small-12 columns">
             <h1>How It Works</h1>
           </div>
         </div>

         <div class="row">
           <div class="small-12 columns step">
             <h1>Step 1</h1>
             <h2>Describe Your Brand</h2>
             <p>Brand Genius will present you with a menu of brand "themes". By picking one or more you'll set the tone for the resulting brand.</p>
             <div class="text-center">
               <img src="images/step1.png"/>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="small-12 columns stepfooter">
             <img src="images/down-arrow.png" class="downarrow" />
             <p>Brand Genius will use this information as the foundation for the rest of the brand creation process.</p>
           </div>
         </div>

         <div class="row">
           <div class="small-12 columns step">
             <h1>Step 2</h1>
             <h2>Describe Your Business</h2>
             <p>By understanding a little bit about your industry and line of business, Brand Genius can hone in on brand names that fit with what your business does.</p>
             <img src="images/step2.png" />
           </div>
         </div>
         <div class="row">
           <div class="small-12 columns stepfooter">
             <img src="images/down-arrow.png" class="downarrow" />
             <p>Brand Genius will use this information to make sure your brand doesn't sound cheap or amateur in your industry.</p>
           </div>
         </div>

         <div class="row">
           <div class="small-12 columns step">
             <h1>Step 3</h1>
             <h2>Select Your Brand</h2>
             <p>Brand Genius will use the information you gave it and scour the Internet for available brand names that are good enough for your business. It will present the top five candidates for you to preview.</p>
             <img src="images/step3.png" />
           </div>
         </div>
         <div class="row">
           <div class="small-12 columns stepfooter">
             <p>If you like one of the candidates you can easily secure it and instantly launch a minimal but professional Internet presence.</p>
           </div>
         </div>

         <div class="row infographicheader">
           <div class="small-12 columns">
             <h1>It's that easy!</h1>
           </div>
         </div>
       </div>


       <div class="small-1 columns">&nbsp;</div>
     </div>

     <p>&nbsp;</p>
     <div class="text-center">
       <a href="brandgenius_step1.html" class="button">Get Started</a>
     </div>
   </div>

   <div class="small-12 medium-4 columns">
     <h1>FAQ</h1>
     <p>
       <span class="qa">Q:</span> How much does it cost?
     </p>
     <p class="answer">
       <span class="qa">A:</span> It's completely free! We offer our tools as a free service to the community, our goal is to create a good relationship with you, the entrepreneur.
     </p>

     <p>
       <span class="qa">Q:</span> How can you run it for free?
     </p>
     <p class="answer">
       <span class="qa">A:</span> We believe that by helping make <u>you</u> successful there will be opportunities to help you down the road, and be paid for it. For example, if you're not technical but you need technical skills, we can connect you with people who can help, and we take a small fee for that.
     </p>
   </div>
 </div>
 </div>
  );

}

Home.propTypes = propTypes;
export default withStyles(Home, s);
