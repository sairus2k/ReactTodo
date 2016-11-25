const React = require('react');
const moment = require('moment');

const Todo = React.createClass({
  propTypes: {
    id: React.PropTypes.string.isRequired,
    text: React.PropTypes.string.isRequired,
    completed: React.PropTypes.bool.isRequired,
    onToggle: React.PropTypes.func.isRequired,
    createdAt: React.PropTypes.number.isRequired
  },
  render: function () {
    const { id, text, completed, onToggle, createdAt, completedAt } = this.props;
    const renderDate = () => {
      let message = 'Created';
      let timestamp = createdAt;
      if (completed) {
        message = 'Completed';
        timestamt = completedAt;
      }
      return `${message} ${moment.unix(timestamp).format('Do of MMMM YYYY @ HH:mm')}`;
    };
    return (
      <div onClick={() => {
        onToggle(id)
      }}>
        <input type="checkbox" ref="" checked={completed}/>
        <p>{text}</p>
        <p>{renderDate()}</p>
      </div>
    );
  }
});

module.exports = Todo;
