import React, {Component} from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';

import ButtonStart from './ButtonStart.jsx';
import PersonComponent from './PersonComponent.jsx';
import TraitComponent from './TraitComponent.jsx';
import ShowCasesComponent from './ShowCasesComponent.jsx';

import '../../style/_R29HolidayGiftCuratorComponent.scss';

class R29HolidayGiftCuratorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
            feed: [],
            showFrame1: true,
            showFrame2: false,
            showFrame3: false,
            showFrame4: false,
            resetPerson: false,
            resetTraits: false,
            personItem: '',
            traitItems: [],
            caseItems: [],
        };
    }

    componentDidMount() {
        fetch('https://cdn.contentful.com/spaces/gju6m3ezaxar/entries?content_type=jsonFull&include=10&limit=200&access_token=e887c7cd3298dd5e14cce7cd22523670abea9de380aef548efcbcb4b3a612ee9')
        .then(response =>
            response.json()
        )
        .then(json => {
            const feed = json.items[0].fields.jsonFull.feed.entry;
            this.setState({
                feed,
            });
        })
        .catch(ex => {
            console.log('parsing failed', ex);
        });
    }

    handleToggle(current, next) {
        this.setState({
            showFrame1: current,
            showFrame2: next,
        });
    }

    handleTogglePerson(personSelected, cases, current, next, after) {
        this.setState({
            personItem: personSelected,
            caseItems: cases,
            showFrame2: current,
            showFrame3: next,
            showFrame4: after,
        });
    }

    handleToggleTrait(selectedItems, traitsSelected, cases, current, next) {
        const newTrait = this.state.trait;
        newTrait.forEach((item, i) => {
            item.selected = selectedItems[i];
        });

        this.setState({
            traitItems: traitsSelected,
            caseItems: cases,
            showFrame3: current,
            showFrame4: next,
            trait: newTrait,
        });
    }

    handleToggleCase(current, frame2, frame3, reset) {
        this.setState({
            showFrame2: frame2,
            showFrame3: frame3,
            showFrame4: current,
            resetPerson: reset[0],
            resetTraits: reset[1],
        });
    }

    render() {
        return (
            <section>
                <ButtonStart
                    show={this.state.showFrame1}
                    onToggle={this.handleToggle.bind(this)}/>
                <PersonComponent
                    data={this.state.person}
                    feed={this.state.feed}
                    show={this.state.showFrame2}
                    reset={this.state.resetPerson}
                    personItem={this.state.personItem}
                    traitItems={this.state.traitItems}
                    onToggle={this.handleTogglePerson.bind(this)}/>
                <TraitComponent
                    data={this.state.trait}
                    feed={this.state.feed}
                    show={this.state.showFrame3}
                    reset={this.state.resetTraits}
                    personItem={this.state.personItem}
                    traitItems={this.state.traitItems}
                    onToggle={this.handleToggleTrait.bind(this)}/>
                <ShowCasesComponent
                    data={this.state.caseItems}
                    showFrame2={this.state.showFrame2}
                    showFrame3={this.state.showFrame3}
                    show={this.state.showFrame4}
                    personItem={this.state.personItem}
                    traitItems={this.state.traitItems}
                    onToggle={this.handleToggleCase.bind(this)}/>
            </section>
        );
    }
}

export default R29HolidayGiftCuratorComponent;
