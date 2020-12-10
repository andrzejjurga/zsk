import React, { Component } from 'react';

export class TodoBanner extends Component {
    render = () =>
        <h4 className="bg-primary text-white text-center p-2">
            Lista zadań użytkownika {this.props.name}
            (Liczba zadań: {this.props.tasks.filter(t => !t.done).length})
        </h4>
}