const React = require('react');

const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired
  },
  render: function () {
    const { id, text, completed, onToggle } = this.props;
    return (
      <div onClick={() => {
        onToggle(id)
      }}>
        <input type="checkbox" ref="" checked={completed}/>
        {text}
      </div>
    );
  }
});

module.exports = Todo;
