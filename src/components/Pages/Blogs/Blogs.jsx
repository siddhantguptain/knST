import style from './Blogs.module.css';
import BlogOne from './BlogPages/BlogOne';
import BlogTwo from './BlogPages/BlogTwo';
import BlogThree from './BlogPages/BlogThree';
const Blogs = () =>{
    return (
        <>
            <div className={style.container}>
               <BlogOne />
               <BlogTwo />
               <BlogThree />
            </div>
        </>
    );
}
export default Blogs;