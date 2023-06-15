import { ContentContainer } from '../components/ContentContainer';
import { TitleSection } from '../components/TitleSection';
import { Header } from '../components/Headers';
import { Footer } from '../components/Footers';

export default function Services(){
    const title = 'Our Services';
    const description = 'We offer a variety of services that fit the needs of many businesses, big or small.';

    return (
        <>
            <Header />
            <TitleSection title={title} description={description} />
            <ContentContainer className='py-20'>
                <div className='flex flex-wrap justify-between gap-5'>
                    <p>Our services all fall into two general categories. 
                        <span> </span><em>Marathons</em>, which are continuous projects with no definite completion criteria and <em>Sprints</em> which are projects with a definitive deliverable and completion criteria.
                        If you aren't sure which category your project falls under, an easy question to ask yourself is whether or not the project will need continuous updates. If so, it would be considered a Marathon!
                        Otherwise, it would be considered a sprint. Here are some other examples:
                    </p>
                    <figure>
                        <figcaption className='font-bold'>Marathon</figcaption>
                        <ul>
                            <li>Blog site that WE would add posts to</li>
                            <li>Digital marketing campaign that you'd like to run regularly</li>
                            <li>Ecommerce site with products that WE would change regularly</li>
                        </ul>
                    </figure>
                    <figure>
                        <figcaption className='font-bold'>Sprint</figcaption>
                        <ul>
                            <li>Blog site that YOU would add posts to</li>
                            <li>Digital marketing campaign that you'd like to run once</li>
                            <li>Ecommerce site with products that YOU would change if necessary</li>
                        </ul>
                    </figure>
                    <p>These are just a few very specific examples, but should help you gain a better understanding of whether or not a project is a Marathon or a Sprint.</p>
                </div>
                <div>
                    <h2 className='text-2xl my-5 font-bold'>Need A Website?</h2>
                    <p>We offer a variety of services aimed at getting your business online or helping you expand or rejuvinate your existing digital presence!</p>
                </div>
                <div>
                    <h2 className='text-2xl my-5 font-bold'>All Services</h2>
                    <p>While there are a variety of unique ways we may be able to help your particular business, it may also be nice to see a list of the areas we specialize in. So look no further!</p>
                    <ul>
                        <li>Website and Web Application Development</li>
                        <li>Ecommerce Site Development</li>
                        <li>Digital Marketing</li>
                        <li>Site Maintenance</li>
                        <li>Tech Consulting</li>
                    </ul>
                </div>
                <div>
                    <h2 className='text-2xl my-5 font-bold'>Pricing</h2>
                    <p>We do not list explicit prices for our services since every project is highly unqiue. All of our contracts start at $5,000 USD and increase depending on a variety of circumstances. 
                    More information about pricing can be found in our customer disclaimer.</p>
                </div>
            </ContentContainer>
            <Footer />
        </>
    )
};
  