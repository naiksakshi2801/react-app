import React, { Component, PropTypes } from 'react'

function load() {
  return [
    { id: 1, name: '1' },
    { id: 2, name: '2' },
    { id: 3, name: '3' },
    { id: 4, name: '4' }
  ];
}

export default class extends Component {
  static propTypes = {
    notifyRendered: PropTypes.func
  }

  static defaultProps = {
    notifyRendered: () => {}
  }

  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  async componentDidMount() {
    const users = load();
    this.setState({ users });
  }

  componentDidUpdate() {
    this.props.notifyRendered();
  }

  render() {
    return (
      <div id="feature-object-destructuring">
        {this.state.users.map(user => {
          const { id, name } = user;
          return <div key={id}>{name}</div>
        })}
      </div>
    );
  }
}
