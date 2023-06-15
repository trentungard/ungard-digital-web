import {imageBuilder} from '../../lib/sanity';

export const Post = ({author, className, excerpt, imgSrc, title}) => {
    return (
        <div className={className}>
            <img className='w-full h-lg flex-wrap' src={`${imageBuilder(imgSrc)}`} />
            <h3 className='text-xl font my-3'>{title}</h3>
            <p>Author: {author}</p>
        </div>
    )
}