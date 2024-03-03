import style from './HomeBlogsCard.module.css';


const HomeBlogsCard =(props) =>{
    return(
        <>  
            <div className={style.container}>
                <div className={style.imgDIV}>
                  {props.src}
                </div>
                <div className={style.tag}>{props.tag}</div>
                <div className={style.title}>{props.title}</div>
                <div className={style.readBtn}>Read Artice</div>
            </div>
        </>
    );
}
export default HomeBlogsCard;