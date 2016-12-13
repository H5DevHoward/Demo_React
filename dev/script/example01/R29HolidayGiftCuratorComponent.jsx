import React, {Component} from 'react';
import classNames from 'classnames';

import ButtonStart from './ButtonStart.jsx';
import PersonComponent from './PersonComponent.jsx';
import TraitComponent from './TraitComponent.jsx';

import '../../style/_R29HolidayGiftCuratorComponent.scss';


class R29HolidayGiftCuratorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialData: {
                person: [
                    'mom',
                    'dad',
                    's.o.',
                    'bff',
                    'work spouse',
                    'surprise me',
                ],
                trait: [
                    {
                        name: 'chill',
                        selected: false,
                    },
                    {
                        name: 'chic aesthete',
                        selected: false,
                    },
                    {
                        name: 'emo',
                        selected: false,
                    },
                    {
                        name: 'type a',
                        selected: false,
                    },
                    {
                        name: 'early adopter',
                        selected: false,
                    },
                    {
                        name: 'fancy',
                        selected: false,
                    },
                ],
            },
            isStartAD: false,
            showNext: false,
            personItem: '',
            traitItems: [],
        };
    }

    handleToggle(isStartAD) {
        this.setState({
            isStartAD,
        });
    }

    handleTogglePerson(person, showNext) {
        this.setState({
            personItem: person,
            showNext,
        });
    }

    handleToggleTrait(traits) {
        this.setState({
            traitItems: traits,
        });
    }

    render() {
        return (
            <section>
                <ButtonStart
                    start={this.state.isStartAD}
                    onToggle={this.handleToggle.bind(this)}/>
                <PersonComponent
                    data={this.state.initialData.person}
                    start={this.state.isStartAD}
                    showNext={this.state.showNext}
                    onToggle={this.handleTogglePerson.bind(this)}/>
                <TraitComponent
                    data={this.state.initialData.trait}
                    personItem={this.state.personItem}
                    onToggle={this.handleToggleTrait.bind(this)}/>
            </section>
        );
    }
}

export default R29HolidayGiftCuratorComponent;
