import style from './HomeBlogs.module.css';

import HomeBlogsCard from './HomeBlogsCard/HomeBlogsCard';
const HomeBlogs =() =>{
    return(
        <>  
            <div className={style.container}>
                <div className={style.subTitle}>
                    <h5>⦿ LATEST NEWS</h5>
                </div>
                <div className={style.title}>
                    <h1>LATEST AND GREATEST POST</h1>
                </div>
                <HomeBlogsCard />
            </div>
        </>
    );
}
export default HomeBlogs;