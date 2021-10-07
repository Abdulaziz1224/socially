import React from 'react'
import {useState, useEffect} from "react"
import BlogCard from './BlogCard'
import "./Blog.scss"

function Blog() {
  const [blog,
    setBlog] = useState([])

  useEffect(() => {
    setBlog([
      {
        img: "/images/Asosiy Qism/blogs/blog1.png",
        text: "Ranglar palitrasini to‘g‘ri yasashni o‘rganamiz!",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog2.png",
        text: "Bilishingiz kerak bo'lgan Web Design'ning 7 xil turdagi still...",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog3.png",
        text: "Mukammal icon uchun dizayn prinsiplari",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog4.png",
        text: "Nega ishingizdan nafratlanasiz?",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog5.png",
        text: "Emojilardan to'g'ri foydalanish",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog6.png",
        text: "UX Design'ni o'rganish uchun foydali manbalarning ro’yxati",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog7.png",
        text: "UX, UI, HCI va IXD oʻrtasida qanday farqlar bor?",
        date: "27.08.2021"
      }, {
        img: "/images/Asosiy Qism/blogs/blog8.png",
        text: "Socially Design Academy Turkiya safarida!",
        date: "27.08.2021"
      }
    ])
  }, [])

  let resBlog = {
    img: "/images/Asosiy Qism/blogs/responsiveBlog.png",
    text: "Bilishingiz kerak bo'lgan Web Design'ning 7 xil turdagi still...",
    date: "27.08.2021"
  }

  return (
    <div className="blogs">
      <div className="container">
        <div className="head">
          <div className="theme">
            <h1>So'ngi maqolalarimiz</h1>
            {/* <img src="/images/Web Design01/section-3/Group 130.svg" alt="" /> */}
            <div className="img"></div>

          </div>

          <div className="btn">
            <a href="Blogs" className="allBlogs">
              <img src="/images/Asosiy Qism/available courses/arrow.svg" alt="arrow"/>
            </a>
            <div className="underline"></div>
          </div>
        </div>

        <div className="blogBox">
          {blog.map((obj) => {
            return <BlogCard key = {Math.random()*100000}
              img={window.innerWidth > 500
              ? obj.img
              : resBlog.img}
              text={window.innerWidth > 500
              ? obj.text
              : resBlog.text}
              date={window.innerWidth > 500
              ? obj.date
              : resBlog.date}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default Blog
