import style from './Blogs.module.css';
import BlogOne from './BlogPages/BlogOne';
import BlogTwo from './BlogPages/BlogTwo';
import BlogThree from './BlogPages/BlogThree';
import { Routes,Route } from "react-router-dom";
import BlogPageCard from "./BlogPageCard/BlogPageCard";
import BL1 from "../../../img/BlogImg/Some-of-the-Most-Viral-Advertisements.jpg"
import BL2 from "../../../img/BlogImg/The-Importance-of-Visual-Content-Creation-in-Large-Companies-and-Businesses-thumbnail.jpg"
import BL3 from "../../../img/BlogImg/BLOG 3 Influencer.png"
const Blogs = () =>{
    return (
        <>
            <Routes>
              <Route path="/blogs/The-Importance-of-Visual-Content" element={<BlogOne />} />
              <Route path="/blogs/Some-of-the-Most-Viral-Advertisements" element={<BlogTwo />}  />
              <Route path="/blogs/Why-is-Marketing-Important-for-Business?" element={<BlogThree />}  />
            </Routes>

            <div className={style.container}>
                    <BlogPageCard 
                        src={   <img src={BL3} alt=">Why is marketing important for businesses?" height="300"/>} 
                        tag="July 12, 2023 .. Marketing"
                        title="Why is marketing important for businesses?"
                        para="It's unfortunate when good businesses don't focus on marketing. They     have      excellent products,
                        but because they're not visible, potential customers can't find them. This leads to lost sales as
                     customers choose their competitors instead. Business owners feel frustrated knowing their
                     products could make a difference if more people were aware of them..."
                    />
                    <BlogPageCard 
                        src={   <img src={BL2} alt="The Importance of
                        Visual Content Creation." height="300"/>} 
                        tag="July 18, 2023 .. Editorial"
                        title="The Importance of
                        Visual Content Creation."
                        para="In an era dominated by digital innovation and information overload, businesses, both large and small, find themselves in a constant battle for online visibility and customer engagement. In this relentless pursuit of digital success, visual content creation has emerged as a potent weapon. The importance of visual content in the marketing strategies..."
                    />
                    <BlogPageCard 
                        src={   <img src={BL1} alt=">Some of the Most Viral Advertisements" height="300"/>} 
                        tag="July 22, 2022 .. Educational"
                        title="Some of the Most Viral Advertisements."
                        para="Advertising has come a long way from the days of print ads and billboards. In the digital age, advertisements have the power to go viral within seconds, reaching millions of viewers worldwide. These viral advertisements capture our attention, evoke emotions, and become an integral part of pop culture. In this blog, we'll explore ..."
                    />
            </div>
        </>
    );
}
export default Blogs;