import React, { useEffect } from 'react';
import Footer from '../Web design01/Footer/Footer';
import BlogTop from './BlogTopPart/BlogTop';
import BlogMiddle from "./BlogMiddlePart/BlogMiddle";
function BlogPart() {

     useEffect(() => {
          window.scrollTo({top: 0, behavior: "smooth"})
     })
     return (
          <div>
               <BlogTop/>
               <BlogMiddle/>
               <Footer/>
          </div>
     );
}

export default BlogPart;