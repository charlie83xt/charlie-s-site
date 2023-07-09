import * as React from 'react' 
import  Layout  from '../components/layout'

const AboutPage = () => {
    return (
        <main> 
            <Layout pageTitle="About Me">
                <p>
                    Hi there! I'm the creator of this blog, which I hope I can use as the 
                    sanctuary for my skills development. 
                </p>
            </Layout>
        </main>
    )
}
export const Head = () => <title>About Me</title>
export default AboutPage