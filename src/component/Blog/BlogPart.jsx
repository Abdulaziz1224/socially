import React from 'react';
import Footer from '../Web design01/Footer/Footer';
import BlogTop from './BlogTopPart/BlogTop';
import BlogMiddle from "./BlogMiddlePart/BlogMiddle";
function BlogPart(props) {
     return (
          <div>
               <BlogTop/>
               <BlogMiddle/>
               <Footer/>
          </div>
     );
}

export default BlogPart;