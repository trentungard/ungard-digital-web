import { ContentContainer } from "../ContentContainer";

export const TitleSection = ({ title, description}) => {
    return (
        <div className='bg-articles-headline py-10 text-white'>
            <ContentContainer>
                <h1 className='text-2xl font-bold my-3'>{title}</h1>
                <p className='w-full lg:w-1/2'>{description}</p>
            </ContentContainer>
        </div>
    )
}