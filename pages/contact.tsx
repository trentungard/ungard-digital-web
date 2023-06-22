import { ContactForm } from '../components/ContactForm';
import { ContentContainer } from '../components/ContentContainer';
import { TitleSection } from '../components/TitleSection';
import { Header } from '../components/Headers';
import { Footer } from '../components/Footers';

export default function Contact(){
    const title = 'Contact Us';
    const description = 'Fill out the form below to get in contact with us! We typically respond within 48 business hours.'
    return (
        <>
            <Header />
            <TitleSection title={title} description={description} />
            <ContentContainer className='py-20'>
                <ContactForm />
            </ContentContainer>
            <Footer />
        </>
    )
};