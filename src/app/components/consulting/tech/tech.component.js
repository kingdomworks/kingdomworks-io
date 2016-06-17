import React from 'react';

import './tech.scss';
import TechnologyComponent from './tech';
import TechService from './tech.service';
const TechSvc = new TechService();

class ConsultingComponent extends React.Component {
    constructor() {
        super();
        this.state = {
            tech: []
        }
    }

    componentDidMount() {
        TechSvc.getTech().then((tech) => {
            this.updateTech(tech);
        })
    }

    updateTech(data) {
        this.setState({
            tech: data
        })
    }

    render() {
        let technologies = this.state.tech.map((technology) => {
            return <TechnologyComponent key={technology.id} data={technology} />
        })

        return (
            <section className='tech'>
                <h2>So what do you need help with?</h2>
                <div className="technology-list">
                    {technologies}
                </div>
                <a className="get-in-touch" href="#contact-pane">Let's Peer Program</a>
            </section>
        )
    }
}

export default ConsultingComponent;
