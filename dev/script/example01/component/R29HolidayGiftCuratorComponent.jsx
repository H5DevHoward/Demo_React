import React, {Component} from 'react';
import classNames from 'classnames';
import 'whatwg-fetch';

import ButtonStart from './ButtonStart.jsx';
import PersonComponent from './PersonComponent.jsx';
import TraitComponent from './TraitComponent.jsx';
import ShowCasesComponent from './ShowCasesComponent.jsx';

class R29HolidayGiftCuratorComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: [
                {
                    name: 'mom',
                    selected: false,
                },
                {
                    name: 'dad',
                    selected: false,
                },
                {
                    name: 's.o.',
                    selected: false,
                },
                {
                    name: 'bff',
                    selected: false,
                },
                {
                    name: 'work spouse',
                    selected: false,
                },
                {
                    name: 'surprise me',
                    selected: false,
                },
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

        this.handleToggle = this.handleToggle.bind(this);
        this.handleTogglePerson = this.handleTogglePerson.bind(this);
        this.handleToggleTrait = this.handleToggleTrait.bind(this);
        this.handleToggleCase = this.handleToggleCase.bind(this);
        this.handleReplay = this.handleReplay.bind(this);
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

    handleTogglePerson(selectedIndex, personSelected, cases, resetPerson, traits) {
        const newPerson = this.state.person;
        newPerson.forEach((item, i) => {
            if (i === selectedIndex) {
                item.selected = true;
            } else {
                item.selected = false;
            }
        });

        const newTrait = this.state.trait;
        for (let i = 0; i < newTrait.length; ++i) {
            newTrait[i].selected = false;
            for (let jj = 0; jj < traits.length; ++jj) {
                if (traits[jj] === newTrait[i].name.toLowerCase()) {
                    newTrait[i].selected = true;
                }
            }
        }

        this.setState({
            personItem: personSelected,
            trait: newTrait,
            traitItems: traits,
            caseItems: cases,
            showFrame2: false,
            showFrame3: !resetPerson,
            showFrame4: resetPerson,
        });
    }

    handleToggleTrait(selectedItems, traitsSelected, cases) {
        const newTrait = this.state.trait;
        newTrait.forEach((item, i) => {
            item.selected = selectedItems[i];
        });

        this.setState({
            traitItems: traitsSelected,
            caseItems: cases,
            showFrame3: false,
            showFrame4: true,
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

    handleReplay() {
        const newTrait = this.state.trait;
        newTrait.forEach((item, i) => {
            item.selected = false;
        });

        const newPerson = this.state.person;
        newPerson.forEach((item, i) => {
            item.selected = false;
        });

        this.setState({
            showFrame2: true,
            showFrame4: false,
            personItem: '',
            traitItems: [],
            caseItems: [],
            resetPerson: false,
            resetTraits: false,
            trait: newTrait,
            person: newPerson,
        });
    }

    render() {
        return (
            <section>
                <ButtonStart
                    show={this.state.showFrame1}
                    onToggle={this.handleToggle}
                />
                <PersonComponent
                    data={this.state.person}
                    dataTrait={this.state.trait}
                    feed={this.state.feed}
                    show={this.state.showFrame2}
                    reset={this.state.resetPerson}
                    personItem={this.state.personItem}
                    traitItems={this.state.traitItems}
                    onToggle={this.handleTogglePerson}
                />
                <TraitComponent
                    data={this.state.trait}
                    feed={this.state.feed}
                    show={this.state.showFrame3}
                    reset={this.state.resetTraits}
                    personItem={this.state.personItem}
                    traitItems={this.state.traitItems}
                    onToggle={this.handleToggleTrait}
                />
                <ShowCasesComponent
                    data={this.state.caseItems}
                    showFrame2={this.state.showFrame2}
                    showFrame3={this.state.showFrame3}
                    show={this.state.showFrame4}
                    personItem={this.state.personItem}
                    traitItems={this.state.traitItems}
                    onToggle={this.handleToggleCase}
                    replay={this.handleReplay}
                />
            </section>
        );
    }
}

export default R29HolidayGiftCuratorComponent;
